'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import useReducedMotion from '../../hooks/useReducedMotion';

export interface DatabaseIntegration {
  id: string;
  name: string;
  shortName: string;
  logoSrc: string;
  href: string;
  ariaLabel: string;
  description: string;
}

export const databaseIntegrations: DatabaseIntegration[] = [
  {
    id: 'uniprot',
    name: 'UniProt',
    shortName: 'UniProt',
    logoSrc: '/logos/uniprot.svg',
    href: 'https://www.uniprot.org',
    ariaLabel: 'Open UniProt in a new tab',
    description: 'Curated protein sequence & functional annotation'
  },
  {
    id: 'pdbe',
    name: 'PDBe',
    shortName: 'PDBe',
    logoSrc: '/logos/pdbe.svg',
    href: 'https://www.ebi.ac.uk/pdbe/',
    ariaLabel: 'Open Protein Data Bank in Europe in a new tab',
    description: 'Experimentally determined 3D structures'
  },
  {
    id: 'alphafold',
    name: 'AlphaFold DB',
    shortName: 'AlphaFold DB',
    logoSrc: '/logos/alphafold.svg',
    href: 'https://alphafold.ebi.ac.uk',
    ariaLabel: 'Open AlphaFold Protein Structure Database in a new tab',
    description: 'AI-predicted protein structures'
  },
  {
    id: 'chembl',
    name: 'ChEMBL',
    shortName: 'ChEMBL',
    logoSrc: '/logos/chembl.svg',
    href: 'https://www.ebi.ac.uk/chembl/',
    ariaLabel: 'Open ChEMBL in a new tab',
    description: 'Bioactive molecules & drug discovery'
  },
  {
    id: 'drugbank',
    name: 'DrugBank',
    shortName: 'DrugBank',
    logoSrc: '/logos/drugbank.svg',
    href: 'https://go.drugbank.com',
    ariaLabel: 'Open DrugBank in a new tab',
    description: 'Drug & target information'
  },
  {
    id: 'pubmed',
    name: 'PubMed',
    shortName: 'PubMed',
    logoSrc: '/logos/pubmed.svg',
    href: 'https://pubmed.ncbi.nlm.nih.gov',
    ariaLabel: 'Open PubMed in a new tab',
    description: 'Biomedical literature citations'
  }
];

export const IntegrationMarquee: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedLogos((prev) => ({ ...prev, [id]: true }));
  };

  // Duplicated list (12 items) for seamless infinite marquee loop
  const marqueeItems = [...databaseIntegrations, ...databaseIntegrations];

  return (
    <section id="integrations" className="py-20 border-b border-[#4A6572]/35 bg-[#0F3A33] overflow-hidden">
      
      {/* Inline Keyframe Animation Style */}
      <style jsx>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .integration-track {
          display: flex;
          width: max-content;
          animation: ${reducedMotion ? 'none' : 'marquee-scroll 28s linear infinite'};
          will-change: transform;
        }
        .integration-viewport {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col gap-3">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
            INTEGRATIONS
          </span>
        </div>

        {/* Heading & Subheading (Left-aligned) */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-[#E3E9E8]">
            Built on the data researchers already trust.
          </h2>
          <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed font-sans">
            UniProtXplore synthesizes data from six authoritative biological and chemical databases in real time.
          </p>
        </div>

      </div>

      {/* Marquee Viewport with Edge Fade */}
      <div className="integration-viewport w-full overflow-hidden py-4">
        <div className="integration-track flex items-center gap-8 sm:gap-16">
          {marqueeItems.map((db, index) => {
            const isFailed = failedLogos[`${db.id}-${index}`] || failedLogos[db.id];

            return (
              <a
                key={`${db.id}-${index}`}
                href={db.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={db.ariaLabel}
                className="group flex items-center justify-center shrink-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] rounded-xl p-2"
              >
                {!isFailed ? (
                  <div className="relative h-7 sm:h-10 w-auto flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-focus:grayscale-0 group-focus:opacity-100 transition-all duration-200">
                    <img
                      src={db.logoSrc}
                      alt={`${db.name} Logo`}
                      className="h-7 sm:h-10 w-auto object-contain max-w-[140px] sm:max-w-[180px]"
                      onError={() => handleImageError(`${db.id}-${index}`)}
                    />
                  </div>
                ) : (
                  /* Plain-text wordmark fallback when logo file is missing */
                  <div className="px-4 py-2 rounded-full border border-[#4A6572]/40 bg-[#0B2B26] text-[#E3E9E8] font-display font-bold text-xs sm:text-sm tracking-wide opacity-80 group-hover:opacity-100 group-hover:border-[#4FD1C5] group-hover:text-[#4FD1C5] transition-all duration-200">
                    {db.name}
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default IntegrationMarquee;
