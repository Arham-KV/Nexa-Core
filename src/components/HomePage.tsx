import { PageId } from '../types';
import { HOME_STATS, SERVICES, WHY_CHOOSE_US, PROCESS_STEPS, TESTIMONIALS } from '../data/websiteData';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Star,
  Sparkles,
  Cloud,
  ShieldCheck,
  Cpu,
  Lock,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function HomePage({ onNavigate, onOpenConsultation }: HomePageProps) {
  // Map icon strings to Lucide components
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
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div id="nc-home-page" className="w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Enterprise SLA & Managed Cloud Operations</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Intelligent Technology Solutions Built to Accelerate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-sky-500">
                  Business Growth
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                We empower mid-market companies with resilient cloud infrastructure, 24/7 proactive managed IT, and custom workflow automation. Eliminate downtime and protect your bottom line.
              </p>

              {/* Dual Conversion CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-primary-cta"
                  onClick={onOpenConsultation}
                  className="nc-btn-primary group inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all text-base hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => onNavigate('services')}
                  className="nc-btn-secondary inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-base shadow-xs cursor-pointer"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Guaranteed Sub-15 Min SLA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Zero-Lockin Flexible Retainers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Certified US Engineers</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200/80 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        NOC Status: Fully Operational
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      Austin, TX Hub
                    </span>
                  </div>

                  {/* Telemetry Metric Bars */}
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs text-slate-500 font-medium">Uptime Guarantee</span>
                        <p className="text-lg font-bold text-slate-900">99.98% High-Availability</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold">
                        <Shield className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs text-slate-500 font-medium">Avg Support Dispatch</span>
                        <p className="text-lg font-bold text-slate-900">&lt; 7.4 Minutes</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-600 flex items-center justify-center font-bold">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs text-slate-500 font-medium">Cost Savings Realized</span>
                        <p className="text-lg font-bold text-slate-900">34% IT Overhead Cut</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-sky-100/70 text-sky-600 flex items-center justify-center font-bold">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Mini Client Snapshot */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>150+ Enterprise Deployments</span>
                    </div>
                    <span className="font-semibold text-blue-600">Verified SLA</span>
                  </div>
                </div>

                {/* Floating Badge Accent */}
                <div className="absolute -bottom-5 -left-5 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 hidden sm:flex">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-sm">
                    ★
                  </div>
                  <div>
                    <p className="text-xs font-bold">Top Austin IT Partner</p>
                    <p className="text-[11px] text-slate-400">5.0 Star Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / EXPERIENCE STATS BAR */}
      <section id="stats-section" className="py-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {HOME_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-blue-600">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW GRID (4 PILLARS) */}
      <section id="services-overview-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Services Tailored for Scalable Performance
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We bridge the gap between complex enterprise technologies and pragmatic day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="nc-card-hover bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="nc-service-icon-wrap w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      {renderIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Timeline: {service.timeline}</span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-blue-600 text-sm border-b border-slate-300 hover:border-blue-600 pb-0.5 transition-colors cursor-pointer"
            >
              <span>View All 6 Strategic Practice Areas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (COMPARISON & ADVANTAGES) */}
      <section id="why-choose-us-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                The NexaCore Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Why Growing Organizations Choose Us Over Legacy IT Providers
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Most IT vendors profit when things break, charging surprise billable hours. We operate on a proactive SLA model where our incentives are 100% aligned with your operational uptime.
              </p>

              <div className="space-y-4 pt-2">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold">Standard vs. NexaCore Model</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Comparing real client outcomes</p>
                  </div>
                  <Award className="w-8 h-8 text-blue-400" />
                </div>

                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Traditional Break-Fix IT</span>
                    <p className="text-slate-300">Reactive responses, billable hourly charges, unpredictable monthly budget swings, finger-pointing between vendors.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-950/70 border border-blue-600/40 space-y-1">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">NexaCore Managed Partnership</span>
                    <p className="text-slate-100 font-medium">Predictable flat monthly fee, continuous telemetry monitoring, guaranteed sub-15 minute dispatch, dedicated Austin senior architect.</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>99.4% Client Satisfaction</span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-blue-400 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS / HOW IT WORKS */}
      <section id="process-section" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Execution Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Proven 4-Step Strategic Process
            </h2>
            <p className="text-slate-600 text-base">
              A structured, low-risk roadmap ensuring smooth implementation with guaranteed operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-blue-600/25 font-mono mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{step.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                  {step.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section id="testimonials-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Endorsed by Fast-Growing Mid-Market Leaders
            </h2>
            <p className="text-slate-600 text-base">
              See what business executives say about our engineering quality and response speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="nc-quote-card bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  <div className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100/70 text-blue-800 inline-block">
                    Impact: {t.metric}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERSION CTA BANNER */}
      <section id="home-cta-banner" className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-blue-900/60 to-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Schedule a 30-minute discovery call with our senior architects. We’ll review your existing systems and identify security gaps and cost-reduction opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <span>Direct Contact Information</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
