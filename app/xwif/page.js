import Link from 'next/link';

export const metadata = {
  title: 'xWIF Engine | Predictive Fantasy Scouting',
  description: 'Using npxG, xAG, and xT to project future fantasy points.',
};

export default function ExpectedWifPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-5xl mx-auto">
      
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border-l-2 border-purple-500 text-purple-400 font-mono text-xs font-bold tracking-widest uppercase">
          The Crystal Ball • Predictive Analytics
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE xWIF ENGINE
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          Standard fantasy scoring is cruel and binary: it rewards execution. But scouting rewards intent. Welcome to <strong className="text-white font-semibold">Expected WIF (xWIF)</strong>, our predictive engine built to find players generating elite volume who are about to explode (or regress).
        </p>
      </div>

      <section className="mb-20">
        <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-8 border-b border-zinc-800 pb-3">
          The 4 Pillars of Projection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-black text-white text-xl uppercase tracking-wide group-hover:text-purple-400 transition-colors">npxG</h3>
              <span className="text-[9px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-400 uppercase">Non-Penalty Expected Goals</span>
            </div>
            <p className="text-sm text-zinc-400 font-light mb-4">Removes the "fluke" of penalty kicks to show true open-play dominance.</p>
            <div className="pt-3 border-t border-zinc-800/80 font-mono text-xs">
              <span className="text-zinc-500 uppercase block mb-1">NFL Scouting Equivalent</span>
              <span className="text-white font-bold">Projected Rushing / Receiving Touchdowns</span>
            </div>
          </div>

          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-black text-white text-xl uppercase tracking-wide group-hover:text-purple-400 transition-colors">xAG</h3>
              <span className="text-[9px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-400 uppercase">Expected Assisted Goals</span>
            </div>
            <p className="text-sm text-zinc-400 font-light mb-4">Measures the quality of passes leading to shots, rewarding elite playmakers.</p>
            <div className="pt-3 border-t border-zinc-800/80 font-mono text-xs">
              <span className="text-zinc-500 uppercase block mb-1">NFL Scouting Equivalent</span>
              <span className="text-white font-bold">Projected Passing Touchdowns</span>
            </div>
          </div>

          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-black text-white text-xl uppercase tracking-wide group-hover:text-purple-400 transition-colors">xT</h3>
              <span className="text-[9px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-400 uppercase">Expected Threat</span>
            </div>
            <p className="text-sm text-zinc-400 font-light mb-4">Calculates how much a pass or carry increases scoring probability.</p>
            <div className="pt-3 border-t border-zinc-800/80 font-mono text-xs">
              <span className="text-zinc-500 uppercase block mb-1">NFL Scouting Equivalent</span>
              <span className="text-white font-bold">Moving the Chains / Air Yards / PPR</span>
            </div>
          </div>

          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-black text-white text-xl uppercase tracking-wide group-hover:text-purple-400 transition-colors">xGOT</h3>
              <span className="text-[9px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-400 uppercase">Expected Goals on Target</span>
            </div>
            <p className="text-sm text-zinc-400 font-light mb-4">Evaluates shot quality after impact. Separates elite finishers from high-volume wasters.</p>
            <div className="pt-3 border-t border-zinc-800/80 font-mono text-xs">
              <span className="text-zinc-500 uppercase block mb-1">NFL Scouting Equivalent</span>
              <span className="text-white font-bold">Completion Percentage Over Expected (CPOE)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ESTUDO DE CASO REAL DA API */}
      <section className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-zinc-800 pb-4 mb-6">
            <div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">Real Data Case Study (Overperformance)</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Harry Kane (Bayern München)</h3>
            </div>
            <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono uppercase px-3 py-1.5 rounded mt-3 sm:mt-0">
              Role: RB1 (Goal-Line Back)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* O PLACAR REAL */}
            <div className="bg-[#0E0F12] border border-zinc-800 p-6 rounded-xl">
              <h4 className="font-mono text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Execution (Real WIF)</h4>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">36 Goals Scored</span>
                  <span className="text-white font-bold">Total: 216.0 pts</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">5 Assists</span>
                  <span className="text-white font-bold">Total: 20.0 pts</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-zinc-800/60">
                  <span className="text-zinc-400">Total Output / 90</span>
                  <span className="text-orange-400 font-black text-lg">16.3 FPPG</span>
                </div>
              </div>
            </div>

            {/* O PLACAR PREDITIVO */}
            <div className="bg-[#14161B] border border-red-500/30 p-6 rounded-xl">
              <h4 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Prediction (xWIF Outlook)</h4>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">0.90 npxG / 90</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded">OVERPERFORMING</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">13.7 xWIF / 90</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded">-2.6 DELTA</span>
                </div>
                <div className="pt-3 border-t border-zinc-800/60 text-zinc-300 font-sans text-sm leading-relaxed">
                  <strong className="text-red-400 font-mono text-[10px] uppercase block mb-1">War Room Verdict: SELL HIGH</strong>
                  Kane is converting chances at a historic, unsustainable rate. His WIF is massive (16.3), but his underlying telemetry (13.7 xWIF) shows he is due for a regression. Defenses will stack the box. Cash out while his value is artificially inflated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
