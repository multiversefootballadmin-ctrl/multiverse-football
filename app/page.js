import Link from 'next/link';

export default function HomePage() {
  // DADOS REAIS EXTRAÍDOS DA API DO FOOTYSTATS (TEMPORADA 25/26)
  const topSlate = [
    { rank: "01", name: "Michael Olise", pos: "QB", club: "Bayern München", stats: "15 G | 19 Ast", wif: "19.6", tier: "MVP" },
    { rank: "02", name: "Lamine Yamal", pos: "WR", club: "FC Barcelona", stats: "16 G | 11 Ast", wif: "19.5", tier: "MVP" },
    { rank: "03", name: "Harry Kane", pos: "RB", club: "Bayern München", stats: "36 G | 5 Ast", wif: "16.3", tier: "ELITE" },
    { rank: "04", name: "Kylian Mbappé", pos: "RB", club: "Real Madrid CF", stats: "25 G | 5 Ast", wif: "15.7", tier: "ELITE" },
    { rank: "05", name: "Bruno Fernandes", pos: "QB", club: "Man United", stats: "9 G | 21 Ast", wif: "14.1", tier: "STARTER" }
  ];

  const reports = [
    {
      name: "Aleix García", club: "Leverkusen", role: "QB1 (Buy Low)", realWif: "13.3", xWif: "14.1", verdict: "BUY LOW",
      verdictColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      story: "Operating out of the pocket with surgical precision. García isn't flashy, but he's consistently moving the chains. His receivers are dropping perfectly placed deep balls.",
      analysis: "Underperforming his underlying telemetry. Generating a massive 14.1 xWIF/90 driven by elite xA (Expected Assists) and passing volume, but his real output is capped at 13.3 FPPG. The touchdowns will come. Buy now."
    },
    {
      name: "Harry Kane", club: "Bayern München", role: "RB1 (High Variance)", realWif: "16.3", xWif: "13.7", verdict: "SELL HIGH",
      verdictColor: "text-red-400 bg-red-500/10 border-red-500/30",
      story: "A bruising goal-line back scoring on almost every touch inside the 20. It's a historic run, but eventually, the defense stacks the box and the efficiency drops.",
      analysis: "Massively overperforming his npxG. Kane is converting half-chances into 6.0 WIF points at an unsustainable rate (16.3 Real vs 13.7 xWIF). His volume is elite, but a regression to the mean is mathematically inevitable. Cash out for a haul."
    }
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
      <section className="relative w-full pt-20 pb-16 border-b border-zinc-800/80 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] tracking-tighter pointer-events-none uppercase whitespace-nowrap">
          What If
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              The WHAT IF Engine
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-[0.92]">
              WHAT IF <span className="text-orange-500">YAMAL</span> <br /> WAS YOUR WR1?
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
              A perfectly weighted through-ball splitting two center-backs isn't just a pass. It's Patrick Mahomes stepping up in the pocket on 3rd-and-12 to move the chains. Elite athletic dominance is a universal language. We translate global soccer telemetry into standard NFL Fantasy scoring.
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
                <span className="text-[9px] font-mono text-orange-400 uppercase tracking-widest font-bold block">FootyStats API (Sample)</span>
                <h3 className="text-base font-black text-white uppercase tracking-tight">Week Slate Leaders</h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">LIVE WIF / 90</span>
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

      {/* STORYTELLING INTERLUDE */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">Numbers Without Context Are Just Math.</h2>
        <p className="text-zinc-400 font-light leading-relaxed text-lg">
          We don't care where a player is listed on a traditional lineup sheet. We care about the gravity they command on the pitch. When a winger takes on a defender at full speed, breaking tackles to conquer territory, you're not just watching a dribble—you're watching a YAC monster out in the flat. The WIF Engine reads the raw telemetry of the game and assigns positions based on true offensive identity.
        </p>
      </section>

      {/* REAL DATA SCOUTING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-10">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2">War Room Scouting (Live Data)</h2>
          <p className="text-zinc-500 font-light mt-2 text-sm">Identifying market inefficiencies by comparing real WIF execution with xWIF projections.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reports.map((report, idx) => (
            <div key={idx} className="bg-[#14161B] border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col">
              <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{report.name}</h3>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mt-1">
                    {report.club} • <span className="text-orange-400 font-bold">{report.role}</span>
                  </span>
                </div>
                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded border ${report.verdictColor}`}>
                  {report.verdict}
                </span>
              </div>
              <div className="p-6 flex-grow space-y-4">
                <div>
                  <h4 className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">The Narrative</h4>
                  <p className="text-xs text-zinc-300 font-medium italic border-l-2 border-blue-500/50 pl-3 leading-relaxed">"{report.story}"</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Telemetry</h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{report.analysis}</p>
                </div>
              </div>
              <div className="bg-zinc-950 p-4 border-t border-zinc-800 flex justify-between items-center font-mono text-xs">
                <div>
                  <span className="text-zinc-500 uppercase block text-[9px]">Real WIF / 90</span>
                  <span className="text-white font-bold">{report.realWif}</span>
                </div>
                <div>
                  <span className="text-purple-400 uppercase block text-[9px]">xWIF (Projected)</span>
                  <span className="text-purple-400 font-bold">{report.xWif}</span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-600 uppercase block text-[9px]">Delta</span>
                  <span className={`font-bold ${parseFloat(report.xWif) > parseFloat(report.realWif) ? 'text-emerald-400' : 'text-red-400'}`}>
                    {(parseFloat(report.xWif) - parseFloat(report.realWif)).toFixed(1)} PTS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL ENGINE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#14161B] border border-orange-500/20 hover:border-orange-500/50 p-8 rounded-2xl transition-all group">
            <span className="text-4xl mb-4 block">📈</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-orange-400 transition-colors">The WIF Matrix</h3>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-4">Execution (Real Points)</span>
            <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
              The locked historical algorithm. We map Key Passes to PPR receptions, Take-ons to Yards After Catch (YAC), and punish only true Turnovers.
            </p>
            <Link href="/methodology" className="inline-block border border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-white font-mono text-xs uppercase font-bold tracking-widest px-6 py-3 rounded transition-colors">
              Read the Rulebook →
            </Link>
          </div>

          <div className="bg-[#14161B] border border-purple-500/20 hover:border-purple-500/50 p-8 rounded-2xl transition-all group">
            <span className="text-4xl mb-4 block">🔮</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-purple-400 transition-colors">The xWIF Engine</h3>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-4">Prediction (Scouting)</span>
            <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
              The crystal ball. We utilize npxG, xAG, xT, and xGOT to strip away the noise and project future offensive dominance before the breakout happens.
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
