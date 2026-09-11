import { 
  EyeOff, 
  LayoutDashboard,
  Award,
  ExternalLink
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
  if (!adminBarVisible) {
    return (
      <div className="fixed bottom-16 sm:bottom-4 left-3 sm:left-4 z-50 flex items-center gap-2">
        <button
          onClick={onToggleAdminBar}
          title="Show WordPress Admin Bar"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/95 text-slate-200 hover:text-white text-xs shadow-xl backdrop-blur-md border border-slate-700 transition-all hover:scale-105 cursor-pointer active:scale-95"
        >
          <span className="w-4 h-4 rounded-full bg-white text-slate-900 flex items-center justify-center font-serif font-black text-[10px] leading-none">
            W
          </span>
          <span className="font-semibold text-[11px]">WP Admin Bar</span>
        </button>
      </div>
    );
  }

  return (
    <header className="bg-[#1d2327] text-[#c3c4c7] text-[13px] border-b border-[#2c3338] sticky top-0 z-50 select-none shadow-xs font-sans">
      <div className="max-w-full px-2 sm:px-3 h-8 flex items-center justify-between text-xs">
        {/* Left items (WordPress Standard) */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          {/* WP Logo -> Opens Dashboard */}
          <button
            onClick={onOpenDashboard}
            className="flex items-center gap-1.5 p-1 hover:bg-[#2c3338] hover:text-[#72aee6] transition-colors rounded-xs cursor-pointer text-white shrink-0"
            title="WordPress Dashboard (/wp-admin)"
          >
            <div className="w-4 h-4 rounded-full bg-white text-[#1d2327] flex items-center justify-center font-serif font-black text-[10px] leading-none">
              W
            </div>
          </button>

          {/* Site Title / Dashboard Switcher */}
          {currentView === 'dashboard' ? (
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1 px-2 py-0.5 bg-[#2271b1] text-white rounded-xs cursor-pointer font-semibold shrink-0 text-[11px]"
            >
              <LayoutDashboard className="w-3 h-3" />
              <span>WP-Admin</span>
            </button>
          ) : (
            <div className="flex items-center gap-1 shrink-0">
              <span className="hidden xs:inline px-1 text-white font-medium text-[11px]">NexaCore</span>
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-1 px-1.5 py-0.5 text-slate-300 hover:text-[#72aee6] hover:bg-[#2c3338] rounded-xs cursor-pointer text-[11px]"
                title="Go to WordPress Backend (/wp-admin)"
              >
                <LayoutDashboard className="w-3 h-3 text-[#72aee6]" />
                <span className="hidden sm:inline">Dashboard</span>
              </button>
            </div>
          )}

          {/* Edit with Elementor (Prominent Action) */}
          <button
            onClick={onEditWithElementor}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-xs transition-colors cursor-pointer text-[11px] font-semibold shrink-0 ${
              isElementorMode
                ? 'bg-[#92003B] text-white'
                : 'hover:bg-[#2c3338] text-white hover:text-pink-300'
            }`}
            title="Launch Elementor Visual Drag & Drop Builder"
          >
            <span className="w-3.5 h-3.5 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[9px] font-bold">
              E
            </span>
            <span className="hidden xs:inline">
              {isElementorMode ? 'Exit Elementor' : 'Elementor'}
            </span>
          </button>

          {/* Upwork Kit Button in Admin Bar */}
          <button
            onClick={onOpenUpworkKit}
            className="flex items-center gap-1 px-2 py-0.5 rounded-xs bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-[11px] transition-colors cursor-pointer shadow-xs shrink-0"
            title="Get Upwork Project Title, Description & Tags"
          >
            <Award className="w-3 h-3 text-emerald-200" />
            <span className="hidden sm:inline">Upwork Kit</span>
          </button>
        </div>

        {/* Right side: Vercel Deploy & User */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Vercel Push Guide CTA */}
          <button
            onClick={onOpenVercelGuide}
            className="flex items-center gap-1 bg-black hover:bg-slate-800 text-white px-2 py-0.5 rounded-xs border border-slate-700 text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer"
            title="Deploy this WordPress Elementor Website to Vercel"
          >
            <svg viewBox="0 0 76 65" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-white">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <span className="font-mono">Vercel</span>
          </button>

          {/* User profile */}
          <div className="hidden md:flex items-center gap-1.5 px-2 py-1 text-slate-300">
            <span>Howdy, <strong className="text-white font-semibold">Syed Arham</strong></span>
            <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
              A
            </div>
          </div>

          {/* Toggle button to hide WP admin bar */}
          <button
            onClick={onToggleAdminBar}
            className="p-1 hover:bg-[#2c3338] hover:text-white transition-colors rounded-xs cursor-pointer"
            title="Hide Admin Bar for pure clean mobile view"
          >
            <EyeOff className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
