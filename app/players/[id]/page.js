'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getArchetypeStyles } from '@/components/PlayerCard';

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
        Loading Telemetry...
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

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      
      {/* PROFILE HERO */}
      <section className={`relative w-full pt-20 pb-16 border-b ${styles.border} bg-[#121316] overflow-hidden`}>
        <div className={`absolute inset-0 ${styles.glow} opacity-5 blur-[100px] pointer-events-none`}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Link href="/rankings" className="inline-flex items-center text-[10px] font-mono text-zinc-500 hover:text-white uppercase tracking-widest mb-10 transition-colors">
            ← Back to War Room
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1.5 ${styles.badgeBg} ${styles.badgeText} font-mono font-black text-xs tracking-widest uppercase flex items-center gap-2 shadow-lg`}>
                  {styles.icon} {player.archetype === 'DEF' ? 'D/ST' : player.archetype}
                </span>
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
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
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">WIF Score</span>
              <span className={`text-6xl font-black font-mono ${styles.textAccent} leading-none block`}>
                {player.wif_score}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS GRID */}
      <section className="max-w-5xl mx-auto px-6 pt-16">
        <h2 className="text-xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-3 mb-8">
          Telemetry Breakdown
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#121316] border border-zinc-800 p-6 space-y-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Primary Output Metric</span>
            <div className="text-3xl font-black text-white">{player.passer_eff || 'N/A'}</div>
          </div>
          
          <div className="bg-[#121316] border border-zinc-800 p-6 space-y-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Situational Conversion</span>
            <div className="text-3xl font-black text-white">{player.conversion_rate || 'N/A'}</div>
          </div>
        </div>
      </section>
    </div>
  );
}