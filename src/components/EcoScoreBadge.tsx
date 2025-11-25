interface EcoScoreBadgeProps {
  score: number;
  size?: 'small' | 'medium' | 'large';
}

export function EcoScoreBadge({ score, size = 'medium' }: EcoScoreBadgeProps) {
  const sizes = {
    small: { container: 'w-16 h-16', text: 'text-lg', label: 'text-xs' },
    medium: { container: 'w-24 h-24', text: 'text-2xl', label: 'text-sm' },
    large: { container: 'w-32 h-32', text: 'text-4xl', label: 'text-base' }
  };
  
  const getColor = (score: number) => {
    if (score >= 85) return '#2E7D32';
    if (score >= 70) return '#FFA000';
    return '#E53935';
  };
  
  const color = getColor(score);
  const percentage = (score / 100) * 283; // 283 is circumference of circle with r=45
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className={sizes[size].container} viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#F7F9FB"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={283}
          strokeDashoffset={283 - percentage}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${sizes[size].text} font-bold`} style={{ color }}>
          {score}
        </span>
        <span className={`${sizes[size].label} text-[#6B7280]`}>EcoScore</span>
      </div>
    </div>
  );
}
