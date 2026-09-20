'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [activeAthlete, setActiveAthlete] = useState(0);
  const [showNflVariant, setShowNflVariant] = useState(false);

  const athletes = [
    {
      id: "kdb", name: "K. De Bruyne",
      soccer: { role: "Playmaker ⚽", metric1: "Key Passes", val1: "3.2 / game", metric2: "Vision Score", val2: "99" },
      nfl: { role: "Franchise QB 🏈", metric1: "Pocket Presence", val1: "Elite", metric2: "3rd Down Conv.", val2: "68%" },
      color: "from-red-950/80 to-[#0E0F12]", accent: "text-red-500", icon: "🎯"
    },
    {
      id: "vini", name: "V. Júnior",
      soccer: { role: "Winger ⚽", metric1: "Successful Dribbles", val1: "4.1 / game", metric2: "Burst Speed", val2: "36 km/h" },
      nfl: { role: "Deep Threat WR 🏈", metric1: "Yards After Catch", val1: "Top 5%", metric2: "Vertical Separation", val2: "Max" },
      color: "from-blue-950/80 to-[#0E0F12]", accent: "text-blue-500", icon: "⚡"
    },
    {
      id: "haaland", name: "E. Haaland",
      soccer: { role: "Striker ⚽", metric1: "Box Finishing", val1: "0.9 / game", metric2: "Physical Duels", val2: "72% Won" },
      nfl: { role: "Power RB 🏈", metric1: "Broken Tackles", val1: "Elite Tier", metric2: "Goal-Line TDs", val2: "Elite" },
      color: "from-emerald-950/80 to-[#0E0F12]", accent: "text-emerald-500", icon: "🏃‍♂️"
    }
  ];

  const current = athletes[activeAthlete];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-20">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] pt-16 pb-20 flex items-center overflow-hidden flex-col justify-center border-b border-zinc-900">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center gap-8">
          
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              The Statistical Bridge
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              What If the Laws of <br />
              <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">Sports Were Rewritten?</span>
            </h1>
            
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto mt-6">
              Pop culture mastered the multiverse. We built the statistical bridge. Real pitch performance translated into gridiron efficiency through the proprietary WIF Score engine.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 text-xs transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Enter The War Room
              </Link>
              <Link href="/methodology" className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold uppercase tracking-widest px-8 py-4 text-xs transition-all">
                Decode The Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHETYPE QUICK-CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">Archetype Quick-Cards</h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Every warrior has a role across both dimensions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-[#121316] border-t-2 border-red-500 p-6 shadow-lg">
            <h3 className="font-black text-white text-xl uppercase mb-1">QB</h3>
            <p className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">The Field General</p>
            <p className="text-xs text-zinc-400 leading-relaxed">The master distributor. Dictates tempo, reads defensive shells, and engineers scoring drives.</p>
          </div>
          <div className="bg-[#121316] border-t-2 border-emerald-500 p-6 shadow-lg">
            <h3 className="font-black text-white text-xl uppercase mb-1">RB</h3>
            <p className="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">The Ground Weapon</p>
            <p className="text-xs text-zinc-400 leading-relaxed">The interior converter. Absorbs contact in high-density danger zones and punches the ball across.</p>
          </div>
          <div className="bg-[#121316] border-t-2 border-blue-500 p-6 shadow-lg">
            <h3 className="font-black text-white text-xl uppercase mb-1">WR</h3>
            <p className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">The Vertical Separator</p>
            <p className="text-xs text-zinc-400 leading-relaxed">The boundary threat. Isolates defenders 1v1, stretches secondaries, and dominates YAC.</p>
          </div>
          <div className="bg-[#121316] border-t-2 border-amber-500 p-6 shadow-lg">
            <h3 className="font-black text-white text-xl uppercase mb-1">TE</h3>
            <p className="text-amber-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">The Hybrid Anchor</p>
            <p className="text-xs text-zinc-400 leading-relaxed">The tactical connector. Wins aerial duels, sets the physical tone, and moves intermediate chains.</p>
          </div>
          <div className="bg-[#121316] border-t-2 border-purple-500 p-6 shadow-lg">
            <h3 className="font-black text-white text-xl uppercase mb-1">DEF</h3>
            <p className="text-purple-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">The Territorial Lock</p>
            <p className="text-xs text-zinc-400 leading-relaxed">The collective wall. Denies operating space, forces catastrophic turnovers, and preserves clean sheets.</p>
          </div>
        </div>
      </section>

      {/* TOP 5 PODIUM TEASER */}
      <section className="bg-[#0a0b0d] py-20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">Live Telemetry</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">Top-5 MVP Podium</h2>
          </div>
          
          {/* Simulador Interativo */}
          <div className="w-full max-w-3xl mx-auto mt-8">
            <div className="bg-[#121316] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col text-left">
              <div className="bg-zinc-900/90 p-2 border-b border-zinc-800 flex flex-wrap gap-2">
                {athletes.map((ath, idx) => (
                  <button key={ath.id} onClick={() => { setActiveAthlete(idx); setShowNflVariant(false); }} className={`flex-1 py-3 px-2 text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider transition-colors ${activeAthlete === idx ? 'bg-zinc-800 text-white border-b-2 border-orange-500' : 'text-zinc-500 hover:text-zinc-300'}`}>
                    {ath.name}
                  </button>
                ))}
              </div>

              <div className={`p-8 md:p-10 flex flex-col justify-between bg-gradient-to-b ${current.color} transition-all duration-500 border-b border-zinc-800/80`}>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-black/40 border border-white/10 text-zinc-300">
                    {showNflVariant ? "Reality: NFL 🏈" : "Origin: Soccer ⚽"}
                  </span>
                  <span className={`font-mono text-[10px] font-black uppercase tracking-widest ${current.accent}`}>
                    {showNflVariant ? "NFL VARIANT" : "ORIGINAL"}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                      {current.name} <span className="text-3xl">{showNflVariant ? current.icon : ''}</span>
                    </h2>
                    <p className={`${current.accent} font-mono text-xs uppercase tracking-wider font-bold mt-1`}>
                      {showNflVariant ? current.nfl.role : current.soccer.role}
                    </p>
                  </div>

                  <div className="bg-[#0E0F12]/80 border border-white/10 p-5 font-mono text-xs sm:text-sm space-y-3">
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400">{showNflVariant ? current.nfl.metric1 : current.soccer.metric1}</span>
                      <span className="text-white font-bold">{showNflVariant ? current.nfl.val1 : current.soccer.val1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">{showNflVariant ? current.nfl.metric2 : current.soccer.metric2}</span>
                      <span className="text-white font-bold">{showNflVariant ? current.nfl.val2 : current.soccer.val2}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setShowNflVariant(!showNflVariant)} className={`w-full py-5 px-6 font-mono font-black uppercase tracking-widest text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 ${showNflVariant ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}>
                {showNflVariant ? "← Revert to Soccer ⚽" : "Translate to NFL 🏈 →"}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}