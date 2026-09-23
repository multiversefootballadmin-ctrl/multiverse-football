export const metadata = {
  title: 'Whitepaper | Multiverse Football',
  description: 'The architectural foundation of the dual-engine cross-sport platform.',
};

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-4xl mx-auto">
      
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 text-white font-mono text-xs font-bold tracking-widest uppercase">
          Technical Document • V1.0
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE WHITEPAPER
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          An executive overview of the dual-engine architecture powering Multiverse Football. Bridging the gap between execution scoring and predictive advanced telemetry.
        </p>
      </div>

      <div className="space-y-12 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
        
        <section>
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4">1. The Problem: Disconnected Frameworks</h2>
          <p className="mb-4">
            Historically, global soccer analytics and American football fantasy systems have operated in silos. Soccer analytics suffered from a lack of digestible, gamified output, while NFL fantasy formats lacked integration with the world's most popular sport. Fans who understood the tactical nuances of both rulebooks had no unified platform to measure athletic dominance across sports.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4">2. The Solution: Dual-Engine Architecture</h2>
          <p className="mb-4">
            Multiverse Football introduces a proprietary two-pillar system designed to satisfy both the casual fantasy player and the advanced data scout:
          </p>
          <ul className="list-disc pl-5 space-y-3 font-mono text-xs text-zinc-400">
            <li><strong className="text-orange-400">The WIF Matrix (Execution):</strong> A locked, historical algorithm that translates actual pitch events (goals, key passes, take-ons, critical turnovers) into standard NFL PPR fantasy points. It is the immutable scoreboard.</li>
            <li><strong className="text-purple-400">The xWIF Engine (Prediction):</strong> A dynamic scouting module utilizing npxG, xAG, xT, and xGOT. It acts as a crystal ball, projecting future performance and market inefficiencies (buy low/sell high) without polluting the historical WIF scoreboard.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4">3. Mathematical Equivalency (Z-Scores)</h2>
          <p className="mb-4">
            The foundation of our point allocation relies on Z-Score normalization. We isolated the top 5% of elite NFL fantasy producers (yielding 20-25 FPPG) and cross-referenced their volume with the top 5% of elite global soccer telemetry. 
          </p>
          <p>
            By mapping Key Passes to the exact mathematical weight of PPR Receptions, and scaling Red Zone touches accordingly, we ensure that a world-class soccer performance generates the exact numerical output of a world-class NFL Sunday.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4">4. Future Ecosystem Expansion</h2>
          <p>
            The stabilization of the V1.0 matrix paves the way for platform expansion, including live API integrations, Daily Fantasy Sports (DFS) crossover slates, and institutional scouting tools for cross-sport athletic evaluation.
          </p>
        </section>

      </div>
    </div>
  );
}
