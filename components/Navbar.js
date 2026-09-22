'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'WAR ROOM', href: '/rankings', icon: '📊' },
    { name: 'GAMES', href: '/games', icon: '🎲' },
    { name: 'PLAYBOOK', href: '/playbook', icon: '📖' },
    { name: 'SCOUTING', href: '/scouting', icon: '🔍' },
    { name: 'METHODOLOGY', href: '/methodology', icon: '📐' },
    { name: 'GLOSSARY', href: '/glossary', icon: '📚' },
    { name: 'WHITEPAPER', href: '/whitepaper', icon: '📄' },
    { name: 'ORIGIN', href: '/about', icon: '⚡' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 px-4 sm:px-6 py-4 border-b border-zinc-800/80 bg-[#0E0F12]/95 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGÓTIPO */}
        <div className="font-black text-xl md:text-2xl tracking-tighter uppercase shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
          </Link>
        </div>

        {/* NAVEGAÇÃO DESKTOP (COM ÍCONES E DIVISORES '|') */}
        <nav className="hidden xl:flex items-center gap-3.5 font-mono text-xs tracking-wider">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="flex items-center gap-3.5">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'text-orange-400 font-black border-b border-orange-400 pb-0.5'
                      : 'text-zinc-400 hover:text-zinc-100 font-medium'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
                {idx < navLinks.length - 1 && <span className="text-zinc-700 select-none">|</span>}
              </div>
            );
          })}
        </nav>

        {/* BOTÃO HAMBÚRGUER (MOBILE / TABLET) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
          className="xl:hidden p-2 text-zinc-400 hover:text-white border border-zinc-800 rounded-lg bg-zinc-900/60 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* PAINEL SUSPENSO EM ECRÃS MÓVEIS */}
      {isOpen && (
        <div className="xl:hidden border-t border-zinc-800 mt-4 pt-3 pb-2 space-y-1 bg-[#0E0F12]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md font-mono text-xs tracking-wider transition-colors ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-400 font-black border-l-2 border-orange-500'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
