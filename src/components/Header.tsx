import { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenConsultation }: HeaderProps) {
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
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="header-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                NexaCore
              </span>
              <span className="ml-1 text-sm font-semibold tracking-wider uppercase text-blue-600">
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
                  className={`relative py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                    active ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
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
              className="nc-btn-primary inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-base">
                  N
                </div>
                <span className="font-bold text-slate-900">NexaCore Solutions</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 py-6">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                      active
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Enterprise SLA Guarantee</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
