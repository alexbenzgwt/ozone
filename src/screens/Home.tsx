import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ContractCard } from '../components/ContractCard';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { Droplets, FileText, Clock, Headphones, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (screen: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header showMenu showNotifications />
      
      <div className="p-4 space-y-6 pb-24">
        {/* Hero CTA */}
        <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-white mb-2">Book Tank Cleaning</h2>
              <p className="text-blue-100 text-sm">Professional hygiene service at your doorstep</p>
            </div>
            <Droplets className="w-12 h-12 text-blue-200" />
          </div>
          <Button variant="secondary" fullWidth onClick={() => onNavigate('booking')}>
            Book Now
          </Button>
        </div>

        {/* EcoScore Badge */}
        <div className="bg-[#F7F9FB] rounded-2xl p-6 flex items-center justify-between">
          <div>
            <h3 className="mb-1">Your EcoScore</h3>
            <small className="text-[#6B7280]">Excellent hygiene maintenance!</small>
            <p className="text-xs text-[#2E7D32] mt-2">✓ Qualified for 10% discount</p>
          </div>
          <EcoScoreBadge score={87} size="medium" />
        </div>

        {/* Active Contracts */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3>Active Contracts</h3>
            <button className="text-[#1976D2] text-sm font-medium">View All</button>
          </div>
          
          <div className="space-y-3">
            <ContractCard
              name="Residential Tank - Home"
              location="Whitefield, Bangalore"
              lastCleaning="Oct 15, 2024"
              nextCleaning="Jan 15, 2025"
              onClick={() => {}}
            />
            <ContractCard
              name="Commercial Tank - Office"
              location="MG Road, Bangalore"
              lastCleaning="Nov 1, 2024"
              nextCleaning="Feb 1, 2025"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('certificates')}
              className="bg-[#F7F9FB] rounded-xl p-4 hover:shadow-md transition-all active:scale-98 text-left"
            >
              <FileText className="w-6 h-6 text-[#1976D2] mb-2" />
              <span className="font-medium block mb-1">Certificates</span>
              <small className="text-[#6B7280]">View & download</small>
            </button>
            
            <button className="bg-[#F7F9FB] rounded-xl p-4 hover:shadow-md transition-all active:scale-98 text-left">
              <Clock className="w-6 h-6 text-[#1976D2] mb-2" />
              <span className="font-medium block mb-1">History</span>
              <small className="text-[#6B7280]">Past bookings</small>
            </button>
            
            <button className="bg-[#F7F9FB] rounded-xl p-4 hover:shadow-md transition-all active:scale-98 text-left col-span-2">
              <Headphones className="w-6 h-6 text-[#1976D2] mb-2" />
              <span className="font-medium block mb-1">Customer Support</span>
              <small className="text-[#6B7280]">We're here to help 24/7</small>
            </button>
          </div>
        </div>

        {/* Notification Banner */}
        <div className="bg-green-50 border border-[#2E7D32] rounded-xl p-4 flex items-start gap-3">
          <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2"></div>
          <div className="flex-1">
            <span className="font-medium block mb-1">Next Cleaning Reminder</span>
            <small className="text-[#6B7280]">Your residential tank cleaning is due in 45 days. Book now to secure your preferred slot!</small>
          </div>
          <ChevronRight className="w-5 h-5 text-[#2E7D32]" />
        </div>
      </div>
    </div>
  );
}
