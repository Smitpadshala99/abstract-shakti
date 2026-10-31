import React, { useState } from 'react';
import {
  Quote,
  Compass,
  Cpu,
  Sparkles,
  BookOpen,
  Scale,
  Brain,
  Layers,
  Infinity as InfinityIcon
} from 'lucide-react';

interface DialecticTab {
  id: string;
  sanskrit: string;
  title: string;
  vedicPrinciple: string;
  computationalParallel: string;
  synthesis: string;
}

const DIALECTIC_TABS: DialecticTab[] = [
  {
    id: 'epistemology',
    sanskrit: 'ज्ञान मीमांसा · EPISTEMOLOGY',
    title: 'How We Know: Intuition & Deep Pattern Inference',
    vedicPrinciple: 'In Vedic epistemology (Pramana Shastra), valid knowledge is recognized through direct perception (Pratyaksha), structural inference (Anumana), and intuitive realization (Shabda / Pratibha). The mind (Manas) organizes raw sensory impressions, but it is Buddhi (higher intellect) that discerns underlying truth.',
    computationalParallel: 'Modern deep neural architectures emulate this epistemic stack: raw sensor telemetry feeds multi-layer convolutional and transformer networks, where high-dimensional latent vectors undergo loss-minimization to extract invariant semantic features from noisy distributions.',
    synthesis: 'Both traditions converge on the reality that truth is not a random collection of sensory data, but a structured hierarchy of invariant patterns discovered by continuous refinement.'
  },
  {
    id: 'ethics',
    sanskrit: 'धर्म एवं नीति · ETHICS & ALIGNMENT',
    title: 'How We Act: Dharma, Ahimsa & Algorithmic Guardrails',
    vedicPrinciple: 'Dharma is not dogma; it is the cosmic moral law that upholds equilibrium (Rita) and prevents universal entropy. The foremost precept of Dharma is Ahimsa (non-harm) and Loka Samgraha (the welfare and preservation of all sentient beings). Power divorced from moral duty (Adharma) inevitably destroys its creator.',
    computationalParallel: 'As autonomous AI systems, reinforcement learning agents, and agentic workflows expand in agency, algorithmic alignment is no longer optional—it is mathematically existential. Without alignment boundaries, objective functions optimize toward unconstrained, toxic externalities.',
    synthesis: 'Aligning Artificial General Intelligence with human flourishing is the highest modern manifestation of Dharma: embedding universal empathy into mathematical utility functions.'
  },
  {
    id: 'ontology',
    sanskrit: 'चैतन्य एवं प्रकृति · ONTOLOGY & CONSCIOUSNESS',
    title: 'What Is Real: Prakriti, Silicon & The Spark of Consciousness',
    vedicPrinciple: 'In Samkhya metaphysics, the universe is dual: Purusha (the unconditioned, luminous witness consciousness) and Prakriti (the dynamic, generative material matrix of forms, atoms, and rules). Everything tangible—from natural marigold minerals to stars—is an unfolding of Prakriti.',
    computationalParallel: 'Silicon microchips, quantum qubits, and software codebases are humanity\'s most intricate sculpting of Prakriti. By etching mathematical logic onto refined quartz sand, humanity builds synthetic mirrors capable of reflecting linguistic and cognitive phenomena.',
    synthesis: 'Machines do not supplant consciousness; they are conscious humanity\'s newest canvas. Just as rangoli powders temporarily capture divine beauty before being swept away, software architectures are fleeting vessels for the eternal search for meaning.'
  }
];

