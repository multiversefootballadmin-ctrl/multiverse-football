'use client';

import { useState, useMemo } from 'react';

// Você pode adicionar os +300 termos aqui depois
const masterGlossary = [
  { term: "xG (Expected Goals)", sport: "Soccer", desc: "Calculates the probability of a shot resulting in a goal based on location, angle, and assist type." },
  { term: "xA (Expected Assists)", sport: "Soccer", desc: "Measures the likelihood that a pass will become an assist. Rewards passing vision regardless of the finish." },
  { term: "Progressive Carry", sport: "Soccer", desc: "Moving the ball 10+ yards closer to the opponent's goal while maintaining possession." },
  { term: "Take-on", sport: "Soccer", desc: "Attempting to beat a defender 1v1 while maintaining possession. Elite wingers have high success rates." },
  { term: "Clean Sheet", sport: "Soccer", desc: "When a team prevents the opponent from scoring any goals for the entire match." },
  { term: "High Press", sport: "Soccer", desc: "A defensive tactic where a team pressures the opponent high up the pitch to force a turnover near their goal." },
  { term: "The Pocket", sport: "NFL", desc: "The protected area formed by the offensive line where the Quarterback stands to pass." },
  { term: "YAC (Yards After Catch)", sport: "NFL", desc: "The distance a receiver runs with the ball after catching a pass." },
  { term: "3rd Down Conversion", sport: "NFL", desc: "Succeeding in gaining a first down on the 3rd attempt, sustaining the offensive drive." },
  { term: "D/ST Unit", sport: "NFL", desc: "Defense & Special Teams. In fantasy, you draft the collective defensive unit, not individual players." },
  { term: "Sack", sport: "NFL", desc: "Tackling the Quarterback behind the line of scrimmage before he can throw the ball." },
  { term: "Red Zone", sport: "NFL", desc: "The area between the 20-yard line and the goal line. High-danger scoring territory." },
  { term: "WIF Score", sport: "Multiverse", desc: "The proprietary 'What If Football' Score. Translates soccer data into official Fantasy NFL Points." },
  { term: "Archetype Bridge", sport: "Multiverse", desc: "The designated mapping for a player (e.g., Target Striker = Power Running Back)." },
  { term: "Dimensional Boxscore", sport: "Multiverse", desc: "The stat sheet comparing Native Soccer Production side-by-side with Translated NFL Output." },
  { term: "Pocket Translation", sport: "Multiverse", desc: "The process of converting soccer spatial awareness and passing into NFL pocket presence metrics." },
  { term: "Half-Space", sport: "Soccer", desc: "The vertical zones between the center and the wing. Crucial for playmakers to exploit." },
  { term: "Cover 2", sport: "NFL", desc: "A defensive scheme with two deep safeties protecting the deep halves of the field." },
  { term: "Target Share", sport: "NFL", desc: "The percentage of a team's total pass attempts directed at a specific receiver." },
  { term: "Through Ball", sport: "Soccer", desc: "A forward pass into open space for a teammate to run onto, usually breaking defensive lines." }
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filteredGlossary = useMemo(() => {
    return masterGlossary.filter(item => {
      const matchSearch = item.term.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "ALL" || item.sport === filter;
      return matchSearch && matchFilter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 space-y-16">
        
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Multiverse 101
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            The <span className="text-orange-500">Dictionary</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            New to advanced analytics? Don't watch the NFL? We've got you covered. Here is the survival guide to the terminology used across the Multiverse.
          </p>
        </header>

        {/* TOP HIGHLIGHTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 border-b border-zinc-900">
          <div className="bg-[#121316] p-6 border-l-4 border-zinc-500 shadow-lg">
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-2">
              <span className="text-2xl">⚽</span>
              <h2 className="text-lg font-black text-white uppercase tracking-wider">Pitch Metrics</h2>
            </div>
            <div className="space-y-3">
              <div><strong className="text-white text-sm">xG (Expected Goals):</strong> <span className="text-xs text-zinc-400">Probability of a shot converting. Measures true finishing quality.</span></div>
              <div><strong className="text-white text-sm">xA (Expected Assists):</strong> <span className="text-xs text-zinc-400">Likelihood of a pass becoming an assist.</span></div>
            </div>
          </div>
          
          <div className="bg-[#121316] p-6 border-l-4 border-blue-500 shadow-lg">
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-2">
              <span className="text-2xl">🏈</span>
              <h2 className="text-lg font-black text-white uppercase tracking-wider">Pocket Output</h2>
            </div>
            <div className="space-y-3">
              <div><strong className="text-white text-sm">The Pocket:</strong> <span className="text-xs text-zinc-400">Protected area where the QB stands to pass.</span></div>
              <div><strong className="text-white text-sm">YAC (Yards After Catch):</strong> <span className="text-xs text-zinc-400">Distance run with ball after catching.</span></div>
            </div>
          </div>

          <div className="bg-[#121316] p-6 border-l-4 border-orange-500 shadow-lg">
            <div className="flex items-center gap-3 mb-4 border-b border-orange-500/30 pb-2">
              <span className="text-2xl">🌌</span>
              <h2 className="text-lg font-black text-orange-500 uppercase tracking-wider">The Multiverse</h2>
            </div>
            <div className="space-y-3">
              <div><strong className="text-white text-sm">WIF Score:</strong> <span className="text-xs text-zinc-400">Translates soccer data into official Fantasy NFL Points.</span></div>
              <div><strong className="text-white text-sm">Dimensional Boxscore:</strong> <span className="text-xs text-zinc-400">Compares Native Soccer Production side-by-side with Translated Output.</span></div>
            </div>
          </div>
        </div>

        {/* FULL DICTIONARY DATABASE */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">Complete Database</h2>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-1">Search over 300+ advanced metrics and concepts.</p>
            </div>
            
            <div className="w-full md:w-[400px]">
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-zinc-500 font-mono text-lg">🔍</span>
                <input
                  type="text"
                  placeholder="SEARCH TERM..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#121316] border border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 pl-12 pr-6 py-3 text-sm font-black text-white placeholder-zinc-600 focus:outline-none uppercase tracking-widest transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-4">
            <span className="text-[10px] font-mono text-zinc-500 mr-2 uppercase tracking-widest">CATEGORY:</span>
            {["ALL", "SOCCER", "NFL", "MULTIVERSE"].map(f => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-xs font-mono font-bold tracking-widest transition-all border ${filter === f ? 'bg-orange-600 border-orange-500 text-white shadow-md' : 'bg-[#121316] border-zinc-800 text-zinc-500 hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto border border-zinc-800 bg-[#121316] shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0E0F12] font-mono text-zinc-500 uppercase tracking-widest text-[10px] border-b border-zinc-800">
                  <th className="p-4 w-[200px]">Term</th>
                  <th className="p-4 w-[120px]">Dimension</th>
                  <th className="p-4">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-sm">
                {filteredGlossary.length > 0 ? (
                  filteredGlossary.map((item, idx) => (
                    <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 font-black text-white uppercase tracking-wider">{item.term}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 font-mono text-[9px] font-bold tracking-widest uppercase border ${
                          item.sport === 'Soccer' ? 'bg-zinc-800 border-zinc-600 text-zinc-300' :
                          item.sport === 'NFL' ? 'bg-blue-900/30 border-blue-500/50 text-blue-400' :
                          'bg-orange-900/30 border-orange-500/50 text-orange-400'
                        }`}>
                          {item.sport}
                        </span>
                      </td>
                      <td className="p-4 text-zinc-400 font-light leading-relaxed">{item.desc}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-8 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">
                      No terms match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </section>

      </main>
    </div>
  );
}