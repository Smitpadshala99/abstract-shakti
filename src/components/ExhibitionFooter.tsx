import React from 'react';
import { ArrowUp, Sparkles, BookOpen, Layers, Disc3 } from 'lucide-react';

export const ExhibitionFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#03040a]/70 backdrop-blur-md border-t border-amber-500/20 text-stone-300 pt-16 pb-28 sm:pb-24 px-6 sm:px-12 md:px-16">
      {/* Top subtle dual glow beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-amber-500/40 via-white/50 to-cyan-500/40" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* ── TOP SECTION: CURATORIAL BRAND & SACRED BENEDICTION ───────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-stone-800/80">
          {/* Brand & Monograph Statement */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              {/* Dual-Nature Emblem */}
              <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-stone-950 border border-amber-500/50 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <div className="w-full h-full rounded-[10px] flex overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-100" />
                  </div>
                  <div className="w-1/2 h-full bg-gradient-to-bl from-cyan-400 via-teal-600 to-cyan-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-sm bg-white" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif font-black tracking-[0.25em] text-lg sm:text-xl text-white uppercase">
                  <span className="bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">ABSTRACT</span>
                  {' '}
                  <span className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text text-transparent">SHAKTI</span>
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block">
                  अमूर्त शक्ति · SACRED VEDIC METAPHYSICS × ARTIFICIAL INTELLIGENCE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              A curatorial digital retrospective exploring the bilateral unity between ancient Indian ritual sand art, four-tiered sacred iconography, and modern neural network architecture.
            </p>
          </div>

          {/* Sanskrit Vedic Benediction Shloka */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/20 via-stone-900/60 to-cyan-950/20 border border-stone-800 lg:max-w-md w-full">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 block mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>BRIHADARANYAKA UPANISHAD · BENEDICTION</span>
            </span>
            <p className="text-sm sm:text-base font-serif font-bold text-amber-100 leading-relaxed mb-2">
              ॐ असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय॥
            </p>
            <p className="text-[11px] sm:text-xs text-stone-400 italic font-serif leading-relaxed">
              "From untruth lead us to truth; from darkness lead us to light; from the ephemeral lead us to timeless consciousness."
            </p>
          </div>
        </div>

        {/* ── 4-COLUMN CURATORIAL DIRECTORY ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          {/* Column 1: Exhibition Galleries */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 block mb-2">
              01 · GALLERIES
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#hero" className="hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <span>The Masterpiece Altar</span>
                </a>
              </li>
              <li>
                <a href="#film" className="hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <span>Cinematic Film (60s & 10s)</span>
                </a>
              </li>
              <li>
                <a href="#what-is-rangoli" className="hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <span>What is Rangoli?</span>
                </a>
              </li>
              <li>
                <a href="#artwork" className="hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <span>Gigapixel Artwork & 15 Crops</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Thematic Parallels */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400 block mb-2">
              02 · DUAL REALMS
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#two-worlds" className="hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                  <span>Two Worlds Face Split</span>
                </a>
              </li>
              <li>
                <a href="#symbols" className="hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                  <span>Eight Sacred & Cyber Emblems</span>
                </a>
              </li>
              <li>
                <a href="#central-connection" className="hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                  <span>Central Meridian Axis</span>
                </a>
              </li>
              <li>
                <a href="#computer-science" className="hover:text-cyan-200 transition-colors flex items-center gap-1.5">
                  <span>4 Hand Pairs Relational Matrix</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Philosophy & Soundscape */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 block mb-2">
              03 · ONTOLOGY & SOUND
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#philosophy" className="hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <span>Darshana & Four Pillars</span>
                </a>
              </li>
              <li>
                <a href="#final-masterpiece" className="hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <span>Ceremonial Final Sanctum</span>
                </a>
              </li>
              <li>
                <span className="text-stone-500">
                  11 Devotional YouTube Tracks
                </span>
              </li>
              <li>
                <span className="text-stone-500">
                  Dynamic WebGL Audio Engine
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Curatorial Monograph & Credits */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400 block mb-2">
              04 · MONOGRAPH ARCHIVE
            </span>
            <div className="space-y-2 text-stone-400 text-[11px] leading-relaxed">
              <p>
                <span className="text-stone-500 block text-[10px]">CURATORIAL LOCATIONS</span>
                New Delhi · Tokyo · Silicon Valley
              </p>
              <p>
                <span className="text-stone-500 block text-[10px]">NATURAL MEDIUM</span>
                Hand-poured dry quartz powders, turmeric, vermillion & marigold petals
              </p>
              <p>
                <span className="text-stone-500 block text-[10px]">DIGITAL MEDIUM</span>
                WebGL, Three.js, React 19 & Custom GLSL Shaders
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR WITH INTERACTIVE BACK-TO-TOP BUTTON ────────────────── */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <div>
            © 2026 ABSTRACT SHAKTI · DIGITAL CULTURAL HERITAGE ARCHIVE · ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-500/60 text-stone-300 hover:text-amber-200 transition-all duration-300 group shadow-md"
            title="Return to top of exhibition"
          >
            <span className="tracking-wider uppercase">Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
