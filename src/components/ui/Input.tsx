import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id} className="text-xs font-mono uppercase tracking-wider text-[#E3E9E8]/70">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`px-4 py-2.5 rounded-xl bg-[#0B2B26] border ${error ? 'border-[#F87171]' : 'border-[#4A6572]/40'} text-[#E3E9E8] text-base sm:text-sm min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-[#4FD1C5] transition-all duration-200 ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-[#F87171] font-sans mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
