export const metadata = {
  title: 'Glossary | Multiverse Football',
  description: 'The dictionary bridging NFL fantasy terms, basic rules, and advanced soccer telemetry.',
};

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-4xl mx-auto">
      
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border-l-2 border-emerald-500 text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
          Dictionary • Cross-Sport Terms
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE GLOSSARY
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          Whether you are a seasoned NFL scout or a global soccer tactician, this is your translation manual. We break down the rules of the game, the fantasy mechanics, and the predictive algorithms.
        </p>
      </div>

      <div className="space-y-16">
        
        {/* SECTION 1: BACK TO BASICS (101) */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-lg">01.</span> Back to Basics (101)
            </h2>
            <p className="text-zinc-500 font-light mt-2">Fundamental mechanics of the gridiron and the pitch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-mono text-xs font-bold text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-2">NFL Mechanics</h3>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight mb-1">The Downs System</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  An NFL offense has four attempts (downs) to advance the ball 10 yards. Doing so "moves the chains" and earns a new set of downs. In the WIF Engine, a soccer player hitting a crucial <strong className="text-emerald-400 font-medium">Through Ball</strong> carries the exact same emotional and statistical weight as converting a 3rd-and-long.
                </p>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight mb-1">Pass Interference (PI)</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  When a defender illegally tackles a receiver before the ball arrives, the offense is awarded the yardage. In our engine, <strong className="text-emerald-400 font-medium">Fouls Drawn</strong> simulate this territory gain, rewarding players who force defenders into desperate mistakes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono text-xs font-bold text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-2">Soccer Mechanics</h3>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight mb-1">The Final Third</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  The attacking segment of the soccer pitch. Entering the final third is the direct equivalent of an NFL team crossing the 20-yard line into the <strong className="text-red-400 font-medium">Red Zone</strong>. This is where execution is demanded and points are scored.
                </p>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight mb-1">Open Play vs. Set Pieces</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Open play happens while the ball is actively moving, relying on organic tactical breakdown. Set pieces (penalties, corners) are static restarts. We isolate open-play data (like <strong className="text-emerald-400 font-medium">npxG</strong>) to find players who don't rely on "fluke" goals to survive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: NFL FANTASY CORE */}
        <section>
          <div className="mb-8 border-b border-zinc-800 pb-2">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <span className="text-orange-500 font-mono text-lg">02.</span> Fantasy Mechanics
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#14161B] border border-zinc-800 p-5 rounded-xl">
              <h3 className="text-orange-400 font-mono font-bold uppercase tracking-widest text-sm mb-2">PPR (Points Per Reception)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                A format awarding 1.0 point for every catch, prioritizing volume. We map <strong className="text-white">Key Passes</strong> directly to PPR receptions.
              </p>
            </div>
            <div className="bg-[#14161B] border border-zinc-800 p-5 rounded-xl">
              <h3 className="text-orange-400 font-mono font-bold uppercase tracking-widest text-sm mb-2">YAC (Yards After Catch)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Yardage gained after securing the ball. We map this to <strong className="text-white">Successful Take-ons (Dribbles)</strong>, rewarding pure athleticism.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WIF ENGINE */}
        <section>
          <div className="mb-8 border-b border-zinc-800 pb-2">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <span className="text-blue-500 font-mono text-lg">03.</span> WIF Engine (Execution)
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-blue-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">WIF Score</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-2xl">
                The official standard scoring metric of Multiverse Football. It tallies actual on-pitch execution (goals, key passes, turnovers) into traditional NFL fantasy points.
              </p>
            </div>
            <div>
              <h3 className="text-blue-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">Critical Error</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-2xl">
                Losing the ball in a dangerous area leading to an opponent's shot. This is our equivalent of a lost Fumble or Interception (-2.0 pts). Standard midfield dispossessions are not penalized.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: xWIF PREDICTIVE METRICS */}
        <section>
          <div className="mb-8 border-b border-zinc-800 pb-2">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <span className="text-purple-500 font-mono text-lg">04.</span> xWIF (Predictive)
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">npxG</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Non-Penalty Expected Goals. Projects true open-play Touchdowns.
              </p>
            </div>
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">xAG</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Expected Assisted Goals. Evaluates setup passes, projecting future Passing Touchdowns.
              </p>
            </div>
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">xT</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Expected Threat. The ultimate metric for mapping "Air Yards" and drive-sustaining First Downs.
              </p>
            </div>
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">xGOT</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Expected Goals on Target. Isolates elite finishing ability, mirroring a QB's Completion Percentage Over Expected.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
