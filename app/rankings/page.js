'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import PlayerCard, { getArchetypeStyles } from '@/components/PlayerCard';

const ARCHETYPES = ["ALL", "QB", "RB", "WR", "TE", "DEF"];

export default function RankingsPage() {
  const [targets, setTargets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("table"); 

  const [selectedArchetype, setSelectedArchetype] = useState("ALL");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("wif_score");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);

  async function loadDatabaseData() {
    setLoading(true);
    const { data } = await supabase.from('targets').select(`*, organizations ( name, league )`);
    if (data) setTargets(data);
    setLoading(false);
  }

  useEffect(() => { loadDatabaseData(); }, []);

  function handleSort(key) {
    if (sortKey === key) setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDirection('desc'); }
  }

  const processedTargets = useMemo(() => {
    return targets
      .filter((t) => {
        const matchArch = selectedArchetype === "ALL" || t.archetype === selectedArchetype;
        const orgName = t.organizations?.name || "";
        const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || orgName.toLowerCase().includes(search.toLowerCase());
        return matchArch && matchSearch;
      })
      .sort((a, b) => sortDirection === 'asc' ? (a[sortKey] > b[sortKey] ? 1 : -1) : (a[sortKey] < b[sortKey] ? 1 : -1));
  }, [targets, selectedArchetype, search, sortKey, sortDirection]);

  const paginatedTargets = processedTargets.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(processedTargets.length / pageSize) || 1;

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      <main className="max-w-7xl mx-auto px-6 pt-12 space-y-8">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Live Draft Board
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            The <span className="text-orange-500">War Room</span>
          </h1>
        </div>
        
        {/* SEARCH & FILTERS BAR */}
        <div className="bg-[#121316] border border-zinc-800 p-5 shadow-xl space-y-5">
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-zinc-500 font-mono text-lg">🔍</span>
            <input
              type="text"
              placeholder="SEARCH BY PLAYER, FRANCHISE OR METRIC..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full bg-[#0E0F12] border border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 pl-12 pr-6 py-4 text-sm md:text-lg font-black text-white placeholder-zinc-600 focus:outline-none uppercase tracking-widest transition-all"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-zinc-800 pt-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-500 mr-2 uppercase tracking-widest">CLASS FILTER:</span>
              {ARCHETYPES.map((arch) => {
                const isSelected = selectedArchetype === arch;
                const style = arch !== 'ALL' ? getArchetypeStyles(arch) : { badgeText: 'text-white', border: 'border-zinc-500', badgeBg: 'bg-zinc-800' };
                return (
                  <button
                    key={arch}
                    onClick={() => { setSelectedArchetype(arch); setCurrentPage(1); }}
                    className={`px-4 py-1.5 text-xs font-mono font-bold tracking-widest transition-all border ${isSelected ? `${style.badgeBg} ${style.border}${style.badgeText} shadow-md` : 'bg-[#0E0F12] border-zinc-800 text-zinc-500 hover:text-white'}`}
                  >
                    {arch}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-1.5 bg-[#0E0F12] border border-zinc-800 p-1 shrink-0">
              <button onClick={() => setViewMode("table")} className={`px-4 py-1.5 text-xs font-mono font-bold tracking-widest uppercase transition ${viewMode === "table" ? "bg-orange-600 text-white" : "text-zinc-500 hover:text-white"}`}>TABLE</button>
              <button onClick={() => setViewMode("cards")} className={`px-4 py-1.5 text-xs font-mono font-bold tracking-widest uppercase transition ${viewMode === "cards" ? "bg-orange-600 text-white" : "text-zinc-500 hover:text-white"}`}>CARDS</button>
            </div>
          </div>
        </div>

        {/* RESULTS AREA */}
        {loading ? (
          <div className="py-32 text-center text-zinc-500 font-mono text-sm tracking-widest uppercase animate-pulse">
            Syncing Telemetry Databanks...
          </div>
        ) : viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedTargets.map((t) => <PlayerCard key={t.id} target={t} />)}
          </div>
        ) : (
          <div className="overflow-x-auto border border-zinc-800 bg-[#121316] shadow-xl">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#0E0F12] text-[10px] font-mono text-zinc-500 uppercase tracking-widest select-none">
                  <th className="py-4 px-5 cursor-pointer hover:text-white" onClick={() => handleSort('name')}>PLAYER TARGET {sortKey === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}</th>
                  <th className="py-4 px-5 cursor-pointer hover:text-white" onClick={() => handleSort('archetype')}>CLASS {sortKey === 'archetype' && (sortDirection === 'asc' ? '↑' : '↓')}</th>
                  <th className="py-4 px-5 text-center text-zinc-600">FORM</th>
                  <th className="py-4 px-5 text-zinc-600">NEXT MATCH</th>
                  <th className="py-4 px-5 cursor-pointer hover:text-white" onClick={() => handleSort('passer_eff')}>PRIMARY METRIC {sortKey === 'passer_eff' && (sortDirection === 'asc' ? '↑' : '↓')}</th>
                  <th className="py-4 px-5 text-right font-bold text-orange-500 cursor-pointer hover:text-orange-400" onClick={() => handleSort('wif_score')}>WIF SCORE {sortKey === 'wif_score' && (sortDirection === 'asc' ? '↑' : '↓')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs font-mono">
                {paginatedTargets.map((t) => {
                  const s = getArchetypeStyles(t.archetype);
                  const trend = t.trend_delta || (Math.random() > 0.5 ? '▲' : '▼');
                  return (
                    <tr key={t.id} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 px-5">
                        <Link href={`/players/${t.id}`} className="font-bold text-white text-sm hover:text-orange-400 uppercase tracking-wider">{t.name}</Link>
                        <span className="block text-[10px] text-zinc-500 tracking-widest mt-0.5">{t.organizations?.name || "Free Agent"}</span>
                      </td>
                      <td className="py-4 px-5">
                        <span className={`px-2 py-1 border ${s.border} ${s.badgeText} ${s.badgeBg} font-bold tracking-widest text-[10px]`}>{s.icon} {t.archetype}</span>
                      </td>
                      <td className="py-4 px-5 text-center">
                        <span className={`text-sm ${trend === '▲' ? 'text-emerald-500' : 'text-red-500'}`}>{trend}</span>
                      </td>
                      <td className="py-4 px-5 text-zinc-400 uppercase tracking-wider">
                        {t.next_opponent || "vs. TBD"}
                      </td>
                      <td className="py-4 px-5 text-zinc-400">
                        {t.passer_eff || "AWAITING DATA"}
                      </td>
                      <td className="py-4 px-5 text-right font-black text-white text-base bg-[#0E0F12]/50">{t.wif_score}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* PAGINATION */}
        {!loading && processedTargets.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500 pt-4">
            <div>
              SHOWING <span className="text-white font-bold">{(currentPage - 1) * pageSize + 1}</span> TO <span className="text-white font-bold">{Math.min(currentPage * pageSize, processedTargets.length)}</span> OF <span className="text-white font-bold">{processedTargets.length}</span> TARGETS
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 bg-[#121316] border border-zinc-800 disabled:opacity-30 hover:border-zinc-600 hover:text-white transition-colors">PREV</button>
              <span className="px-4 py-2 text-white font-bold">{currentPage} / {totalPages}</span>
              <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-[#121316] border border-zinc-800 disabled:opacity-30 hover:border-zinc-600 hover:text-white transition-colors">NEXT</button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}