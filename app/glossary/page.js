'use client';

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 space-y-16">
        
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Multiverse 101
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Dictionary</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            New to advanced analytics? Don't watch the NFL? We've got you covered. Here is the survival guide to the terminology used across the Multiverse.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SOCCER TERMINOLOGY */}
          <section className="space-y-6">
            <div className="border-b border-zinc-800 pb-2 flex items-center gap-3">
              <span className="text-2xl">⚽</span>
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Pitch Metrics (Soccer)</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">xG (Expected Goals)</h3>
                <p className="text-sm text-zinc-400 font-light">A metric that calculates the probability of a shot resulting in a goal (from 0.00 to 1.00) based on location, angle, and assist type. It measures true finishing quality.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">xA (Expected Assists)</h3>
                <p className="text-sm text-zinc-400 font-light">Measures the likelihood that a pass will become an assist. It rewards players for creating great chances, even if the striker misses the shot.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">Progressive Pass / Carry</h3>
                <p className="text-sm text-zinc-400 font-light">Moving the ball significantly closer to the opponent's goal (usually 10+ yards). This is the soccer equivalent of "moving the chains".</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">Take-on / Dribble</h3>
                <p className="text-sm text-zinc-400 font-light">When a player attempts to beat a defender while maintaining possession of the ball. Elite wingers have high take-on success rates.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">Clean Sheet</h3>
                <p className="text-sm text-zinc-400 font-light">When a team or goalkeeper prevents the opponent from scoring any goals for the entire match.</p>
              </div>
            </div>
          </section>

          {/* NFL TERMINOLOGY */}
          <section className="space-y-6">
            <div className="border-b border-zinc-800 pb-2 flex items-center gap-3">
              <span className="text-2xl">🏈</span>
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Gridiron Output (NFL)</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">The Pocket</h3>
                <p className="text-sm text-zinc-400 font-light">The protected area formed by the offensive line where the Quarterback stands to look for a pass. Needs high awareness to survive.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">YAC (Yards After Catch)</h3>
                <p className="text-sm text-zinc-400 font-light">The distance a receiver runs with the ball after catching a pass. Elite YAC players create huge plays out of short, simple passes.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">3rd Down Conversion</h3>
                <p className="text-sm text-zinc-400 font-light">The NFL gives you 4 tries (downs) to advance 10 yards. Converting on 3rd down is a critical metric for sustaining attacking drives.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">D/ST Unit</h3>
                <p className="text-sm text-zinc-400 font-light">Stands for Defense & Special Teams. In fantasy sports, you draft the entire defensive team, not just one defender.</p>
              </div>
              <div className="bg-[#121316] p-5 border border-zinc-800/60">
                <h3 className="font-bold text-white text-base mb-1">Sack</h3>
                <p className="text-sm text-zinc-400 font-light">When the defense tackles the Quarterback behind the line of scrimmage before he can throw the ball. A catastrophic momentum killer.</p>
              </div>
            </div>
          </section>

          {/* MULTIVERSE TERMINOLOGY */}
          <section className="space-y-6">
            <div className="border-b border-orange-500/50 pb-2 flex items-center gap-3">
              <span className="text-2xl">🌌</span>
              <h2 className="text-xl font-black text-orange-500 uppercase tracking-wider">The Multiverse</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#121316] p-5 border-l-2 border-orange-500 shadow-md">
                <h3 className="font-bold text-white text-base mb-1">WIF Score</h3>
                <p className="text-sm text-zinc-400 font-light">The "What If Football" Score. Our proprietary algorithm that ingests soccer data, translates it to NFL actions, and outputs an official Fantasy Point total.</p>
              </div>
              <div className="bg-[#121316] p-5 border-l-2 border-orange-500 shadow-md">
                <h3 className="font-bold text-white text-base mb-1">Archetype Bridge</h3>
                <p className="text-sm text-zinc-400 font-light">The designated mapping for a player. For example, a target striker (Soccer) is mathematically mapped to a Power Running Back (NFL).</p>
              </div>
              <div className="bg-[#121316] p-5 border-l-2 border-orange-500 shadow-md">
                <h3 className="font-bold text-white text-base mb-1">Dimensional Boxscore</h3>
                <p className="text-sm text-zinc-400 font-light">The stat sheet found on player profiles that displays their Native Soccer Production side-by-side with their Translated NFL Output.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}