import Navbar from '../components/Navbar';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Multiverse Football | The Cross-Sport Engine',
  description: 'Converting soccer stats into NFL fantasy points.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white flex flex-col min-h-screen">
        
        <Navbar />
        <main className="flex-grow">{children}</main>

        <footer className="bg-[#0a0b0d] border-t border-zinc-900 pt-16 pb-8 px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="font-black text-xl tracking-tighter uppercase">
                <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
              </div>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Converting soccer stats into NFL fantasy points. Clear metrics, cross-sport scoring, and predictive scouting.
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
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">The Playbook</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/methodology" className="hover:text-orange-400 transition-colors">WIF Matrix (Scoring)</Link></li>
                <li><Link href="/xwif" className="hover:text-orange-400 transition-colors">xWIF (Predictive Model)</Link></li>
                <li><Link href="/glossary" className="hover:text-orange-400 transition-colors">Glossary 101</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Project</h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">Origin & Whitepaper</Link></li>
                <li><Link href="/changelog" className="hover:text-orange-400 transition-colors">Changelog & Versions</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Multiverse Football. All rights reserved.
            </p>
            <Link href="/changelog" className="text-zinc-500 hover:text-orange-400 font-mono text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded border border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              PLATFORM v1.5.0 | WIF ENGINE v1.0
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
