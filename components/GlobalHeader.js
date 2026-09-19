'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function GlobalHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.homeNav },
    { href: '/rankings', label: t.rankingsNav },
    { href: '/methodology', label: t.methodologyNav },
    { href: '/about', label: t.aboutNav }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0E0F12]/95 backdrop-blur-md border-b border-zinc-800/80 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-mono font-black text-white text-sm shadow-md shadow-orange-600/30 group-hover:scale-105 transition">
              MF
            </div>
            <div>
              <span className="font-mono font-bold text-sm text-white tracking-wider block leading-none">
                MULTIVERSE<span className="text-orange-500">.FOOTBALL</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block pt-0.5">
                Soccer × NFL Telemetry
              </span>
            </div>
          </Link>

          {/* Navegação Principal */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    active
                      ? 'bg-zinc-800 text-orange-400 font-bold border border-zinc-700'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Status e Seletor de Idioma */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.systemOperational}</span>
          </div>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}