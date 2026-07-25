'use client';

import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export interface DatabaseButton {
  id: string;
  num: string;
  name: string;
  desc: string;
  href: string;
  ariaLabel: string;
  svgIcon: React.ReactNode;
}

export const databaseButtons: DatabaseButton[] = [
  {
    id: 'uniprot',
    num: '01',
    name: 'UniProt',
    desc: 'Curated protein sequence & functional annotation',
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
    num: '02',
    name: 'PDBe',
    desc: 'Experimentally determined 3D structures',
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
    num: '03',
    name: 'AlphaFold DB',
    desc: 'AI-predicted protein structures',
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
    num: '04',
    name: 'ChEMBL',
    desc: 'Bioactive molecules & drug discovery',
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
    num: '05',
    name: 'DrugBank',
    desc: 'Drug & target information',
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
    num: '06',
    name: 'PubMed',
    desc: 'Biomedical literature citations',
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
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Section Header (Centered) */}
        <SectionHeader
          eyebrow="SYSTEM DIFFERENTIATION"
          title="Every other tool hands you data. This one hands you an answer."
        />

        {/* Body Paragraph (Left-Aligned within Container) */}
        <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0F3A33]/70 border border-[#4A6572]/40 backdrop-blur-md text-left">
          <p className="text-body-lg text-[#E3E9E8]/90">
            UniProtKB, PDB, and AlphaFold are excellent at retrieval and terrible at context — none of them know what ChEMBL knows, or what last month's PubMed literature says. UniProtXplore's Insight Synthesis agent is the only thing in this entire chapter of bioinformatics tooling built specifically to reconcile all four domains into one interpretation, with a confidence score attached to it — not just a data table.
          </p>
        </div>

        {/* Trusted Databases Section Header */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-[#4A6572]/30 text-center w-full">
          <span className="text-body-sm font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
            INTEGRATED DATA REPOSITORIES
          </span>

          {/* 6 Concise Database Buttons Aligned in a Single Horizontal Sequence Row (01 -> 02 -> 03 -> 04 -> 05 -> 06) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-2 w-full">
            {databaseButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={btn.ariaLabel}
                className="p-3.5 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/40 hover:border-[#4FD1C5] hover:bg-[#0B2B26] text-[#E3E9E8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] flex flex-col justify-between gap-2 group text-left shadow-md shadow-[#0F3A33]/30 min-h-[92px] cursor-pointer"
              >
                <div className="flex items-center justify-between gap-1.5">
                  <span className="text-[#4FD1C5] group-hover:scale-110 transition-transform">
                    {btn.svgIcon}
                  </span>
                  <span className="text-[10px] font-mono text-[#4FD1C5] bg-[#0B2B26] px-2 py-0.5 rounded-full border border-[#4FD1C5]/30">
                    {btn.num}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 mt-1">
                  <span className="text-body-sm font-display font-bold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors truncate">
                    {btn.name}
                  </span>

                  {/* 1-Line Brief Description Directly Beneath Name */}
                  <p className="text-body-sm text-[#E3E9E8]/75 leading-tight line-clamp-2">
                    {btn.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;
