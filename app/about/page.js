'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-28">
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-10 space-y-16">
        
        {/* Cabeçalho da Página */}
        <div className="space-y-4 border-b border-zinc-800/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 font-mono text-xs font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            {t.aboutBadge}
          </div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {t.aboutHeroTitle}
          </h1>
          <p className="text-zinc-400 text-base md:text-xl font-normal leading-relaxed max-w-3xl">
            {t.aboutHeroLead}
          </p>
        </div>

        {/* Seção 01: O Produto & A Ideia Geral */}
        <section className="bg-[#16171B] border border-zinc-800/90 rounded-3xl p-6 md:p-10 space-y-6 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">
              {t.aboutProductTitle}
            </span>
          </div>

          <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
            <p>{t.aboutProductP1}</p>
            <p>{t.aboutProductP2}</p>
            <p>{t.aboutProductP3}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80 font-mono text-xs">
            <div className="bg-[#121316] p-4 rounded-xl border border-zinc-800">
              <span className="text-orange-400 font-bold block mb-1">01 // CROSS-TALK</span>
              <span className="text-zinc-400">Eliminating communication barriers between soccer and gridiron fans.</span>
            </div>
            <div className="bg-[#121316] p-4 rounded-xl border border-zinc-800">
              <span className="text-orange-400 font-bold block mb-1">02 // NO ESTIMATES</span>
              <span className="text-zinc-400">Grounded exclusively in factual appearances, minutes, and audited stats.</span>
            </div>
            <div className="bg-[#121316] p-4 rounded-xl border border-zinc-800">
              <span className="text-orange-400 font-bold block mb-1">03 // SCOUTING MATRIX</span>
              <span className="text-zinc-400">Bridging tactical roles into modern sports management insights.</span>
            </div>
          </div>
        </section>

        {/* Seção 02: O Criador (Alexandre Pacheco) */}
        <section className="bg-[#16171B] border border-zinc-800/90 rounded-3xl p-6 md:p-10 shadow-xl space-y-8">
          <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase block">
            {t.aboutCreatorTitle}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Foto e Card Social */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl overflow-hidden ring-4 ring-orange-500/30 shadow-2xl bg-zinc-900">
                <img
                  src="/me.jpg"
                  alt="Alexandre Pacheco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {t.aboutCreatorName}
                </h3>
                <span className="text-xs font-mono text-orange-400 font-bold block mt-0.5">
                  Vaughan, Ontario, Canada 🇨🇦
                </span>
                <span className="text-[11px] font-mono text-zinc-500 block">
                  {t.aboutCreatorRole}
                </span>
              </div>

              <a
                href="https://www.linkedin.com/in/pachecoalexandre/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0077B5] hover:bg-[#005f93] text-white font-mono font-bold text-xs tracking-wider transition shadow-lg shadow-blue-900/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Texto Biográfico */}
            <div className="md:col-span-2 space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>{t.aboutCreatorP1}</p>
              <p>{t.aboutCreatorP2}</p>
              <p>{t.aboutCreatorP3}</p>
              <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px]">
                <span className="px-3 py-1 rounded-lg bg-[#121316] border border-zinc-700 text-zinc-300">
                  Sport Management Honours
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#121316] border border-zinc-700 text-zinc-300">
                  MBA People Management
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#121316] border border-zinc-700 text-zinc-300">
                  Sports Operations & Analytics
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 03: Convite para Conexões e Parcerias */}
        <div className="bg-gradient-to-r from-[#18191E] via-[#1A1C23] to-[#16171B] border border-orange-500/40 rounded-3xl p-8 md:p-10 space-y-4 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-orange-400 tracking-wider uppercase">
              {t.openToChat}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
            {t.aboutConnectTitle}
          </h3>

          <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-3xl">
            {t.aboutConnectLead}
          </p>

          <div className="pt-2">
            <a
              href="https://www.linkedin.com/in/pachecoalexandre/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30"
            >
              <span>{t.connectLinkedin}</span>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}