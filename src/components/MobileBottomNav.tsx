import { Home, Briefcase, Users, Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface MobileBottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function MobileBottomNav({
  currentPage,
  onNavigate,
  onOpenConsultation
}: MobileBottomNavProps) {
  const items: { id: PageId; label: string; icon: typeof Home }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'about', label: 'About', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <div
      id="nc-mobile-bottom-nav"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 pb-safe"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const active = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer select-none active:scale-90 ${
                active
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div
                className={`relative p-1 rounded-lg transition-colors ${
                  active ? 'bg-blue-50' : 'bg-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                {active && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white animate-pulse" />
                )}
              </div>
              <span className="text-[11px] mt-0.5 font-medium tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Quick Consultation Touch Action */}
        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md shadow-blue-500/25 active:scale-95 cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <ArrowUpRight className="w-3 h-3" />
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight whitespace-nowrap">
            Book Call
          </span>
        </button>
      </div>
    </div>
  );
}
