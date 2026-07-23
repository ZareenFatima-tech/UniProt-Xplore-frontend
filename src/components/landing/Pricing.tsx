'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InternationalPaymentModal from '../ui/InternationalPaymentModal';
import InstitutionContactModal from '../ui/InstitutionContactModal';

export const Pricing: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInstitutionModal, setShowInstitutionModal] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#4A6572]/35 bg-[#0B2B26]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Category Label (Centered) */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#4FD1C5]">
            Subscription Rates
          </span>
          <span className="h-[1px] w-8 bg-[#4FD1C5]" />
        </div>

        {/* Headline (Centered) */}
        <div className="flex flex-col gap-3 text-center items-center">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-[#E3E9E8]">
            Platform Pricing
          </h2>
          <p className="text-sm md:text-base text-[#E3E9E8]/80 leading-relaxed max-w-xl">
            Choose the workspace scale that fits your laboratory size. Start analyzing proteins in minutes.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-4">
          
          {/* Tier 1: Free — Researcher Starter */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/35 flex flex-col justify-between gap-6 hover:border-[#4FD1C5]/40 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#4FD1C5] uppercase tracking-wider">Tier 01</span>
                <h3 className="text-xl font-display font-bold text-[#E3E9E8]">Free Trial</h3>
                <span className="text-xs text-[#E3E9E8]/70">Researcher Starter</span>
              </div>
              
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-4xl font-mono font-extrabold text-[#E3E9E8]">$0</span>
                <span className="text-xs text-[#E3E9E8]/60 font-mono">/ 3 free targets</span>
              </div>

              <ul className="flex flex-col gap-2.5 mt-4 text-xs text-[#E3E9E8]/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> 3 free UniProt ID target analyses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Core sequence, physicochemical & literature data
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> FASTA & PDF scientific report exports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Signup history saved to Supabase
                </li>
              </ul>
            </div>

            <Link
              href="/register?plan=free"
              className="w-full text-center text-xs font-semibold bg-[#0B2B26] border border-[#4A6572]/40 text-[#E3E9E8] hover:bg-[#0F3A33] hover:border-[#4FD1C5] py-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[44px] flex items-center justify-center"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Tier 2: Lab — Individual Researcher (Most Popular) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F3A33] border-2 border-[#4FD1C5] flex flex-col justify-between gap-6 relative shadow-xl shadow-[#4FD1C5]/10 hover:border-[#4FD1C5] transition-all duration-300">
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#4FD1C5] text-[#0B2B26] text-[10px] font-mono font-bold uppercase tracking-wider">
              Most Popular
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#4FD1C5] uppercase tracking-wider">Tier 02</span>
                <h3 className="text-xl font-display font-bold text-[#E3E9E8]">Lab Plan</h3>
                <span className="text-xs text-[#E3E9E8]/70">Individual Researcher</span>
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-4xl font-mono font-extrabold text-[#E3E9E8]">$20</span>
                <span className="text-xs text-[#E3E9E8]/60 font-mono">/ mo</span>
              </div>

              <ul className="flex flex-col gap-2.5 mt-4 text-xs text-[#E3E9E8]/90">
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Unlimited single & batch protein analyses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> International payment methods (Visa/MC/AMEX)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Automatic $20.00 USD balance verification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Payment history saved to Supabase
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowPaymentModal(true)}
              className="w-full text-center text-xs font-bold bg-[#4FD1C5] text-[#0B2B26] hover:bg-[#4FD1C5]/90 py-3.5 rounded-full transition-all shadow-md shadow-[#4FD1C5]/20 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Upgrade to Lab Plan ($20/mo)
            </button>
          </div>

          {/* Tier 3: Institution — Team & Lab License */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F3A33] border border-[#4A6572]/35 flex flex-col justify-between gap-6 hover:border-[#4FD1C5]/40 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#4FD1C5] uppercase tracking-wider">Tier 03</span>
                <h3 className="text-xl font-display font-bold text-[#E3E9E8]">Institution</h3>
                <span className="text-xs text-[#E3E9E8]/70">Team & Lab License</span>
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-2xl font-mono font-bold text-[#E3E9E8]">Custom</span>
                <span className="text-xs text-[#E3E9E8]/60 font-mono">/ contact sales</span>
              </div>

              <ul className="flex flex-col gap-2.5 mt-4 text-xs text-[#E3E9E8]/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Everything in Lab Plan
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Multi-user seats & role-based access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Shared research workspace & tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4FD1C5]">✓</span> Dedicated onboarding & SLA support
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowInstitutionModal(true)}
              className="w-full text-center text-xs font-semibold bg-[#0B2B26] border border-[#4A6572]/40 text-[#E3E9E8] hover:bg-[#0F3A33] hover:border-[#4FD1C5] py-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              Contact Institution Sales
            </button>
          </div>

        </div>

      </div>

      {/* International Payment Gateway Modal */}
      <InternationalPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={() => {
          setShowPaymentModal(false);
          alert('Lab Plan ($20.00 USD) activated! Unlimited access unlocked.');
        }}
      />

      {/* Institution Sales Contact Modal */}
      <InstitutionContactModal
        isOpen={showInstitutionModal}
        onClose={() => setShowInstitutionModal(false)}
      />
    </section>
  );
};

export default Pricing;
