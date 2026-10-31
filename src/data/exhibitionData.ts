import { CropItem, SymbolCard, CsRelation, HandPairRelation } from '../types/exhibition';

export const ORIGINAL_RANGOLI_IMAGE = '/assets/aistudio/image_705197c8.png';

export const EXHIBITION_CROPS: CropItem[] = [
  // ── 1. FULL RANGOLI COMPOSITION ──────────────────────────────────────────
  {
    id: 'complete-rangoli',
    name: 'Complete Rangoli Composition',
    category: 'Full Masterpiece',
    traditionOrTech: 'convergant',
    box: { left: 0, top: 0, width: 1254, height: 1254 },
    src: '/crops/complete-rangoli.png',
    width: 1254,
    height: 1254,
    description: 'The monumental dual-sided sacred square rangoli, uniting Maa Durga and the Digital Shakti surrounded by traditional marigold garland and illuminated brass diyas.',
    spiritualMeaning: 'Cosmic non-duality (Advaita): all apparent polarities—form and void, tradition and innovation—emanate from one indivisible primordial consciousness.',
    techMeaning: 'Unified system architecture integrating biological intuition with silicon-based distributed computation.'
  },

  // ── 7 TRADITIONAL CROPS (Left Side: x <= 626) ───────────────────────────
  {
    id: 'traditional-side',
    name: 'Maa Durga Full Realm',
    category: 'Sacred Tradition',
    traditionOrTech: 'traditional',
    box: { left: 0, top: 0, width: 627, height: 1254 },
    src: '/crops/traditional-side.png',
    width: 627,
    height: 1254,
    description: 'The complete left half of the rangoli canvas — Maa Durga\'s sacred domain with all four arms holding the Trishul, Shankha, Sudarshana Chakra, and pink Lotus.',
    spiritualMeaning: 'The left hemisphere represents consciousness (Purusha), intuition, and the eternal sacred feminine energy of Adi Parashakti.',
    symbolism: 'Ancient Indian pigment art, warm vermillion and gold palette, organic devotion expressed through sacred geometry.'
  },
  {
    id: 'golden-mukut',
    name: 'Traditional Golden Mukut',
    category: 'Sacred Regalia',
    traditionOrTech: 'traditional',
    box: { left: 260, top: 40, width: 366, height: 430 },
    src: '/crops/golden-mukut.png',
    width: 366,
    height: 430,
    description: 'The tiered golden crown adorned with sacred concentric halos, ruby and amber gemstones, representing transcendent cosmic sovereignty (Dharma).',
    spiritualMeaning: 'The Sahasrara crown of supreme enlightenment; sovereignty over worldly desires and universal cosmic order.',
    symbolism: 'Tiered golden spires reaching upward signify the ascension of human consciousness toward universal truth.'
  },
  {
    id: 'durga-face',
    name: 'Maa Durga Face',
    category: 'Sacred Divinity',
    traditionOrTech: 'traditional',
    box: { left: 260, top: 440, width: 366, height: 420 },
    src: '/crops/durga-face.png',
    width: 366,
    height: 420,
    description: 'The serene, compassionate gaze of Maa Durga featuring the sacred eye of consciousness, vermillion tilak, golden jhumka earring, and natural divine warmth.',
    spiritualMeaning: 'Maa Durga represents divine strength (Shakti), protection, supreme wisdom, inner balance, and the creative cosmic energy.',
    symbolism: 'The almond-shaped eye conveys unbroken awareness (Sakshi Bhava); the red tilak marks the third eye of inner discernment.'
  },
  {
    id: 'trishul',
    name: 'Sacred Trishul (Trident)',
    category: 'Sacred Emblem',
    traditionOrTech: 'traditional',
    box: { left: 40, top: 150, width: 310, height: 300 },
    src: '/crops/trishul.png',
    width: 310,
    height: 300,
    description: 'The three-pronged spear held in the upper left hand, symbolizing divine control, moral strength, and invincible protection.',
    spiritualMeaning: 'Trishul embodies mastery over the three Gunas (Sattva: purity, Rajas: passion, Tamas: inertia) and past, present, and future.',
    symbolism: 'Power to cut through illusion (Maya) and establish righteousness across physical, subtle, and causal realms.'
  },
  {
    id: 'shankha',
    name: 'Sacred Shankha (Conch)',
    category: 'Sacred Emblem',
    traditionOrTech: 'traditional',
    box: { left: 40, top: 410, width: 310, height: 280 },
    src: '/crops/shankha.png',
    width: 310,
    height: 280,
    description: 'The pure white ritual conch shell held in the second left hand, representing sacred sound, awakening, and universal broadcast.',
    spiritualMeaning: 'The resonance of the primordial sound (Pranava Om), heralding victory of truth and dispelling mental lethargy.',
    symbolism: 'Acoustic geometry of spiral genesis; the initial frequency through which the manifest universe unfolds.'
  },
  {
    id: 'sudarshana-chakra',
    name: 'Golden Sudarshana Chakra',
    category: 'Sacred Emblem',
    traditionOrTech: 'traditional',
    box: { left: 40, top: 610, width: 310, height: 260 },
    src: '/crops/sudarshana-chakra.png',
    width: 310,
    height: 260,
    description: 'The radiant golden disk spinning above the index finger, emitting concentric waves of kinetic luminosity and cosmic balance.',
    spiritualMeaning: 'Cosmic order (Rita), the relentless wheel of time (Kala Chakra), and the preservation of universal equilibrium.',
    symbolism: 'Centrifugal energy that eliminates disharmony and maintains gravitational harmony across all cosmic planes.'
  },
  {
    id: 'lotus',
    name: 'Sacred Pink Lotus (Padma)',
    category: 'Sacred Emblem',
    traditionOrTech: 'traditional',
    box: { left: 40, top: 850, width: 310, height: 290 },
    src: '/crops/lotus.png',
    width: 310,
    height: 290,
    description: 'The fresh pink blossom held gracefully in the lowest left hand, symbolizing spiritual purity, generative fertility, and self-realization.',
    spiritualMeaning: 'Spiritual detachment: blooming in muddy waters without retaining a single droplet of defilement; pure consciousness.',
    symbolism: 'The unfolding petals represent the gradual expansion of human awareness and divine grace.'
  },

  // ── 7 DIGITAL SHAKTI CROPS (Right Side: x >= 628) ───────────────────────
  {
    id: 'tech-side',
    name: 'Digital Shakti Full Realm',
    category: 'Digital Shakti',
    traditionOrTech: 'technological',
    box: { left: 627, top: 0, width: 627, height: 1254 },
    src: '/crops/tech-side.png',
    width: 627,
    height: 1254,
    description: 'The complete right half of the rangoli canvas — the Digital Shakti\'s domain wielding the AI Processor, Digital Tablet, Cloud Database, and Holographic Cube.',
    techMeaning: 'The right hemisphere represents computation, algorithmic intelligence, and the modern technological expression of human creative power.',
    symbolism: 'Cybernetic circuitry, electric cyan and cobalt palette, precision logic expressed through neural-architecture aesthetics.'
  },
  {
    id: 'tech-crown',
    name: 'Digital Shakti Crown',
    category: 'Digital Regalia',
    traditionOrTech: 'technological',
    box: { left: 628, top: 40, width: 366, height: 430 },
    src: '/crops/tech-crown.png',
    width: 366,
    height: 430,
    description: 'The luminous data crown of the Digital Shakti — geometric circuit halos, pulsing neon conduits, and fractal data architecture mirroring the sacred Mukut.',
    techMeaning: 'Neural network architecture crown representing the apex of computational intelligence, sovereign algorithmic authority, and distributed machine cognition.',
    symbolism: 'The digital equivalent of divine sovereignty — where the golden crown of tradition finds its silicon-age reflection.'
  },
  {
    id: 'ai-goddess-face',
    name: 'Digital Shakti Face',
    category: 'Digital Divinity',
    traditionOrTech: 'technological',
    box: { left: 628, top: 440, width: 366, height: 420 },
    src: '/crops/ai-goddess-face.png',
    width: 366,
    height: 420,
    description: 'The cybernetic facial topography displaying luminous algorithmic circuitry, synthetic cyan iris, integrated audio-frequency comm-node, and data-bus hair conduits.',
    techMeaning: 'The Digital Shakti represents artificial intelligence, neural computation, algorithmic logic, real-time connectivity, digital infrastructure, and technological innovation.',
    symbolism: 'The glowing optic sensor symbolizes algorithmic pattern recognition; the cable locks represent high-bandwidth knowledge transmission.'
  },
  {
    id: 'ai-processor',
    name: 'AI Neural Processor',
    category: 'Technological Emblem',
    traditionOrTech: 'technological',
    box: { left: 880, top: 160, width: 330, height: 270 },
    src: '/crops/ai-processor.png',
    width: 330,
    height: 270,
    description: 'The monolithic silicon microprocessor with glowing "AI" die and interconnect traces held aloft by the top robotic arm.',
    techMeaning: 'Advanced semiconductor compute, matrix multiplication tensor cores, neural inference, and algorithmic execution.',
    symbolism: 'Silicon alchemy: sand transformed through mathematical logic into synthetic cognitive capability.'
  },
  {
    id: 'digital-tablet',
    name: 'Digital Interactive Tablet',
    category: 'Technological Emblem',
    traditionOrTech: 'technological',
    box: { left: 880, top: 480, width: 330, height: 270 },
    src: '/crops/digital-tablet.png',
    width: 330,
    height: 270,
    description: 'The sleek glass capacitive slate held in the second robotic hand, symbolizing global access to information and human-machine interface.',
    techMeaning: 'Interactive communication surfaces, direct tactile manipulation of complex datasets, and democratic access to knowledge.',
    symbolism: 'The contemporary parchment where modern civilization encodes, transmits, and collaborates on ideas.'
  },
  {
    id: 'cloud-database',
    name: 'Cloud Database Architecture',
    category: 'Technological Emblem',
    traditionOrTech: 'technological',
    box: { left: 880, top: 700, width: 330, height: 260 },
    src: '/crops/cloud-database.png',
    width: 330,
    height: 260,
    description: 'The cyan cloud contour enclosing tiered cylindrical database platters, floating in the third robotic hand.',
    techMeaning: 'Distributed cloud computing infrastructure, high-availability data replication, and interconnected global knowledge archives.',
    symbolism: 'The collective memory of humanity: vast, decentralized, resilient, and accessible across physical borders.'
  },
  {
    id: 'holographic-cube',
    name: 'Holographic Data Cube',
    category: 'Technological Emblem',
    traditionOrTech: 'technological',
    box: { left: 880, top: 890, width: 330, height: 270 },
    src: '/crops/holographic-cube.png',
    width: 330,
    height: 270,
    description: 'The isometric neon hypercube glowing with purple and cyan luminescence, cupped in the lowest articulated robotic hand.',
    techMeaning: 'Multi-dimensional data structures, spatial computing, cryptographic immutability, and modular software architecture.',
    symbolism: 'Pure mathematical logic translated into structured dimensional space; the crystal lattices of computer science.'
  }
];

