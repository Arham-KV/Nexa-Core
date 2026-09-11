import { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES, FAQS } from '../data/websiteData';
import {
  Cloud,
  ShieldCheck,
  Cpu,
  Lock,
  Briefcase,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  X,
  Shield,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function ServicesPage({ onNavigate, onOpenConsultation }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Cloud':
        return <Cloud className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Lock':
        return <Lock className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <BarChart3 className="w-6 h-6" />;
    }
  };

  return (
    <div id="nc-services-page" className="w-full">
      {/* 1. PAGE HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-800">
            Practice Areas
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Strategic Services Designed for Resilient, Scalable Operations
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From zero-downtime cloud migrations and 24/7 security monitoring to custom workflow integrations, explore our enterprise service suite.
          </p>
        </div>
      </section>

      {/* 2. 6 PROFESSIONAL SERVICE CARDS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="nc-card-hover bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="nc-service-icon-wrap w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      {renderIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Deliverables</span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Timeline: {service.timeline}</span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="nc-btn-secondary inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE MODAL (DETAILS VIEW) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                {renderIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedService.title}</h3>
                <span className="text-xs font-medium text-slate-500">Typical Engagement: {selectedService.timeline}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Solution Overview</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{selectedService.fullDesc}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Detailed Scope & Deliverables</h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Have specific requirements for this service?</span>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('contact');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm cursor-pointer"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. FAQ ACCORDION (Elementor Nested Accordion Model) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Clear Answers
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know about our engagement terms, SLAs, and technical operations.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50/70 transition-colors cursor-pointer text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOOKING CTA BLOCK */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Need a Custom Architecture Scope?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Our engineers can assess your existing technical stack and provide an honest, no-obligation quote.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
