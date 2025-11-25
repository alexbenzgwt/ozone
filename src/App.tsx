import { useState } from 'react';
import { Home } from './screens/Home';
import { SelectTank } from './screens/SelectTank';
import { AddOns } from './screens/AddOns';
import { ReviewPayment } from './screens/ReviewPayment';
import { Confirmation } from './screens/Confirmation';
import { LiveTracking } from './screens/LiveTracking';
import { Certificate } from './screens/Certificate';
import { Feedback } from './screens/Feedback';
import { CertificatesList } from './screens/CertificatesList';

type Screen = 
  | 'home' 
  | 'booking' 
  | 'addons' 
  | 'review' 
  | 'confirmation' 
  | 'tracking' 
  | 'certificate' 
  | 'feedback'
  | 'certificates';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [history, setHistory] = useState<Screen[]>(['home']);

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    setHistory(prev => [...prev, screen]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl">
      {currentScreen === 'home' && (
        <Home onNavigate={navigateTo} />
      )}
      
      {currentScreen === 'booking' && (
        <SelectTank onNavigate={navigateTo} onBack={goBack} />
      )}
      
      {currentScreen === 'addons' && (
        <AddOns onNavigate={navigateTo} onBack={goBack} />
      )}
      
      {currentScreen === 'review' && (
        <ReviewPayment onNavigate={navigateTo} onBack={goBack} />
      )}
      
      {currentScreen === 'confirmation' && (
        <Confirmation onNavigate={navigateTo} />
      )}
      
      {currentScreen === 'tracking' && (
        <LiveTracking onNavigate={navigateTo} onBack={goBack} />
      )}
      
      {currentScreen === 'certificate' && (
        <Certificate onNavigate={navigateTo} onBack={goBack} />
      )}
      
      {currentScreen === 'feedback' && (
        <Feedback onNavigate={navigateTo} onBack={goBack} />
      )}
      
      {currentScreen === 'certificates' && (
        <CertificatesList onNavigate={navigateTo} onBack={goBack} />
      )}
    </div>
  );
}
