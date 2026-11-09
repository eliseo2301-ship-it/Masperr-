import React, { useRef, useEffect } from 'react';

/**
 * DynamicBackgroundVideo Component (RFC Implementation)
 * 
 * Technical Specifications:
 * - Continuous video loop (1080p Masperr animated logo)
 * - Fixed centered positioning in viewport during vertical scroll
 * - Responsive contain/center alignment across mobile, tablet & desktop
 * - Contrast overlay ensuring 100% legibility of all content
 */
export default function DynamicBackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Background video autoplay waiting for user interaction:', err);
        });
      }
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen pointer-events-none overflow-hidden z-0 flex items-center justify-center bg-slate-900"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* 1. Background Video: Centered fixed in viewport, loop, muted, playsinline */}
      <video
        ref={videoRef}
        src="/assets/background-logo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/logo-principal.jpeg"
        className="w-full h-full object-contain object-center scale-100 sm:scale-105 transition-opacity duration-700"
        style={{
          objectFit: 'contain',
          objectPosition: 'center center',
        }}
      />

      {/* 2. Semi-Transparent Contrast Overlay (RFC Specification) */}
      {/* Ensures text, buttons, and navigation remain 100% readable while the centered logo shines through */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.62) 0%, rgba(248, 250, 252, 0.82) 75%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
      />

      {/* 3. Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 via-transparent to-sky-100/30 pointer-events-none" />
    </div>
  );
}
