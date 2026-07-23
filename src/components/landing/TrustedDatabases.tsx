import React from 'react';

export const databases = [
  {
    name: 'UniProt',
    shortName: 'UniProt',
    description: 'Curated protein sequence & functional annotation',
    href: 'https://www.uniprot.org',
    ariaLabel: 'Open UniProt in a new tab',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    name: 'PDBe',
    fullName: 'Protein Data Bank Europe',
    description: 'Experimentally determined 3D structures',
    href: 'https://www.ebi.ac.uk/pdbe/',
    ariaLabel: 'Open Protein Data Bank in Europe in a new tab',
    iconPath: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  },
  {
    name: 'AlphaFold DB',
    fullName: 'AlphaFold DB',
    description: 'AI-predicted protein structures',
    href: 'https://alphafold.ebi.ac.uk',
    ariaLabel: 'Open AlphaFold Protein Structure Database in a new tab',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  },
  {
    name: 'ChEMBL',
    shortName: 'ChEMBL',
    description: 'Bioactive molecules & drug discovery',
    href: 'https://www.ebi.ac.uk/chembl/',
    ariaLabel: 'Open ChEMBL in a new tab',
    iconPath: 'M10 2v7.31L4.75 19.9A2 2 0 0 0 6.5 23h11a2 2 0 0 0 1.75-3.1L14 9.31V2'
  },
  {
    name: 'DrugBank',
    shortName: 'DrugBank',
    description: 'Drug & target information',
    href: 'https://go.drugbank.com',
    ariaLabel: 'Open DrugBank in a new tab',
    iconPath: 'm10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z'
  },
  {
    name: 'PubMed',
    shortName: 'PubMed',
    description: 'Biomedical literature citations',
    href: 'https://pubmed.ncbi.nlm.nih.gov',
    ariaLabel: 'Open PubMed in a new tab',
    iconPath: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z'
  }
];

interface TrustedDatabasesProps {
  compact?: boolean;
}

export const TrustedDatabases: React.FC<TrustedDatabasesProps> = ({ compact = false }) => {
  return (
    <div className="w-full">
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 ${compact ? 'mt-4' : 'mt-8'}`}>
        {databases.map((db) => (
          <a
            key={db.name}
            href={db.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/35 flex flex-col justify-between gap-3 group hover:border-[#4FD1C5]/60 hover:shadow-lg hover:shadow-[#4FD1C5]/5 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[110px]"
            aria-label={db.ariaLabel}
          >
            {/* Logo Icon & Name */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 flex items-center justify-center text-[#4FD1C5] group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={db.iconPath} />
                </svg>
              </div>
              <span className="font-display font-bold text-xs sm:text-sm text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors duration-300 truncate">
                {db.name}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-[11px] text-[#E3E9E8]/70 leading-tight font-sans line-clamp-2">
              {db.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrustedDatabases;
