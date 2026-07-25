'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

export interface TrustedDatabaseCard {
  id: string;
  num: string;
  name: string;
  desc: string;
  href: string;
  ariaLabel: string;
}

export const trustedDatabases: TrustedDatabaseCard[] = [
  {
    id: 'uniprot',
    num: '01',
    name: 'UniProt',
    desc: 'Curated protein sequence & functional annotation',
    href: 'https://www.uniprot.org',
    ariaLabel: 'Open UniProt in a new tab'
  },
  {
    id: 'pdbe',
    num: '02',
    name: 'PDBe',
    desc: 'Experimentally determined 3D structures',
    href: 'https://www.ebi.ac.uk/pdbe/',
    ariaLabel: 'Open Protein Data Bank in Europe in a new tab'
  },
  {
    id: 'alphafold',
    num: '03',
    name: 'AlphaFold DB',
    desc: 'AI-predicted protein structures',
    href: 'https://alphafold.ebi.ac.uk',
    ariaLabel: 'Open AlphaFold DB in a new tab'
  },
  {
    id: 'chembl',
    num: '04',
    name: 'ChEMBL',
    desc: 'Bioactive molecules & drug discovery',
    href: 'https://www.ebi.ac.uk/chembl/',
    ariaLabel: 'Open ChEMBL in a new tab'
  },
  {
    id: 'drugbank',
    num: '05',
    name: 'DrugBank',
    desc: 'Drug & target information',
    href: 'https://go.drugbank.com',
    ariaLabel: 'Open DrugBank in a new tab'
  },
  {
    id: 'pubmed',
    num: '06',
    name: 'PubMed',
    desc: 'Biomedical literature citations',
    href: 'https://pubmed.ncbi.nlm.nih.gov',
    ariaLabel: 'Open PubMed in a new tab'
  }
];

export const WhyDifferentSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
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

        {/* Trusted Databases Section Header & Subtitle */}
        <div className="flex flex-col items-center gap-3 pt-6 border-t border-[#4A6572]/30 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
            INTEGRATED DATA REPOSITORIES
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#E3E9E8]">
            Trusted Databases
          </h3>
          <p className="text-xs sm:text-sm text-[#E3E9E8]/80 max-w-xl font-sans">
            UniProtXplore synthesizes evidence from six authoritative biological and chemical repositories in real time.
          </p>
        </div>

        {/* 6 Concise Database Cards Grid (Strict Sequence: UniProt -> PDBe -> AlphaFold DB -> ChEMBL -> DrugBank -> PubMed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {trustedDatabases.map((db) => (
            <div
              key={db.id}
              className="p-6 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/40 hover:border-[#4FD1C5] transition-all duration-300 flex flex-col justify-between gap-5 group shadow-lg shadow-[#0F3A33]/20 hover:shadow-[#4FD1C5]/10"
            >
              <div className="flex flex-col gap-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#4FD1C5] bg-[#0B2B26] px-2.5 py-1 rounded-full border border-[#4FD1C5]/30">
                    {db.num}
                  </span>
                  <span className="text-[10px] font-mono text-[#E3E9E8]/50 uppercase tracking-widest">
                    Verified Source
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors mt-1">
                  {db.name}
                </h4>

                <p className="text-xs text-[#E3E9E8]/80 leading-relaxed font-sans min-h-[36px]">
                  {db.desc}
                </p>
              </div>

              {/* Clickable URL Button */}
              <a
                href={db.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={db.ariaLabel}
                className="w-full text-xs font-semibold bg-[#0B2B26] border border-[#4A6572]/40 text-[#E3E9E8] hover:bg-[#0F3A33] hover:border-[#4FD1C5] hover:text-[#4FD1C5] py-2.5 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[40px] flex items-center justify-between group-hover:border-[#4FD1C5]/50"
              >
                <span className="truncate font-mono">{db.href.replace('https://', '')}</span>
                <ExternalLink size={14} className="shrink-0 text-[#4FD1C5]" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;
