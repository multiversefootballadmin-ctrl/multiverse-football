'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function MethodologyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-28">
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-10 space-y-12">
        
        {/* Cabeçalho da Metodologia */}
        <div className="space-y-3 border-b border-zinc-800/80 pb-8">
          <Link href="/rankings" className="text-orange-500 font-mono text-xs hover:underline inline-block mb-2">
            {t.backToRankings}
          </Link>
          <div className="inline-block px-2.5 py-0.5 rounded bg-orange-600/10 text-orange-400 border border-orange-500/30 text-[10px] font-mono font-bold tracking-widest uppercase ml-3">
            PROPRIETARY QUANTUM MATRIX
          </div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {t.methTitle}
          </h1>
          <p className="text-zinc-400 text-base md:text-xl font-normal leading-relaxed max-w-3xl">
            {t.methSubtitle}
          </p>
        </div>

        {/* 01. O Modelo Espacial de Descidas */}
        <section className="bg-[#16171B] border border-zinc-800/90 rounded-3xl p-6 md:p-10 space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">
              SEÇÃO 01 // GEOGRAFIA E ALAVANCAGEM ESPACIAL
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white font-sans uppercase tracking-tight">
              {t.downModelTitle}
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {t.downModelLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="bg-[#121316] border border-zinc-800 rounded-2xl p-5 space-y-2">
              <span className="text-orange-400 font-bold block text-sm">{t.down1Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.down1Desc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 rounded-2xl p-5 space-y-2">
              <span className="text-orange-400 font-bold block text-sm">{t.down2Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.down2Desc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 rounded-2xl p-5 space-y-2">
              <span className="text-red-400 font-bold block text-sm">{t.down3Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.down3Desc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 rounded-2xl p-5 space-y-2">
              <span className="text-emerald-400 font-bold block text-sm">{t.down4Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.down4Desc}</p>
            </div>
          </div>
        </section>

        {/* 02. Arquitetura Conceitual do WIF Score (Segredo de Negócio Preservado) */}
        <section className="bg-[#16171B] border border-zinc-800/90 rounded-3xl p-6 md:p-10 space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">
              SEÇÃO 02 // ALGORITMO MULTIDIMENSIONAL
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white font-sans uppercase tracking-tight">
              {t.wifProprietaryTitle}
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {t.wifProprietaryLead}
            </p>
          </div>

          {/* Diagrama Conceitual em Caixas Elegantes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-orange-400 font-bold block text-sm">{t.wifDim1Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.wifDim1Desc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-orange-400 font-bold block text-sm">{t.wifDim2Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.wifDim2Desc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-orange-400 font-bold block text-sm">{t.wifDim3Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.wifDim3Desc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-orange-400 font-bold block text-sm">{t.wifDim4Title}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.wifDim4Desc}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-400 text-xs font-mono">
            ℹ <strong>Proprietary Weighting Architecture:</strong> Non-linear normalization prevents raw volume inflation. High-volume, low-impact actions are discounted in favor of decisive phase transitions.
          </div>
        </section>

        {/* 03. O Sistema na Prática */}
        <section className="bg-[#16171B] border border-zinc-800/90 rounded-3xl p-6 md:p-10 space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">
              SEÇÃO 03 // ARQUÉTIPOS EM CAMPO
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white font-sans uppercase tracking-tight">
              {t.caseTitle}
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {t.caseLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-orange-400 font-bold block">{t.caseQBTitle}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.caseQBDesc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-blue-400 font-bold block">{t.caseWRTitle}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.caseWRDesc}</p>
            </div>
            <div className="bg-[#121316] border border-zinc-800 p-5 rounded-2xl space-y-2">
              <span className="text-emerald-400 font-bold block">{t.caseRBTitle}</span>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">{t.caseRBDesc}</p>
            </div>
          </div>

          <div className="pt-2 text-right">
            <Link href="/rankings" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-mono text-xs font-bold underline">
              <span>EXPLORE ALL ARCHETYPES IN THE WAR ROOM</span>
              <span>→</span>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}