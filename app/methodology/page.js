import Link from 'next/link';

export const metadata = {
  title: 'Methodology | WIF Matrix v1.0',
  description: 'The official standard scoring system connecting soccer and NFL fantasy.',
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
          Elite athletic dominance is a universal language. The WIF Engine translates global soccer telemetry into the exact scoring format of traditional NFL Fantasy Football.
        </p>
      </div>

      {/* SECÇÃO 1: AS ANALOGIAS (MASTIGADO) */}
      <section className="space-y-8 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
          <span className="text-orange-500 font-mono text-lg">01.</span> Cross-Sport Translations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* O MOTOR DO PPR */}
          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl space-y-3">
            <span className="text-2xl block mb-2">🏈</span>
            <h3 className="font-black text-white text-lg uppercase tracking-wide">The PPR Engine (Key Passes)</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              In the NFL, a reception moves the chains and scores 1.0 PPR point, even if it doesn't end in the endzone. In soccer, a <strong className="text-orange-400 font-medium">Key Pass</strong> does exactly the same. It breaks defensive lines and drives the offense forward. We reward this creative volume the exact same way.
            </p>
          </div>

          {/* O MONSTRO DO YAC */}
          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl space-y-3">
            <span className="text-2xl block mb-2">⚡</span>
            <h3 className="font-black text-white text-lg uppercase tracking-wide">The YAC Monster (Take-ons)</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              A Wide Receiver catching a screen pass and breaking two tackles for extra yards is peak athletic dominance. We translate this through <strong className="text-blue-400 font-medium">Successful Take-ons (Dribbles)</strong> and <strong className="text-blue-400 font-medium">Progressive Carries</strong>, rewarding players who conquer territory with the ball at their feet.
            </p>
          </div>

          {/* O VERDADEIRO TURNOVER */}
          <div className="bg-[#14161B] border border-zinc-800 p-6 rounded-xl space-y-3 md:col-span-2">
            <span className="text-2xl block mb-2">🛑</span>
            <h3 className="font-black text-white text-lg uppercase tracking-wide">The True Turnover Penalty</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Losing possession in the midfield is common attrition—like an incomplete pass. But an NFL interception or a lost fumble is a catastrophic event that flips the field. Therefore, the WIF Engine only applies severe negative points (-2.0) to <strong className="text-red-400 font-medium">Critical Errors leading to opponent shots</strong> or <strong className="text-red-400 font-medium">Red Cards</strong>, protecting aggressive playmakers from unfair punishment.
            </p>
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
          <div className="bg-zinc-950 p-4 border-t border-zinc-800 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">
            Sys Note: V1.0 is locked for historical consistency. Predictive metrics (xG, xA) are isolated in the xWIF Engine.
          </div>
        </div>
      </section>

      <div className="text-center pt-8 border-t border-zinc-800">
        <Link href="/xwif" className="bg-zinc-800 hover:bg-orange-500 text-white font-black uppercase tracking-widest px-8 py-4 rounded-lg text-xs transition-all shadow-lg">
          Explore the xWIF Predictive Engine 🔮
        </Link>
      </div>
    </div>
  );
}
