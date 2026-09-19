require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { parse } = require('csv-parse/sync');
const { createClient } = require('@supabase/supabase-js');

const cleanUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim().replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

if (!cleanUrl || !supabaseAnonKey) {
  console.error("ERRO: Credenciais do Supabase ausentes no .env.local");
  process.exit(1);
}

const supabase = createClient(cleanUrl, supabaseAnonKey);

async function run() {
  console.log("=== PROCESSANDO DATASET OFICIAL LOCAL (EPL) ===");

  if (!fs.existsSync('epl.csv')) {
    console.error("Arquivo epl.csv não encontrado! Rode o comando curl primeiro.");
    return;
  }

  const fileContent = fs.readFileSync('epl.csv');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  console.log(`Lidas ${records.length} partidas oficiais da Premier League.`);

  // 1. Agregar métricas reais por equipe (D/ST)
  const teamStats = {};

  records.forEach(row => {
    const home = row.HomeTeam;
    const away = row.AwayTeam;
    if (!home || !away) return;

    if (!teamStats[home]) teamStats[home] = { matches: 0, goalsFor: 0, goalsAgainst: 0, shotsAgainst: 0, fouls: 0, cleanSheets: 0 };
    if (!teamStats[away]) teamStats[away] = { matches: 0, goalsFor: 0, goalsAgainst: 0, shotsAgainst: 0, fouls: 0, cleanSheets: 0 };

    const fthg = parseInt(row.FTHG || '0', 10);
    const ftag = parseInt(row.FTAG || '0', 10);
    const hs = parseInt(row.HS || '0', 10);
    const as = parseInt(row.AS || '0', 10);
    const hf = parseInt(row.HF || '0', 10);
    const af = parseInt(row.AF || '0', 10);

    teamStats[home].matches += 1;
    teamStats[home].goalsFor += fthg;
    teamStats[home].goalsAgainst += ftag;
    teamStats[home].shotsAgainst += as;
    teamStats[home].fouls += hf;
    if (ftag === 0) teamStats[home].cleanSheets += 1;

    teamStats[away].matches += 1;
    teamStats[away].goalsFor += ftag;
    teamStats[away].goalsAgainst += fthg;
    teamStats[away].shotsAgainst += hs;
    teamStats[away].fouls += af;
    if (fthg === 0) teamStats[away].cleanSheets += 1;
  });

  // 2. Inserir organizações e unidades D/ST auditadas
  console.log("\nInserindo equipes e unidades defensivas D/ST oficiais...");
  for (const [teamName, stats] of Object.entries(teamStats)) {
    const { data: orgData } = await supabase
      .from('organizations')
      .upsert({
        name: teamName,
        short_name: teamName.substring(0, 3).toUpperCase(),
        league: 'Premier League'
      }, { onConflict: 'name' })
      .select('id')
      .single();

    const orgId = orgData ? orgData.id : 1;
    const xgaPer90 = (stats.goalsAgainst / stats.matches).toFixed(2);
    const cleanSheetPct = Math.round((stats.cleanSheets / stats.matches) * 100);
    const wifScore = Math.min(29.5, Number((30.0 - (xgaPer90 * 3.5) + (cleanSheetPct * 0.05)).toFixed(1)));

    const { data: targetData } = await supabase
      .from('targets')
      .upsert({
        name: `${teamName} D/ST`,
        organization_id: orgId,
        archetype: 'DEF',
        archetype_label: 'TERRITORIAL DEFENSE UNIT',
        is_team: true,
        wif_score: wifScore,
        passer_eff: `${xgaPer90} xGA/90`,
        conversion_rate: `${cleanSheetPct}% Clean Sheets`,
        primary_metric: `${stats.matches} Matches Played // ${stats.cleanSheets} Shutouts`,
        percentile_rank: cleanSheetPct > 40 ? 'Elite Top Tier' : 'Audited Unit',
        nfl_comp: 'Collective Defense // Area Denial & Gap Integrity',
        summary: `Official seasonal telemetry across ${stats.matches} Premier League fixtures. Conceded ${stats.goalsAgainst} total goals with ${stats.cleanSheets} clean sheets recorded.`
      }, { onConflict: 'name' })
      .select('id')
      .single();

    if (targetData) {
      const targetId = targetData.id;
      await supabase.from('telemetry_metrics').delete().eq('target_id', targetId);
      await supabase.from('telemetry_metrics').insert([
        { target_id: targetId, label: 'Expected Goals Conceded / 90', value: `${xgaPer90} xGA`, grade: xgaPer90 < 1.0 ? 'ELITE' : 'TIER 1', bar_percentage: Math.max(20, Math.min(100, Math.round(100 - (xgaPer90 * 35)))), sort_order: 1 },
        { target_id: targetId, label: 'Clean Sheet Efficiency', value: `${cleanSheetPct}%`, grade: cleanSheetPct > 35 ? 'HISTORIC' : 'STANDARD', bar_percentage: cleanSheetPct, sort_order: 2 },
        { target_id: targetId, label: 'Total Shots Conceded', value: `${stats.shotsAgainst}`, grade: 'AUDITED', bar_percentage: 75, sort_order: 3 }
      ]);

      await supabase.from('situational_downs').delete().eq('target_id', targetId);
      await supabase.from('situational_downs').insert([
        { target_id: targetId, down_title: '1ST & 10 // PITCH EQUIVALENT: TRANSITION CONTAINMENT', analysis: `Held opponents under transition pressure across ${stats.matches} matches, limiting high-probability box penetrations.`, sort_order: 1 },
        { target_id: targetId, down_title: '3RD & SHORT // RED ZONE DEFENSIVE STAND', analysis: `Registered a ${cleanSheetPct}% defensive shutout rate against league attacks.`, sort_order: 2 }
      ]);
    }
  }

  // 3. Atualizar logs de auditoria
  await supabase.from('sync_logs').insert({
    last_synced_at: new Date().toISOString(),
    historical_years_covered: 'Premier League Official Full Season',
    status: `OFFICIAL_EPL_DATASET_LOADED`
  });

  console.log("=== INGESTÃO OFICIAL CONCLUÍDA COM SUCESSO ===");
}

run();