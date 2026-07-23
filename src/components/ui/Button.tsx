import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#4FD1C5] text-[#0B2B26] hover:bg-[#4FD1C5]/90 shadow-md shadow-[#4FD1C5]/20';
      case 'secondary':
        return 'bg-[#0F3A33] text-[#E3E9E8] hover:bg-[#0B2B26] border border-[#4A6572]/40';
      case 'ghost':
        return 'bg-transparent text-[#E3E9E8] hover:bg-[#0F3A33] border border-transparent';
      default:
        return '';
    }
  };

  return (
    <button
      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] min-h-[44px] min-w-[44px] inline-flex items-center justify-center cursor-pointer ${getStyles()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
