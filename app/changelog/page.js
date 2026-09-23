import Link from 'next/link';

export const metadata = {
  title: 'Changelog & Versions | Multiverse Football',
  description: 'Track the evolution, updates, and engine versions of Multiverse Football.',
};

export default function ChangelogPage() {
  const versions = [
    {
      version: "v1.2.0",
      date: "September 2026",
      title: "The Dual-Engine Architecture",
      changes: [
        "Locked WIF Matrix v1.0 as the official and immutable standard scoring system.",
        "Launched the xWIF Engine (Predictive Analytics) to track npxG, xAG, xT, and xGOT.",
        "Overhauled the Scouting Reports to compare Real WIF vs Projected xWIF.",
        "Completely rewrote the Glossary and Whitepaper to reflect the dual-engine methodology.",
        "Added global version tracking to the footer."
      ]
    },
    {
      version: "v1.1.0",
      date: "September 2026",
      title: "UI Expansion & Mobile Optimization",
      changes: [
        "Separated the 17-0 Crossover minigame into its own dedicated /games route.",
        "Redesigned the Home Page with the Week Slate Leaders dashboard and dual-engine highlighted banners.",
        "Implemented a fully responsive mobile navbar (hamburger menu) to fix horizontal scrolling issues.",
        "Added active-state highlighting to the navigation menu."
      ]
    },
    {
      version: "v1.0.0",
      date: "August 2026",
      title: "Genesis Release",
      changes: [
        "Initial deployment of Multiverse Football on Vercel.",
        "Established the baseline thesis: translating soccer telemetry into NFL fantasy formats.",
        "Created core pages: War Room, Playbook, Origin, and the initial point structure."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-4xl mx-auto">
      
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 text-zinc-300 font-mono text-xs font-bold tracking-widest uppercase">
          System Log • Update History
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          CHANGELOG
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          Track the evolution of the Multiverse Football platform and the underlying scoring algorithms.
        </p>
      </div>

      <div className="space-y-12">
        {versions.map((release, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Hidden on mobile for cleaner look, visible on desktop) */}
            <div className="hidden md:block absolute left-[119px] top-2 bottom-[-48px] w-px bg-zinc-800"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
              {/* Version & Date */}
              <div className="md:w-[100px] shrink-0 text-left md:text-right relative">
                <div className="hidden md:block absolute right-[-29px] top-1.5 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-[#0E0F12]"></div>
                <h3 className="font-mono text-xl font-black text-orange-400">{release.version}</h3>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{release.date}</span>
              </div>

              {/* Content */}
              <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl flex-grow shadow-lg">
                <h4 className="text-lg font-black text-white uppercase tracking-tight mb-4">{release.title}</h4>
                <ul className="space-y-3">
                  {release.changes.map((change, i) => (
                    <li key={i} className="text-sm text-zinc-400 font-light flex gap-3">
                      <span className="text-orange-500/50 mt-0.5">✦</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
