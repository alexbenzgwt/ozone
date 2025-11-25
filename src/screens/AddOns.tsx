import { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { AddOnTile } from '../components/AddOnTile';
import { Beaker, Sparkles, Zap, ChevronDown } from 'lucide-react';

interface AddOnsProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function AddOns({ onNavigate, onBack }: AddOnsProps) {
  const [addOns, setAddOns] = useState({
    quickRefill: false,
    advancedTesting: false,
    deepDisinfection: false,
  });

  const [showCompliance, setShowCompliance] = useState(false);

  const toggleAddOn = (key: keyof typeof addOns) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const addOnsList = [
    {
      key: 'quickRefill' as const,
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Refill Service',
      description: 'Fast water refill immediately after cleaning',
      price: 500,
    },
    {
      key: 'advancedTesting' as const,
      icon: <Beaker className="w-6 h-6" />,
      title: 'Advanced Water Testing',
      description: 'Detailed chemical & microbial analysis',
      price: 800,
    },
    {
      key: 'deepDisinfection' as const,
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Deep Disinfection',
      description: 'UV treatment + ozone disinfection',
      price: 1200,
    },
  ];

  const totalAddOnsCost = addOnsList.reduce((sum, addon) => {
    return sum + (addOns[addon.key] ? addon.price : 0);
  }, 0);

  const extraTime = Object.values(addOns).filter(Boolean).length * 30;

  return (
    <div className="min-h-screen bg-white">
      <Header title="Add-ons & Compliance" onBack={onBack} />
      
      <div className="p-4 space-y-6 pb-32">
        <div>
          <h3 className="mb-2">Enhance Your Service</h3>
          <p className="text-sm text-[#6B7280]">Optional add-ons for comprehensive tank care</p>
        </div>

        {/* Add-ons List */}
        <div className="space-y-3">
          {addOnsList.map((addon) => (
            <AddOnTile
              key={addon.key}
              icon={addon.icon}
              title={addon.title}
              description={addon.description}
              price={addon.price}
              enabled={addOns[addon.key]}
              onToggle={() => toggleAddOn(addon.key)}
            />
          ))}
        </div>

        {/* Compliance Information */}
        <div className="bg-[#F7F9FB] rounded-xl overflow-hidden">
          <button
            onClick={() => setShowCompliance(!showCompliance)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-[#E5E7EB] transition-all"
          >
            <div>
              <h3 className="mb-1">Compliance & Technology</h3>
              <small className="text-[#6B7280]">Learn about our cleaning methods</small>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-[#6B7280] transition-transform ${showCompliance ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {showCompliance && (
            <div className="p-4 pt-0 space-y-4">
              <div className="bg-white rounded-lg p-3">
                <p className="font-medium mb-1">UV Disinfection</p>
                <small className="text-[#6B7280]">
                  Ultraviolet light eliminates 99.9% of harmful bacteria and viruses without chemicals.
                </small>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-medium mb-1">Ozone Treatment</p>
                <small className="text-[#6B7280]">
                  Ozone gas provides powerful oxidation to remove organic contaminants and odors.
                </small>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-medium mb-1">Why It Matters</p>
                <small className="text-[#6B7280]">
                  Advanced disinfection ensures your water meets WHO safety standards and protects your family's health.
                </small>
              </div>
            </div>
          )}
        </div>

        {/* Summary Card */}
        {totalAddOnsCost > 0 && (
          <div className="bg-blue-50 border border-[#1976D2] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Add-ons Total</span>
              <span className="text-xl font-bold text-[#1976D2]">₹{totalAddOnsCost}</span>
            </div>
            <div className="flex items-center justify-between">
              <small className="text-[#6B7280]">Additional time required</small>
              <small className="font-medium text-[#1976D2]">+{extraTime} minutes</small>
            </div>
          </div>
        )}

        {/* Information Banner */}
        <div className="bg-green-50 border border-[#2E7D32] rounded-xl p-4">
          <p className="text-sm text-[#2E7D32] font-medium mb-1">✓ All services include standard hygiene certification</p>
          <small className="text-[#6B7280]">Your EcoScore discount will be applied at checkout</small>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F7F9FB] p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#6B7280]">Selected Add-ons</span>
          <span className="font-semibold">₹{totalAddOnsCost}</span>
        </div>
        <Button fullWidth onClick={() => onNavigate('review')}>
          Continue to Payment
        </Button>
      </div>
    </div>
  );
}
