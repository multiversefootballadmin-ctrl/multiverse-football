'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mapeamento de fotos reais de alta definição dos principais atletas
const PLAYER_PHOTO_MAP = {
  'kevin de bruyne': 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&auto=format&fit=crop&q=80',
  'rodri': 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=200&auto=format&fit=crop&q=80',
  'erling haaland': 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&auto=format&fit=crop&q=80',
  'vinícius júnior': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&auto=format&fit=crop&q=80',
  'vinicius junior': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=200&auto=format&fit=crop&q=80',
  'bukayo saka': 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=200&auto=format&fit=crop&q=80',
  'declan rice': 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=200&auto=format&fit=crop&q=80',
  'pedro': 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&auto=format&fit=crop&q=80',
  'lionel messi': 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&auto=format&fit=crop&q=80',
  'matheus cunha': 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=200&auto=format&fit=crop&q=80'
};

export default function PlayerCard({ target }) {
  const isDef = target.archetype === 'DEF';
  const cleanName = (target.name || '').toLowerCase().trim();

  // Foto dinâmica mapeada ou gerada com badge estilizado
  const initialPhoto = PLAYER_PHOTO_MAP[cleanName] || 
    (target.is_team 
      ? `https://ui-avatars.com/api/?name=${encodeURIComponent(target.name)}&background=1E2026&color=EF4444&size=200&bold=true`
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(target.name)}&background=18191E&color=F97316&size=200&bold=true`);

  const [imgSrc, setImgSrc] = useState(initialPhoto);

  const archetypeGlow = {
    QB: 'from-amber-500/20 via-orange-500/10 to-transparent border-orange-500/40 text-orange-400',
    RB: 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 text-emerald-400',
    WR: 'from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/40 text-blue-400',
    TE: 'from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/40 text-purple-400',
    DEF: 'from-red-500/20 via-rose-500/10 to-transparent border-red-500/40 text-red-400'
  }[target.archetype] || 'from-orange-500/20 via-orange-500/10 to-transparent border-orange-500/40 text-orange-400';

  const badgeColor = isDef
    ? 'border-red-500/50 text-red-400 bg-red-500/10'
    : 'border-orange-500/50 text-orange-400 bg-orange-500/10';

  return (
    <Link 
      href={`/players/${target.id}`}
      className={`group relative rounded-2xl bg-gradient-to-b ${archetypeGlow} bg-[#141519] border hover:border-orange-500 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 p-5 flex flex-col justify-between overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div>
        {/* Topo do Card: Posição NFL e WIF Score */}
        <div className="flex items-start justify-between mb-3">
          <span className={`px-2.5 py-1 rounded-lg border font-mono font-black text-xs tracking-wider uppercase ${badgeColor}`}>
            {target.archetype === 'DEF' ? 'D/ST' : target.archetype}
          </span>
          <div className="text-right">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block leading-none">
              OVERALL WIF
            </span>
            <span className="text-3xl font-black font-mono text-white group-hover:text-orange-400 transition leading-tight">
              {target.wif_score}
            </span>
          </div>
        </div>

        {/* Foto do Atleta & Detalhes */}
        <div className="flex items-center gap-3.5 my-3">
          <div className="w-16 h-16 rounded-2xl ring-2 ring-zinc-700/60 overflow-hidden bg-zinc-900 shrink-0 group-hover:ring-orange-500 transition shadow-md">
            <img 
              src={imgSrc} 
              alt={target.name}
              onError={() => setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(target.name)}&background=18191E&color=F97316&size=200&bold=true`)}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <h3 className="text-base font-black text-white font-sans tracking-tight group-hover:text-orange-400 transition truncate">
              {target.name}
            </h3>
            <p className="text-xs font-mono text-zinc-400 truncate">
              {target.organizations?.name || "Independent Club"}
            </p>
            <span className="text-[10px] font-mono text-zinc-500 block truncate">
              {target.organizations?.league || "Premier League"}
            </span>
          </div>
        </div>

        {/* Badge do Arquétipo NFL */}
        <div className="bg-[#0E0F12]/80 border border-zinc-800 rounded-xl p-2.5 mb-4 font-mono text-[11px]">
          <span className="text-[9px] text-orange-400 uppercase font-bold tracking-wider block mb-0.5">
            NFL ARCHETYPE
          </span>
          <span className="truncate block text-zinc-200 font-medium">
            {target.archetype_label || 'FIELD GENERAL'}
          </span>
        </div>
      </div>

      {/* Métricas Rápidas */}
      <div className="grid grid-cols-2 gap-2 font-mono text-xs border-t border-zinc-800/80 pt-3 bg-black/20 -mx-5 -mb-5 px-5 py-3">
        <div>
          <span className="text-zinc-500 text-[9px] uppercase block">PASS / METRIC</span>
          <span className="font-bold text-zinc-200 truncate block">{target.passer_eff || 'N/A'}</span>
        </div>
        <div>
          <span className="text-zinc-500 text-[9px] uppercase block">CONVERSION</span>
          <span className="font-bold text-zinc-200 truncate block">{target.conversion_rate || 'N/A'}</span>
        </div>
      </div>
    </Link>
  );
}