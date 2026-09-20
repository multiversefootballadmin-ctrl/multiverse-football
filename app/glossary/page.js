'use client';

import { useState, useMemo } from 'react';

const masterGlossary = [
  // ==================== SOCCER TELEMETRY & STATS ====================
  { term: "xG (Expected Goals)", sport: "Soccer", desc: "Calculates the probability of a shot resulting in a goal based on spatial location, shot type, angle, and assist delivery. Validates finishing efficiency over pure volume." },
  { term: "npxG (Non-Penalty xG)", sport: "Soccer", desc: "Expected goals isolated entirely from penalty kicks, providing an unskewed evaluation of open-play and set-piece shooting quality." },
  { term: "xA (Expected Assists)", sport: "Soccer", desc: "Measures the mathematical likelihood that a completed pass will lead directly to a goal, evaluating playmaking vision regardless of teammate finishing." },
  { term: "xAG (Expected Assisted Goals)", sport: "Soccer", desc: "Metric assessing the exact xG produced by shots directly generated from a player's key pass or assist delivery." },
  { term: "PSxG (Post-Shot Expected Goals)", sport: "Soccer", desc: "Measures goal probability after the ball leaves the striker's foot, factoring in trajectory, speed, and placement. Used to evaluate elite goalkeeping and shot stopping." },
  { term: "Progressive Passes", sport: "Soccer", desc: "Completed forward passes advancing possession 10+ meters toward the opponent's goal line, or any completed pass into the penalty box." },
  { term: "Progressive Carries", sport: "Soccer", desc: "Continuous individual ball carries advancing possession at least 10 meters forward into attacking territory or into the penalty box." },
  { term: "Key Passes", sport: "Soccer", desc: "The final pass directly leading to an attempt on goal by a teammate, whether the shot scores or misses." },
  { term: "SCA (Shot-Creating Actions)", sport: "Soccer", desc: "The two offensive actions directly leading to a shot attempt, encompassing live passes, dead-ball deliveries, take-ons, or drawn fouls." },
  { term: "GCA (Goal-Creating Actions)", sport: "Soccer", desc: "The two offensive actions directly preceding a goal, isolating the highest-leverage decision-makers on the pitch." },
  { term: "Take-ons (Dribbles)", sport: "Soccer", desc: "One-on-one duel attempts where an offensive ball-carrier attempts to bypass an active defender while retaining possession." },
  { term: "Box Entries", sport: "Soccer", desc: "Successful passes or individual carries that penetrate the opposing 18-yard penalty box from intermediate zones." },
  { term: "Final Third Entries", sport: "Soccer", desc: "Successful progressive distributions entering the attacking third of the pitch, transitioning from buildup into high-danger setup." },
  { term: "Through Balls", sport: "Soccer", desc: "Calculated ground passes threaded between defensive lines into open space for an advancing teammate to sprint onto." },
  { term: "Switches of Play", sport: "Soccer", desc: "Long-distance diagonal aerial passes traveling over 40 yards across the pitch to isolate the weak-side boundary defender." },
  { term: "High Press", sport: "Soccer", desc: "Coordinated aggressive defensive structure deployed in the opponent's defensive third to force hasty dispossession near their goal." },
  { term: "PPDA (Passes Per Defensive Action)", sport: "Soccer", desc: "Quantifies pressing intensity by calculating how many passes an opponent is permitted before a defensive action is triggered." },
  { term: "Field Tilt", sport: "Soccer", desc: "The ratio of a team's share of final-third passes compared to their opponent, evaluating territorial dominance over mere possession." },
  { term: "High Turnovers Won", sport: "Soccer", desc: "Possession recoveries initiated within 40 meters of the opponent's goal, directly mirroring an NFL strip-sack or turnover on downs." },
  { term: "Recoveries", sport: "Soccer", desc: "Retaining control of a loose, contested, or neutral ball where neither team had clear established possession." },
  { term: "Interceptions", sport: "Soccer", desc: "Reading passing lanes and cutting off distribution intended for an opposing target without requiring a ground tackle." },
  { term: "Tackles Won", sport: "Soccer", desc: "Dispossessing an active opponent ball-carrier while cleanly securing possession or forcing the ball out of danger." },
  { term: "Aerial Duels Won", sport: "Soccer", desc: "Winning contested headers against an active opponent in open play or dead-ball set pieces. Essential metric for Target Forwards and Center-Backs." },
  { term: "Clean Sheet", sport: "Soccer", desc: "Full-match defensive shutout where a club and its defensive unit concede zero goals across 90+ minutes." },
  { term: "Big Chances Created", sport: "Soccer", desc: "Opportunities presented where a teammate is reasonably expected to score (1v1 against keeper or close-range uncontested tap-in)." },
  { term: "Big Chances Missed", sport: "Soccer", desc: "Squandering an opportunity of extremely high mathematical xG (typically >0.40) inside dangerous scoring zones." },
  { term: "Cross Completion %", sport: "Soccer", desc: "Percentage of wide aerial or ground deliveries that successfully connect with a teammate inside the 18-yard area." },
  { term: "Hold-up Play", sport: "Soccer", desc: "Using physical shielding and body balance with back to goal to retain possession under pressure until advancing midfielders arrive." },
  { term: "Half-Spaces", sport: "Soccer", desc: "The tactical longitudinal corridors between the central pitch and the touchlines, prime operating territory for elite playmakers." },
  { term: "Packing Rate", sport: "Soccer", desc: "Advanced metric quantifying how many opposing defenders are bypassed and removed from defensive positioning by a single forward pass." },

  // ==================== NFL & FANTASY ANALYTICS ====================
  { term: "The Pocket", sport: "NFL", desc: "The protected operating zone created by the offensive tackles and interior line for the Quarterback to read coverages." },
  { term: "Passer Rating", sport: "NFL", desc: "Formula measuring QB efficiency based on completion percentage, passing yards per attempt, touchdowns, and interceptions (scale of 0 to 158.3)." },
  { term: "QBR (Total Quarterback Rating)", sport: "NFL", desc: "ESPN's proprietary stat evaluating individual quarterback contribution on each play, accounting for situational game context, EPA, and clutch leverage." },
  { term: "YAC (Yards After Catch)", sport: "NFL", desc: "The yardage accumulated by a receiver strictly following the reception, isolating speed, broken tackles, and open-field vision." },
  { term: "Air Yards", sport: "NFL", desc: "The vertical distance from the line of scrimmage to the point where the ball is caught or hits the ground, measuring downfield aggressiveness." },
  { term: "aDOT (Average Depth of Target)", sport: "NFL", desc: "Average distance downfield where a receiver is targeted, classifying whether a weapon operates as a boundary burner or intermediate connector." },
  { term: "Target Share", sport: "NFL", desc: "The percentage of a team's total passing attempts directed to a specific wide receiver, tight end, or running back within an offensive scheme." },
  { term: "Air Yards Share", sport: "NFL", desc: "The proportion of a franchise's total downfield passing volume command by an individual receiver, measuring explosive upside." },
  { term: "WOPR (Weighted Opportunity Rating)", sport: "NFL", desc: "Fantasy predictive metric combining Target Share and Air Yards Share: (1.5 × Target Share) + (0.7 × Air Yards Share)." },
  { term: "YPRR (Yards Per Route Run)", sport: "NFL", desc: "Receiving yards divided by total passing plays where the receiver ran a route. The gold standard for measuring per-snap receiver efficiency." },
  { term: "CPOE (Completion Percentage Over Expected)", sport: "NFL", desc: "Next Gen Stats model measuring QB throwing accuracy above expectations based on target separation, throw distance, and pocket pressure." },
  { term: "EPA/play (Expected Points Added)", sport: "NFL", desc: "Measures the net change in expected scoring points created by a specific offensive play relative to down, distance, and field position." },
  { term: "Cover 2 / Cover 3 / Cover 4", sport: "NFL", desc: "Defensive zone structures allocating 2, 3, or 4 deep defensive backs to protect against explosive deep vertical passes." },
  { term: "Press Coverage", sport: "NFL", desc: "Cornerback alignment directly on the line of scrimmage utilizing physical hand jams to disrupt a receiver's route timing." },
  { term: "PPR (Points Per Reception)", sport: "NFL", desc: "Fantasy scoring format awarding a flat 1.0 point for every catch, regardless of yardage gained on the play." },
  { term: "Half-PPR", sport: "NFL", desc: "Balanced fantasy scoring format awarding 0.5 points per reception, evening out the value between volume receivers and touchdown scorers." },
  { term: "Snap Share", sport: "NFL", desc: "The percentage of total offensive or defensive plays in which a specific player was actively on the field." },
  { term: "Red Zone", sport: "NFL", desc: "The critical territory between the opponent's 20-yard line and the goal line, where defenses compress and space collapses." },
  { term: "Goal-Line Touches", sport: "NFL", desc: "Rushing attempts or targeted passes inside the opponent's 5-yard line, carrying the highest statistical conversion rate for touchdowns." },
  { term: "Broken Tackles", sport: "NFL", desc: "When a ball-carrier maintains forward momentum and escapes a direct physical contact tackle attempt by a defender." },
  { term: "YACo (Yards After Contact)", sport: "NFL", desc: "Rushing yardage accumulated strictly after initial contact with an opposing defender, measuring power and leg drive." },
  { term: "D/ST Unit", sport: "NFL", desc: "Defense and Special Teams collective scoring unit in fantasy, generating points via sacks, takeaways, safeties, and return touchdowns." },
  { term: "Sack", sport: "NFL", desc: "Tackling the passer behind the line of scrimmage before forward release, destroying drive momentum and losing valuable yardage." },
  { term: "QB Pressure", sport: "NFL", desc: "A defensive disruption that forces the quarterback to rush, scramble, throw away, or sustain a sack or hit within 2.5 seconds." },
  { term: "3rd Down Conversion", sport: "NFL", desc: "Successfully picking up required line-to-gain yardage on third down to preserve possession and reset down series." },
  { term: "Pick-Six", sport: "NFL", desc: "When a defensive player intercepts a pass and returns it all the way to the opponent's end zone for an immediate defensive touchdown." },
  { term: "Turnover Differential", sport: "NFL", desc: "The net ratio of turnovers generated by a team's defense minus offensive giveaways surrendered." },
  { term: "Two-Minute Drill", sport: "NFL", desc: "High-tempo, hurry-up passing offense operated during the closing two minutes of a half with minimal huddles." },
  { term: "Audible", sport: "NFL", desc: "A quarterback verbal check changing the predetermined play call directly at the line of scrimmage based on pre-snap coverage reads." },
  { term: "Play Action", sport: "NFL", desc: "A deceptive passing design where the quarterback fakes a handoff to the running back to freeze linebackers before targeting open secondary windows." },

  // ==================== MULTIVERSE ENGINE & METRICS ====================
  { term: "WIF Score (What If Score)", sport: "Multiverse", desc: "Proprietary composite index that translates situational Soccer performance metrics into standardized NFL Fantasy output per 90 match minutes." },
  { term: "Dimensional Boxscore", sport: "Multiverse", desc: "Side-by-side analytical comparative profile mapping an athlete's Native Soccer Production directly against their Translated NFL Equivalent." },
  { term: "Archetype Bridge", sport: "Multiverse", desc: "Algorithmic framework establishing kinematic parity between soccer roles and pocket positions (e.g., Target Striker ➔ Power RB; Playmaker ➔ QB)." },
  { term: "Pocket Translation", sport: "Multiverse", desc: "The computational process converting midfield vision, progressive distributions, and composure under high press into passer rating and third-down conversions." },
  { term: "Kinetic Parity", sport: "Multiverse", desc: "The scientific baseline proving that boundary wingers isolating defenders at top sprint speed mirror wide receivers generating separation off press coverage." },
  { term: "Drive Leverage", sport: "Multiverse", desc: "The algorithmic weighting applied to soccer actions occurring in maximum-density game states (e.g., 85th+ minute deficits, box congestion)." },
  { term: "Kryptonite Index", sport: "Multiverse", desc: "Penalty deductions calculated for catastrophic athlete errors such as dispossessions in own half, blown transition assignments, or high-xG misses." },
  { term: "Superpower Rating", sport: "Multiverse", desc: "Bonus leverage multipliers awarded when an athlete finishes in the 95th+ percentile in high-leverage metrics like progressive passes or contested aerials." },
  { term: "Franchise Power Index (FPI)", sport: "Multiverse", desc: "Upcoming system grading entire global soccer clubs as full 18-man NFL rosters based on starting firepower, situational depth, and defensive resistance." },
  { term: "Collision Lab", sport: "Multiverse", desc: "Interactive simulation testing ground allowing cross-generational and weekly head-to-head simulated clashes based strictly on WIF telemetry." },
  { term: "INCURSUS Engine", sport: "Multiverse", desc: "The flagship cross-sport fantasy architecture enabling users to draft hybrid rosters using real soccer stars competing under gridiron scoring rules." },
  { term: "Telemetry Ingestion", sport: "Multiverse", desc: "The backend automated data pipeline pulling live match actions, heatmaps, and spatial coordinates from global soccer databanks." },
  { term: "Pass Rush Equivalence", sport: "Multiverse", desc: "Mapping soccer counter-presses and front-third tackle wins directly to blind-side sacks, hurries, and forced pocket collapses." },
  { term: "Red Zone Conversion Ratio", sport: "Multiverse", desc: "The direct conversion of inside-the-18 touches and expected goals into NFL goal-line touchdown efficiency." },
  { term: "Spatial Processing Delta", sport: "Multiverse", desc: "Quantifying how rapidly a central distributor scans defensive structures before delivering progressive line-breaking passes." },
  { term: "Boundary Separation Ratio", sport: "Multiverse", desc: "Translating 1v1 take-on win rates against fullbacks into vertical separation metrics against press-man cornerbacks." },
  { term: "End-Zone Preservation", sport: "Multiverse", desc: "Scoring mechanism measuring full-team clean sheets, goal-line blocks, and box stops as defensive shutouts and goal-line stands." }
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const counts = useMemo(() => {
    return {
      ALL: masterGlossary.length,
      SOCCER: masterGlossary.filter(i => i.sport.toUpperCase() === "SOCCER").length,
      NFL: masterGlossary.filter(i => i.sport.toUpperCase() === "NFL").length,
      MULTIVERSE: masterGlossary.filter(i => i.sport.toUpperCase() === "MULTIVERSE").length,
    };
  }, []);

  const filteredGlossary = useMemo(() => {
    return masterGlossary.filter(item => {
      const matchSearch = item.term.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "ALL" || item.sport.toUpperCase() === filter.toUpperCase();
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
            New to advanced analytics? Don't watch the NFL? We've got you covered. Here is the comprehensive survival guide to the terminology, statistics, and formulas powering the Multiverse.
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
              <div><strong className="text-white text-sm">xG (Expected Goals):</strong> <span className="text-xs text-zinc-400 block mt-0.5">Quantifies shot probability from 0.00 to 1.00 based on spatial location.</span></div>
              <div><strong className="text-white text-sm">Progressive Carries:</strong> <span className="text-xs text-zinc-400 block mt-0.5">Continuous forward dribbles advancing 10+ meters toward the goal line.</span></div>
            </div>
          </div>
          
          <div className="bg-[#121316] p-6 border-l-4 border-blue-500 shadow-lg">
            <div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-2">
              <span className="text-2xl">🏈</span>
              <h2 className="text-lg font-black text-white uppercase tracking-wider">Pocket Output</h2>
            </div>
            <div className="space-y-3">
              <div><strong className="text-white text-sm">The Pocket:</strong> <span className="text-xs text-zinc-400 block mt-0.5">Protected offensive zone for the Quarterback to dissect defensive coverage.</span></div>
              <div><strong className="text-white text-sm">YAC (Yards After Catch):</strong> <span className="text-xs text-zinc-400 block mt-0.5">Separation and chunk yardage gained by a receiver following possession.</span></div>
            </div>
          </div>

          <div className="bg-[#121316] p-6 border-l-4 border-orange-500 shadow-lg">
            <div className="flex items-center gap-3 mb-4 border-b border-orange-500/30 pb-2">
              <span className="text-2xl">🌌</span>
              <h2 className="text-lg font-black text-orange-500 uppercase tracking-wider">The Multiverse</h2>
            </div>
            <div className="space-y-3">
              <div><strong className="text-white text-sm">WIF Score:</strong> <span className="text-xs text-zinc-400 block mt-0.5">Proprietary algorithm translating pitch telemetry into standard NFL fantasy points.</span></div>
              <div><strong className="text-white text-sm">Archetype Bridge:</strong> <span className="text-xs text-zinc-400 block mt-0.5">Kinematic mapping connecting complementary athletic roles across sports.</span></div>
            </div>
          </div>
        </div>

        {/* FULL DICTIONARY DATABASE */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white">Complete Telemetry Database</h2>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-1">
                Showing {filteredGlossary.length} of {masterGlossary.length} terms cataloged.
              </p>
            </div>
            
            <div className="w-full md:w-[420px]">
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-zinc-500 font-mono text-lg">🔍</span>
                <input
                  type="text"
                  placeholder="SEARCH METRICS, TERMS, OR ACRONYMS..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#121316] border border-zinc-700 hover:border-orange-500/50 focus:border-orange-500 pl-12 pr-6 py-3.5 text-xs md:text-sm font-black text-white placeholder-zinc-600 focus:outline-none uppercase tracking-widest transition-all"
                />
              </div>
            </div>
          </div>

          {/* CATEGORY SELECTOR WITH LIVE COUNTERS */}
          <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 pb-4">
            <span className="text-[10px] font-mono text-zinc-500 mr-2 uppercase tracking-widest">CATEGORY:</span>
            {[
              { id: "ALL", label: `ALL (${counts.ALL})` },
              { id: "SOCCER", label: `SOCCER (${counts.SOCCER})` },
              { id: "NFL", label: `NFL (${counts.NFL})` },
              { id: "MULTIVERSE", label: `MULTIVERSE (${counts.MULTIVERSE})` }
            ].map(tab => (
              <button 
                key={tab.id} 
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-widest transition-all border ${
                  filter === tab.id 
                    ? 'bg-orange-600 border-orange-500 text-white shadow-md' 
                    : 'bg-[#121316] border-zinc-800 text-zinc-500 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TABLE OF METRICS */}
          <div className="overflow-x-auto border border-zinc-800 bg-[#121316] shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0E0F12] font-mono text-zinc-500 uppercase tracking-widest text-[10px] border-b border-zinc-800">
                  <th className="p-4 w-[240px]">Metric / Term</th>
                  <th className="p-4 w-[130px]">Dimension</th>
                  <th className="p-4">Technical Explanation & Reality Bridge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-sm font-mono">
                {filteredGlossary.length > 0 ? (
                  filteredGlossary.map((item, idx) => (
                    <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 font-black text-white text-sm uppercase tracking-wider">
                        {item.term}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase border inline-block ${
                          item.sport.toUpperCase() === 'SOCCER' ? 'bg-zinc-800/90 border-zinc-600 text-zinc-200' :
                          item.sport.toUpperCase() === 'NFL' ? 'bg-blue-950/80 border-blue-500/50 text-blue-400' :
                          'bg-orange-950/80 border-orange-500/50 text-orange-400'
                        }`}>
                          {item.sport}
                        </span>
                      </td>
                      <td className="p-4 text-xs font-sans text-zinc-300 font-light leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-10 text-center text-zinc-500 font-mono text-xs uppercase tracking-widest">
                      No metrics or concepts match your query "{search}".
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