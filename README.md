# ABSTRACT SHAKTI · अमूर्त शक्ति
> **Where Ancient Indian Wisdom Meets Artificial Intelligence**  
> *A Digital Cultural Retrospective & Interactive 3D WebGL Exhibition*

---

## ✦ Overview

**Abstract Shakti** is a high-end interactive museum and cultural web exhibition (designed in the spirit of *Awwwards Site of the Year*, *Google Arts & Culture*, and *Active Theory*) celebrating the synthesis of sacred Indian Rangoli sand art, Vedic metaphysics, and modern neural computation.

The exhibition centers on a masterwork ceremonial Rangoli created from hand-poured dry mineral pigments, divided across a precise central meridian:
- **Left Hemisphere (Vedic / Traditional Realm)**: Maa Durga — 4 arms, golden Mukut, Tilak, and sacred emblems (Sacred Trishul, Shankha, Sudarshana Chakra, and Pink Lotus).
- **Right Hemisphere (Cybernetic / Digital Realm)**: Digital Shakti — 4 robotic arms, cybernetic circuit crown, fiber-optic locks, and computing counterparts (AI Neural Processor, Digital Interactive Tablet, Cloud Database, and Holographic Data Cube).

---

## ✦ Key Exhibition Features

### 1. 3D WebGL Depth Relief & Masterpiece Altar
- **Interactive Perspective Camera**: Real-time gyroscopic mouse and mobile touch parallax with delicate sculptural relief ($128 \times 128$ tessellated mesh).
- **Procedural Mineral Powder Shimmer**: Custom GLSL shader simulates authentic pulverized crystalline quartz sand micro-sparkle under ceremonial diya candlelight and electric cyan light.
- **Atmospheric Particle Field**: Lateral dual-stream particle field (warm gold on left, cyber cyan on right) with dynamic cursor repulsion physics.

### 2. Gigapixel Masterpiece Viewer with Free Pan & Corner Jump
- **Multi-Scale Magnification**: Toggle between `1X (Fit)`, `1.8X (Inspect)`, and `2.5X (Macro)`.
- **Free Drag-Panning & Hover Edge Steering**: Click-and-drag (mouse) or touch-drag (mobile) with `cursor-grab / cursor-grabbing` physics to explore any corner or side of the canvas.
- **Corner Quick-Jumper Toolbar**: Dedicated one-click navigator pills (`↖ Trishul & Mukut`, `↗ AI Chip & Crown`, `⦿ Facial Seam`, `↙ Lotus & Chakra`, `↘ Cloud & Cube`).
- **Live Minimap Radar**: Real-time thumbnail preview with an illuminated bounding box showing your exact magnification viewport.
- **15 Curated Detail Crops**: Interactive modal lightbox gallery detailing every sacred and technological emblem with high-resolution crops.

### 3. Bilateral Computer Science Matrix (4 Hand Pairs · All 8 Tools)
Structured hand-by-hand across the 4 arm tiers of the dual deity:
1. **Tier 1 (Apex Hands)**: Sacred Trishul (त्रिशूल) $\longleftrightarrow$ AI Neural Processor
   - *Convergence Principle*: Sovereign Will & Loss-Minimization Pruning (`DISCERNMENT ⟷ SEPARATING SIGNAL FROM NOISE`)
2. **Tier 2 (Upper-Middle Hands)**: Sacred Shankha (शंख) $\longleftrightarrow$ Digital Interactive Tablet
   - *Convergence Principle*: Universal Acoustic Broadcast $\longleftrightarrow$ Tactile HCI Democratization
3. **Tier 3 (Lower-Middle Hands)**: Sudarshana Chakra (सुदर्शन चक्र) $\longleftrightarrow$ Cloud Database Architecture
   - *Convergence Principle*: Eternal Cyclic Order (Kala Chakra) $\longleftrightarrow$ Distributed State Consensus (Raft / Paxos)
4. **Tier 4 (Foundation Hands)**: Sacred Pink Lotus (पद्म) $\longleftrightarrow$ Holographic Data Cube
   - *Convergence Principle*: Pristine Emergence from Mud $\longleftrightarrow$ Multi-Dimensional Array Geometry

