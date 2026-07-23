'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { canAnalyzeProtein, recordProteinAnalysis } from '../../lib/quotaManager';
import UpgradeModal from '../ui/UpgradeModal';

export const ProteinSearch: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const formattedId = query.trim().toUpperCase();

    // Check 3-protein quota limit
    if (!canAnalyzeProtein(formattedId)) {
      setShowUpgradeModal(true);
      return;
    }

    // Record analysis and navigate to workspace
    recordProteinAnalysis(formattedId);
    router.push(`/dashboard/workspace/${encodeURIComponent(formattedId)}`);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
        <div className="relative flex-1">
          <input
            id="proteinQuery"
            type="text"
            placeholder="Enter UniProt ID sequence (e.g. P04637, P53_HUMAN)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3.5 rounded-full bg-[#0B2B26] border border-[#4A6572]/40 text-[#E3E9E8] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-[#4FD1C5] transition-all duration-200 min-h-[48px] placeholder:text-[#E3E9E8]/50"
            aria-label="Enter UniProt ID Sequence"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3.5 rounded-full bg-[#4FD1C5] text-[#0B2B26] font-semibold text-sm hover:bg-[#4FD1C5]/90 transition-all duration-200 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-[#4FD1C5]/20 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[48px] cursor-pointer"
        >
          <Search size={18} />
          <span>Analyze Sequence</span>
        </button>
      </form>

      {/* Upgrade Warning Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onSuccess={() => {
          setShowUpgradeModal(false);
          if (query.trim()) {
            const formattedId = query.trim().toUpperCase();
            recordProteinAnalysis(formattedId);
            router.push(`/dashboard/workspace/${encodeURIComponent(formattedId)}`);
          }
        }}
      />
    </>
  );
};

export default ProteinSearch;
