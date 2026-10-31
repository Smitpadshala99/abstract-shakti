import React, { useState } from 'react';
import { Flower, Cpu, Compass, Layers } from 'lucide-react';

export const WhatIsRangoli: React.FC = () => {
  const [transitionProgress, setTransitionProgress] = useState(50);

  return (
    <section id="rangoli" className="relative py-28 px-4 md:px-8 bg-[#050713] border-t border-stone-900 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            WHAT IS RANGOLI?
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            From Sanskrit <span className="text-amber-300 font-serif italic">Rangavalli</span>—the sacred geometry of color, transience, and living celebration.
          </p>
        </div>

        {/* 2-Column Curatorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Curatorial Essay */}
          <div className="lg:col-span-6 space-y-6 text-stone-300 text-sm md:text-base leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-400">
              Rangoli is a traditional Indian folk art practiced for millennia across domestic courtyards, temples, and celebratory thresholds. Rendered by hand using finely ground mineral quartz powders, vermillion, turmeric, dyed rice grains, and fragrant marigold petals, each design is an auspicious invocation of beauty, harmony, and cosmic protection.
            </p>

            <p>
              Traditionally created for Diwali, Navratri, and sacred ceremonies, Rangoli possesses a poignant philosophical attribute: <strong className="text-stone-100 font-medium">impermanence</strong>. Though composed with meticulous precision, it is designed to dissolve back into nature, reminding the observer of the transient dance of creation and dissolution.
            </p>

            <div className="p-5 rounded-xl bg-stone-900/50 border border-stone-800 text-stone-200">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>The Contemporary Philosophical Leap</span>
              </h4>
              <p className="text-xs md:text-sm text-stone-300">
                <em className="text-stone-100">Abstract Shakti</em> elevates this ancestral medium into a contemporary dialectic. By bisecting the sacred floor canvas into organic powdered pigments on the left and intricate cybernetic circuit topographies on the right, the artwork illustrates that digital computation and spiritual intuition are not mortal adversaries—they are twin branches of humanity’s search for order and meaning.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Supporting Crop & Pattern Transition */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden border border-stone-800 shadow-[0_15px_50px_rgba(0,0,0,0.7)] group">
              {/* Supporting Original Artwork Crop (Marigold & Dual Pigments) */}
              <img
                src="/crops/central-division.png"
                alt="Transition from traditional rangoli powder to digital circuit logic"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-stone-950/85 backdrop-blur-md border border-stone-800 text-left">
                <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 block mb-1">
                  DETAIL VIEW · ORIGINAL ARTWORK SEAM
                </span>
                <p className="text-xs text-stone-300">
                  Granular mineral pigment meets precise geometric copper-cyan circuit traces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Powder-to-Pixel Synthesis Interactive Slider */}
        <div className="p-6 md:p-8 rounded-2xl bg-stone-900/40 border border-stone-800 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                INTERACTIVE CONCEPT TRANSITION
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mt-1">
                From Sacred Pigment to Silicon Logic
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
              <span className={transitionProgress < 50 ? 'text-amber-400 font-semibold' : ''}>Powder (Vedic)</span>
              <span>↔</span>
              <span className={transitionProgress >= 50 ? 'text-cyan-400 font-semibold' : ''}>Pixel (Digital)</span>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={transitionProgress}
            onChange={e => setTransitionProgress(Number(e.target.value))}
            aria-label="Adjust transition from powder pigments to digital circuits"
            className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-stone-800/80 text-xs md:text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono uppercase">
                <Flower className="w-4 h-4" />
                <span>Ancestral Folk Expression</span>
              </div>
              <p className="text-stone-400">
                Organic rice powders, hand-drawn sacred mandalas, auspicious invocations, natural colors derived from flowers and stones.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono uppercase">
                <Cpu className="w-4 h-4" />
                <span>Algorithmic Architecture</span>
              </div>
              <p className="text-stone-400">
                Silicon substrate, binary state machines, tensor cores, neural inference matrices, and high-bandwidth interconnects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
