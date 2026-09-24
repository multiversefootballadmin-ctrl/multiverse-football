'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaybookOpen, setIsPlaybookOpen] = useState(false);
  const pathname = usePathname();

  const mainLinks = [
    { name: 'WAR ROOM', href: '/rankings', icon: '📊' },
    { name: 'GAMES', href: '/games', icon: '🎲' }
  ];

  const playbookLinks = [
    { name: 'WIF MATRIX', href: '/methodology', desc: 'Standard Scoring' },
    { name: 'xWIF ENGINE', href: '/xwif', desc: 'Predictive Projections' },
    { name: 'GLOSSARY', href: '/glossary', desc: 'Terms & Rules 101' },
  ];

  const isPlaybookActive = ['/methodology', '/xwif', '/glossary'].includes(pathname);

  return (
    <header className="sticky top-0 w-full z-50 px-4 sm:px-6 py-4 border-b border-zinc-800/80 bg-[#0E0F12]/95 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-black text-xl md:text-2xl tracking-tighter uppercase shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-8 font-mono text-xs tracking-wider">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 transition-colors ${
                pathname === link.href ? 'text-orange-400 font-black border-b border-orange-400 pb-0.5' : 'text-zinc-400 hover:text-zinc-100 font-medium'
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}

          {/* PLAYBOOK DROPDOWN */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsPlaybookOpen(true)}
            onMouseLeave={() => setIsPlaybookOpen(false)}
          >
            <button className={`flex items-center gap-1.5 transition-colors uppercase py-2 ${
                isPlaybookActive ? 'text-orange-400 font-black border-b border-orange-400 pb-0.5' : 'text-zinc-400 group-hover:text-zinc-100 font-medium'
              }`}>
              <span>📖</span>
              <span>PLAYBOOK ▾</span>
            </button>
            
            {/* PONT INVISIBLE (pt-2) POUR ÉVITER LE BUG DE SURVOL */}
            {isPlaybookOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
                <div className="bg-[#14161B] border border-zinc-800 rounded-lg shadow-2xl py-2 overflow-hidden">
                  {playbookLinks.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className="block px-4 py-3 hover:bg-zinc-800/60 transition-colors"
                      onClick={() => setIsPlaybookOpen(false)}
                    >
                      <span className="block text-white font-bold mb-0.5">{item.name}</span>
                      <span className="block text-[9px] text-zinc-500 uppercase tracking-widest">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`flex items-center gap-1.5 transition-colors ${
              pathname === '/about' ? 'text-orange-400 font-black border-b border-orange-400 pb-0.5' : 'text-zinc-400 hover:text-zinc-100 font-medium'
            }`}
          >
            <span>⚡</span>
            <span>ABOUT</span>
          </Link>
        </nav>

        {/* MOBILE BURGER */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-zinc-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="xl:hidden border-t border-zinc-800 mt-4 pt-3 pb-2 space-y-1 bg-[#0E0F12]">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-zinc-300 font-mono text-xs tracking-wider"
            >
              {link.icon} {link.name}
            </Link>
          ))}
          <div className="px-3 py-2.5 font-mono text-xs tracking-wider text-orange-400 font-bold border-t border-zinc-800 mt-2">📖 PLAYBOOK</div>
          <div className="pl-6 space-y-1">
            {playbookLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-zinc-400 font-mono text-xs hover:text-white">
                • {link.name}
              </Link>
            ))}
          </div>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-zinc-300 font-mono text-xs tracking-wider border-t border-zinc-800 mt-2">
            ⚡ ABOUT
          </Link>
        </div>
      )}
    </header>
  );
}
