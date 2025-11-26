import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { MapPin, Navigation, Phone, Video, Clock, CheckCircle2, PlayCircle } from 'lucide-react';

export function LiveTracking() {
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState(1);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const statuses = [
    { id: 0, label: 'Confirmed', time: '09:30 AM', completed: true },
    { id: 1, label: 'En Route', time: '10:15 AM', completed: true },
    { id: 2, label: 'Cleaning in Progress', time: 'In Progress', completed: false },
    { id: 3, label: 'Hygiene Test', time: 'Pending', completed: false },
    { id: 4, label: 'Completed', time: 'Pending', completed: false },
  ];

  useEffect(() => {
    // Simulate status updates
    const timer = setTimeout(() => {
      if (currentStatus < 4) {
        setCurrentStatus(prev => prev + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentStatus]);

  return (
    <div className="min-h-screen bg-white">
      <Header title="Live Job Tracking" onBack={() => navigate(-1)} />
      
      {/* Map View */}
      <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#1976D2] mx-auto mb-2 animate-bounce" />
            <p className="font-medium text-[#0F1724]">Technician Location</p>
            <p className="text-sm text-[#6B7280]">2.3 km away</p>
          </div>
        </div>
        
        {/* ETA Badge */}
        <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
          <Navigation className="w-4 h-4 text-[#1976D2]" />
          <span className="font-medium">ETA: 8 mins</span>
        </div>

        {/* Live Badge */}
        <div className="absolute top-4 right-4 bg-[#E53935] text-white rounded-full px-3 py-1 shadow-lg flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          LIVE
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* Technician Card */}
        <div className="bg-[#F7F9FB] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center">
              <span className="text-white font-medium">RK</span>
            </div>
            <div>
              <p className="font-medium">Rajesh Kumar</p>
              <p className="text-sm text-[#6B7280]">Certified Technician • ID: TEC-1247</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-[#1976D2] rounded-full flex items-center justify-center hover:bg-[#1565C0] transition-all active:scale-95">
            <Phone className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Live Stream Option */}
        {currentStatus >= 2 && (
          <div 
            onClick={() => setShowVideoModal(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transition-all active:scale-98"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Watch Live Stream</p>
                  <small className="text-white/80">Technician is streaming the cleaning process</small>
                </div>
              </div>
              <PlayCircle className="w-8 h-8" />
            </div>
          </div>
        )}

        {/* Status Timeline */}
        <div className="bg-white border-2 border-[#F7F9FB] rounded-xl p-4">
          <h3 className="mb-4">Service Progress</h3>
          
          <div className="space-y-4">
            {statuses.map((status, index) => (
              <div key={status.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all
                    ${status.id <= currentStatus 
                      ? 'bg-[#2E7D32] text-white' 
                      : 'bg-[#F7F9FB] text-[#6B7280]'
                    }
                    ${status.id === currentStatus ? 'ring-4 ring-green-200 animate-pulse' : ''}
                  `}>
                    {status.completed || status.id < currentStatus ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-medium">{status.id + 1}</span>
                    )}
                  </div>
                  {index < statuses.length - 1 && (
                    <div className={`
                      w-0.5 h-12 my-1 transition-all
                      ${status.id < currentStatus ? 'bg-[#2E7D32]' : 'bg-[#E5E7EB]'}
                    `} />
                  )}
                </div>
                
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between">
                    <p className={`font-medium ${status.id === currentStatus ? 'text-[#2E7D32]' : ''}`}>
                      {status.label}
                    </p>
                    <span className="text-sm text-[#6B7280]">{status.time}</span>
                  </div>
                  {status.id === currentStatus && (
                    <p className="text-sm text-[#6B7280] mt-1">Currently in progress...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border border-[#1976D2] rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#1976D2] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Estimated Completion</p>
              <p className="text-sm text-[#6B7280]">Service expected to complete by 12:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center relative">
              <PlayCircle className="w-16 h-16 text-white/50" />
              <div className="absolute top-4 left-4 bg-[#E53935] text-white rounded-full px-3 py-1 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2">Live Cleaning Stream</h3>
              <p className="text-sm text-[#6B7280] mb-4">
                Technician live stream shared with you for transparency only. Recording is not permitted for privacy.
              </p>
              <Button fullWidth onClick={() => setShowVideoModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom - View Certificate (when completed) */}
      {currentStatus >= 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F7F9FB] p-4 shadow-lg">
          <Button fullWidth onClick={() => navigate('/certificate')}>
            View Certificate & Complete Service
          </Button>
        </div>
      )}
    </div>
  );
}
