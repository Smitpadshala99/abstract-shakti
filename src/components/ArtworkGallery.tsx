import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Move, Sparkles } from 'lucide-react';
import { EXHIBITION_CROPS, ORIGINAL_RANGOLI_IMAGE } from '../data/exhibitionData';
import { CropItem } from '../types/exhibition';
import { CropLightboxModal } from './CropLightboxModal';

type SectorKey = 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export const ArtworkGallery: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDetailGridOpen, setIsDetailGridOpen] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCrop, setSelectedCrop] = useState<CropItem | null>(null);
  
  // Hover loupe position in 1X mode (0 to 100%)
  const [lensPos, setLensPos] = useState<{ x: number; y: number } | null>(null);

  // Pan offset in zoomed mode (-50% to +50%)
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; initialPanX: number; initialPanY: number }>({
    x: 0,
    y: 0,
    initialPanX: 0,
    initialPanY: 0,
  });

  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Reset pan when returning to 1X
  useEffect(() => {
    if (zoomLevel === 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [zoomLevel]);

  // Sector Quick Jumps (Corners & Center)
  const jumpToSector = (sector: SectorKey) => {
    const maxPan = ((zoomLevel - 1) / zoomLevel) * 45; // boundary in percentage
    switch (sector) {
      case 'top-left':
        setPan({ x: maxPan, y: maxPan });
        break;
      case 'top-right':
        setPan({ x: -maxPan, y: maxPan });
        break;
      case 'bottom-left':
        setPan({ x: maxPan, y: -maxPan });
        break;
      case 'bottom-right':
        setPan({ x: -maxPan, y: -maxPan });
        break;
      case 'center':
      default:
        setPan({ x: 0, y: 0 });
        break;
    }
  };

  // Mouse Move: Follows cursor in 1X (loupe) and automatically pans towards corners in zoomed mode
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = imageContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (zoomLevel === 1) {
      setLensPos({ x, y });
    } else if (isDragging) {
      // Active drag panning
      const deltaX = ((e.clientX - dragStartRef.current.x) / rect.width) * 100;
      const deltaY = ((e.clientY - dragStartRef.current.y) / rect.height) * 100;
      const maxPan = ((zoomLevel - 1) / zoomLevel) * 50;

      const newPanX = Math.max(-maxPan, Math.min(maxPan, dragStartRef.current.initialPanX + deltaX));
      const newPanY = Math.max(-maxPan, Math.min(maxPan, dragStartRef.current.initialPanY + deltaY));
      setPan({ x: newPanX, y: newPanY });
    } else {
      // Gentle hover edge steering: moving cursor towards an edge smoothly draws that corner into view
      const maxPan = ((zoomLevel - 1) / zoomLevel) * 45;
      const normX = (x - 50) / 50; // -1 to +1
      const normY = (y - 50) / 50; // -1 to +1

      // Subtle reactive pan that leaves room for drag
      setPan(prev => ({
        x: prev.x * 0.7 + (-normX * maxPan) * 0.3,
        y: prev.y * 0.7 + (-normY * maxPan) * 0.3,
      }));
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialPanX: pan.x,
      initialPanY: pan.y,
    };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setLensPos(null);
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (zoomLevel <= 1 || e.touches.length === 0) return;
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      initialPanX: pan.x,
      initialPanY: pan.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || zoomLevel <= 1 || e.touches.length === 0) return;
    const touch = e.touches[0];
    const container = imageContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    const deltaX = ((touch.clientX - dragStartRef.current.x) / rect.width) * 100;
    const deltaY = ((touch.clientY - dragStartRef.current.y) / rect.height) * 100;
    const maxPan = ((zoomLevel - 1) / zoomLevel) * 50;

    const newPanX = Math.max(-maxPan, Math.min(maxPan, dragStartRef.current.initialPanX + deltaX));
    const newPanY = Math.max(-maxPan, Math.min(maxPan, dragStartRef.current.initialPanY + deltaY));
    setPan({ x: newPanX, y: newPanY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const filteredCrops = EXHIBITION_CROPS.filter(crop => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'traditional') return crop.traditionOrTech === 'traditional';
    if (activeCategory === 'technological') return crop.traditionOrTech === 'technological';
    return true;
  });

  return (
    <section id="artwork" className="relative py-24 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#04060d] border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        {/* Curatorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border bg-stone-900/80 text-amber-300 border-amber-500/40 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>GIGAPIXEL REPRODUCTION & MACRO INSPECTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            THE COMPLETE ARTWORK
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Examine the original high-resolution master rangoli. Inspect microscopic pigment grain, natural mineral powders, and circuit line integrity with interactive magnification, then explore the 15 authentic detail crops below.
          </p>
        </div>

        {/* Master Artwork Viewport with Interactive Zoom & Pan */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative rounded-2xl bg-stone-950 p-3 sm:p-5 border border-stone-800 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Zoom Controls Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-stone-400 uppercase tracking-widest hidden sm:inline">
                  MAGNIFICATION:
                </span>
                <span className="text-amber-300 font-bold">
                  {zoomLevel.toFixed(1)}X
                </span>
                {zoomLevel > 1 && (
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40 hidden md:inline-flex items-center gap-1">
                    <Move className="w-3 h-3" /> Drag / Hover to pan corners
                  </span>
                )}
              </div>

              {/* Magnification Preset Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => { setZoomLevel(1); setPan({ x: 0, y: 0 }); }}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    zoomLevel === 1 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  1X (Fit)
                </button>
                <button
                  onClick={() => setZoomLevel(1.8)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    zoomLevel === 1.8 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  1.8X (Inspect)
                </button>
                <button
                  onClick={() => setZoomLevel(2.5)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    zoomLevel === 2.5 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'text-stone-400 hover:text-white'
                  }`}
                >
                  2.5X (Macro)
                </button>

                <div className="h-4 w-[1px] bg-stone-800 mx-1" />

                {/* Fine Zoom Step Buttons */}
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.4, 3.2))}
                  aria-label="Zoom in"
                  className="p-1.5 hover:text-white bg-stone-900 rounded border border-stone-800 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.4, 1))}
                  aria-label="Zoom out"
                  className="p-1.5 hover:text-white bg-stone-900 rounded border border-stone-800 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={() => setPan({ x: 0, y: 0 })}
                    aria-label="Reset pan"
                    className="p-1.5 hover:text-amber-300 bg-stone-900 rounded border border-stone-800 transition-colors"
                    title="Center View"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Corner / Sector Quick Jumper Toolbar (Active when Zoomed) */}
            {zoomLevel > 1 && (
              <div className="mb-3 flex items-center justify-between gap-2 overflow-x-auto pb-1 text-[11px] font-mono select-none">
                <span className="text-stone-500 shrink-0">CORNER JUMP:</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => jumpToSector('top-left')}
                    className="px-2 py-0.5 rounded bg-stone-900 hover:bg-amber-950/40 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-200 transition-colors"
                  >
                    ↖ Trishul & Mukut
                  </button>
                  <button
                    onClick={() => jumpToSector('top-right')}
                    className="px-2 py-0.5 rounded bg-stone-900 hover:bg-cyan-950/40 border border-stone-800 hover:border-cyan-500/50 text-stone-300 hover:text-cyan-200 transition-colors"
                  >
                    ↗ AI Chip & Crown
                  </button>
                  <button
                    onClick={() => jumpToSector('center')}
                    className="px-2 py-0.5 rounded bg-stone-900 hover:bg-stone-800 border border-stone-800 text-amber-300 transition-colors"
                  >
                    ⦿ Facial Seam
                  </button>
                  <button
                    onClick={() => jumpToSector('bottom-left')}
                    className="px-2 py-0.5 rounded bg-stone-900 hover:bg-amber-950/40 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-200 transition-colors"
                  >
                    ↙ Lotus & Chakra
                  </button>
                  <button
                    onClick={() => jumpToSector('bottom-right')}
                    className="px-2 py-0.5 rounded bg-stone-900 hover:bg-cyan-950/40 border border-stone-800 hover:border-cyan-500/50 text-stone-300 hover:text-cyan-200 transition-colors"
                  >
                    ↘ Cloud & Cube
                  </button>
                </div>
              </div>
            )}

            {/* Interactive Image Frame */}
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`relative w-full aspect-square rounded-xl overflow-hidden bg-[#04060d] select-none border border-stone-800/80 ${
                zoomLevel > 1
                  ? isDragging
                    ? 'cursor-grabbing'
                    : 'cursor-grab'
                  : 'cursor-crosshair'
              }`}
            >
              {/* Dynamic Zoomed & Panned Artwork Container */}
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
                style={{
                  transform: `scale(${zoomLevel}) translate(${pan.x}%, ${pan.y}%)`,
                }}
              >
                <img
                  src={ORIGINAL_RANGOLI_IMAGE}
                  alt="Original Abstract Shakti Rangoli Masterpiece"
                  className="max-w-full max-h-full object-contain pointer-events-none select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Magnifying Loupe Overlay when in 1X mode */}
              {lensPos && zoomLevel === 1 && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.6)] hidden md:block"
                  style={{
                    width: '180px',
                    height: '180px',
                    top: `${lensPos.y}%`,
                    left: `${lensPos.x}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `url(${ORIGINAL_RANGOLI_IMAGE})`,
                    backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
                    backgroundSize: '850%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {/* Loupe Crosshair and Center Reticle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border border-white/60 bg-amber-400/30" />
                  </div>
                </div>
              )}

              {/* Subtle Pan Navigation Minimap Indicator (Zoom > 1) */}
              {zoomLevel > 1 && (
                <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-stone-700/80 pointer-events-none flex flex-col items-center gap-1 shadow-lg">
                  <div className="relative w-12 h-12 rounded border border-stone-600 bg-stone-900 overflow-hidden">
                    <img
                      src={ORIGINAL_RANGOLI_IMAGE}
                      alt="Minimap"
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    {/* Active view window box in minimap */}
                    <div
                      className="absolute border border-amber-400 bg-amber-400/20 transition-all duration-75"
                      style={{
                        width: `${100 / zoomLevel}%`,
                        height: `${100 / zoomLevel}%`,
                        left: `${50 - pan.x * (zoomLevel / 100) - (50 / zoomLevel)}%`,
                        top: `${50 - pan.y * (zoomLevel / 100) - (50 / zoomLevel)}%`,
                      }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-stone-400">
                    {zoomLevel.toFixed(1)}X VIEW
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-500 mt-4 px-2 gap-2">
              <span>CANVAS DIMENSIONS: 1254 × 1254 PX (SQUARE CEREMONIAL SANCTUM)</span>
              <span className="text-amber-400/90">
                {zoomLevel > 1 ? 'DRAG OR USE BUTTONS TO INSPECT ANY CORNER' : 'HOVER TO ACTIVATE MACRO LOUPE (DESKTOP)'}
              </span>
            </div>
          </div>
        </div>

        {/* 15 Curated Crops Detail Grid Section */}
        <div className="border-t border-stone-800 pt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                15 CURATED DETAIL CROPS
              </h3>
              <p className="text-xs sm:text-sm text-stone-400">
                Select any quadrant or emblem to view full metaphysical exposition and high-resolution crop.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-stone-950 border border-stone-800 text-xs font-mono">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeCategory === 'all' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-stone-400 hover:text-white'
                }`}
              >
                All (15)
              </button>
              <button
                onClick={() => setActiveCategory('traditional')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeCategory === 'traditional' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-stone-400 hover:text-white'
                }`}
              >
                Vedic (7)
              </button>
              <button
                onClick={() => setActiveCategory('technological')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeCategory === 'technological' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-stone-400 hover:text-white'
                }`}
              >
                Cybernetic (7)
              </button>
            </div>
          </div>

          {/* Crops Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredCrops.map(crop => {
              const isTraditional = crop.traditionOrTech === 'traditional';
              const isConvergant = crop.traditionOrTech === 'convergant';

              return (
                <div
                  key={crop.id}
                  onClick={() => setSelectedCrop(crop)}
                  className={`group relative rounded-xl p-2.5 bg-stone-950/80 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isConvergant
                      ? 'border-purple-800/40 hover:border-purple-400/80 hover:shadow-[0_10px_25px_rgba(168,85,247,0.2)]'
                      : isTraditional
                      ? 'border-amber-900/40 hover:border-amber-400/80 hover:shadow-[0_10px_25px_rgba(245,158,11,0.2)]'
                      : 'border-cyan-900/40 hover:border-cyan-400/80 hover:shadow-[0_10px_25px_rgba(6,182,212,0.2)]'
                  }`}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-black mb-2.5">
                    <img
                      src={crop.src}
                      alt={crop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[9px] font-mono tracking-widest uppercase block ${
                        isConvergant ? 'text-purple-400' : isTraditional ? 'text-amber-400' : 'text-cyan-400'
                      }`}
                    >
                      {crop.category}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {crop.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCrop && (
        <CropLightboxModal
          crop={selectedCrop}
          onClose={() => setSelectedCrop(null)}
        />
      )}
    </section>
  );
};