export const EIGHT_SYMBOLS: SymbolCard[] = [
  {
    id: 'trishul',
    number: 1,
    name: 'TRISHUL',
    sanskritName: 'त्रिशूल',
    title: 'POWER AND PROTECTION',
    category: 'traditional',
    cropId: 'trishul',
    cropSrc: '/crops/trishul.png',
    shortDesc: 'Represents strength, control and the ability to overcome challenges.',
    fullDesc: 'Held firmly in the upper left hand, the sacred Trishul is the primeval instrument of cosmic balance. Its three sharp prongs signify sovereignty over the three Gunas (Sattva, Rajas, and Tamas), cutting through cognitive illusion to defend moral integrity.',
    corePrinciple: 'Invincible discernment and ethical strength.',
    csAnalogy: 'Fault-tolerant exception handling and cybersecurity guardrails.',
    accentColor: '#f59e0b'
  },
  {
    id: 'shankha',
    number: 2,
    name: 'SHANKHA',
    sanskritName: 'शंख',
    title: 'SOUND AND AWAKENING',
    category: 'traditional',
    cropId: 'shankha',
    cropSrc: '/crops/shankha.png',
    shortDesc: 'Represents sacred sound, communication and the beginning of expression.',
    fullDesc: 'The spiraling conch shell is blown to commence auspicious endeavors. Its acoustic resonance evokes the primordial syllable Om, sweeping away sluggishness and awakening the listener to higher conscious purpose.',
    corePrinciple: 'The primeval vibration of truth and universal broadcast.',
    csAnalogy: 'Network signaling, packet broadcasting, and event propagation protocols.',
    accentColor: '#f97316'
  },
  {
    id: 'sudarshana-chakra',
    number: 3,
    name: 'SUDARSHANA CHAKRA',
    sanskritName: 'सुदर्शन चक्र',
    title: 'COSMIC ORDER',
    category: 'traditional',
    cropId: 'sudarshana-chakra',
    cropSrc: '/crops/sudarshana-chakra.png',
    shortDesc: 'Represents balance, awareness, movement and the continuous cycle of creation.',
    fullDesc: 'Spinning effortlessly on the raised index finger, this golden disc embodies the cosmic law (Rita) and the unending cyclic momentum of time (Kala). It rotates continuously, maintaining harmonic equilibrium throughout the universe.',
    corePrinciple: 'Dynamic equilibrium and relentless temporal evolution.',
    csAnalogy: 'The central runtime event loop, operating system kernel scheduler, and clock cycle.',
    accentColor: '#eab308'
  },
  {
    id: 'lotus',
    number: 4,
    name: 'LOTUS',
    sanskritName: 'पद्म',
    title: 'PURITY AND CREATION',
    category: 'traditional',
    cropId: 'lotus',
    cropSrc: '/crops/lotus.png',
    shortDesc: 'Represents purity, growth, knowledge and creative potential.',
    fullDesc: 'Resting gently in the lower hand, the pink lotus blossom exemplifies transcendent grace. Though rooted in the mud of worldly existence, its pristine petals remain untouched by blemish, symbolizing pristine creative genesis.',
    corePrinciple: 'Spiritual detachment and organic creative potential.',
    csAnalogy: 'Generative synthesis, recursive algorithms, and clean functional abstraction.',
    accentColor: '#f43f5e'
  },
  {
    id: 'ai-processor',
    number: 5,
    name: 'AI PROCESSOR',
    sanskritName: 'संगणक मर्म',
    title: 'INTELLIGENCE',
    category: 'technological',
    cropId: 'ai-processor',
    cropSrc: '/crops/ai-processor.png',
    shortDesc: 'Represents computation, algorithms and artificial intelligence.',
    fullDesc: 'Held aloft by the upper cybernetic arm, the glowing AI chip represents modern humanity\'s highest engineering achievement. Deep nanometer logic gates perform billions of mathematical tensor operations each second to discern patterns in data.',
    corePrinciple: 'Mathematical cognitive processing and neural pattern recognition.',
    csAnalogy: 'Deep neural networks, GPU matrix acceleration, and synthetic cognition.',
    accentColor: '#06b6d4'
  },
  {
    id: 'digital-tablet',
    number: 6,
    name: 'DIGITAL TABLET',
    sanskritName: 'ज्ञान फलक',
    title: 'INFORMATION',
    category: 'technological',
    cropId: 'digital-tablet',
    cropSrc: '/crops/digital-tablet.png',
    shortDesc: 'Represents access to knowledge, communication and interaction.',
    fullDesc: 'Cupped in the second mechanical hand, the illuminated slate serves as the portal through which humanity touches digital realities. It synthesizes complex databases into intuitive visual interfaces for learning and creation.',
    corePrinciple: 'Interactive knowledge democratization and human-computer symbiosis.',
    csAnalogy: 'Graphical user interfaces, touch telemetry, and semantic interaction layers.',
    accentColor: '#38bdf8'
  },
  {
    id: 'cloud-database',
    number: 7,
    name: 'CLOUD DATABASE',
    sanskritName: 'मेघ भण्डार',
    title: 'CONNECTIVITY',
    category: 'technological',
    cropId: 'cloud-database',
    cropSrc: '/crops/cloud-database.png',
    shortDesc: 'Represents digital infrastructure, connected information and collective knowledge.',
    fullDesc: 'Floating weightlessly with glowing stacked disc platters, the cloud database embodies humanity\'s decentralized global memory. It links billions of devices across continents into a cohesive, fault-tolerant network of shared insight.',
    corePrinciple: 'Ubiquitous connectivity and persistent collective memory.',
    csAnalogy: 'Distributed database clusters, distributed consensus, and global content delivery fabrics.',
    accentColor: '#60a5fa'
  },
  {
    id: 'holographic-cube',
    number: 8,
    name: 'HOLOGRAPHIC CUBE',
    sanskritName: 'त्रिविम संजाल',
    title: 'DIGITAL ARCHITECTURE',
    category: 'technological',
    cropId: 'holographic-cube',
    cropSrc: '/crops/holographic-cube.png',
    shortDesc: 'Represents logic, programming, structure and computational systems.',
    fullDesc: 'Resting in the lowest articulated gripper, the glowing isometric hypercube manifests pure algorithmic geometry. It visualizes multi-dimensional data arrays, cryptographic trees, and the rigorous mathematical structures beneath software.',
    corePrinciple: 'Spatial logic, structural discipline, and computational geometry.',
    csAnalogy: 'Multidimensional array tensors, Merkle trees, and spatial computing environments.',
    accentColor: '#818cf8'
  }
];

