import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImagePath = './public/assets/aistudio/image_705197c8.png';
const outputDir = './public/crops';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1254 x 1254 source image
// Exactly 15 items:
// 1 Full composition
// 7 Traditional side (left: x <= 626)
// 7 Digital Shakti side (right: x >= 628)
const crops = [
  // ── 1. FULL COMPOSITION ──────────────────────────────────────────────────
  {
    id: 'complete-rangoli',
    name: 'Complete Rangoli Composition',
    category: 'Full Masterpiece',
    box: { left: 0, top: 0, width: 1254, height: 1254 },
    description: 'The monumental dual-sided sacred square rangoli, uniting Maa Durga and the Digital Shakti in harmonic Advaita symmetry.'
  },

  // ── 7 TRADITIONAL CROPS (Left Side: x <= 626) ───────────────────────────
  {
    id: 'traditional-side',
    name: 'Maa Durga Full Realm',
    category: 'Sacred Tradition',
    box: { left: 0, top: 0, width: 627, height: 1254 },
    description: 'The complete left half of the rangoli canvas — Maa Durga\'s sacred realm with all four arms holding the Trishul, Shankha, Sudarshana Chakra, and pink Lotus.'
  },
  {
    id: 'golden-mukut',
    name: 'Traditional Golden Mukut',
    category: 'Sacred Regalia',
    box: { left: 260, top: 40, width: 366, height: 430 },
    description: 'The tiered golden crown adorned with sacred concentric halos, ruby and amber gemstones, representing transcendent cosmic sovereignty (Dharma).'
  },
  {
    id: 'durga-face',
    name: 'Maa Durga Face',
    category: 'Sacred Divinity',
    box: { left: 260, top: 440, width: 366, height: 420 },
    description: 'The serene, compassionate gaze of Maa Durga featuring the sacred eye of unbroken consciousness, vermillion tilak, and golden jhumka earring.'
  },
  {
    id: 'trishul',
    name: 'Sacred Trishul (Trident)',
    category: 'Sacred Emblem',
    box: { left: 40, top: 150, width: 310, height: 300 },
    description: 'The three-pronged spear held in the top hand, symbolizing divine control over the three Gunas (Sattva, Rajas, Tamas) and triadic cosmic balance.'
  },
  {
    id: 'shankha',
    name: 'Sacred Shankha (Conch)',
    category: 'Sacred Emblem',
    box: { left: 40, top: 410, width: 310, height: 280 },
    description: 'The pure white ritual conch shell echoing the cosmic vibration of Om, heralding righteous action, spiritual awakening, and universal broadcast.'
  },
  {
    id: 'sudarshana-chakra',
    name: 'Golden Sudarshana Chakra',
    category: 'Sacred Emblem',
    box: { left: 40, top: 610, width: 310, height: 260 },
    description: 'The radiant golden spinning disc rotating above the divine index finger, maintaining relentless cosmic law (Rita) and eternal equilibrium.'
  },
  {
    id: 'lotus',
    name: 'Sacred Pink Lotus (Padma)',
    category: 'Sacred Emblem',
    box: { left: 40, top: 850, width: 310, height: 290 },
    description: 'The pristine blossom unfolding gracefully in the lowest hand, epitomizing spiritual purity blooming untarnished through worldly existence.'
  },

  // ── 7 DIGITAL SHAKTI CROPS (Right Side: x >= 628) ───────────────────────
  {
    id: 'tech-side',
    name: 'Digital Shakti Full Realm',
    category: 'Digital Shakti',
    box: { left: 627, top: 0, width: 627, height: 1254 },
    description: 'The complete right half of the rangoli canvas — the Digital Shakti\'s domain wielding the AI Neural Processor, Digital Tablet, Cloud Database, and Holographic Cube.'
  },
  {
    id: 'tech-crown',
    name: 'Digital Shakti Crown',
    category: 'Digital Regalia',
    box: { left: 628, top: 40, width: 366, height: 430 },
    description: 'The luminous cybernetic crown of the Digital Shakti — geometric circuit halos, pulsing neon conduits, and fractal data architecture mirroring the sacred Mukut.'
  },
  {
    id: 'ai-goddess-face',
    name: 'Digital Shakti Face',
    category: 'Digital Divinity',
    box: { left: 628, top: 440, width: 366, height: 420 },
    description: 'The cybernetic facial topography displaying luminous algorithmic circuitry, synthetic cyan iris, integrated audio-frequency comm-node, and data-bus conduits.'
  },
  {
    id: 'ai-processor',
    name: 'AI Neural Processor',
    category: 'Technological Emblem',
    box: { left: 880, top: 160, width: 330, height: 270 },
    description: 'The monolithic silicon microprocessor with glowing "AI" die and interconnect traces held aloft by the top robotic arm, symbolizing neural computation.'
  },
  {
    id: 'digital-tablet',
    name: 'Digital Interactive Tablet',
    category: 'Technological Emblem',
    box: { left: 880, top: 480, width: 330, height: 270 },
    description: 'The sleek glass capacitive slate held in the second robotic hand, cleanly centered without upper arm bleed, symbolizing human-computer symbiosis.'
  },
  {
    id: 'cloud-database',
    name: 'Cloud Database Architecture',
    category: 'Technological Emblem',
    box: { left: 880, top: 700, width: 330, height: 260 },
    description: 'The cyan cloud contour enclosing tiered cylindrical database platters, cleanly cupped in the third robotic hand, signifying persistent global memory.'
  },
  {
    id: 'holographic-cube',
    name: 'Holographic Data Cube',
    category: 'Technological Emblem',
    box: { left: 880, top: 890, width: 330, height: 270 },
    description: 'The multidimensional neon hypercube cupped in the lowest articulated gripper, perfectly framed, symbolizing spatial computing and cryptographic structure.'
  },

  // ── CENTRAL BILATERAL MERIDIAN (Aligned exactly to master seam x=621) ────
  {
    id: 'central-division',
    name: 'Central Bilateral Meridian',
    category: 'Sacred Interface',
    box: { left: 501, top: 50, width: 240, height: 1154 },
    description: 'The exact bilateral boundary axis where the vermillion Maa Durga face meets the cyan Digital Shakti face, centered down through the bindi and lips.'
  }
];

async function generateAllCrops() {
  console.log('Generating high-resolution crops from original rangoli image...');
  const metadataList = [];

  const inputMeta = await sharp(inputImagePath).metadata();
  const imgW = inputMeta.width ?? 1254;
  const imgH = inputMeta.height ?? 1254;
  console.log(`Source image: ${imgW}x${imgH}`);

  for (const crop of crops) {
    const filename = `${crop.id}.png`;
    const outputPath = path.join(outputDir, filename);

    const left = Math.max(0, Math.min(crop.box.left, imgW - 1));
    const top = Math.max(0, Math.min(crop.box.top, imgH - 1));
    const width = Math.min(crop.box.width, imgW - left);
    const height = Math.min(crop.box.height, imgH - top);

    await sharp(inputImagePath)
      .extract({ left, top, width, height })
      .toFile(outputPath);

    metadataList.push({
      ...crop,
      src: `/crops/${filename}`,
      width,
      height,
    });
    console.log(`Generated crop: ${crop.name} -> ${filename} (${width}x${height})`);
  }

  fs.writeFileSync('./src/data/cropsData.json', JSON.stringify(metadataList, null, 2));
  console.log('Saved 15 crops metadata to src/data/cropsData.json');
}

generateAllCrops().catch(console.error);
