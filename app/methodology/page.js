'use client';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0D110E] text-[#F3F1E7] font-sans pb-32">
      <div className="max-w-6xl mx-auto px-6 pt-24 space-y-16">
        
        <header className="border-b border-[#0B3D2E] pb-8">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white mb-4">
            The WIF Score <span className="text-[#E8B923]">Engine</span>
          </h1>
          <p className="text-[#9AAFA8] font-mono text-sm max-w-2xl leading-relaxed">
            SYSTEM ARCHITECTURE // Translating kinematic signatures across dimensions. This is not loose fantasy. This is pure statistical cross-talk.
          </p>
        </header>

        {/* Translation Weights */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black uppercase text-white border-l-4 border-[#E8B923] pl-4">
            Positional Translation Weights
          </h2>
          <p className="text-[#9AAFA8] max-w-3xl">
            Each athlete is evaluated across specific spatial and physical attributes. Their highest normalized score determines their true NFL archetype.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
            {/* QB Card */}
            <div className="bg-[#0a0d0b] border border-[#1a241f] p-6 space-y-4 hover:border-[#E8B923]/50 transition-colors">
              <div className="text-4xl font-black text-[#E8B923]">QB</div>
              <div className="text-white font-bold pb-2 border-b border-[#1a241f]">FIELD GENERAL</div>
              <ul className="space-y-2 text-[#9AAFA8]">
                <li className="flex justify-between"><span>Vision & Creation</span> <span className="text-white">40%</span></li>
                <li className="flex justify-between"><span>Long Pass Accuracy</span> <span className="text-white">30%</span></li>
                <li className="flex justify-between"><span>Composure (Under Pressure)</span> <span className="text-white">20%</span></li>
                <li className="flex justify-between"><span>Direct Finishing</span> <span className="text-white">10%</span></li>
              </ul>
            </div>

            {/* RB Card */}
            <div className="bg-[#0a0d0b] border border-[#1a241f] p-6 space-y-4 hover:border-[#E8B923]/50 transition-colors">
              <div className="text-4xl font-black text-[#E8B923]">RB</div>
              <div className="text-white font-bold pb-2 border-b border-[#1a241f]">GROUND & POUND</div>
              <ul className="space-y-2 text-[#9AAFA8]">
                <li className="flex justify-between"><span>Burst & Acceleration</span> <span className="text-white">35%</span></li>
                <li className="flex justify-between"><span>Short-Space Dribble</span> <span className="text-white">30%</span></li>
                <li className="flex justify-between"><span>Physical Duels</span> <span className="text-white">20%</span></li>
                <li className="flex justify-between"><span>Direct Finishing</span> <span className="text-white">15%</span></li>
              </ul>
            </div>

            {/* WR Card */}
            <div className="bg-[#0a0d0b] border border-[#1a241f] p-6 space-y-4 hover:border-[#E8B923]/50 transition-colors">
              <div className="text-4xl font-black text-[#E8B923]">WR</div>
              <div className="text-white font-bold pb-2 border-b border-[#1a241f]">VERTICAL THREAT</div>
              <ul className="space-y-2 text-[#9AAFA8]">
                <li className="flex justify-between"><span>Top Speed (Open Space)</span> <span className="text-white">40%</span></li>
                <li className="flex justify-between"><span>Finishing & xG</span> <span className="text-white">25%</span></li>
                <li className="flex justify-between"><span>Aerial Duels (Possession)</span> <span className="text-white">20%</span></li>
                <li className="flex justify-between"><span>Separation (Dribble)</span> <span className="text-white">15%</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scoring System & Multiplier */}
        <section className="bg-[#0B3D2E]/10 border border-[#0B3D2E] p-8 space-y-6">
          <h2 className="text-2xl font-black uppercase text-white">The Rarity Multiplier (1.75x)</h2>
          <div className="text-[#9AAFA8] space-y-4 leading-relaxed">
            <p>
              In traditional PPR formats, a Touchdown is worth 6 points. However, a goal in soccer is statistically rarer than a touchdown in the NFL.
            </p>
            <p>
              By tracking historical league averages (~2.69 goals per soccer game vs ~4.69 TDs per NFL game), we established a mathematical rarity multiplier of <strong>1.75x</strong>. 
            </p>
            <div className="bg-[#0D110E] p-4 font-mono text-[#E8B923] inline-block border border-[#1a241f]">
              Score = (Base TD Points × 1.75) × Opponent Difficulty Factor
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}