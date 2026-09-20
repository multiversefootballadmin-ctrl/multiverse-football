'use client';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      
      {/* Expressão de fundo gigante */}
      <div className="absolute top-40 -right-20 text-[10vw] font-black text-white opacity-[0.03] rotate-90 pointer-events-none select-none uppercase leading-none whitespace-nowrap">
        THE SECRET SAUCE
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 space-y-16">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Audited Telemetry Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Methodology</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            The WIF (What.IF.ootball) Score is not an opinion. It is a strict, weighted algorithmic conversion that maps situational Soccer metrics into standard NFL output equivalents.
          </p>
        </header>

        <section className="bg-[#121316] border border-zinc-800 p-8 md:p-12 space-y-10 shadow-2xl">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
              <span className="text-orange-500">01.</span> The Formula
            </h2>
            <p className="text-zinc-400 font-light mb-6 text-base leading-relaxed">
              We translate base positional performance openly, but the true value lies in situational leverage. The exact weighting of the final multiplier is our proprietary <strong>Black Box</strong>. It is the secret sauce that separates a good guess from audited telemetry.
            </p>
            
            <div className="bg-[#0E0F12] border border-zinc-700 p-6 md:p-10 text-center shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="font-mono text-sm md:text-lg text-zinc-300 break-words leading-loose">
                <span className="text-orange-400 font-black">WIF_SCORE</span> = (BASE_METRIC × POSITIONAL_WEIGHT) + <br className="md:hidden" />
                <span className="bg-zinc-800 text-zinc-800 px-2 py-1 select-none animate-pulse">████████_MULTIPLIER</span>
              </div>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-6">
                [ CLASSIFIED ALGORITHMIC LEVERAGE ]
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-zinc-800">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Base Metric Translations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0E0F12] border border-zinc-800 p-6">
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-3">Soccer Origin</div>
                <div className="font-bold text-white mb-2 text-lg">Key Passes / Assists</div>
                <div className="text-sm text-zinc-400 font-light">Passes leading directly to high-xG shots.</div>
              </div>
              <div className="bg-zinc-900 border border-orange-500/30 p-6 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <div className="text-[10px] text-orange-500 font-mono uppercase tracking-widest mb-3">NFL Equivalent</div>
                <div className="font-bold text-white mb-2 text-lg">Passer Rating & 3rd Downs</div>
                <div className="text-sm text-zinc-400 font-light">Translates to Quarterback efficiency and drive continuation.</div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}