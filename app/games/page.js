'use client';

import { useState } from 'react';
import Link from 'next/link';

const HISTORIC_POOLS = [
  {
    team: "Real Madrid",
    season: "2023-24",
    flag: "🇪🇸",
    players: [
      { id: "vini_24", name: "Vinícius Júnior", pos: "WR", wif: 24.8, club: "Real Madrid", nat: "BRA" },
      { id: "jude_24", name: "Jude Bellingham", pos: "TE", wif: 23.2, club: "Real Madrid", nat: "ENG" },
      { id: "kroos_24", name: "Toni Kroos", pos: "QB", wif: 21.5, club: "Real Madrid", nat: "GER" },
      { id: "rodrygo_24", name: "Rodrygo Goes", pos: "FLX", wif: 18.4, club: "Real Madrid", nat: "BRA" }
    ]
  },
  {
    team: "Manchester City",
    season: "2022-23",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    players: [
      { id: "kdb_23", name: "Kevin De Bruyne", pos: "QB", wif: 27.6, club: "Man City", nat: "BEL" },
      { id: "haaland_23", name: "Erling Haaland", pos: "RB", wif: 26.2, club: "Man City", nat: "NOR" },
      { id: "rodri_23", name: "Rodri", pos: "TE", wif: 20.4, club: "Man City", nat: "ESP" },
      { id: "bernardo_23", name: "Bernardo Silva", pos: "FLX", wif: 19.8, club: "Man City", nat: "POR" }
    ]
  },
  {
    team: "Flamengo",
    season: "2019",
    flag: "🇧🇷",
    players: [
      { id: "bh_19", name: "Bruno Henrique", pos: "WR", wif: 24.2, club: "Flamengo", nat: "BRA" },
      { id: "gabigol_19", name: "Gabriel Barbosa", pos: "RB", wif: 25.1, club: "Flamengo", nat: "BRA" },
      { id: "everton_19", name: "Éverton Ribeiro", pos: "QB", wif: 22.8, club: "Flamengo", nat: "BRA" },
      { id: "gerson_19", name: "Gerson", pos: "TE", wif: 19.5, club: "Flamengo", nat: "BRA" }
    ]
  },
  {
    team: "Barcelona",
    season: "2014-15",
    flag: "🇪🇸",
    players: [
      { id: "messi_15", name: "Lionel Messi", pos: "QB", wif: 31.4, club: "Barcelona", nat: "ARG" },
      { id: "neymar_15", name: "Neymar Jr", pos: "WR", wif: 26.7, club: "Barcelona", nat: "BRA" },
      { id: "suarez_15", name: "Luis Suárez", pos: "RB", wif: 27.2, club: "Barcelona", nat: "URU" },
      { id: "busquets_15", name: "Sergio Busquets", pos: "TE", wif: 17.8, club: "Barcelona", nat: "ESP" }
    ]
  },
  {
    team: "France",
    season: "2018",
    flag: "🇫🇷",
    players: [
      { id: "mbappe_18", name: "Kylian Mbappé", pos: "WR", wif: 26.9, club: "France", nat: "FRA" },
      { id: "griezmann_18", name: "Antoine Griezmann", pos: "QB", wif: 22.3, club: "France", nat: "FRA" },
      { id: "kante_18", name: "N'Golo Kanté", pos: "TE", wif: 19.1, club: "France", nat: "FRA" },
      { id: "pogba_18", name: "Paul Pogba", pos: "FLX", wif: 20.6, club: "France", nat: "FRA" }
    ]
  }
];

const INITIAL_ROSTER = [
  { slot: "QB", accepts: ["QB"], player: null },
  { slot: "RB1", accepts: ["RB", "FLX"], player: null },
  { slot: "RB2", accepts: ["RB", "FLX"], player: null },
  { slot: "WR1", accepts: ["WR", "FLX"], player: null },
  { slot: "WR2", accepts: ["WR", "FLX"], player: null },
  { slot: "TE", accepts: ["TE", "FLX"], player: null },
  { slot: "FLX", accepts: ["RB", "WR", "TE", "FLX"], player: null }
];

