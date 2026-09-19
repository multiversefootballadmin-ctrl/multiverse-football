'use client';

import Link from 'next/link';
import { switchLanguage } from '@/lib/translateTrigger';

export default function GlobalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#0E0F12]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-mono font-black tracking-wider text-orange-500 hover:text-orange-400 transition text-sm sm:text-base">
            MULTIVERSE FOOTBALL //
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-xs font-mono text-zinc-400">
            <Link href="/" className="hover:text-zinc-100 transition">HOME</Link>
            <Link href="/rankings" className="hover:text-zinc-100 transition">WAR ROOM</Link>
            <Link href="/methodology" className="hover:text-zinc-100 transition">METHODOLOGY</Link>
            <Link href="/about" className="hover:text-zinc-100 transition">ABOUT US</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => switchLanguage('en')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 hover:border-orange-500 text-xs font-mono text-zinc-300 transition"
            title="Translate to English"
          >
            <span>🇨🇦</span> <span>EN</span>
          </button>
          <button
            onClick={() => switchLanguage('pt')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 hover:border-orange-500 text-xs font-mono text-zinc-300 transition"
            title="Traduzir para Português"
          >
            <span>🇧🇷</span> <span>PT</span>
          </button>
        </div>
      </div>
    </header>
  );
}