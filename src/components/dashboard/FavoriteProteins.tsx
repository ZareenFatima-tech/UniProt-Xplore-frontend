import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

const mockFavorites = [
  { proteinId: 'P53_HUMAN', geneName: 'TP53', desc: 'Cellular tumor antigen p53' },
  { proteinId: 'BRCA1_HUMAN', geneName: 'BRCA1', desc: 'Breast cancer type 1 susceptibility protein' },
  { proteinId: 'EGFR_HUMAN', geneName: 'EGFR', desc: 'Epidermal growth factor receptor' }
];

export const FavoriteProteins: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-[#E3E9E8]">
        <Star size={16} className="text-[#4FD1C5] fill-[#4FD1C5]/20" />
        <h4 className="font-display font-bold text-sm">Favorite Proteins</h4>
      </div>

      <div className="flex flex-col gap-2.5">
        {mockFavorites.map((fav) => (
          <Link
            key={fav.proteinId}
            href={`/dashboard/workspace/${fav.proteinId}`}
            className="flex items-center justify-between p-4 rounded-xl border border-[#4A6572]/35 bg-[#0F3A33] hover:border-[#4FD1C5]/40 transition-all duration-200 group min-h-[44px]"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-mono font-bold text-[#E3E9E8] group-hover:text-[#4FD1C5] transition-colors">{fav.proteinId}</span>
              <span className="text-[11px] text-[#E3E9E8]/70 truncate max-w-[240px] font-sans">{fav.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProteins;