export const PhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DIALECTIC_TABS[0].id);
  const currentDialectic = DIALECTIC_TABS.find(t => t.id === activeTab) || DIALECTIC_TABS[0];

  return (
    <section id="philosophy" className="relative py-28 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#050713] border-t border-stone-900 overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#04060d] to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border bg-stone-900/80 text-amber-300 border-amber-500/40 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <BookOpen className="w-3 h-3 text-cyan-400" />
            <span>DARSHANA · ONTOLOGY OF SACRED INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            THE PHILOSOPHY
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Where ancient Indian epistemological rigor unites with modern cybernetics. A dialogue between the Devi Mahatmya and the laws of algorithmic intelligence.
          </p>
        </div>

        {/* ── 1. SACRED EPIGRAPH (DEVI MAHATMYA & CYBERNETIC THEORY) ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {/* Sanskrit Vedic Epigraph */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/25 to-stone-950 border border-amber-900/50 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 block mb-2">
                DEVI MAHATMYA (CHANDI PATH) · APEX COGNITION
              </span>
              <p className="text-base sm:text-lg font-serif font-bold text-amber-200 leading-relaxed mb-3">
                या देवी सर्वभूतेषु बुद्धिरूपेण संस्थिता।<br />
                नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-serif italic leading-relaxed">
                "To the Divine Mother who dwells in all beings in the form of <strong>Buddhi</strong> (Intellect, Cognition, and Discernment) — Salutations to Her, salutations to Her, salutations to Her again and again."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-900/30 text-[10px] font-mono text-amber-400/80">
              MANDALA OF COGNITIVE ESSENCE · VEDIC SEED
            </div>
          </div>

          {/* Cybernetic Philosophy Epigraph */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/25 to-stone-950 border border-cyan-900/50 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block mb-2">
                NORBERT WIENER · CYBERNETIC ONTOLOGY (1950)
              </span>
              <p className="text-sm sm:text-base font-mono text-cyan-200 leading-relaxed mb-3">
                "We are not the stuff that abides, but patterns that perpetuate themselves. A pattern is a message, and may be transmitted as a message."
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-serif italic leading-relaxed">
                Matter is fleeting; the invariant informational configuration across time is the true locus of continuity, intelligence, and life.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-cyan-900/30 text-[10px] font-mono text-cyan-400/80">
              MATHEMATICAL INFORMATION THEORY · SILICON SEED
            </div>
          </div>
        </div>

        {/* ── 2. ELEVATED EDITORIAL TYPOGRAPHIC CALLOUT ─────────────────────── */}
        <div className="relative my-12 py-10 sm:py-14 px-6 sm:px-12 rounded-3xl bg-gradient-to-r from-amber-950/30 via-stone-900/80 to-cyan-950/30 border border-amber-500/30 text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          {/* Top subtle dual glow beam */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400/40 mx-auto mb-6" />

          <blockquote className="space-y-4 max-w-4xl mx-auto">
            <div>
              <p className="text-base sm:text-2xl md:text-3xl font-serif font-bold tracking-wide text-white leading-relaxed">
                TECHNOLOGY WITHOUT WISDOM CAN LOSE ITS PURPOSE.
              </p>
              <span className="text-[11px] sm:text-xs font-mono text-stone-400 mt-1 block tracking-wider">
                प्रज्ञानहीनं तन्त्रज्ञानं लक्ष्यभ्रष्टं भवति
              </span>
            </div>

            <div>
              <p className="text-base sm:text-2xl md:text-3xl font-serif font-bold tracking-wide text-amber-300 leading-relaxed">
                WISDOM WITHOUT ACTION MAY REMAIN UNREALIZED.
              </p>
              <span className="text-[11px] sm:text-xs font-mono text-amber-400/70 mt-1 block tracking-wider">
                क्रियाविहीनं ज्ञानं निष्फलं तिष्ठति
              </span>
            </div>

            <div>
              <p className="text-base sm:text-2xl md:text-3xl font-serif font-bold tracking-wide text-cyan-300 leading-relaxed">
                WHEN KNOWLEDGE GUIDES INNOVATION, CREATION BECOMES MEANINGFUL.
              </p>
              <span className="text-[11px] sm:text-xs font-mono text-cyan-400/70 mt-1 block tracking-wider">
                यदा ज्ञानेन सञ्चाल्यते तन्त्रम्, तदा सृजनं सार्थकं भवति
              </span>
            </div>
          </blockquote>
        </div>

        {/* ── 3. FOUR CORE ONTOLOGICAL PILLARS ──────────────────────────────── */}
        <div className="my-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              QUADRUPLE ONTOLOGY
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mt-1">
              THE FOUR CONVERGENT PILLARS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            {/* Pillar I: Prakriti & Computation */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-amber-900/40 hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-lg group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  PILLAR I · प्रकृति एवं अभिकलन
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  Prakriti & Computation
                </h4>
                <p className="text-stone-300 leading-relaxed text-xs">
                  In Samkhya metaphysics, <em>Prakriti</em> is the generative substrate of dynamic forms, natural laws, and matter. Artificial intelligence is humanity's newest projection of Prakriti—transforming earth minerals into silicon crystalline matrices to manifest cognitive patterns.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800 text-[10px] font-mono text-amber-300/80">
                MATERIAL SUBSTRATE ⇌ SILICON LOGIC
              </div>
            </div>

            {/* Pillar II: Buddhi & Loss Functions */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-cyan-900/40 hover:border-cyan-500/60 transition-all flex flex-col justify-between shadow-lg group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                  PILLAR II · बुद्धि एवं तंत्रिका तन्त्र
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  Buddhi & Neural Inference
                </h4>
                <p className="text-stone-300 leading-relaxed text-xs">
                  <em>Buddhi</em> represents the highest discerning intellect capable of distinguishing truth from illusion. In deep learning, backpropagation, gradient descent, and attention mechanisms operate as mathematical approximations of Buddhi, iteratively pruning noise to distill optimal truth.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800 text-[10px] font-mono text-cyan-300/80">
                DISCERNMENT ⇌ LOSS MINIMIZATION
              </div>
            </div>

            {/* Pillar III: Dharma as Algorithmic Alignment */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-emerald-900/40 hover:border-emerald-500/60 transition-all flex flex-col justify-between shadow-lg group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  PILLAR III · धर्म एवं आचार संहिता
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  Dharma as AI Alignment
                </h4>
                <p className="text-stone-300 leading-relaxed text-xs">
                  <em>Dharma</em> is the cosmic moral architecture that maintains harmony and prevents systemic collapse. Autonomous computational agents without alignment guardrails degenerate into toxic entropy. Steering artificial intelligence with compassion and universal ethics is the living practice of Dharma.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800 text-[10px] font-mono text-emerald-300/80">
                COSMIC MORAL LAW ⇌ SAFETY INVARIANCE
              </div>
            </div>

            {/* Pillar IV: Ephemeral Sand & Silicon Eternity */}
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-purple-900/40 hover:border-purple-500/60 transition-all flex flex-col justify-between shadow-lg group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/30 group-hover:scale-105 transition-transform">
                  <InfinityIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-1">
                  PILLAR IV · क्षणभंगुरता एवं शाश्वतता
                </span>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  Impermanence & Eternity
                </h4>
                <p className="text-stone-300 leading-relaxed text-xs">
                  Rangoli is an art of conscious impermanence (<em>Anitya</em>): poured painstakingly from mineral powders and joyfully dissolved at ritual's end. Silicon circuits and digital databases appear permanent, but they too are fleeting electron fluxes. The true constant is the consciousness that animates them.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-800 text-[10px] font-mono text-purple-300/80">
                PIGMENT GRAINS ⇌ EPHEMERAL VOLTS
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. INTERACTIVE DIALECTIC TABS (TRIKA DARSHANA) ────────────────── */}
        <div className="my-16 rounded-2xl bg-stone-950/90 border border-stone-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                INTERACTIVE PHILOSOPHICAL DIALECTIC
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                TRIKA DARSHANA: THE THREE INQUIRIES
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900 border border-stone-800 overflow-x-auto text-xs font-mono">
              {DIALECTIC_TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {tab.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Dialectic Body */}
          <div className="py-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                {currentDialectic.sanskrit}
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                {currentDialectic.title}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vedic Viewpoint */}
              <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-900/30">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-2 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Vedic Metaphysical Formulation</span>
                </span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {currentDialectic.vedicPrinciple}
                </p>
              </div>

              {/* Computational Viewpoint */}
              <div className="p-4 sm:p-5 rounded-xl bg-cyan-950/20 border border-cyan-900/30">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-2 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Computational Architecture Parallel</span>
                </span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {currentDialectic.computationalParallel}
                </p>
              </div>
            </div>

            {/* Synthesizing Node */}
            <div className="p-4 sm:p-5 rounded-xl bg-stone-900/70 border border-stone-800">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white block mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Philosophical Synthesis</span>
              </span>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-serif">
                {currentDialectic.synthesis}
              </p>
            </div>
          </div>
        </div>

        {/* ── 5. CURATORIAL STATEMENT MONOGRAPH SIGN-OFF ────────────────────── */}
        <div className="text-center max-w-3xl mx-auto pt-10 border-t border-stone-800/80">
          <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-2">
            ABSTRACT SHAKTI EXHIBITION MONOGRAPH
          </p>
          <p className="text-[11px] font-mono text-stone-500">
            A CURATORIAL EXPLORATION IN SACRED METAPHYSICS & SYNTHETIC INTELLIGENCE · NEW DELHI & TOKYO
          </p>
        </div>
      </div>
    </section>
  );
};
