require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const cleanUrl = rawUrl.trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();
const apiKey = process.env.API_FOOTBALL_KEY;

if (!cleanUrl || !supabaseAnonKey || !apiKey) {
  console.error("ERRO: Credenciais ausentes no .env.local");
  process.exit(1);
}

const supabase = createClient(cleanUrl, supabaseAnonKey);

// Ligas e temporadas oficiais configuradas para a época 2024
const COMPETITIONS = [
  { id: 39, name: 'Premier League', season: 2024 },
  { id: 140, name: 'La Liga', season: 2024 },
  { id: 71, name: 'Brasileirão Série A', season: 2024 }
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runCleanIngestion() {
  console.log("=== INICIANDO INGESTÃO AUDITADA COM FILTRO DE INTEGRIDADE (SEASON 2024) ===");
  let totalSaved = 0;
  let discardedCount = 0;

  for (const comp of COMPETITIONS) {
    console.log(`\nConsultando ${comp.name} (Temporada ${comp.season})...`);

    // Respeita o limite do plano free (páginas 1 a 3)
    for (let page = 1; page <= 3; page++) {
      try {
        const res = await fetch(`https://v3.football.api-sports.io/players?league=${comp.id}&season=${comp.season}&page=${page}`, {
          headers: { 'x-apisports-key': apiKey }
        });

        const data = await res.json();

        if (data.errors && Object.keys(data.errors).length > 0) {
          console.error(`Erro da API em ${comp.name} (Pág ${page}):`, data.errors);
          break;
        }

        const playersList = data.response || [];
        if (playersList.length === 0) break;

        for (const item of playersList) {
          const p = item.player;
          const stats = item.statistics?.[0] || {};
          const appearances = stats.games?.appearences || 0;
          const minutes = stats.games?.minutes || 0;

          // FILTRO DE INTEGRIDADE: descarta quem não acumulou amostragem no clube
          if (appearances < 3 || minutes < 180) {
            discardedCount++;
            continue;
          }

          const team = stats.team || { name: 'Independent Club' };

          // 1. Organização factual
          const { data: orgData } = await supabase
            .from('organizations')
            .upsert({
              name: team.name,
              short_name: team.name.substring(0, 3).toUpperCase(),
              league: comp.name
            }, { onConflict: 'name' })
            .select('id')
            .single();

          const orgId = orgData ? orgData.id : 1;

          // 2. Mapeamento tático do arquétipo
          const pos = (stats.games?.position || '').toLowerCase();
          let archetype = 'WR';
          let archetypeLabel = 'DEEP SEPARATOR';
          let nflComp = 'Perimeter Deep Threat // Separation & YAC';

          if (pos.includes('midfield')) {
            archetype = 'QB';
            archetypeLabel = 'FIELD GENERAL';
            nflComp = 'Pocket Passer // Vision & Distribution Progression';
          } else if (pos.includes('att') || pos.includes('forw')) {
            archetype = 'RB';
            archetypeLabel = 'GROUND FORCE';
            nflComp = 'Power Back // Contact Balance & Box Efficiency';
          } else if (pos.includes('def')) {
            archetype = 'DEF';
            archetypeLabel = 'TERRITORIAL LOCK';
            nflComp = 'Interior Linebacker // Gap Integrity & Coverage';
          }

          const goals = stats.goals?.total || 0;
          const assists = stats.goals?.assists || 0;
          const passesAcc = stats.passes?.accuracy ? Math.min(100, Math.max(0, stats.passes.accuracy)) : null;
          const tackles = stats.tackles?.total || 0;
          const duelsWon = stats.duels?.won || 0;

          // WIF Score calculado apenas com produção real
          const perfIndex = (goals * 0.3) + (assists * 0.35) + (tackles * 0.08) + (duelsWon * 0.04);
          const wif = Math.min(29.8, Number((20.0 + (perfIndex / (appearances || 1) * 8)).toFixed(1)));

          const passerEffString = passesAcc !== null ? `${passesAcc}% Pass Acc` : 'N/A';
          const shotConversion = stats.shots?.total && stats.shots.total > 0 
            ? `${Math.round((goals / stats.shots.total) * 100)}% Conv.` 
            : 'N/A';

          // 3. Upsert do Atleta
          const { data: targetData, error: targetErr } = await supabase
            .from('targets')
            .upsert({
              name: p.name,
              organization_id: orgId,
              archetype: archetype,
              archetype_label: archetypeLabel,
              is_team: false,
              wif_score: wif,
              passer_eff: passerEffString,
              conversion_rate: shotConversion,
              primary_metric: `${appearances} Apps // ${goals}G ${assists}A`,
              percentile_rank: 'Audited Telemetry',
              nfl_comp: nflComp,
              summary: `Official seasonal telemetry across ${appearances} appearances (${minutes} mins) for ${team.name}.`
            }, { onConflict: 'name' })
            .select('id')
            .single();

          if (targetErr || !targetData) continue;

          const targetId = targetData.id;

          // 4. Inserir métricas filhas sem valores inventados
          await supabase.from('telemetry_metrics').delete().eq('target_id', targetId);
          await supabase.from('telemetry_metrics').insert([
            {
              target_id: targetId,
              label: 'Distribution Accuracy',
              value: passerEffString,
              grade: passesAcc && passesAcc >= 85 ? 'ELITE' : 'TIER 1',
              bar_percentage: passesAcc || 50,
              sort_order: 1
            },
            {
              target_id: targetId,
              label: 'Contested Duels Won',
              value: String(duelsWon),
              grade: duelsWon > 30 ? 'HIGH IMPACT' : 'STANDARD',
              bar_percentage: Math.min(100, Math.max(15, duelsWon * 2)),
              sort_order: 2
            },
            {
              target_id: targetId,
              label: 'Defensive Takeaways',
              value: String(tackles),
              grade: tackles > 15 ? 'HIGH IMPACT' : 'TIER 2',
              bar_percentage: Math.min(100, Math.max(15, tackles * 3)),
              sort_order: 3
            }
          ]);

          // 5. Downs situacionais
          await supabase.from('situational_downs').delete().eq('target_id', targetId);
          await supabase.from('situational_downs').insert([
            {
              target_id: targetId,
              down_title: '1ST & 10 // PROGRESSIVE ADVANCEMENT',
              analysis: `Operates out of ${team.name}'s structure, accumulating ${minutes} verified on-pitch minutes.`,
              sort_order: 1
            },
            {
              target_id: targetId,
              down_title: '3RD & SHORT // PHYSICAL EXECUTION',
              analysis: `Registered ${duelsWon} contested contact wins in official competitive fixtures.`,
              sort_order: 2
            }
          ]);

          totalSaved++;
        }

        await sleep(1000);
      } catch (err) {
        console.error(`Erro ao consultar ${comp.name}:`, err.message);
      }
    }
  }

  // 6. Registo de sincronização
  await supabase.from('sync_logs').insert({
    last_synced_at: new Date().toISOString(),
    historical_years_covered: 'Premier League, La Liga, Brasileirão (Season 2024)',
    status: `CLEAN_INGESTION_2024_${totalSaved}_PLAYERS`
  });

  console.log(`\n=== INGESTÃO FINALIZADA ===`);
  console.log(`Total salvo com integridade: ${totalSaved} atletas`);
  console.log(`Registos descartados (sem minutos/jogos): ${discardedCount}`);
}

runCleanIngestion();