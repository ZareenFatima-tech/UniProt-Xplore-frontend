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
        <div className="flex items-center justify-center gap-2 mb-0.5">
          <span className="text-body-sm font-mono font-bold uppercase tracking-widest text-[#4FD1C5]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-display-lg text-[#E3E9E8]">
        {title}
      </h2>

      {subheading && (
        <p className="text-body-lg text-[#E3E9E8]/80 max-w-xl">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
