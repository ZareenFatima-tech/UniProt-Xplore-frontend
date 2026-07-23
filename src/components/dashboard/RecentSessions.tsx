import React from 'react';
import Link from 'next/link';
import { History, ArrowRight } from 'lucide-react';

const mockSessions = [
  { proteinId: 'P53_HUMAN', geneName: 'TP53', date: '2026-07-20', status: 'Completed' },
  { proteinId: 'BRCA1_HUMAN', geneName: 'BRCA1', date: '2026-07-18', status: 'Completed' },
  { proteinId: 'EGFR_HUMAN', geneName: 'EGFR', date: '2026-07-15', status: 'Completed' }
];

export const RecentSessions: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-[#E3E9E8]">
        <History size={16} className="text-[#4FD1C5]" />
        <h4 className="font-display font-bold text-sm">Recent Research Sessions</h4>
      </div>

      <div className="flex flex-col gap-2.5">
        {mockSessions.map((session) => (
          <Link
            key={session.proteinId}
            href={`/dashboard/workspace/${session.proteinId}`}
            className="flex items-center justify-between p-4 rounded-xl border border-[#4A6572]/35 bg-[#0F3A33] hover:border-[#4FD1C5]/50 transition-all duration-200 group min-h-[44px]"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-mono font-bold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors">{session.proteinId}</span>
              <span className="text-[11px] text-[#E3E9E8]/70 font-sans">Gene: {session.geneName} • Saved {session.date}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 text-[#4FD1C5] font-semibold">
                {session.status}
              </span>
              <ArrowRight size={14} className="text-[#E3E9E8]/60 group-hover:text-[#4FD1C5] group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentSessions;
