export const metadata = {
  title: 'Glossary | Multiverse Football',
  description: 'The dictionary bridging NFL fantasy terms and advanced soccer telemetry.',
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
      </div>

      <div className="space-y-12">
        {/* SECTION 1: NFL CONCEPTS */}
        <section>
          <h2 className="text-xl font-black uppercase tracking-tight text-white mb-6 border-b border-zinc-800 pb-2">NFL Fantasy Core</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">PPR (Points Per Reception)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                A scoring format that awards 1.0 point for every catch a player makes, regardless of the yardage gained. It heavily values volume and consistency. In our engine, <strong className="text-white">Key Passes</strong> serve as the PPR equivalent.
              </p>
            </div>
            <div>
              <h3 className="text-orange-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">YAC (Yards After Catch)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                The yardage gained by a receiver after securing the ball. It highlights broken tackles and open-field athleticism. We map this to <strong className="text-white">Successful Take-ons (Dribbles)</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WIF ENGINE */}
        <section>
          <h2 className="text-xl font-black uppercase tracking-tight text-white mb-6 border-b border-zinc-800 pb-2">WIF Matrix (Execution)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-blue-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">WIF Score</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                The official standard scoring metric of Multiverse Football. It tallies actual on-pitch execution (goals, key passes, turnovers) into traditional NFL fantasy points.
              </p>
            </div>
            <div>
              <h3 className="text-blue-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">Critical Error</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Losing the ball in a dangerous area that immediately leads to an opponent's shot. This is our equivalent of a lost Fumble or Interception (-2.0 pts). Standard midfield dispossessions are not penalized.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: xWIF PREDICTIVE METRICS */}
        <section>
          <h2 className="text-xl font-black uppercase tracking-tight text-white mb-6 border-b border-zinc-800 pb-2">xWIF Engine (Predictive)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">npxG (Non-Penalty Expected Goals)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Measures the quality of goalscoring chances excluding penalty kicks. It projects a player's true ability to generate open-play Touchdowns.
              </p>
            </div>
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">xAG (Expected Assisted Goals)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Evaluates the quality of a final pass leading to a shot. Even if the striker misses, the passer's xAG rises. It projects future Passing Touchdowns.
              </p>
            </div>
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">xT (Expected Threat)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Calculates how much a player's passes and carries move the ball into dangerous zones. The ultimate metric for mapping "Air Yards" and drive-sustaining First Downs.
              </p>
            </div>
            <div>
              <h3 className="text-purple-400 font-mono font-bold uppercase tracking-widest text-sm mb-1">xGOT (Expected Goals on Target)</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Assesses shot quality post-impact. It isolates elite finishing ability, mirroring a Quarterback's Completion Percentage Over Expected (CPOE).
              </p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
