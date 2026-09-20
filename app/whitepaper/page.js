'use client';

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24 relative overflow-hidden">
      
      {/* Marca d'água */}
      <div className="absolute top-32 left-[-5%] text-[12vw] font-black text-white opacity-[0.02] pointer-events-none select-none uppercase leading-none whitespace-nowrap">
        CONFIDENTIAL
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-16 space-y-20">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/50 border-l-2 border-zinc-500 text-zinc-400 font-mono text-xs font-bold tracking-widest uppercase">
            Business & Product Documentation
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            Project <span className="text-orange-500">Whitepaper</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            A comprehensive overview of the Multiverse Football architecture, the INCURSUS engine roadmap, and the commercial vision for the first Cross-Sport Fantasy Platform.
          </p>
        </header>

        {/* 1. EXECUTIVE SUMMARY */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2">
            01. Executive Summary & Market Thesis
          </h2>
          <div className="bg-[#121316] border border-zinc-800 p-8 shadow-lg space-y-6 text-zinc-300 font-light leading-relaxed text-lg">
            <p>
              The global sports market is highly fragmented, with massive, isolated communities dedicated to global Soccer and American Football. However, modern sports consumption is evolving. The modern "Bilingual Fan" understands advanced analytics, engages heavily with fantasy sports, and demands deep, data-driven immersion.
            </p>
            <p>
              <strong className="text-white">The Problem:</strong> There is currently no platform that allows fans to objectively compare and compete using athletes across different sports codes. Cross-sport debates remain subjective and unquantifiable.
            </p>
            <p>
              <strong className="text-white">The Solution:</strong> Multiverse Football bridges this gap through the proprietary <strong>WIF Score (What If Score)</strong> engine. By ingesting advanced situational telemetry (xG, progressive distance, high pressures), we mathematically translate soccer events into NFL equivalents. This creates a unified framework for the ultimate endgame: a cross-sport fantasy and simulation ecosystem.
            </p>
          </div>
        </section>

        {/* 2. ENGINE VERSIONING */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2">
            02. Core Engine Versioning
          </h2>
          <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest">Tracking the evolution of the WIF Algorithm.</p>
          
          <div className="space-y-4">
            {/* V 1.0 */}
            <div className="bg-[#0E0F12] border-l-4 border-orange-500 p-6 shadow-md border-y border-r border-y-zinc-800 border-r-zinc-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-black text-white text-xl">WIF Engine v1.0.0 <span className="text-orange-500 text-sm ml-2">[ CURRENT STATUS: LIVE ]</span></h3>
                  <p className="text-zinc-500 font-mono text-xs mt-1">THE STATISTICAL BRIDGE</p>
                </div>
                <span className="text-zinc-600 font-mono text-xs">2026-Q3</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300 font-light marker:text-orange-500">
                <li>Established static conversion matrix for core archetypes (QB, RB, WR, TE, DEF).</li>
                <li>Deployed The War Room: Global positional ladders and telemetry breakdowns.</li>
                <li>Implementation of base situational scaling (Passer Efficiency & Conversion Rates).</li>
              </ul>
            </div>

            {/* V 0.1 */}
            <div className="bg-[#121316] border-l-4 border-zinc-700 p-6 shadow-md border-y border-r border-y-zinc-800 border-r-zinc-800 opacity-60">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-black text-white text-xl">WIF Engine v0.1.0-alpha</h3>
                  <p className="text-zinc-500 font-mono text-xs mt-1">PROOF OF CONCEPT</p>
                </div>
                <span className="text-zinc-600 font-mono text-xs">ARCHIVED</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-400 font-light">
                <li>Initial formulation of the What.IF.ootball paradox.</li>
                <li>Manual mapping of Soccer Key Passes to NFL 3rd Down Conversions.</li>
                <li>Drafting of the Bilingual Fan Manifesto.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. PRODUCT ROADMAP */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-2">
            03. Development Roadmap & Milestones
          </h2>
          <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest mb-8">The path to the Multiverse Fantasy Engine.</p>

          <div className="relative border-l border-zinc-800 ml-4 space-y-12 pb-8">
            
            {/* Phase 1 */}
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-[-8.5px] top-1 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
              <h3 className="font-black text-white text-xl uppercase">Phase 1: The Foundation</h3>
              <p className="text-orange-400 font-mono text-xs font-bold tracking-widest mb-3">CURRENT</p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Launch of the public-facing Telemetry Lab. Establishment of the "Rosetta Stone" Playbook to educate users. Deployment of the War Room player rankings to validate the WIF algorithm with real-world data and gather community feedback.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-zinc-700 rounded-full left-[-8.5px] top-1"></div>
              <h3 className="font-black text-white text-xl uppercase">Phase 2: The Collision Lab</h3>
              <p className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-3">UPCOMING: Q1 2027</p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Introduction of the Franchise Power Index (FPI). We will reconstitute entire global football clubs as 18-man NFL franchises. The Collision Lab will allow users to run head-to-head simulated matchups (e.g., Real Madrid 2017 vs. Manchester City 2023) based strictly on aggregated WIF performance data.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-zinc-700 rounded-full left-[-8.5px] top-1"></div>
              <h3 className="font-black text-white text-xl uppercase">Phase 3: INCURSUS Fantasy Engine</h3>
              <p className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-3">HORIZON: Q3 2027</p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                The ultimate endgame. A fully functional, live-syncing Fantasy Sports platform. Users will participate in global drafts, assembling hybrid rosters (1 QB, 1 RB, 2 WRs, 1 TE, 1 DEF) using real Soccer athletes, competing in 17-game season gauntlets with dynamic, live-updating WIF scoring.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-zinc-700 rounded-full left-[-8.5px] top-1"></div>
              <h3 className="font-black text-white text-xl uppercase">Phase 4: B2B API & Analytics Licensing</h3>
              <p className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-3">HORIZON: 2028+</p>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Packaging the proprietary WIF translation matrix into a robust API. Licensing cross-sport statistical models to traditional sportsbooks, broadcast networks, and daily fantasy operators looking for novel engagement verticals.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}