'use client';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      <main className="max-w-4xl mx-auto px-6 pt-16 space-y-16">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Audited Telemetry Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Methodology</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            The WIF (What.IF.ootball) Score is not an opinion. It is a strictly weighted algorithmic conversion that maps situational Soccer metrics into standard NFL output equivalents.
          </p>
        </header>

        <section className="bg-[#121316] border border-zinc-800 p-8 space-y-8 shadow-2xl">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2 mb-4">
              The WIF Algorithm
            </h2>
            <p className="text-zinc-400 font-light mb-6 text-sm">
              The universal formula scales base positional performance with situational leverage.
            </p>
            <div className="bg-[#0E0F12] border border-orange-500/30 p-6 font-mono text-sm overflow-x-auto text-orange-400 shadow-inner">
              <span className="font-bold">WIF_SCORE</span> = (BASE_METRIC × POSITIONAL_WEIGHT) + (LEVERAGE_RATE × CLUTCH_BONUS)
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Metric Translations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0E0F12] border border-zinc-800 p-5">
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2">Soccer Origin</div>
                <div className="font-bold text-white mb-1">Key Passes / Assists</div>
                <div className="text-xs text-zinc-400">Passes leading directly to high-xG shots.</div>
              </div>
              <div className="bg-zinc-900 border border-orange-500/20 p-5">
                <div className="text-[10px] text-orange-500 font-mono uppercase tracking-widest mb-2">NFL Equivalent</div>
                <div className="font-bold text-white mb-1">Passer Rating & 3rd Downs</div>
                <div className="text-xs text-zinc-400">Translates directly to Quarterback efficiency and drive continuation.</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0E0F12] border border-zinc-800 p-5">
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2">Soccer Origin</div>
                <div className="font-bold text-white mb-1">Box Entries & Take-Ons</div>
                <div className="text-xs text-zinc-400">Successful dribbles penetrating the final third.</div>
              </div>
              <div className="bg-zinc-900 border border-orange-500/20 p-5">
                <div className="text-[10px] text-orange-500 font-mono uppercase tracking-widest mb-2">NFL Equivalent</div>
                <div className="font-bold text-white mb-1">Yards After Catch (YAC)</div>
                <div className="text-xs text-zinc-400">Mapped to Wide Receivers generating separation in open space.</div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}