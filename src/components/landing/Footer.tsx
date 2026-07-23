import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#4A6572]/35 bg-[#0F3A33] py-12 px-4 sm:px-6 lg:px-8 pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Official Brand Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3 focus:outline-none min-h-[44px]" aria-label="UniProtXplore Homepage">
          <div className="relative w-8 h-8 overflow-hidden rounded-xl border border-[#4FD1C5]/40 shadow-md shadow-[#4FD1C5]/20 bg-[#0B2B26] shrink-0 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="UniProtXplore Logo"
              width={32}
              height={32}
              className="object-cover w-full h-full filter drop-shadow-[0_0_6px_rgba(79,209,197,0.5)]"
            />
          </div>
          <span className="font-display font-extrabold text-base tracking-tight text-[#E3E9E8]">
            UniProtXplore
          </span>
        </Link>

        {/* Links list with 44x44px touch padding */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <Link href="#platform" className="text-xs text-[#E3E9E8]/70 hover:text-[#4FD1C5] transition-colors py-2 min-h-[44px] flex items-center">Platform</Link>
          <Link href="#how-it-works" className="text-xs text-[#E3E9E8]/70 hover:text-[#4FD1C5] transition-colors py-2 min-h-[44px] flex items-center">How It Works</Link>
          <Link href="#pricing" className="text-xs text-[#E3E9E8]/70 hover:text-[#4FD1C5] transition-colors py-2 min-h-[44px] flex items-center">Pricing</Link>
          <Link href="#privacy" className="text-xs text-[#E3E9E8]/70 hover:text-[#4FD1C5] transition-colors py-2 min-h-[44px] flex items-center">Privacy Policy</Link>
          <Link href="#terms" className="text-xs text-[#E3E9E8]/70 hover:text-[#4FD1C5] transition-colors py-2 min-h-[44px] flex items-center">Terms of Service</Link>
        </div>

        {/* Legal copy */}
        <p className="text-xs text-[#E3E9E8]/60 font-mono">
          &copy; {new Date().getFullYear()} UniProtXplore. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
