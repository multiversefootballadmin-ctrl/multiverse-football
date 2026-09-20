'use client';

import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-12 border-b border-zinc-800 pb-8">
        <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-semibold rounded-full mb-4">
          SYSTEM ARCHITECTURE // AUDITED METRICS
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          TRANSLATING SOCCER TELEMETRY INTO NFL ARCHETYPES
        </h1>
        <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Multiverse Football converts multi-dimensional spatial tracking data, expected possession value (EPV), and high-intensity physical stress into NFL-equivalent positional leverage.
        </p>
      </div>

      {/* Section 01: Core Philosophy */}
      <section className="mb-12">
        <div className="bg-[#121318] border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
          <div className="text-orange-500 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            SECTION 01 // FOUNDATIONAL MAPPING
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            CROSS-SPORT SYSTEMIC EQUIVALENCE
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Traditional cross-sport comparisons rely on superficial narratives. Our projection engine isolates kinematic signatures, positional leverage, and explosive acceleration profiles under high spatial compression.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
              <div className="text-cyan-400 font-mono text-xs font-bold mb-1">
                3RD & SHORT // HIGH-STAKES CONVERSION
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                High-leverage pressure situations. Key passes into compressed spaces, physical ground duels under rush, and rapid turnovers.
              </p>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">
              <div className="text-emerald-400 font-mono text-xs font-bold mb-1">
                RED ZONE // GOAL-LINE EFFICIENCY
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Inside the penalty box (final 18 yards). High-probability scoring conversions (Touchdowns) balanced against collective defensive stops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: WIF Rating Architecture */}
      <section className="mb-12">
        <div className="bg-[#121318] border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
          <div className="text-orange-500 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            SECTION 02 // MULTIDIMENSIONAL ALGORITHM
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            02 // THE PROPRIETARY WIF RATING ARCHITECTURE
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            The WIF (War Impact Factor) is an engineered 0.0 to 30.0 composite index. Rather than assigning arbitrary video-game numbers, WIF assesses an athlete's net impact on win-probability through multi-dimensional modeling:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-orange-400 font-mono text-sm font-bold mb-2">
                A. Expected Production Impact
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Measures dangerous chance creation and direct finishing efficiency normalized against league quality and game state.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-orange-400 font-mono text-sm font-bold mb-2">
                B. Progressive Line-Breaking Velocity
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Evaluates passes and carries that successfully puncture intermediate defensive shells and gain territory.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-orange-400 font-mono text-sm font-bold mb-2">
                C. Physical Leverage & Contact Index
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Assesses contested duel success rates, recovery speed under physical challenge, and second-ball wins.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-orange-400 font-mono text-sm font-bold mb-2">
                D. Ball Protection & Disruption Ratio
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Calculates turnover resistance in tight areas and defensive stoppage efficiency per active possession.
              </p>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-xs font-mono text-orange-300">
            <span className="font-bold">ℹ Proprietary Weighting Architecture:</span> Non-linear normalization prevents raw volume inflation. High-volume, low-impact actions are discounted in favor of decisive phase transitions.
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-zinc-800 font-mono text-xs">
        <Link href="/" className="text-zinc-400 hover:text-white transition">
          ← BACK TO HOME
        </Link>
        <Link href="/rankings" className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition">
          ENTER WAR ROOM →
        </Link>
      </div>
    </main>
  );
}