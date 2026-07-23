'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-20 flex items-center justify-center pointer-events-none px-6 py-20 w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-6 max-w-3xl w-full">
        
        {/* Sub-label badge (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="px-4 py-1.5 rounded-full border border-[#4FD1C5]/30 bg-[#4FD1C5]/10 text-[#4FD1C5] text-xs font-mono uppercase tracking-widest backdrop-blur-md text-center"
        >
          System Introduction
        </motion.div>

        {/* Title (STRICTLY CENTERED) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.05] text-center"
        >
          UniProtXplore
        </motion.h1>

        {/* Body Copy (LEFT-ALIGNED UI/UX Format) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="text-base md:text-lg text-[#E3E9E8]/90 max-w-2xl text-left leading-relaxed font-sans flex flex-col gap-2.5 p-6 rounded-2xl bg-[#0F3A33]/50 border border-[#4A6572]/30 backdrop-blur-sm"
        >
          <p>
            UniProtXplore is a next-generation autonomous protein intelligence platform for researchers, structural biologists, and drug discovery teams.
          </p>
          <p>
            It bridges the gap between raw genomic data and structural molecular dynamics by orchestrating coordinated AI reasoning agents.
          </p>
          <p>
            The system automatically cross-references PDBe, AlphaFold, UniProt, and chemical databases to deliver synthesized biological insights.
          </p>
        </motion.div>

        {/* Action Buttons (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center gap-4 mt-2 pointer-events-auto justify-center"
        >
          <Link
            href="/register"
            className="text-sm font-semibold bg-[#4FD1C5] text-[#0B2B26] px-8 py-3.5 rounded-full hover:bg-[#4FD1C5]/90 shadow-lg shadow-[#4FD1C5]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5]"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold text-[#E3E9E8] px-8 py-3.5 border border-[#4A6572]/50 bg-[#0F3A33]/70 hover:bg-[#0F3A33] rounded-full transition-all duration-300 focus:outline-none focus:border-[#4FD1C5] backdrop-blur-md"
          >
            Sign In
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroContent;
