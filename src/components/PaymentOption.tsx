import { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface PaymentOptionProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
}

export function PaymentOption({ icon, title, subtitle, selected, onClick }: PaymentOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full bg-[#F7F9FB] rounded-xl p-4 border-2 transition-all text-left
        ${selected ? 'border-[#1976D2] bg-blue-50' : 'border-transparent hover:border-[#E5E7EB]'}
        active:scale-98
      `}
    >
      <div className="flex items-center gap-3">
        <div className={`
          w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
          ${selected ? 'bg-[#1976D2] text-white' : 'bg-white text-[#1976D2]'}
        `}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-base mb-0.5">{title}</h3>
          <small className="text-[#6B7280]">{subtitle}</small>
        </div>
        
        {selected && (
          <div className="w-6 h-6 rounded-full bg-[#2E7D32] flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </button>
  );
}
