'use client';

import React, { useRef, useEffect } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

interface HeroBackgroundMediaProps {
  videoSrc?: string;
  posterSrc?: string;
}

export const HeroBackgroundMedia: React.FC<HeroBackgroundMediaProps> = ({
  videoSrc = '/Uniprotdemo.mp4',
  posterSrc = '/hero-poster.jpg'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.visibilityState === 'visible') {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0B2B26]">
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B26]/85 via-[#0B2B26]/70 to-[#0B2B26] z-10 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0B2B26]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        className="w-full h-full object-cover scale-105 filter brightness-90 contrast-105 transition-all duration-700"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark-teal gradient scrim overlay ensuring WCAG AA readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B26]/80 via-[#0B2B26]/60 to-[#0B2B26] z-10 pointer-events-none" />
    </div>
  );
};

export default HeroBackgroundMedia;
