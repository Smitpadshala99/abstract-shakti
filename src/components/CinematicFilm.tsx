import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Upload, Film, Sparkles, RotateCcw } from 'lucide-react';

const SCENE_CROPS = [
  '/crops/complete-rangoli.png',
  '/crops/traditional-side.png',
  '/crops/golden-mukut.png',
  '/crops/durga-face.png',
  '/crops/trishul.png',
  '/crops/shankha.png',
  '/crops/sudarshana-chakra.png',
  '/crops/lotus.png',
  '/crops/tech-side.png',
  '/crops/tech-crown.png',
  '/crops/ai-goddess-face.png',
  '/crops/ai-processor.png',
  '/crops/digital-tablet.png',
  '/crops/cloud-database.png',
  '/crops/holographic-cube.png',
];

export const CinematicFilm: React.FC = () => {
  const [activeFilmType, setActiveFilmType] = useState<'60s' | '10s'>('60s');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverX, setHoverX] = useState<number>(0);

  const [uploadedVideos, setUploadedVideos] = useState<{ '60s': string | null; '10s': string | null }>({
    '60s': null,
    '10s': null,
  });
  const [uploadFileName, setUploadFileName] = useState<{ '60s': string | null; '10s': string | null }>({
    '60s': null,
    '10s': null,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentTimeRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);

  // Sync ref with state
  currentTimeRef.current = currentTime;

  const targetDuration = activeFilmType === '60s' ? 60 : 10;
  const currentVideoSrc = uploadedVideos[activeFilmType];
  const duration = currentVideoSrc && videoDuration && videoDuration > 0 ? videoDuration : targetDuration;

  // Preload crop images once on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    SCENE_CROPS.forEach(src => {
      const img = new Image();
      img.src = src;
      loadedImages.push(img);
    });
    imagesRef.current = loadedImages;
  }, []);

  // Procedural Cinematic Canvas Tour Loop (Strict Wall-Clock Sync via performance.now())
  useEffect(() => {
    if (currentVideoSrc) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    lastFrameTimeRef.current = performance.now();

    const render = (now: number) => {
      // Calculate true delta time in seconds
      const delta = (now - lastFrameTimeRef.current) / 1000;
      lastFrameTimeRef.current = now;

      let cur = currentTimeRef.current;

      if (isPlaying && !isScrubbing) {
        cur += delta;
        if (cur >= duration) {
          cur = 0;
          currentTimeRef.current = 0;
          setCurrentTime(0);
          setIsPlaying(false);
        } else {
          currentTimeRef.current = cur;
          setCurrentTime(cur);
        }
      }

      // Draw active scene on canvas
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#04060d';
      ctx.fillRect(0, 0, w, h);

      const images = imagesRef.current;
      if (images.length > 0) {
        const sceneProgress = Math.min(0.999, Math.max(0, cur / duration));
        const sceneIndex = Math.min(
          Math.floor(sceneProgress * images.length),
          images.length - 1
        );
        const img = images[sceneIndex];

        if (img && img.complete && img.naturalWidth > 0) {
          // Subtle Ken Burns zoom and drift
          const localT = (sceneProgress * images.length) % 1;
          const scale = 1.05 + localT * 0.08;
          const panX = Math.sin(localT * Math.PI) * 20;

          ctx.save();
          ctx.translate(w / 2 + panX, h / 2);
          ctx.scale(scale, scale);

          const imgAspect = img.naturalWidth / img.naturalHeight;
          const canvasAspect = w / h;
          let drawW = w;
          let drawH = h;
          if (imgAspect > canvasAspect) {
            drawW = h * imgAspect;
          } else {
            drawH = w / imgAspect;
          }

          ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
          ctx.restore();

          // Cinematic vignette
          const grad = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.7);
          grad.addColorStop(0, 'rgba(0,0,0,0)');
          grad.addColorStop(1, 'rgba(4,6,13,0.75)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        }
      }

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying, isScrubbing, duration, currentVideoSrc]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (currentVideoSrc && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      lastFrameTimeRef.current = performance.now();
      setIsPlaying(!isPlaying);
    }
  };

  // Handle Fullscreen
  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen().catch(console.error);
    }
  };

  // Handle Video Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedVideos(prev => ({
        ...prev,
        [activeFilmType]: url,
      }));
      setUploadFileName(prev => ({
        ...prev,
        [activeFilmType]: file.name,
      }));
      currentTimeRef.current = 0;
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  // Interactive Timeline Seeking & Drag Scrubbing
  const calculateSeekTime = useCallback((clientX: number): number => {
    if (!progressBarRef.current) return 0;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return ratio * duration;
  }, [duration]);

  const handleProgressBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsScrubbing(true);
    const newTime = calculateSeekTime(e.clientX);
    currentTimeRef.current = newTime;
    setCurrentTime(newTime);
    if (videoRef.current) videoRef.current.currentTime = newTime;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const seekTime = calculateSeekTime(moveEvent.clientX);
      currentTimeRef.current = seekTime;
      setCurrentTime(seekTime);
      if (videoRef.current) videoRef.current.currentTime = seekTime;
    };

    const handleMouseUp = () => {
      setIsScrubbing(false);
      lastFrameTimeRef.current = performance.now();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverTime(ratio * duration);
    setHoverX(e.clientX - rect.left);
  };

  const handleProgressBarMouseLeave = () => {
    setHoverTime(null);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Precise Progress Percentage (0.0 to 100.0)
  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  return (
    <section id="film" className="relative py-28 px-4 md:px-8 bg-[#04060d] border-t border-stone-900">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            TWO WORLDS. ONE SOURCE. INFINITE CREATION.
          </h2>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            Experience the philosophical convergence through moving visuals. Watch the full 60-second curatorial film or the concise 10-second teaser.
          </p>

          {/* Film Mode Selector Buttons */}
          <div className="mt-8 inline-flex p-1 bg-stone-900/90 border border-stone-800 rounded-lg">
            <button
              onClick={() => {
                setActiveFilmType('60s');
                currentTimeRef.current = 0;
                setCurrentTime(0);
                setIsPlaying(false);
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded transition-all ${
                activeFilmType === '60s'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              60-Second Complete Film
            </button>
            <button
              onClick={() => {
                setActiveFilmType('10s');
                currentTimeRef.current = 0;
                setCurrentTime(0);
                setIsPlaying(false);
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded transition-all ${
                activeFilmType === '10s'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              10-Second Teaser Film
            </button>
          </div>
        </div>

        {/* Cinematic Video Player Container */}
        <div
          ref={playerContainerRef}
          className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black border border-stone-800 shadow-[0_25px_70px_rgba(0,0,0,0.9)] group"
        >
          {/* Actual Video Element (if uploaded) */}
          {currentVideoSrc ? (
            <video
              ref={videoRef}
              src={currentVideoSrc}
              className="w-full h-full object-contain"
              onLoadedMetadata={() => {
                if (videoRef.current && videoRef.current.duration) {
                  setVideoDuration(videoRef.current.duration);
                }
              }}
              onTimeUpdate={() => {
                if (videoRef.current && !isScrubbing) {
                  currentTimeRef.current = videoRef.current.currentTime;
                  setCurrentTime(videoRef.current.currentTime);
                }
              }}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />
          ) : (
            /* Procedural Cinematic Artwork Tour Canvas */
            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />
          )}

          {/* Big Center Play Button Overlay (when paused) */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center pl-1 shadow-[0_0_35px_rgba(245,158,11,0.5)] transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current" />
              </div>
              <p className="mt-4 text-xs font-mono tracking-widest uppercase text-stone-200">
                {currentVideoSrc ? 'Play Uploaded Film' : 'Play Cinematic Artwork Tour'}
              </p>
            </div>
          )}

          {/* Bottom Player Controls HUD */}
          <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col gap-3 opacity-90 group-hover:opacity-100 transition-opacity">
            {/* Interactive Timeline Progress Bar */}
            <div
              ref={progressBarRef}
              onMouseDown={handleProgressBarMouseDown}
              onMouseMove={handleProgressBarMouseMove}
              onMouseLeave={handleProgressBarMouseLeave}
              className="relative w-full h-3 py-1 cursor-pointer select-none group/scrubber"
            >
              {/* Grey Background Track */}
              <div className="w-full h-1.5 sm:h-2 bg-stone-800/90 rounded-full overflow-hidden relative">
                {/* Colored Progress Bar (Zero transition lag during continuous playback) */}
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-cyan-400 rounded-full"
                  style={{
                    width: `${progressPercent}%`,
                  }}
                />
              </div>

              {/* Luminous Scrubber Head / Thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(6,182,212,0.9),0_0_4px_white] border border-cyan-400 pointer-events-none transition-transform group-hover/scrubber:scale-125"
                style={{ left: `${progressPercent}%` }}
              />

              {/* Hover Preview Tooltip */}
              {hoverTime !== null && (
                <div
                  className="absolute -top-7 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 text-[10px] font-mono text-cyan-300 border border-cyan-500/40 pointer-events-none shadow"
                  style={{ left: `${hoverX}px` }}
                >
                  {formatTime(hoverTime)}
                </div>
              )}
            </div>

            {/* Bottom Row Controls */}
            <div className="flex items-center justify-between text-xs text-stone-300 font-mono">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause film' : 'Play film'}
                  className="p-1.5 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => {
                    currentTimeRef.current = 0;
                    setCurrentTime(0);
                    if (videoRef.current) videoRef.current.currentTime = 0;
                    lastFrameTimeRef.current = performance.now();
                  }}
                  aria-label="Restart film"
                  className="p-1.5 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Time Display */}
                <span className="font-semibold text-stone-200">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Status Badge */}
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-400">
                <Film className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {uploadFileName[activeFilmType]
                    ? `File: ${uploadFileName[activeFilmType]}`
                    : activeFilmType === '60s'
                    ? 'Exhibition Walkthrough (60s)'
                    : 'Curatorial Teaser (10s)'}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Volume / Mute */}
                <button
                  onClick={() => {
                    const nextMuted = !isMuted;
                    setIsMuted(nextMuted);
                    if (videoRef.current) videoRef.current.muted = nextMuted;
                  }}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  aria-label="Toggle fullscreen video"
                  className="p-1.5 hover:text-white transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Video Asset Upload Area */}
        <div className="mt-8 max-w-2xl mx-auto p-5 rounded-xl bg-stone-900/60 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-medium text-white flex items-center gap-2">
              <Upload className="w-4 h-4 text-amber-400" />
              <span>Upload Your Real Video File</span>
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              Have your own generated AI video file? Load your 60-second full film or 10-second teaser directly into this player.
            </p>
          </div>

          <div className="shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              accept="video/mp4,video/webm,video/quicktime"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 rounded text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Select {activeFilmType} Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
