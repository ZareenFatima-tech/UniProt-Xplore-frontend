import React from 'react';
import Link from 'next/link';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0F3A33] text-center relative overflow-hidden">
      
      {/* Background glowing ambient vector */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#4FD1C5]/10 filter blur-[60px] pointer-events-none" />

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.1]">
          Begin Your Research Journey
        </h2>
        
        <p className="text-sm md:text-base text-[#E3E9E8]/80 leading-relaxed max-w-md font-sans">
          Join thousands of structural biologists and compute labs resolving protein workflows through autonomous molecular intelligence.
        </p>

        <Link
          href="/register"
          className="text-sm font-bold bg-[#4FD1C5] text-[#0B2B26] px-8 py-3.5 rounded-full hover:bg-[#4FD1C5]/90 shadow-lg shadow-[#4FD1C5]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[44px] inline-flex items-center justify-center"
        >
          Get Started Now
        </Link>

      </div>
    </section>
  );
};

export default FinalCTA;
