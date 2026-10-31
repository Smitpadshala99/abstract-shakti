/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExhibitionNav } from './components/ExhibitionNav';
import { CinematicHero } from './components/CinematicHero';
import { CinematicFilm } from './components/CinematicFilm';
import { WhatIsRangoli } from './components/WhatIsRangoli';
import { ArtworkGallery } from './components/ArtworkGallery';
import { TwoWorldsComparison } from './components/TwoWorldsComparison';
import { EightSymbols } from './components/EightSymbols';
import { CentralConnection } from './components/CentralConnection';
import { ComputerScienceMatrix } from './components/ComputerScienceMatrix';
import { PhilosophySection } from './components/PhilosophySection';
import { FinalMasterpiece } from './components/FinalMasterpiece';
import { ExhibitionFooter } from './components/ExhibitionFooter';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { DualWorldScrollAtmosphere } from './components/DualWorldScrollAtmosphere';

export default function App() {
  const handleExploreClick = () => {
    const el = document.getElementById('film');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#04060d] text-stone-200 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* Dual World Scroll Atmosphere: Left Traditional Marigolds & Flickering Brass Diyas, Right Cyber Circuitry & Binary Pulses */}
      <DualWorldScrollAtmosphere />

      {/* Museum Header Nav */}
      <ExhibitionNav />

      {/* Main Exhibition Sequence (All 10 Dedicated Curatorial Sections) */}
      <main className="pb-32 sm:pb-24">
        {/* Section 01: Cinematic Hero */}
        <CinematicHero onExploreClick={handleExploreClick} />

        {/* Section 02: The Cinematic Film (60s & 10s Players + Upload) */}
        <CinematicFilm />

        {/* Section 03: What is Rangoli? (Vedic Pigments to Silicon Logic) */}
        <WhatIsRangoli />

        {/* Section 04: The Complete Artwork (High-Res Zoom & 15 Original Crops Grid) */}
        <ArtworkGallery />

        {/* Section 05: The Two Worlds (Interactive Split-Screen Face Comparison) */}
        <TwoWorldsComparison />

        {/* Section 06: The Eight Symbols (3D Interactive Cards for 4 Traditional & 4 Tech Emblems) */}
        <EightSymbols />

        {/* Section 07: The Central Connection (Three.js Converging Particle Axis) */}
        <CentralConnection />

        {/* Section 08: The Computer Science Connection (Relational Matrix & Interactive Nodes) */}
        <ComputerScienceMatrix />

        {/* Section 09: The Philosophy (Dramatic Editorial Typography) */}
        <PhilosophySection />

        {/* Section 10: Final Masterpiece (Exact Original Rangoli Altar & Aura) */}
        <FinalMasterpiece />
      </main>

      {/* Museum Exhibition Footer */}
      <ExhibitionFooter />

      {/* Modern Persistent Floating Music Player Bar (Spotify / Apple Music Style) */}
      <FloatingMusicPlayer />
    </div>
  );
}
