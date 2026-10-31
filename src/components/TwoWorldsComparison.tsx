import React, { useState } from 'react';
import { Shield, Cpu, Sparkles, Binary, SlidersHorizontal } from 'lucide-react';

export const TwoWorldsComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100

  const handleSliderDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="two-worlds" className="relative py-28 px-4 md:px-8 bg-[#050713] border-t border-stone-900 overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            THE TWO WORLDS
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            Drag the interactive center divider to explore the philosophical and visual dialogue between ancient Indian consciousness and futuristic artificial intelligence.
          </p>
        </div>

        {/* Interactive Split Comparison Slider Component */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative w-full aspect-square max-w-2xl mx-auto rounded-2xl overflow-hidden border border-stone-800 shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-black select-none">
            {/* Background Layer: Right Side (Digital Shakti Full Side) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/crops/tech-side.png"
                alt="Digital Shakti AI Side"
                className="w-full h-full object-cover object-left"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-cyan-950/85 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider text-cyan-300">
                DIGITAL SHAKTI (AI)
              </div>
            </div>

            {/* Foreground Clipped Layer: Left Side (Traditional Maa Durga Full Side) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div
                className="absolute inset-0"
                style={{ width: '100%', minWidth: '100%' }}
              >
                <img
                  src="/crops/traditional-side.png"
                  alt="Traditional Maa Durga Side"
                  className="w-full h-full object-cover object-right"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 left-4 bg-amber-950/85 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider text-amber-300">
                MAA DURGA (CONSCIOUSNESS)
              </div>
            </div>

            {/* Interactive Dividing Line */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400 via-white to-cyan-400 shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-stone-900 border-2 border-white flex items-center justify-center shadow-lg text-stone-200">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Native Range Slider for Smooth Dragging */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={handleSliderDrag}
              aria-label="Drag to compare traditional Durga face and AI goddess face"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-stone-400 max-w-2xl mx-auto mt-4 px-2">
            <span className="text-amber-400">← SLIDE FOR SACRED DURGA</span>
            <span className="text-stone-500">DRAG HORIZONTALLY</span>
            <span className="text-cyan-400">SLIDE FOR CYBERNETIC AI →</span>
          </div>
        </div>

        {/* Detailed Side-by-Side Exposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Panel: Traditional Maa Durga */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-950/30 to-stone-900/60 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
                    LEFT HALF · SACRED TRADITION
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                    Maa Durga — Divine Consciousness
                  </h3>
                </div>
              </div>

              {/* Exact Face Crop Display */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-black border border-amber-900/50">
                <img
                  src="/crops/traditional-side.png"
                  alt="Traditional Maa Durga Full Side"
                  className="w-full h-full object-cover object-right"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
                <p>
                  <strong className="text-amber-300 font-medium">Maa Durga</strong> represents divine strength, cosmic protection, intuitive wisdom, balance, and the primordial creative energy (<em className="text-amber-200">Adi Parashakti</em>).
                </p>
                <p>
                  She symbolizes the foundational principles of creation and conscious awareness. The calm, unbroken gaze of her eyes reflects the silent, witness state of mind (<em className="text-amber-200">Sakshi Bhava</em>), untroubled by external storms.
                </p>
                <p className="text-xs text-stone-400">
                  Her four traditional arms carry sacred spiritual instruments: the Trishul for protection, the Shankha for awakening sound, the Sudarshana Chakra for temporal order, and the pink Lotus for pure genesis.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-900/40 flex items-center justify-between text-xs font-mono text-amber-300">
              <span>COLOR PALETTE: VERMILLION & GOLD</span>
              <span>PRINCIPLE: ATMAN & SHAKTI</span>
            </div>
          </div>

          {/* Right Panel: Futuristic AI Goddess */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-stone-900/60 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
                    RIGHT HALF · DIGITAL SHAKTI (AI)</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                    Digital Shakti — Algorithmic Intelligence
                  </h3>
                </div>
              </div>

              {/* Exact Face Crop Display */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-black border border-cyan-900/50">
                <img
                  src="/crops/tech-side.png"
                  alt="Digital Shakti Full Side"
                  className="w-full h-full object-cover object-left"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
                <p>
                  The <strong className="text-cyan-300 font-medium">Digital Shakti</strong> represents artificial intelligence, computation, algorithmic logic, high-bandwidth connectivity, digital infrastructure, and technological innovation.
                </p>
                <p>
                  She symbolizes the practical manifestation of intelligence through modern technology. Her skin is etched with conductive micro-circuitry, and her hair flows into high-speed interface connectors, linking thought with global telecommunications.
                </p>
                <p className="text-xs text-stone-400">
                  Her four robotic arms deploy contemporary digital tools: the AI microprocessor for neural inference, the digital tablet for interaction, the cloud database for collective memory, and the holographic cube for spatial logic.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-900/40 flex items-center justify-between text-xs font-mono text-cyan-300">
              <span>COLOR PALETTE: ELECTRIC CYAN & COBALT</span>
              <span>PRINCIPLE: LOGIC & COMPUTATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
