import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { Download, Share2, CheckCircle, QrCode, Calendar, User, MapPin } from 'lucide-react';

interface CertificateProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function Certificate({ onNavigate, onBack }: CertificateProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header title="Hygiene Certificate" onBack={onBack} />
      
      <div className="p-4 space-y-6 pb-24">
        {/* Certificate Preview */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border-2 border-[#1976D2] shadow-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#1976D2] rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-[#1976D2] mb-1">Water Tank Hygiene</h2>
            <h3>Certification</h3>
          </div>

          {/* EcoScore Display */}
          <div className="flex justify-center mb-6">
            <EcoScoreBadge score={92} size="large" />
          </div>

          {/* Certificate Details */}
          <div className="bg-white rounded-xl p-4 space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#1976D2] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280]">Service Date</p>
                <p className="font-medium">December 15, 2024</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1976D2] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280]">Location</p>
                <p className="font-medium">Whitefield, Bangalore</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#1976D2] mt-0.5" />
              <div>
                <p className="text-sm text-[#6B7280]">Certified By</p>
                <p className="font-medium">Rajesh Kumar • TEC-1247</p>
              </div>
            </div>
          </div>

          {/* Test Results */}
          <div className="bg-white rounded-xl p-4 mb-6">
            <p className="font-medium mb-3">Water Quality Test Results</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">pH Level</span>
                <span className="font-medium text-[#2E7D32]">7.2 ✓</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">Turbidity (NTU)</span>
                <span className="font-medium text-[#2E7D32]">0.8 ✓</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">TDS (mg/L)</span>
                <span className="font-medium text-[#2E7D32]">145 ✓</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">Bacteria Count</span>
                <span className="font-medium text-[#2E7D32]">0 CFU/ml ✓</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <QrCode className="w-16 h-16 text-[#6B7280]" />
            </div>
            <small className="text-[#6B7280]">Scan to verify certificate authenticity</small>
          </div>

          {/* Certificate ID */}
          <div className="text-center mt-4">
            <small className="text-[#6B7280]">Certificate ID</small>
            <p className="font-medium">#CERT-2024-00847</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" icon={<Download className="w-5 h-5" />}>
              Download PDF
            </Button>
            <Button variant="outline" icon={<Share2 className="w-5 h-5" />}>
              Share
            </Button>
          </div>
          
          <Button fullWidth onClick={() => onNavigate('feedback')}>
            Continue to Feedback
          </Button>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-[#1976D2] rounded-xl p-4">
          <p className="text-sm text-[#1976D2] font-medium mb-1">✓ Certificate meets WHO safety standards</p>
          <small className="text-[#6B7280]">
            This certificate is valid for 3 months. You can access all your certificates from your profile.
          </small>
        </div>

        {/* Certification Details */}
        <div className="bg-[#F7F9FB] rounded-xl p-4">
          <h3 className="mb-3">Certification Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Tank Type</span>
              <span className="font-medium">Underground</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Capacity</span>
              <span className="font-medium">5,000 Liters</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Treatment Method</span>
              <span className="font-medium">UV + Ozone</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Valid Until</span>
              <span className="font-medium text-[#2E7D32]">March 15, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
