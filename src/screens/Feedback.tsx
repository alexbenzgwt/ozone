import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Star, Gift, Calendar, Sparkles } from 'lucide-react';

export function Feedback() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedTip, setSelectedTip] = useState(0);

  const tips = [50, 100, 150, 200];

  return (
    <div className="min-h-screen bg-white">
      <Header title="Feedback & Tips" onBack={() => navigate(-1)} />
      
      <div className="p-4 space-y-6 pb-24">
        {/* Rating Section */}
        <div className="bg-[#F7F9FB] rounded-2xl p-6 text-center">
          <h3 className="mb-2">How was your experience?</h3>
          <p className="text-sm text-[#6B7280] mb-6">Rate our service</p>
          
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all active:scale-90"
              >
                <Star
                  className={`w-12 h-12 transition-all ${
                    star <= (hoveredRating || rating)
                      ? 'fill-[#FFA000] text-[#FFA000]'
                      : 'text-[#E5E7EB]'
                  }`}
                />
              </button>
            ))}
          </div>
          
          {rating > 0 && (
            <p className="text-sm font-medium text-[#1976D2]">
              {rating === 5 && "Excellent! We're so glad you're satisfied!"}
              {rating === 4 && "Great! Thank you for your feedback!"}
              {rating === 3 && "Good! We'll strive to do better."}
              {rating < 3 && "We're sorry. Please tell us how we can improve."}
            </p>
          )}
        </div>

        {/* Comment Section */}
        <div>
          <label className="block mb-2 font-medium">
            Additional Comments (Optional)
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us more about your experience..."
            rows={4}
            className="w-full p-4 bg-[#F7F9FB] rounded-xl border-2 border-transparent focus:border-[#1976D2] focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Tip Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-purple-600" />
            <h3>Tip Your Technician</h3>
          </div>
          <p className="text-sm text-[#6B7280] mb-4">
            Show appreciation for excellent service
          </p>
          
          <div className="grid grid-cols-4 gap-2 mb-4">
            {tips.map((tip) => (
              <button
                key={tip}
                onClick={() => setSelectedTip(tip)}
                className={`
                  h-12 rounded-lg border-2 font-medium transition-all active:scale-95
                  ${selectedTip === tip
                    ? 'bg-purple-600 border-purple-600 text-white'
                    : 'bg-white border-purple-200 text-[#0F1724] hover:border-purple-400'
                  }
                `}
              >
                ₹{tip}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Custom amount"
              className="flex-1 h-12 px-4 bg-white rounded-lg border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-all"
              onChange={(e) => setSelectedTip(Number(e.target.value))}
            />
          </div>
          
          {selectedTip > 0 && (
            <div className="mt-3 bg-white rounded-lg p-3 text-center">
              <p className="text-sm text-[#6B7280]">Total Tip Amount</p>
              <p className="text-xl font-bold text-purple-600">₹{selectedTip}</p>
            </div>
          )}
        </div>

        {/* Renewal Offers */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-[#2E7D32]">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-[#2E7D32]" />
            <h3>Subscribe & Save</h3>
          </div>
          <p className="text-sm text-[#6B7280] mb-4">
            Get regular cleaning at discounted rates
          </p>
          
          <div className="space-y-2">
            <button className="w-full bg-white rounded-xl p-4 hover:shadow-md transition-all active:scale-98 text-left border-2 border-transparent hover:border-[#2E7D32]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">Quarterly Plan</span>
                <span className="text-sm bg-[#2E7D32] text-white px-2 py-1 rounded-full">Save 15%</span>
              </div>
              <p className="text-sm text-[#6B7280]">Cleaning every 3 months • ₹7,650 total</p>
            </button>
            
            <button className="w-full bg-white rounded-xl p-4 hover:shadow-md transition-all active:scale-98 text-left border-2 border-transparent hover:border-[#2E7D32]">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">Bi-Annual Plan</span>
                <span className="text-sm bg-[#2E7D32] text-white px-2 py-1 rounded-full">Save 20%</span>
              </div>
              <p className="text-sm text-[#6B7280]">Cleaning every 6 months • ₹14,400 total</p>
            </button>
          </div>
        </div>

        {/* Hygiene Tips Carousel */}
        <div className="bg-[#F7F9FB] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#1976D2]" />
            <h3>Hygiene Tips</h3>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-sm mb-1">💧 Clean water tanks every 3-6 months</p>
              <small className="text-[#6B7280]">Regular cleaning prevents bacterial growth and ensures safe water</small>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-sm mb-1">🔍 Check for leaks regularly</p>
              <small className="text-[#6B7280]">Early detection saves water and prevents contamination</small>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-sm mb-1">☀️ Cover overhead tanks properly</p>
              <small className="text-[#6B7280]">Prevents dirt, debris, and sunlight from affecting water quality</small>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F7F9FB] p-4 shadow-lg">
        <Button 
          fullWidth 
          onClick={() => navigate('/')}
          disabled={rating === 0}
        >
          Submit Feedback
        </Button>
      </div>
    </div>
  );
}
