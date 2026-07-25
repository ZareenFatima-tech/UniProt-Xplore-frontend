'use client';

import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export interface DatabaseButton {
  id: string;
  name: string;
  href: string;
  ariaLabel: string;
  svgIcon: React.ReactNode;
}

export const databaseButtons: DatabaseButton[] = [
  {
    id: 'uniprot',
    name: 'UniProt',
    href: 'https://www.uniprot.org',
    ariaLabel: 'Open UniProt website in a new tab',
    svgIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    id: 'pdbe',
    name: 'PDBe',
    href: 'https://www.ebi.ac.uk/pdbe/',
    ariaLabel: 'Open Protein Data Bank in Europe website in a new tab',
    svgIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: 'alphafold',
    name: 'AlphaFold DB',
    href: 'https://alphafold.ebi.ac.uk',
    ariaLabel: 'Open AlphaFold Protein Structure Database in a new tab',
    svgIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 'chembl',
    name: 'ChEMBL',
    href: 'https://www.ebi.ac.uk/chembl/',
    ariaLabel: 'Open ChEMBL website in a new tab',
    svgIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.75 19.9A2 2 0 0 0 6.5 23h11a2 2 0 0 0 1.75-3.1L14 9.31V2" />
        <line x1="8.5" y1="2" x2="15.5" y2="2" />
      </svg>
    )
  },
  {
    id: 'drugbank',
    name: 'DrugBank',
    href: 'https://go.drugbank.com',
    ariaLabel: 'Open DrugBank website in a new tab',
    svgIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
      </svg>
    )
  },
  {
    id: 'pubmed',
    name: 'PubMed',
    href: 'https://pubmed.ncbi.nlm.nih.gov',
    ariaLabel: 'Open PubMed literature database in a new tab',
    svgIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    )
  }
];

export const WhyDifferentSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        
        {/* Section Header (Centered) */}
        <SectionHeader
          eyebrow="SYSTEM DIFFERENTIATION"
          title="Every other tool hands you data. This one hands you an answer."
        />

        {/* Body Paragraph (Left-Aligned within Container) */}
        <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0F3A33]/70 border border-[#4A6572]/40 backdrop-blur-md text-left">
          <p className="text-sm sm:text-base md:text-lg text-[#E3E9E8]/90 leading-relaxed font-sans">
            UniProtKB, PDB, and AlphaFold are excellent at retrieval and terrible at context — none of them know what ChEMBL knows, or what last month's PubMed literature says. UniProtXplore's Insight Synthesis agent is the only thing in this entire chapter of bioinformatics tooling built specifically to reconcile all four domains into one interpretation, with a confidence score attached to it — not just a data table.
          </p>
        </div>

        {/* Trusted Databases Section (6 Small UI/UX Buttons Strictly Aligned in Sequence) */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-[#4A6572]/30 text-center w-full">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
            INTEGRATED DATA REPOSITORIES
          </span>

          {/* 6 Compact Buttons Aligned in Sequence (No public text URLs shown) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2 w-full">
            {databaseButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={btn.ariaLabel}
                className="px-4 py-2.5 rounded-full bg-[#0F3A33] border border-[#4A6572]/40 hover:border-[#4FD1C5] hover:bg-[#0B2B26] text-[#E3E9E8] hover:text-[#4FD1C5] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] text-xs font-mono font-bold flex items-center gap-2.5 group shadow-md shadow-[#0F3A33]/30 min-h-[40px] cursor-pointer shrink-0"
              >
                <span className="text-[#4FD1C5] group-hover:scale-110 transition-transform">
                  {btn.svgIcon}
                </span>
                <span>{btn.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;
