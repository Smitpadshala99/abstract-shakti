/**
 * Sacred Devotional Audio Engine for Abstract Shakti.
 * Powered by YouTube IFrame API to stream authentic Gujarati & Vedic
 * devotional Mataji Aartis, Stutis, and curated sacred compositions.
 */

export interface YouTubeTrack {
  id: string;
  title: string;
  subtitle: string;
  videoId: string;
  category: 'mataji-instrumental' | 'mataji-stuti' | 'gujarati-dakla' | 'classical-devotional';
  description: string;
  thumbnail: string;
  duration: string;
  durationSec: number;
  startOffsetSec?: number;
}

export const YOUTUBE_TRACKS: YouTubeTrack[] = [
  {
    id: 'ambe-gauri-flute-instrumental',
    title: 'Jai Ambe Gauri (Divine Flute Instrumental)',
    subtitle: 'Sacred Mataji Aarti · Flute & Temple Bells',
    videoId: 'mb0AwHyF8ys',
    category: 'mataji-instrumental',
    description: 'Serene, meditative flute instrumental invocation dedicated to Maa Ambe / Adi Parashakti with sanctified temple chimes.',
    thumbnail: 'https://i.ytimg.com/vi/mb0AwHyF8ys/hqdefault.jpg',
    duration: '8:42',
    durationSec: 522,
    startOffsetSec: 0,
  },
  {
    id: 'ambe-maa-aarti-ratansinh',
    title: 'Ambe Maa Aarti (Jai Adhyashakti)',
    subtitle: 'Ratansinh Vaghela & Damyanti Barot · Gujarati Bhakti Songs',
    videoId: 'U_DTkSAakVQ',
    category: 'mataji-stuti',
    description: 'Traditional Gujarati Ambe Maa Aarti celebrating the primordial mother Adi Parashakti in authentic devotional folk style.',
    thumbnail: 'https://i.ytimg.com/vi/U_DTkSAakVQ/hqdefault.jpg',
    duration: '13:33',
    durationSec: 813,
    startOffsetSec: 0,
  },
  {
    id: 'vishvambhari-stuti-kinjal',
    title: 'Vishvambhari Stuti',
    subtitle: 'Kinjal Dave · KD Digital (Intro Skipped)',
    videoId: 'MYkEYAoqFTs',
    category: 'mataji-stuti',
    description: 'Revered Gujarati prayer to the Universal Mother invoking divine grace and protection. Automatically skips intro to start right on the stuti.',
    thumbnail: 'https://i.ytimg.com/vi/MYkEYAoqFTs/hqdefault.jpg',
    duration: '6:34',
    durationSec: 394,
    startOffsetSec: 10,
  },
  {
    id: 'vaage-vaage-aghori-muzik',
    title: 'Vaage Vaage (Khamma 2)',
    subtitle: 'Aghori Muzik · Sacred Aghor Folk Fusion',
    videoId: 'O1iSN1Ie7aY',
    category: 'gujarati-dakla',
    description: 'High-octane fusion combining authentic Gujarati Charaj and devotional Dakla beats with modern bass and tribal energy.',
    thumbnail: 'https://i.ytimg.com/vi/O1iSN1Ie7aY/hqdefault.jpg',
    duration: '5:34',
    durationSec: 334,
    startOffsetSec: 0,
  },
  {
    id: 'aigiri-nandini-rajalakshmee',
    title: 'Aigiri Nandini (Mahishasura Mardini Stotram)',
    subtitle: 'Rajalakshmee Sanjay · With Lyrics · Sacred Durga Stotra',
    videoId: '442ewPgXHQ0',
    category: 'classical-devotional',
    description: 'Powerful, rhythmic recital of Adi Shankaracharya\'s Mahishasuramardini Stotram honoring Maa Durga\'s warrior grace.',
    thumbnail: 'https://i.ytimg.com/vi/442ewPgXHQ0/hqdefault.jpg',
    duration: '15:13',
    durationSec: 913,
    startOffsetSec: 0,
  },
  {
    id: 'bandish-projekt-dakla-2',
    title: 'Dakla 2 (Extended Opus)',
    subtitle: 'Bandish Projekt feat. Aishwarya Joshi & Maulik Nayak',
    videoId: 'pwezb1oHfPA',
    category: 'gujarati-dakla',
    description: 'The monumental devotional Dakla opus fusing ancestral Gujarati folklore, hypnotic damru rhythms, and electronic bass.',
    thumbnail: 'https://i.ytimg.com/vi/pwezb1oHfPA/hqdefault.jpg',
    duration: '6:01',
    durationSec: 361,
    startOffsetSec: 0,
  },
  {
    id: 'meri-maa-ke-barabar-koi-nahi',
    title: 'Meri Maa Ke Barabar Koi Nahi',
    subtitle: 'Jubin Nautiyal & Payal Dev · Manoj Muntashir',
    videoId: 'zkO8HfmRsD0',
    category: 'classical-devotional',
    description: 'Heartfelt, emotional devotional anthem celebrating the transcendent, unconditional love and divinity of Maa.',
    thumbnail: 'https://i.ytimg.com/vi/zkO8HfmRsD0/hqdefault.jpg',
    duration: '5:15',
    durationSec: 315,
    startOffsetSec: 0,
  },
  {
    id: 'moti-veraana-amit-trivedi',
    title: 'Moti Veraana',
    subtitle: 'Amit Trivedi feat. Osman Mir · Songs of Faith',
    videoId: 'Jv8KRwF1zQs',
    category: 'classical-devotional',
    description: 'Soul-stirring Navratri anthem blending traditional devotional poetry with sublime modern orchestration.',
    thumbnail: 'https://i.ytimg.com/vi/Jv8KRwF1zQs/hqdefault.jpg',
    duration: '3:58',
    durationSec: 238,
    startOffsetSec: 0,
  },
  {
    id: 'maari-maavadi-bhoomi',
    title: 'Maari Maavadi',
    subtitle: 'Amit Trivedi, Osman Mir & Aamir Mir · Bhoomi 2023',
    videoId: 'Ub3xb2BlzDs',
    category: 'classical-devotional',
    description: 'Exuberant and spiritually uplifting tribute to the Divine Mother featuring grand Gujarati folk vocals.',
    thumbnail: 'https://i.ytimg.com/vi/Ub3xb2BlzDs/hqdefault.jpg',
    duration: '4:53',
    durationSec: 293,
    startOffsetSec: 0,
  },
  {
    id: 'vadhaavo-re-aditya-gadhvi',
    title: 'Vadhaavo Re',
    subtitle: 'Aditya Gadhvi & Siddharth Amit Bhavsar · Jindagi Once More',
    videoId: 'r6FEdnervFI',
    category: 'classical-devotional',
    description: 'Glorious celebratory devotional invocation welcoming divine auspiciousness with joyous Gujarati rhythm.',
    thumbnail: 'https://i.ytimg.com/vi/r6FEdnervFI/hqdefault.jpg',
    duration: '3:30',
    durationSec: 210,
    startOffsetSec: 0,
  },
  {
    id: 'albeli-matwali-maiyya-aditya',
    title: 'Albeli Matwali Maiyya',
    subtitle: 'Aditya Gadhvi · Sacred Devotional (Intro Skipped)',
    videoId: 'aHaqb45sNn8',
    category: 'mataji-stuti',
    description: 'Powerful, emotive devotional prayer praising the supreme Mother Goddess. Automatically skips first 65 seconds of opening talk directly to music.',
    thumbnail: 'https://i.ytimg.com/vi/aHaqb45sNn8/hqdefault.jpg',
    duration: '7:05',
    durationSec: 425,
    startOffsetSec: 65,
  }
];

