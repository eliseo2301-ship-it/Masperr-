import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

export default function InteractiveLogo({ size = "md", showText = true, theme = "light", className = "" }) {
  const videoRef = useRef(null);
  const [isExploding, setIsExploding] = useState(false);

  // Guarantee mobile autoplay (iOS Safari & Android Chrome require video.muted = true programmatically)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback: will play on first touch/interaction
        });
      }
    }
  }, []);

  // Restart video animation on user click or touch
  const handleLogoClick = (e) => {
    setIsExploding(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
    setTimeout(() => setIsExploding(false), 800);
  };

  // Replay on hover/touch if video has paused
  const handleInteraction = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  // Dimensions: carefully tuned so mobile screens display the video logo clearly without squeezing buttons
  const dimensions = {
    sm: "h-10 sm:h-12",
    md: "h-11 xs:h-12 sm:h-15 md:h-18",
    lg: "h-14 sm:h-18 md:h-22",
  }[size] || "h-11 xs:h-12 sm:h-15 md:h-18";

  return (
    <div 
      className={`relative inline-flex items-center gap-2 sm:gap-3 group select-none cursor-pointer ${className}`}
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleLogoClick}
      title="¡Toca para reiniciar el video del logo!"
    >
      {/* Dynamic CMYK Glow Aura Behind Video Logo */}
      <div 
        className={`absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-magenta via-brand-yellow to-brand-cyan opacity-40 blur-sm sm:blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 ${
          isExploding ? 'scale-115 opacity-100 blur-md animate-ping' : ''
        }`}
      ></div>

      {/* Main Interactive Video Container - 16:9 Aspect Ratio to fit 1080p video */}
      <div className={`relative ${dimensions} aspect-video rounded-xl sm:rounded-2xl bg-slate-950 border sm:border-2 border-slate-700/80 shadow-md sm:shadow-xl overflow-hidden flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-brand-cyan group-hover:scale-105 group-hover:shadow-glow-cyan`}>
        
        {/* Interactive Video Logo */}
        <video
          ref={videoRef}
          src="/assets/logo-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/logo-principal.jpeg"
          className="w-full h-full object-cover rounded-lg sm:rounded-xl"
        />

        {/* Glossy overlay reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity"></div>

        {/* Top-right sparkle */}
        <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 opacity-80 group-hover:opacity-100 transition-opacity text-amber-300">
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 drop-shadow" />
        </div>
      </div>

      {/* Official Business Name Typography */}
      {showText && (
        <div className="flex flex-col text-left justify-center min-w-0">
          
          {/* Main Brand Title: MASPERR PUBLICIDAD */}
          <div className="flex items-center gap-1">
            <span className={`text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-tight leading-tight transition-colors whitespace-nowrap truncate ${
              theme === 'dark' ? 'text-white group-hover:text-brand-cyan' : 'text-slate-900 group-hover:text-brand-cyan'
            }`}>
              MASPERR <span className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-amber-500 bg-clip-text text-transparent">PUBLICIDAD</span>
            </span>
          </div>

          {/* Subtitle with Official Name and Foundation Year */}
          <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
            <span className={`text-[10px] xs:text-[11px] sm:text-xs font-extrabold tracking-tight whitespace-nowrap ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Publicidad & Impresión
            </span>
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className={`hidden sm:inline-block text-[10px] sm:text-[11px] font-bold shrink-0 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-400'
            }`}>
              • Desde 2008
            </span>
          </div>

        </div>
      )}
    </div>
  );
}
