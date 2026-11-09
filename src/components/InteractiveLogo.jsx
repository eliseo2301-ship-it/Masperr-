import React, { useRef, useState } from 'react';
import { Sparkles, Play, RotateCcw } from 'lucide-react';

export default function InteractiveLogo({ size = "md", showText = true, theme = "light", className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

  // Restart video animation on user click
  const handleLogoClick = (e) => {
    setIsExploding(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
    setTimeout(() => setIsExploding(false), 800);
  };

  // Replay on hover if video has paused
  const handleMouseEnter = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  // Dimensions based on size prop (generous, high-impact sizing!)
  const dimensions = {
    sm: "h-12 sm:h-14",
    md: "h-14 sm:h-16 md:h-18",
    lg: "h-16 sm:h-20 md:h-24",
  }[size] || "h-14 sm:h-16 md:h-18";

  return (
    <div 
      className={`relative inline-flex items-center gap-3.5 group select-none cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleLogoClick}
      title="¡Haz clic para reiniciar la animación en video del logo!"
    >
      {/* Dynamic CMYK Glow Aura Behind Video Logo */}
      <div 
        className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-magenta via-brand-yellow to-brand-cyan opacity-40 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 ${
          isExploding ? 'scale-125 opacity-100 blur-lg animate-ping' : ''
        }`}
      ></div>

      {/* Main Interactive Video Container - 16:9 Aspect Ratio to match 1080p video */}
      <div className={`relative ${dimensions} aspect-video rounded-2xl bg-slate-950 border-2 border-slate-700/80 shadow-xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-brand-cyan group-hover:scale-105 group-hover:shadow-glow-cyan`}>
        
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
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Glossy overlay reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity"></div>

        {/* Interactive Hover Indicator */}
        <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-brand-cyan rounded-md px-1.5 py-0.5 text-[10px] font-bold flex items-center gap-1 shadow-sm">
          <RotateCcw className="w-2.5 h-2.5 animate-spin" />
          <span>Click</span>
        </div>

        {/* Top-right sparkle */}
        <div className="absolute top-1 right-1 opacity-80 group-hover:opacity-100 transition-opacity text-amber-300">
          <Sparkles className="w-3 h-3 drop-shadow" />
        </div>
      </div>

      {/* Official Business Name Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          
          {/* Main Brand Title: MASPERR PUBLICIDAD */}
          <div className="flex items-center gap-1.5">
            <span className={`text-base sm:text-lg md:text-xl font-black tracking-tight leading-none transition-colors ${
              theme === 'dark' ? 'text-white group-hover:text-brand-cyan' : 'text-slate-900 group-hover:text-brand-cyan'
            }`}>
              MASPERR <span className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-amber-500 bg-clip-text text-transparent">PUBLICIDAD</span>
            </span>
          </div>

          {/* Subtitle with Official Name and Foundation Year */}
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Publicidad & Impresión
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className={`hidden sm:inline-block text-[11px] font-bold ${
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
