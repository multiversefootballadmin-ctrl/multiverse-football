'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function PlaybookPage() {
  const languageContext = useLanguage();
  const lang = languageContext?.lang || 'en';
  const setLang = languageContext?.setLang || function() {};
  const isPt = lang === 'pt';

  const [soccerTerm, setSoccerTerm] = useState('');
  const [nflTerm, setNflTerm] = useState('');
  const [userHandle, setUserHandle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!soccerTerm || !nflTerm) return;
    setSubmitted(true);
    setTimeout(() => {
      setSoccerTerm('');
      setNflTerm('');
      setUserHandle('');
      setSubmitted(false);
    }, 4000);
  };

  const metricMappings = [
    {
      id: "pass_td",
      soccerTitle: "Direct Goal Assist",
      soccerDesc: isPt ? "O passe decisivo que coloca o companheiro na cara da rede sem intermediários." : "The decisive pass putting a teammate directly through on goal.",
      nflTitle: "Passing Touchdown (TD) 🏈",
      nflDesc: isPt ? "O lançamento perfeito que cruza a endzone e garante 6 pontos imediatos." : "The scoring strike finding an open receiver in the endzone for 6 points.",
      tag: "CORE METRIC"
    },
    {
      id: "broken_tackle",
      soccerTitle: "1v1 Dribble Won",
      soccerDesc: isPt ? "Desequilibrar o marcador individual e manter o controle da posse sob pressão." : "Beating a defender in tight quarters while keeping progressive control.",
      nflTitle: "Broken Tackle 🏈",
      nflDesc: isPt ? "Absorver o contato físico, quebrar o plano do defensor e seguir em frente." : "Resisting physical contact, discarding defenders, and keeping drive alive.",
      tag: "ELUSIVENESS"
    },
    {
      id: "yac",
      soccerTitle: "Open-Field Sprint",
      soccerDesc: isPt ? "Condução em alta velocidade explorando o espaço vazio nas costas da zaga." : "High-speed progression into unoccupied space behind defensive lines.",
      nflTitle: "Yards After Catch (YAC) 🏈",
      nflDesc: isPt ? "Jardas conquistadas na corrida explosiva após receber e dominar o passe." : "Explosive yardage gained running after securing possession.",
      tag: "SEPARATION"
    },
    {
      id: "red_zone",
      soccerTitle: "Penalty Box Penetration",
      soccerDesc: isPt ? "Zona crítica onde as defesas afunilam e o índice de conversão decide partidas." : "The critical space where defensive lines compress and games are won.",
      nflTitle: "Red Zone Efficiency 🏈",
      nflDesc: isPt ? "As últimas 20 jardas antes da endzone: espaço reduzido e combate corpo a corpo." : "Final 20 yards before the endzone: tight coverage and physical leverage.",
      tag: "LEVERAGE"
    },
    {
      id: "clean_sheet",
      soccerTitle: "Clean Sheet",
      soccerDesc: isPt ? "90 minutos sem sofrer gols, controlando chutes no alvo e bolas aéreas." : "Zero goals conceded over 90 minutes through discipline and aerial control.",
      nflTitle: "D/ST Shutout & Turnovers 🏈",
      nflDesc: isPt ? "A unidade defensiva travando o adversário, forçando perdas de bola e zerando o rival." : "Defensive unit stifling opponent drives and forcing turnovers.",
      tag: "DEFENSIVE D/ST"
    }
  ];

  const culturalMappings = [
    {
      soccer: "90th-minute stoppage equalizer ⚽",
      nfl: "Hail Mary pass as time expires 🏈",
      context: isPt ? "O desespero total transformado em milagre no último lance da partida." : "Pure desperation turned into a miracle on the final snap."
    },
    {
      soccer: "Classic No. 10 Playmaker ⚽",
      nfl: "Pocket Passer (Field General) 🏈",
      context: isPt ? "Processamento espacial instantâneo e passe milimétrico." : "Elite spatial processing and pinpoint arm accuracy."
    },
    {
      soccer: "Explosive Winger ⚽",
      nfl: "Deep Threat Wide Receiver 🏈",
      context: isPt ? "O terror da defesa: queima marcadores na aceleração e estica o campo." : "The secondary's nightmare: blowing past safeties to stretch the field."
    },
    {
      soccer: "Commanding Center-Back ⚽",
      nfl: "Middle Linebacker (Defensive Captain) 🏈",
      context: isPt ? "O cara que lê a jogada antes de todo mundo e impõe respeito físico." : "The quarterback of the defense who diagnoses schemes and punishes runners."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white pb-24">
      
      {/* HEADER PADRÃO (Termos em Inglês, intocáveis) */}
      <header className="sticky top-0 w-full z-50 px-6 py-5 flex justify-between items-center border-b border-zinc-800/60 bg-[#0E0F12]/90 backdrop-blur-md">
        <div className="font-black text-xl md:text-2xl tracking-tighter uppercase">
          <Link href="/">
            <span className="text-white">MULTIVERSE</span> <span className="text-orange-500">FOOTBALL</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex space-x-6 font-mono text-xs font-bold tracking-widest text-zinc-400">
            <Link href="/rankings" className="hover:text-orange-400 transition-colors">WAR ROOM</Link>
            <Link href="/playbook" className="text-orange-500 font-black">PLAYBOOK</Link>
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

      {/* TITULO E INTRODUÇÃO */}
      <main className="max-w-6xl mx-auto px-6 pt-16 space-y-20">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            {isPt ? "A Pedra de Roseta do Multiverso" : "The Dimensional Rosetta Stone"}
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            The <span className="text-orange-500">Playbook</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            {isPt 
              ? "Dois esportes mundiais com códigos diferentes. Aqui você encontra o guia de tradução: como as ações do Soccer ⚽ se transformam nos conceitos táticos do American Football 🏈 e nas pontuações do nosso Fantasy Game."
              : "Two global sports driven by distinct codes. Here is the official translation bridge: how Soccer ⚽ events map directly into American Football 🏈 mechanics and fantasy scoring."}
          </p>
        </div>

        {/* SEÇÃO 1: O DE-PARA DAS MÉTRICAS DO JOGO */}
        <section className="space-y-6">
          <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              {isPt ? "Métricas Oficiais de Conversão" : "Official Metric Conversions"}
            </h2>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">WIF Telemetry</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {metricMappings.map((m) => (
              <div key={m.id} className="bg-[#121316] border border-zinc-800 p-6 flex flex-col justify-between hover:border-orange-500/40 transition-colors shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 border border-zinc-800 px-2 py-0.5 uppercase">
                    {m.tag}
                  </span>
                  <span className="text-xs font-mono text-orange-500 font-bold tracking-wider">⚽ ⇄ 🏈</span>
                </div>

                <div className="grid grid-cols-1 gap-4 font-mono">
                  <div className="bg-zinc-900/90 border-l-2 border-emerald-500 p-3.5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                      Soccer ⚽ Origin
                    </span>
                    <h3 className="text-sm font-bold text-white font-sans">{m.soccerTitle}</h3>
                    <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">{m.soccerDesc}</p>
                  </div>

                  <div className="bg-zinc-900/90 border-l-2 border-orange-500 p-3.5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-orange-400 font-bold block">
                      NFL 🏈 Variant
                    </span>
                    <h3 className="text-sm font-bold text-white font-sans">{m.nflTitle}</h3>
                    <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">{m.nflDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 2: CULTURA & RESENHA */}
        <section className="space-y-6">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              {isPt ? "Cultura, Estilo & Situações de Jogo" : "Culture, Style & Situational Equivalents"}
            </h2>
            <p className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-widest">
              {isPt ? "Como o sentimento de arquibancada se traduz entre os mundos" : "How fan sentiment translates across codes"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {culturalMappings.map((c, idx) => (
              <div key={idx} className="bg-[#121316] border border-zinc-800 p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-800 text-xs font-mono font-bold">
                  <span className="text-white">{c.soccer}</span>
                  <span className="text-orange-400">{c.nfl}</span>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {c.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 3: ENVIO COMUNITÁRIO */}
        <section className="bg-gradient-to-br from-[#121316] to-[#181a1f] border border-orange-500/30 p-8 md:p-12 space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest">
              Community Incursion
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              {isPt ? "Encontrou outra ponte? Mande para nós." : "Spotted another equivalent? Submit your bridge."}
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
              {isPt 
                ? "Qual termo, lance ou perfil de atleta de Soccer tem uma alma gêmea na NFL que ainda não colocamos aqui? Compartilhe sua visão."
                : "Which Soccer player profile, tactic, or moment has an undeniable NFL counterpart we missed? Share your observation."}
            </p>
          </div>

          {submitted ? (
            <div className="p-4 bg-emerald-950/60 border border-emerald-500 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              ✓ {isPt ? "Cruzamento recebido! Nossa equipe vai avaliar a inclusão." : "Bridge received! Telemetry scouts will audit your proposal."}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  Soccer Term ⚽
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={isPt ? "Ex: Gol de bicicleta" : "Ex: Bicycle kick"}
                  value={soccerTerm}
                  onChange={(e) => setSoccerTerm(e.target.value)}
                  className="w-full bg-[#0E0F12] border border-zinc-700 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  NFL Equivalent 🏈
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={isPt ? "Ex: One-handed catch" : "Ex: One-handed catch"}
                  value={nflTerm}
                  onChange={(e) => setNflTerm(e.target.value)}
                  className="w-full bg-[#0E0F12] border border-zinc-700 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  {isPt ? "Seu Nome / @ (Opcional)" : "Your Name / Handle (Optional)"}
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="@seunome"
                    value={userHandle}
                    onChange={(e) => setUserHandle(e.target.value)}
                    className="w-full bg-[#0E0F12] border border-zinc-700 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                  />
                  <button 
                    type="submit" 
                    className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors shrink-0"
                  >
                    {isPt ? "Enviar" : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}