import { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { PriceRow } from '../components/PriceRow';
import { PaymentOption } from '../components/PaymentOption';
import { Smartphone, Wallet, Banknote, Lock, Tag } from 'lucide-react';

interface ReviewPaymentProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function ReviewPayment({ onNavigate, onBack }: ReviewPaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const pricing = {
    baseService: 2500,
    addOns: 2500,
    ecoDiscount: 250,
    taxes: 420,
  };

  const total = pricing.baseService + pricing.addOns - pricing.ecoDiscount + pricing.taxes;

  return (
    <div className="min-h-screen bg-white">
      <Header title="Review & Payment" onBack={onBack} />
      
      <div className="p-4 space-y-6 pb-32">
        {/* Booking Summary */}
        <div className="bg-[#F7F9FB] rounded-xl p-4">
          <h3 className="mb-3">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Tank Type</span>
              <span className="font-medium">Underground Tank</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Capacity</span>
              <span className="font-medium">5,000 Liters</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Date & Time</span>
              <span className="font-medium">Dec 15, 10:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Location</span>
              <span className="font-medium">Whitefield, Bangalore</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-white border-2 border-[#F7F9FB] rounded-xl p-4">
          <h3 className="mb-4">Price Breakdown</h3>
          
          <PriceRow label="Base Cleaning Service" amount={pricing.baseService} />
          <PriceRow 
            label="Add-ons" 
            amount={pricing.addOns}
            subtitle="Advanced Testing + Deep Disinfection + Quick Refill"
          />
          <PriceRow 
            label="EcoScore Discount (10%)" 
            amount={pricing.ecoDiscount} 
            isDiscount 
            subtitle="Reward for excellent hygiene maintenance"
          />
          <PriceRow label="GST & Taxes (18%)" amount={pricing.taxes} />
          <PriceRow label="Total Amount" amount={total} isTotal />
        </div>

        {/* Promo Code */}
        <div className="bg-[#F7F9FB] rounded-xl p-4">
          <label className="block mb-2 font-medium flex items-center gap-2">
            <Tag className="w-5 h-5 text-[#1976D2]" />
            Have a Promo Code?
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              placeholder="Enter code"
              className="flex-1 h-12 px-4 bg-white rounded-lg border-2 border-transparent focus:border-[#1976D2] focus:outline-none transition-all"
            />
            <Button 
              variant="outline" 
              onClick={() => setPromoApplied(true)}
              disabled={!promoCode || promoApplied}
            >
              Apply
            </Button>
          </div>
          {promoApplied && (
            <p className="text-sm text-[#2E7D32] mt-2">✓ Promo code applied successfully!</p>
          )}
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="mb-3">Select Payment Method</h3>
          <div className="space-y-3">
            <PaymentOption
              icon={<Smartphone className="w-6 h-6" />}
              title="UPI"
              subtitle="Fast & secure payment via UPI apps"
              selected={paymentMethod === 'upi'}
              onClick={() => setPaymentMethod('upi')}
            />
            <PaymentOption
              icon={<Wallet className="w-6 h-6" />}
              title="Wallet"
              subtitle="Pay using your wallet balance: ₹3,245"
              selected={paymentMethod === 'wallet'}
              onClick={() => setPaymentMethod('wallet')}
            />
            <PaymentOption
              icon={<Banknote className="w-6 h-6" />}
              title="Cash on Service"
              subtitle="Pay cash after service completion"
              selected={paymentMethod === 'cod'}
              onClick={() => setPaymentMethod('cod')}
            />
          </div>
        </div>

        {/* Security Note */}
        <div className="bg-[#F7F9FB] rounded-xl p-4 flex items-start gap-3">
          <Lock className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Secure Payment Gateway</p>
            <small className="text-[#6B7280]">
              Your payment information is encrypted and secure. We never store your card details.
            </small>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F7F9FB] p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#6B7280]">Total Amount</span>
          <span className="text-2xl font-bold text-[#1976D2]">₹{total.toFixed(2)}</span>
        </div>
        <Button fullWidth onClick={() => onNavigate('confirmation')}>
          {paymentMethod === 'cod' ? 'Confirm Booking' : 'Proceed to Pay'}
        </Button>
      </div>
    </div>
  );
}
