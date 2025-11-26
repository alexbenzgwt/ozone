import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './screens/Home';
import { SelectTank } from './screens/SelectTank';
import { AddOns } from './screens/AddOns';
import { ReviewPayment } from './screens/ReviewPayment';
import { Confirmation } from './screens/Confirmation';
import { LiveTracking } from './screens/LiveTracking';
import { Certificate } from './screens/Certificate';
import { Feedback } from './screens/Feedback';
import { CertificatesList } from './screens/CertificatesList';

const Nav = () => {
  const { pathname } = useLocation();
  if (pathname === '/confirmation') return null;

  return (
    <nav className="p-4 bg-gray-100">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/booking" className="text-blue-500 hover:underline">
            Select Tank
          </Link>
        </li>
        <li>
          <Link to="/add-ons" className="text-blue-500 hover:underline">
            AddOns
          </Link>
        </li>
        <li>
          <Link to="/review-payment" className="text-blue-500 hover:underline">
            Review Payment
          </Link>
        </li>
        <li>
          <Link to="/confirmation" className="text-blue-500 hover:underline">
            Confirmation
          </Link>
        </li>
        <li>
          <Link to="/live-tracking" className="text-blue-500 hover:underline">
            Live Tracking
          </Link>
        </li>
        <li>
          <Link to="/certificate" className="text-blue-500 hover:underline">
            Certificate
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="text-blue-500 hover:underline">
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/certificates" className="text-blue-500 hover:underline">
            Certificates List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<SelectTank />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/review-payment" element={<ReviewPayment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/live-tracking" element={<LiveTracking />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/certificates" element={<CertificatesList />} />
      </Routes>
    </div>
  );
}