export default function GamesPage() {
  const [round, setRound] = useState(1);
  const [roster, setRoster] = useState(INITIAL_ROSTER);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

  // Lista de IDs já escolhidos para impedir repetição
  const draftedPlayerIds = roster.filter(s => s.player !== null).map(s => s.player.id);

  // Pontuação Base
  const baseScore = roster.reduce((acc, item) => acc + (item.player ? item.player.wif : 0), 0);

  // Detalhe de Bónus de Química
  let clubMatches = 0;
  let natMatches = 0;
  const pickedPlayers = roster.filter(s => s.player !== null).map(s => s.player);

  for (let i = 0; i < pickedPlayers.length; i++) {
    for (let j = i + 1; j < pickedPlayers.length; j++) {
      if (pickedPlayers[i].club === pickedPlayers[j].club) clubMatches++;
      if (pickedPlayers[i].nat === pickedPlayers[j].nat) natMatches++;
    }
  }

  const chemScore = (clubMatches * 2) + (natMatches * 1);
  const totalScore = (baseScore + chemScore).toFixed(1);

  // Jogador MVP do Roster
  const mvpPlayer = pickedPlayers.length > 0 
    ? [...pickedPlayers].sort((a, b) => b.wif - a.wif)[0]
    : null;

  const handleRoll = () => {
    const randomTeam = HISTORIC_POOLS[Math.floor(Math.random() * HISTORIC_POOLS.length)];
    setCurrentRoll(randomTeam);
  };

  const draftPlayer = (player, targetSlot) => {
    const updated = roster.map(item => {
      if (item.slot === targetSlot) {
        return { ...item, player };
      }
      return item;
    });

    setRoster(updated);
    setCurrentRoll(null);

    if (round >= 7) {
      setGameFinished(true);
    } else {
      setRound(round + 1);
    }
  };

  const resetGame = () => {
    setRound(1);
    setRoster(INITIAL_ROSTER);
    setCurrentRoll(null);
    setGameFinished(false);
  };

  const getBadgeColor = (pos) => {
    switch (pos) {
      case 'QB': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'RB': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'WR': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'TE': return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* HEADER DO JOGO */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-orange-500 text-white font-black text-xs px-2.5 py-1 rounded tracking-widest uppercase">
              Round {round}/7
            </span>
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
              {7 - (round - 1)} Picks Remaining
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-2">
            17-0 Crossover Game
          </h1>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">
            Roll squads, draft soccer stars into NFL positions, and reach 150+ points.
          </p>
        </div>

        <button 
          onClick={resetGame}
          className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-orange-400 border border-zinc-800 hover:border-zinc-700 px-3 py-2 rounded transition-colors"
        >
          Reset ↺
        </button>
      </div>

      {/* DASHBOARD DE PONTOS */}
      <div className="grid grid-cols-3 gap-4 bg-[#14161B] border border-zinc-800 p-5 rounded-xl mb-8 text-center">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Base Points</span>
          <span className="text-2xl sm:text-3xl font-black text-white">{baseScore.toFixed(1)}</span>
        </div>
        <div className="border-x border-zinc-800">
          <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block">
            ⚡ Chemistry
          </span>
          <span className="text-2xl sm:text-3xl font-black text-orange-400">+{chemScore}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Total WIF</span>
          <span className="text-2xl sm:text-3xl font-black text-white">{totalScore}</span>
        </div>
      </div>

      {/* RESULTADO FINAL DETALHADO */}
      {gameFinished ? (
        <div className="bg-[#14161B] border-2 border-orange-500/50 p-8 rounded-2xl space-y-8 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-5xl block">🏆</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              {parseFloat(totalScore) >= 150 ? "17-0 UNDEFEATED ROSTER!" : "PLAYOFF CONTENDER"}
            </h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Status: {parseFloat(totalScore) >= 150 ? "CHAMPIONSHIP TIER (17-0)" : "STRONG REGULAR SEASON (13-4)"}
            </p>
          </div>

          {/* PAINEL ESTATÍSTICO COMPLETO */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-zinc-800 py-6 text-center font-mono">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase block">Total Output</span>
              <span className="text-2xl font-black text-orange-400">{totalScore} PTS</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase block">Roster MVP</span>
              <span className="text-base font-bold text-white block mt-1">
                {mvpPlayer?.name} ({mvpPlayer?.wif} pts)
              </span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase block">Chemistry Boost</span>
              <span className="text-sm font-bold text-zinc-300 block mt-1">
                {clubMatches} Club Links | {natMatches} Country Links
              </span>
            </div>
          </div>

          {/* TABELA DE ESCALAÇÃO FINAL */}
          <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950">
            {roster.map((slot, i) => (
              <div key={i} className="flex justify-between items-center p-3 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className={`w-12 text-center py-0.5 rounded text-[10px] font-bold border ${getBadgeColor(slot.slot.replace(/[0-9]/g, ''))}`}>
                    {slot.slot}
                  </span>
                  <span className="text-white font-bold">{slot.player.name}</span>
                  <span className="text-zinc-500 text-[10px]">({slot.player.club} • {slot.player.nat})</span>
                </div>
                <span className="text-orange-400 font-bold">{slot.player.wif} WIF</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button 
              onClick={resetGame}
              className="bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest px-8 py-3.5 rounded-lg text-xs transition-all shadow-lg active:scale-95"
            >
              Play Again 🎲
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* LISTA DE SLOTS */}
          <div className="bg-[#14161B] border border-zinc-800 rounded-xl overflow-hidden mb-8 shadow-xl divide-y divide-zinc-800/60">
            {roster.map((item, idx) => {
              const isFilled = item.player !== null;
              return (
                <div key={idx} className="flex items-center justify-between p-4 hover:bg-zinc-900/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className={`w-12 text-center py-1 rounded text-xs font-black font-mono border ${getBadgeColor(item.slot.replace(/[0-9]/g, ''))}`}>
                      {item.slot}
                    </span>
                    <div>
                      {isFilled ? (
                        <div>
                          <h4 className="font-black text-white text-base tracking-wide">{item.player.name}</h4>
                          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                            {item.player.club} • {item.player.nat}
                          </p>
                        </div>
                      ) : (
                        <span className="text-zinc-600 font-mono text-xs uppercase tracking-wider italic">
                          Empty Slot
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    {isFilled ? (
                      <span className="font-mono font-bold text-sm text-orange-400 bg-orange-500/10 px-3 py-1 rounded border border-orange-500/20">
                        {item.player.wif} PTS
                      </span>
                    ) : (
                      <span className="text-zinc-700 font-mono text-xs">--</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTÃO E LISTA DO ROLL */}
          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl text-center space-y-6">
            {!currentRoll ? (
              <div className="space-y-4">
                <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
                  Hit roll to draw a squad and select a player.
                </p>
                <button
                  onClick={handleRoll}
                  className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  🎲 Roll Squad & Era
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-b border-zinc-800 pb-4">
                  <span className="text-3xl">{currentRoll.flag}</span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1">
                    {currentRoll.team}
                  </h3>
                  <span className="text-xs font-mono text-orange-400 tracking-widest uppercase font-bold">
                    Season {currentRoll.season}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentRoll.players.map((p) => {
                    // VERIFICAÇÃO 1: JOGADOR JÁ ESCOLHIDO ANTERIORMENTE?
                    const isAlreadyDrafted = draftedPlayerIds.includes(p.id);

                    // VERIFICAÇÃO 2: SLOTS VAZIOS E COMPATÍVEIS
                    const availableSlots = roster.filter(s => {
                      if (s.player !== null) return false;
                      if (s.accepts && s.accepts.includes(p.pos)) return true;
                      return false;
                    });

                    const canDraft = !isAlreadyDrafted && availableSlots.length > 0;

                    return (
                      <div 
                        key={p.id} 
                        className={`p-4 rounded-lg border text-left flex flex-col justify-between transition-all ${
                          canDraft 
                            ? 'bg-zinc-900 border-zinc-700 hover:border-orange-500' 
                            : 'bg-zinc-950 border-zinc-900 opacity-40 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h5 className="font-bold text-white text-sm">{p.name}</h5>
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">{p.nat}</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${getBadgeColor(p.pos)}`}>
                            {p.pos} • {p.wif} WIF
                          </span>
                        </div>

                        {isAlreadyDrafted ? (
                          <span className="text-[10px] font-mono text-amber-500/90 pt-2 border-t border-zinc-900 font-bold">
                            ✕ Already on your roster
                          </span>
                        ) : canDraft ? (
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800">
                            <span className="text-[9px] font-mono text-zinc-500 block w-full">Select slot:</span>
                            {availableSlots.map((as, asIdx) => (
                              <button
                                key={asIdx}
                                onClick={() => draftPlayer(p, as.slot)}
                                className="bg-zinc-800 hover:bg-orange-500 hover:text-white text-zinc-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded transition-colors"
                              >
                                {as.slot}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[10px] font-mono text-red-500/80 pt-2 border-t border-zinc-900">
                            No open slot for this position
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <div className="text-center mt-12">
        <Link href="/" className="text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
          ← Back to War Room Home
        </Link>
      </div>

    </div>
  );
}
