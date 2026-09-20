import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Multiverse Football',
  description: 'Cross-Sport Telemetry',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white flex flex-col min-h-screen">
        
        {/* MENU GLOBAL RESPONSIVO */}
        <header className="sticky top-0 w-full z-50 px-4 sm:px-6 py-4 flex flex-col xl:flex-row justify-between items-center border-b border-zinc-800/60 bg-[#0E0F12]/95 backdrop-blur-md gap-4 shadow-xl">
          <div className="font-black text-xl md:text-2xl tracking-tighter uppercase shrink-0">
            <Link href="/">
              <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
            </Link>
          </div>
          
          <nav className="flex items-center gap-4 sm:gap-6 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-zinc-400 overflow-x-auto w-full xl:w-auto pb-1 xl:pb-0 no-scrollbar justify-center xl:justify-end">
            <Link href="/rankings" className="hover:text-orange-400 transition-colors whitespace-nowrap">WAR ROOM</Link>
            <Link href="/playbook" className="hover:text-orange-400 transition-colors whitespace-nowrap">PLAYBOOK</Link>
            <Link href="/scouting" className="hover:text-orange-400 transition-colors whitespace-nowrap">SCOUTING</Link>
            <Link href="/methodology" className="hover:text-orange-400 transition-colors whitespace-nowrap">METHODOLOGY</Link>
            <Link href="/glossary" className="hover:text-orange-400 transition-colors whitespace-nowrap">GLOSSARY</Link>
            <Link href="/whitepaper" className="hover:text-orange-400 transition-colors whitespace-nowrap">WHITEPAPER</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors whitespace-nowrap">ORIGIN</Link>
          </nav>
        </header>

        {/* CONTEÚDO DA PÁGINA */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FAT FOOTER / SITE MAP */}
        <footer className="bg-[#0a0b0d] border-t border-zinc-900 pt-16 pb-8 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4">
              <div className="font-black text-xl tracking-tighter uppercase">
                <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
              </div>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Translating real-world pitch performance into NFL output through audited telemetry. Welcome to the sporting dimension.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">The War Room</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/rankings" className="hover:text-orange-400 transition-colors">War Room (Rankings)</Link></li>
                <li className="flex items-center gap-2 text-zinc-700 cursor-not-allowed">Franchise Power Index <span className="text-[9px] bg-zinc-800 text-zinc-500 px-1">SOON</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Knowledge Base</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/playbook" className="hover:text-orange-400 transition-colors">Playbook (Archetypes)</Link></li>
                <li><Link href="/scouting" className="hover:text-orange-400 transition-colors">Scouting (Reports)</Link></li>
                <li><Link href="/methodology" className="hover:text-orange-400 transition-colors">Methodology (WIF Engine)</Link></li>
                <li><Link href="/glossary" className="hover:text-orange-400 transition-colors">Glossary (Dictionary)</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Ecosystem</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">Origin (Our Story)</Link></li>
                <li><Link href="/whitepaper" className="hover:text-orange-400 transition-colors">Whitepaper (Investors)</Link></li>
                <li className="flex items-center gap-2 text-zinc-700 cursor-not-allowed">Collision Lab <span className="text-[9px] bg-zinc-800 text-zinc-500 px-1">SOON</span></li>
              </ul>
            </div>

          </div>
          <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Multiverse Football. All rights reserved.
            </p>
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              SYS.STATUS: ONLINE | WIF ENGINE v1.0.0
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}