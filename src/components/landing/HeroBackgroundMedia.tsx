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
    if (reducedMotion || !videoRef.current) return;

    const video = videoRef.current;
    // Explicitly enforce muted DOM property to comply with browser autoplay policies
    video.muted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch((err) => {
        console.log('[Background Video Notice] Autoplay waiting for user interaction or stream buffering:', err);
      });
    };

    playVideo();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      } else {
        video.pause();
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
        preload="auto"
        className="w-full h-full object-cover scale-105 filter brightness-90 contrast-105 transition-all duration-700 pointer-events-none"
        aria-hidden="true"
        onCanPlay={() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src="/Uniprotdemo.mp4" type="video/mp4" />
      </video>

      {/* Scrim overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B26]/80 via-[#0B2B26]/60 to-[#0B2B26] z-10 pointer-events-none" />
    </div>
  );
};

export default HeroBackgroundMedia;
