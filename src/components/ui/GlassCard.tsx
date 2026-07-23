import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'emerald' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  style,
  ...props
}) => {
  const getGlowStyles = () => {
    switch (glowColor) {
      case 'cyan':
        return 'border-[#4FD1C5]/40 shadow-lg shadow-[#4FD1C5]/10';
      case 'emerald':
        return 'border-[#38B2AC]/40 shadow-lg shadow-[#38B2AC]/10';
      default:
        return 'border-[#4A6572]/35';
    }
  };

  return (
    <div
      className={`bg-[#0F3A33] border rounded-2xl p-6 sm:p-8 text-[#E3E9E8] transition-all duration-300 ${getGlowStyles()} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
