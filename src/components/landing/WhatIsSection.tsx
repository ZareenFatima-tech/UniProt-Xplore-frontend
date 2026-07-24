import React from 'react';

export const WhatIsSection: React.FC = () => {
  return (
    <section id="what-is" className="py-20 px-6 relative border-b border-[#4A6572]/35 bg-[#0F3A33]">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Category Label */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5] font-bold">
            SYSTEM ARCHITECTURE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.15]">
          Not another protein database. A reasoning layer on top of six of them.
        </h2>

        {/* Body (3 Sentences Teaser) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B2B26]/80 border border-[#4A6572]/40 backdrop-blur-md">
          <p className="text-base md:text-lg text-[#E3E9E8]/90 leading-relaxed font-sans">
            UniProt gives you a sequence. PDB gives you a structure, if one exists. AlphaFold predicts one if it doesn't. ChEMBL and DrugBank tell you what binds to it. PubMed tells you what's been published — if you read it yourself. UniProtXplore is the system that does all five of those jobs at once, then tells you what it found.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatIsSection;
