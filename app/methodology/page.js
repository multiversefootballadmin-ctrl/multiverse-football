'use client';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-16 space-y-20">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Audited Telemetry Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Methodology</span>
          </h1>
        </header>

        <section className="space-y-6 border-l-4 border-orange-500 pl-6 md:pl-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Act I: The "What If" Paradox
          </h2>
          <div className="text-zinc-300 font-light leading-relaxed text-lg italic">
            "What if Kevin De Bruyne had a clean pocket against a Cover 2 shell? What if Erling Haaland lined up in the I-formation with 2 yards to the goal line? What if Vinicius Jr. caught a boundary slant with open grass ahead? What if Kyle Walker lined up as a lockdown press-man cornerback?"
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2">
            Act II: The Metric Decoder (Translating The Science)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121316] p-6 border border-zinc-800">
              <h3 className="font-bold text-white text-lg mb-2">xG (Expected Goals) <span className="text-zinc-500 text-sm font-normal">— Strike Quality</span></h3>
              <p className="text-zinc-400 text-sm">Quantifies the mathematical probability (0.0 to 1.0) of a shot converting, validating true red-zone execution.</p>
            </div>
            <div className="bg-[#121316] p-6 border border-zinc-800">
              <h3 className="font-bold text-white text-lg mb-2">xA (Expected Assists) <span className="text-zinc-500 text-sm font-normal">— Field Vision Index</span></h3>
              <p className="text-zinc-400 text-sm">Isolates pure passing vision and opening reads regardless of whether a teammate botches the finish.</p>
            </div>
            <div className="bg-[#121316] p-6 border border-zinc-800">
              <h3 className="font-bold text-white text-lg mb-2">Progressive Distance <span className="text-zinc-500 text-sm font-normal">— Real Yardage</span></h3>
              <p className="text-zinc-400 text-sm">Measures every forward action advancing 10+ meters toward goal—the pitch equivalent of moving the chains.</p>
            </div>
            <div className="bg-[#121316] p-6 border border-zinc-800">
              <h3 className="font-bold text-white text-lg mb-2">High Pressures <span className="text-zinc-500 text-sm font-normal">— The Pass Rush</span></h3>
              <p className="text-zinc-400 text-sm">Pinpoints defensive disruption in opponent territory, mirroring blind-side quarterback sacks.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2">
            Act III: The Translation Matrix
          </h2>
          <div className="overflow-x-auto border border-zinc-800 bg-[#121316]">
            <table className="w-full text-left border-collapse whitespace-nowrap text-sm">
              <thead>
                <tr className="bg-[#0E0F12] font-mono text-zinc-500 uppercase tracking-widest text-[10px]">
                  <th className="p-4 border-b border-zinc-800">NFL Dimension</th>
                  <th className="p-4 border-b border-zinc-800">Pitch Dimension (Soccer)</th>
                  <th className="p-4 border-b border-zinc-800">The Athletic Reality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Touchdown (6 Pts)</td><td className="p-4">Goal Scored</td><td className="p-4 text-xs font-light text-zinc-400">Drive conversion in maximum-density territory.</td></tr>
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Passing Air Yards</td><td className="p-4">Progressive Pass Distance</td><td className="p-4 text-xs font-light text-zinc-400">Ground conquered via aerial distribution.</td></tr>
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Rushing Yards</td><td className="p-4">Progressive Carries</td><td className="p-4 text-xs font-light text-zinc-400">Territory taken through direct physical penetration.</td></tr>
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Yards After Catch (YAC)</td><td className="p-4">Take-ons / Dribbles in Stride</td><td className="p-4 text-xs font-light text-zinc-400">Winning spatial separation after receiving possession.</td></tr>
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Turnover (INT / Fumble)</td><td className="p-4">Dispossessed in Own Half</td><td className="p-4 text-xs font-light text-zinc-400">Critical turnover surrendering immediate field position.</td></tr>
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Quarterback Sack</td><td className="p-4">Tackle Won via High Press</td><td className="p-4 text-xs font-light text-zinc-400">Neutralizing the distributor behind offensive setup.</td></tr>
                <tr className="hover:bg-zinc-800/30"><td className="p-4 font-bold text-white">Goal-Line Stand</td><td className="p-4">Clean Sheet / Box Stops</td><td className="p-4 text-xs font-light text-zinc-400">Preserving end-zone integrity across all downs.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#121316] border border-orange-500/30 p-8 md:p-12 space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            Act IV: The Quantum Leap (WIF Score vs. Legacy Fantasy PPR)
          </h2>
          <p className="text-zinc-300 font-light leading-relaxed">
            Traditional fantasy scoring relies on flat PPR (Points Per Reception), treating a 1-yard screen behind the line of scrimmage identically to a 35-yard vertical strike. 
          </p>
          <p className="text-zinc-300 font-light leading-relaxed">
            The <strong className="text-white">WIF Score (What If Score)</strong> calculates context-weighted volume, territorial gravity inside the red zone, and risk-adjusted turnover penalties to reflect true athletic dominance. The exact final multiplier is our proprietary <strong className="text-orange-500">Black Box</strong>.
          </p>
          
          <div className="bg-[#0E0F12] border border-zinc-700 p-6 text-center mt-6">
            <div className="font-mono text-sm md:text-lg text-zinc-300 break-words leading-loose">
              <span className="text-orange-400 font-black">WIF_SCORE</span> = (BASE_METRIC × POSITIONAL_WEIGHT) + <br className="md:hidden" />
              <span className="bg-zinc-800 text-zinc-800 px-2 py-1 select-none animate-pulse">████████_MULTIPLIER</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}