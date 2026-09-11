import { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Settings, 
  MessageSquare, 
  Plus, 
  Eye, 
  EyeOff, 
  LayoutDashboard,
  Award
} from 'lucide-react';

interface WordPressAdminBarProps {
  onEditWithElementor: () => void;
  onOpenVercelGuide: () => void;
  onOpenDashboard: () => void;
  onOpenUpworkKit: () => void;
  isElementorMode: boolean;
  adminBarVisible: boolean;
  onToggleAdminBar: () => void;
  currentView: 'website' | 'dashboard';
}

export default function WordPressAdminBar({
  onEditWithElementor,
  onOpenVercelGuide,
  onOpenDashboard,
  onOpenUpworkKit,
  isElementorMode,
  adminBarVisible,
  onToggleAdminBar,
  currentView
}: WordPressAdminBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!adminBarVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2">
        <button
          onClick={onToggleAdminBar}
          title="Show WordPress Admin Bar"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 text-slate-200 hover:text-white text-xs shadow-xl backdrop-blur-xs border border-slate-700 transition-all hover:scale-105 cursor-pointer"
        >
          <span className="w-5 h-5 rounded-full bg-white text-slate-900 flex items-center justify-center font-serif font-black text-[11px] leading-none">
            W
          </span>
          <span className="font-medium text-[11px]">Show WP Admin Bar</span>
        </button>

        <button
          onClick={onOpenUpworkKit}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xl cursor-pointer transition-all"
        >
          <Award className="w-3.5 h-3.5" />
          <span>Upwork Kit</span>
        </button>
      </div>
    );
  }

  return (
    <header className="bg-[#1d2327] text-[#c3c4c7] text-[13px] border-b border-[#2c3338] sticky top-0 z-50 select-none shadow-xs font-sans">
      <div className="max-w-full px-3 h-8 flex items-center justify-between text-xs">
        {/* Left items (WordPress Standard) */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* WP Logo -> Opens Dashboard */}
          <div className="relative">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-2 py-1 hover:bg-[#2c3338] hover:text-[#72aee6] transition-colors rounded-xs cursor-pointer text-white"
              title="WordPress Dashboard (/wp-admin)"
            >
              <div className="w-4 h-4 rounded-full bg-white text-[#1d2327] flex items-center justify-center font-serif font-black text-[10px] leading-none">
                W
              </div>
            </button>
          </div>

          {/* Site Title / Dashboard Switcher */}
          {currentView === 'dashboard' ? (
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1 px-2 py-1 bg-[#2271b1] text-white rounded-xs cursor-pointer font-semibold"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>WP-Admin Dashboard</span>
            </button>
          ) : (
            <div className="flex items-center gap-1">
              <span className="px-2 py-1 text-white font-medium">NexaCore Solutions</span>
              <button
                onClick={onOpenDashboard}
                className="hidden sm:flex items-center gap-1 px-2 py-0.5 text-slate-300 hover:text-[#72aee6] hover:bg-[#2c3338] rounded-xs cursor-pointer text-[11px]"
                title="Go to WordPress Backend (/wp-admin)"
              >
                <LayoutDashboard className="w-3 h-3 text-[#72aee6]" />
                <span>Dashboard</span>
              </button>
            </div>
          )}

          {/* Edit with Elementor (Prominent Action) */}
          <button
            onClick={onEditWithElementor}
            className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs transition-colors cursor-pointer text-xs font-semibold ${
              isElementorMode
                ? 'bg-[#92003B] text-white'
                : 'hover:bg-[#2c3338] text-white hover:text-pink-300'
            }`}
            title="Launch Elementor Visual Drag & Drop Builder"
          >
            <span className="w-3.5 h-3.5 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[9px] font-bold">
              E
            </span>
            <span className="hidden sm:inline">
              {isElementorMode ? 'Exit Elementor Builder' : 'Edit with Elementor'}
            </span>
          </button>

          {/* Upwork Kit Button in Admin Bar */}
          <button
            onClick={onOpenUpworkKit}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded-xs bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-[11px] transition-colors cursor-pointer shadow-xs"
            title="Get Upwork Project Title, Description & Tags"
          >
            <Award className="w-3 h-3 text-emerald-200" />
            <span>Upwork Kit</span>
          </button>

          {/* + New dropdown */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 hover:bg-[#2c3338] hover:text-[#72aee6] transition-colors rounded-xs cursor-pointer">
            <Plus className="w-3.5 h-3.5" />
            <span>New</span>
          </div>
        </div>

        {/* Right side: Vercel Deploy & User */}
        <div className="flex items-center gap-2">
          {/* Vercel Push Guide CTA */}
          <button
            onClick={onOpenVercelGuide}
            className="flex items-center gap-1.5 bg-black hover:bg-slate-800 text-white px-2.5 py-0.5 rounded-xs border border-slate-700 text-[11px] font-semibold transition-all shadow-xs cursor-pointer"
            title="Deploy this WordPress Elementor Website to Vercel"
          >
            <svg viewBox="0 0 76 65" className="w-3 h-3 fill-current text-white">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <span className="font-mono">Push to Vercel</span>
          </button>

          {/* User profile */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 text-slate-300">
            <span>Howdy, <strong className="text-white font-semibold">Syed Arham</strong></span>
            <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
              A
            </div>
          </div>

          {/* Toggle button to hide WP admin bar */}
          <button
            onClick={onToggleAdminBar}
            className="p-1 hover:bg-[#2c3338] hover:text-white transition-colors rounded-xs cursor-pointer"
            title="Hide Admin Bar for pure clean frontend"
          >
            <EyeOff className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
