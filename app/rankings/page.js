'use client';
import { useState, useEffect } from 'react';

export default function RankingsPage() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 50;

  useEffect(() => {
    fetch('/data/players.json')
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = players.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.club.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / limit);
  const displayed = filtered.slice((page - 1) * limit, page * limit);

  const getPosBadge = (pos) => {
    switch (pos) {
      case 'QB': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'RB': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'WR': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'TE': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
    }
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <span className="text-emerald-400">▲</span>;
    if (trend === 'down') return <span className="text-red-400">▼</span>;
    return <span className="text-zinc-500">▬</span>;
  };

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="space-y-4 mb-10 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
          Live Database • {players.length} Active Players
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">THE WAR ROOM</h1>
        
        {/* BARRA DE PESQUISA */}
        <div className="pt-4">
          <input 
            type="text" 
            placeholder="Search by player name or club..." 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full sm:max-w-md bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-orange-500 transition-colors font-mono text-sm"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 font-mono text-orange-500 animate-pulse">Syncing Telemetry...</div>
      ) : (
        <div className="bg-[#14161B] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs whitespace-nowrap">
              <thead className="bg-zinc-900 text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
                <tr>
                  <th className="p-4 font-bold w-12">Rank</th>
                  <th className="p-4 font-bold">Player</th>
                  <th className="p-4 font-bold">Archetype</th>
                  <th className="p-4 font-bold hidden md:table-cell">Key Telemetry</th>
                  <th className="p-4 font-bold text-right text-purple-400">xWIF / 90</th>
                  <th className="p-4 font-bold text-right text-orange-400">WIF / 90</th>
                  <th className="p-4 font-bold text-center w-12">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {displayed.map((p, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="p-4 font-black text-zinc-500">{p.rank}</td>
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{p.name}</div>
                      <div className="text-[10px] text-zinc-500 mt-1">{p.club}</div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-block w-10 text-center py-1 rounded text-[10px] font-black border ${getPosBadge(p.pos)}`}>{p.pos}</span>
                    </td>
                    <td className="p-4 hidden md:table-cell text-[10px] text-zinc-400">{p.stats}</td>
                    <td className="p-4 text-right font-bold text-purple-400">{p.xWif}</td>
                    <td className="p-4 text-right font-black text-orange-400 text-base">{p.wif}</td>
                    <td className="p-4 text-center text-sm">{getTrendIcon(p.trend)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINAÇÃO */}
          <div className="bg-zinc-950 p-4 border-t border-zinc-800 flex justify-between items-center font-mono text-xs">
            <button 
              disabled={page === 1} 
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border border-zinc-700 rounded text-zinc-400 disabled:opacity-30 hover:bg-zinc-800"
            >
              ← PREV
            </button>
            <span className="text-zinc-500">PAGE {page} OF {totalPages || 1}</span>
            <button 
              disabled={page >= totalPages} 
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border border-zinc-700 rounded text-zinc-400 disabled:opacity-30 hover:bg-zinc-800"
            >
              NEXT →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
