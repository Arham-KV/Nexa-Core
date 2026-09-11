import { useState, FormEvent } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/websiteData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Shield,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Managed IT Support & Endpoint Fleet Operations',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div id="nc-contact-page" className="w-full">
      {/* 1. PAGE HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-800">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Let’s Discuss Your Next Operational Milestone
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or need dependable enterprise IT support? Connect with our senior advisory team in Austin, Texas.
          </p>
        </div>
      </section>

      {/* 2. CONTACT SPLIT SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Send an Inquiry</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your company details below. An enterprise architect will respond within 4 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">Thank You, Message Received!</h3>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    We have received your project details. Senior architect Marcus Sterling will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Managed IT Support & Endpoint Fleet Operations',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-900 cursor-pointer pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 nc-form-styled">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Johnathan Davis"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="johnathan@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700">
                        Primary Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700">
                      Message & Technical Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Please describe your current team size, pain points, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full nc-btn-primary inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md shadow-blue-500/25 transition-all text-sm cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Business Directory & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Direct Office Contacts</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Physical Address</h4>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Direct Telephone</h4>
                      <a
                        href={`tel:${BUSINESS_INFO.phone.replace(/[^\d]/g, '')}`}
                        className="text-blue-600 font-medium text-xs hover:underline mt-0.5 inline-block"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Corporate Email</h4>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-blue-600 font-medium text-xs hover:underline mt-0.5 inline-block"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Operating Hours</h4>
                      <p className="text-slate-600 text-xs mt-0.5">{BUSINESS_INFO.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-500">Connect:</span>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Linkedin className="w-4 h-4" />
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Twitter className="w-4 h-4" />
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Github className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Emergency Support Guarantee */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-2 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Contracted SLA Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Active retainer clients have direct 24/7/365 access to our private emergency NOC bridge with guaranteed 15-minute response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS PLACEHOLDER */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Office Location Map Preview</span>
              <span>Austin Innovation Corridor, Texas</span>
            </div>
            {/* Visual Interactive Map Placeholder */}
            <div className="relative h-72 bg-gradient-to-br from-slate-200 via-slate-100 to-blue-50 flex items-center justify-center text-center p-6">
              <div className="bg-white/95 backdrop-blur-xs p-6 rounded-2xl shadow-xl border border-slate-200 max-w-sm space-y-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">NexaCore Solutions Headquarters</h4>
                <p className="text-xs text-slate-600">482 Innovation Way, Suite 300, Austin, TX 78701</p>
                <div className="pt-2 text-[11px] text-blue-600 font-semibold">
                  Latitude 30.2672° N, Longitude 97.7431° W
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
