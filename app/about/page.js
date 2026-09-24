export const metadata = {
  title: 'Origin & Whitepaper | Multiverse Football',
  description: 'The story behind the cross-sport fantasy engine and its architectural foundation.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-4xl mx-auto">
      
      {/* SECTION 1: THE ORIGIN */}
      <div className="space-y-4 mb-14 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
          Genesis • Why We Built This
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE ORIGIN
        </h1>
      </div>

      <div className="space-y-8 text-zinc-300 font-light text-base sm:text-lg leading-relaxed mb-24">
        <p>
          It starts the same way for all of us. You grew up watching global soccer. You know the weight of a number 10 jersey and the tension of a Champions League knockout match.
        </p>
        <p>
          But somewhere along the line, you discovered Sunday afternoons. You fell in love with the tactical drive, high stakes, and deep statistical analysis of the NFL. Soon your routine was divided: Premier League matches in the morning, NFL RedZone in the afternoon.
        </p>
        <div className="border-l-4 border-orange-500 pl-6 py-2 my-8 bg-zinc-900/40 rounded-r-lg">
          <h2 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight">
            ELITE ATHLETIC DOMINANCE IS A UNIVERSAL LANGUAGE. WE JUST NEEDED THE RIGHT DICTIONARY.
          </h2>
        </div>
        <p>
          You don't just see a midfielder passing a ball anymore—you see a <strong className="text-red-400 font-semibold">Quarterback</strong> moving the chains. You don't just see a winger beating his marker—you see a <strong className="text-blue-400 font-semibold">Wide Receiver</strong> racking up Yards After Catch. You don't just see a physical striker holding off defenders—you see a <strong className="text-emerald-400 font-semibold">Running Back</strong> demanding Red Zone touches.
        </p>
        <p>
          <strong className="text-white font-semibold">Multiverse Football</strong> was born from this exact realization. We didn't want endless cross-sport debates in the pub. We wanted proof. When we realized that advanced soccer telemetry—like npxG and xAG—perfectly mirrored the predictive analytics used by NFL front offices, the path was clear. 
        </p>
      </div>

      {/* SECTION 2: THE WHITEPAPER */}
      <div className="space-y-4 mb-10 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 text-white font-mono text-xs font-bold tracking-widest uppercase">
          Technical Document • V1.0
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          THE WHITEPAPER
        </h2>
      </div>

      <div className="space-y-12 text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
        <section>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">1. The Problem: Disconnected Frameworks</h3>
          <p className="mb-4">
            Historically, global soccer analytics and American football fantasy systems have operated in silos. Soccer analytics suffered from a lack of digestible, gamified output, while NFL fantasy formats lacked integration with the world's most popular sport. Fans who understood the tactical nuances of both rulebooks had no unified platform to measure athletic dominance across sports.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">2. The Solution: Dual-Engine Architecture</h3>
          <p className="mb-4">
            Multiverse Football introduces a proprietary two-pillar system designed to satisfy both the casual fantasy player and the advanced data scout:
          </p>
          <ul className="list-disc pl-5 space-y-3 font-mono text-xs text-zinc-400">
            <li><strong className="text-orange-400">The WIF Matrix (Execution):</strong> A locked, historical algorithm that translates actual pitch events (goals, key passes, turnovers) into standard NFL PPR points. It is the immutable scoreboard.</li>
            <li><strong className="text-purple-400">The xWIF Engine (Prediction):</strong> A dynamic scouting module utilizing npxG, xAG, xT, and xGOT. It acts as a crystal ball, projecting future performance and market inefficiencies.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">3. Mathematical Equivalency (Z-Scores)</h3>
          <p className="mb-4">
            The foundation of our point allocation relies on Z-Score normalization. We isolated the top 5% of elite NFL fantasy producers (yielding 20-25 FPPG) and cross-referenced their volume with the top 5% of elite global soccer telemetry. 
          </p>
          <p>
            By mapping Key Passes to the exact mathematical weight of PPR Receptions, and scaling Red Zone touches accordingly, we ensure that a world-class soccer performance generates the exact numerical output of a world-class NFL Sunday.
          </p>
        </section>
      </div>

    </div>
  );
}
