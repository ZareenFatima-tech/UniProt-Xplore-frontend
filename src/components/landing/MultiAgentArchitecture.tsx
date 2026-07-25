'use client';

import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export const agentsList = [
  'Data Acquisition',
  'Structure–Function Analysis',
  'Chemical Interaction',
  'Literature Intelligence',
  'Insight Synthesis'
];

export const MultiAgentArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0F3A33]">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Section Header (Centered) */}
        <SectionHeader
          eyebrow="SYSTEM ARCHITECTURE"
          title="Multi-Agent Pipeline Architecture"
          subheading="Five specialized agents. One shared entity. Zero manual cross-referencing."
        />

        {/* Distinct Five-Agent Visual Row */}
        <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-[#0B2B26]/80 border border-[#4A6572]/40 backdrop-blur-md">
          
          {/* Desktop & Tablet: Horizontal Divider-Separated Row */}
          <div className="hidden md:flex items-center justify-between gap-4 text-mono text-[#E3E9E8]/90">
            {agentsList.map((agent, idx) => (
              <React.Fragment key={agent}>
                <span className="text-center px-2 hover:text-[#4FD1C5] transition-colors">
                  {agent}
                </span>
                {idx < agentsList.length - 1 && (
                  <span className="text-[#4FD1C5] font-bold">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile (<768px): Flexible Wrapping Pills */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-2.5 text-mono text-xs text-[#E3E9E8]">
            {agentsList.map((agent) => (
              <span
                key={agent}
                className="px-3.5 py-2 rounded-full bg-[#0F3A33] border border-[#4A6572]/40 text-center font-semibold"
              >
                {agent}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MultiAgentArchitecture;
