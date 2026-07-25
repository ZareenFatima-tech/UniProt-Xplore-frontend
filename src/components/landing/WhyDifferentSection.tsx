'use client';

import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export const databasesList = [
  'UniProt',
  'PDBe',
  'AlphaFold',
  'ChEMBL',
  'DrugBank',
  'PubMed'
];

export const WhyDifferentSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Section Header (Centered) */}
        <SectionHeader
          eyebrow="SYSTEM DIFFERENTIATION"
          title="Every other tool hands you data. This one hands you an answer."
        />

        {/* Body Paragraph (Left-Aligned within Container) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F3A33]/70 border border-[#4A6572]/40 backdrop-blur-md text-left">
          <p className="text-sm sm:text-base md:text-lg text-[#E3E9E8]/90 leading-relaxed font-sans">
            UniProtKB, PDB, and AlphaFold are excellent at retrieval and terrible at context — none of them know what ChEMBL knows, or what last month's PubMed literature says. UniProtXplore's Insight Synthesis agent is the only thing in this entire chapter of bioinformatics tooling built specifically to reconcile all four domains into one interpretation, with a confidence score attached to it — not just a data table.
          </p>
        </div>

        {/* Six-Database Plain Text Reference Line (Exact Order) */}
        <div className="w-full p-5 rounded-2xl bg-[#0F3A33]/40 border border-[#4A6572]/30 flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-mono uppercase text-[#4FD1C5] font-bold tracking-widest">
            AUTHENTIC DATA REPOSITORIES INTEGRATED
          </span>
          
          {/* Desktop & Tablet Line */}
          <div className="hidden sm:flex items-center justify-center gap-3 font-mono text-xs sm:text-sm text-[#E3E9E8]/80 uppercase tracking-wider font-semibold">
            {databasesList.map((db, idx) => (
              <React.Fragment key={db}>
                <span className="hover:text-[#4FD1C5] transition-colors">{db}</span>
                {idx < databasesList.length - 1 && (
                  <span className="text-[#4FD1C5] font-bold">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Line */}
          <div className="flex sm:hidden flex-wrap items-center justify-center gap-2 font-mono text-xs text-[#E3E9E8]/80 uppercase tracking-wider font-semibold">
            {databasesList.join('  ·  ')}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;
