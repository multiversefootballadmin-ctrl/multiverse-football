'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HomePage() {
  const { lang, setLang } = useLanguage() || { lang: 'pt', setLang: () => {} };
  const isPt = lang === 'pt';

  const [activeAthlete, setActiveAthlete] = useState(0);
  const [showNflVariant, setShowNflVariant] = useState(false);

  const athletes = [
    {
      id: "kdb",
      name: "K. De Bruyne",
      soccer: {
        role: isPt ? "Armador / Meia ⚽" : "Playmaker ⚽",
        metric1: isPt ? "Passes Decisivos" : "Key Passes", val1: "3.2 / jogo",
        metric2: isPt ? "Visão de Jogo" : "Vision Score", val2: "99"
      },
      nfl: {
        role: "Franchise QB 🏈",
        metric1: isPt ? "Presença no Pocket" : "Pocket Presence", val1: isPt ? "Elite" : "Elite",
        metric2: isPt ? "Conv. de 3ª Descida" : "3rd Down Conv.", val2: "68%"
      },
      color: "from-sky-950 to-[#0E0F12]",
      accent: "text-sky-400"
    },
    {
      id: "vini",
      name: "V. Júnior",
      soccer: {
        role: isPt ? "Ponta Explosivo ⚽" : "Winger ⚽",
        metric1: isPt ? "Dribles Certos" : "Successful Dribbles", val1: "4.1 / jogo",
        metric2: isPt ? "Velocidade Pico" : "Burst Speed", val2: "36 km/h"
      },
      nfl: {
        role: "Deep Threat WR 🏈",
        metric1: isPt ? "Jardas Pós-Recepção (YAC)" : "Yards After Catch", val1: isPt ? "Top 5% Liga" : "Top 5%",
        metric2: isPt ? "Separação Vertical" : "Vertical Separation", val2: "Máxima"
      },
      color: "from-purple-950 to-[#0E0F12]",
      accent: "text-purple-400"
    },
    {
      id: "haaland",
      name: "E. Haaland",
      soccer: {
        role: isPt ? "Centroavante ⚽" : "Striker ⚽",
        metric1: isPt ? "Gols na Área" : "Box Finishing", val1: "0.9 / jogo",
        metric2: isPt ? "Duelos Físicos" : "Physical Duels", val2: "72% Vencidos"
      },
      nfl: {
        role: "Power RB 🏈",
        metric1: isPt ? "Tackles Quebrados" : "Broken Tackles", val1: isPt ? "Nível Elite" : "Elite Tier",
        metric2: isPt ? "TDs Linha de Gol" : "Goal-Line TDs", val2: "Alta Eficiência"
      },
      color: "from-amber-950 to-[#0E0F12]",
      accent: "text-amber-400"
    }
  ];

  const current = athletes[activeAthlete];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* HEADER COM SELETOR DE IDIOMA */}
      <header className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center border-b border-zinc-800/40 bg-[#0E0F12]/80 backdrop-blur-md">
        <div className="font-black text-xl md:text-2xl tracking-tighter uppercase">
          <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-6 font-mono text-xs font-bold tracking-widest text-zinc-400">
            <Link href="/rankings" className="hover:text-orange-400 transition-colors">WAR ROOM</Link>
            <Link href="/playbook" className="hover:text-orange-400 transition-colors">PLAYBOOK</Link>
            <Link href="/methodology" className="hover:text-orange-400 transition-colors">{isPt ? "METODOLOGIA" : "THE METHOD"}</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">{isPt ? "MANIFESTO" : "ORIGIN"}</Link>
          </nav>

          {/* Toggle PT / EN */}
          <div className="flex items-center border border-zinc-800 bg-zinc-900 p-1 font-mono text-xs">
            <button 
              onClick={() => setLang && setLang('pt')} 
              className={`px-2 py-1 transition-colors ${isPt ? 'bg-orange-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-200'}`}
            >
              PT
            </button>
            <button 
              onClick={() => setLang && setLang('en')} 
              className={`px-2 py-1 transition-colors ${!isPt ? 'bg-orange-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-200'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION COM O CONVERSOR INTERATIVO */}
      <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Narrativa Principal */}
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
                ? "O que acontece se atletas de elite do Futebol ⚽ competissem na realidade do Futebol Americano 🏈? Sem achismos. Nós traduzimos atributos reais de jogo em posições da NFL através do WIF Score."
                : "What happens when elite Soccer ⚽ stars are dropped into American Football 🏈? No guesses. We map real game attributes into true NFL archetypes using the WIF Score."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/rankings" className="bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 text-xs transition-all shadow-[0_0_25px_rgba(249,115,22,0.3)] text-center">
                {isPt ? "Acessar War Room" : "Enter The War Room"}
              </Link>
              <Link href="/methodology" className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-bold uppercase tracking-widest px-8 py-4 text-xs transition-all text-center">
                {isPt ? "Entenda o Cálculo" : "See The Math"}
              </Link>
            </div>
          </div>

          {/* O Tradutor de Atletas */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#121316] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
              
              {/* Seletor de Atletas */}
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

              {/* Cartão Holográfico Dinâmico */}
              <div className={`p-8 h-80 flex flex-col justify-between bg-gradient-to-b ${current.color} transition-all duration-500 border-b border-zinc-800/80`}>
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase px-2.5 py-1 bg-black/40 border border-white/10 text-zinc-300">
                    {showNflVariant 
                      ? (isPt ? "Universo: Futebol Americano 🏈" : "Reality: NFL 🏈") 
                      : (isPt ? "Origem: Futebol ⚽" : "Origin: Soccer ⚽")}
                  </span>
                  <span className={`font-mono text-xs font-black uppercase tracking-widest ${current.accent}`}>
                    {showNflVariant ? "NFL VARIANT" : "ORIGINAL"}
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

              {/* Botão de Transição Dimensional */}
              <button 
                onClick={() => setShowNflVariant(!showNflVariant)}
                className={`w-full py-4 px-6 font-mono font-black uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 ${showNflVariant ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
              >
                {showNflVariant 
                  ? (isPt ? "← Voltar ao Futebol ⚽" : "← Revert to Soccer ⚽")
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
            {isPt ? "O Manifesto do Fã Bilíngue" : "The Bilingual Fan Manifesto"}
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
              ? "Para quem cresceu respirando futebol ⚽ e se apaixonou pelo xadrez tático do futebol americano 🏈. O Multiverse Football cruza as métricas dos dois códigos esportivos através de cálculos auditados de impacto e ganho de jardas."
              : "Built for fans who breathe global soccer ⚽ and the tactical warfare of American football 🏈. Multiverse Football bridges the telemetry of both codes through situational impact data."}
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