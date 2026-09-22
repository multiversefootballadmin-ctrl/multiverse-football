'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getArchetypeStyles } from '@/components/PlayerCard';

// MOCK GLOBAL INDEX (Busca)
const globalSearchIndex = [
  { term: "Kevin De Bruyne", type: "Player", subtitle: "QB • Man City", url: "/players/kdb" },
  { term: "Vinícius Júnior", type: "Player", subtitle: "WR • Real Madrid", url: "/players/vini" },
  { term: "Erling Haaland", type: "Player", subtitle: "RB • Man City", url: "/players/haaland" },
  { term: "Rodri", type: "Player", subtitle: "TE • Man City", url: "/players/rodri" },
  { term: "William Saliba", type: "Player", subtitle: "DEF • Arsenal", url: "/players/saliba" },
  { term: "WIF Score", type: "Concept", subtitle: "Multiverse Methodology", url: "/methodology" },
  { term: "xG (Expected Goals)", type: "Glossary", subtitle: "Soccer Metric", url: "/glossary" },
  { term: "YAC (Yards After Catch)", type: "Glossary", subtitle: "NFL Metric", url: "/glossary" },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Estados da Calculadora Universal (Focada no Ataque/Produção Individual)
  const [calcGoals, setCalcGoals] = useState(0);
  const [calcPasses, setCalcPasses] = useState(5);
  const [calcTakeOns, setCalcTakeOns] = useState(2);
  const [calcCarries, setCalcCarries] = useState(1);

  // PESOS DA CALCULADORA (WIF Score Realtime)
  const ptsPerGoal = 6.0;
  const ptsPerPass = 1.0; // Ex: Mix de Key Passes e Assists
  const ptsPerTakeOn = 1.0; // Ex: Dribles convertidos em YAC
  const ptsPerCarry = 1.0; // Ex: Conduções progressivas convertidas em Rush Yards

  const wifScoreCalc = (calcGoals * ptsPerGoal) + (calcPasses * ptsPerPass) + (calcTakeOns * ptsPerTakeOn) + (calcCarries * ptsPerCarry);

  // MOTOR DE DETECÇÃO DE ARQUÉTIPO (Sem Defesa Individual)
  let detectedArch = "UNDEFINED";
  let archColor = "text-zinc-500";
  let archBg = "bg-zinc-900";
  
  // Analisa qual é o traço dominante da performance
  const passWeight = calcPasses * 1.5;
  const takeOnWeight = calcTakeOns * 1.5;
  const carryWeight = calcCarries * 1.5;
  const goalWeight = calcGoals * 3.0;
  const maxTrait = Math.max(passWeight, takeOnWeight, carryWeight, goalWeight);

  if (maxTrait === 0) {
    detectedArch = "UNKNOWN ROLE";
    archColor = "text-zinc-500";
    archBg = "bg-zinc-900/50";
  } else if (maxTrait === passWeight) {
    detectedArch = "🎯 QB (FIELD GENERAL)";
    archColor = "text-red-500";
    archBg = "bg-red-500/10 border-red-500/30";
  } else if (maxTrait === takeOnWeight) {
    detectedArch = "⚡ WR (VERTICAL THREAT)";
    archColor = "text-blue-500";
    archBg = "bg-blue-500/10 border-blue-500/30";
  } else if (maxTrait === carryWeight) {
    detectedArch = "🏃‍♂️ RB (GROUND WEAPON)";
    archColor = "text-emerald-500";
    archBg = "bg-emerald-500/10 border-emerald-500/30";
  } else {
    detectedArch = "🛡️ TE (RED ZONE ANCHOR)";
    archColor = "text-amber-500";
    archBg = "bg-amber-500/10 border-amber-500/30";
  }

  // AVALIAÇÃO DE DESEMPENHO (O Veredito)
  let evaluation = { title: "", desc: "" };
  if (wifScoreCalc < 8) {
    evaluation = { title: "BENCH WARMER", desc: "A quiet game. Not enough impact to make a difference on the fantasy slate." };
  } else if (wifScoreCalc < 16) {
    evaluation = { title: "SOLID STARTER", desc: "Reliable output. Consistent production helping move the chains." };
  } else if (wifScoreCalc < 24) {
    evaluation = { title: "PRO BOWL LEVEL", desc: "A game-winning performance. Dominant metrics that dictate the result." };
  } else {
    evaluation = { title: "MVP / HALL OF FAME", desc: "A slate-breaking game! Think prime Patrick Mahomes or a Derrick Henry 200-yard day." };
  }

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.length > 1) {
      const results = globalSearchIndex.filter(item => 
        item.term.toLowerCase().includes(val.toLowerCase()) || 
        item.subtitle.toLowerCase().includes(val.toLowerCase())
      );
      setSearchResults(results.slice(0, 5));
    } else {
      setSearchResults([]);
    }
  };

  const top5 = [
    { id: "kdb", rank: 1, name: "K. De Bruyne", team: "Man City", archetype: "QB", score: "94.2", trend: "▲", next: "vs MAD", statLine: "⚽ 3.2 xA ➔ 🏈 280 Pass Yds" },
    { id: "vini", rank: 2, name: "V. Júnior", team: "Real Madrid", archetype: "WR", score: "91.8", trend: "▲", next: "@ MCI", statLine: "⚽ 4.8 Take-ons ➔ 🏈 84 YAC" },
    { id: "haaland", rank: 3, name: "E. Haaland", team: "Man City", archetype: "RB", score: "89.5", trend: "▼", next: "vs MAD", statLine: "⚽ 0.9 xG ➔ 🏈 1.5 Rush TDs" },
    { id: "rodri", rank: 4, name: "Rodri", team: "Man City", archetype: "TE", score: "88.1", trend: "-", next: "vs MAD", statLine: "⚽ 4.5 Aerials ➔ 🏈 56 Rec Yds" },
    { id: "saliba", rank: 5, name: "W. Saliba", team: "Arsenal", archetype: "DEF", score: "86.7", trend: "▲", next: "@ TOT", statLine: "⚽ 6 Tackles ➔ 🏈 2 Sacks" }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-20">
      
      {/* HERO SECTION WITH SEARCH & CALCULATOR */}
      <section className="relative w-full min-h-[95vh] pt-20 pb-16 flex items-center overflow-hidden flex-col justify-center border-b border-zinc-900">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT & SEARCH */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Powered by the WIF Engine
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              THE CROSS-SPORT <br className="hidden sm:block" />
              <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">FANTASY ENGINE.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-xl mt-4">
              We turn global soccer stats into NFL fantasy points. Meet the <strong className="text-white">WIF Score</strong>: the only algorithm that lets you draft Messi ⚽ and Mahomes 🏈 on the same scale. No opinions, just pure stats translated across dimensions.
            </p>

            {/* GLOBAL SEARCH BAR */}
            <div className="relative w-full max-w-xl mt-8">
              <div className="relative flex items-center">
                <span className="absolute left-6 text-2xl text-zinc-500">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="SEARCH PLAYERS, GLOSSARY, OR REPORTS..."
                  className="w-full bg-[#121316] border-2 border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 pl-16 pr-6 py-4 text-sm md:text-base font-black text-white placeholder-zinc-600 focus:outline-none uppercase tracking-widest transition-all shadow-2xl rounded-full"
                />
              </div>

              {/* SEARCH DROPDOWN */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-[#121316] border border-zinc-700 shadow-2xl rounded-xl overflow-hidden z-50 text-left">
                  {searchResults.map((result, idx) => (
                    <Link key={idx} href={result.url} className="flex items-center justify-between p-4 hover:bg-zinc-800 transition-colors border-b border-zinc-800/50 last:border-0 group">
                      <div>
                        <h4 className="font-black text-white text-base group-hover:text-orange-400 transition-colors uppercase tracking-wider">{result.term}</h4>
                        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-1">{result.subtitle}</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 px-2 py-1 uppercase tracking-widest rounded-sm">{result.type}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex gap-4 pt-4">
              <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 text-sm transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                Enter The War Room
              </Link>
            </div>
          </div>

          {/* INTERACTIVE WIF CALCULATOR - DYNAMIC DISCOVERY */}
          <div className="bg-[#121316]/90 backdrop-blur-md border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
            <div className="absolute -top-3 -right-3 bg-orange-500 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              Live Engine Demo
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Build a Player</h3>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">Shape a performance below. The Multiverse will automatically detect the NFL role and fantasy value.</p>
            </div>

            {/* UNIVERSAL SLIDERS */}
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">⚽ Goals Scored</label>
                  <span className="text-orange-500 font-black text-lg">{calcGoals}</span>
                </div>
                <input type="range" min="0" max="4" value={calcGoals} onChange={(e) => setCalcGoals(Number(e.target.value))} className="w-full accent-orange-500 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-1 text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-zinc-600">Translates to:</span>
                  <span className="text-zinc-400">🏈 {calcGoals} Touchdowns <span className="text-orange-500 font-bold">({(calcGoals * ptsPerGoal).toFixed(1)} pt)</span></span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">⚽ Key Passes & Assists</label>
                  <span className="text-orange-500 font-black text-lg">{calcPasses}</span>
                </div>
                <input type="range" min="0" max="15" value={calcPasses} onChange={(e) => setCalcPasses(Number(e.target.value))} className="w-full accent-orange-500 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-1 text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-zinc-600">Translates to:</span>
                  <span className="text-zinc-400">🏈 Pass Yards & TDs <span className="text-orange-500 font-bold">({(calcPasses * ptsPerPass).toFixed(1)} pt)</span></span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">⚽ Successful Take-ons</label>
                  <span className="text-orange-500 font-black text-lg">{calcTakeOns}</span>
                </div>
                <input type="range" min="0" max="15" value={calcTakeOns} onChange={(e) => setCalcTakeOns(Number(e.target.value))} className="w-full accent-orange-500 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-1 text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-zinc-600">Translates to:</span>
                  <span className="text-zinc-400">🏈 YAC (Yds After Catch) <span className="text-orange-500 font-bold">({(calcTakeOns * ptsPerTakeOn).toFixed(1)} pt)</span></span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">⚽ Progressive Carries</label>
                  <span className="text-orange-500 font-black text-lg">{calcCarries}</span>
                </div>
                <input type="range" min="0" max="15" value={calcCarries} onChange={(e) => setCalcCarries(Number(e.target.value))} className="w-full accent-orange-500 h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-1 text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-zinc-600">Translates to:</span>
                  <span className="text-zinc-400">🏈 Rushing Yards <span className="text-orange-500 font-bold">({(calcCarries * ptsPerCarry).toFixed(1)} pt)</span></span>
                </div>
              </div>

            </div>

            {/* DYNAMIC EVALUATION BOX */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono font-bold text-zinc-400 uppercase tracking-widest">Total WIF Score</span>
                <span className="text-4xl font-black text-white">{wifScoreCalc.toFixed(1)}</span>
              </div>
              
              <div className={`border p-4 rounded-md transition-colors duration-500 ${archBg}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Scout Evaluation</span>
                  <span className={`text-[10px] font-mono font-black uppercase tracking-widest ${archColor}`}>{detectedArch}</span>
                </div>
                <h4 className="font-black text-white uppercase tracking-tight text-lg mb-1">{evaluation.title}</h4>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">{evaluation.desc}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ARCHETYPE QUICK-CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">The Archetype Translation</h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">How pitch roles map to pocket reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="bg-[#121316] border border-zinc-800 border-t-4 border-t-red-600 p-5 shadow-xl hover:-translate-y-1 transition-transform flex flex-col h-full group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-white text-2xl uppercase">QB</h3>
              <span className="text-red-500 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🎯</span>
            </div>
            <p className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-4">The Field General</p>
            
            <div className="bg-[#0E0F12] border border-zinc-800 p-3 mb-4 rounded-sm">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-zinc-400">⚽ Playmaker</span>
                <span className="text-zinc-600">➔</span>
                <span className="text-white font-bold">🏈 Pocket Passer</span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">The master distributor. Dictates tempo, reads defensive shells, and engineers scoring drives through elite spatial vision.</p>
            
            <div className="border-t border-zinc-800 pt-3">
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest block mb-1">Core Metric Translation</span>
              <span className="text-zinc-200 font-mono text-[10px] uppercase font-bold tracking-widest">Key Passes ➔ Pass Yds</span>
            </div>
          </div>

          <div className="bg-[#121316] border border-zinc-800 border-t-4 border-t-emerald-600 p-5 shadow-xl hover:-translate-y-1 transition-transform flex flex-col h-full group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-white text-2xl uppercase">RB</h3>
              <span className="text-emerald-500 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🏃‍♂️</span>
            </div>
            <p className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-4">The Ground Weapon</p>
            
            <div className="bg-[#0E0F12] border border-zinc-800 p-3 mb-4 rounded-sm">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-zinc-400">⚽ Target Striker</span>
                <span className="text-zinc-600">➔</span>
                <span className="text-white font-bold">🏈 Power Back</span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">The interior converter. Absorbs physical contact in high-density danger zones and punches the ball across the goal line.</p>
            
            <div className="border-t border-zinc-800 pt-3">
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest block mb-1">Core Metric Translation</span>
              <span className="text-zinc-200 font-mono text-[10px] uppercase font-bold tracking-widest">Box Shots ➔ Rush TDs</span>
            </div>
          </div>

          <div className="bg-[#121316] border border-zinc-800 border-t-4 border-t-blue-600 p-5 shadow-xl hover:-translate-y-1 transition-transform flex flex-col h-full group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-white text-2xl uppercase">WR</h3>
              <span className="text-blue-500 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">⚡</span>
            </div>
            <p className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-4">The Vertical Separator</p>
            
            <div className="bg-[#0E0F12] border border-zinc-800 p-3 mb-4 rounded-sm">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-zinc-400">⚽ Wide Winger</span>
                <span className="text-zinc-600">➔</span>
                <span className="text-white font-bold">🏈 Deep Threat</span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">The boundary weapon. Isolates defenders 1v1, stretches defensive lines vertically, and dominates yards after contact.</p>
            
            <div className="border-t border-zinc-800 pt-3">
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest block mb-1">Core Metric Translation</span>
              <span className="text-zinc-200 font-mono text-[10px] uppercase font-bold tracking-widest">Take-ons ➔ YAC</span>
            </div>
          </div>

          <div className="bg-[#121316] border border-zinc-800 border-t-4 border-t-amber-500 p-5 shadow-xl hover:-translate-y-1 transition-transform flex flex-col h-full group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-white text-2xl uppercase">TE</h3>
              <span className="text-amber-500 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🛡️</span>
            </div>
            <p className="text-amber-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-4">The Hybrid Anchor</p>
            
            <div className="bg-[#0E0F12] border border-zinc-800 p-3 mb-4 rounded-sm">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-zinc-400">⚽ Box-to-Box</span>
                <span className="text-zinc-600">➔</span>
                <span className="text-white font-bold">🏈 Chain Mover</span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">The tactical connector. Wins aerial duels, sets the physical tone in the trenches, and moves intermediate chains reliably.</p>
            
            <div className="border-t border-zinc-800 pt-3">
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest block mb-1">Core Metric Translation</span>
              <span className="text-zinc-200 font-mono text-[10px] uppercase font-bold tracking-widest">Aerials Won ➔ Rec Yds</span>
            </div>
          </div>

          <div className="bg-[#121316] border border-zinc-800 border-t-4 border-t-purple-600 p-5 shadow-xl hover:-translate-y-1 transition-transform flex flex-col h-full group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-white text-2xl uppercase">DEF</h3>
              <span className="text-purple-500 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🧱</span>
            </div>
            <p className="text-purple-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-4">The Territorial Lock</p>
            
            <div className="bg-[#0E0F12] border border-zinc-800 p-3 mb-4 rounded-sm">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-zinc-400">⚽ Defensive Line</span>
                <span className="text-zinc-600">➔</span>
                <span className="text-white font-bold">🏈 D/ST Unit</span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 flex-grow">The collective wall. Denies operating space, forces catastrophic turnovers, and guarantees end-zone preservation.</p>
            
            <div className="border-t border-zinc-800 pt-3">
              <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest block mb-1">Core Metric Translation</span>
              <span className="text-zinc-200 font-mono text-[10px] uppercase font-bold tracking-widest">Clean Sheet ➔ Shutout</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOP 5 PODIUM TEASER */}
      <section className="bg-[#0a0b0d] py-24 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">Live WIF Leaderboard</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Top-5 MVP Podium</h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest pt-2">Composite WIF performers across all global leagues.</p>
          </div>
          
          <div className="bg-[#121316] border border-zinc-800 shadow-2xl overflow-hidden">
            <div className="bg-zinc-900/90 p-3 border-b border-zinc-800 flex justify-center gap-4 text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-400">
              <button className="text-orange-500">GLOBAL</button>
              <button className="hover:text-white transition-colors">PREMIER LEAGUE</button>
              <button className="hover:text-white transition-colors">CHAMPIONS LEAGUE</button>
            </div>
            
            <div className="divide-y divide-zinc-800/60">
              {top5.map((player) => {
                const s = getArchetypeStyles(player.archetype);
                return (
                  <div key={player.id} className="flex items-center justify-between p-4 sm:p-6 hover:bg-zinc-800/30 transition-colors">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-black text-2xl sm:text-4xl text-zinc-700 italic w-8 text-center">{player.rank}</span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-black text-white text-lg sm:text-xl uppercase tracking-wider">{player.name}</h3>
                          <span className={`hidden sm:flex px-2 py-0.5 ${s.badgeBg} ${s.badgeText} font-mono font-black text-[10px] tracking-widest uppercase items-center gap-1 shadow-sm`}>
                            {s.icon} {player.archetype}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest font-bold bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                            {player.statLine}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className={`sm:hidden px-2 py-0.5 ${s.badgeBg} ${s.badgeText} font-mono font-black text-[10px] tracking-widest uppercase shadow-sm mb-1`}>
                        {player.archetype}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5">WIF SCORE</span>
                        <div className="flex items-center justify-end gap-2">
                          <span className="font-black text-2xl sm:text-3xl text-white leading-none">{player.score}</span>
                          <span className={`text-xs ${player.trend === '▲' ? 'text-emerald-500' : player.trend === '▼' ? 'text-red-500' : 'text-zinc-600'}`}>{player.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-4 bg-[#0E0F12] border-t border-zinc-800 text-center">
              <Link href="/rankings" className="text-xs font-mono font-bold text-orange-500 hover:text-white transition-colors uppercase tracking-widest">
                VIEW FULL DRAFT BOARD →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}