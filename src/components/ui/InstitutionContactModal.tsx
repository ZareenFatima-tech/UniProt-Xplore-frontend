'use client';

import React from 'react';
import { X, Phone, Mail, Building2, ExternalLink } from 'lucide-react';
import Button from './Button';

interface InstitutionContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstitutionContactModal: React.FC<InstitutionContactModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const linkedinUrl = 'https://www.linkedin.com/in/zareen-agentic-aiengineer';
  const phoneNo = '+923201091120';
  const emailAddr = 'zareenfatima114@gmail.com';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0F3A33] border border-[#4A6572]/40 rounded-3xl p-6 sm:p-8 text-[#E3E9E8] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#E3E9E8]/60 hover:text-[#E3E9E8] hover:bg-[#0B2B26] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-3 text-center items-center border-b border-[#4A6572]/30 pb-5 mb-6">
          <div className="w-14 h-14 rounded-full bg-[#4FD1C5]/10 flex items-center justify-center text-[#4FD1C5] border border-[#4FD1C5]/30">
            <Building2 size={26} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4FD1C5]">
              Tier 03 — Institution & Enterprise Sales
            </span>
            <h3 className="text-2xl font-display font-extrabold text-[#E3E9E8]">
              Contact Lead AI Engineer
            </h3>
            <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed font-sans max-w-md mx-auto">
              Contact our Lead Agentic AI Engineer directly for multi-user team seats, custom SLA, and dedicated enterprise deployment.
            </p>
          </div>
        </div>

        {/* Contact Channels List */}
        <div className="flex flex-col gap-3.5 font-sans">
          
          {/* LinkedIn Channel */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#0B2B26] border border-[#4A6572]/35 hover:border-[#4FD1C5] transition-all duration-200 flex items-center justify-between group min-h-[48px]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] border border-[#0A66C2]/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-mono uppercase text-[#E3E9E8]/60">LinkedIn Profile</span>
                <span className="text-xs font-semibold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors break-all">
                  linkedin.com/in/zareen-agentic-aiengineer
                </span>
              </div>
            </div>
            <ExternalLink size={16} className="text-[#E3E9E8]/50 group-hover:text-[#4FD1C5] transition-colors shrink-0" />
          </a>

          {/* Phone / WhatsApp Channel */}
          <a
            href={`tel:${phoneNo}`}
            className="p-4 rounded-2xl bg-[#0B2B26] border border-[#4A6572]/35 hover:border-[#4FD1C5] transition-all duration-200 flex items-center justify-between group min-h-[48px]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-mono uppercase text-[#E3E9E8]/60">Phone / WhatsApp</span>
                <span className="text-xs font-mono font-bold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors">
                  {phoneNo}
                </span>
              </div>
            </div>
            <ExternalLink size={16} className="text-[#E3E9E8]/50 group-hover:text-[#4FD1C5] transition-colors shrink-0" />
          </a>

          {/* Email Channel */}
          <a
            href={`mailto:${emailAddr}?subject=UniProtXplore%20Institution%20Sales%20Inquiry`}
            className="p-4 rounded-2xl bg-[#0B2B26] border border-[#4A6572]/35 hover:border-[#4FD1C5] transition-all duration-200 flex items-center justify-between group min-h-[48px]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EA4335]/15 text-[#EA4335] border border-[#EA4335]/30 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-mono uppercase text-[#E3E9E8]/60">Direct Email</span>
                <span className="text-xs font-semibold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors">
                  {emailAddr}
                </span>
              </div>
            </div>
            <ExternalLink size={16} className="text-[#E3E9E8]/50 group-hover:text-[#4FD1C5] transition-colors shrink-0" />
          </a>

        </div>

        {/* Action Button & Close */}
        <div className="flex flex-col gap-2 mt-6">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full text-center py-3.5 min-h-[48px] font-bold text-sm flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </Button>
          </a>
          
          <button
            onClick={onClose}
            className="text-xs text-[#E3E9E8]/60 hover:text-[#4FD1C5] transition-colors py-2 text-center"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default InstitutionContactModal;
