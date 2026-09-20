'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* HEADER NAVEGAÇÃO IMERSIVA */}
      <header className="absolute top-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter uppercase drop-shadow-lg">
          <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-mono text-xs font-bold tracking-widest text-zinc-300">
          <Link href="/rankings" className="hover:text-orange-400 transition-colors">WAR ROOM</Link>
          <Link href="/methodology" className="hover:text-orange-400 transition-colors">THE METHOD</Link>
          <Link href="/about" className="hover:text-orange-400 transition-colors">ORIGIN</Link>
        </nav>
      </header>

      {/* HERO SECTION: O IMPACTO */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image com Overlay Escuro */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508344928928-7137b29de216?q=80&w=2000&auto=format&fit=crop" 
            alt="Stadium Lights" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F12]/40 via-[#0E0F12]/80 to-[#0E0F12]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            The Ultimate Sports Crossover
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9] drop-shadow-2xl mb-6">
            What if your team <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">played in the NFL?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-10">
            We translate global soccer telemetry into gridiron archetypes. Witness your favorite athletes reimagined for the NFL through audited performance data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(249,115,22,0.4)] text-sm">
              Enter The War Room
            </Link>
            <Link href="/methodology" className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-white font-bold uppercase tracking-widest px-10 py-5 rounded-xl transition-all text-sm backdrop-blur-sm">
              See The Math
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO DA MAGIA: SHOWCASE DE JOGADORES */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-24 -mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            The Multiverse <span className="text-orange-500">Variants</span>
          </h2>
          <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
            Cross-sport dimensional mapping // Real Data. Real Archetypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: KDB */}
          <div className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop" 
              alt="Playmaker" 
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Origin // Soccer</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Playmaker</div>
                </div>
                <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="text-right">
                  <div className="text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Variant // NFL</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Franchise QB</div>
                </div>
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">K. De Bruyne</h3>
              <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                Elite spatial processing and progressive passing mapped directly to pocket presence and 3rd-down conversions.
              </p>
            </div>
          </div>

          {/* Card 2: Vini Jr */}
          <div className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop" 
              alt="Winger" 
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Origin // Soccer</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Winger</div>
                </div>
                <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="text-right">
                  <div className="text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Variant // NFL</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Deep Threat WR</div>
                </div>
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">V. Júnior</h3>
              <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                Explosive burst in open space and elite separation mechanics translated to vertical routes and YAC dominance.
              </p>
            </div>
          </div>

          {/* Card 3: Haaland */}
          <div className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop" 
              alt="Striker" 
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Origin // Soccer</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Striker</div>
                </div>
                <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="text-right">
                  <div className="text-orange-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-1">Variant // NFL</div>
                  <div className="text-white font-bold tracking-wider uppercase text-sm">Power RB</div>
                </div>
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">E. Haaland</h3>
              <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                Raw physical leverage, contact resistance, and red-zone finishing mapped to goal-line carries and broken tackles.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MANIFESTO: THE BILINGUAL FAN */}
      <section className="bg-[#121316] border-y border-zinc-800/80 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
            Built for the <span className="text-orange-500">Bilingual Fan</span>
          </h2>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              You grew up breathing global soccer. But somewhere along the line, you fell in love with the NFL. Now, your brain is wired differently.
            </p>
            <p>
              You don't just see a midfielder passing a ball anymore—you see a Quarterback reading a secondary. You don't just see a winger running down the flank—you see a Wide Receiver creating vertical separation.
            </p>
            <p className="text-white font-bold">
              Once you understand both rulebooks, you realize elite athletic dominance is a universal language.
            </p>
          </div>
          <div className="mt-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-mono text-sm font-bold tracking-widest uppercase transition-colors">
              Read The Full Origin Story 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0E0F12] py-12 border-t border-zinc-900 text-center">
        <div className="font-black text-xl tracking-tighter uppercase mb-4 opacity-50">
          <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
        </div>
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          Engineered for the fans. Not affiliated with the NFL or any soccer league.
        </p>
      </footer>
    </div>
  );
}