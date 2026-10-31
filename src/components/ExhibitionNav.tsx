import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, ChevronDown, Disc, Sparkles } from 'lucide-react';
import { youtubeSoundscape, YOUTUBE_TRACKS, YouTubeTrack } from '../utils/audioSynthesizer';

export const ExhibitionNav: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [activeTrack, setActiveTrack] = useState<YouTubeTrack>(YOUTUBE_TRACKS[0]);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = youtubeSoundscape.subscribe((playing, track, _ready, fullState) => {
      setIsPlaying(playing);
      setActiveTrack(track);
      if (fullState) {
        setIsMuted(fullState.isMuted);
        setIsBuffering(fullState.isBuffering);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSelectorOpen(false);
        setShowCustomInput(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Master Sound On / Off Toggle (Synchronized with bottom player)
  const toggleSound = () => {
    youtubeSoundscape.toggleMasterSound();
  };

  const handleSelectTrack = (track: YouTubeTrack) => {
    youtubeSoundscape.setTrack(track.id);
    setIsSelectorOpen(false);
  };

  const handleAddCustomSong = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      youtubeSoundscape.setCustomYouTubeId(customUrl.trim(), 'Custom YouTube Track');
      setCustomUrl('');
      setShowCustomInput(false);
      setIsSelectorOpen(false);
    }
  };

  const isSoundActive = isPlaying && !isMuted;

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#04060d]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 sm:px-6 md:px-8 py-3 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
      {/* Top Hairline Dual Glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-amber-500/30 via-white/50 to-cyan-500/30" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* ── ELEVATED BRAND IDENTITY WITH SACRED-CYBER LOGO MARK ───────────── */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
          title="Abstract Shakti - Return to Exhibition Home"
        >
          {/* Dual-Nature Emblem (Vedic Flame & Diya Left ⟷ Cyber Circuit Die Right) */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-stone-950 border border-amber-500/40 p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.25)] group-hover:border-amber-400 transition-all duration-300">
            <div className="w-full h-full rounded-[10px] flex overflow-hidden">
              {/* Left Vedic Saffron / Gold Half */}
              <div className="w-1/2 h-full bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 flex items-center justify-center relative">
                {/* Sacred Bindu */}
                <div className="w-2 h-2 rounded-full bg-yellow-100 shadow-[0_0_6px_#fef08a]" />
              </div>
              {/* Right Cyber Cyan Half */}
              <div className="w-1/2 h-full bg-gradient-to-bl from-cyan-400 via-teal-600 to-cyan-800 flex items-center justify-center relative">
                {/* Circuit Node */}
                <div className="w-1.5 h-1.5 rounded-sm bg-white shadow-[0_0_6px_#67e8f9]" />
              </div>
            </div>
            {/* Center Meridian Seam Line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/90 shadow-[0_0_4px_#ffffff]" />
          </div>

          {/* Editorial Title Wordmark */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 font-serif font-bold text-sm sm:text-base md:text-lg tracking-[0.22em] uppercase leading-none">
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-amber-200 transition-all">
                ABSTRACT
              </span>
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-200 transition-all">
                SHAKTI
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-stone-400 uppercase hidden xs:inline">
                अमूर्त शक्ति · VEDIC ART × AI
              </span>
              <span className="text-[9px] font-mono tracking-wider text-amber-400/80 bg-amber-950/40 px-1.5 py-0.2 rounded border border-amber-900/40 hidden md:inline">
                EXHIBITION ARCHIVE
              </span>
            </div>
          </div>
        </a>

        {/* ── DESKTOP CURATORIAL NAV LINKS ─────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-stone-400">
          <a href="#artwork" className="hover:text-amber-300 transition-colors">
            Masterpiece
          </a>
          <a href="#two-worlds" className="hover:text-amber-300 transition-colors">
            Two Worlds
          </a>
          <a href="#symbols" className="hover:text-amber-300 transition-colors">
            8 Emblems
          </a>
          <a href="#computer-science" className="hover:text-cyan-300 transition-colors">
            CS Matrix
          </a>
          <a href="#philosophy" className="hover:text-amber-300 transition-colors">
            Philosophy
          </a>
        </nav>

        {/* ── DEVOTIONAL AUDIO TRANSPORT & PLAYLIST CONTROLS ─────────────────── */}
        <div className="relative flex items-center gap-2 sm:gap-3 shrink-0" ref={dropdownRef}>
          {/* Track Selector Dropdown Button */}
          <button
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 border bg-stone-900/80 text-stone-200 border-stone-700/70 hover:border-amber-500/50 hover:text-amber-300"
            aria-label="Select Sacred Devotional YouTube Track"
          >
            <Music className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden sm:inline max-w-[140px] md:max-w-[180px] truncate text-left">
              {activeTrack.title}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform ${isSelectorOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Master Play/Mute Audio Button (Synchronized with bottom player) */}
          <button
            onClick={toggleSound}
            aria-label={isSoundActive ? 'Turn devotional music OFF' : 'Turn devotional music ON'}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap shrink-0 ${
              isSoundActive
                ? 'bg-amber-950/60 text-amber-300 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                : 'bg-stone-900/60 text-stone-400 border-stone-700/60 hover:text-stone-200 hover:border-stone-500'
            }`}
          >
            {isSoundActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden xs:inline">{isBuffering ? 'Buffering' : 'Sound ON'}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden xs:inline">{isMuted && isPlaying ? 'Muted' : 'Sound OFF'}</span>
              </>
            )}
          </button>

          {/* Dropdown Menu with YouTube Music Options */}
          {isSelectorOpen && (
            <div className="absolute right-0 top-full mt-2 w-92 max-w-[92vw] rounded-xl bg-stone-950/95 backdrop-blur-xl border border-stone-700 shadow-2xl p-2.5 z-50 animate-fade-in max-h-[85vh] overflow-y-auto">
              <div className="px-3 py-2 border-b border-stone-800 text-[11px] font-mono uppercase tracking-widest text-amber-400 flex items-center justify-between">
                <span>SELECT SACRED DEVOTIONAL MUSIC</span>
                <Disc className="w-3.5 h-3.5 animate-spin text-amber-400" style={{ animationDuration: '6s' }} />
              </div>

              <div className="py-2 space-y-1.5">
                {YOUTUBE_TRACKS.map(track => {
                  const isSelected = track.id === activeTrack.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => handleSelectTrack(track)}
                      className={`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-0.5 border ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-200 shadow-sm'
                          : 'bg-transparent border-transparent hover:bg-stone-900 text-stone-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-serif font-bold">
                        <span className="flex items-center gap-2">
                          <Music className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`} />
                          <span className="truncate">{track.title}</span>
                        </span>
                        {isSelected && isPlaying && (
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 uppercase shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>Playing</span>
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-stone-400 truncate pl-5">
                        {track.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom YouTube URL input */}
              <div className="pt-2 border-t border-stone-800">
                {!showCustomInput ? (
                  <button
                    onClick={() => setShowCustomInput(true)}
                    className="w-full py-1.5 px-3 text-[11px] font-mono text-amber-400 hover:text-amber-300 bg-stone-900/60 hover:bg-stone-800 rounded flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>+ Load Custom YouTube Song</span>
                  </button>
                ) : (
                  <form onSubmit={handleAddCustomSong} className="space-y-2 p-1">
                    <input
                      type="text"
                      placeholder="Paste YouTube Video URL or ID"
                      value={customUrl}
                      onChange={e => setCustomUrl(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-black border border-stone-700 rounded text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="submit"
                        className="flex-1 py-1 bg-amber-500 text-stone-950 font-bold text-xs rounded hover:bg-amber-400 transition-colors"
                      >
                        Play Track
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCustomInput(false)}
                        className="py-1 px-2.5 text-xs text-stone-400 hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
