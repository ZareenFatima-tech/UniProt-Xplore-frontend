'use client';

import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Zap } from 'lucide-react';
import Button from './Button';
import InternationalPaymentModal from './InternationalPaymentModal';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [showPayment, setShowPayment] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
        <div className="relative w-full max-w-lg bg-[#0F3A33] border border-[#4A6572]/40 rounded-3xl p-6 sm:p-8 text-[#E3E9E8] shadow-2xl">
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#E3E9E8]/60 hover:text-[#E3E9E8] hover:bg-[#0B2B26] transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col items-center gap-4 text-center">
            
            <div className="w-14 h-14 rounded-full bg-[#F87171]/10 flex items-center justify-center text-[#F87171] border border-[#F87171]/30">
              <Lock size={26} />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F87171]">
                Free Trial Limit Reached (3/3 Used)
              </span>
              <h3 className="text-2xl font-display font-extrabold text-[#E3E9E8]">
                Upgrade Your Research Workspace
              </h3>
              <p className="text-xs sm:text-sm text-[#E3E9E8]/80 leading-relaxed font-sans max-w-md mx-auto">
                You have reached your free trial quota of 3 UniProt target analyses. Upgrade to the <span className="text-[#4FD1C5] font-bold">Lab Plan ($20/mo)</span> to unlock unlimited target analyses and instant FASTA/PDF report exports.
              </p>
            </div>

            {/* Included Features List */}
            <div className="w-full p-4 rounded-2xl bg-[#0B2B26] border border-[#4A6572]/30 flex flex-col gap-2 text-xs font-sans text-left mt-2">
              <div className="flex items-center gap-2 text-[#E3E9E8]">
                <CheckCircle2 size={16} className="text-[#4FD1C5] shrink-0" />
                <span>Unlimited UniProt ID & Gene Target Searches</span>
              </div>
              <div className="flex items-center gap-2 text-[#E3E9E8]">
                <CheckCircle2 size={16} className="text-[#4FD1C5] shrink-0" />
                <span>Unlimited FASTA Sequence & PDF Scientific Report Exports</span>
              </div>
              <div className="flex items-center gap-2 text-[#E3E9E8]">
                <CheckCircle2 size={16} className="text-[#4FD1C5] shrink-0" />
                <span>Priority Multi-Agent Reasoning Execution Threads</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full mt-4">
              <Button
                onClick={() => setShowPayment(true)}
                className="w-full py-3.5 min-h-[48px] text-sm font-bold flex items-center justify-center gap-2"
              >
                <Zap size={18} />
                <span>Upgrade to Lab Plan ($20/mo)</span>
              </Button>

              <button
                onClick={onClose}
                className="text-xs text-[#E3E9E8]/60 hover:text-[#4FD1C5] transition-colors py-2"
              >
                Close & Return
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Payment Gateway Modal */}
      <InternationalPaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={() => {
          setShowPayment(false);
          onSuccess();
        }}
      />
    </>
  );
};

export default UpgradeModal;
