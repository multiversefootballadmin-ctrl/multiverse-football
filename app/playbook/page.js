'use client';

import { useState } from 'react';

export default function PlaybookPage() {
  const [soccerTerm, setSoccerTerm] = useState('');
  const [nflTerm, setNflTerm] = useState('');
  const [userHandle, setUserHandle] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!soccerTerm || !nflTerm) return;
    setSubmitted(true);
    setTimeout(() => {
      setSoccerTerm('');
      setNflTerm('');
      setUserHandle('');
      setSubmitted(false);
    }, 4000);
  };

  const metricMappings = [
    {
      id: "pass_td",
      soccerTitle: "Direct Goal Assist",
      soccerDesc: "The decisive pass putting a teammate directly through on goal.",
      nflTitle: "Passing Touchdown (TD) 🏈",
      nflDesc: "The scoring strike finding an open receiver in the endzone for 6 points.",
      tag: "CORE METRIC"
    },
    {
      id: "broken_tackle",
      soccerTitle: "1v1 Dribble Won",
      soccerDesc: "Beating a defender in tight quarters while keeping progressive control.",
      nflTitle: "Broken Tackle 🏈",
      nflDesc: "Resisting physical contact, discarding defenders, and keeping drive alive.",
      tag: "ELUSIVENESS"
    },
    {
      id: "yac",
      soccerTitle: "Open-Field Sprint",
      soccerDesc: "High-speed progression into unoccupied space behind defensive lines.",
      nflTitle: "Yards After Catch (YAC) 🏈",
      nflDesc: "Explosive yardage gained running after securing possession.",
      tag: "SEPARATION"
    },
    {
      id: "red_zone",
      soccerTitle: "Penalty Box Penetration",
      soccerDesc: "The critical space where defensive lines compress and games are won.",
      nflTitle: "Red Zone Efficiency 🏈",
      nflDesc: "Final 20 yards before the endzone: tight coverage and physical leverage.",
      tag: "LEVERAGE"
    },
    {
      id: "clean_sheet",
      soccerTitle: "Clean Sheet",
      soccerDesc: "Zero goals conceded over 90 minutes through discipline and aerial control.",
      nflTitle: "D/ST Shutout & Turnovers 🏈",
      nflDesc: "Defensive unit stifling opponent drives and forcing turnovers.",
      tag: "DEFENSIVE D/ST"
    }
  ];

  const culturalMappings = [
    {
      soccer: "90th-minute stoppage equalizer ⚽",
      nfl: "Hail Mary pass as time expires 🏈",
      context: "Pure desperation turned into a miracle on the final snap."
    },
    {
      soccer: "Classic No. 10 Playmaker ⚽",
      nfl: "Pocket Passer (Field General) 🏈",
      context: "Minimal running, elite spatial processing, and pinpoint arm accuracy."
    },
    {
      soccer: "Explosive Winger ⚽",
      nfl: "Deep Threat Wide Receiver 🏈",
      context: "The secondary's nightmare: blowing past safeties to stretch the field."
    },
    {
      soccer: "Commanding Center-Back ⚽",
      nfl: "Middle Linebacker (Defensive Captain) 🏈",
      context: "The quarterback of the defense who diagnoses run schemes and punishes runners."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      <main className="max-w-6xl mx-auto px-6 pt-12 space-y-20">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            The Dimensional Rosetta Stone
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            The <span className="text-orange-500">Playbook</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Two global sports driven by distinct codes. Here is the official translation bridge: how Soccer ⚽ events map directly into American Football 🏈 mechanics and fantasy scoring.
          </p>
        </div>

        <section className="space-y-6">
          <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              Official Metric Conversions
            </h2>
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">WIF Telemetry</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {metricMappings.map((m) => (
              <div key={m.id} className="bg-[#121316] border border-zinc-800 p-6 flex flex-col justify-between hover:border-orange-500/40 transition-colors shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 border border-zinc-800 px-2 py-0.5 uppercase">
                    {m.tag}
                  </span>
                  <span className="text-xs font-mono text-orange-500 font-bold tracking-wider">⚽ ⇄ 🏈</span>
                </div>

                <div className="grid grid-cols-1 gap-4 font-mono">
                  <div className="bg-zinc-900/90 border-l-2 border-emerald-500 p-3.5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                      Soccer ⚽ Origin
                    </span>
                    <h3 className="text-sm font-bold text-white font-sans">{m.soccerTitle}</h3>
                    <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">{m.soccerDesc}</p>
                  </div>

                  <div className="bg-zinc-900/90 border-l-2 border-orange-500 p-3.5 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-orange-400 font-bold block">
                      NFL 🏈 Variant
                    </span>
                    <h3 className="text-sm font-bold text-white font-sans">{m.nflTitle}</h3>
                    <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">{m.nflDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              Culture, Style & Situational Equivalents
            </h2>
            <p className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-widest">
              How fan sentiment translates across codes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {culturalMappings.map((c, idx) => (
              <div key={idx} className="bg-[#121316] border border-zinc-800 p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-800 text-xs font-mono font-bold">
                  <span className="text-white">{c.soccer}</span>
                  <span className="text-orange-400">{c.nfl}</span>
                </div>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {c.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#121316] to-[#181a1f] border border-orange-500/30 p-8 md:p-12 space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest">
              Community Incursion
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Spotted another equivalent? Submit your bridge.
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
              Which Soccer player profile, tactic, or moment has an undeniable NFL counterpart we missed? Share your observation.
            </p>
          </div>

          {submitted ? (
            <div className="p-4 bg-emerald-950/60 border border-emerald-500 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              ✓ Bridge received! Telemetry scouts will audit your proposal.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  Soccer Term ⚽
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Bicycle kick"
                  value={soccerTerm}
                  onChange={(e) => setSoccerTerm(e.target.value)}
                  className="w-full bg-[#0E0F12] border border-zinc-700 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  NFL Equivalent 🏈
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: One-handed catch"
                  value={nflTerm}
                  onChange={(e) => setNflTerm(e.target.value)}
                  className="w-full bg-[#0E0F12] border border-zinc-700 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                  Your Name / Handle (Optional)
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="@yourhandle"
                    value={userHandle}
                    onChange={(e) => setUserHandle(e.target.value)}
                    className="w-full bg-[#0E0F12] border border-zinc-700 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 font-mono"
                  />
                  <button 
                    type="submit" 
                    className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-widest transition-colors shrink-0"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}