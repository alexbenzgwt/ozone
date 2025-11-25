import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ContractCardProps {
  name: string;
  location: string;
  lastCleaning: string;
  nextCleaning: string;
  onClick?: () => void;
}

export function ContractCard({ name, location, lastCleaning, nextCleaning, onClick }: ContractCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#F7F9FB] rounded-xl p-4 hover:shadow-md transition-all cursor-pointer active:scale-98"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="mb-1">{name}</h3>
          <div className="flex items-center gap-1 text-[#6B7280]">
            <MapPin className="w-4 h-4" />
            <small>{location}</small>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-[#6B7280]" />
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-white">
        <div>
          <small className="text-[#6B7280]">Last Cleaning</small>
          <div className="flex items-center gap-1 mt-1">
            <Calendar className="w-4 h-4 text-[#1976D2]" />
            <span className="text-sm">{lastCleaning}</span>
          </div>
        </div>
        <div>
          <small className="text-[#6B7280]">Next Scheduled</small>
          <div className="flex items-center gap-1 mt-1">
            <Calendar className="w-4 h-4 text-[#2E7D32]" />
            <span className="text-sm">{nextCleaning}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