// ── 4 BILATERAL HAND PAIRS (ALL 8 TOOLS HELD BY MAA DURGA & DIGITAL SHAKTI) ─
export const HAND_PAIR_RELATIONS: HandPairRelation[] = [
  {
    id: 'hand-tier-1',
    handLevel: 'HAND LEVEL 1 · TOPMOST ARMS',
    handSubtitle: 'Pair 1 of 4 (Apex Arms)',
    pairTitle: 'SACRED TRISHUL ⇌ AI NEURAL PROCESSOR',
    synthesisTheme: 'Sovereignty, Will & Cognitive Inference',
    iconName: 'Shield',
    traditional: {
      toolName: 'Sacred Trishul (Trident)',
      sanskritName: 'त्रिशूल',
      handLocation: 'Upper Left Arm (Maa Durga)',
      cropSrc: '/crops/trishul.png',
      archetypeRole: 'Divine Will, Discernment & Transcendence',
      spiritualOrTechMeaning: 'The three-pronged spear of cosmic balance, cutting cleanly through illusion (Maya), ignorance (Avidya), and egotism (Ahamkara). It represents absolute sovereignty over the three Gunas (Sattva, Rajas, and Tamas).',
      symbolism: 'Divine authority piercing chaos to uphold moral integrity and universal order.',
      accentColor: '#f59e0b'
    },
    technological: {
      toolName: 'AI Neural Processor',
      sanskritName: 'संगणक मर्म',
      handLocation: 'Upper Right Arm (Digital Shakti)',
      cropSrc: '/crops/ai-processor.png',
      archetypeRole: 'Deep Tensor Inference & Pattern Recognition',
      spiritualOrTechMeaning: 'The monolithic silicon microprocessor with glowing "AI" die and interconnect traces. Deep nanometer logic gates perform trillions of matrix tensor calculations each second to extract meaningful truth from raw stochastic noise.',
      symbolism: 'Silicon alchemy: sand transformed through mathematical logic into synthetic cognitive capability.',
      accentColor: '#06b6d4'
    },
    convergenceEquation: 'DISCERNMENT & PRUNING ⟷ SEPARATING SIGNAL FROM NOISE',
    philosophicalSynthesis: 'Both instruments function as the supreme arbiters of truth within their respective realms. The Trishul pierces cognitive illusion to reveal transcendent reality; the AI processor applies loss minimization and gradient descent to eliminate noise, isolating optimal signal.',
    runtimeAnalogy: 'Fault-tolerant exception boundaries, cybersecurity guardrails, and neural inference engines.'
  },
  {
    id: 'hand-tier-2',
    handLevel: 'HAND LEVEL 2 · UPPER-MIDDLE ARMS',
    handSubtitle: 'Pair 2 of 4 (Communication Arms)',
    pairTitle: 'SACRED SHANKHA ⇌ DIGITAL INTERACTIVE TABLET',
    synthesisTheme: 'Universal Broadcast & Interactive Interface',
    iconName: 'Radio',
    traditional: {
      toolName: 'Sacred Shankha (Conch Shell)',
      sanskritName: 'शंख',
      handLocation: 'Second Left Arm (Maa Durga)',
      cropSrc: '/crops/shankha.png',
      archetypeRole: 'Primordial Sound (Om) & Consciousness Awakening',
      spiritualOrTechMeaning: 'The spiraling sacred conch blown to inaugurate auspicious transformations. Its acoustic wave echoes the primordial syllable Om (Pranava), shattering mental inertia and awakening the soul to divine clarity.',
      symbolism: 'The cosmic megaphone broadcasting divine law and spiritual resonance across creation.',
      accentColor: '#f97316'
    },
    technological: {
      toolName: 'Digital Interactive Tablet',
      sanskritName: 'ज्ञान फलक',
      handLocation: 'Second Right Arm (Digital Shakti)',
      cropSrc: '/crops/digital-tablet.png',
      archetypeRole: 'Human-Machine Interface & Information Access',
      spiritualOrTechMeaning: 'The illuminated glass capacitive slate held in the second robotic hand, serving as the portal through which human consciousness touches digital memory, democratic knowledge libraries, and collaborative telemetry.',
      symbolism: 'The contemporary slate where modern civilization encodes, queries, and transmits ideas.',
      accentColor: '#38bdf8'
    },
    convergenceEquation: 'PRIMORDIAL RESONANCE ⟷ REAL-TIME INTERACTION',
    philosophicalSynthesis: 'Sound waves and digital capacitive displays are complementary mediums of transmission. The conch propagates acoustic resonance that vibrates the cosmos into conscious awareness; the digital tablet captures and projects visual-tactile data, democratizing knowledge globally.',
    runtimeAnalogy: 'Network signaling, event message buses, reactive user interface dispatchers, and websocket broadcasts.'
  },
  {
    id: 'hand-tier-3',
    handLevel: 'HAND LEVEL 3 · LOWER-MIDDLE ARMS',
    handSubtitle: 'Pair 3 of 4 (Equilibrium Arms)',
    pairTitle: 'SUDARSHANA CHAKRA ⇌ CLOUD DATABASE',
    synthesisTheme: 'Dynamic Cyclic Order & Distributed Memory',
    iconName: 'RefreshCw',
    traditional: {
      toolName: 'Sudarshana Chakra (Cosmic Discus)',
      sanskritName: 'सुदर्शन चक्र',
      handLocation: 'Third Left Arm (Maa Durga)',
      cropSrc: '/crops/sudarshana-chakra.png',
      archetypeRole: 'Cosmic Law (Rita) & Eternal Wheel of Time',
      spiritualOrTechMeaning: 'The radiant golden disk spinning perpetually on the raised index finger, emitting kinetic waves of cosmic order. It embodies the relentless cycle of time (Kala Chakra) that maintains universal equilibrium.',
      symbolism: 'Centrifugal energy that destroys disharmony and sustains cosmic homeostasis.',
      accentColor: '#eab308'
    },
    technological: {
      toolName: 'Cloud Database Architecture',
      sanskritName: 'मेघ भण्डार',
      handLocation: 'Third Right Arm (Digital Shakti)',
      cropSrc: '/crops/cloud-database.png',
      archetypeRole: 'Distributed Consensus & Persistent Storage',
      spiritualOrTechMeaning: 'The glowing tiered database platters enclosed in a cyan cloud contour. It embodies decentralized cloud storage, continuous replication, and high-availability collective memory across distributed geographical regions.',
      symbolism: 'The collective memory of humanity: immutable, decentralized, and accessible across physical borders.',
      accentColor: '#60a5fa'
    },
    convergenceEquation: 'ETERNAL CYCLIC BALANCE ⟷ DISTRIBUTED STATE CONSENSUS',
    philosophicalSynthesis: 'Cosmic order is not static; it is preserved through continuous cyclic synchronization. The Sudarshana Chakra maintains order through unrelenting rotational momentum; modern cloud infrastructure achieves state integrity through continuous replication loops (Raft, Paxos).',
    runtimeAnalogy: 'The operating system kernel scheduler, event loop tick, distributed transaction logs, and global database fabrics.'
  },
  {
    id: 'hand-tier-4',
    handLevel: 'HAND LEVEL 4 · LOWEST FOUNDATION ARMS',
    handSubtitle: 'Pair 4 of 4 (Genesis Arms)',
    pairTitle: 'SACRED LOTUS (PADMA) ⇌ HOLOGRAPHIC CUBE',
    synthesisTheme: 'Transcendent Genesis & Geometric Logic',
    iconName: 'Sparkles',
    traditional: {
      toolName: 'Sacred Pink Lotus (Padma)',
      sanskritName: 'पद्म',
      handLocation: 'Lowest Left Arm (Maa Durga)',
      cropSrc: '/crops/lotus.png',
      archetypeRole: 'Purity, Generative Fertility & Self-Realization',
      spiritualOrTechMeaning: 'The fresh pink blossom held gracefully in the foundation hand. Though rooted in the murky mud of worldly existence, its pristine petals remain immaculate, symbolizing transcendental creation and the unfolding of spiritual awareness.',
      symbolism: 'Organic beauty, pure uncorrupted emergence, and spiritual detachment.',
      accentColor: '#f43f5e'
    },
    technological: {
      toolName: 'Holographic Data Cube',
      sanskritName: 'त्रिविम संजाल',
      handLocation: 'Lowest Right Arm (Digital Shakti)',
      cropSrc: '/crops/holographic-cube.png',
      archetypeRole: 'Spatial Computing, Cryptographic Logic & Dimensional Architecture',
      spiritualOrTechMeaning: 'The glowing isometric hypercube cupped in the lowest articulated gripper. It visualizes multi-dimensional data arrays, cryptographic Merkle trees, and the rigorous mathematical matrices underpinning modern software.',
      symbolism: 'Pure mathematical logic translated into structured dimensional space; the crystal lattice of computation.',
      accentColor: '#818cf8'
    },
    convergenceEquation: 'ORGANIC EMERGENCE ⟷ RIGOROUS SPATIAL ARCHITECTURE',
    philosophicalSynthesis: 'Beauty and structure emerge from fundamental principles. The lotus illustrates how sublime biological grace blossoms effortlessly from chaotic primordial mud; the holographic cube reveals how complex dimensional realities arise from simple, elegant binary logic.',
    runtimeAnalogy: 'Multi-dimensional tensor coordinates, spatial computing viewports, functional programming abstractions, and cryptographic blocks.'
  }
];

