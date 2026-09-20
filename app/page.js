'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D110E] text-[#F3F1E7] font-sans selection:bg-[#E8B923] selection:text-black">
      {/* Terminal Style Header */}
      <header className="border-b border-[#0B3D2E] p-6 flex justify-between items-center bg-[#0D110E]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="font-black text-2xl tracking-tighter uppercase">
          <span className="text-white">MULTIVERSE</span> <span className="text-[#E8B923]">FOOTBALL</span>
        </div>
        <nav className="space-x-8 font-mono text-sm tracking-widest text-[#9AAFA8]">
          <Link href="/rankings" className="hover:text-[#E8B923] transition-colors">WAR ROOM</Link>
          <Link href="/methodology" className="hover:text-[#E8B923] transition-colors">THE METHOD</Link>
          <Link href="/about" className="hover:text-[#E8B923] transition-colors">ORIGIN</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content - The Pitch */}
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            {/* Echo Typography Effect */}
            <div className="relative">
              <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none absolute -top-8 left-2 opacity-10 text-white select-none">
                WHAT IF YOUR TEAM
              </h1>
              <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none relative z-10 text-white drop-shadow-2xl">
                What if your team <br/>
                <span className="text-[#E8B923]">played in the NFL?</span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-[#9AAFA8] max-w-xl leading-relaxed font-light">
            Nós não inventamos narrativas. Nós cruzamos telemetria. Cada atleta do futebol global é traduzido em posições e desempenho reais da NFL através do <strong>WIF Score</strong>. Sem opinião — apenas cálculo bruto.
          </p>

          <div className="pt-8 flex gap-4">
            <Link href="/rankings" className="bg-[#E8B923] text-black font-black uppercase tracking-widest px-8 py-4 hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(232,185,35,0.3)]">
              Enter The War Room
            </Link>
            <Link href="/methodology" className="border border-[#0B3D2E] text-[#9AAFA8] font-mono uppercase tracking-widest px-8 py-4 hover:bg-[#0B3D2E]/30 transition-all">
              See The Math
            </Link>
          </div>
        </div>

        {/* Right Content - The Split Card Concept */}
        <div className="flex-1 w-full max-w-md relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3D2E] to-[#E8B923] opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative h-[500px] w-full bg-[#0a0d0b] border border-[#1a241f] shadow-2xl flex overflow-hidden transform transition-transform duration-500 hover:scale-105">
            {/* Diagonal Split Line */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(105deg, transparent 49.5%, #E8B923 49.5%, #E8B923 50.5%, transparent 50.5%)' }}></div>
            
            {/* Origin Side (Soccer) */}
            <div className="w-1/2 h-full bg-[#0B3D2E]/20 p-6 flex flex-col justify-between border-r border-transparent">
              <div className="font-mono text-xs text-[#9AAFA8] tracking-widest">ORIGIN //</div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">ARRASCAETA</div>
                <div className="text-sm font-mono text-emerald-400">PLAYMAKER // 10</div>
              </div>
            </div>

            {/* Destination Side (NFL) */}
            <div className="w-1/2 h-full bg-zinc-900/40 p-6 flex flex-col justify-between items-end text-right">
              <div className="font-mono text-xs text-[#E8B923] tracking-widest">// DESTINATION</div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">FRANCHISE</div>
                <div className="text-5xl font-black text-[#E8B923] drop-shadow-lg">QB</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}