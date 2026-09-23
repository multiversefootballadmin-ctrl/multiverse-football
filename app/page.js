import Link from 'next/link';

export default function HomePage() {
  const topSlate = [
    { rank: "01", name: "Lionel Messi", pos: "QB", club: "Inter Miami", stats: "2 G | 3 Key Passes", wif: "31.4", tier: "MVP" },
    { rank: "02", name: "Kevin De Bruyne", pos: "QB", club: "Man City", stats: "1 G | 5 Key Passes", wif: "27.6", tier: "ELITE" },
    { rank: "03", name: "Erling Haaland", pos: "RB", club: "Man City", stats: "3 G | 4 Box Touches", wif: "26.2", tier: "ELITE" },
    { rank: "04", name: "Vinícius Júnior", pos: "WR", club: "Real Madrid", stats: "1 G | 6 Take-ons", wif: "24.8", tier: "STARTER" },
    { rank: "05", name: "Jude Bellingham", pos: "TE", club: "Real Madrid", stats: "1 G | 2 Tackles Won", wif: "23.2", tier: "STARTER" }
  ];

  const getPosBadge = (pos) => {
    switch (pos) {
      case 'QB': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'RB': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'WR': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'TE': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-16 pb-16 border-b border-zinc-800/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              WIF Engine • Universal Language
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-[0.92]">
              THE CROSS-SPORT <br />
              <span className="text-orange-500">FANTASY ENGINE.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
              Elite athletic dominance is a universal language. We translate global soccer telemetry—key passes, take-ons, and territory leverage—into the exact scoring format of NFL Fantasy Football.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/rankings" className="bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest px-7 py-3.5 rounded-lg text-xs transition-all shadow-lg">
                Enter War Room 📊
              </Link>
              <Link href="/games" className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-black uppercase tracking-widest px-7 py-3.5 rounded-lg text-xs transition-all">
                Play 17-0 Game 🎲
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#14161B] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-zinc-900/90 px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-orange-400 uppercase tracking-widest font-bold block">Top Performances</span>
                <h3 className="text-base font-black text-white uppercase tracking-tight">Week Slate Leaders</h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">LIVE WIF</span>
            </div>

            <div className="divide-y divide-zinc-800/60">
              {topSlate.map((item, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-zinc-600 w-5">{item.rank}</span>
                    <span className={`w-8 text-center py-0.5 rounded text-[9px] font-black font-mono border ${getPosBadge(item.pos)}`}>{item.pos}</span>
                    <div>
                      <h4 className="font-bold text-white text-xs tracking-wide">{item.name}</h4>
                      <p className="text-zinc-500 font-mono text-[10px]">{item.club} • {item.stats}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-orange-400 font-mono font-bold text-sm block">{item.wif}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DUAL ENGINE BANNER - THE CORE OF OUR PLATFORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-3">Two Engines. One Ecosystem.</h2>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto">
            Traditional fantasy relies on execution. Advanced scouting relies on projection. We built dedicated algorithms for both.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* THE WIF MATRIX CARD */}
          <div className="bg-[#14161B] border border-orange-500/20 hover:border-orange-500/50 p-8 rounded-2xl transition-all group">
            <span className="text-4xl mb-4 block">📈</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-orange-400 transition-colors">The WIF Matrix v1.0</h3>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-4">Official Standard Scoring</span>
            <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
              The locked historical algorithm. We map Key Passes to PPR receptions, Take-ons to Yards After Catch (YAC), and punish only true Turnovers to generate the official Fantasy Output.
            </p>
            <Link href="/methodology" className="inline-block border border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-white font-mono text-xs uppercase font-bold tracking-widest px-6 py-3 rounded transition-colors">
              Read the Rulebook →
            </Link>
          </div>

          {/* THE xWIF ENGINE CARD */}
          <div className="bg-[#14161B] border border-purple-500/20 hover:border-purple-500/50 p-8 rounded-2xl transition-all group">
            <span className="text-4xl mb-4 block">🔮</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-purple-400 transition-colors">The xWIF Engine</h3>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-4">Predictive Analytics</span>
            <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
              The War Room crystal ball. We utilize npxG, xAG, xT, and xGOT to strip away the noise and project future offensive dominance before the breakout happens.
            </p>
            <Link href="/xwif" className="inline-block border border-zinc-700 hover:border-purple-500 text-zinc-300 hover:text-white font-mono text-xs uppercase font-bold tracking-widest px-6 py-3 rounded transition-colors">
              Open the Crystal Ball →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
