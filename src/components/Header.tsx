import { ArrowLeft, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  showMenu?: boolean;
  showNotifications?: boolean;
}

export function Header({ title, onBack, showMenu, showNotifications }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F7F9FB] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F7F9FB] active:scale-95 transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-[#0F1724]" />
          </button>
        )}
        {showMenu && (
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F7F9FB] active:scale-95 transition-all">
            <Menu className="w-6 h-6 text-[#0F1724]" />
          </button>
        )}
      </div>
      
      {title && (
        <h3 className="absolute left-1/2 transform -translate-x-1/2">{title}</h3>
      )}
      
      <div className="flex items-center gap-2">
        {showNotifications && (
          <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F7F9FB] active:scale-95 transition-all">
            <Bell className="w-6 h-6 text-[#0F1724]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#E53935] rounded-full"></span>
          </button>
        )}
        <div className="w-10 h-10 rounded-full bg-[#1976D2] flex items-center justify-center">
          <span className="text-white">A</span>
        </div>
      </div>
    </header>
  );
}
