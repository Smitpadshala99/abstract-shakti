import React, { useState } from 'react';
import { EIGHT_SYMBOLS } from '../data/exhibitionData';
import { SymbolCard } from '../types/exhibition';
import { X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const EightSymbols: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<SymbolCard | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [tiltState, setTiltState] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTiltState(prev => ({
      ...prev,
      [id]: { x: x * 10, y: -y * 10 },
    }));
  };

  const handleCardMouseLeave = (id: string) => {
    setHoveredCardId(null);
    setTiltState(prev => ({
      ...prev,
      [id]: { x: 0, y: 0 },
    }));
  };

  return (
    <section id="symbols" className="relative py-28 px-4 md:px-8 bg-[#04060d] border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            THE EIGHT SYMBOLS
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            Eight sacred and technological instruments held in the eight arms of the dual deity. Hover to experience 3D perspective lift and ambient aura; click any card for deep curatorial exposition.
          </p>

          <div className="flex items-center justify-center gap-6 mt-6 text-xs font-mono">
            <span className="flex items-center gap-2 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span>4 TRADITIONAL EMBLEMS</span>
            </span>
            <span className="text-stone-600">|</span>
            <span className="flex items-center gap-2 text-cyan-400">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <span>4 TECHNOLOGICAL EMBLEMS</span>
            </span>
          </div>
        </div>

        {/* 8-Card Interactive 3D Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EIGHT_SYMBOLS.map(sym => {
            const isTraditional = sym.category === 'traditional';
            const tilt = tiltState[sym.id] || { x: 0, y: 0 };
            const isHovered = hoveredCardId === sym.id;

            return (
              <div
                key={sym.id}
                onMouseEnter={() => setHoveredCardId(sym.id)}
                onMouseMove={e => handleCardMouseMove(e, sym.id)}
                onMouseLeave={() => handleCardMouseLeave(sym.id)}
                onClick={() => setSelectedSymbol(sym)}
                className={`relative group rounded-2xl p-4 bg-stone-950/80 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isTraditional
                    ? 'border-amber-900/40 hover:border-amber-400/80 hover:shadow-[0_15px_35px_rgba(245,158,11,0.22)]'
                    : 'border-cyan-900/40 hover:border-cyan-400/80 hover:shadow-[0_15px_35px_rgba(6,182,212,0.22)]'
                }`}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${isHovered ? -8 : 0}px)`,
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
                }}
              >
                {/* Back-Glow Ambient Aura */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity blur-md -z-10 ${
                    isTraditional ? 'bg-amber-500' : 'bg-cyan-500'
                  }`}
                />

                {/* Card Top: Number & Category Badge */}
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                  <span
                    className={`font-bold tracking-widest uppercase ${
                      isTraditional ? 'text-amber-400' : 'text-cyan-400'
                    }`}
                  >
                    0{sym.number} · {isTraditional ? 'TRADITIONAL' : 'TECHNOLOGY'}
                  </span>
                  {sym.sanskritName && (
                    <span className="text-stone-400 font-serif">{sym.sanskritName}</span>
                  )}
                </div>

                {/* Crop Image Viewport with Hover Zoom */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black mb-4 border border-stone-800/80">
                  <img
                    src={sym.cropSrc}
                    alt={sym.name}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Card Body: Title & Meaning */}
                <div>
                  <h3 className="text-base md:text-lg font-serif font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                    {sym.name}
                  </h3>
                  <div
                    className={`text-[11px] font-mono uppercase tracking-wider mb-2 font-medium ${
                      isTraditional ? 'text-amber-300' : 'text-cyan-300'
                    }`}
                  >
                    {sym.title}
                  </div>
                  <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                    {sym.shortDesc}
                  </p>
                </div>

                {/* Hover Reveal Strip */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-white transition-colors">
                  <span>EXPAND MEANING</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Expanded Detail Dialog */}
        {selectedSymbol && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedSymbol(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSymbol(null)}
                aria-label="Close symbol details"
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left: Large High-Res Crop */}
              <div className="md:w-1/2 flex flex-col items-center justify-center bg-black rounded-xl p-4 border border-stone-800">
                <img
                  src={selectedSymbol.cropSrc}
                  alt={selectedSymbol.name}
                  className="max-h-72 w-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-mono uppercase text-stone-500 mt-3">
                  ORIGINAL HIGH-RES RANGOLI CROP
                </span>
              </div>

              {/* Right: Curatorial & Computer Science Exposition */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono mb-2">
                    <span
                      className={`font-semibold uppercase tracking-widest ${
                        selectedSymbol.category === 'traditional' ? 'text-amber-400' : 'text-cyan-400'
                      }`}
                    >
                      SYMBOL 0{selectedSymbol.number} · {selectedSymbol.category.toUpperCase()}
                    </span>
                    {selectedSymbol.sanskritName && (
                      <span className="text-stone-400">({selectedSymbol.sanskritName})</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    {selectedSymbol.name}
                  </h3>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-4">
                    {selectedSymbol.title}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                    {selectedSymbol.fullDesc}
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                        Core Philosophical Principle
                      </span>
                      <p className="text-xs text-stone-200">{selectedSymbol.corePrinciple}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                        Computer Science & Engineering Analogy
                      </span>
                      <p className="text-xs text-stone-200">{selectedSymbol.csAnalogy}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800 text-[11px] font-mono text-stone-500 flex justify-between">
                  <span>EXHIBIT: ABSTRACT SHAKTI</span>
                  <span>PRESERVED ORIGINAL PIXELS</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
