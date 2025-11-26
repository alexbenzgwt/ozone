import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { Calendar, MapPin, Download, ChevronRight } from 'lucide-react';

export function CertificatesList() {
  const navigate = useNavigate();

  const certificates = [
    {
      id: '#CERT-2024-00847',
      date: 'Dec 15, 2024',
      location: 'Whitefield, Bangalore',
      ecoScore: 92,
      tankType: 'Underground Tank',
    },
    {
      id: '#CERT-2024-00723',
      date: 'Nov 1, 2024',
      location: 'MG Road, Bangalore',
      ecoScore: 88,
      tankType: 'Commercial Tank',
    },
    {
      id: '#CERT-2024-00615',
      date: 'Oct 15, 2024',
      location: 'Whitefield, Bangalore',
      ecoScore: 85,
      tankType: 'Residential Tank',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header title="My Certificates" onBack={() => navigate(-1)} />
      
      <div className="p-4 space-y-4">
        <div className="bg-blue-50 border border-[#1976D2] rounded-xl p-4">
          <h3 className="mb-2">Certificate Management</h3>
          <p className="text-sm text-[#6B7280]">
            View, download, and share your hygiene certificates. All certificates are valid for 3 months.
          </p>
        </div>

        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#F7F9FB] rounded-xl p-4 hover:shadow-md transition-all cursor-pointer active:scale-98"
            onClick={() => navigate('/certificate')}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="font-medium mb-1">{cert.tankType}</p>
                <p className="text-sm text-[#6B7280]">{cert.id}</p>
              </div>
              <EcoScoreBadge score={cert.ecoScore} size="small" />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1976D2]" />
                <span className="text-sm">{cert.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1976D2]" />
                <span className="text-sm">{cert.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white">
              <button className="flex items-center gap-2 text-[#1976D2] text-sm font-medium hover:underline">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
