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
          It starts the same way for all of us. You grew up watching global soccer. You know the weight of a number 10 jersey and the tension of a tournament knockout match.
        </p>

        <p>
          Along the line, you discovered Sunday afternoons with the NFL. You fell in love with the tactical drive, high stakes, and fantasy competition. Soon your routine was divided: soccer matches in the morning, NFL RedZone in the afternoon.
        </p>

        <div className="border-l-4 border-orange-500 pl-6 py-2 my-8 bg-zinc-900/40 rounded-r-lg">
          <h2 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight">
            ONCE YOU UNDERSTAND BOTH RULEBOOKS, YOU REALIZE ELITE ATHLETIC DOMINANCE IS A UNIVERSAL LANGUAGE.
          </h2>
        </div>

        <p>
          You don't just see a midfielder passing a ball anymore—you see a <strong className="text-red-400 font-semibold">Quarterback</strong> reading the field. You don't just see a winger beating his marker—you see a <strong className="text-blue-400 font-semibold">Wide Receiver</strong> creating vertical separation. You don't just see a physical striker holding off defenders in the box—you see a <strong className="text-emerald-400 font-semibold">Running Back</strong> breaking tackles near the goal line.
        </p>

        <p>
          <strong className="text-white font-semibold">Multiverse Football</strong> was built for fans who love both games. We didn't want endless debates without proof. We built the mathematical model to score them together.
        </p>
      </div>

      <div className="mt-14 pt-8 border-t border-zinc-800 flex flex-wrap gap-4 justify-between items-center">
        <Link href="/rankings" className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-white transition-colors">
          Explore the War Room →
        </Link>
        <Link href="/games" className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
          Try the 17-0 Game →
        </Link>
      </div>

    </div>
  );
}
