'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';

export default function PlayerProfilePage() {
  const params = useParams();
  const { lang, t } = useLanguage() || { lang: 'en', t: {} };
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
          id, name, archetype, archetype_label, is_team, wif_score, nfl_comp, summary,
          organizations ( name, league )
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
      <div className="min-h-screen bg-[#0D110E] text-[#9AAFA8] font-mono flex items-center justify-center text-xs tracking-widest uppercase">
        {t.syncingDb || "SYNCING TELEMETRY..."}
      </div>
    );
  }

  if (!target) {
    return (
      <div className="min-h-screen bg-[#0D110E] text-[#F3F1E7] font-mono p-8 space-y-4">
        <Link href="/rankings" className="text-[#E8B923] hover:underline text-xs tracking-widest uppercase">
          ← {t.backToRankings || "BACK TO WAR ROOM"}
        </Link>
        <p className="text-sm">RECORD NOT FOUND.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D110E] text-[#F3F1E7] font-sans pb-20 selection:bg-[#E8B923] selection:text-black">
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        <div>
          <Link href="/rankings" className="text-[#9AAFA8] hover:text-[#E8B923] font-mono text-xs tracking-widest uppercase transition-colors">
            ← {t.backToRankings || "BACK TO WAR ROOM"}
          </Link>
        </div>

        {/* Header do Perfil com o novo Crachá Tipográfico */}
        <div className="bg-[#0a0d0b] border border-[#1a241f] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          {/* Brilho de fundo sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8B923] opacity-5 blur-[100px] pointer-events-none"></div>

          <div className="flex items-center gap-6 z-10">
            
            {/* O NOVO ÍCONE: Crachá Tipográfico */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0D110E] border-2 border-[#E8B923] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(232,185,35,0.15)] shrink-0">
              <span className="text-3xl md:text-4xl font-black text-[#E8B923]">{target.archetype}</span>
              <span className="text-[9px] md:text-[10px] font-mono text-[#9AAFA8] tracking-widest mt-1">CLASS</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 border border-[#0B3D2E] text-[#9AAFA8] bg-[#0B3D2E]/20 font-mono font-bold text-[10px] tracking-widest uppercase">
                  {target.archetype} // {target.archetype_label}
                </span>
                {target.is_team && (
                  <span className="px-2.5 py-1 border border-zinc-700 text-zinc-400 bg-zinc-900 font-mono font-bold text-[10px] tracking-widest uppercase">
                    DEFENSIVE UNIT
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                {target.name}
              </h1>
              <p className="text-[#9AAFA8] font-mono text-xs uppercase tracking-widest">
                {target.organizations?.name || "Independent"} • {target.organizations?.league || "Pro League"}
              </p>
            </div>
          </div>

          <div className="bg-[#0D110E] border border-[#1a241f] p-5 text-center min-w-[140px] shrink-0 z-10">
            <span className="text-[10px] font-mono text-[#9AAFA8] uppercase tracking-widest block">
              {t.overallRating || "OVERALL IMPACT"}
            </span>
            <span className="text-4xl md:text-5xl font-black text-white font-mono block my-2">
              {target.wif_score}
            </span>
            <span className="text-[10px] font-mono text-[#E8B923] font-bold uppercase tracking-widest">
              WIF SCORE
            </span>
          </div>
        </div>

        {/* Resumo da Ponte Tática */}
        <div className="bg-[#0B3D2E]/10 border border-[#0B3D2E] p-6 space-y-2">
          <span className="text-[10px] text-[#E8B923] font-mono font-bold uppercase tracking-widest block">
            {t.archetypeBridgeTitle || "TACTICAL BRIDGE"}
          </span>
          <h2 className="text-xl font-black text-white uppercase tracking-tight">
            {target.nfl_comp}
          </h2>
          <p className="text-[#9AAFA8] text-sm leading-relaxed pt-2 font-light">
            {isPt 
              ? `Dados consolidados de telemetria para ${target.name} atuando pelo ${target.organizations?.name}. Mapeado para os arquétipos situacionais da NFL com base no impacto real de jogo.`
              : target.summary}
          </p>
        </div>

        {/* Métricas Auditadas */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono border-b border-[#1a241f] pb-2">
            <span className="text-[#9AAFA8] font-bold uppercase tracking-widest">
              {t.metricsMatrixTitle || "TELEMETRY METRICS"}
            </span>
            <span className="text-[#0B3D2E] font-bold tracking-widest">SYS.VERIFIED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.length > 0 ? (
              metrics.map((metric) => (
                <div key={metric.id} className="bg-[#0a0d0b] border border-[#1a241f] p-5 space-y-4 hover:border-[#E8B923]/30 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-[#9AAFA8] text-xs font-mono uppercase tracking-wider">{metric.label}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-[#E8B923]/30 text-[#E8B923] font-bold">
                      {metric.grade}
                    </span>
                  </div>
                  <div className="text-3xl font-black font-mono text-white">
                    {metric.value}
                  </div>
                  <div className="w-full bg-[#0D110E] h-1.5 overflow-hidden">
                    <div 
                      className="bg-[#E8B923] h-full" 
                      style={{ width: `${metric.bar_percentage}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 p-6 bg-[#0a0d0b] border border-[#1a241f] text-center text-xs font-mono text-[#9AAFA8] uppercase tracking-widest">
                {t.awaitingMetrics || "AWAITING TELEMETRY..."}
              </div>
            )}
          </div>
        </div>

        {/* Descidas Situacionais */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-[#9AAFA8] font-bold uppercase tracking-widest block border-b border-[#1a241f] pb-2">
            {t.downsTitle || "SITUATIONAL DOWNS"}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {downs.length > 0 ? (
              downs.map((down) => (
                <div key={down.id} className="bg-[#0a0d0b] border border-[#1a241f] p-6 space-y-3">
                  <span className="text-[#E8B923] font-black font-mono text-sm block uppercase tracking-wider">
                    {down.down_title}
                  </span>
                  <p className="text-[#9AAFA8] text-sm leading-relaxed font-light">
                    {down.analysis}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-6 bg-[#0a0d0b] border border-[#1a241f] text-center text-xs font-mono text-[#9AAFA8] uppercase tracking-widest">
                {t.noDowns || "NO DOWN DATA AVAILABLE"}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}