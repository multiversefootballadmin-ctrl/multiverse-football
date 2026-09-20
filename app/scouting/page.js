'use client';

export default function ScoutingPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 space-y-20">
        
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Translations in Action
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            Scouting <span className="text-orange-500">Reports</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Still trying to wrap your head around the math? Let's strip away the formulas and look at legendary individual performances translated into the Multiverse.
          </p>
        </header>

        <section className="space-y-12">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">The Blueprints</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">Generic Game Situations Translated</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pitch to Pocket */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-white uppercase tracking-wider border-l-4 border-orange-500 pl-4">
                Pitch to Pocket <span className="text-zinc-500 font-light text-sm">(Soccer ➔ NFL)</span>
              </h3>
              
              <div className="bg-[#121316] border border-zinc-800 p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-1 bg-red-500"></div>
                <div className="mb-4">
                  <span className="bg-red-600 text-white font-mono text-[10px] font-black uppercase tracking-widest px-2 py-1">🎯 QB</span>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mt-3">The Midfield Masterclass</h4>
                </div>
                <p className="text-sm text-zinc-400 font-light mb-4 leading-relaxed">
                  <strong className="text-zinc-200">What you saw:</strong> A legendary midfielder delivering 2 Assists, 8 Key Passes, and shattering defensive lines with 90% pass accuracy in a knockout game.
                </p>
                <div className="bg-[#0E0F12] p-4 border border-zinc-800">
                  <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">WIF Translation:</span>
                  <p className="text-sm text-white font-medium">A Franchise Quarterback throwing for 350+ yards and 3 Touchdowns, surgically dissecting a Cover 2 shell on 3rd down.</p>
                </div>
              </div>
            </div>

            {/* Pocket to Pitch */}
            <div className="space-y-6">
              <h3 className="text-xl font-black text-white uppercase tracking-wider border-l-4 border-zinc-700 pl-4">
                Pocket to Pitch <span className="text-zinc-500 font-light text-sm">(NFL ➔ Soccer)</span>
              </h3>
              
              <div className="bg-[#121316] border border-zinc-800 p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-1 bg-blue-500"></div>
                <div className="mb-4">
                  <span className="bg-blue-600 text-white font-mono text-[10px] font-black uppercase tracking-widest px-2 py-1">⚡ WR</span>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mt-3">The Press Beater</h4>
                </div>
                <p className="text-sm text-zinc-400 font-light mb-4 leading-relaxed">
                  <strong className="text-zinc-200">NFL Reality:</strong> An elite receiver securing 150 Receiving Yards by consistently beating man-to-man press coverage off the line of scrimmage.
                </p>
                <div className="bg-[#0E0F12] p-4 border border-zinc-800">
                  <span className="text-blue-400 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">Soccer Equivalent:</span>
                  <p className="text-sm text-white font-medium">A quick-footed Winger isolating the fullback, completing multiple rapid 1v1 dribbles, and serving unguardable crosses into the box.</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        <section className="space-y-8 pt-10 border-t border-zinc-900">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">Legendary Profiles</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">Real-World Historical Performances</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            
            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center">
                <span className="text-emerald-500 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 w-fit">🏃‍♂️ RB / STRIKER</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">Lionel Messi vs. Bayer Leverkusen</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">UCL 2012 • 5 Goals</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-4">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Reality:</strong> Messi became the first player to score 5 goals in a single UEFA Champions League match, dismantling the German defense with a mix of solo runs and clinical box finishes.
                </p>
                <div className="bg-[#0E0F12] p-5 border border-zinc-800">
                  <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">The WIF Translation (Fantasy Impact):</span>
                  <p className="text-sm text-white font-medium">A historically dominant RB/WR hybrid performance. Translates to 4+ Rushing Touchdowns, 1 Receiving TD, and over 250 Total Yards From Scrimmage. A week-winning, 50+ Point Fantasy Output that breaks the slate.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center">
                <span className="text-red-500 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-red-500/30 bg-red-500/10 px-2 py-1 w-fit">🎯 QB / PLAYMAKER</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">Alexander-Arnold vs. Barcelona</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">UCL 2019 • The Quick Corner</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-4">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Reality:</strong> Down in the aggregate, TAA notices the defense sleeping and executes a rapid, no-look corner kick to Divock Origi, completing one of the greatest comebacks in Anfield history.
                </p>
                <div className="bg-[#0E0F12] p-5 border border-zinc-800">
                  <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">The WIF Translation (Fantasy Impact):</span>
                  <p className="text-sm text-white font-medium">A Quarterback recognizing a coverage mismatch at the line of scrimmage, calling a "No-Huddle Audible", and throwing a quick slant for a Game-Winning Touchdown on 4th and Goal.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center">
                <span className="text-zinc-400 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-zinc-500/30 bg-zinc-500/10 px-2 py-1 w-fit">🏈 NFL ORIGIN</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">Patrick Mahomes vs. 49ers</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">Super Bowl LVIII • Overtime Drive</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-4">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Reality:</strong> In Overtime, trailing by 3, Mahomes orchestrates a flawless 13-play, 75-yard drive, completing passes under heavy pressure and rushing for a critical 4th-down conversion before throwing the walk-off TD.
                </p>
                <div className="bg-[#0E0F12] p-5 border border-zinc-800">
                  <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">The Soccer Equivalent:</span>
                  <p className="text-sm text-white font-medium">A central midfielder in the 119th minute of a World Cup Final. He dictates the entire possession, completes 3 progressive passes breaking the defensive lines, wins a physical duel to maintain possession, and delivers the ultimate Expected Assist (xA) for the winning goal.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}