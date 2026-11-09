import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function InteractiveLogo({ size = "md", showText = true, theme = "light", className = "" }) {
  const [animKey, setAnimKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeColor, setActiveColor] = useState('all'); // 'magenta' | 'yellow' | 'cyan' | 'all'
  const [isExploding, setIsExploding] = useState(false);

  // Trigger color splash creation on click
  const handleLogoClick = (e) => {
    // don't navigate away if user wants to play with the logo
    setIsExploding(true);
    setAnimKey(prev => prev + 1);
    setTimeout(() => setIsExploding(false), 900);
  };

  // Dimensions based on size prop (noticeably larger as requested!)
  const dimensions = {
    sm: "h-14 sm:h-16",
    md: "h-16 sm:h-20",
    lg: "h-16 sm:h-20 md:h-22",
  }[size] || "h-16 sm:h-20";

  return (
    <div 
      className={`relative inline-flex items-center gap-3.5 group select-none cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveColor('all');
      }}
      onClick={handleLogoClick}
      title="¡Haz clic en el logo para ver la animación interactiva de colores CMYK!"
    >
      {/* Dynamic CMYK Glow Aura Behind Logo */}
      <div 
        className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-brand-magenta via-brand-yellow to-brand-cyan opacity-40 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 ${
          isExploding ? 'scale-125 opacity-100 blur-lg animate-ping' : ''
        }`}
      ></div>

      {/* Main Logo Container Box - Significantly larger and with premium border */}
      <div className={`relative ${dimensions} aspect-square rounded-2xl bg-slate-950 p-1.5 sm:p-2 border-2 border-slate-700/80 shadow-xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-brand-cyan group-hover:scale-105`}>
        
        {/* Animated Background Grid & Splash Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:8px_8px] opacity-40 pointer-events-none"></div>

        {/* Dynamic Vector Masperr "M" that builds from zero (0 to 100%) in its 3 iconic colors */}
        <svg
          key={animKey}
          viewBox="0 0 160 140"
          className="w-full h-full object-contain relative z-10"
        >
          <defs>
            {/* 3D Gradients for each ribbon */}
            <linearGradient id="magentaGrad" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#C00065" />
              <stop offset="60%" stopColor="#E6007E" />
              <stop offset="100%" stopColor="#FF4DB8" />
            </linearGradient>

            <linearGradient id="yellowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5A100" />
              <stop offset="50%" stopColor="#FFDD00" />
              <stop offset="100%" stopColor="#FFF275" />
            </linearGradient>

            <linearGradient id="cyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077B6" />
              <stop offset="60%" stopColor="#00A8E8" />
              <stop offset="100%" stopColor="#64D2FF" />
            </linearGradient>

            {/* Glowing filters */}
            <filter id="glow-magenta" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-yellow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* COLOR 1: MAGENTA RIBBON & SPLATTERS (Draws first from bottom left) */}
          <g 
            className="transition-transform duration-300"
            style={{
              animation: 'masperrMagentaDraw 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              transformOrigin: '25px 95px',
              filter: activeColor === 'magenta' || isHovered ? 'url(#glow-magenta)' : 'none'
            }}
            onMouseEnter={(e) => { e.stopPropagation(); setActiveColor('magenta'); }}
          >
            {/* Splatter particles */}
            <circle cx="16" cy="48" r="2.5" fill="#E6007E" opacity="0.9" />
            <circle cx="24" cy="38" r="1.8" fill="#FF4DB8" opacity="0.8" />
            <circle cx="10" cy="62" r="2" fill="#E6007E" opacity="0.7" />
            <circle cx="28" cy="88" r="1.5" fill="#E6007E" opacity="0.85" />
            
            {/* Left 3D Ribbon Fold */}
            <path
              d="M 22 96 L 42 42 C 45 34 56 34 60 42 L 72 68 L 56 94 C 52 100 42 100 36 96 Z"
              fill="url(#magentaGrad)"
              stroke="#FF4DB8"
              strokeWidth="0.8"
            />
            {/* 3D Face highlight */}
            <path
              d="M 26 90 L 44 44 C 46 39 52 39 55 44 L 63 60 L 52 82 Z"
              fill="#FFFFFF"
              opacity="0.22"
            />
          </g>

          {/* COLOR 2: YELLOW FOLD (Draws second from center with explosive spring) */}
          <g 
            className="transition-transform duration-300"
            style={{
              animation: 'masperrYellowDraw 0.7s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both',
              transformOrigin: '80px 70px',
              filter: activeColor === 'yellow' || isHovered ? 'url(#glow-yellow)' : 'none'
            }}
            onMouseEnter={(e) => { e.stopPropagation(); setActiveColor('yellow'); }}
          >
            {/* Yellow Splatters */}
            <circle cx="78" cy="22" r="2.2" fill="#FFDD00" opacity="0.9" />
            <circle cx="86" cy="18" r="1.6" fill="#FFF275" opacity="0.8" />
            <circle cx="70" cy="28" r="1.4" fill="#FFDD00" opacity="0.75" />

            {/* Central V-Fold Ribbon */}
            <path
              d="M 64 54 L 80 88 C 83 94 92 94 95 88 L 108 58 L 94 42 C 90 38 82 38 78 42 Z"
              fill="url(#yellowGrad)"
              stroke="#FFF275"
              strokeWidth="0.8"
            />
            {/* Glossy sheen */}
            <path
              d="M 68 56 L 80 82 C 82 85 87 85 89 82 L 96 66 L 86 52 Z"
              fill="#FFFFFF"
              opacity="0.3"
            />
          </g>

          {/* COLOR 3: CYAN RIBBON & DROPLETS (Draws third from right with power) */}
          <g 
            className="transition-transform duration-300"
            style={{
              animation: 'masperrCyanDraw 0.7s 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both',
              transformOrigin: '135px 95px',
              filter: activeColor === 'cyan' || isHovered ? 'url(#glow-cyan)' : 'none'
            }}
            onMouseEnter={(e) => { e.stopPropagation(); setActiveColor('cyan'); }}
          >
            {/* Cyan Splatters */}
            <circle cx="144" cy="46" r="2.8" fill="#00A8E8" opacity="0.95" />
            <circle cx="134" cy="36" r="1.8" fill="#64D2FF" opacity="0.85" />
            <circle cx="152" cy="62" r="2.2" fill="#00A8E8" opacity="0.8" />
            <circle cx="138" cy="86" r="1.6" fill="#64D2FF" opacity="0.75" />

            {/* Right 3D Ribbon Fold */}
            <path
              d="M 102 68 L 114 42 C 118 34 129 34 133 42 L 152 96 C 156 104 146 110 138 104 L 118 84 Z"
              fill="url(#cyanGrad)"
              stroke="#64D2FF"
              strokeWidth="0.8"
            />
            {/* 3D Highlights */}
            <path
              d="M 108 66 L 118 44 C 121 39 127 39 130 44 L 144 86 L 126 74 Z"
              fill="#FFFFFF"
              opacity="0.25"
            />
          </g>

          {/* BASE BRAND TEXT: Masperr Publicidad (glowing font inside emblem) */}
          <g 
            style={{
              animation: 'masperrTextDraw 0.6s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both'
            }}
          >
            <text
              x="80"
              y="120"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12.5"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.4"
            >
              Masperr<tspan fill="#00A8E8">Publicidad</tspan>
            </text>
            <text
              x="80"
              y="131"
              textAnchor="middle"
              fill="#E2E8F0"
              fontSize="5.2"
              fontWeight="800"
              fontFamily="system-ui, sans-serif"
              letterSpacing="1.2"
              opacity="0.8"
            >
              PUBLICIDAD QUE IMPULSA TU MARCA
            </text>
          </g>
        </svg>

        {/* Interactive indicator pill */}
        <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-cyan/80 text-white rounded-full p-0.5 shadow-sm">
          <Sparkles className="w-2.5 h-2.5 animate-spin" />
        </div>
      </div>

      {/* Business Name Typography: REPLACING "TALLER INDUSTRIAL" */}
      {showText && (
        <div className="flex flex-col text-left">
          
          {/* Main Brand Title: Replaces "Taller Industrial" with prominent business name */}
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

      {/* Embedded CSS animations for creating the logo from zero */}
      <style>{`
        @keyframes masperrMagentaDraw {
          0% {
            opacity: 0;
            transform: scale(0.1) translate(-40px, 40px) rotate(-25deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.15) translate(2px, -3px) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(0, 0) rotate(0deg);
          }
        }

        @keyframes masperrYellowDraw {
          0% {
            opacity: 0;
            transform: scale(0.1) translateY(-40px);
          }
          65% {
            opacity: 1;
            transform: scale(1.2) translateY(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes masperrCyanDraw {
          0% {
            opacity: 0;
            transform: scale(0.1) translate(40px, 40px) rotate(25deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.15) translate(-2px, -3px) rotate(-3deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(0, 0) rotate(0deg);
          }
        }

        @keyframes masperrTextDraw {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
