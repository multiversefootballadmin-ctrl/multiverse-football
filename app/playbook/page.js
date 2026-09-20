'use client';

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-[#0E0F12] text-zinc-100 font-sans pb-24">
      <main className="max-w-6xl mx-auto px-6 pt-12 space-y-20">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border-l-2 border-orange-500 text-orange-400 font-mono text-xs font-bold tracking-widest uppercase">
            Two Worlds, One Truth
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            The <span className="text-orange-500">Playbook</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Every warrior has a role. Across both dimensions, elite performance demands distinct superpowers, while unforced errors derail entire campaigns.
          </p>
        </div>

        {/* THE ARCHETYPE VAULT */}
        <section className="space-y-8">
          <div className="border-b border-zinc-800 pb-3">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              The Archetype Vault
            </h2>
            <p className="text-xs font-mono text-orange-400 mt-1 uppercase tracking-widest">
              Green Flags & Kryptonite
            </p>
          </div>

          <div className="space-y-6">
            {/* QB */}
            <div className="bg-[#121316] border-l-4 border-red-500 p-6 shadow-lg">
              <h3 className="text-xl font-black text-white uppercase mb-2">QB (Quarterback) vs. Central Playmaker</h3>
              <p className="text-sm text-zinc-300 font-light mb-4"><strong className="text-white">The Mission:</strong> Total situational awareness. Dictates game tempo, reads defensive coverage, and delivers progressive strikes.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-[#0E0F12] border border-emerald-900/50 p-4">
                  <span className="text-emerald-500 font-bold block mb-2 uppercase">✓ Green Flags (Superpowers)</span>
                  <span className="text-zinc-400">High completion efficiency under pressure, progressive passing range, expected assists (xA), and two-minute drill composure.</span>
                </div>
                <div className="bg-[#0E0F12] border border-red-900/50 p-4">
                  <span className="text-red-500 font-bold block mb-2 uppercase">✕ Red Flags (Kryptonite)</span>
                  <span className="text-zinc-400">Holding the ball too long, unforced giveaways in own territory, and hesitating under high press.</span>
                </div>
              </div>
            </div>

            {/* RB */}
            <div className="bg-[#121316] border-l-4 border-emerald-500 p-6 shadow-lg">
              <h3 className="text-xl font-black text-white uppercase mb-2">RB (Running Back) vs. Central Striker</h3>
              <p className="text-sm text-zinc-300 font-light mb-4"><strong className="text-white">The Mission:</strong> Punishing interior production inside congested danger zones.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-[#0E0F12] border border-emerald-900/50 p-4">
                  <span className="text-emerald-500 font-bold block mb-2 uppercase">✓ Green Flags (Superpowers)</span>
                  <span className="text-zinc-400">Contact balance, red-zone shot conversion, rapid acceleration between defenders, and drawing penalties under pressure.</span>
                </div>
                <div className="bg-[#0E0F12] border border-red-900/50 p-4">
                  <span className="text-red-500 font-bold block mb-2 uppercase">✕ Red Flags (Kryptonite)</span>
                  <span className="text-zinc-400">Fumbling in scoring territory, disappearing against physical markers, and squandering high-xG chances.</span>
                </div>
              </div>
            </div>

            {/* WR */}
            <div className="bg-[#121316] border-l-4 border-blue-500 p-6 shadow-lg">
              <h3 className="text-xl font-black text-white uppercase mb-2">WR (Wide Receiver) vs. Vertical Winger</h3>
              <p className="text-sm text-zinc-300 font-light mb-4"><strong className="text-white">The Mission:</strong> Separation and explosive chunk yardage on the boundary.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-[#0E0F12] border border-emerald-900/50 p-4">
                  <span className="text-emerald-500 font-bold block mb-2 uppercase">✓ Green Flags (Superpowers)</span>
                  <span className="text-zinc-400">Blistering sprint speed, boundary separation, high take-on success rates, and dominant yards after contact (YAC).</span>
                </div>
                <div className="bg-[#0E0F12] border border-red-900/50 p-4">
                  <span className="text-red-500 font-bold block mb-2 uppercase">✕ Red Flags (Kryptonite)</span>
                  <span className="text-zinc-400">Drifting out of bounds, getting bullied by physical press corners, and committing drive-killing fouls.</span>
                </div>
              </div>
            </div>

            {/* TE & DEF combinados por espaço visual */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#121316] border-l-4 border-amber-500 p-6 shadow-lg">
                <h3 className="text-lg font-black text-white uppercase mb-2">TE vs. Target Man</h3>
                <p className="text-xs text-zinc-300 font-light mb-4"><strong className="text-white">Mission:</strong> The physical glue connecting protection to route running.</p>
                <div className="space-y-3 font-mono text-[10px]">
                  <div><span className="text-emerald-500 font-bold uppercase">✓ Superpowers:</span> <span className="text-zinc-400">Contested aerial duel win rate, physical hold-up play, tactical screening.</span></div>
                  <div><span className="text-red-500 font-bold uppercase">✕ Kryptonite:</span> <span className="text-zinc-400">Blown transition responsibilities and sluggish deceleration.</span></div>
                </div>
              </div>
              
              <div className="bg-[#121316] border-l-4 border-purple-500 p-6 shadow-lg">
                <h3 className="text-lg font-black text-white uppercase mb-2">DEF vs. Backline & Keeper</h3>
                <p className="text-xs text-zinc-300 font-light mb-4"><strong className="text-white">Mission:</strong> Territorial denial and explosive momentum disruption.</p>
                <div className="space-y-3 font-mono text-[10px]">
                  <div><span className="text-emerald-500 font-bold uppercase">✓ Superpowers:</span> <span className="text-zinc-400">Clean open-field tackles, high-IQ pass interceptions, full-match clean sheets.</span></div>
                  <div><span className="text-red-500 font-bold uppercase">✕ Kryptonite:</span> <span className="text-zinc-400">Blown assignments, reckless penalty-box fouls, cheap giveaways.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}