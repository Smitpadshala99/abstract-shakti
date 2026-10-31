export interface CropItem {
  id: string;
  name: string;
  category: string;
  traditionOrTech: 'traditional' | 'technological' | 'convergant' | 'sacred_frame';
  box: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  description: string;
  spiritualMeaning?: string;
  techMeaning?: string;
  symbolism?: string;
  src: string;
  width: number;
  height: number;
}

export interface SymbolCard {
  id: string;
  number: number;
  name: string;
  sanskritName?: string;
  title: string;
  category: 'traditional' | 'technological';
  cropId: string;
  cropSrc: string;
  shortDesc: string;
  fullDesc: string;
  corePrinciple: string;
  csAnalogy: string;
  accentColor: string;
}

export interface CsRelation {
  traditionalConcept: string;
  csConcept: string;
  iconName: string;
  symbolCrop: string;
  traditionalMeaning: string;
  computationalMeaning: string;
  philosophicalSynthesis: string;
}

export interface HandToolDetails {
  toolName: string;
  sanskritName: string;
  handLocation: string; // e.g. "Uppermost Left Hand"
  cropSrc: string;
  archetypeRole: string;
  spiritualOrTechMeaning: string;
  symbolism: string;
  accentColor: string;
}

export interface HandPairRelation {
  id: string;
  handLevel: string; // e.g. "TIER 1 · TOP HANDS"
  handSubtitle: string; // e.g. "Pair 1 of 4"
  pairTitle: string; // e.g. "TRISHUL ⇌ AI PROCESSOR"
  synthesisTheme: string; // e.g. "Sovereign Will & Cognitive Inference"
  iconName: string;
  traditional: HandToolDetails;
  technological: HandToolDetails;
  convergenceEquation: string; // e.g. "DISCERNMENT & PRUNING ⟷ SEPARATING SIGNAL FROM NOISE"
  philosophicalSynthesis: string;
  runtimeAnalogy: string;
}
