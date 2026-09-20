'use client';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      
      <div className="absolute top-40 -right-20 text-[10vw] font-black text-white opacity-[0.03] rotate-90 pointer-events-none select-none uppercase leading-none whitespace-nowrap">
        THE SECRET SAUCE
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 space-y-20">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Audited Telemetry Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Methodology</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            The WIF (What.IF.ootball) Score is not an opinion. It is a strictly weighted algorithmic conversion that maps situational Soccer metrics into standard NFL output equivalents.
          </p>
        </header>

        {/* FOR THE ROOKIE: The Concept */}
        <section className="space-y-6 border-l-4 border-orange-500 pl-6 md:pl-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            01. The Conceptual Bridge (For the Rookie)
          </h2>
          <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
            <p>
              Imagine a world-class midfielder threading a needle with a 40-yard ground pass to break a defensive line. Now, imagine a Quarterback scanning the secondary and hitting his tight end in stride on a 3rd-and-long. 
            </p>
            <p>
              To the untrained eye, these are two entirely different sports. To us, they are the exact same athletic expression: <strong className="text-white">Elite Spatial Processing resulting in Drive Continuation.</strong>
            </p>
            <p>
              We realized that if you strip away the grass and the ball, the kinetic energy of a fast winger cutting inside is identical to a Wide Receiver generating <strong className="text-white">Yards After Catch (YAC)</strong>. The methodology starts by mapping these identical game situations.
            </p>
          </div>
        </section>

        {/* FOR THE VETERAN: The Telemetry */}
        <section className="space-y-6 border-l-4 border-zinc-700 pl-6 md:pl-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            02. Deep Data Translation (For the Veteran)
          </h2>
          <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
            <p>
              Concept is nothing without data. To make this work for a true Fantasy Engine, we utilize advanced Soccer telemetry (Expected Goals - xG, Expected Assists - xA, Progressive Carries, and Final Third Entries) and mathematically constrain them to NFL limits.
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 marker:text-orange-500 bg-[#121316] p-6 border border-zinc-800">
              <li><strong className="text-white">Passer Efficiency:</strong> We don't just count passes. We measure passes that lead directly to high-xG scoring opportunities, translating them into NFL 3rd Down Conversions and Passing Touchdowns.</li>
              <li><strong className="text-white">Elusiveness & Separation:</strong> Successful take-ons and dribbles in tight spaces are isolated and converted into Broken Tackles and YAC efficiency rates.</li>
              <li><strong className="text-white">Defensive Shutouts:</strong> Clean sheets, interceptions, and high-line recoveries are compounded into a single Defensive/Special Teams (D/ST) output.</li>
            </ul>
          </div>
        </section>

        {/* THE BLACK BOX: The Formula */}
        <section className="bg-[#121316] border border-orange-500/30 p-8 md:p-12 space-y-10 shadow-[0_0_40px_rgba(249,115,22,0.1)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">
              03. The WIF Algorithm
            </h2>
            <p className="text-zinc-400 font-light mb-8 text-base leading-relaxed">
              We process base positional performance openly, but the true value lies in situational leverage. The exact weighting of the final algorithmic multiplier is our proprietary <strong>Black Box</strong>. It is the secret sauce guarded under lock and key that separates a generic guess from our highly-tuned Fantasy Engine.
            </p>
            
            <div className="bg-[#0E0F12] border border-zinc-700 p-6 md:p-10 text-center shadow-inner relative overflow-hidden">
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
        </section>

      </main>
    </div>
  );
}