'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-28">
      <main className="max-w-5xl mx-auto px-4 md:px-8 pt-10 space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4 border-b border-zinc-800/80 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 font-mono text-xs font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            TRUE FAN MANIFESTO
          </div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            THE MULTIVERSE INITIATIVE
          </h1>
          <p className="text-zinc-400 text-base md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            Athletic genius transcends the shape of the ball. We map kinesthetic signatures across tactical dimensions.
          </p>
        </div>

        {/* Section 01: The Philosophy */}
        <section className="bg-[#16171B] border border-zinc-800/90 rounded-3xl p-6 md:p-10 shadow-xl space-y-8">
          <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase block border-b border-zinc-800 pb-4">
            01 // THE VARIANT THEORY
          </span>
          <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
            <p>
              Multiverse Football was born from a simple, obsessive question: what happens if you take a world-class soccer playmaker's spatial awareness and drop it onto the gridiron? 
            </p>
            <p>
              In theoretical physics—and in our favorite sci-fi lore—every entity has a variant across dimensions. The exact same rule applies to sports. A midfielder manipulating defensive gravity on a grass pitch shares the identical kinematic DNA and processing speed as a franchise Quarterback reading a secondary. The uniform changes, the environment shifts, but the archetype remains.
            </p>
            <p>
              Built by and for True Fans, this platform strips away the superficial differences between global soccer and American football. We use advanced telemetry to prove that elite athletic dominance is a universal language.
            </p>
          </div>
        </section>
        
        {/* Section 02: Core Principles */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-[#121316] p-6 rounded-xl border border-zinc-800">
              <span className="text-orange-400 font-bold block mb-2 text-sm">ORIGIN STORY</span>
              <span className="text-zinc-400 leading-relaxed">Driven by raw passion and tactical obsession. No corporate noise, just a pure pursuit of cross-sport analytical truth.</span>
            </div>
            <div className="bg-[#121316] p-6 rounded-xl border border-zinc-800">
              <span className="text-orange-400 font-bold block mb-2 text-sm">EMPIRICAL EVIDENCE</span>
              <span className="text-zinc-400 leading-relaxed">Grounded exclusively in factual appearances, spatial data, and audited stats. We do not guess capabilities; we measure them.</span>
            </div>
            <div className="bg-[#121316] p-6 rounded-xl border border-zinc-800">
              <span className="text-orange-400 font-bold block mb-2 text-sm">CROSS-TALK</span>
              <span className="text-zinc-400 leading-relaxed">Eliminating communication barriers between soccer and gridiron fans through a shared, universal taxonomy of performance.</span>
            </div>
        </section>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-800 font-mono text-xs">
          <Link href="/methodology" className="text-zinc-400 hover:text-white transition">
            ← METHODOLOGY
          </Link>
          <Link href="/rankings" className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition">
            ENTER WAR ROOM →
          </Link>
        </div>
      </main>
    </div>
  );
}