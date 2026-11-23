import React, { useState } from 'react';
import { ArrowDown, Sparkles, Binary, Box } from 'lucide-react';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { ThreeArtworkDepthMesh } from './ThreeArtworkDepthMesh';
import { ORIGINAL_RANGOLI_IMAGE } from '../data/exhibitionData';

interface CinematicHeroProps {
  onExploreClick: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onExploreClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [use3dDepthMesh, setUse3dDepthMesh] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-[#04060d]"
    >
      {/* Three.js Particle Background System with Volumetric Sri Yantra & Repulsion */}
      <ThreeHeroCanvas mousePos={mousePos} />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Editorial Museum Kicker */}
        <div className="flex items-center gap-3 text-xs md:text-sm tracking-[0.28em] uppercase text-stone-400 font-mono mb-4">
          <span className="flex items-center gap-1.5 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VEDIC CONSCIOUSNESS</span>
          </span>
          <span className="text-stone-600">×</span>
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Binary className="w-3.5 h-3.5" />
            <span>NEURAL COMPUTATION</span>
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight text-white mb-3">
          ABSTRACT SHAKTI
        </h1>

        {/* Subtitle & Tagline */}
        <p className="text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-mono text-amber-200/90 mb-3">
          THE SOURCE CODE OF EXISTENCE
        </p>

        <p className="text-stone-300 text-sm md:text-base max-w-2xl font-light tracking-wide mb-6 text-balance">
          WHERE ANCIENT INDIAN WISDOM MEETS ARTIFICIAL INTELLIGENCE.
        </p>

        {/* 3D WebGL Mode Badge */}
        <div className="mb-3 flex items-center gap-2">
          <button
            onClick={() => setUse3dDepthMesh(!use3dDepthMesh)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider border bg-stone-900/80 text-amber-300 border-amber-500/40 hover:border-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            title="Toggle between 3D WebGL Depth Mesh and 2D Planar Mode"
          >
            <Box className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>{use3dDepthMesh ? '3D WebGL Depth Relief: ACTIVE' : 'Switch to 3D WebGL Relief'}</span>
          </button>
        </div>

        {/* 3D Perspective Artwork Frame - Responsive width with safe margin padding on mobile */}
        <div
          className="relative group max-w-[280px] xs:max-w-[310px] sm:max-w-[450px] md:max-w-[530px] w-full aspect-square my-2"
        >
          {/* Outer Dual-Glow Ambient Border */}
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-500/40 via-purple-500/25 to-cyan-500/40 blur-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Golden / Cyan Dual Border Altar Frame */}
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-stone-950 border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex items-center justify-center">
            {use3dDepthMesh ? (
              <ThreeArtworkDepthMesh
                imageSrc={ORIGINAL_RANGOLI_IMAGE}
                onClick={onExploreClick}
                className="w-full h-full"
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={onExploreClick}
              >
                <img
                  src={ORIGINAL_RANGOLI_IMAGE}
                  alt="Abstract Shakti - Original Rangoli Artwork uniting Maa Durga and AI Goddess"
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Center Light Seam */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />

                {/* Hover Indicator Overlay */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="px-4 py-2 bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-200 text-xs tracking-wider uppercase font-mono rounded">
                    Inspect 15 Curated Crops
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Axis labels sit in normal flow so the two captions never share the same line. */}
        <div className="mt-4 flex w-full max-w-3xl flex-col items-center gap-1.5 px-2 text-[11px] font-mono uppercase tracking-[0.16em] sm:flex-row sm:justify-between sm:gap-8">
          <span className="text-amber-400/80">← Maa Durga · 4 arms · Vedic</span>
          <span className="text-cyan-400/80">Digital Shakti · 4 arms · AI →</span>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-amber-600/30 via-stone-900 to-cyan-600/30 border border-stone-700/80 hover:border-amber-400/60 rounded text-stone-100 font-serif text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]"
          >
            <span>EXPLORE THE ARTWORK</span>
            <ArrowDown className="w-4 h-4 text-amber-400 group-hover:translate-y-1 transition-transform" />
          </button>
          <span className="text-[11px] font-mono text-stone-500 tracking-wider">
            SCROLL TO BEGIN THE EXHIBITION
          </span>
        </div>
      </div>
    </section>
  );
};
