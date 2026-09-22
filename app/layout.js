import Link from 'next/link';
import './globals.css';
import { Providers } from './providers';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Multiverse Football',
  description: 'The Cross-Sport Fantasy Engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-[#0E0F12] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-orange-500 selection:text-white flex flex-col min-h-screen transition-colors duration-300">
        
        <Providers>
          {/* MENU GLOBAL RESPONSIVO */}
          <header className="sticky top-0 w-full z-50 px-4 sm:px-6 py-4 flex flex-col xl:flex-row justify-between items-center border-b border-zinc-200 dark:border-zinc-800/60 bg-white/90 dark:bg-[#0E0F12]/95 backdrop-blur-md gap-4 shadow-sm dark:shadow-xl transition-colors duration-300">
            <div className="font-black text-xl md:text-2xl tracking-tighter uppercase shrink-0">
              <Link href="/">
                <span className="text-zinc-900 dark:text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 w-full xl:w-auto justify-center xl:justify-end">
              <nav className="flex items-center gap-4 sm:gap-6 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 overflow-x-auto no-scrollbar pb-1 xl:pb-0">
                <Link href="/rankings" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">WAR ROOM</Link>
                <Link href="/playbook" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">PLAYBOOK</Link>
                <Link href="/scouting" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">SCOUTING</Link>
                <Link href="/methodology" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">METHODOLOGY</Link>
                <Link href="/glossary" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">GLOSSARY</Link>
                <Link href="/whitepaper" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">WHITEPAPER</Link>
                <Link href="/about" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap">ORIGIN</Link>
              </nav>
              {/* BOTÃO DE MODO CLARO/ESCURO */}
              <div className="border-l border-zinc-200 dark:border-zinc-700 pl-4">
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* CONTEÚDO DA PÁGINA */}
          <main className="flex-grow">
            {children}
          </main>

          {/* FAT FOOTER / SITE MAP */}
          <footer className="bg-zinc-100 dark:bg-[#0a0b0d] border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-8 px-6 mt-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              
              <div className="space-y-4">
                <div className="font-black text-xl tracking-tighter uppercase">
                  <span className="text-zinc-900 dark:text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-500 text-sm font-light leading-relaxed">
                  Translating real-world pitch performance into NFL output through audited telemetry. Welcome to the sporting dimension.
                </p>
              </div>

              <div>
                <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-sm mb-4">The War Room</h4>
                <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  <li><Link href="/rankings" className="hover:text-orange-500 transition-colors">War Room (Rankings)</Link></li>
                  <li className="flex items-center gap-2 text-zinc-400 dark:text-zinc-700 cursor-not-allowed">Franchise Power Index <span className="text-[9px] bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 px-1">SOON</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-sm mb-4">Knowledge Base</h4>
                <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  <li><Link href="/playbook" className="hover:text-orange-500 transition-colors">Playbook (Archetypes)</Link></li>
                  <li><Link href="/scouting" className="hover:text-orange-500 transition-colors">Scouting (Reports)</Link></li>
                  <li><Link href="/methodology" className="hover:text-orange-500 transition-colors">Methodology (WIF Engine)</Link></li>
                  <li><Link href="/glossary" className="hover:text-orange-500 transition-colors">Glossary (Dictionary)</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-sm mb-4">Ecosystem</h4>
                <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  <li><Link href="/about" className="hover:text-orange-500 transition-colors">Origin (Our Story)</Link></li>
                  <li><Link href="/whitepaper" className="hover:text-orange-500 transition-colors">Whitepaper (Investors)</Link></li>
                  <li className="flex items-center gap-2 text-zinc-400 dark:text-zinc-700 cursor-not-allowed">Collision Lab <span className="text-[9px] bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 px-1">SOON</span></li>
                </ul>
              </div>

            </div>
            <div className="max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-zinc-500 dark:text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                © {new Date().getFullYear()} Multiverse Football. All rights reserved.
              </p>
              <p className="text-zinc-500 dark:text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                SYS.STATUS: ONLINE | WIF ENGINE v1.0.0
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}