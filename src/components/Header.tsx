import { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, PhoneCall, ShieldCheck, LayoutDashboard, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenDashboard?: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenConsultation, onOpenDashboard }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="nc-header"
        className={`nc-sticky-header sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                NexaCore
              </span>
              <span className="ml-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
                Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 text-sm font-semibold transition-colors cursor-pointer ${
                    active ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button & Phone preview */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^\d]/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              id="header-cta-button"
              onClick={onOpenConsultation}
              className="nc-btn-primary inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Quick Actions (Direct Call + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^\d]/g, '')}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors active:scale-95"
              title="Call NexaCore Solutions"
              aria-label="Call Business"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Slide-in from Right) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-[320px] bg-white h-full shadow-2xl flex flex-col p-5 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-sm">
                  N
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 text-sm block">NexaCore Solutions</span>
                  <span className="text-[10px] text-slate-500">Austin, Texas</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1.5 py-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
                Navigation
              </span>
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 active:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </nav>

            {/* Direct Contact info */}
            <div className="pt-2 pb-4 space-y-2 text-xs text-slate-600 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 block pt-2">
                Direct Contact
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^\d]/g, '')}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium truncate"
              >
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-4 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all text-sm cursor-pointer active:scale-95"
              >
                <span>Free 30-Min Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenDashboard && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDashboard();
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-3 rounded-xl text-xs transition-all cursor-pointer"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
                  <span>Open WP-Admin Dashboard</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
