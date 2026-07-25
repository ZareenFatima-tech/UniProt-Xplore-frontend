'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-20 flex items-center justify-center pointer-events-none px-4 sm:px-6 py-20 sm:py-28 w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-8 max-w-4xl w-full text-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="px-4 py-1.5 rounded-full border border-[#4FD1C5]/30 bg-[#4FD1C5]/10 text-[#4FD1C5] text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md"
        >
          AUTONOMOUS PROTEIN INTELLIGENCE
        </motion.div>

        {/* Headline (Single headline text in hero) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.1] max-w-4xl"
        >
          One Protein ID, Six Databases, One AI That Actually Reasons About What It Finds.
        </motion.h1>

        {/* Two Buttons Only (Sign In 1st, Get Started 2nd) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 pointer-events-auto justify-center w-full max-w-sm sm:max-w-md"
        >
          {/* 1. Sign In Button (Ghost / Subtle Border) */}
          <Link
            href="/login"
            className="w-full sm:w-auto text-center text-sm font-semibold text-[#E3E9E8] px-8 py-3.5 hover:bg-[#0F3A33] border border-[#4A6572]/40 rounded-full transition-all duration-200 focus:outline-none focus:border-[#4FD1C5] min-h-[48px] flex items-center justify-center bg-[#0B2B26]/60 backdrop-blur-sm"
          >
            Sign In
          </Link>

          {/* 2. Get Started Button (Primary Cyan CTA) */}
          <Link
            href="/register"
            className="w-full sm:w-auto text-center text-sm font-bold text-[#0B2B26] bg-[#4FD1C5] hover:bg-[#4FD1C5]/90 px-8 py-3.5 rounded-full shadow-lg shadow-[#4FD1C5]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[48px] flex items-center justify-center"
          >
            Get Started
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroContent;
