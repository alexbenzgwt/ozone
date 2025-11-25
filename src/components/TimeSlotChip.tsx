interface TimeSlotChipProps {
  time: string;
  available: boolean;
  selected: boolean;
  onClick: () => void;
}

export function TimeSlotChip({ time, available, selected, onClick }: TimeSlotChipProps) {
  return (
    <button
      onClick={onClick}
      disabled={!available}
      className={`
        px-4 py-2 rounded-full border-2 transition-all duration-200
        ${selected 
          ? 'bg-[#1976D2] border-[#1976D2] text-white scale-105' 
          : available 
            ? 'bg-white border-[#E5E7EB] text-[#0F1724] hover:border-[#1976D2]'
            : 'bg-[#F7F9FB] border-[#E5E7EB] text-[#6B7280] cursor-not-allowed opacity-50'
        }
        ${available && !selected ? 'active:scale-95' : ''}
      `}
    >
      <div className="flex items-center gap-2">
        <span className="font-medium">{time}</span>
        {available && !selected && (
          <span className="text-xs text-[#2E7D32]">Available</span>
        )}
        {!available && (
          <span className="text-xs">Full</span>
        )}
      </div>
    </button>
  );
}
