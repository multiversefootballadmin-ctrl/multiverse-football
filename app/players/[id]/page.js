'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getArchetypeStyles } from '@/components/PlayerCard';

// Função para gerar dados simulados realistas baseados na posição até termos a API real
const generateMockTelemetry = (archetype) => {
  const logs = [
    { date: "Oct 18, 2026", opp: "vs. MAD", soccer: "1 Goal, 4 Take-ons", nfl: "1 Rush TD, 48 YAC", wif: "22.4" },
    { date: "Oct 11, 2026", opp: "@ MUN", soccer: "2 Key Passes, 0.8 xA", nfl: "2 Pass TD, 180 Air Yds", wif: "18.1" },
    { date: "Oct 04, 2026", opp: "vs. CHE", soccer: "Clean Sheet, 6 Tackles", nfl: "0 Pts Allowed, 2 Sacks", wif: "14.0" },
  ];

  switch(archetype) {
    case 'QB': return {
      soccer: [{ label: "Expected Assists (xA)", val: "0.84" }, { label: "Progressive Passes", val: "12.4" }, { label: "Pass Completion", val: "88%" }],
      nfl: [{ label: "Passing Yards Eq.", val: "312.5" }, { label: "3rd Down Conv.", val: "68%" }, { label: "Passer Rating", val: "104.2" }],
      logs
    };
    case 'WR': return {
      soccer: [{ label: "Successful Take-ons", val: "4.8" }, { label: "Box Entries", val: "6.2" }, { label: "Expected Goals (xG)", val: "0.65" }],
      nfl: [{ label: "Yards After Catch", val: "84.0" }, { label: "Target Share", val: "28%" }, { label: "Separation Rate", val: "Elite" }],
      logs
    };
    case 'RB': return {
      soccer: [{ label: "Progressive Carries", val: "8.1" }, { label: "Shots in Box", val: "3.4" }, { label: "Expected Goals (xG)", val: "0.92" }],
      nfl: [{ label: "Rushing Yards Eq.", val: "94.5" }, { label: "Broken Tackles", val: "6" }, { label: "Red Zone Touchdowns", val: "1.2" }],
      logs
    };
    case 'TE': return {
      soccer: [{ label: "Aerial Duels Won", val: "4.5" }, { label: "Hold-up Play Score", val: "82" }, { label: "Key Passes", val: "1.8" }],
      nfl: [{ label: "Contested Catches", val: "3.2" }, { label: "Receiving Yards Eq.", val: "56.0" }, { label: "Red Zone Targets", val: "2.1" }],
      logs
    };
    case 'DEF': return {
      soccer: [{ label: "Interceptions", val: "2.4" }, { label: "Clearances", val: "5.1" }, { label: "Goals Conceded", val: "0.8" }],
      nfl: [{ label: "Turnovers Forced", val: "1.8" }, { label: "Sacks Eq.", val: "2.5" }, { label: "Points Allowed", val: "14.2" }],
      logs
    };
    default: return {
      soccer: [{ label: "Touches", val: "64.0" }, { label: "Passes", val: "45.0" }, { label: "Rating", val: "7.2" }],
      nfl: [{ label: "Total Yards Eq.", val: "120.0" }, { label: "First Downs", val: "4" }, { label: "Impact Score", val: "B+" }],
      logs
    };
  }
};

