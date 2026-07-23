import React from 'react';
import TrustedDatabases from './TrustedDatabases';

export const WhyDifferentSection: React.FC = () => {
  return (
    <section id="platform" className="py-24 px-6 relative border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        {/* 1. System Differentiation & Uniqueness Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          
          {/* Badge (Centered) */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#4FD1C5]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5]">
              System Differentiation
            </span>
            <span className="h-[1px] w-8 bg-[#4FD1C5]" />
          </div>

          {/* Title (STRICTLY CENTERED) */}
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.1]">
            UniProtXplore Uniqueness
          </h2>

          {/* Highlighted Statement (CENTERED) */}
          <p className="text-lg md:text-2xl font-display font-bold text-[#4FD1C5] max-w-2xl leading-snug">
            &ldquo;Six databases. One question. One answer in minutes, not hours.&rdquo;
          </p>

          {/* Body Paragraph (LEFT-ALIGNED UI/UX Format) */}
          <div className="w-full max-w-2xl mt-2 p-6 rounded-2xl bg-[#0F3A33]/50 border border-[#4A6572]/30 text-left">
            <p className="text-sm md:text-base text-[#E3E9E8]/90 leading-relaxed font-sans">
              UniProtXplore turns a UniProt ID into a complete, AI-reasoned protein profile sequence, structure, chemistry, and literature, synthesized by autonomous agents instead of six manual searches.
            </p>
          </div>

        </div>

        {/* 2. Integrations / Trusted Databases (Inside Platform Section) */}
        <div className="flex flex-col items-center gap-6 pt-12 border-t border-[#4A6572]/35">
          
          {/* Badge & Title (STRICTLY CENTERED) */}
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5]">
              Integrations
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-[#E3E9E8]">
              Trusted Databases
            </h3>
          </div>

          {/* Integrations Subtitle (LEFT-ALIGNED UI/UX Format) */}
          <div className="w-full max-w-xl p-4 rounded-xl bg-[#0F3A33]/30 border border-[#4A6572]/20 text-left">
            <p className="text-xs md:text-sm text-[#E3E9E8]/80 leading-relaxed font-sans">
              UniProtXplore connects with official structural, chemical, and genomic repositories to gather evidence for every analysis.
            </p>
          </div>

          {/* Logo Grid */}
          <TrustedDatabases compact={true} />

        </div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;
