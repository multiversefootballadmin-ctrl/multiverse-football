'use client';
import { useState, useEffect } from 'react';

export default function GamesPage() {
  const [players, setPlayers] = useState([]);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch('/data/players.json')
      .then(res => res.json())
      .then(data => {
        // Filtrar apenas jogadores do Top 500 para garantir que o jogo não traga anônimos o tempo todo
        const topPlayers = data.slice(0, 500);
        setPlayers(topPlayers);
        pickPair(topPlayers);
      });
  }, []);

  const pickPair = (dataList) => {
    const list = dataList || players;
    const a = list[Math.floor(Math.random() * list.length)];
    let b = list[Math.floor(Math.random() * list.length)];
    while(a.name === b.name || a.wif === b.wif) {
      b = list[Math.floor(Math.random() * list.length)];
    }
    setPlayerA(a);
    setPlayerB(b);
  };

  const handleGuess = (chosen, other) => {
    if (parseFloat(chosen.wif) > parseFloat(other.wif)) {
      setScore(score + 1);
      if (score + 1 === 17) {
        setGameOver(true);
      } else {
        pickPair();
      }
    } else {
      setGameOver(true);
    }
  };

  if (!playerA || !playerB) return <div className="min-h-screen bg-[#0E0F12] flex items-center justify-center font-mono text-orange-500 animate-pulse">Loading Live Data...</div>;

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-2">17-0 Crossover</h1>
        <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">Who has the higher WIF / 90?</p>
        <div className="mt-6 text-2xl font-black text-orange-500 bg-orange-500/10 inline-block px-6 py-2 rounded-full border border-orange-500/30">
          STREAK: {score}
        </div>
      </div>

      {!gameOver ? (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button onClick={() => handleGuess(playerA, playerB)} className="bg-[#14161B] hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500 p-10 rounded-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">{playerA.name}</h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">{playerA.club} • {playerA.pos}</p>
          </button>
          
          <button onClick={() => handleGuess(playerB, playerA)} className="bg-[#14161B] hover:bg-zinc-800 border border-zinc-800 hover:border-purple-500 p-10 rounded-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">{playerB.name}</h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">{playerB.club} • {playerB.pos}</p>
          </button>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-zinc-900 border border-zinc-800 p-10 rounded-2xl text-center">
          <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">{score === 17 ? 'UNDEFEATED!' : 'GAME OVER'}</h2>
          <p className="text-zinc-400 font-mono text-sm mb-8">You reached a streak of {score}.</p>
          <div className="space-y-2 mb-8 font-mono text-xs text-left bg-[#0E0F12] p-4 rounded-lg">
            <div className="text-emerald-400">{playerA.name}: {playerA.wif} WIF</div>
            <div className="text-red-400">{playerB.name}: {playerB.wif} WIF</div>
          </div>
          <button onClick={() => { setScore(0); setGameOver(false); pickPair(); }} className="bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-lg text-xs w-full transition-all">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
