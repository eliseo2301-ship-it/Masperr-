import React from 'react';

export default function WatermarkLogo({ className = "" }) {
  return (
    <div 
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Radial soft glow aura behind the watermark */}
      <div className="absolute w-[600px] sm:w-[850px] md:w-[1100px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-pink-200/20 via-amber-100/25 to-cyan-200/25 blur-3xl opacity-70"></div>

      {/* Massive Vector Watermark Logo with Radial Feather Fade (No square box, dissolves smoothly) */}
      <div 
        className="relative w-[340px] sm:w-[540px] md:w-[720px] lg:w-[920px] max-w-full aspect-[16/11] opacity-[0.09] sm:opacity-[0.11] transition-opacity duration-700"
        style={{
          maskImage: 'radial-gradient(ellipse 65% 60% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at 50% 50%, black 30%, transparent 80%)',
        }}
      >
        <svg
          viewBox="0 0 200 160"
          className="w-full h-full object-contain filter drop-shadow-xl"
        >
          <defs>
            {/* CMYK Vibrant Gradients */}
            <linearGradient id="wmMagenta" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#C00065" />
              <stop offset="50%" stopColor="#E6007E" />
              <stop offset="100%" stopColor="#FF4DB8" />
            </linearGradient>

            <linearGradient id="wmYellow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#FFDD00" />
              <stop offset="100%" stopColor="#FEF08A" />
            </linearGradient>

            <linearGradient id="wmCyan" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#00A8E8" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </linearGradient>

            <filter id="wmGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Magenta Ribbon & Ink Splatters (Left Fold) */}
          <g filter="url(#wmGlow)">
            {/* Splatters */}
            <circle cx="20" cy="52" r="3.2" fill="#E6007E" />
            <circle cx="30" cy="38" r="2.2" fill="#FF4DB8" />
            <circle cx="12" cy="70" r="2.6" fill="#E6007E" />
            <circle cx="36" cy="100" r="2" fill="#E6007E" />
            <circle cx="18" cy="92" r="1.5" fill="#FF4DB8" />
            
            {/* Main Magenta Ribbon Fold */}
            <path
              d="M 28 108 L 52 46 C 56 36 68 36 73 46 L 87 76 L 68 106 C 63 113 51 113 44 108 Z"
              fill="url(#wmMagenta)"
            />
            {/* 3D Highlight face */}
            <path
              d="M 32 102 L 54 48 C 57 42 64 42 67 48 L 76 66 L 64 92 Z"
              fill="#FFFFFF"
              opacity="0.35"
            />
          </g>

          {/* 2. Yellow Ribbon & Golden Droplets (Center Fold) */}
          <g filter="url(#wmGlow)">
            {/* Splatters */}
            <circle cx="98" cy="22" r="2.8" fill="#FFDD00" />
            <circle cx="108" cy="16" r="2" fill="#FEF08A" />
            <circle cx="88" cy="30" r="1.8" fill="#FFDD00" />

            {/* Main Yellow V-Fold Ribbon */}
            <path
              d="M 78 62 L 98 100 C 102 107 113 107 117 100 L 132 66 L 115 48 C 110 44 100 44 95 48 Z"
              fill="url(#wmYellow)"
            />
            {/* 3D Highlight face */}
            <path
              d="M 83 64 L 98 94 C 100 97 106 97 109 94 L 118 76 L 105 60 Z"
              fill="#FFFFFF"
              opacity="0.4"
            />
          </g>

          {/* 3. Cyan Ribbon & Electric Drops (Right Fold) */}
          <g filter="url(#wmGlow)">
            {/* Splatters */}
            <circle cx="178" cy="50" r="3.5" fill="#00A8E8" />
            <circle cx="166" cy="38" r="2.2" fill="#7DD3FC" />
            <circle cx="188" cy="70" r="2.8" fill="#00A8E8" />
            <circle cx="170" cy="98" r="2" fill="#7DD3FC" />

            {/* Main Cyan Ribbon Fold */}
            <path
              d="M 125 78 L 140 48 C 145 38 158 38 163 48 L 186 108 C 191 117 179 124 169 117 L 145 95 Z"
              fill="url(#wmCyan)"
            />
            {/* 3D Highlight face */}
            <path
              d="M 132 76 L 145 50 C 149 44 156 44 160 50 L 176 98 L 154 84 Z"
              fill="#FFFFFF"
              opacity="0.35"
            />
          </g>

          {/* 4. Bold Typography: MASPERR PUBLICIDAD */}
          <g>
            <text
              x="100"
              y="135"
              textAnchor="middle"
              fill="#0F172A"
              fontSize="14"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.6"
            >
              MASPERR <tspan fill="#00A8E8">PUBLICIDAD</tspan>
            </text>
            <text
              x="100"
              y="148"
              textAnchor="middle"
              fill="#475569"
              fontSize="6"
              fontWeight="800"
              fontFamily="system-ui, sans-serif"
              letterSpacing="1.5"
            >
              HACEMOS REALIDAD CUALQUIER PROYECTO
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
