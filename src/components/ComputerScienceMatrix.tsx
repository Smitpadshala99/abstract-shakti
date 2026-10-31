import React, { useState } from 'react';
import { HAND_PAIR_RELATIONS, CS_RELATIONS } from '../data/exhibitionData';
import { HandPairRelation, CsRelation } from '../types/exhibition';
import {
  Shield,
  Radio,
  RefreshCw,
  Sparkles,
  Cpu,
  Cloud,
  Box,
  Network,
  Zap,
  ArrowRight,
  Layers,
  Sparkle
} from 'lucide-react';

export const ComputerScienceMatrix: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState<HandPairRelation>(HAND_PAIR_RELATIONS[0]);
  const [viewMode, setViewMode] = useState<'pairs' | 'all8'>('pairs');
  const [selectedSingle, setSelectedSingle] = useState<CsRelation>(CS_RELATIONS[0]);

  // Icon renderer helper
  const renderIcon = (name: string, className = 'w-4 h-4') => {
    switch (name) {
      case 'Shield': return <Shield className={className} />;
      case 'Radio': return <Radio className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'Box': return <Box className={className} />;
      case 'Zap': return <Zap className={className} />;
      default: return <Network className={className} />;
    }
  };

  return (
    <section id="computer-science" className="relative py-24 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#04060d] border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border bg-stone-900/80 text-amber-300 border-amber-500/40 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Sparkle className="w-3 h-3 text-cyan-400" />
            <span>8 ARMS · 8 EMBLEMS · 4 BILATERAL TIERS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            THE COMPUTER SCIENCE CONNECTION
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
            An in-depth comparative mapping connecting the 4 sacred instruments held in the left arms of Maa Durga with the 4 cybernetic technologies wielded in the right robotic arms of Digital Shakti.
          </p>

          <p className="text-[11px] sm:text-xs font-mono text-amber-300/80 mt-3">
            * Curatorial Note: These pairings represent artistic and structural analogies, bridging ancient Vedic metaphysics with modern computing architecture.
          </p>

          {/* View Mode Toggle: 4 Bilateral Pairs vs All 8 Tools */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-stone-950 border border-stone-800">
            <button
              onClick={() => setViewMode('pairs')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all ${
                viewMode === 'pairs'
                  ? 'bg-gradient-to-r from-amber-500/20 to-cyan-500/20 text-white border border-amber-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>4 Bilateral Hand Pairs</span>
            </button>
            <button
              onClick={() => setViewMode('all8')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all ${
                viewMode === 'all8'
                  ? 'bg-gradient-to-r from-amber-500/20 to-cyan-500/20 text-white border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-cyan-400" />
              <span>All 8 Tools Explorer</span>
            </button>
          </div>
        </div>

        {/* ── MODE 1: 4 BILATERAL HAND PAIRS VIEW ───────────────────────────── */}
        {viewMode === 'pairs' && (
          <div className="space-y-8">
            {/* 4 Hand Tier Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {HAND_PAIR_RELATIONS.map((pair, idx) => {
                const isSelected = selectedPair.id === pair.id;

                return (
                  <button
                    key={pair.id}
                    onClick={() => setSelectedPair(pair)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group flex flex-col justify-between ${
                      isSelected
                        ? 'bg-stone-900/90 border-cyan-500/70 shadow-[0_0_25px_rgba(6,182,212,0.25)]'
                        : 'bg-stone-950/60 border-stone-800/80 hover:border-stone-700 hover:bg-stone-900/40'
                    }`}
                  >
                    {/* Top ambient glow line */}
                    {isSelected && (
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-400 via-white to-cyan-400" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
                        {pair.handSubtitle}
                      </span>
                      <div
                        className={`p-1.5 rounded-lg border text-xs ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                            : 'bg-stone-900 border-stone-800 text-stone-400 group-hover:text-stone-200'
                        }`}
                      >
                        {renderIcon(pair.iconName, 'w-3.5 h-3.5')}
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-serif font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {pair.pairTitle}
                    </div>

                    <div className="text-[11px] font-mono text-cyan-400/90 mt-1 line-clamp-1">
                      {pair.synthesisTheme}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bilateral Comparison Stage */}
            <div className="rounded-2xl border border-stone-800 bg-stone-950/90 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Background soft ambient gradient */}
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

              {/* Tier Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-800/80">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                    {selectedPair.handLevel}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">
                    {selectedPair.pairTitle}
                  </h3>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-700 text-xs font-mono text-cyan-300 shrink-0 self-start sm:self-center">
                  {selectedPair.synthesisTheme}
                </div>
              </div>

              {/* 3-Column Bilateral Cards (Left: Vedic Hand, Center: Convergence Beam, Right: Cyber Hand) */}
              <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 my-8 items-stretch">
                {/* ── LEFT CARD: Maa Durga's Hand & Sacred Tool (5 Cols) ────── */}
                <div className="lg:col-span-5 rounded-xl bg-gradient-to-br from-amber-950/25 to-stone-950 border border-amber-900/40 p-5 sm:p-6 flex flex-col justify-between shadow-lg">
                  <div>
                    {/* Header with Crop Image */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-black border border-amber-500/50 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                        <img
                          src={selectedPair.traditional.cropSrc}
                          alt={selectedPair.traditional.toolName}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                          {selectedPair.traditional.handLocation}
                        </span>
                        <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                          {selectedPair.traditional.toolName}
                        </h4>
                        <span className="text-xs font-sans text-amber-200/90 font-medium">
                          {selectedPair.traditional.sanskritName}
                        </span>
                      </div>
                    </div>

                    {/* Role & Meaning */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 rounded-lg bg-stone-900/70 border border-amber-900/30">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                          Vedic Archetype Role
                        </span>
                        <p className="text-stone-200 leading-relaxed">
                          {selectedPair.traditional.archetypeRole}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                          Spiritual Signification
                        </span>
                        <p className="text-stone-300 leading-relaxed text-xs">
                          {selectedPair.traditional.spiritualOrTechMeaning}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-900/30 text-[11px] font-mono text-amber-300/80">
                    {selectedPair.traditional.symbolism}
                  </div>
                </div>

                {/* ── CENTER CONNECTOR: Convergence Energy Beam (1 Col) ──────── */}
                <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
                  <div className="hidden lg:block w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-400 to-cyan-400" />
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)] my-2">
                    <Zap className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/80 text-center block my-1">
                    SYNTHESIS
                  </span>
                  <div className="hidden lg:block w-[1px] h-12 bg-gradient-to-b from-cyan-400 via-amber-400 to-transparent" />
                </div>

                {/* ── RIGHT CARD: Digital Shakti's Hand & Cyber Tool (5 Cols) ─ */}
                <div className="lg:col-span-5 rounded-xl bg-gradient-to-br from-cyan-950/25 to-stone-950 border border-cyan-900/40 p-5 sm:p-6 flex flex-col justify-between shadow-lg">
                  <div>
                    {/* Header with Crop Image */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-black border border-cyan-500/50 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                        <img
                          src={selectedPair.technological.cropSrc}
                          alt={selectedPair.technological.toolName}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                          {selectedPair.technological.handLocation}
                        </span>
                        <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                          {selectedPair.technological.toolName}
                        </h4>
                        <span className="text-xs font-sans text-cyan-200/90 font-medium">
                          {selectedPair.technological.sanskritName}
                        </span>
                      </div>
                    </div>

                    {/* Role & Meaning */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="p-3 rounded-lg bg-stone-900/70 border border-cyan-900/30">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                          Computational Engineering Domain
                        </span>
                        <p className="text-stone-200 leading-relaxed">
                          {selectedPair.technological.archetypeRole}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-stone-900/50 border border-stone-800">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                          Silicon Architecture
                        </span>
                        <p className="text-stone-300 leading-relaxed text-xs">
                          {selectedPair.technological.spiritualOrTechMeaning}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-cyan-900/30 text-[11px] font-mono text-cyan-300/80">
                    {selectedPair.technological.symbolism}
                  </div>
                </div>
              </div>

              {/* Bottom Convergence Synthesis Box */}
              <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-amber-950/20 via-stone-900/90 to-cyan-950/20 border border-stone-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>CONVERGENCE PRINCIPLE</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40">
                    {selectedPair.convergenceEquation}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {selectedPair.philosophicalSynthesis}
                </p>

                <div className="text-[11px] font-mono text-stone-400 flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-amber-400 uppercase">CS Architecture Analogy:</span>
                  <span className="text-stone-300">{selectedPair.runtimeAnalogy}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MODE 2: ALL 8 INDIVIDUAL TOOLS EXPLORER ─────────────────────── */}
        {viewMode === 'all8' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left: 8 Tools Selector List */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-2 px-1">
                SELECT INSTRUMENT (4 VEDIC · 4 CYBERNETIC):
              </span>

              {CS_RELATIONS.map((rel, index) => {
                const isSelected = selectedSingle.traditionalConcept === rel.traditionalConcept;
                const isTraditional = index < 4;

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedSingle(rel)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? isTraditional
                          ? 'bg-stone-900/90 border-amber-500/70 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                          : 'bg-stone-900/90 border-cyan-500/70 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                        : 'bg-stone-950/60 border-stone-800/80 hover:border-stone-700 hover:bg-stone-900/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-lg border shrink-0 ${
                          isSelected
                            ? isTraditional
                              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                              : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                            : 'bg-stone-900 border-stone-800 text-stone-400 group-hover:text-stone-200'
                        }`}
                      >
                        {renderIcon(rel.iconName, 'w-4 h-4')}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-serif font-bold text-white group-hover:text-amber-200 transition-colors truncate">
                          {rel.traditionalConcept}
                        </div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 mt-0.5 truncate">
                          = {rel.csConcept}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isSelected ? 'text-cyan-400 translate-x-1' : 'text-stone-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Inspection Canvas */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/80 to-stone-950 border border-stone-800 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-black border border-stone-700 shrink-0">
                    <img
                      src={selectedSingle.symbolCrop}
                      alt={selectedSingle.traditionalConcept}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                      ANALOGICAL MAPPING
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      {selectedSingle.traditionalConcept}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 mt-0.5">
                      PARALLEL: {selectedSingle.csConcept}
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="py-6 space-y-5">
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Vedic Metaphysical Signification</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {selectedSingle.traditionalMeaning}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Modern Computer Science Manifestation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {selectedSingle.computationalMeaning}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-300 mb-1 flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-white" />
                    <span>Philosophical Synthesis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {selectedSingle.philosophicalSynthesis}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 text-[11px] font-mono text-stone-500 flex items-center justify-between">
                <span>SYSTEM: ABSTRACT SHAKTI ONTOLOGY</span>
                <span>8-ARM COMPUTATIONAL HARMONY</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
