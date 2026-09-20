'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D110E] text-[#F3F1E7] font-sans pb-32">
      <main className="max-w-4xl mx-auto px-6 pt-24 space-y-16">
        
        <header className="space-y-6">
          <div className="text-[#E8B923] font-mono text-sm tracking-widest uppercase">
            // The Origin Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            Built for the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5c6e66]">Bilingual Fan.</span>
          </h1>
        </header>

        <section className="space-y-8 text-lg text-[#9AAFA8] leading-relaxed font-light">
          <p>
            This platform wasn't built in a boardroom. It was born from the exact same "what if" conversations you have with your friends at the bar. 
          </p>
          <p>
            I grew up breathing global soccer. It's in my blood. But five years ago, I fell completely in love with the NFL. Once you truly understand both games, your brain changes. You stop seeing just "a midfielder passing a ball" and start seeing a Quarterback manipulating defensive gravity. You stop seeing a winger running down the flank and start seeing a Wide Receiver creating vertical separation.
          </p>
          <div className="pl-6 border-l-2 border-[#E8B923] text-white font-mono text-sm py-2">
            "Once you understand both codes, you realize elite athletic dominance is a universal language."
          </div>
          <p>
            The problem? Nobody had ever translated this feeling into hard data. Traditional fantasy sports keep you locked in one universe. 
          </p>
          <p>
            <strong className="text-white">Multiverse Football</strong> is for us. The bilingual sports fans. The ones who understand both rulebooks and want to see what happens when the kinematic DNA of a world-class soccer player is dropped onto the gridiron.
          </p>
        </section>

      </main>
    </div>
  );
}