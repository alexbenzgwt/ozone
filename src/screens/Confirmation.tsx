import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { CheckCircle2, Phone, MessageCircle, Share2, MapPin, User, Clock } from 'lucide-react';

export function Confirmation() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animation: `fall ${2 + Math.random() * 2}s linear forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#1976D2', '#2E7D32', '#FFA000', '#E53935'][Math.floor(Math.random() * 4)],
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>

      <Header />
      
      <div className="p-4 space-y-6">
        {/* Success Icon */}
        <div className="flex flex-col items-center text-center pt-8 pb-4">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-[#2E7D32]" />
          </div>
          <h2 className="mb-2">Booking Confirmed!</h2>
          <p className="text-[#6B7280]">Our team will arrive between your scheduled time</p>
        </div>

        {/* Booking Details */}
        <div className="bg-[#F7F9FB] rounded-xl p-4 space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-white">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
            <div>
              <p className="font-medium">Booking ID</p>
              <p className="text-sm text-[#6B7280]">#TCB-2024-00847</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#1976D2] mt-0.5" />
            <div>
              <p className="font-medium">Scheduled Time</p>
              <p className="text-sm text-[#6B7280]">December 15, 2024 • 10:00 - 11:00 AM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#1976D2] mt-0.5" />
            <div>
              <p className="font-medium">Service Location</p>
              <p className="text-sm text-[#6B7280]">Whitefield, Bangalore - 560066</p>
            </div>
          </div>
        </div>

        {/* Technician Info */}
        <div className="bg-blue-50 border border-[#1976D2] rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium">Technician Assigned</p>
              <p className="text-sm text-[#6B7280]">Rajesh Kumar • ID: TEC-1247</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Expected Arrival</span>
              <span className="font-medium text-[#1976D2]">In 45 mins</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            fullWidth 
            onClick={() => navigate('/live-tracking')}
            icon={<MapPin className="w-5 h-5" />}
          >
            View Live Tracking
          </Button>
          
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-[#F7F9FB] h-12 rounded-lg flex flex-col items-center justify-center hover:bg-[#E5E7EB] transition-all active:scale-95">
              <Phone className="w-5 h-5 text-[#1976D2] mb-1" />
              <span className="text-xs">Call</span>
            </button>
            <button className="bg-[#F7F9FB] h-12 rounded-lg flex flex-col items-center justify-center hover:bg-[#E5E7EB] transition-all active:scale-95">
              <MessageCircle className="w-5 h-5 text-[#1976D2] mb-1" />
              <span className="text-xs">WhatsApp</span>
            </button>
            <button className="bg-[#F7F9FB] h-12 rounded-lg flex flex-col items-center justify-center hover:bg-[#E5E7EB] transition-all active:scale-95">
              <Share2 className="w-5 h-5 text-[#1976D2] mb-1" />
              <span className="text-xs">Share</span>
            </button>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className="bg-green-50 border border-[#2E7D32] rounded-xl p-4">
          <p className="text-sm text-[#2E7D32] font-medium mb-1">✓ SMS & WhatsApp confirmation sent</p>
          <small className="text-[#6B7280]">You'll receive real-time updates about your service</small>
        </div>

        {/* Back to Home */}
        <Button variant="secondary" fullWidth onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
