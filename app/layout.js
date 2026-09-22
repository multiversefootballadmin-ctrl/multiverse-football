import Navbar from '../components/Navbar';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Multiverse Football',
  description: 'The Cross-Sport Fantasy Engine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white flex flex-col min-h-screen">
        
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-[#0a0b0d] border-t border-zinc-900 pt-16 pb-8 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="font-black text-xl tracking-tighter uppercase">
                <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
              </div>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Converting soccer stats into NFL fantasy points. Clear metrics, cross-sport scoring.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Games & Board</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/rankings" className="hover:text-orange-400 transition-colors">War Room Rankings</Link></li>
                <li><Link href="/games" className="text-orange-400 hover:text-orange-300 transition-colors">17-0 Crossover Game</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Knowledge</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/playbook" className="hover:text-orange-400 transition-colors">Playbook (Archetypes)</Link></li>
                <li><Link href="/scouting" className="hover:text-orange-400 transition-colors">Scouting Reports</Link></li>
                <li><Link href="/methodology" className="hover:text-orange-400 transition-colors">Methodology (PPR Standard)</Link></li>
                <li><Link href="/glossary" className="hover:text-orange-400 transition-colors">Glossary</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Project</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">Origin</Link></li>
                <li><Link href="/whitepaper" className="hover:text-orange-400 transition-colors">Whitepaper</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Multiverse Football. All rights reserved.
            </p>
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              STATUS: READY | WIF ENGINE
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
