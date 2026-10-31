import React from 'react';
import { X, ZoomIn, Info, Shield, Cpu } from 'lucide-react';
import { CropItem } from '../types/exhibition';

interface CropLightboxModalProps {
  crop: CropItem | null;
  onClose: () => void;
}

export const CropLightboxModal: React.FC<CropLightboxModalProps> = ({ crop, onClose }) => {
  if (!crop) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: High-Resolution Crop Visual Frame */}
        <div className="relative md:w-3/5 bg-black/60 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-stone-800/80 overflow-hidden">
          <img
            src={crop.src}
            alt={crop.name}
            className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-3 left-4 text-[10px] font-mono tracking-wider text-stone-500 uppercase">
            ORIGINAL CROP · {crop.width} × {crop.height} PX
          </div>
        </div>

        {/* Right: Curatorial Detail & Philosophical Breakdown */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                {crop.category}
              </span>
              <span className="text-stone-600">·</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                {crop.traditionOrTech}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">
              {crop.name}
            </h3>

            <p className="text-xs md:text-sm text-stone-300 leading-relaxed mb-6">
              {crop.description}
            </p>

            {crop.spiritualMeaning && (
              <div className="mb-4 p-3 rounded-lg bg-amber-950/20 border border-amber-900/40">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Sacred Spiritual Signification</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {crop.spiritualMeaning}
                </p>
              </div>
            )}

            {crop.techMeaning && (
              <div className="mb-4 p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/40">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Technological Counterpart</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {crop.techMeaning}
                </p>
              </div>
            )}

            {crop.symbolism && (
              <div className="p-3 rounded-lg bg-stone-900/40 border border-stone-800">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-wider mb-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>Iconography & Aesthetics</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {crop.symbolism}
                </p>
              </div>
            )}
          </div>

          <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
            <span>PROVENANCE: ABSTRACT SHAKTI</span>
            <span>100% UNEDITED CROP</span>
          </div>
        </div>
      </div>
    </div>
  );
};
