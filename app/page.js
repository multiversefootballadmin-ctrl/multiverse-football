'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HomePage() {
  const { lang, t } = useLanguage();
  const isPt = lang === 'pt';

  const tickerItems = [
    { pos: 'QB', name: 'K. DE BRUYNE', wif: '28.4', diff: '+1.2', positive: true },
    { pos: 'WR', name: 'V. JÚNIOR', wif: '27.3', diff: '+0.8', positive: true },
    { pos: 'RB', name: 'E. HAALAND', wif: '26.1', diff: '-0.4', positive: false },
    { pos: 'TE', name: 'J. BELLINGHAM', wif: '25.8', diff: '+0.5', positive: true },
    { pos: 'DEF', name: 'V. VAN DIJK', wif: '24.9', diff: '+0.1', positive: true },
    { pos: 'WR', name: 'M. SALAH', wif: '26.7', diff: '+0.3', positive: true },
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 flex flex-col font-sans">
      {/* Ticker sem barra cinza nativa */}
      <section className="bg-[#121316] border-b border-zinc-800/80 px-4 py-2 flex items-center gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span className="px-2 py-0.5 rounded bg-orange-600/20 text-orange-400 font-bold text-[10px] tracking-wider border border-orange-500/30">
            {isPt ? 'AO VIVO' : 'LIVE DESK'}
          </span>
          <span className="text-zinc-500 hidden sm:inline">INCURSUS // QUANTUM PROTOCOL</span>
        </div>

        <div className="h-4 w-px bg-zinc-800 shrink-0"></div>

        <span className="text-zinc-500 shrink-0 uppercase tracking-widest text-[10px] hidden md:inline">
          LIVE INDEX |
        </span>

        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1 w-full">
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-[#16171B] border border-zinc-800 px-3 py-1 rounded-md shrink-0 text-xs shadow-sm hover:border-zinc-700 transition"
            >
              <span className="text-zinc-500 font-bold">{item.pos}</span>
              <span className="font-bold text-white tracking-wide">{item.name}</span>
              <span className="text-orange-400 font-black">{item.wif} WIF</span>
              <span className={`text-[10px] font-bold ${item.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                {item.positive ? '▲' : '▼'} {item.diff}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0 text-[11px] text-zinc-400 font-mono">
          <span className="text-zinc-600">SYSTEM: READY</span>
          <span className="text-orange-500 font-bold">SOCCER x NFL</span>
        </div>
      </section>

      {/* Hero Principal */}
      <main className="flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-12 w-full">
        <div className="bg-[#E2E4E9] text-zinc-900 rounded-3xl p-8 md:p-14 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white font-mono text-xs font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            {t.homeBadge}
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-[0.95]">
            {t.heroTitle1}<br />
            <span className="text-orange-600">{t.heroTitle2}</span>
          </h1>

          <p className="text-zinc-700 max-w-2xl text-base md:text-xl font-medium leading-relaxed font-sans">
            {t.heroSubtitle}
          </p>

          {/* Botões de Ação na Home */}
          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            <Link
              href="/rankings"
              className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition shadow-lg shadow-orange-600/30 tracking-wider flex items-center gap-2"
            >
              <span>{t.enterWarRoom}</span>
            </Link>

            <Link
              href="/methodology"
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold transition tracking-wider"
            >
              {t.viewMethodology}
            </Link>

            <Link
              href="/about"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-bold transition tracking-wider shadow-sm"
            >
              {t.viewAbout} →
            </Link>
          </div>
        </div>

        {/* 3 Pilares Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <Link href="/methodology" className="group bg-[#16171B] hover:border-orange-500/60 border border-zinc-800/80 rounded-2xl p-6 space-y-2 transition">
            <span className="text-orange-500 font-bold block text-sm group-hover:underline">
              {t.pilar1Title}
            </span>
            <p className="text-zinc-400 font-sans leading-relaxed text-xs">
              {t.pilar1Desc}
            </p>
          </Link>

          <Link href="/methodology" className="group bg-[#16171B] hover:border-orange-500/60 border border-zinc-800/80 rounded-2xl p-6 space-y-2 transition">
            <span className="text-orange-500 font-bold block text-sm group-hover:underline">
              {t.pilar2Title}
            </span>
            <p className="text-zinc-400 font-sans leading-relaxed text-xs">
              {t.pilar2Desc}
            </p>
          </Link>

          <Link href="/methodology" className="group bg-[#16171B] hover:border-orange-500/60 border border-zinc-800/80 rounded-2xl p-6 space-y-2 transition">
            <span className="text-orange-500 font-bold block text-sm group-hover:underline">
              {t.pilar3Title}
            </span>
            <p className="text-zinc-400 font-sans leading-relaxed text-xs">
              {t.pilar3Desc}
            </p>
          </Link>
        </div>
      </main>

      <footer className="border-t border-zinc-800/80 py-6 px-4 md:px-8 text-center text-xs font-mono text-zinc-500">
        MULTIVERSE FOOTBALL © 2026 // CROSS-SPORT QUANTUM ANALYTICS
      </footer>
    </div>
  );
}