import React, { useState } from 'react';
import { ThreeConvergenceCanvas } from './ThreeConvergenceCanvas';
import { Sparkles, Cpu, GitFork, ArrowLeftRight } from 'lucide-react';

export const CentralConnection: React.FC = () => {
  const [particleIntensity, setParticleIntensity] = useState<number>(1.0);

  return (
    <section id="connection" className="relative py-28 px-4 md:px-8 bg-[#04060d] border-t border-stone-900 overflow-hidden">
      {/* 3D Particle Convergence System (Golden Left -> Center <- Cyan Right) */}
      <ThreeConvergenceCanvas intensity={particleIntensity} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            ANCIENT WISDOM × MODERN INTELLIGENCE
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            The central axis is not a boundary that divides—it is an interface where ancient consciousness and artificial computation converge to create holistic transformation.
          </p>
        </div>

        {/* Central Display: High-Resolution Central Dividing Seam Crop with Dual Energetics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Thematic Column: Consciousness */}
          <div className="lg:col-span-4 space-y-6 text-right">
            <div className="p-6 rounded-2xl bg-gradient-to-l from-amber-950/40 to-stone-950/90 border border-amber-500/30">
              <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 block mb-1">
                LEFT REALM
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">
                Consciousness & Philosophy
              </h3>
              <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
                The non-physical, intuitive awareness that asks <em>why</em>. Grounded in millennia of contemplative observation, ethical self-restraint, and the pursuit of universal harmony.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1">
                Tradition & Cultural Roots
              </h4>
              <p className="text-xs text-stone-400">
                Provides the moral gyroscope, historical empathy, and grounding principles ensuring technological advancements serve genuine human flourishing.
              </p>
            </div>
          </div>

          {/* Center: The Actual Cropped Central Dividing Line Asset */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-44 sm:w-56 h-[440px] sm:h-[500px] rounded-2xl overflow-hidden border-2 border-stone-700/80 shadow-[0_0_50px_rgba(255,255,255,0.15)] bg-stone-950 group">
              <img
                src="/crops/central-division.png"
                alt="Actual Cropped Central Dividing Axis from Rangoli"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Luminous Central Ray (Precisely Centered on Bilateral Face Seam) */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-300 via-white to-cyan-400 shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_24px_rgba(245,158,11,0.6),0_0_36px_rgba(6,182,212,0.6)] pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[6px] bg-gradient-to-b from-amber-400/20 via-white/40 to-cyan-400/20 blur-[2px] pointer-events-none" />

              <div className="absolute bottom-3 inset-x-3 p-2.5 rounded bg-black/85 backdrop-blur-md border border-stone-800 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white">
                  CENTRAL BILATERAL MERIDIAN
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-stone-400">
              <span className="text-amber-400">Golden Stream</span>
              <ArrowLeftRight className="w-3.5 h-3.5 text-white" />
              <span className="text-cyan-400">Cyan Stream</span>
            </div>
          </div>

          {/* Right Thematic Column: Computation */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-stone-950/90 border border-cyan-500/30">
              <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400 block mb-1">
                RIGHT REALM
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">
                Computation & Engineering
              </h3>
              <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
                The structured, empirical logic that asks <em>how</em>. Manifested through silicon semiconductors, linear algebra, distributed networks, and real-time inference.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1">
                Innovation & Execution
              </h4>
              <p className="text-xs text-stone-400">
                Transforms theoretical wisdom into operational capability, scaling knowledge access across global civilizations through software and hardware.
              </p>
            </div>
          </div>
        </div>

        {/* Synthesis Banner: Non-Scientific Equivalency Note */}
        <div className="p-6 md:p-8 rounded-2xl bg-stone-900/40 border border-stone-800 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif italic mb-4">
            "The two visual forms are not claimed to be literally identical. They are artistic expressions of a shared theme of creation: the timeless impulse to channel boundless creative energy into coherent, purposeful structure."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-stone-400">
            <span>CONSCIOUSNESS ↔ COMPUTATION</span>
            <span>·</span>
            <span>TRADITION ↔ INNOVATION</span>
            <span>·</span>
            <span>KNOWLEDGE ↔ EXECUTION</span>
          </div>

          {/* Interactive Particle Intensity Slider */}
          <div className="mt-6 pt-6 border-t border-stone-800/80 flex items-center justify-center gap-4 text-xs font-mono">
            <span className="text-stone-400">CONVERGENCE FLOW RATE:</span>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.1"
              value={particleIntensity}
              onChange={e => setParticleIntensity(Number(e.target.value))}
              aria-label="Adjust particle convergence flow rate"
              className="w-36 h-2 bg-stone-800 rounded appearance-none cursor-pointer accent-amber-500"
            />
            <span className="text-amber-300 font-semibold">{particleIntensity.toFixed(1)}X</span>
          </div>
        </div>
      </div>
    </section>
  );
};
