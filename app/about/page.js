'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      
      <div className="absolute top-1/3 left-[-10%] text-[15vw] font-black text-white opacity-[0.03] pointer-events-none select-none uppercase leading-none whitespace-nowrap">
        BILINGUAL FAN
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 space-y-16">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            The Genesis
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Origin</span>
          </h1>
        </header>

        <section className="space-y-8 text-lg md:text-xl font-light text-zinc-300 leading-relaxed">
          <p>
            It starts the same way for all of us. You grew up breathing global Soccer. You know the weight of a number 10 jersey and the tension of a Champions League knockout night. 
          </p>
          <p>
            But somewhere along the line, you discovered Sunday afternoons. You fell in love with the tactical, brutal warfare of the NFL. Now, your weekends are split: Premier League mornings, RedZone afternoons. <strong className="text-white">Your brain is wired differently.</strong>
          </p>
          
          <div className="border-l-4 border-orange-500 pl-6 my-12 py-2">
            <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
              Once you understand both rulebooks, you realize elite athletic dominance is a universal language.
            </p>
          </div>

          <p>
            You don't just see a midfielder passing a ball anymore—you see a <span className="text-red-400 font-bold">Quarterback</span> reading a secondary. You don't just see a winger running down the flank—you see a <span className="text-blue-400 font-bold">Wide Receiver</span> creating vertical separation. You don't just see a target man holding off a defender—you see a <span className="text-emerald-400 font-bold">Power Back</span> breaking tackles at the goal line.
          </p>

          <p>
            <strong className="text-white">Multiverse Football</strong> was built for fans who speak both languages. We didn't want to just argue cross-sport comparisons in the pub. We wanted to build the math to prove it.
          </p>

          <div className="bg-[#121316] border border-orange-500/30 p-8 md:p-12 mt-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px]"></div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-orange-500 font-bold mb-4">The Ultimate Endgame: Collision Lab</h3>
            <p className="text-base text-zinc-300 font-light leading-relaxed mb-4">
              The rankings are just phase one. Soon, we are opening the <strong>Collision Lab</strong> and the <strong>Franchise Power Index</strong>. Could Pep Guardiola's tactical structure withstand a cold, hostile playoff drive in January? Does Real Madrid possess the boundary explosiveness to run a two-minute drill?
            </p>
            <p className="text-lg text-white font-medium leading-relaxed">
              Our endgame is to launch the first true Cross-Sport Fantasy Engine (INCURSUS), where you can draft a real Premier League winger to act as your Flex WR for the week. <br/><br/>Welcome to the Multiverse.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}