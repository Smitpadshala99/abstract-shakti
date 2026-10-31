import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  VolumeX,
  Volume1,
  ListMusic,
  ChevronUp,
  ChevronDown,
  Plus,
  Disc3,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import {
  youtubeSoundscape,
  YouTubeTrack,
  AudioPlaybackState
} from '../utils/audioSynthesizer';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export const FloatingMusicPlayer: React.FC = () => {
  const [playbackState, setPlaybackState] = useState<AudioPlaybackState>(
    youtubeSoundscape.getFullState()
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [scrubValue, setScrubValue] = useState<number>(0);

  const lastScrollY = useRef(0);

  // Subscribe to audio engine updates
  useEffect(() => {
    const unsub = youtubeSoundscape.subscribe((_playing, _track, _ready, fullState) => {
      if (fullState) {
        setPlaybackState(fullState);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  // Auto-collapse to mini pill when scrolling down rapidly, expand when near top
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 600 && currentY > lastScrollY.current + 40 && !isDrawerOpen) {
        setIsMinimized(true);
      } else if (currentY < 200) {
        setIsMinimized(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDrawerOpen]);

  const {
    isPlaying,
    isBuffering,
    currentTrack,
    currentTime,
    duration,
    volume,
    isMuted,
    isRepeat,
    isShuffle,
    playlist
  } = playbackState;

  const currentScrubTime = isScrubbing ? scrubValue : currentTime;
  const effectiveDuration = duration > 0 ? duration : currentTrack.durationSec || 300;
  const progressPercent = effectiveDuration > 0 ? (currentScrubTime / effectiveDuration) * 100 : 0;

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    youtubeSoundscape.toggle();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    youtubeSoundscape.previous();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    youtubeSoundscape.next();
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setScrubValue(val);
  };

  const handleSeekStart = () => {
    setIsScrubbing(true);
    setScrubValue(currentTime);
  };

  const handleSeekEnd = () => {
    setIsScrubbing(false);
    youtubeSoundscape.seekTo(scrubValue);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    youtubeSoundscape.setVolume(Number(e.target.value));
  };

  const handleMuteToggle = () => {
    youtubeSoundscape.toggleMute();
  };

  const handleSelectTrack = (trackId: string) => {
    youtubeSoundscape.setTrack(trackId);
    setIsDrawerOpen(false);
  };

  const handleAddCustomSong = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      youtubeSoundscape.setCustomYouTubeId(
        customInput.trim(),
        customTitle.trim() || 'Custom Devotional Stream'
      );
      setCustomInput('');
      setCustomTitle('');
      setShowAddForm(false);
    }
  };

  return (
    <>
      {/* ── 1. EXPANDABLE PLAYLIST & YOUTUBE STREAM DRAWER ────────────────── */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[94vw] max-w-2xl bg-stone-950/95 border border-amber-500/40 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl p-5 overflow-hidden flex flex-col max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <Disc3 className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <div>
                  <h3 className="text-sm font-serif font-bold text-white tracking-wide">
                    SACRED DEVOTIONAL QUEUE
                  </h3>
                  <p className="text-[11px] font-mono text-stone-400">
                    Mataji Flute, Jay Adhya Shakti, Vishwambhari, Aghori Muzik & Bandish Projekt Dakla
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 hover:border-amber-500/50 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddForm ? 'Hide Adder' : 'Add Custom Song'}</span>
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
                  aria-label="Close playlist drawer"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Optional Custom YouTube Adder Form */}
            {showAddForm && (
              <form onSubmit={handleAddCustomSong} className="mt-4 p-4 rounded-xl bg-stone-900/90 border border-stone-700/80 space-y-3">
                <div className="text-xs font-mono text-amber-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>STREAM ANY YOUTUBE MUSIC URL OR VIDEO ID</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="e.g., https://youtu.be/... or O1iSN1Ie7aY"
                    className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    required
                  />
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="Track Title (Optional)"
                    className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 text-xs font-mono text-stone-400 hover:text-stone-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-mono bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg shadow transition-colors"
                  >
                    Stream Now
                  </button>
                </div>
              </form>
            )}

            {/* Scrollable Playlist Items */}
            <div className="overflow-y-auto mt-3 pr-1 space-y-1.5 max-h-[50vh] divide-y divide-stone-900">
              {playlist.map((track, idx) => {
                const isSelected = track.id === currentTrack.id;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleSelectTrack(track.id)}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between gap-3 transition-all duration-200 group cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/40 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                        : 'hover:bg-stone-900/70 border border-transparent hover:border-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Track index or animated wave */}
                      <span className="w-5 text-center text-xs font-mono text-stone-500">
                        {isSelected && isPlaying ? (
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                        ) : (
                          (idx + 1).toString().padStart(2, '0')
                        )}
                      </span>

                      {/* Mini thumbnail */}
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-stone-700/60 bg-stone-900">
                        <img
                          src={track.thumbnail}
                          alt={track.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Track info */}
                      <div className="min-w-0">
                        <h4
                          className={`text-xs md:text-sm font-semibold truncate ${
                            isSelected ? 'text-amber-300' : 'text-stone-200 group-hover:text-amber-100'
                          }`}
                        >
                          {track.title}
                        </h4>
                        <p className="text-[11px] font-mono text-stone-400 truncate">
                          {track.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] font-mono text-stone-500">
                        {track.duration || 'Stream'}
                      </span>
                      {isSelected && (isPlaying || isBuffering) && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          {isBuffering ? 'Buffering' : 'Now Playing'}
                        </span>
                      )}

                      {/* Direct YouTube Link */}
                      <a
                        href={`https://www.youtube.com/watch?v=${track.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg text-stone-500 hover:text-amber-400 hover:bg-stone-800/80 transition-colors"
                        title="Open on YouTube"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── 2. MINI COLLAPSED FLOATING PILL (Activated when scrolling or toggled) ── */}
      {isMinimized && (
        <div
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-6 right-6 z-40 cursor-pointer flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-2xl bg-stone-950/90 border border-amber-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(245,158,11,0.25)] hover:border-amber-400 transition-all duration-300 group hover:scale-105"
        >
          {/* Animated Glowing Disc */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-amber-500/50 bg-stone-900 flex items-center justify-center">
            <img
              src={currentTrack.thumbnail}
              alt="Artwork"
              className={`w-full h-full object-cover ${isPlaying ? 'animate-spin' : ''}`}
              style={{ animationDuration: '8s' }}
              referrerPolicy="no-referrer"
            />
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border border-amber-400 animate-ping opacity-30" />
            )}
          </div>

          <div className="flex flex-col max-w-[140px] sm:max-w-[180px]">
            <span className="text-xs font-semibold text-amber-200 truncate">
              {currentTrack.title}
            </span>
            <span className="text-[10px] font-mono text-stone-400 truncate">
              {isBuffering
                ? 'Buffering YouTube...'
                : isPlaying
                ? 'Playing Devotional Music'
                : 'Paused · Click to expand'}
            </span>
          </div>

          {/* Quick Play/Pause inside pill */}
          <button
            onClick={handlePlayToggle}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 transition-transform hover:scale-110 shadow"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current translate-x-0.5" />
            )}
          </button>
        </div>
      )}

      {/* ── 3. FULL FLOATING DOCKED MUSIC PLAYER BAR ───────────────────────── */}
      {!isMinimized && (
        <aside
          aria-label="Devotional Music Player"
          className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-2xl bg-stone-950/85 border-t border-amber-500/30 text-amber-100 shadow-[0_-10px_40px_rgba(0,0,0,0.85)] px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300"
        >
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-4">
            {/* ── LEFT SECTION: Track Thumbnail & Meta ────────────────────── */}
            <div className="flex items-center gap-3 w-full md:w-1/4 min-w-0 justify-between md:justify-start">
              <div className="flex items-center gap-3 min-w-0">
                {/* Rotating Album Art Thumbnail */}
                <div
                  className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-stone-900 group cursor-pointer"
                  onClick={() => setIsDrawerOpen(true)}
                  title="Open Playlist"
                >
                  <img
                    src={currentTrack.thumbnail}
                    alt={currentTrack.title}
                    className={`w-full h-full object-cover transition-transform ${
                      isPlaying ? 'scale-105' : 'grayscale-[20%]'
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlay Disc icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <ListMusic className="w-4 h-4 text-amber-300" />
                  </div>
                </div>

                {/* Track Title & Artist */}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-[220px]">
                      {currentTrack.title}
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-stone-400 truncate max-w-[180px] sm:max-w-[220px]">
                    {currentTrack.subtitle}
                  </p>
                </div>
              </div>

              {/* Mobile Minimize Toggle */}
              <button
                onClick={() => setIsMinimized(true)}
                className="md:hidden p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
                title="Collapse to mini pill"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* ── CENTER SECTION: Playback Controls & Timeline Scrubber ───── */}
            <div className="flex flex-col items-center w-full md:w-2/4 max-w-xl">
              {/* Transport Buttons */}
              <div className="flex items-center gap-4 sm:gap-6 mb-1">
                {/* Shuffle Toggle */}
                <button
                  onClick={() => youtubeSoundscape.toggleShuffle()}
                  title={isShuffle ? 'Disable Shuffle' : 'Enable Shuffle'}
                  className={`p-1.5 rounded-full transition-colors ${
                    isShuffle ? 'text-amber-400 bg-amber-500/10' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                {/* Previous Track */}
                <button
                  onClick={handlePrev}
                  title="Previous Track"
                  className="p-1.5 rounded-full text-stone-300 hover:text-amber-300 hover:scale-110 active:scale-95 transition-all"
                >
                  <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </button>

                {/* Main Play / Pause Button with Animated Ring */}
                <div className="relative flex items-center justify-center">
                  {isPlaying && (
                    <div className="absolute -inset-1.5 rounded-full border border-amber-400/60 animate-ping opacity-40 pointer-events-none" />
                  )}
                  <button
                    onClick={handlePlayToggle}
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-stone-950 font-bold transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] ${
                      isPlaying
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400 hover:scale-105'
                        : 'bg-gradient-to-r from-amber-300 to-amber-500 hover:scale-105'
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    )}
                  </button>
                </div>

                {/* Next Track */}
                <button
                  onClick={handleNext}
                  title="Next Track"
                  className="p-1.5 rounded-full text-stone-300 hover:text-amber-300 hover:scale-110 active:scale-95 transition-all"
                >
                  <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </button>

                {/* Repeat / Loop Toggle */}
                <button
                  onClick={() => youtubeSoundscape.toggleRepeat()}
                  title={isRepeat ? 'Disable Repeat' : 'Enable Repeat'}
                  className={`p-1.5 rounded-full transition-colors ${
                    isRepeat ? 'text-amber-400 bg-amber-500/10' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Scrubber Bar & Timestamps */}
              <div className="w-full flex items-center gap-2.5 text-[11px] font-mono text-stone-400 select-none">
                <span className="w-10 text-right text-stone-300">
                  {formatTime(currentScrubTime)}
                </span>

                <div className="relative flex-1 group flex items-center py-1">
                  {/* Progress background bar */}
                  <div className="w-full h-1 sm:h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 rounded-full"
                      style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
                    />
                  </div>

                  {/* Hidden range input for interactive scrubber */}
                  <input
                    type="range"
                    min={0}
                    max={effectiveDuration}
                    step={1}
                    value={currentScrubTime}
                    onChange={handleSeekChange}
                    onMouseDown={handleSeekStart}
                    onTouchStart={handleSeekStart}
                    onMouseUp={handleSeekEnd}
                    onTouchEnd={handleSeekEnd}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    aria-label="Audio timeline scrubber"
                  />
                </div>

                <span className="w-10 text-left text-stone-500">
                  {formatTime(effectiveDuration)}
                </span>
              </div>
            </div>

            {/* ── RIGHT SECTION: Volume & Drawer Controls ─────────────────── */}
            <div className="hidden md:flex items-center justify-end gap-3.5 w-1/4">
              {/* Direct Open in YouTube Link */}
              <a
                href={`https://www.youtube.com/watch?v=${currentTrack.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-stone-400 hover:text-amber-300 transition-colors"
                title={`Open "${currentTrack.title}" in YouTube`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Volume Slider with Mute Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleMuteToggle}
                  className="text-stone-400 hover:text-amber-300 transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : volume < 50 ? (
                    <Volume1 className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-20 h-1 sm:h-1.5 bg-stone-800 rounded-full appearance-none cursor-pointer accent-amber-400"
                  aria-label="Volume slider"
                />
                <span className="text-[10px] font-mono text-stone-500 w-7">
                  {isMuted ? '0%' : `${volume}%`}
                </span>
              </div>

              {/* Playlist Drawer Button */}
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                  isDrawerOpen
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-amber-500/40 hover:text-white'
                }`}
                title="Open Sacred Devotional Queue"
              >
                <ListMusic className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden lg:inline">Tracks</span>
                <ChevronUp className={`w-3.5 h-3.5 transition-transform ${isDrawerOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Collapse to Pill Button */}
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-900 transition-colors"
                title="Collapse to discrete mini pill"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