// Flat relation array for quick lookup and backward compatibility
export const CS_RELATIONS: CsRelation[] = [
  {
    traditionalConcept: 'SACRED TRISHUL',
    csConcept: 'CONTROL, SECURITY & AI PRUNING',
    iconName: 'Shield',
    symbolCrop: '/crops/trishul.png',
    traditionalMeaning: 'Held in the uppermost left hand: The three-pronged spear piercing illusion (Maya) and subduing negative forces across the three realms.',
    computationalMeaning: 'Paired with AI Neural Processor: Cryptographic access control, runtime invariant verification, and loss-minimization pruning in deep learning.',
    philosophicalSynthesis: 'Power without protective guardrails and sharp discernment leads to systemic breakdown; both traditions establish integrity as foundational.'
  },
  {
    traditionalConcept: 'SACRED SHANKHA',
    csConcept: 'COMMUNICATION & NETWORK SIGNAL',
    iconName: 'Radio',
    symbolCrop: '/crops/shankha.png',
    traditionalMeaning: 'Held in the second left hand: The acoustic conch whose resonance dispels inertia and heralds righteous intent across the cosmos.',
    computationalMeaning: 'Paired with Digital Interactive Tablet: Packet broadcast protocols, optical pulses, and capacitive tactile interfaces linking nodes across networks.',
    philosophicalSynthesis: 'Sound and digital touch are both transmissions of modulated information designed to awaken and coordinate distant conscious minds.'
  },
  {
    traditionalConcept: 'SUDARSHANA CHAKRA',
    csConcept: 'CORE SYSTEM & RUNTIME ORDER',
    iconName: 'RefreshCw',
    symbolCrop: '/crops/sudarshana-chakra.png',
    traditionalMeaning: 'Held in the third left hand: The spinning disc of cosmic law (Rita) and eternal time (Kala), preserving equilibrium through constant rotation.',
    computationalMeaning: 'Paired with Cloud Database: The OS kernel scheduler, CPU system clock, and distributed state consensus engines (Raft / Paxos) maintaining global order.',
    philosophicalSynthesis: 'Order is not static rigidity; it is dynamic, continuous cyclic synchronization across billions of moving parts.'
  },
  {
    traditionalConcept: 'SACRED LOTUS (PADMA)',
    csConcept: 'CREATION, SYNTHESIS & SPATIAL GEOMETRY',
    iconName: 'Sparkles',
    symbolCrop: '/crops/lotus.png',
    traditionalMeaning: 'Held in the lowest left hand: The immaculate blossom that emerges from murky depths to bloom untouched by impurity.',
    computationalMeaning: 'Paired with Holographic Data Cube: Spatial 3D matrices, recursive functional synthesis, generative model architectures, and clean abstraction layers.',
    philosophicalSynthesis: 'Complex, elegant solutions naturally unfold from simple foundational rules without retaining the messy entropy of their origins.'
  },
  {
    traditionalConcept: 'AI NEURAL PROCESSOR',
    csConcept: 'COMPUTATIONAL INTELLIGENCE',
    iconName: 'Cpu',
    symbolCrop: '/crops/ai-processor.png',
    traditionalMeaning: 'Held in the uppermost right robotic hand: Counterpart to the Trishul, embodying Buddhi (intellect) cast in crystalline semiconductor matrices.',
    computationalMeaning: 'Massively parallel matrix tensor processing units, GPU tensor cores, and deep neural inference engines.',
    philosophicalSynthesis: 'The human quest to formalize reasoning through silicon echoes the ancient pursuit of mapping the sovereign operations of consciousness.'
  },
  {
    traditionalConcept: 'DIGITAL INTERACTIVE TABLET',
    csConcept: 'TACTILE INTERFACE & INFORMATION DEMOCRATIZATION',
    iconName: 'Box',
    symbolCrop: '/crops/digital-tablet.png',
    traditionalMeaning: 'Held in the second right robotic hand: Counterpart to the Shankha, the modern slate upon which humanity encodes, visualizes, and queries knowledge.',
    computationalMeaning: 'Capacitive touch telemetry, responsive graphical user interfaces, and democratic worldwide web access.',
    philosophicalSynthesis: 'The digital screen succeeds the palm leaf manuscript as the global medium where wisdom is transmitted to future generations.'
  },
  {
    traditionalConcept: 'CLOUD DATABASE ARCHITECTURE',
    csConcept: 'DISTRIBUTED CONSENSUS & COLLECTIVE KNOWLEDGE',
    iconName: 'Cloud',
    symbolCrop: '/crops/cloud-database.png',
    traditionalMeaning: 'Held in the third right robotic hand: Counterpart to the Sudarshana Chakra, mirroring the Akasha (etheric field) wherein all knowledge exists.',
    computationalMeaning: 'Globally distributed database clusters, zero-loss replication fabrics, and decentralized cloud infrastructure.',
    philosophicalSynthesis: 'Decentralized knowledge storage demonstrates that collective wisdom transcends the physical storage constraints of any single machine.'
  },
  {
    traditionalConcept: 'HOLOGRAPHIC DATA CUBE',
    csConcept: 'DIGITAL ARCHITECTURE & MULTI-DIMENSIONAL LOGIC',
    iconName: 'Box',
    symbolCrop: '/crops/holographic-cube.png',
    traditionalMeaning: 'Held in the lowest right robotic hand: Counterpart to the Lotus, the silicon Yantra structuring invisible laws into visible geometry.',
    computationalMeaning: 'High-dimensional tensor coordinate manifolds, spatial VR/AR computing viewports, and cryptographic Merkle tree hashes.',
    philosophicalSynthesis: 'Geometry is the universal language through which both sacred Vedic diagrams and digital computers construct coherent worlds.'
  }
];
