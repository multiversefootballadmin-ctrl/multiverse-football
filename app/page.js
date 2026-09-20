'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  // Estado para a ferramenta interativa do Hero
  const [activeAthlete, setActiveAthlete] = useState(0);
  const [showNflVariant, setShowNflVariant] = useState(false);

  const athletes = [
    {
      id: "kdb",
      name: "K. De Bruyne",
      soccer: {
        role: "Playmaker ⚽",
        metric1: "Key Passes", val1: "3.2/g",
        metric2: "Vision Score", val2: "99"
      },
      nfl: {
        role: "Franchise QB 🏈",
        metric1: "Pocket Presence", val1: "Elite",
        metric2: "3rd Down Conv", val2: "68%"
      },
      color: "from-sky-900 to-[#0E0F12]",
      accent: "text-sky-400"
    },
    {
      id: "vini",
      name: "V. Júnior",
      soccer: {
        role: "Winger ⚽",
        metric1: "Successful Dribbles", val1: "4.1/g",
        metric2: "Burst Speed", val2: "36 km/h"
      },
      nfl: {
        role: "Deep Threat WR 🏈",
        metric1: "Yards After Catch", val1: "Top 5%",
        metric2: "Vertical Sep.", val2: "Max"
      },
      color: "from-purple-900 to-[#0E0F12]",
      accent: "text-purple-400"
    },
    {
      id: "haaland",
      name: "E. Haaland",
      soccer: {
        role: "Striker ⚽",
        metric1: "Goals inside Box", val1: "0.9/g",
        metric2: "Physical Duels", val2: "Won 72%"
      },
      nfl: {
        role: "Power RB 🏈",
        metric1: "Broken Tackles", val1: "High",
        metric2: "Goal-Line TDs", val2: "Elite"
      },
      color: "from-blue-900 to-[#0E0F12]",
      accent: "text-blue-400"
    }
  ];

  const current = athletes[activeAthlete];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* HEADER TÁTICO */}
      <header className="absolute top-0 w-full z-50 px-6 py-8 flex justify-between items-center border-b border-zinc-800/50 bg-[#0E0F12]/80 backdrop-blur-md">
        <div className="font-black text-2xl tracking-tighter uppercase">
          <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-mono text-xs font-bold tracking-widest text-zinc-400">
          <Link href="/rankings" className="hover:text-orange-400 transition-colors">WAR ROOM</Link>
          <Link href="/methodology" className="hover:text-orange-400 transition-colors">THE METHOD</Link>
          <Link href="/about" className="hover:text-orange-400 transition-colors">ORIGIN</Link>
        </nav>
      </header>

      {/* HERO SECTION INTERATIVA */}
      <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        {/* Efeito de grade cibernética no fundo */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: A Mensagem */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              Live Telemetry Translator
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95]">
              Comic books have the multiverse. <br />
              <span className="text-orange-500">We have the data.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
              What happens when the world's most elite soccer ⚽ athletes are dropped into the American football 🏈 reality? We don't guess. We map their kinematic signatures into hard NFL archetypes using the <strong>WIF Score</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 text-xs transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] text-center">
                Enter The War Room
              </Link>
              <Link href="/methodology" className="bg-transparent hover:bg-zinc-900 border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest px-8 py-4 text-xs transition-all text-center">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Lado Direito: A Mágica Interativa */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#121316] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Controles do Simulador */}
              <div className="bg-zinc-900 p-4 border-b border-zinc-800 flex justify-between items-center gap-2">
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                  {athletes.map((ath, idx) => (
                    <button 
                      key={ath.id}
                      onClick={() => { setActiveAthlete(idx); setShowNflVariant(false); }}
                      className={`px-3 py-1.5 text-[10px] font-mono uppercase font-bold tracking-widest whitespace-nowrap transition-colors ${activeAthlete === idx ? 'bg-zinc-700 text-white' : 'bg-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
                    >
                      {ath.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Display do Cartão Holográfico */}
              <div className={`relative p-8 h-80 flex flex-col justify-between bg-gradient-to-b ${current.color} transition-all duration-700`}>
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs font-bold tracking-widest uppercase text-white/50">
                    {showNflVariant ? "Dimension: Gridiron 🏈" : "Dimension: Pitch ⚽"}
                  </div>
                  <div className={`font-black text-4xl uppercase tracking-tighter ${current.accent}`}>
                    {showNflVariant ? current.nfl.role.split(' ')[0] : current.id}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                    {current.name}
                  </h2>
                  <div className="bg-[#0E0F12]/80 backdrop-blur-sm border border-white/10 p-4 font-mono text-xs space-y-3">
                    <div className="flex justify-between border-b border-white/10 pb-2">
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

              {/* O Botão Mágico */}
              <button 
                onClick={() => setShowNflVariant(!showNflVariant)}
                className={`w-full p-4 font-black uppercase tracking-widest text-xs transition-colors ${showNflVariant ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
              >
                {showNflVariant ? "← Revert to Soccer ⚽" : "Translate to NFL 🏈 →"}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* MANIFESTO DO FÃ BILÍNGUE */}
      <section className="bg-[#0a0b0d] py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-mono text-orange-500 font-bold tracking-widest uppercase mb-4">
            The Bilingual Fan Manifesto
          </h2>
          <p className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
            You don't just see a midfielder passing a ball. <br/>
            You see a <span className="text-orange-500">Quarterback reading the field.</span>
          </p>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg max-w-3xl mx-auto">
            <p>
              When you grow up watching global soccer ⚽ but fall in love with the tactical warfare of American football 🏈, your brain wires differently. You start seeing the same athletic dominance expressed in two different codes.
            </p>
            <p>
              <strong>Multiverse Football</strong> was built for fans who speak both languages. We don't rely on opinions. We use real situational data, converting open-space sprints into Yards After Catch, and key passes into 3rd-down conversions.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0E0F12] py-12 border-t border-zinc-900 text-center">
        <div className="font-black text-xl tracking-tighter uppercase mb-4 opacity-50">
          <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
        </div>
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          Engineered for the bilingual fan. Not affiliated with the NFL or any soccer league.
        </p>
      </footer>
    </div>
  );
}