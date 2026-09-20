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
            Theoretical formulas are fine, but legendary performances validate the engine. Below are five historic global soccer performances mapped directly into NFL output and calculated into official WIF Fantasy Points.
          </p>
        </header>

        <section className="space-y-12">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">The Blueprints</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">Generic Game Situations Translated</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
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
            
            {/* Case 1: QB - De Bruyne */}
            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                <span className="text-red-500 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-red-500/30 bg-red-500/10 px-2 py-1 w-fit flex items-center gap-2">🎯 QB / PLAYMAKER</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mt-3">Kevin De Bruyne vs. Arsenal</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">Premier League 2023 • The Title Decider</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-5">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Pitch Reality:</strong> In a must-win match for the league title, De Bruyne dictated the entire tempo. He delivered 2 massive Assists and completed 6 Key Passes that broke the defensive lines completely.
                </p>
                <div className="bg-[#0E0F12] border border-zinc-800 p-5 space-y-4">
                  <div>
                    <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">NFL Translation:</span>
                    <p className="text-sm text-white font-medium">A Franchise Quarterback throwing for 240 Passing Yards and 2 Passing Touchdowns against a stacked box.</p>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest block mb-1">WIF Score Calculation:</span>
                    <p className="font-mono text-sm text-red-400 font-black tracking-wider">(240 Pass Yds = 9.6 pts) + (2 Pass TDs = 8.0 pts) = 17.60 WIF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: RB - Lewandowski */}
            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                <span className="text-emerald-500 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 w-fit flex items-center gap-2">🏃‍♂️ RB / STRIKER</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mt-3">Robert Lewandowski vs. Wolfsburg</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">Bundesliga 2015 • 5 Goals in 9 Mins</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-5">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Pitch Reality:</strong> The most absurd scoring barrage in modern history. Coming off the bench, he registered 5 Goals and 9 high-danger shots inside the box in under ten minutes, bullying the entire backline.
                </p>
                <div className="bg-[#0E0F12] border border-zinc-800 p-5 space-y-4">
                  <div>
                    <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">NFL Translation:</span>
                    <p className="text-sm text-white font-medium">A Power Running Back dominating the red zone, rushing for 5 Goal-Line Touchdowns and 90 Rushing Yards on direct interior carries.</p>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest block mb-1">WIF Score Calculation:</span>
                    <p className="font-mono text-sm text-emerald-400 font-black tracking-wider">(90 Rush Yds = 9.0 pts) + (5 Rush TDs = 30.0 pts) = 39.00 WIF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3: WR - Bale */}
            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <span className="text-blue-500 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-blue-500/30 bg-blue-500/10 px-2 py-1 w-fit flex items-center gap-2">⚡ WR / WINGER</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mt-3">Gareth Bale vs. Inter Milan</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">UCL 2010 • The San Siro Hat-Trick</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-5">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Pitch Reality:</strong> Bale single-handedly destroyed Maicon on the boundary. He recorded 11 successful take-ons (dribbles) bypassing the defense at sprint speed and scored 3 spectacular solo goals.
                </p>
                <div className="bg-[#0E0F12] border border-zinc-800 p-5 space-y-4">
                  <div>
                    <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">NFL Translation:</span>
                    <p className="text-sm text-white font-medium">A Deep Threat Wide Receiver blowing past press coverage for 110 Yards After Catch (YAC) and securing 3 long-distance Receiving Touchdowns.</p>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest block mb-1">WIF Score Calculation:</span>
                    <p className="font-mono text-sm text-blue-400 font-black tracking-wider">(110 YAC = 11.0 pts) + (3 Rec = 3.0 pts) + (3 Rec TDs = 18.0 pts) = 32.00 WIF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 4: TE - Drogba */}
            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
                <span className="text-amber-500 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-amber-500/30 bg-amber-500/10 px-2 py-1 w-fit flex items-center gap-2">🛡️ TE / TARGET MAN</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mt-3">Didier Drogba vs. Bayern Munich</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">UCL Final 2012 • The Miracle Anchor</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-5">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Pitch Reality:</strong> The ultimate physical display. He won 8 massive contested aerial duels, held up the ball 5 times under heavy pressure to relieve his defense, and scored the clutch equalizer via a bullet header.
                </p>
                <div className="bg-[#0E0F12] border border-zinc-800 p-5 space-y-4">
                  <div>
                    <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">NFL Translation:</span>
                    <p className="text-sm text-white font-medium">A Hybrid Tight End dominating the middle of the field with 80 Receiving Yards on 5 Contested Receptions, capping it off with a clutch Red Zone Touchdown.</p>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest block mb-1">WIF Score Calculation:</span>
                    <p className="font-mono text-sm text-amber-500 font-black tracking-wider">(80 Rec Yds = 8.0 pts) + (5 Rec = 5.0 pts) + (1 Rec TD = 6.0 pts) = 19.00 WIF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 5: DEF - Chelsea D/ST */}
            <div className="bg-[#121316] border border-zinc-800 flex flex-col md:flex-row overflow-hidden shadow-2xl">
              <div className="md:w-1/3 bg-zinc-900 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                <span className="text-purple-400 font-mono text-[10px] font-black uppercase tracking-widest mb-2 border border-purple-500/30 bg-purple-500/10 px-2 py-1 w-fit flex items-center gap-2">🧱 DEF / D-ST UNIT</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight mt-3">Chelsea Defense vs. Man City</h3>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">UCL Final 2021 • The Blue Wall</span>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-5">
                <p className="text-zinc-300 font-light leading-relaxed">
                  <strong className="text-white">The Pitch Reality:</strong> The ultimate collective defensive masterclass. The entire Chelsea backline and midfield pivot suffocated a historic attack, registering a flawless Clean Sheet, blocking 5 high-danger shots in the box, and forcing multiple turnovers in the middle third.
                </p>
                <div className="bg-[#0E0F12] border border-zinc-800 p-5 space-y-4">
                  <div>
                    <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest block mb-1">NFL Translation:</span>
                    <p className="text-sm text-white font-medium">A dominant D/ST (Defense/Special Teams) unit pitching a 0-Point Shutout in the Super Bowl, forcing 3 Takeaways (Interceptions/Fumbles), and recording 3 Quarterback Sacks.</p>
                  </div>
                  <div className="border-t border-zinc-800/60 pt-3">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest block mb-1">WIF Score Calculation:</span>
                    <p className="font-mono text-sm text-purple-400 font-black tracking-wider">(Shutout = 10.0 pts) + (3 Turnovers = 6.0 pts) + (3 Sacks = 3.0 pts) = 19.00 WIF</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}