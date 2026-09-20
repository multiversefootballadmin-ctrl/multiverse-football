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
      <section className="relative w-full min-h-[90vh] pt-24 pb-20 flex items-center overflow-hidden flex-col justify-center">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Marca d'água no fundo para imersão */}
        <div className="absolute top-1/4 left-0 w-full text-center overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none flex flex-col gap-4">
          <span className="text-[12vw] font-black text-white uppercase leading-none">UNIVERSAL TRUTH</span>
          <span className="text-[12vw] font-black text-white uppercase leading-none">SPORTING DIMENSION</span>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center gap-10">
          
          <div className="space-y-6">
            
            {/* O Crachá Fluente */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Fluent in Both Footballs ⚽🏈
            </div>
            
            {/* O Título de Impacto */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Crossing the <br />
              <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">Sporting Dimension.</span>
            </h1>
            
            {/* O Bloco de Texto Explicativo e o Punchline */}
            <div className="bg-[#121316]/80 backdrop-blur-md border border-zinc-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-3xl mx-auto mt-6">
              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-4">
                <strong className="text-white">What if the pitch became the pocket?</strong> Drop elite Soccer ⚽ stars into the NFL 🏈 reality. 
              </p>
              <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-6">
                No opinions. Just raw data mathematically translated through the proprietary WIF Score.
              </p>
              
              <div className="border-t border-zinc-800 pt-5 mt-2">
                <span className="text-orange-500 font-black tracking-widest uppercase text-sm sm:text-base drop-shadow-md">
                  TWO CODES. ONE UNIVERSAL TRUTH.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-10 py-5 text-sm transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                Enter The War Room
              </Link>
              <Link href="/playbook" className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold uppercase tracking-widest px-10 py-5 text-sm transition-all">
                Read The Playbook
              </Link>
            </div>
          </div>

          {/* O Tradutor de Atletas Interativo */}
          <div className="w-full max-w-2xl mt-8">
            <div className="bg-[#121316] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
              <div className="bg-zinc-900/90 p-2 border-b border-zinc-800 flex gap-2">
                {athletes.map((ath, idx) => (
                  <button 
                    key={ath.id}
                    onClick={() => { setActiveAthlete(idx); setShowNflVariant(false); }}
                    className={`flex-1 py-3 text-xs font-mono uppercase font-bold tracking-wider transition-colors ${activeAthlete === idx ? 'bg-zinc-800 text-white border-b-2 border-orange-500' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    {ath.name}
                  </button>
                ))}
              </div>

              <div className={`p-8 md:p-10 flex flex-col justify-between bg-gradient-to-b ${current.color} transition-all duration-500 border-b border-zinc-800/80`}>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1.5 bg-black/40 border border-white/10 text-zinc-300">
                    {showNflVariant ? "Reality: NFL 🏈" : "Origin: Soccer ⚽"}
                  </span>
                  <span className={`font-mono text-xs font-black uppercase tracking-widest ${current.accent}`}>
                    {showNflVariant ? "NFL VARIANT" : "ORIGINAL"}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                      {current.name} <span className="text-3xl">{showNflVariant ? current.icon : ''}</span>
                    </h2>
                    <p className={`${current.accent} font-mono text-sm uppercase tracking-wider font-bold mt-1`}>
                      {showNflVariant ? current.nfl.role : current.soccer.role}
                    </p>
                  </div>

                  <div className="bg-[#0E0F12]/80 border border-white/10 p-5 font-mono text-sm space-y-3">
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

              <button 
                onClick={() => setShowNflVariant(!showNflVariant)}
                className={`w-full py-5 px-6 font-mono font-black uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 ${showNflVariant ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
              >
                {showNflVariant ? "← Revert to Soccer ⚽" : "Translate to NFL 🏈 →"}
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}