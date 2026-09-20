import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Multiverse Football',
  description: 'Cross-Sport Telemetry',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
        
        {/* MENU GLOBAL ÚNICO */}
        <header className="sticky top-0 w-full z-50 px-6 py-6 flex justify-between items-center border-b border-zinc-800/60 bg-[#0E0F12]/90 backdrop-blur-md">
          <div className="font-black text-xl md:text-2xl tracking-tighter uppercase">
            <Link href="/">
              <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 font-mono text-xs font-bold tracking-widest text-zinc-400">
            <Link href="/rankings" className="hover:text-orange-400 transition-colors">WAR ROOM</Link>
            <Link href="/playbook" className="hover:text-orange-400 transition-colors">PLAYBOOK</Link>
            <Link href="/methodology" className="hover:text-orange-400 transition-colors">THE METHOD</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">ORIGIN</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}