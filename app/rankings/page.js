'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';
import PlayerCard from '@/components/PlayerCard';

const ARCHETYPES = ["ALL", "QB", "RB", "WR", "TE", "DEF"];

export default function RankingsPage() {
  const { lang, t } = useLanguage() || { lang: 'en', t: {} };

  const [targets, setTargets] = useState([]);
  const [syncMeta, setSyncMeta] = useState({ 
    last_synced_at: null, 
    historical_years_covered: '5 Seasons (2021-2026)' 
  });
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("cards"); // 'cards' ou 'table'

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
        id,
        name,
        archetype,
        archetype_label,
        is_team,
        wif_score,
        passer_eff,
        conversion_rate,
        primary_metric,
        organizations (
          name,
          league
        )
      `);

    if (targetsData) {
      setTargets(targetsData);
    }

    const { data: metaData } = await supabase
      .from('sync_logs')
      .select('*')
      .order('last_synced_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (metaData) {
      setSyncMeta(metaData);
    }
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
          return sortDirection === 'asc' 
            ? aVal.localeCompare(bVal) 
            : bVal.localeCompare(aVal);
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
    <div className="min-h-screen bg-[#0D110E] text-[#F3F1E7] font-sans pb-20 selection:bg-[#E8B923] selection:text-black">
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 space-y-6">
        
        {/* Painel Superior */}
        <div className="bg-[#0a0d0b] border border-[#1a241f] rounded-none p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-6 flex-wrap">
            <div>
              <span className="text-[#9AAFA8] block text-[10px] uppercase tracking-widest">{t.lastAudit || "LAST AUDIT"}</span>
              <span className="text-[#E8B923] font-bold">
                {syncMeta?.last_synced_at ? new Date(syncMeta.last_synced_at).toLocaleDateString() : 'ONLINE'}
              </span>
            </div>
            <div className="h-6 w-px bg-[#1a241f] hidden sm:block"></div>
            <div>
              <span className="text-[#9AAFA8] block text-[10px] uppercase tracking-widest">{t.horizon || "HORIZON"}</span>
              <span className="text-[#F3F1E7] font-bold">{syncMeta.historical_years_covered}</span>
            </div>
            <div className="h-6 w-px bg-[#1a241f] hidden sm:block"></div>
            <div>
              <span className="text-[#9AAFA8] block text-[10px] uppercase tracking-widest">{t.totalProfiles || "TOTAL PROFILES"}</span>
              <span className="text-[#F3F1E7] font-bold">{targets.length} {t.targetsUnit || "UNITS"}</span>
            </div>
          </div>

          {/* Alternador de Visualização: Cartões vs Tabela */}
          <div className="flex items-center gap-1.5 bg-[#0D110E] border border-[#1a241f] p-1">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase transition ${
                viewMode === "cards" ? "bg-[#E8B923] text-black shadow-md shadow-[#E8B923]/20" : "text-[#9AAFA8] hover:text-white"
              }`}
            >
              {t.cardsView || "CARDS"}
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase transition ${
                viewMode === "table" ? "bg-[#E8B923] text-black shadow-md shadow-[#E8B923]/20" : "text-[#9AAFA8] hover:text-white"
              }`}
            >
              {t.tableView || "TABLE"}
            </button>
          </div>
        </div>

        {/* Filtros e Busca */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1a241f] pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-[#9AAFA8] mr-2 uppercase tracking-widest">{t.archetypeLabel || "CLASS FILTER"}</span>
            {ARCHETYPES.map((arch) => (
              <button
                key={arch}
                onClick={() => {
                  setSelectedArchetype(arch);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest transition ${
                  selectedArchetype === arch
                    ? "bg-[#E8B923] text-black shadow-[0_0_10px_rgba(232,185,35,0.3)] border border-[#E8B923]"
                    : "bg-[#0a0d0b] border border-[#1a241f] text-[#9AAFA8] hover:text-white hover:border-[#E8B923]/50"
                }`}
              >
                {arch === "DEF" ? "DEF (D/ST)" : arch}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder={t.searchPlaceholder || "SEARCH TELEMETRY..."}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-[#0a0d0b] border border-[#1a241f] px-4 py-2 text-xs font-mono text-[#F3F1E7] placeholder-[#9AAFA8] focus:outline-none focus:border-[#E8B923] w-64 uppercase tracking-widest transition-colors"
            />
          </div>
        </div>

        {/* Conteúdo Dinâmico */}
        {loading ? (
          <div className="py-20 text-center text-[#9AAFA8] font-mono text-xs tracking-widest uppercase">
            {t.syncingDb || "SYNCING DATABANKS..."}
          </div>
        ) : paginatedTargets.length === 0 ? (
          <div className="py-20 text-center text-[#9AAFA8] font-mono text-xs tracking-widest uppercase">
            {t.noRecords || "NO RECORDS FOUND."}
          </div>
        ) : viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedTargets.map((target) => (
              <PlayerCard key={target.id} target={target} />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#1a241f] bg-[#0a0d0b]">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-[#1a241f] bg-[#0D110E] text-[10px] font-mono text-[#9AAFA8] uppercase tracking-widest select-none">
                  <th className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('id')}>
                    {t.rankCol || "RANK"}
                  </th>
                  <th className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('name')}>
                    {t.targetCol || "TARGET"}
                  </th>
                  <th className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('archetype')}>
                    {t.typeCol || "CLASS"}
                  </th>
                  <th className="py-3.5 px-4 text-right cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('wif_score')}>
                    {t.wifScoreCol || "WIF SCORE"}
                  </th>
                  <th className="py-3.5 px-4 text-right">{t.metricCol || "METRIC"}</th>
                  <th className="py-3.5 px-4 text-right">{t.convCol || "CONVERSION"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a241f] text-xs font-mono">
                {paginatedTargets.map((target, idx) => (
                  <tr key={target.id} className="hover:bg-[#0B3D2E]/20 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#9AAFA8]">
                      #{String((currentPage - 1) * pageSize + idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4">
                      <Link href={`/players/${target.id}`} className="font-bold text-white hover:text-[#E8B923] transition-colors uppercase tracking-wider">
                        {target.name}
                      </Link>
                      <span className="block text-[10px] text-[#9AAFA8] tracking-widest mt-0.5">
                        {target.organizations?.name}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 border border-[#0B3D2E] text-[#9AAFA8] bg-[#0B3D2E]/20 font-bold tracking-widest text-[10px]">
                        {target.archetype}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-black text-[#E8B923] text-sm">
                      {target.wif_score}
                    </td>
                    <td className="py-3.5 px-4 text-right text-[#9AAFA8]">
                      {target.passer_eff || "-"}
                    </td>
                    <td className="py-3.5 px-4 text-right text-[#9AAFA8]">
                      {target.conversion_rate || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Paginação */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-[#9AAFA8] pt-4">
          <div>
            {t.showing || "SHOWING"} <span className="text-white font-bold">{processedTargets.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}</span> {t.to || "TO"} <span className="text-white font-bold">{Math.min(currentPage * pageSize, processedTargets.length)}</span> {t.of || "OF"} <span className="text-white font-bold">{processedTargets.length}</span> {t.targetsUnit || "UNITS"}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 bg-[#0a0d0b] border border-[#1a241f] disabled:opacity-30 hover:border-[#E8B923]/50 transition-colors"
            >
              {t.prev || "PREV"}
            </button>
            <span className="px-3 py-1.5 text-white font-bold">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 bg-[#0a0d0b] border border-[#1a241f] disabled:opacity-30 hover:border-[#E8B923]/50 transition-colors"
            >
              {t.next || "NEXT"}
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}