export default function PlayerProfile() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlayer() {
      const { data } = await supabase
        .from('targets')
        .select('*, organizations(name, league)')
        .eq('id', id)
        .single();
      
      setPlayer(data);
      setLoading(false);
    }
    if (id) loadPlayer();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0E0F12] flex items-center justify-center font-mono text-zinc-500 uppercase tracking-widest text-xs">
        Syncing Telemetry...
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen bg-[#0E0F12] flex flex-col items-center justify-center font-mono space-y-4">
        <div className="text-orange-500 uppercase tracking-widest text-sm">Target Not Found</div>
        <Link href="/rankings" className="text-white border border-zinc-700 px-4 py-2 text-xs hover:bg-zinc-900 transition">Return to War Room</Link>
      </div>
    );
  }

  const styles = getArchetypeStyles(player.archetype);
  const mockData = generateMockTelemetry(player.archetype);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      
      {/* PROFILE HERO */}
      <section className={`relative w-full pt-16 pb-12 border-b ${styles.border} bg-[#121316] overflow-hidden`}>
        <div className={`absolute inset-0 ${styles.glow} opacity-[0.03] blur-[100px] pointer-events-none`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link href="/rankings" className="inline-flex items-center text-[10px] font-mono text-zinc-500 hover:text-white uppercase tracking-widest mb-10 transition-colors">
            ← Back to War Room
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1.5 ${styles.badgeBg} ${styles.badgeText} font-mono font-black text-xs tracking-widest uppercase flex items-center gap-2 shadow-lg`}>
                  {styles.icon} {player.archetype === 'DEF' ? 'D/ST' : player.archetype}
                </span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest border-l border-zinc-700 pl-3">
                  {player.organizations?.name || "Independent"}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-2">
                {player.name}
              </h1>
              <p className={`text-sm font-mono ${styles.textAccent} uppercase tracking-widest font-bold`}>
                NFL Equivalent: {player.archetype_label || 'FIELD GENERAL'}
              </p>
            </div>

            <div className={`bg-[#0E0F12] border ${styles.border} p-6 md:p-8 min-w-[200px] text-center shadow-2xl`}>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Composite WIF Score</span>
              <span className={`text-6xl font-black font-mono ${styles.textAccent} leading-none block`}>
                {player.wif_score}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THE DIMENSIONAL BOXSCORE */}
      <section className="max-w-6xl mx-auto px-6 pt-16">
        <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-3">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            The Dimensional Boxscore
          </h2>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Season Averages (Per 90)</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soccer Origin Box */}
          <div className="bg-[#121316] border border-zinc-800 shadow-xl overflow-hidden">
            <div className="bg-[#0E0F12] p-4 border-b border-zinc-800 flex items-center gap-3">
              <span className="text-xl">⚽</span>
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-300">Pitch Telemetry (Origin)</h3>
            </div>
            <div className="p-6 space-y-6">
              {mockData.soccer.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-zinc-800/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-zinc-400 font-light">{stat.label}</span>
                  <span className="text-xl font-black text-white font-mono">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NFL Translation Box */}
          <div className="bg-[#121316] border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.05)] overflow-hidden">
            <div className="bg-[#0E0F12] p-4 border-b border-zinc-800 flex items-center gap-3">
              <span className="text-xl">🏈</span>
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-orange-500">Gridiron Output (Translated)</h3>
            </div>
            <div className="p-6 space-y-6">
              {mockData.nfl.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-zinc-800/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-zinc-400 font-light">{stat.label}</span>
                  <span className={`text-xl font-black font-mono ${styles.textAccent}`}>{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GAME LOG / RECENT INCURSIONS */}
      <section className="max-w-6xl mx-auto px-6 pt-16">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            Recent Incursions
          </h2>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Last 3 Matchdays</span>
        </div>

        <div className="overflow-x-auto border border-zinc-800 bg-[#121316]">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-[#0E0F12] font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                <th className="p-4 border-b border-zinc-800">Date</th>
                <th className="p-4 border-b border-zinc-800">Matchup</th>
                <th className="p-4 border-b border-zinc-800">Soccer Action (Raw)</th>
                <th className="p-4 border-b border-zinc-800">NFL Conversion</th>
                <th className="p-4 border-b border-zinc-800 text-right text-orange-500 font-bold">WIF Yield</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-sm">
              {mockData.logs.map((log, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="p-4 font-mono text-xs text-zinc-400">{log.date}</td>
                  <td className="p-4 font-bold text-white uppercase tracking-wider">{log.opp}</td>
                  <td className="p-4 text-zinc-300 font-light">{log.soccer}</td>
                  <td className="p-4 text-zinc-300 font-light">{log.nfl}</td>
                  <td className={`p-4 text-right font-mono font-black text-lg ${styles.textAccent}`}>{log.wif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}