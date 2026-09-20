import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Multiverse Football',
  description: 'Crossing the Sporting Dimension',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
        
        {/* MENU GLOBAL RESPONSIVO */}
        <header className="sticky top-0 w-full z-50 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-zinc-800/60 bg-[#0E0F12]/95 backdrop-blur-md gap-4 shadow-xl">
          <div className="font-black text-xl md:text-2xl tracking-tighter uppercase shrink-0">
            <Link href="/">
              <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
            </Link>
          </div>
          
          <nav className="flex items-center gap-4 sm:gap-6 font-mono text-[10px] sm:text-xs font-bold tracking-widest text-zinc-400 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar justify-center sm:justify-end">
            <Link href="/rankings" className="hover:text-orange-400 transition-colors whitespace-nowrap">WAR ROOM</Link>
            <Link href="/playbook" className="hover:text-orange-400 transition-colors whitespace-nowrap">PLAYBOOK</Link>
            <Link href="/methodology" className="hover:text-orange-400 transition-colors whitespace-nowrap">THE METHOD</Link>
            <Link href="/whitepaper" className="text-orange-500 font-black whitespace-nowrap">WHITEPAPER</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors whitespace-nowrap">ORIGIN</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}