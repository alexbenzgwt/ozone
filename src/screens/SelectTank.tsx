import { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { TimeSlotChip } from '../components/TimeSlotChip';
import { MapPin, Calendar, Droplet, Ruler } from 'lucide-react';

interface SelectTankProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function SelectTank({ onNavigate, onBack }: SelectTankProps) {
  const [tankType, setTankType] = useState('underground');
  const [tankSize, setTankSize] = useState('5000');
  const [selectedDate, setSelectedDate] = useState('2024-12-15');
  const [selectedSlot, setSelectedSlot] = useState('');

  const timeSlots = [
    { time: '8:00 - 9:00 AM', available: true },
    { time: '9:00 - 10:00 AM', available: true },
    { time: '10:00 - 11:00 AM', available: true },
    { time: '11:00 AM - 12:00 PM', available: false },
    { time: '2:00 - 3:00 PM', available: true },
    { time: '3:00 - 4:00 PM', available: true },
    { time: '4:00 - 5:00 PM', available: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header title="Book Cleaning" onBack={onBack} />
      
      <div className="p-4 space-y-6 pb-24">
        {/* Tank Type */}
        <div>
          <label className="block mb-2 font-medium flex items-center gap-2">
            <Droplet className="w-5 h-5 text-[#1976D2]" />
            Tank Type
          </label>
          <select
            value={tankType}
            onChange={(e) => setTankType(e.target.value)}
            className="w-full h-12 px-4 bg-[#F7F9FB] rounded-lg border-2 border-transparent focus:border-[#1976D2] focus:outline-none transition-all"
          >
            <option value="underground">Underground Tank</option>
            <option value="overhead">Overhead Tank</option>
            <option value="sump">Sump</option>
          </select>
        </div>

        {/* Tank Size */}
        <div>
          <label className="block mb-2 font-medium flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#1976D2]" />
            Tank Capacity
          </label>
          <select
            value={tankSize}
            onChange={(e) => setTankSize(e.target.value)}
            className="w-full h-12 px-4 bg-[#F7F9FB] rounded-lg border-2 border-transparent focus:border-[#1976D2] focus:outline-none transition-all"
          >
            <option value="1000">1,000 Liters</option>
            <option value="2000">2,000 Liters</option>
            <option value="5000">5,000 Liters</option>
            <option value="10000">10,000 Liters</option>
            <option value="15000">15,000+ Liters</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#1976D2]" />
            Service Location
          </label>
          <div className="bg-[#F7F9FB] rounded-lg p-4 border-2 border-transparent">
            <p className="font-medium mb-1">Whitefield, Bangalore</p>
            <small className="text-[#6B7280]">ITPL Main Rd, Whitefield, Bengaluru, Karnataka 560066</small>
            <button className="text-[#1976D2] text-sm font-medium mt-2">Change Location</button>
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block mb-2 font-medium flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#1976D2]" />
            Preferred Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full h-12 px-4 bg-[#F7F9FB] rounded-lg border-2 border-transparent focus:border-[#1976D2] focus:outline-none transition-all"
          />
        </div>

        {/* Time Slots */}
        <div>
          <label className="block mb-3 font-medium">Available Time Slots</label>
          <p className="text-sm text-[#6B7280] mb-3">
            Choose a suitable time. We'll auto-check technician availability.
          </p>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map((slot, index) => (
              <TimeSlotChip
                key={index}
                time={slot.time}
                available={slot.available}
                selected={selectedSlot === slot.time}
                onClick={() => slot.available && setSelectedSlot(slot.time)}
              />
            ))}
          </div>
          {selectedSlot && (
            <div className="mt-3 bg-green-50 border border-[#2E7D32] rounded-lg p-3">
              <small className="text-[#2E7D32] font-medium">✓ Technician available in 30-45 mins</small>
            </div>
          )}
        </div>

        {/* Estimated Duration */}
        <div className="bg-[#F7F9FB] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium mb-1">Estimated Duration</p>
              <small className="text-[#6B7280]">Based on tank size & type</small>
            </div>
            <span className="text-xl font-semibold text-[#1976D2]">2-3 hours</span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F7F9FB] p-4 shadow-lg">
        <Button 
          fullWidth 
          onClick={() => onNavigate('addons')}
          disabled={!selectedSlot}
        >
          Continue to Add-ons
        </Button>
      </div>
    </div>
  );
}
