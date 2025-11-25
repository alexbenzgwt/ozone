import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  disabled = false,
  icon
}: ButtonProps) {
  const baseClasses = "h-12 px-6 rounded-lg font-medium transition-all duration-100 active:scale-95 flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "bg-[#1976D2] text-white hover:bg-[#1565C0] shadow-sm disabled:bg-[#6B7280] disabled:cursor-not-allowed",
    secondary: "bg-[#F7F9FB] text-[#0F1724] hover:bg-[#E5E7EB] disabled:opacity-50 disabled:cursor-not-allowed",
    outline: "border-2 border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {icon && icon}
      {children}
    </button>
  );
}
