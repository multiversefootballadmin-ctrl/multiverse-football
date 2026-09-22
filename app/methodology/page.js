import Link from 'next/link';

export const metadata = {
  title: 'Methodology | The WIF Engine & The PPR Standard',
  description: 'Audited cross-sport telemetry. Understanding how European soccer metrics convert into NFL fantasy points.',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans py-16 px-6 max-w-5xl mx-auto">
      
      {/* HEADER DA PÁGINA */}
      <div className="space-y-4 mb-16 border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
          Open Architecture • Audited Math
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          THE WIF SCORE METHODOLOGY
        </h1>
        <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-3xl">
          No black boxes. No subjective pundit votes. Discover how the WIF Engine translates global pitch telemetry into NFL fantasy currency.
        </p>
      </div>

      {/* SECÇÃO 1: A REVOLUÇÃO DO PPR */}
      <section className="space-y-6 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
          <span className="text-orange-500 font-mono text-lg">01.</span> The PPR Revolution: Why Soccer Needs Its Own Anchor
        </h2>
        
        <div className="bg-[#14161B] border border-zinc-800 p-6 sm:p-8 rounded-xl space-y-4 text-zinc-300 font-light leading-relaxed">
          <p>
            In the early days of NFL Fantasy Football, standard leagues only rewarded raw touchdowns and rushing/receiving yardage. If a slot wide receiver caught 9 short passes, fought through physical contact, and moved the chains on three consecutive third downs without scoring a touchdown, the box score treated him as an afterthought.
          </p>
          <p>
            The invention of <strong className="text-white font-semibold">PPR (Points Per Reception)</strong> changed American sports forever. It acknowledged that <em className="text-orange-400 not-italic font-medium">consistency, volume, and tactical chain-moving</em> are just as vital to winning games as the final touchdown punch.
          </p>
          <div className="border-l-2 border-orange-500 pl-4 py-1 text-white font-medium italic">
            "Traditional soccer analytics currently suffers from the exact same flaw as 1990s fantasy football: an obsession with only goals and direct assists."
          </div>
          <p>
            If a world-class midfielder executes six line-breaking progressive passes, creates three clear opportunities, and controls the tempo, but his forward hits the post, standard analytics awards him zero. 
          </p>
          <p>
            The <strong className="text-white font-semibold">WIF Score is soccer's PPR moment</strong>. We quantify every progressive meter, every line-breaking pass, and every high-pressure takeaway, converting them directly into NFL yardage and fantasy value.
          </p>
        </div>
      </section>

      {/* SECÇÃO 2: A FÓRMULA MATEMÁTICA */}
      <section className="space-y-6 mb-20">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
          <span className="text-orange-500 font-mono text-lg">02.</span> The Open Equation
        </h2>

        <div className="bg-[#14161B] border border-zinc-800 p-6 sm:p-8 rounded-xl space-y-6">
          <div className="p-4 bg-zinc-950 border border-zinc-800 text-center font-mono text-sm sm:text-base text-orange-400 font-bold rounded-lg overflow-x-auto">
            WIF_SCORE = (Base Kinematic Volume) × (Territorial Leverage) − (Critical Turnovers)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs font-mono">
            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg space-y-2">
              <span className="text-orange-400 font-bold uppercase block">1. Volume Base</span>
              <p className="text-zinc-400 font-sans font-light">
                Progressive passes translate to passing yards; successful dribbles and progressive carries translate to rushing yards and YAC.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg space-y-2">
              <span className="text-orange-400 font-bold uppercase block">2. Territorial Leverage</span>
              <p className="text-zinc-400 font-sans font-light">
                Actions inside the opponent’s penalty box receive a 1.5× multiplier, mirroring Red Zone touches inside the 20-yard line in the NFL.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg space-y-2">
              <span className="text-orange-400 font-bold uppercase block">3. Turnover Penalty</span>
              <p className="text-zinc-400 font-sans font-light">
                Dispossessions in the defensive third are penalized with direct point deductions (−2.0 pts), mirroring a critical interception or fumble lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO 3: TABELA DE CONVERSÃO EXATA */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
          <span className="text-orange-500 font-mono text-lg">03.</span> Telemetry Conversion Matrix
        </h2>

        <div className="bg-[#14161B] border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-zinc-900 text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
                <tr>
                  <th className="p-4">Soccer Event</th>
                  <th className="p-4">NFL Equivalent</th>
                  <th className="p-4 text-right">WIF Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="p-4 font-bold text-white">Goal Scored</td>
                  <td className="p-4">Touchdown (Rush / Rec)</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+6.0 pts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Key Pass / Direct Assist</td>
                  <td className="p-4">Passing TD / Chunk Passing Gain</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+4.0 pts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Progressive Carry (10m+)</td>
                  <td className="p-4">Rushing First Down</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+1.0 pt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Successful Take-on</td>
                  <td className="p-4">YAC (Yards After Catch Broken Tackle)</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+1.0 pt</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Aerial Duel Won in Box</td>
                  <td className="p-4">High-Point Red Zone Catch</td>
                  <td className="p-4 text-right text-orange-400 font-bold">+1.5 pts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Loss of Possession in Def. 3rd</td>
                  <td className="p-4">Turnover (Interception / Fumble)</td>
                  <td className="p-4 text-right text-red-400 font-bold">−2.0 pts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA DE RETORNO */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-zinc-800 pt-8">
        <Link href="/rankings" className="text-xs font-mono uppercase tracking-widest text-orange-400 hover:text-white transition-colors">
          View Live Ranks in the War Room →
        </Link>
        <Link href="/games" className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
          Test in 17-0 Crossover Game →
        </Link>
      </div>

    </div>
  );
}
