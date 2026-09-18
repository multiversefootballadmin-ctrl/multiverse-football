import Link from 'next/link';
import { Terminal, Shield, Zap, Target, Crosshair, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Top Terminal Status Header */}
      <header className="flex items-center justify-between border-b border-[#1E2633] pb-4 text-xs font-mono-nums tracking-widest text-gray-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00FF66]" />
          <span>SYS.MULTIVERSE // QUANTUM_LADDER_V1.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
          <span className="text-[#00FF66]">LIVE TRANSLATION ACTIVE</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="space-y-6 pt-4 text-center md:text-left">
        <div className="inline-block px-3 py-1 text-xs font-mono-nums bg-[#121820] border border-[#1E2633] rounded text-[#F59E0B]">
          WHAT IF THE LAWS OF SPORTS WERE REWRITTEN?
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Where Pitch Reality Collides With <span className="text-[#00FF66]">Gridiron Rules</span>.
        </h1>
        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
          Pop culture mastered the multiverse. We built the statistical bridge. Real performance translated through the proprietary <span className="text-white font-semibold">WIF Score</span> engine.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
          <Link 
            href="/rankings" 
            className="flex items-center gap-2 px-6 py-3 bg-[#00FF66] text-[#0B0E14] font-bold rounded hover:bg-opacity-90 transition font-mono-nums text-sm"
          >
            ENTER THE WAR ROOM <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/como-funciona" 
            className="px-6 py-3 surface-card text-gray-200 font-semibold rounded hover:border-gray-500 transition text-sm"
          >
            Decode The Matrix
          </Link>
        </div>
      </section>

      {/* Archetype Quick Cards */}
      <section className="space-y-4 pt-8 border-t border-[#1E2633]">
        <h2 className="text-xs font-mono-nums uppercase text-gray-500 tracking-wider">
          Functional Archetypes // Core DNA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="surface-card p-4 rounded space-y-2">
            <div className="text-[#F59E0B] font-mono-nums text-xs font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> QB // FIELD GENERAL
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Total pocket awareness. Manipulates passing lanes, breaks lines, and orchestrates drives.
            </p>
          </div>

          <div className="surface-card p-4 rounded space-y-2">
            <div className="text-[#00FF66] font-mono-nums text-xs font-bold flex items-center gap-1">
              <Crosshair className="w-3.5 h-3.5" /> RB // GROUND WEAPON
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              High-density red zone execution. Absorbs physical contact to punch it across the goal line.
            </p>
          </div>

          <div className="surface-card p-4 rounded space-y-2">
            <div className="text-blue-400 font-mono-nums text-xs font-bold flex items-center gap-1">
              <Target className="w-3.5 h-3.5" /> WR // SEPARATOR
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Explosive vertical burst. Wins boundary 1v1 matchups and dominates yards after catch.
            </p>
          </div>

          <div className="surface-card p-4 rounded space-y-2">
            <div className="text-purple-400 font-mono-nums text-xs font-bold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> TE // HYBRID ANCHOR
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              The tactical hinge. Dominates contested aerial balls, screens duels, and moves the chains.
            </p>
          </div>

          <div className="surface-card p-4 rounded space-y-2">
            <div className="text-red-400 font-mono-nums text-xs font-bold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> DEF // TERRITORIAL LOCK
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Collective backline denial. High-press line disruptions and game-clinching goal-line stands.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
