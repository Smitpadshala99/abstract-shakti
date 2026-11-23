import React, { useState } from 'react';
import { ORIGINAL_RANGOLI_IMAGE } from '../data/exhibitionData';
import { ThreeMasterpieceCanvas } from './ThreeMasterpieceCanvas';
import { ThreeArtworkDepthMesh } from './ThreeArtworkDepthMesh';
import { Sparkles, Maximize2, Share2, Check, Box } from 'lucide-react';

export const FinalMasterpiece: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [is3DMode, setIs3DMode] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="masterpiece" className="relative py-32 px-4 md:px-8 bg-[#04060d] border-t border-stone-900 overflow-hidden">
      {/* Three.js Celestial Particle Aura Background */}
      <ThreeMasterpieceCanvas />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Curatorial Header */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white mb-2">
          ABSTRACT SHAKTI
        </h2>

        <p className="text-sm sm:text-base md:text-lg tracking-[0.22em] uppercase font-mono text-amber-200/90 mb-2">
          THE SOURCE CODE OF EXISTENCE
        </p>

        <p className="text-stone-300 text-xs sm:text-sm tracking-[0.18em] uppercase font-mono text-cyan-300 mb-8">
          ANCIENT WISDOM. MODERN INTELLIGENCE. INFINITE CREATION.
        </p>

        {/* 3D View Toggle */}
        <div className="mb-4">
          <button
            onClick={() => setIs3DMode(!is3DMode)}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider border bg-stone-950/80 text-amber-300 border-amber-500/40 hover:border-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <Box className="w-3.5 h-3.5 text-cyan-400" />
            <span>{is3DMode ? 'View Original Altar (2D)' : 'Explore 3D Topographic Relief'}</span>
          </button>
        </div>

        {/* Masterpiece Frame */}
        <div className="relative group max-w-[340px] sm:max-w-[500px] md:max-w-[620px] w-full aspect-square my-4">
          {/* Outer Multi-layered Aura Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/40 via-purple-500/20 to-cyan-500/40 blur-xl opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-amber-400/30 to-cyan-400/30 blur-sm" />

          {/* Golden and Cyan Altar Frame */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-950 p-3 sm:p-4 border border-stone-700/80 shadow-[0_30px_100px_rgba(0,0,0,0.95)] flex items-center justify-center">
            {is3DMode ? (
              <ThreeArtworkDepthMesh
                imageSrc={ORIGINAL_RANGOLI_IMAGE}
                className="w-full h-full rounded-xl"
              />
            ) : (
              <>
                <img
                  src={ORIGINAL_RANGOLI_IMAGE}
                  alt="Abstract Shakti - Final Masterpiece"
                  className="w-full h-full object-cover rounded-xl select-none transition-transform duration-1000 group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Divine Lighting Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            )}
          </div>
        </div>

        {/* Placard sits below the square so the closing quote cannot run through it. */}
        <div className="mt-8 w-full max-w-[340px] sm:max-w-[500px] md:max-w-[620px] p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-col items-center gap-4 text-xs font-mono text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <span className="text-amber-400 font-semibold block">ACCESSION: AS-2026-OM-AI</span>
            <span className="block mt-1 leading-relaxed">ORIGINAL RANGOLI ARTWORK · MINERAL PIGMENTS ON STONE</span>
          </div>
          <button
            onClick={handleShare}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Link' : 'Share Exhibition'}</span>
          </button>
        </div>

        {/* Curatorial Closing Colophon */}
        <div className="mt-12 pt-10 border-t border-stone-800/80 max-w-2xl mx-auto text-stone-400 text-xs leading-relaxed space-y-3">
          <p className="font-serif italic text-stone-300">
            "Where the eternal light of the brass diya reflects upon the silicon mirror, human creation discovers its true source code."
          </p>
          <div className="font-mono text-[11px] text-stone-500">
            CURATED FOR INTERNATIONAL DIGITAL ART & PHILOSOPHY EXHIBITIONS · 2026
          </div>
        </div>
      </div>
    </section>
  );
};
