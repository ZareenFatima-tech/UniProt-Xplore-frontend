import React from 'react';
import Link from 'next/link';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0F3A33] text-center relative overflow-hidden">
      
      {/* Background glowing ambient vector */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#4FD1C5]/10 filter blur-[60px] pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.15]">
          Your next protein query doesn't need six browser tabs.
        </h2>
        
        <p className="text-base md:text-xl text-[#E3E9E8]/90 leading-relaxed max-w-xl font-sans">
          Start with one UniProt ID. Let the agents do the rest.
        </p>

        <Link
          href="/register"
          className="text-sm font-bold bg-[#4FD1C5] text-[#0B2B26] px-8 py-3.5 rounded-full hover:bg-[#4FD1C5]/90 shadow-lg shadow-[#4FD1C5]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[48px] flex items-center justify-center mt-2"
        >
          Get Started
        </Link>

      </div>
    </section>
  );
};

export default FinalCTA;