### 4. Dual-World Procedural Scroll Atmosphere
- **Left Margin (Vedic Realm)**: Procedural brass Diyas with real-time dancing flame physics (`sin(time * 12 + seed)`), drifting golden marigold blossoms (गेंदा), and sacred pink lotus petals.
- **Right Margin (Cybernetic Realm)**: Multiple parallel PCB bus conduits, active inter-bus node-to-node data packet transfers, and cascading binary matrix streams (`01010011`) with dynamic bit-flipping.
- **Scroll Velocity Coupling**: Both margins accelerate their flow speed and kinetic luminosity as the user scrolls.

### 5. Persistent Floating Music Player (Spotify / Apple Music Style)
- Docked bottom bar with animated glowing play ring, interactive seekable scrubber with elapsed/remaining timestamps, and volume/mute controls.
- Expandable playlist featuring **11 curated devotional Gujarati & Hindi tracks** in exact sequence:
  1. Devotional Flute Meditation for Mataji
  2. Ambe Maa Aarti — Ratansinh Vaghela & Damyanti Barot
  3. Vishvambhari Stuti — Kinjal Dave *(start offset: 10s)*
  4. Vaage Vaage 2 — Aghori Muzik
  5. Aigiri Nandini (Mahishasura Mardini Stotram) — Rajalakshmee Sanjay
  6. Dakla 2 — Bandish Projekt
  7. Meri Maa Ke Barabar Koi Nahi — Jubin Nautiyal & Payal Dev
  8. Moti Veraana — Amit Trivedi & Osman Mir
  9. Maari Maavadi — Amit Trivedi & Osman Mir (Bhoomi 2023)
  10. Vadhaavo Re — Aditya Gadhvi
  11. Albeli Matwali Maiyya — Aditya Gadhvi *(start offset: 65s)*
- Master sound toggle synchronized between top header and bottom player.

### 6. Ontological Philosophy & Trika Darshana
- **Sacred Epigraph**: Devi Mahatmya (*"या देवी सर्वभूतेषु बुद्धिरूपेण संस्थिता..."*) paired with Norbert Wiener's cybernetic thesis.
- **The Four Convergent Pillars**:
  - *Pillar I*: Prakriti & Computation (प्रकृति एवं अभिकलन)
  - *Pillar II*: Buddhi & Neural Loss Functions (बुद्धि एवं तंत्रिका तन्त्र)
  - *Pillar III*: Dharma as Algorithmic Alignment (धर्म एवं आचार संहिता)
  - *Pillar IV*: Ephemeral Sand & Silicon Eternity (क्षणभंगुरता एवं शाश्वतता)
- **Interactive Dialectic Tabs**: Epistemology, Ethics & Alignment, and Ontology.

---

## ✦ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics & Shaders**: [Three.js](https://threejs.org/) + Custom GLSL Vertex & Fragment Shaders
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: Custom HTML5 / YouTube IFrame Soundscape Controller

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### Installation
```bash
# Clone the repository
git clone https://github.com/Smitpadshala99/abstract-shakti.git
cd abstract-shakti

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build & Linting
```bash
# Type-check TypeScript
npm run lint

# Compile production bundle
npm run build
```

---

## ✦ Deployment (Vercel)

This project includes a pre-configured [`vercel.json`](./vercel.json) optimized for Vite single-page applications with immutable asset caching and clean SPA routing.

1. Import the repository in [Vercel](https://vercel.com/new).
2. Set **Project Name** to `abstract-shakti` (or your chosen URL).
3. Framework preset: **Vite** (auto-detected).
4. Click **Deploy**.

---

## ✦ Curatorial Acknowledgements

- **Natural Medium**: Hand-poured ceremonial marble powder, natural turmeric, saffron, vermillion, and marigold flower garlands.
- **Digital Medium**: WebGL, GLSL Shaders, Three.js, React 19, and interactive capacitive interface design.
- **Curatorial Dedication**: Dedicated to Maa Durga & the conscious evolution of human intelligence in the silicon age.

*© 2026 Abstract Shakti. Digital Cultural Heritage Archive. All Rights Reserved.*
