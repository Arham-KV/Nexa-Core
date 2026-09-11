import { useState, FormEvent } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/websiteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].title,
    timeframe: 'Immediate (Within 2 Weeks)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
            Complimentary 30-Min Discovery
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-2">
            Schedule a Free Consultation
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Speak directly with a senior solutions architect in Austin. No sales pressure.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-slate-900">Consultation Scheduled!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A calendar invite and audit preparation checklist have been sent to <strong>{formData.email}</strong>.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Primary Focus Area</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Brief Notes or Current Issues</label>
              <textarea
                rows={3}
                placeholder="Mention number of employees, current cloud provider, or goals..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Strict non-disclosure policy. Your data is never shared.</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md text-sm transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Confirming Booking...</span>
              ) : (
                <>
                  <span>Confirm Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
