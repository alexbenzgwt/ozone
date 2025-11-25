interface PriceRowProps {
  label: string;
  amount: number;
  isDiscount?: boolean;
  isTotal?: boolean;
  subtitle?: string;
}

export function PriceRow({ label, amount, isDiscount, isTotal, subtitle }: PriceRowProps) {
  return (
    <div className={`flex items-start justify-between py-2 ${isTotal ? 'border-t-2 border-[#E5E7EB] pt-3 mt-2' : ''}`}>
      <div>
        <span className={`${isTotal ? 'font-semibold' : ''} ${isDiscount ? 'text-[#2E7D32]' : ''}`}>
          {label}
        </span>
        {subtitle && (
          <small className="text-[#6B7280] block mt-0.5">{subtitle}</small>
        )}
      </div>
      <span className={`${isTotal ? 'font-bold text-xl' : 'font-medium'} ${isDiscount ? 'text-[#2E7D32]' : ''}`}>
        {isDiscount && '- '}₹{amount.toFixed(2)}
      </span>
    </div>
  );
}
