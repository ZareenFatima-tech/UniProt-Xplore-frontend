import React from 'react';

export const WhatIsSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 px-6 relative border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Category Label */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5]">
            System Introduction
          </span>
        </div>

        {/* Narrative Copy */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.1]">
            What is UniProtXplore?
          </h2>
          <p className="text-base md:text-xl text-[#E3E9E8]/90 leading-relaxed max-w-3xl font-sans">
            UniProtXplore is a next-generation autonomous protein intelligence platform designed for researchers, structural biologists, and drug discovery teams. It bridges the gap between raw genomic data and structural molecular dynamics.
          </p>
          <p className="text-sm md:text-base text-[#E3E9E8]/75 leading-relaxed max-w-3xl font-sans">
            By orchestrating coordinated AI reasoning agents, the platform automatically retrieves, models, and cross-references data from the Protein Data Bank (PDBe), AlphaFold, UniProt, and chemical databases to deliver synthesized biological insights.
          </p>
        </div>

        {/* Visual scientific details list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#4A6572]/35 pt-10">
          <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/35">
            <h3 className="font-mono text-xs text-[#4FD1C5] uppercase tracking-wider">
              01 / Curated Sequence Mining
            </h3>
            <p className="text-xs text-[#E3E9E8]/80 leading-relaxed">
              Synthesizing curated protein annotation metrics, structural residues, active site mutations, and secondary sheets dynamically.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/35">
            <h3 className="font-mono text-xs text-[#4FD1C5] uppercase tracking-wider">
              02 / Unified Agent Workspace
            </h3>
            <p className="text-xs text-[#E3E9E8]/80 leading-relaxed">
              Consolidating multiple bioinformatics inputs into structured, audit-ready scientific documentation with full literature citations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatIsSection;
