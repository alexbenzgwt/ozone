import { ReactNode } from 'react';

interface AddOnTileProps {
  icon: ReactNode;
  title: string;
  description: string;
  price: number;
  enabled: boolean;
  onToggle: () => void;
}

export function AddOnTile({ icon, title, description, price, enabled, onToggle }: AddOnTileProps) {
  return (
    <div
      className={`
        bg-[#F7F9FB] rounded-xl p-4 border-2 transition-all cursor-pointer
        ${enabled ? 'border-[#1976D2] bg-blue-50' : 'border-transparent'}
      `}
      onClick={onToggle}
    >
      <div className="flex items-start gap-3">
        <div className={`
          w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
          ${enabled ? 'bg-[#1976D2] text-white' : 'bg-white text-[#1976D2]'}
        `}>
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-base">{title}</h3>
            <span className="font-semibold text-[#1976D2]">₹{price}</span>
          </div>
          <small className="text-[#6B7280] block">{description}</small>
        </div>
        
        <div
          className={`
            w-12 h-6 rounded-full transition-all duration-200 flex items-center px-1
            ${enabled ? 'bg-[#2E7D32]' : 'bg-[#E5E7EB]'}
          `}
        >
          <div
            className={`
              w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200
              ${enabled ? 'translate-x-6' : 'translate-x-0'}
            `}
          />
        </div>
      </div>
    </div>
  );
}
