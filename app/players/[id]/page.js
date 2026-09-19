'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';

export default function PlayerProfilePage() {
  const params = useParams();
  const { lang, t } = useLanguage();
  const isPt = lang === 'pt';

  const [target, setTarget] = useState(null);
  const [metrics, setMetrics] = useState([]);
  const [downs, setDowns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTargetData() {
      if (!params?.id) return;
      setLoading(true);

      const { data: targetData } = await supabase
        .from('targets')
        .select(`
          id,
          name,
          archetype,
          archetype_label,
          is_team,
          wif_score,
          nfl_comp,
          summary,
          organizations (
            name,
            league
          )
        `)
        .eq('id', params.id)
        .single();

      if (targetData) {
        setTarget(targetData);

        const { data: metricsData } = await supabase
          .from('telemetry_metrics')
          .select('*')
          .eq('target_id', targetData.id)
          .order('sort_order', { ascending: true });

        setMetrics(metricsData || []);

        const { data: downsData } = await supabase
          .from('situational_downs')
          .select('*')
          .eq('target_id', targetData.id)
          .order('sort_order', { ascending: true });

        setDowns(downsData || []);
      }

      setLoading(false);
    }

    fetchTargetData();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0E0F12] text-zinc-400 font-mono flex items-center justify-center text-xs">
        {t.syncingDb}
      </div>
    );
  }

  if (!target) {
    return (
      <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-mono p-8 space-y-4">
        <Link href="/rankings" className="text-orange-500 hover:underline text-xs">
          {t.backToRankings}
        </Link>
        <p className="text-sm">{t.noRecords}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-20">
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        <div>
          <Link href="/rankings" className="text-orange-500 font-mono text-xs hover:underline inline-block mb-4">
            {t.backToRankings}
          </Link>
        </div>

        {/* Header do Perfil com Avatar */}
        <div className="bg-[#16171B] border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-900 border border-zinc-700 overflow-hidden shrink-0 shadow-lg">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(target.name)}&background=18191E&color=F97316&size=200&bold=true`}
                alt={target.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg border border-orange-500/40 text-orange-400 bg-orange-500/10 font-mono font-bold text-xs">
                  {target.archetype} // {target.archetype_label}
                </span>
                {target.is_team && (
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-xs font-bold">
                    {t.defUnitBadge}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                {target.name}
              </h1>
              <p className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {target.organizations?.name || "Independent"} • {target.organizations?.league || "Premier League"}
              </p>
            </div>
          </div>

          <div className="bg-[#121316] border border-zinc-800 rounded-2xl p-5 text-center min-w-[140px] shrink-0">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
              {t.overallRating}
            </span>
            <span className="text-4xl font-black text-white font-mono block my-1">
              {target.wif_score}
            </span>
            <span className="text-[10px] font-mono text-orange-500 font-bold uppercase tracking-wider">
              WIF SCORE
            </span>
          </div>
        </div>

        {/* Resumo da Ponte Tática */}
        <div className="bg-[#16171B] border border-zinc-800 rounded-2xl p-6 space-y-2 font-mono">
          <span className="text-[11px] text-orange-500 font-bold uppercase tracking-wider block">
            {t.archetypeBridgeTitle}
          </span>
          <h2 className="text-lg font-bold text-white font-sans">
            {target.nfl_comp}
          </h2>
          <p className="text-zinc-400 text-xs leading-relaxed font-sans pt-1">
            {isPt 
              ? `Dados consolidados de telemetria para ${target.name} atuando pelo ${target.organizations?.name}. Mapeado para os arquétipos situacionais da NFL com base no impacto de jardas ganhas e estabilidade defensiva.`
              : target.summary}
          </p>
        </div>

        {/* Métricas Auditadas */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400 font-bold uppercase tracking-wider">
              {t.metricsMatrixTitle}
            </span>
            <span className="text-zinc-500">{t.sysVerified}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.length > 0 ? (
              metrics.map((metric) => (
                <div key={metric.id} className="bg-[#16171B] border border-zinc-800 rounded-2xl p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-zinc-400 text-xs font-mono">{metric.label}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-orange-400 font-bold">
                      {metric.grade}
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">
                    {metric.value}
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-orange-500 h-full rounded-full" 
                      style={{ width: `${metric.bar_percentage}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 p-6 bg-[#16171B] border border-zinc-800 rounded-xl text-center text-xs font-mono text-zinc-500">
                {t.awaitingMetrics}
              </div>
            )}
          </div>
        </div>

        {/* Descidas Situacionais */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider block">
            {t.downsTitle}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
            {downs.length > 0 ? (
              downs.map((down) => (
                <div key={down.id} className="bg-[#16171B] border border-zinc-800 rounded-2xl p-5 space-y-2">
                  <span className="text-orange-500 font-bold text-xs block">
                    {down.down_title}
                  </span>
                  <p className="text-zinc-300 text-xs font-sans leading-relaxed">
                    {down.analysis}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-[#16171B] border border-zinc-800 rounded-xl text-center text-xs font-mono text-zinc-500">
                {t.noDowns}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}