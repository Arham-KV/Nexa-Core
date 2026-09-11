import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/websiteData';
import { MapPin, Phone, Mail, Clock, ArrowRight, Shield, LayoutDashboard } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDashboard?: () => void;
}

export default function Footer({ onNavigate, onOpenDashboard }: FooterProps) {
  return (
    <footer id="nc-global-footer" className="bg-slate-900 text-slate-300 pt-16 pb-28 sm:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
                N
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NexaCore <span className="text-blue-400 font-semibold text-sm uppercase">Solutions</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              NexaCore Solutions delivers enterprise-grade cloud architecture, 24/7 managed IT operations, and operational automation for growing businesses across North America.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/70 px-3 py-1.5 rounded-md border border-slate-700/60">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                SOC2 &amp; HIPAA Compliant Operations
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-400 transition-colors text-slate-400 hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Contact</span>
                </button>
              </li>
              {onOpenDashboard && (
                <li>
                  <button
                    onClick={onOpenDashboard}
                    className="hover:text-blue-400 transition-colors text-slate-500 hover:translate-x-1 transition-transform inline-flex items-center gap-1 cursor-pointer text-xs"
                  >
                    <LayoutDashboard className="w-3 h-3 text-slate-500" />
                    <span>WP-Admin</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Core Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Expertise</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Cloud Migration &amp; AWS / Azure</li>
              <li>24/7 Managed IT Support &amp; NOC</li>
              <li>Workflow Automation &amp; APIs</li>
              <li>Cybersecurity Defense &amp; Zero-Trust</li>
              <li>Data Warehousing &amp; Dashboards</li>
            </ul>
          </div>

          {/* Column 4: Contact Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Austin Headquarters</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/[^\d]/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NexaCore Solutions LLC. Built with WordPress &amp; Elementor Pro.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
