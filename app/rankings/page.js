export const metadata = {
  title: 'War Room Rankings | Multiverse Football',
  description: 'Live cross-sport fantasy rankings powered by the WIF Engine.',
};

export default function RankingsPage() {
  // DADOS REAIS FOOTYSTATS - TOP 10 OVERALL (MIN 500 MINUTES)
  const players = [
    { rank: "01", name: "Michael Olise", pos: "QB", club: "Bayern München", wif: "19.6", xWif: "19.8", trend: "up", stats: "15 G | 19 Ast | 0.67 npxG/90 | 0.65 xA/90" },
    { rank: "02", name: "Lamine Yamal", pos: "WR", club: "FC Barcelona", wif: "19.5", xWif: "19.3", trend: "flat", stats: "16 G | 11 Ast | 0.59 npxG/90 | 0.45 xA/90" },
    { rank: "03", name: "Harry Kane", pos: "RB", club: "Bayern München", wif: "16.3", xWif: "13.7", trend: "down", stats: "36 G | 5 Ast | 0.90 npxG/90 | 0.21 xA/90" },
    { rank: "04", name: "Kylian Mbappé", pos: "RB", club: "Real Madrid CF", wif: "15.7", xWif: "15.1", trend: "down", stats: "25 G | 5 Ast | 0.71 npxG/90 | 0.24 xA/90" },
    { rank: "05", name: "Luis Díaz", pos: "QB", club: "Liverpool FC", wif: "15.0", xWif: "15.2", trend: "up", stats: "15 G | 14 Ast | 0.61 npxG/90 | 0.46 xA/90" },
    { rank: "06", name: "Mason Greenwood", pos: "RB", club: "Olympique Marseille", wif: "14.2", xWif: "13.8", trend: "down", stats: "16 G | 7 Ast | 0.48 npxG/90 | 0.31 xA/90" },
    { rank: "07", name: "Bruno Fernandes", pos: "QB", club: "Man United", wif: "14.1", xWif: "13.7", trend: "down", stats: "9 G | 21 Ast | 0.20 npxG/90 | 0.60 xA/90" },
    { rank: "08", name: "Yan Diomande", pos: "WR", club: "RB Leipzig", wif: "13.7", xWif: "13.6", trend: "flat", stats: "12 G | 9 Ast | 0.42 npxG/90 | 0.31 xA/90" },
    { rank: "09", name: "Vinicius Junior", pos: "WR", club: "Real Madrid CF", wif: "13.7", xWif: "13.7", trend: "flat", stats: "16 G | 5 Ast | 0.46 npxG/90 | 0.23 xA/90" },
    { rank: "10", name: "Aleix García", pos: "QB", club: "Leverkusen", wif: "13.3", xWif: "14.1", trend: "up", stats: "3 G | 8 Ast | 0.11 npxG/90 | 0.43 xA/90" },
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

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <span className="text-emerald-400">▲</span>;
    if (trend === 'down') return <span className="text-red-400">▼</span>;
    return <span className="text-zinc-500">▬</span>;
  };

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-6xl mx-auto">
      
      <div className="space-y-4 mb-12 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
          Live Data • Top 10 Overall
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE WAR ROOM
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          The official Multiverse Football leaderboard. Players are assigned positions dynamically based on their telemetry volume. Compare their real output (WIF) with their predictive ceiling (xWIF).
        </p>
      </div>

      <div className="bg-[#14161B] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs whitespace-nowrap">
            <thead className="bg-zinc-900 text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
              <tr>
                <th className="p-5 font-bold w-16">Rank</th>
                <th className="p-5 font-bold">Player</th>
                <th className="p-5 font-bold">Archetype</th>
                <th className="p-5 font-bold hidden md:table-cell">Key Telemetry</th>
                <th className="p-5 font-bold text-right text-purple-400">xWIF / 90</th>
                <th className="p-5 font-bold text-right text-orange-400">WIF / 90</th>
                <th className="p-5 font-bold text-center w-16">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              {players.map((p, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-5 font-black text-zinc-500">{p.rank}</td>
                  <td className="p-5">
                    <div className="font-bold text-white text-sm">{p.name}</div>
                    <div className="text-[10px] text-zinc-500 mt-1">{p.club}</div>
                  </td>
                  <td className="p-5">
                    <span className={`inline-block w-10 text-center py-1 rounded text-[10px] font-black border ${getPosBadge(p.pos)}`}>
                      {p.pos}
                    </span>
                  </td>
                  <td className="p-5 hidden md:table-cell text-[10px] text-zinc-400">
                    {p.stats}
                  </td>
                  <td className="p-5 text-right font-bold text-purple-400">{p.xWif}</td>
                  <td className="p-5 text-right font-black text-orange-400 text-base">{p.wif}</td>
                  <td className="p-5 text-center text-sm">{getTrendIcon(p.trend)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
