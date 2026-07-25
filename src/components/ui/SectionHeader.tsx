'use client';

import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subheading?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subheading,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center text-center max-w-2xl mx-auto gap-3 ${className}`}>
      {eyebrow && (
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#4FD1C5]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8] leading-[1.15]">
        {title}
      </h2>

      {subheading && (
        <p className="text-xs sm:text-sm md:text-base text-[#E3E9E8]/80 leading-relaxed font-sans max-w-xl">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
