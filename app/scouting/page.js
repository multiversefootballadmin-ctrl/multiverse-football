import Link from 'next/link';

export const metadata = {
  title: 'Scouting Reports | Multiverse Football',
  description: 'In-depth cross-sport fantasy scouting reports using the xWIF engine.',
};

export default function ScoutingPage() {
  const reports = [
    {
      name: "Samuel Lino",
      club: "Flamengo",
      role: "RB2 / WR2 Hybrid",
      realWif: "13.3",
      xWif: "14.5",
      verdict: "BUY / HOLD",
      verdictColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      analysis: "Lino is producing elite PPR numbers with 2.46 Key Passes per 90. His 9.80 npxG perfectly aligns with his 9 actual goals. He commands a massive target share in the final third. Elite floor.",
    },
    {
      name: "Darwin Núñez",
      club: "Liverpool",
      role: "RB1 (High Variance)",
      realWif: "9.8",
      xWif: "16.2",
      verdict: "BUY LOW",
      verdictColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      analysis: "Massive positive regression incoming. Darwin has an elite xGOT and xT profile, but poor immediate execution has tanked his current WIF. The volume is there; the breakout is imminent.",
    },
    {
      name: "Bruno Fernandes",
      club: "Man United",
      role: "QB1",
      realWif: "11.2",
      xWif: "10.1",
      verdict: "SELL HIGH",
      verdictColor: "text-red-400 bg-red-500/10 border-red-500/30",
      analysis: "Overperforming his underlying metrics. His xAG (Expected Assisted Goals) does not support his current assist rate. Expect a drop in passing touchdown equivalents in the coming weeks.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-5xl mx-auto">
      
      <div className="space-y-4 mb-12 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border-l-2 border-blue-500 text-blue-400 font-mono text-xs font-bold tracking-widest uppercase">
          Projections • Market Value
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          SCOUTING REPORTS
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          We compare actual fantasy output (WIF) against predictive underlying metrics (xWIF) to find market inefficiencies. Identify breakouts before they happen.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-16">
        {reports.map((report, idx) => (
          <div key={idx} className="bg-[#14161B] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{report.name}</h3>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mt-1">
                  {report.club} • <span className="text-orange-400 font-bold">{report.role}</span>
                </span>
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded border ${report.verdictColor}`}>
                Market Action: {report.verdict}
              </span>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Advanced Analysis</h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {report.analysis}
                </p>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">Real WIF</span>
                  <span className="text-white font-bold text-base">{report.realWif}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 uppercase">Projected xWIF</span>
                  <span className="text-purple-400 font-bold text-base">{report.xWif}</span>
                </div>
                <div className="pt-2 border-t border-zinc-800/60 flex justify-between items-center">
                  <span className="text-zinc-600 uppercase text-[10px]">Delta</span>
                  <span className={`font-bold text-[10px] ${parseFloat(report.xWif) > parseFloat(report.realWif) ? 'text-emerald-400' : 'text-red-400'}`}>
                    {(parseFloat(report.xWif) - parseFloat(report.realWif)).toFixed(1)} PTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
