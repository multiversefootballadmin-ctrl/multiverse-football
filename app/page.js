'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HomePage() {
  // Correção definitiva do Bug do Botão de Idioma
  const languageContext = useLanguage();
  const lang = languageContext?.lang || 'en';
  const setLang = languageContext?.setLang || function() {};
  const isPt = lang === 'pt';

  const [activeAthlete, setActiveAthlete] = useState(0);
  const [showNflVariant, setShowNflVariant] = useState(false);

  const athletes = [
    {
      id: "kdb",
      name: "K. De Bruyne",
      soccer: {
        role: "Playmaker ⚽",
        metric1: "Key Passes", val1: "3.2 / game",
        metric2: "Vision Score", val2: "99"
      },
      nfl: {
        role: "Franchise QB 🏈",
        metric1: "Pocket Presence", val1: "Elite",
        metric2: "3rd Down Conv.", val2: "68%"
      },
      color: "from-sky-950 to-[#0E0F12]",
      accent: "text-sky-400"
    },
    {
      id: "vini",
      name: "V. Júnior",
      soccer: {
        role: "Winger ⚽",
        metric1: "Successful Dribbles", val1: "4.1 / game",
        metric2: "Burst Speed", val2: "36 km/h"
      },
      nfl: {
        role: "Deep Threat WR 🏈",
        metric1: "Yards After Catch", val1: "Top 5%",
        metric2: "Vertical Separation", val2: "Max"
      },
      color: "from-purple-950 to-[#0E0F12]",
      accent: "text-purple-400"
    },
    {
      id: "haaland",
      name: "E. Haaland",
      soccer: {
        role: "Striker ⚽",
        metric1: "Box Finishing", val1: "0.9 / game",
        metric2: "Physical Duels", val2: "72% Won"
      },
      nfl: {
        role: "Power RB 🏈",
        metric1: "Broken Tackles", val1: "Elite Tier",
        metric2: "Goal-Line TDs", val2: "Elite"
      },
      color: "from-amber-950 to-[#0E0F12]",
      accent: "text-amber-400"
    }
  ];

  const current = athletes[activeAthlete];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* HEADER PADRÃO (Termos em Inglês, intocáveis) */}
      <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center border-b border-zinc-800/40 bg-[#0E0F12]/80 backdrop-blur-md">
        <div className="font-black text-xl md:text-2xl tracking-tighter uppercase">
          <Link href="/">
            <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-6 font-mono text-xs font-bold tracking-widest text-zinc-400">
            <Link href="/rankings" className="hover:text-orange-400 transition-colors">WAR ROOM</Link>
            <Link href="/playbook" className="hover:text-orange-400 transition-colors">PLAYBOOK</Link>
            <Link href="/methodology" className="hover:text-orange-400 transition-colors">THE METHOD</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">ORIGIN</Link>
          </nav>

          <div className="flex items-center border border-zinc-800 bg-zinc-900 p-1 font-mono text-xs">
            <button 
              onClick={() => setLang('pt')} 
              className={`px-2 py-1 transition-colors ${isPt ? 'bg-orange-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-200'}`}
            >
              PT
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-1 transition-colors ${!isPt ? 'bg-orange-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-200'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="flex-1 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              {isPt ? "Telemetria Esportiva Cruzada" : "Cross-Sport Telemetry"}
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95]">
              {isPt ? (
                <>Os quadrinhos têm o multiverso. <br /><span className="text-orange-500">Nós temos os dados.</span></>
              ) : (
                <>Comic books have the multiverse. <br /><span className="text-orange-500">We have the data.</span></>
              )}
            </h1>
            
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
              {isPt 
                ? "O que acontece se atletas de elite do Futebol ⚽ competissem na realidade do Futebol Americano 🏈? Sem achismos. Nós traduzimos atributos reais de jogo em arquétipos da NFL através do WIF Score."
                : "What happens when elite Soccer ⚽ stars are dropped into American Football 🏈? No guesses. We map real game attributes into true NFL archetypes using the WIF Score."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 text-xs transition-all shadow-[0_0_25px_rgba(249,115,22,0.3)] text-center">
                Enter The War Room
              </Link>
              <Link href="/methodology" className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold uppercase tracking-widest px-8 py-4 text-xs transition-all text-center">
                {isPt ? "Entenda o Cálculo" : "See The Math"}
              </Link>
            </div>
          </div>

          {/* O Tradutor de Atletas */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#121316] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
              
              <div className="bg-zinc-900/90 p-3 border-b border-zinc-800 flex gap-2">
                {athletes.map((ath, idx) => (
                  <button 
                    key={ath.id}
                    onClick={() => { setActiveAthlete(idx); setShowNflVariant(false); }}
                    className={`flex-1 py-2 text-xs font-mono uppercase font-bold tracking-wider transition-colors ${activeAthlete === idx ? 'bg-zinc-800 text-orange-400 border-b-2 border-orange-500' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    {ath.name}
                  </button>
                ))}
              </div>

              <div className={`p-8 h-80 flex flex-col justify-between bg-gradient-to-b ${current.color} transition-all duration-500 border-b border-zinc-800/80`}>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase px-2.5 py-1 bg-black/40 border border-white/10 text-zinc-300">
                    {showNflVariant ? "Dimension: NFL 🏈" : "Dimension: Soccer ⚽"}
                  </span>
                  <span className={`font-mono text-xs font-black uppercase tracking-widest ${current.accent}`}>
                    {showNflVariant ? "NFL VARIANT" : "ORIGIN"}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                      {current.name}
                    </h2>
                    <p className="text-orange-400 font-mono text-xs uppercase tracking-wider font-bold">
                      {showNflVariant ? current.nfl.role : current.soccer.role}
                    </p>
                  </div>

                  <div className="bg-[#0E0F12]/80 border border-white/10 p-3.5 font-mono text-xs space-y-2">
                    <div className="flex justify-between border-b border-zinc-800 pb-1.5">
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
                className={`w-full py-4 px-6 font-mono font-black uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 ${showNflVariant ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
              >
                {showNflVariant 
                  ? (isPt ? "← Voltar ao Soccer ⚽" : "← Revert to Soccer ⚽")
                  : (isPt ? "Traduzir para a NFL 🏈 →" : "Translate to NFL 🏈 →")}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* MANIFESTO DO FÃ BILÍNGUE */}
      <section className="bg-[#0a0b0d] py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-mono text-orange-500 font-bold tracking-widest uppercase">
            The Bilingual Fan
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
            {isPt ? (
              <>Você não vê apenas um passe de meio-campo. <br /><span className="text-orange-500">Você vê um Quarterback lendo a defesa.</span></>
            ) : (
              <>You don't just see a midfield pass. <br /><span className="text-orange-500">You see a Quarterback scanning the secondary.</span></>
            )}
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
            {isPt
              ? "Para quem cresceu respirando Soccer ⚽ e se apaixonou pelo xadrez tático do American Football 🏈. O Multiverse Football cruza as métricas dos dois códigos através de cálculos auditados."
              : "Built for fans who breathe global Soccer ⚽ and the tactical warfare of American Football 🏈. Multiverse Football bridges the telemetry of both codes through situational impact data."}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0E0F12] py-10 border-t border-zinc-900 text-center font-mono text-xs text-zinc-500">
        <p className="uppercase tracking-widest">MULTIVERSE FOOTBALL // TELEMETRY LAB</p>
      </footer>
    </div>
  );
}