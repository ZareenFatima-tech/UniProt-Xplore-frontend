import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-3 min-h-[44px]">
        <input
          id={id}
          type="checkbox"
          className={`h-4 w-4 rounded bg-[#0B2B26] border-[#4A6572]/50 text-[#4FD1C5] focus:ring-[#4FD1C5] cursor-pointer ${className}`}
          {...props}
        />
        <label htmlFor={id} className="text-sm text-[#E3E9E8]/90 select-none cursor-pointer leading-tight">
          {label}
        </label>
      </div>
      {error && (
        <span className="text-xs text-[#F87171] ml-7 font-sans">
          {error}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
