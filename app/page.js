import Link from 'next/link';

export default function HomePage() {
  const trendingUp = [
    { name: "Vinícius Júnior", role: "WR • Real Madrid", wif: "24.8", change: "+1.8M", startPct: "98%" },
    { name: "Erling Haaland", role: "RB • Man City", wif: "26.2", change: "+1.2M", startPct: "100%" },
    { name: "Cole Palmer", role: "QB • Chelsea", wif: "22.4", change: "+850K", startPct: "92%" },
    { name: "Florian Wirtz", role: "FLX • Leverkusen", wif: "20.1", change: "+620K", startPct: "87%" }
  ];

  const trendingDown = [
    { name: "Bruno Fernandes", role: "QB • Man United", wif: "11.2", change: "-740K", startPct: "64%" },
    { name: "Darwin Núñez", role: "RB • Liverpool", wif: "9.8", change: "-510K", startPct: "48%" },
    { name: "Rafael Leão", role: "WR • AC Milan", wif: "12.5", change: "-380K", startPct: "71%" },
    { name: "Kingsley Coman", role: "WR • Bayern", wif: "8.4", change: "-290K", startPct: "32%" }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      
      {/* HERO SECTION EQUILIBRADA */}
      <section className="relative w-full pt-16 pb-16 border-b border-zinc-800/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO ESQUERDO: VALOR DIRETO */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              WIF Engine • Cross-Sport Standard
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-[0.92]">
              THE CROSS-SPORT <br />
              <span className="text-orange-500">FANTASY ENGINE.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
              We convert soccer pitch stats into NFL fantasy points. The <strong className="text-white font-semibold">WIF Score</strong> values passing volume, ball progression, and red zone impact on a single universal scale.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/methodology" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest px-7 py-3.5 rounded-lg text-xs transition-all shadow-lg hover:shadow-orange-500/20"
              >
                📐 View Formula & PPR
              </Link>
              <Link 
                href="/scouting" 
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-black uppercase tracking-widest px-7 py-3.5 rounded-lg text-xs transition-all"
              >
                🔍 Scouting Breakdown →
              </Link>
            </div>

            {/* FÓRMULA RESUMIDA NO HERO */}
            <div className="pt-6 border-t border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                Core Algorithm Formula
              </span>
              <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-lg font-mono text-xs text-orange-400 flex flex-wrap items-center gap-2">
                <span className="text-white font-bold">WIF SCORE =</span>
                <span>Base Volume</span>
                <span className="text-zinc-600">+</span>
                <span>Red Zone (1.5x)</span>
                <span className="text-zinc-600">−</span>
                <span className="text-red-400">Turnovers</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: SCOUTING CARD EM DESTAQUE */}
          <div className="lg:col-span-5 bg-[#14161B] border border-zinc-800 rounded-2xl shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-[9px] font-mono text-orange-400 uppercase tracking-widest font-bold block">
                  Scouting Live Sample
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Vinícius Júnior</h3>
              </div>
              <span className="bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-mono font-black px-2.5 py-1 rounded">
                WR1 • ELITE
              </span>
            </div>

            {/* BREAKDOWN DA PONTUAÇÃO */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-800/80">
                <span className="text-zinc-400">1 Goal Scored (Touchdown)</span>
                <span className="text-white font-bold">+6.0 pts</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-800/80">
                <span className="text-zinc-400">6 Take-ons (Broken Tackles/YAC)</span>
                <span className="text-white font-bold">+9.0 pts</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-800/80">
                <span className="text-zinc-400">5 Box Touches (Red Zone Multiplier)</span>
                <span className="text-white font-bold">+7.5 pts</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-800/80">
                <span className="text-zinc-400">1 Loss in Defensive Half (Turnover)</span>
                <span className="text-red-400 font-bold">−2.0 pts</span>
              </div>
            </div>

            {/* RESULTADO WIF */}
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Final WIF Value</span>
                <span className="text-xs text-zinc-400 font-light">Role: Primary Target Wide Receiver</span>
              </div>
              <span className="text-3xl font-black text-orange-400 font-mono">
                20.5 <span className="text-xs text-zinc-500">PTS</span>
              </span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Link href="/scouting" className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                All Scout Reports →
              </Link>
              <Link href="/methodology" className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-orange-300 font-bold transition-colors">
                Full Point Matrix →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* TRENDING PLAYERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="border-b border-zinc-800 pb-4 mb-8 flex flex-col sm:flex-row justify-between sm:items-end gap-2">
          <div>
            <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest font-bold block">
              Market Activity
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Trending Players
            </h2>
          </div>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
            Volume Change Over Last 7 Days
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TRENDING UP */}
          <div className="bg-[#14161B] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-zinc-900/80 px-5 py-3 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                ▲ Trending Up
              </h3>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Waiver Adds</span>
            </div>

            <div className="divide-y divide-zinc-800/60">
              {trendingUp.map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-zinc-600 text-sm w-4">{i + 1}</span>
                    <div>
                      <h4 className="font-black text-white text-sm tracking-wide">{item.name}</h4>
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-emerald-400 font-mono font-bold text-xs block">{item.change}</span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase">Rostered: {item.startPct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TRENDING DOWN */}
          <div className="bg-[#14161B] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-zinc-900/80 px-5 py-3 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                ▼ Trending Down
              </h3>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Waiver Drops</span>
            </div>

            <div className="divide-y divide-zinc-800/60">
              {trendingDown.map((item, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-zinc-600 text-sm w-4">{i + 1}</span>
                    <div>
                      <h4 className="font-black text-white text-sm tracking-wide">{item.name}</h4>
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-red-400 font-mono font-bold text-xs block">{item.change}</span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase">Rostered: {item.startPct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