export interface AudioPlaybackState {
  isPlaying: boolean;
  isBuffering: boolean;
  currentTrack: YouTubeTrack;
  isReady: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isRepeat: boolean;
  isShuffle: boolean;
  playlist: YouTubeTrack[];
}

type AudioStateListener = (
  isPlaying: boolean,
  currentTrack: YouTubeTrack,
  isReady: boolean,
  fullState?: AudioPlaybackState
) => void;

class YouTubeAudioEngine {
  private player: any = null;
  private isReady: boolean = false;
  private isPlaying: boolean = false;
  private isBuffering: boolean = false;
  private pendingPlay: boolean = false;
  private currentTrackIndex: number = 0;
  private listeners: Set<AudioStateListener> = new Set();
  private volume: number = 80;
  private isMuted: boolean = false;
  private isRepeat: boolean = false;
  private isShuffle: boolean = false;
  private currentTime: number = 0;
  private duration: number = 522;
  private progressInterval: any = null;
  private playlist: YouTubeTrack[] = [...YOUTUBE_TRACKS];

  constructor() {
    if (typeof window !== 'undefined') {
      const cur = this.getCurrentTrack();
      this.duration = cur.durationSec || 522;
      this.currentTime = cur.startOffsetSec || 0;
      this.loadYouTubeIframeAPI();
      this.startProgressTicker();
    }
  }

