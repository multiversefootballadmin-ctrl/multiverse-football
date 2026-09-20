'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import PlayerCard from '@/components/PlayerCard';

const ARCHETYPES = ["ALL", "QB", "RB", "WR", "TE", "DEF"];

export default function RankingsPage() {
  const [targets, setTargets] = useState([]);
  const [syncMeta, setSyncMeta] = useState({ 
    last_synced_at: null, 
    historical_years_covered: '5 Seasons (2021-2026)' 
  });
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("cards");

  const [selectedArchetype, setSelectedArchetype] = useState("ALL");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("wif_score");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  async function loadDatabaseData() {
    setLoading(true);
    const { data: targetsData } = await supabase
      .from('targets')
      .select(`
        id, name, archetype, archetype_label, is_team, wif_score, passer_eff, conversion_rate, primary_metric,
        organizations ( name, league )
      `);
    if (targetsData) setTargets(targetsData);

    const { data: metaData } = await supabase
      .from('sync_logs')
      .select('*')
      .order('last_synced_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (metaData) setSyncMeta(metaData);
    
    setLoading(false);
  }

  useEffect(() => {
    loadDatabaseData();
  }, []);

  function handleSort(columnKey) {
    if (sortKey === columnKey) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(columnKey);
      setSortDirection('desc');
    }
    setCurrentPage(1);
  }

  const processedTargets = useMemo(() => {
    return targets
      .filter((target) => {
        const matchesArchetype = selectedArchetype === "ALL" || target.archetype === selectedArchetype;
        const orgName = target.organizations?.name || "";
        const matchesSearch = target.name.toLowerCase().includes(search.toLowerCase()) ||
                              orgName.toLowerCase().includes(search.toLowerCase());
        return matchesArchetype && matchesSearch;
      })
      .sort((a, b) => {
        let aVal = a[sortKey];
        let bVal = b[sortKey];
        if (sortKey === 'organization') {
          aVal = a.organizations?.name || '';
          bVal = b.organizations?.name || '';
        }
        if (typeof aVal === 'string') {
          return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        return sortDirection === 'asc' ? (aVal - bVal) : (bVal - aVal);
      });
  }, [targets, selectedArchetype, search, sortKey, sortDirection]);

  const totalPages = Math.ceil(processedTargets.length / pageSize) || 1;
  const paginatedTargets = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return processedTargets.slice(start, start + pageSize);
  }, [processedTargets, currentPage, pageSize]);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#F3F1E7] font-sans pb-24">
      <main className="max-w-7xl mx-auto px-6 pt-12 space-y-8">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Live Telemetry Database
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            The <span className="text-orange-500">War Room</span>
          </h1>
        </div>
        
        {/* Painel Superior */}
        <div className="bg-[#121316] border border-zinc-800 p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">LAST AUDIT</span>
              <span className="text-orange-400 font-bold">
                {syncMeta?.last_synced_at ? new Date(syncMeta.last_synced_at).toLocaleDateString() : 'ONLINE'}
              </span>
            </div>
            <div className="h-6 w-px bg-zinc-800 hidden sm:block"></div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">HORIZON</span>
              <span className="text-white font-bold">{syncMeta.historical_years_covered}</span>
            </div>
            <div className="h-6 w-px bg-zinc-800 hidden sm:block"></div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase tracking-widest">PROFILES</span>
              <span className="text-white font-bold">{targets.length} UNITS</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-[#0E0F12] border border-zinc-800 p-1">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase transition ${viewMode === "cards" ? "bg-orange-600 text-white" : "text-zinc-500 hover:text-white"}`}
            >
              CARDS
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase transition ${viewMode === "table" ? "bg-orange-600 text-white" : "text-zinc-500 hover:text-white"}`}
            >
              TABLE
            </button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-500 mr-2 uppercase tracking-widest">CLASS FILTER</span>
            {ARCHETYPES.map((arch) => (
              <button
                key={arch}
                onClick={() => { setSelectedArchetype(arch); setCurrentPage(1); }}
                className={`px-3 py-1.5 text-xs font-mono font-bold tracking-widest transition ${selectedArchetype === arch ? "bg-orange-600 text-white border border-orange-500" : "bg-[#121316] border border-zinc-800 text-zinc-400 hover:text-white"}`}
              >
                {arch === "DEF" ? "DEF (D/ST)" : arch}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="SEARCH TELEMETRY..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="bg-[#121316] border border-zinc-800 px-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 w-64 uppercase tracking-widest transition-colors"
            />
          </div>
        </div>

        {/* Conteúdo */}
        {loading ? (
          <div className="py-20 text-center text-zinc-500 font-mono text-xs tracking-widest uppercase">
            SYNCING DATABANKS...
          </div>
        ) : paginatedTargets.length === 0 ? (
          <div className="py-20 text-center text-zinc-500 font-mono text-xs tracking-widest uppercase">
            NO RECORDS FOUND.
          </div>
        ) : viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedTargets.map((target) => (
              <PlayerCard key={target.id} target={target} />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto border border-zinc-800 bg-[#121316]">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#0E0F12] text-[10px] font-mono text-zinc-500 uppercase tracking-widest select-none">
                  <th className="py-3.5 px-4 cursor-pointer hover:text-white" onClick={() => handleSort('id')}>RANK</th>
                  <th className="py-3.5 px-4 cursor-pointer hover:text-white" onClick={() => handleSort('name')}>TARGET</th>
                  <th className="py-3.5 px-4 cursor-pointer hover:text-white" onClick={() => handleSort('archetype')}>CLASS</th>
                  <th className="py-3.5 px-4 text-right cursor-pointer hover:text-orange-400 text-white" onClick={() => handleSort('wif_score')}>WIF SCORE</th>
                  <th className="py-3.5 px-4 text-right">METRIC</th>
                  <th className="py-3.5 px-4 text-right">CONVERSION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs font-mono">
                {paginatedTargets.map((target, idx) => (
                  <tr key={target.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-zinc-500">
                      #{String((currentPage - 1) * pageSize + idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4">
                      <Link href={`/players/${target.id}`} className="font-bold text-white hover:text-orange-400 transition-colors uppercase tracking-wider">
                        {target.name}
                      </Link>
                      <span className="block text-[10px] text-zinc-500 tracking-widest mt-0.5">
                        {target.organizations?.name}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 border border-zinc-700 text-zinc-300 bg-zinc-800 font-bold tracking-widest text-[10px]">
                        {target.archetype}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-black text-orange-400 text-sm">
                      {target.wif_score}
                    </td>
                    <td className="py-3.5 px-4 text-right text-zinc-400">{target.passer_eff || "-"}</td>
                    <td className="py-3.5 px-4 text-right text-zinc-400">{target.conversion_rate || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Paginação */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500 pt-4">
          <div>
            SHOWING <span className="text-white font-bold">{processedTargets.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}</span> TO <span className="text-white font-bold">{Math.min(currentPage * pageSize, processedTargets.length)}</span> OF <span className="text-white font-bold">{processedTargets.length}</span> UNITS
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 bg-[#121316] border border-zinc-800 disabled:opacity-30 hover:border-zinc-600 transition-colors"
            >
              PREV
            </button>
            <span className="px-3 py-1.5 text-white font-bold">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 bg-[#121316] border border-zinc-800 disabled:opacity-30 hover:border-zinc-600 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}