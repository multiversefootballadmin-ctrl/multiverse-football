'use client';

import Link from 'next/link';

export const getArchetypeStyles = (archetype) => {
  switch(archetype) {
    case 'QB': return { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', hover: 'hover:border-red-500/70', glow: 'bg-red-500', icon: '🎯' };
    case 'RB': return { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', hover: 'hover:border-emerald-500/70', glow: 'bg-emerald-500', icon: '🏃‍♂️' };
    case 'WR': return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', hover: 'hover:border-blue-500/70', glow: 'bg-blue-500', icon: '⚡' };
    case 'TE': return { color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30', hover: 'hover:border-amber-500/70', glow: 'bg-amber-500', icon: '🛡️' };
    case 'DEF': return { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', hover: 'hover:border-purple-500/70', glow: 'bg-purple-500', icon: '🧱' };
    default: return { color: 'text-zinc-400', bg: 'bg-zinc-500/10', border: 'border-zinc-500/30', hover: 'hover:border-zinc-500/70', glow: 'bg-zinc-500', icon: '🏈' };
  }
};

export default function PlayerCard({ target }) {
  const styles = getArchetypeStyles(target.archetype);

  return (
    <Link 
      href={`/players/${target.id}`}
      className={`group relative bg-[#121316] border ${styles.border} ${styles.hover} transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${styles.glow} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 pointer-events-none`}></div>

      <div className="p-5 flex flex-col h-full z-10">
        <div className="flex items-start justify-between mb-4">
          <span className={`px-2 py-1 border ${styles.border} ${styles.color} ${styles.bg} font-mono font-bold text-[10px] tracking-widest uppercase flex items-center gap-1.5`}>
            {styles.icon} {target.archetype === 'DEF' ? 'D/ST' : target.archetype}
          </span>
          <div className="text-right">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block leading-none mb-1">
              WIF SCORE
            </span>
            <span className={`text-3xl font-black font-mono text-white group-hover:${styles.color} transition-colors leading-none`}>
              {target.wif_score}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-5">
          <div className="overflow-hidden">
            <h3 className={`text-lg font-black text-white uppercase tracking-tighter truncate group-hover:${styles.color} transition-colors`}>
              {target.name}
            </h3>
            <p className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase truncate mt-0.5">
              {target.organizations?.name || "Independent"}
            </p>
          </div>
        </div>

        <div className="bg-[#0E0F12] border border-zinc-800 p-2.5 mb-4 font-mono">
          <span className={`text-[9px] ${styles.color} uppercase font-bold tracking-widest block mb-0.5`}>
            CLASS BRIDGE
          </span>
          <span className="truncate block text-white text-[10px] uppercase tracking-wider">
            {target.archetype_label || 'FIELD GENERAL'}
          </span>
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