  private loadYouTubeIframeAPI() {
    if ((window as any).YT && (window as any).YT.Player) {
      this.initPlayer();
      return;
    }

    if (!document.getElementById('yt-iframe-api-script')) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const previousOnReady = (window as any).onYouTubeIframeAPIReady;
    (window as any).onYouTubeIframeAPIReady = () => {
      if (typeof previousOnReady === 'function') previousOnReady();
      this.initPlayer();
    };
  }

  private initPlayer() {
    let container = document.getElementById('yt-bg-audio-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'yt-bg-audio-container';
      container.style.position = 'fixed';
      container.style.bottom = '10px';
      container.style.right = '10px';
      container.style.width = '240px';
      container.style.height = '140px';
      container.style.opacity = '0.001';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '-9999';
      document.body.appendChild(container);
    }

    const currentTrack = this.getCurrentTrack();
    this.duration = currentTrack.durationSec || 522;
    this.currentTime = currentTrack.startOffsetSec || 0;

    try {
      this.player = new (window as any).YT.Player('yt-bg-audio-container', {
        height: '140',
        width: '240',
        videoId: currentTrack.videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: this.isRepeat ? 1 : 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          start: currentTrack.startOffsetSec || 0,
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
        },
        events: {
          onReady: () => {
            this.isReady = true;
            if (this.player.setVolume) {
              this.player.setVolume(this.volume);
            }
            if (currentTrack.startOffsetSec && currentTrack.startOffsetSec > 0) {
              if (typeof this.player.seekTo === 'function') {
                this.player.seekTo(currentTrack.startOffsetSec, true);
              }
            }
            if (this.pendingPlay) {
              this.pendingPlay = false;
              this.play();
            }
            this.updateTimeInfo();
            this.notify();
          },
          onStateChange: (event: any) => {
            if (event.data === 1) {
              this.isPlaying = true;
              this.isBuffering = false;
            } else if (event.data === 3) {
              this.isBuffering = true;
            } else if (event.data === 2) {
              this.isPlaying = false;
              this.isBuffering = false;
            } else if (event.data === 0) {
              this.isPlaying = false;
              this.isBuffering = false;
              if (this.isRepeat) {
                const startSec = this.getCurrentTrack().startOffsetSec || 0;
                this.seekTo(startSec);
                this.play();
              } else {
                this.next();
              }
            }
            this.updateTimeInfo();
            this.notify();
          },
          onError: (err: any) => {
            console.warn('YouTube Audio Player message/error:', err);
            this.isBuffering = false;
            this.notify();
          }
        }
      });
    } catch (e) {
      console.warn('Failed to initialize YouTube Player instance:', e);
    }
  }

  private startProgressTicker() {
    if (this.progressInterval) clearInterval(this.progressInterval);
    this.progressInterval = setInterval(() => {
      if (this.player && this.isReady && (this.isPlaying || this.isBuffering)) {
        this.updateTimeInfo();
        this.notify();
      }
    }, 500);
  }

  private updateTimeInfo() {
    if (this.player && typeof this.player.getCurrentTime === 'function') {
      try {
        const cur = this.player.getCurrentTime();
        if (typeof cur === 'number' && !isNaN(cur)) {
          this.currentTime = cur;
        }
        const dur = this.player.getDuration();
        if (typeof dur === 'number' && !isNaN(dur) && dur > 0) {
          this.duration = dur;
        } else {
          const currentTrack = this.getCurrentTrack();
          if (currentTrack.durationSec) {
            this.duration = currentTrack.durationSec;
          }
        }
      } catch {
        // Player transitioning
      }
    }
  }

  public subscribe(cb: AudioStateListener) {
    this.listeners.add(cb);
    cb(this.isPlaying, this.getCurrentTrack(), this.isReady, this.getFullState());
    return () => {
      this.listeners.delete(cb);
    };
  }

  public getFullState(): AudioPlaybackState {
    return {
      isPlaying: this.isPlaying,
      isBuffering: this.isBuffering,
      currentTrack: this.getCurrentTrack(),
      isReady: this.isReady,
      currentTime: this.currentTime,
      duration: this.duration || this.getCurrentTrack().durationSec || 522,
      volume: this.volume,
      isMuted: this.isMuted,
      isRepeat: this.isRepeat,
      isShuffle: this.isShuffle,
      playlist: [...this.playlist]
    };
  }

  private notify() {
    const current = this.getCurrentTrack();
    const fullState = this.getFullState();
    this.listeners.forEach(cb => cb(this.isPlaying, current, this.isReady, fullState));
  }

  public getCurrentTrack(): YouTubeTrack {
    return this.playlist[this.currentTrackIndex] || this.playlist[0];
  }

  public getPlaylist(): YouTubeTrack[] {
    return [...this.playlist];
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsReady(): boolean {
    return this.isReady;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getVolume(): number {
    return this.volume;
  }

  /**
   * Master Toggle: Toggles sound strictly ON/OFF.
   * - If audio is currently ON (playing and unmuted), turns it OFF (pauses).
   * - If audio is OFF (paused or muted), unmutes, restores volume, and plays.
   * Guarantees top and bottom controls stay in 100% sync!
   */
  public toggleMasterSound(): boolean {
    if (this.isPlaying && !this.isMuted && this.volume > 0) {
      this.pause();
      return false;
    } else {
      if (this.isMuted) {
        this.isMuted = false;
        if (this.player && typeof this.player.unMute === 'function') {
          this.player.unMute();
        }
      }
      if (this.volume === 0) {
        this.setVolume(80);
      }
      this.play();
      return true;
    }
  }

  public toggle(): boolean {
    return this.toggleMasterSound();
  }

  public play() {
    if (!this.player || !this.isReady) {
      this.pendingPlay = true;
      this.isPlaying = true;
      this.notify();
      return;
    }

    if (this.isMuted) {
      this.isMuted = false;
      if (typeof this.player.unMute === 'function') {
        this.player.unMute();
      }
    }

    if (typeof this.player.playVideo === 'function') {
      try {
        this.player.playVideo();
        this.isPlaying = true;
        this.notify();
      } catch (e) {
        console.warn('Play error:', e);
      }
    }
  }

  public pause() {
    this.pendingPlay = false;
    if (this.player && this.isReady && typeof this.player.pauseVideo === 'function') {
      try {
        this.player.pauseVideo();
        this.isPlaying = false;
        this.notify();
      } catch (e) {
        console.warn('Pause error:', e);
      }
    } else {
      this.isPlaying = false;
      this.notify();
    }
  }

  public next() {
    if (this.playlist.length === 0) return;
    if (this.isShuffle) {
      let nextIdx = Math.floor(Math.random() * this.playlist.length);
      if (this.playlist.length > 1 && nextIdx === this.currentTrackIndex) {
        nextIdx = (nextIdx + 1) % this.playlist.length;
      }
      this.currentTrackIndex = nextIdx;
    } else {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    }
    const track = this.playlist[this.currentTrackIndex];
    this.duration = track.durationSec || 300;
    const startSec = track.startOffsetSec || 0;
    this.currentTime = startSec;

    if (this.player && this.isReady && typeof this.player.loadVideoById === 'function') {
      this.player.loadVideoById({
        videoId: track.videoId,
        startSeconds: startSec
      });
      this.isPlaying = true;
    }
    this.notify();
  }

  public previous() {
    if (this.playlist.length === 0) return;
    const currentTrack = this.getCurrentTrack();
    const startSec = currentTrack.startOffsetSec || 0;

    if (this.currentTime > startSec + 3) {
      this.seekTo(startSec);
      return;
    }
    if (this.isShuffle) {
      let prevIdx = Math.floor(Math.random() * this.playlist.length);
      this.currentTrackIndex = prevIdx;
    } else {
      this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
    }
    const track = this.playlist[this.currentTrackIndex];
    this.duration = track.durationSec || 300;
    const nextStartSec = track.startOffsetSec || 0;
    this.currentTime = nextStartSec;

    if (this.player && this.isReady && typeof this.player.loadVideoById === 'function') {
      this.player.loadVideoById({
        videoId: track.videoId,
        startSeconds: nextStartSec
      });
      this.isPlaying = true;
    }
    this.notify();
  }

  public seekTo(seconds: number) {
    this.currentTime = Math.max(0, Math.min(seconds, this.duration || seconds));
    if (this.player && this.isReady && typeof this.player.seekTo === 'function') {
      try {
        this.player.seekTo(this.currentTime, true);
        this.notify();
      } catch (e) {
        console.warn('Seek error:', e);
      }
    }
  }

  public setTrack(trackId: string) {
    const idx = this.playlist.findIndex(t => t.id === trackId);
    if (idx !== -1) {
      this.currentTrackIndex = idx;
      const track = this.playlist[idx];
      this.duration = track.durationSec || 300;
      const startSec = track.startOffsetSec || 0;
      this.currentTime = startSec;

      if (this.player && this.isReady && typeof this.player.loadVideoById === 'function') {
        this.player.loadVideoById({
          videoId: track.videoId,
          startSeconds: startSec
        });
        this.isPlaying = true;
      }
      this.notify();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(100, vol));
    if (this.isMuted && this.volume > 0) {
      this.isMuted = false;
      if (this.player && typeof this.player.unMute === 'function') {
        this.player.unMute();
      }
    }
    if (this.player && this.isReady && typeof this.player.setVolume === 'function') {
      this.player.setVolume(this.volume);
    }
    this.notify();
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.player && this.isReady) {
      if (this.isMuted && typeof this.player.mute === 'function') {
        this.player.mute();
      } else if (!this.isMuted && typeof this.player.unMute === 'function') {
        this.player.unMute();
        this.player.setVolume(this.volume);
      }
    }
    this.notify();
  }

  public toggleRepeat() {
    this.isRepeat = !this.isRepeat;
    this.notify();
  }

  public toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.notify();
  }

  public setCustomYouTubeId(videoIdOrUrl: string, title = 'Custom Devotional Song') {
    let videoId = videoIdOrUrl.trim();
    if (videoId.includes('v=')) {
      videoId = videoId.split('v=')[1].split('&')[0];
    } else if (videoId.includes('youtu.be/')) {
      videoId = videoId.split('youtu.be/')[1].split('?')[0];
    } else if (videoId.includes('shorts/')) {
      videoId = videoId.split('shorts/')[1].split('?')[0];
    }

    if (videoId) {
      const customTrack: YouTubeTrack = {
        id: `custom-${Date.now()}`,
        title: title,
        subtitle: `YouTube ID: ${videoId}`,
        videoId: videoId,
        category: 'gujarati-dakla',
        description: 'User-curated devotional stream.',
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        duration: 'Stream',
        durationSec: 300,
        startOffsetSec: 0,
      };
      this.playlist.unshift(customTrack);
      this.currentTrackIndex = 0;
      this.currentTime = 0;
      if (this.player && this.isReady && typeof this.player.loadVideoById === 'function') {
        this.player.loadVideoById(videoId);
        this.isPlaying = true;
      }
      this.notify();
    }
  }
}

export const youtubeSoundscape = new YouTubeAudioEngine();
