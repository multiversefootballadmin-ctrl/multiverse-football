'use client';

import Link from 'next/link';

export const getArchetypeStyles = (archetype) => {
  switch(archetype) {
    case 'QB': return { badgeBg: 'bg-red-600', badgeText: 'text-white', border: 'border-red-500', glow: 'bg-red-500', icon: '🎯', textAccent: 'text-red-500' };
    case 'RB': return { badgeBg: 'bg-emerald-600', badgeText: 'text-white', border: 'border-emerald-500', glow: 'bg-emerald-500', icon: '🏃‍♂️', textAccent: 'text-emerald-500' };
    case 'WR': return { badgeBg: 'bg-blue-600', badgeText: 'text-white', border: 'border-blue-500', glow: 'bg-blue-500', icon: '⚡', textAccent: 'text-blue-500' };
    case 'TE': return { badgeBg: 'bg-amber-500', badgeText: 'text-black', border: 'border-amber-400', glow: 'bg-amber-500', icon: '🛡️', textAccent: 'text-amber-500' };
    case 'DEF': return { badgeBg: 'bg-purple-600', badgeText: 'text-white', border: 'border-purple-500', glow: 'bg-purple-500', icon: '🧱', textAccent: 'text-purple-400' };
    default: return { badgeBg: 'bg-zinc-600', badgeText: 'text-white', border: 'border-zinc-500', glow: 'bg-zinc-500', icon: '🏈', textAccent: 'text-zinc-300' };
  }
};

export default function PlayerCard({ target }) {
  const styles = getArchetypeStyles(target.archetype);
  
  // Mock de dados rápidos caso a API real ainda não os tenha
  const trend = target.trend_delta || (Math.random() > 0.5 ? '▲' : '▼');
  const trendColor = trend === '▲' ? 'text-emerald-500' : 'text-red-500';
  const nextOpp = target.next_opponent || "vs. TBD";

  return (
    <Link 
      href={`/players/${target.id}`}
      className={`group relative bg-[#121316] border border-zinc-800 hover:${styles.border} transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${styles.glow} opacity-0 group-hover:opacity-15 blur-[50px] transition-opacity duration-500 pointer-events-none`}></div>

      <div className="p-5 flex flex-col h-full z-10">
        <div className="flex items-start justify-between mb-4">
          <span className={`px-2.5 py-1 ${styles.badgeBg} ${styles.badgeText} font-mono font-black text-[10px] tracking-widest uppercase flex items-center gap-1.5 shadow-md`}>
            {styles.icon} {target.archetype === 'DEF' ? 'D/ST' : target.archetype}
          </span>
          <div className="text-right">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block leading-none mb-1">
              WIF SCORE
            </span>
            <div className="flex items-center justify-end gap-1.5">
              <span className={`text-3xl font-black font-mono text-white group-hover:${styles.textAccent} transition-colors leading-none`}>
                {target.wif_score}
              </span>
              <span className={`text-xs ${trendColor}`}>{trend}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-5">
          <div className="overflow-hidden">
            <h3 className={`text-lg font-black text-white uppercase tracking-tighter truncate group-hover:${styles.textAccent} transition-colors`}>
              {target.name}
            </h3>
            <p className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase truncate mt-0.5">
              {target.organizations?.name || "Independent"}
            </p>
          </div>
        </div>

        <div className="bg-[#0E0F12] border border-zinc-800 p-2.5 mb-4 font-mono flex items-center justify-between">
          <div>
            <span className={`text-[9px] ${styles.textAccent} uppercase font-bold tracking-widest block mb-0.5`}>CLASS</span>
            <span className="truncate block text-white text-[10px] uppercase tracking-wider">{target.archetype_label || 'FIELD GENERAL'}</span>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block mb-0.5">NEXT</span>
            <span className="truncate block text-zinc-300 text-[10px] uppercase tracking-wider">{nextOpp}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 font-mono text-[10px] border-t border-zinc-800 bg-[#0E0F12] px-5 py-3 mt-auto">
        <div>
          <span className="text-zinc-500 tracking-widest uppercase block mb-1">METRIC</span>
          <span className="font-bold text-zinc-200 truncate block">{target.passer_eff || 'N/A'}</span>
        </div>
        <div>
          <span className="text-zinc-500 tracking-widest uppercase block mb-1">CONV.</span>
          <span className="font-bold text-zinc-200 truncate block">{target.conversion_rate || 'N/A'}</span>
        </div>
      </div>
    </Link>
  );
}