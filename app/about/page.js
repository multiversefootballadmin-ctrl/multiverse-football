import Link from 'next/link';

export const metadata = {
  title: 'Origin | Multiverse Football',
  description: 'The story behind the cross-sport fantasy engine.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-4xl mx-auto">
      
      <div className="space-y-4 mb-14 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
          Genesis • Why We Built This
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE ORIGIN
        </h1>
      </div>

      <div className="space-y-8 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
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
          <strong className="text-white font-semibold">Multiverse Football</strong> was born from this exact realization. We didn't want endless cross-sport debates in the pub. We wanted proof. When we realized that advanced soccer telemetry—like npxG and xAG—perfectly mirrored the predictive analytics used by NFL front offices, the path was clear. We built a dual-engine mathematical model to score both worlds on one definitive scale.
        </p>
      </div>

      <div className="mt-14 pt-8 border-t border-zinc-800 flex flex-wrap gap-4 justify-between items-center">
        <Link href="/xwif" className="text-xs font-mono uppercase tracking-widest text-purple-400 hover:text-white transition-colors">
          Explore Predictive Analytics →
        </Link>
        <Link href="/methodology" className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-white transition-colors">
          Read the Standard Rules →
        </Link>
      </div>

    </div>
  );
}
