'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-20 flex items-center justify-center pointer-events-none px-4 sm:px-6 py-16 sm:py-24 w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="px-4 py-1.5 rounded-full border border-[#4FD1C5]/30 bg-[#4FD1C5]/10 text-[#4FD1C5] text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md text-center"
        >
          AUTONOMOUS PROTEIN INTELLIGENCE
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.1] text-center max-w-4xl"
        >
          One protein ID. Six databases. One AI that actually reasons about what it finds.
        </motion.h1>

        {/* Subheadline Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="text-sm sm:text-base md:text-lg text-[#E3E9E8]/90 max-w-3xl text-center leading-relaxed font-sans p-5 sm:p-6 rounded-2xl bg-[#0F3A33]/60 border border-[#4A6572]/30 backdrop-blur-md"
        >
          <p>
            UniProtXplore is the only platform that treats a UniProt ID as a living entity — not a search box you paste into UniProtKB, then PDB, then AlphaFold, then ChEMBL, then DrugBank, then PubMed, one at a time. Five autonomous agents do that work for you, then tell you what it means.
          </p>
        </motion.div>

        {/* Action Buttons & Scroll-hook */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center gap-3 mt-2 pointer-events-auto w-full"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md">
            <Link
              href="/register"
              className="w-full sm:w-auto text-center text-sm font-bold bg-[#4FD1C5] text-[#0B2B26] px-8 py-3.5 rounded-full hover:bg-[#4FD1C5]/90 shadow-lg shadow-[#4FD1C5]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[48px] flex items-center justify-center"
            >
              Get Started
            </Link>
            <Link
              href="/dashboard"
              className="w-full sm:w-auto text-center text-sm font-semibold text-[#E3E9E8] px-8 py-3.5 hover:bg-[#0F3A33] border border-[#4A6572]/40 rounded-full transition-all duration-200 focus:outline-none focus:border-[#4FD1C5] min-h-[48px] flex items-center justify-center bg-[#0F3A33]/40"
            >
              Analyze UniProt ID
            </Link>
          </div>

          {/* Scroll-hook line */}
          <a
            href="#how-it-works"
            className="text-xs font-mono text-[#4FD1C5] hover:underline transition-all mt-2 min-h-[36px] flex items-center gap-1.5"
          >
            <span>See the five agents work in real time ↓</span>
          </a>
        </motion.div>

        {/* Micro-Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mt-4 px-4 py-2 rounded-full bg-[#0B2B26]/80 border border-[#4A6572]/30 text-[11px] sm:text-xs font-mono text-[#E3E9E8]/80 text-center tracking-wide backdrop-blur-md"
        >
          <span>6 integrated databases &nbsp;·&nbsp; 5 autonomous agents &nbsp;·&nbsp; 1 UniProt ID as the entry point</span>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroContent;
