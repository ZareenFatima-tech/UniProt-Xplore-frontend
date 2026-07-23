'use client';

import React from 'react';
import { FileText, Download } from 'lucide-react';

const mockReports = [
  { id: 'rep_1', title: 'TP53 Mutation Hotspot Analysis', size: '1.2 MB', format: 'PDF' },
  { id: 'rep_2', title: 'BRCA1 Structural Integrity Study', size: '2.4 MB', format: 'PDF' },
  { id: 'rep_3', title: 'EGFR Ligand Binding Simulation Data', size: '480 KB', format: 'JSON' }
];

export const SavedReports: React.FC = () => {
  const handleDownload = (title: string, format: string) => {
    alert(`[Report Export] Downloading ${title} in ${format} format...`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-[#E3E9E8]">
        <FileText size={16} className="text-[#4FD1C5]" />
        <h4 className="font-display font-bold text-sm">Saved Reports & Exports</h4>
      </div>

      <div className="flex flex-col gap-2.5">
        {mockReports.map((report) => (
          <div
            key={report.id}
            className="flex items-center justify-between p-4 rounded-xl border border-[#4A6572]/35 bg-[#0F3A33] hover:border-[#4FD1C5]/30 transition-all duration-200 min-h-[44px]"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-[#E3E9E8] font-sans">{report.title}</span>
              <span className="text-[11px] text-[#E3E9E8]/70 font-sans">File size: {report.size} • Format: {report.format}</span>
            </div>
            
            <button
              onClick={() => handleDownload(report.title, report.format)}
              className="p-2 text-[#E3E9E8]/70 hover:text-[#4FD1C5] hover:bg-[#0B2B26] rounded-xl border border-transparent hover:border-[#4FD1C5]/30 transition-all cursor-pointer focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={`Download ${report.title}`}
            >
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedReports;
