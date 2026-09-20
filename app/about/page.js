'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      <main className="max-w-4xl mx-auto px-6 pt-16 space-y-16">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            The Bilingual Fan
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Origin</span>
          </h1>
        </header>

        <section className="space-y-8 text-lg font-light text-zinc-300 leading-relaxed">
          <p>
            You grew up breathing global Soccer. But somewhere along the line, you fell in love with the tactical warfare of the NFL. Now, your brain is wired differently.
          </p>
          
          <div className="border-l-4 border-orange-500 pl-6 my-10 py-2">
            <p className="text-2xl font-black text-white uppercase tracking-tight leading-tight">
              Once you understand both rulebooks, you realize elite athletic dominance is a universal language.
            </p>
          </div>

          <p>
            You don't just see a midfielder passing a ball anymore—you see a Quarterback reading a secondary. You don't just see a winger running down the flank—you see a Wide Receiver creating vertical separation. You don't just see a target man holding off a defender—you see a Power Back breaking tackles at the goal line.
          </p>

          <p>
            <strong className="text-white">Multiverse Football</strong> was built for fans who speak both languages. We didn't want to just talk about cross-sport comparisons in the pub. We wanted to build the math to prove it.
          </p>

          <p>
            By mapping kinesthetic data, spatial processing, and situational leverage, we built the <strong>WIF Score</strong>—the first algorithmic bridge that translates Soccer telemetry directly into Fantasy Football value. 
          </p>

          <div className="bg-[#121316] border border-zinc-800 p-8 mt-12">
            <h3 className="font-mono text-xs uppercase tracking-widest text-orange-400 font-bold mb-4">The Ultimate Goal</h3>
            <p className="text-base">
              The rankings are just phase one. Our endgame is to launch the first true Cross-Sport Fantasy Engine, where you can draft a real Premier League winger to act as your Flex WR for the week. Welcome to the Multiverse.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}