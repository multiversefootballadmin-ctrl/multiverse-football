require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const cleanUrl = rawUrl.trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();
const apiKey = process.env.API_FOOTBALL_KEY;

if (!cleanUrl || !supabaseAnonKey || !apiKey) {
  console.error("ERRO: Verifique se NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY e API_FOOTBALL_KEY estão configurados no .env.local");
  process.exit(1);
}

const supabase = createClient(cleanUrl, supabaseAnonKey);

// Configuração da ingestão
const LEAGUE_ID = 39;      // Premier League
const SEASON = 2024;        // Temporada mais recente consolidada na API
const PAGES_TO_SYNC = 15;   // 15 páginas = ~300 atletas em uma execução (gasta 15 requisições das 100 diárias)

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runLiveIngestion() {
  console.log(`=== INICIANDO INGESTÃO FACTUAL // API-SPORTS (LEAGUE ${LEAGUE_ID} - SEASON ${SEASON}) ===`);
  
  let totalSaved = 0;

  for (let page = 1; page <= PAGES_TO_SYNC; page++) {
    console.log(`\nConsultando página ${page} de ${PAGES_TO_SYNC}...`);

    try {
      const res = await fetch(`https://v3.football.api-sports.io/players?league=${LEAGUE_ID}&season=${SEASON}&page=${page}`, {
        headers: { 'x-apisports-key': apiKey }
      });

      const data = await res.json();

      if (data.errors && Object.keys(data.errors).length > 0) {
        console.error(`Erro da API na página ${page}:`, data.errors);
        break;
      }

      const playersList = data.response || [];
      if (playersList.length === 0) {
        console.log(`Nenhum registro retornado na página ${page}. Encerrando loop.`);
        break;
      }

      for (const item of playersList) {
        const p = item.player;
        const stats = item.statistics?.[0] || {};
        const team = stats.team || { name: 'Independent Club' };

        // 1. Organização estritamente da API
        const { data: orgData } = await supabase
          .from('organizations')
          .upsert({
            name: team.name,
            short_name: team.name.substring(0, 3).toUpperCase(),
            league: stats.league?.name || 'Premier League'
          }, { onConflict: 'name' })
          .select('id')
          .single();

        const orgId = orgData?.id || 1;

        // 2. Mapeamento de arquétipos esportivos
        const pos = (stats.games?.position || '').toLowerCase();
        let archetype = 'WR';
        let archetypeLabel = 'DEEP SEPARATOR';
        let nflComp = 'Boundary Receiver // Separation & Acceleration';

        if (pos.includes('midfield')) {
          archetype = 'QB';
          archetypeLabel = 'FIELD GENERAL';
          nflComp = 'Field General // Pocket Vision & Distribution';
        } else if (pos.includes('att') || pos.includes('forw')) {
          archetype = 'RB';
          archetypeLabel = 'GROUND FORCE';
          nflComp = 'Power Runner // Goal Line Physicality';
        } else if (pos.includes('def')) {
          archetype = 'DEF';
          archetypeLabel = 'TERRITORIAL LOCK';
          nflComp = 'Anchor Defender // Area Denial & Gap Control';
        }

        const goals = stats.goals?.total || 0;
        const assists = stats.goals?.assists || 0;
        const appearances = stats.games?.appearences || 0;
        const passesAcc = stats.passes?.accuracy || 75;
        const duelsWon = stats.duels?.won || 0;
        const tackles = stats.tackles?.total || 0;

        const wif = Math.min(
          29.8,
          Number((21.0 + (goals * 0.25) + (assists * 0.3) + (duelsWon * 0.03) + (tackles * 0.05)).toFixed(1))
        );

        // 3. Upsert do Atleta com dados factuais
        const { data: targetData, error: targetErr } = await supabase
          .from('targets')
          .upsert({
            name: p.name,
            organization_id: orgId,
            archetype: archetype,
            archetype_label: archetypeLabel,
            is_team: false,
            wif_score: wif,
            passer_eff: `${passesAcc}% Pass Acc`,
            conversion_rate: `${stats.shots?.total ? Math.round((goals / stats.shots.total) * 100) : 10}% Conv.`,
            primary_metric: `${appearances} Apps // ${goals}G ${assists}A`,
            percentile_rank: 'Audited Telemetry',
            nfl_comp: nflComp,
            summary: `Official API-Sports tracking telemetry for ${p.name} at ${team.name}. Recorded ${appearances} appearances, ${goals} goals, ${assists} assists, and ${passesAcc}% pass accuracy.`
          }, { onConflict: 'name' })
          .select('id')
          .single();

        if (targetErr || !targetData) continue;

        const targetId = targetData.id;

        // 4. Métricas auditadas em inglês
        await supabase.from('telemetry_metrics').delete().eq('target_id', targetId);
        await supabase.from('telemetry_metrics').insert([
          {
            target_id: targetId,
            label: 'Pass Distribution Efficiency',
            value: `${passesAcc}%`,
            grade: passesAcc >= 85 ? 'ELITE' : 'TIER 1',
            bar_percentage: Math.min(100, passesAcc),
            sort_order: 1
          },
          {
            target_id: targetId,
            label: 'Contested Duels Won',
            value: String(duelsWon),
            grade: duelsWon > 30 ? 'HIGH IMPACT' : 'STANDARD',
            bar_percentage: Math.min(100, duelsWon * 2),
            sort_order: 2
          },
          {
            target_id: targetId,
            label: 'Defensive Takeaways',
            value: String(tackles),
            grade: tackles > 15 ? 'HIGH IMPACT' : 'TIER 2',
            bar_percentage: Math.min(100, tackles * 3),
            sort_order: 3
          }
        ]);

        // 5. Situational Downs em inglês
        await supabase.from('situational_downs').delete().eq('target_id', targetId);
        await supabase.from('situational_downs').insert([
          {
            target_id: targetId,
            down_title: '1ST & 10 // FORMATIONAL ADVANCEMENT',
            analysis: `Deployed within ${team.name}'s structure, driving transitions with ${passesAcc}% distribution security.`,
            sort_order: 1
          },
          {
            target_id: targetId,
            down_title: '3RD & SHORT // CONTESTED LEVERAGE',
            analysis: `Logged ${duelsWon} contested duels and ${goals} direct scoring conversions under active pressure.`,
            sort_order: 2
          }
        ]);

        totalSaved++;
      }

      console.log(`Página ${page} concluída. Total acumulado: ${totalSaved} atletas.`);
      // Pausa de 1 segundo para respeitar o rate limit da API
      await sleep(1000);

    } catch (err) {
      console.error(`Erro ao processar página ${page}:`, err.message);
    }
  }

  // 6. Atualizar log de sincronização
  await supabase.from('sync_logs').insert({
    last_synced_at: new Date().toISOString(),
    historical_years_covered: `Season ${SEASON}`,
    status: `LIVE_SYNC_${totalSaved}_PLAYERS`
  });

  console.log(`\n=== INGESTÃO CONCLUÍDA: ${totalSaved} ATLETAS REAIS INSERIDOS NO SUPABASE ===`);
}

runLiveIngestion();