import React from 'react';
import ProteinSearch from '../../components/dashboard/ProteinSearch';

export default function DashboardPage() {
  return (
    <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-12 flex flex-col items-center justify-center text-center my-auto min-h-[75vh]">
      <div className="w-full flex flex-col items-center gap-8 p-8 md:p-12 rounded-3xl bg-[#0F3A33]/60 border border-[#4A6572]/35 shadow-2xl backdrop-blur-md">
        
        {/* Category Label */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5]">
            Sequence Intelligence Console
          </span>
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8]">
            UniProtXplore Workspace
          </h1>
          <p className="text-sm md:text-base text-[#E3E9E8]/80 leading-relaxed max-w-xl mx-auto font-sans">
            Enter any UniProt ID sequence or accession symbol to spin up an autonomous protein intelligence analysis.
          </p>
        </div>

        {/* Search Entry Box */}
        <div className="w-full mt-2">
          <ProteinSearch />
        </div>

      </div>
    </main>
  );
}
