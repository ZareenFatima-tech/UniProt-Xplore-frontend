import React from 'react';

export const WhyDifferentSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 px-6 relative border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#4FD1C5]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
              SYSTEM DIFFERENTIATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.1]">
            Every other tool hands you data. This one hands you an answer.
          </h2>

        </div>

        {/* Body Paragraph Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F3A33]/70 border border-[#4A6572]/40 backdrop-blur-md">
          <p className="text-base md:text-lg text-[#E3E9E8]/90 leading-relaxed font-sans">
            UniProtKB, PDB, and AlphaFold are excellent at retrieval and terrible at context — none of them know what ChEMBL knows, or what last month's PubMed literature says. UniProtXplore's Insight Synthesis agent is the only thing in this entire chapter of bioinformatics tooling built specifically to reconcile all four domains into one interpretation, with a confidence score attached to it — not just a data table.
          </p>
        </div>

        {/* Proof Line Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0B2B26] border border-[#4FD1C5]/30 flex flex-col gap-2">
          <span className="text-xs font-mono uppercase text-[#4FD1C5] font-bold tracking-wider">
            Multi-Agent Pipeline Architecture
          </span>
          <p className="text-xs sm:text-sm font-mono text-[#E3E9E8]/90 leading-relaxed">
            <strong className="text-[#E3E9E8]">Five specialized agents. One shared entity. Zero manual cross-referencing:</strong> Data Acquisition &nbsp;·&nbsp; Structure–Function Analysis &nbsp;·&nbsp; Chemical Interaction &nbsp;·&nbsp; Literature Intelligence &nbsp;·&nbsp; Insight Synthesis.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;
