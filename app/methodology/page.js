import Link from 'next/link';

export const metadata = {
  title: 'Methodology | WIF Matrix v1.0',
  description: 'The official standard scoring system and position classifier.',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-5xl mx-auto">
      
      {/* HEADER */}
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
          Standard Scoring • Locked Algorithm
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE WIF MATRIX v1.0
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          Elite athletic dominance is a universal language. The WHAT IF Engine translates global soccer telemetry into the exact scoring format of traditional NFL Fantasy Football.
        </p>
      </div>

      {/* SECÇÃO 1: O CLASSIFICADOR DE POSIÇÕES (O CHAPÉU SELETOR) */}
      <section className="space-y-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
          <span className="text-orange-500 font-mono text-lg">01.</span> Position Classifier
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-6">
          A player’s traditional lineup spot is irrelevant. Our algorithm parses the telemetry to assign an NFL archetype based purely on statistical volume. If a player fights through the trenches for gritty yards like Isiah Pacheco, they are categorized as a Running Back, regardless of the jersey number they wear on the soccer pitch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* QB */}
          <div className="bg-[#14161B] border border-red-500/30 p-6 rounded-xl relative overflow-hidden group hover:border-red-500/60 transition-colors">
            <div className="absolute top-0 right-0 p-16 bg-red-500/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <span className="bg-red-500/20 text-red-400 border border-red-500/40 text-[10px] font-black font-mono px-3 py-1 rounded mb-4 inline-block">QB (QUARTERBACK)</span>
              <h3 className="font-black text-white text-lg uppercase tracking-wide mb-2">The Field General</h3>
              <p className="text-sm text-zinc-400 font-light mb-4">
                The heartbeat of the drive. They read defenses, move the chains, and dictate the tempo.
              </p>
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Trigger Metrics</span>
                <ul className="text-xs font-mono text-zinc-300 space-y-1">
                  <li>• High xAG (Expected Assisted Goals)</li>
                  <li>• Elite Final Third Passing Volume</li>
                  <li>• Progressive Passing Dominance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RB */}
          <div className="bg-[#14161B] border border-emerald-500/30 p-6 rounded-xl relative overflow-hidden group hover:border-emerald-500/60 transition-colors">
            <div className="absolute top-0 right-0 p-16 bg-emerald-500/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black font-mono px-3 py-1 rounded mb-4 inline-block">RB (RUNNING BACK)</span>
              <h3 className="font-black text-white text-lg uppercase tracking-wide mb-2">The Power & PPR Engine</h3>
              <p className="text-sm text-zinc-400 font-light mb-4">
                Physical forces demanding red-zone touches and establishing the floor through reliable pass-catching.
              </p>
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Trigger Metrics</span>
                <ul className="text-xs font-mono text-zinc-300 space-y-1">
                  <li>• Penalty Box Touch Dominance</li>
                  <li>• High xGOT (Finishing execution)</li>
                  <li>• Short-range Key Passes (PPR)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WR */}
          <div className="bg-[#14161B] border border-blue-500/30 p-6 rounded-xl relative overflow-hidden group hover:border-blue-500/60 transition-colors">
            <div className="absolute top-0 right-0 p-16 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <span className="bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[10px] font-black font-mono px-3 py-1 rounded mb-4 inline-block">WR (WIDE RECEIVER)</span>
              <h3 className="font-black text-white text-lg uppercase tracking-wide mb-2">The YAC Monster</h3>
              <p className="text-sm text-zinc-400 font-light mb-4">
                Electric in open space. They catch the ball and immediately break tackles to conquer massive yardage.
              </p>
              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Trigger Metrics</span>
                <ul className="text-xs font-mono text-zinc-300 space-y-1">
                  <li>• High Take-on Success (Broken Tackles)</li>
                  <li>• Massive Progressive Carry Volume</li>
                  <li>• Elite Wing/Flank Penetration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO 2: A TABELA V1.0 OFICIAL */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
          <span className="text-orange-500 font-mono text-lg">02.</span> Official Scoring Matrix
        </h2>

        <div className="bg-[#14161B] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-zinc-900 text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
                <tr>
                  <th className="p-4">Action</th>
                  <th className="p-4">NFL Equivalent</th>
                  <th className="p-4 text-right">WIF Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr className="bg-orange-500/5">
                  <td className="p-4 font-bold text-white">Goal Scored</td>
                  <td className="p-4">Rushing / Receiving Touchdown</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+6.0 pts</td>
                </tr>
                <tr className="bg-orange-500/5">
                  <td className="p-4 font-bold text-white">Direct Assist</td>
                  <td className="p-4">Passing Touchdown</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+4.0 pts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Key Pass</td>
                  <td className="p-4">Reception (PPR)</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">+1.0 pt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Successful Take-on</td>
                  <td className="p-4">Broken Tackle / YAC</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">+1.0 pt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Through Ball / Box Pass</td>
                  <td className="p-4">3rd Down Conversion / Red Zone Target</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">+1.0 pt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Shot on Target</td>
                  <td className="p-4">High-Impact Rush / Goal Line Carry</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">+1.0 pt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Foul Drawn</td>
                  <td className="p-4">Defensive Pass Interference Drawn</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">+0.5 pts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Successful Pass (Base Volume)</td>
                  <td className="p-4">Passing / Rushing Yards Accumulation</td>
                  <td className="p-4 text-right text-emerald-400 font-bold">+0.1 pts</td>
                </tr>
                <tr className="bg-red-500/5">
                  <td className="p-4 font-bold text-white">Critical Error (Leads to Shot)</td>
                  <td className="p-4">Interception / Fumble Lost</td>
                  <td className="p-4 text-right text-red-400 font-bold">−2.0 pts</td>
                </tr>
                <tr className="bg-red-500/5">
                  <td className="p-4 font-bold text-white">Red Card</td>
                  <td className="p-4">Ejection / Unsportsmanlike Conduct</td>
                  <td className="p-4 text-right text-red-400 font-bold">−3.0 pts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
