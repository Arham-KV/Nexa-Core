import { PageId } from '../types';
import { TEAM_MEMBERS, CORE_VALUES, HOME_STATS } from '../data/websiteData';
import {
  Shield,
  Target,
  Users,
  Award,
  CheckCircle,
  Zap,
  Lock,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function AboutPage({ onNavigate, onOpenConsultation }: AboutPageProps) {
  const renderValueIcon = (name: string) => {
    switch (name) {
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-blue-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div id="nc-about-page" className="w-full">
      {/* 1. PAGE HEADER BANNER */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3.5 py-1 rounded-full border border-blue-800">
            About NexaCore Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Empowering Modern Enterprises with Pragmatic Innovation
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Headquartered in Austin, Texas, NexaCore Solutions was founded to solve a pervasive problem: businesses getting trapped between generic, slow-responding helpdesks and prohibitively expensive big-four consultancies.
          </p>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION & MISSION/VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why NexaCore Exists
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In today’s connected economy, technology is no longer a peripheral utility — it is the central nervous system of your business. When cloud servers falter or cyber threats penetrate an unpatched laptop, revenue and client trust vanish in minutes.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We designed NexaCore from the ground up as a proactive engineering partner. We take complete ownership of your technology ecosystem so your leadership team can focus entirely on growth, innovation, and client delight.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <Target className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To engineer rock-solid, secure, and automated technology foundations that enable ambitious companies to scale without technical limits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be the most trusted, dependable technology advisory and infrastructure partner for mid-market leaders across North America.
                  </p>
                </div>
              </div>
            </div>

            {/* Traction & Quality Standards Card */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-8 border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Proven Operational Track Record</h3>
              <div className="grid grid-cols-2 gap-4">
                {HOME_STATS.map((stat, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-blue-600">{stat.value}</div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5">{stat.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{stat.subtext}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                <strong>Austin NOC Facilities:</strong> Multi-homed fiber connectivity, redundant generator power, and biometric physical security guaranteeing 99.98% operational SLA availability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE LEADERSHIP TEAM */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineers & Architects Dedicated to Your Success
            </h2>
            <p className="text-slate-600 text-base">
              Our executive team combines decades of enterprise architecture experience from top technology firms with hands-on client dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{member.role}</p>
                  </div>
                  <p className="text-xs text-slate-500 italic">{member.experience}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE COMPANY VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Values That Anchor Every Decision We Make
            </h2>
            <p className="text-slate-600 text-base">
              These fundamental principles guide our technical architecture, client agreements, and 24/7 service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 flex items-center justify-center">
                  {renderValueIcon(val.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Meet the Team and Experience the NexaCore Difference
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Book an introductory call with an enterprise IT architect today. No pushy sales pitch — just practical technology advice.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <span>Schedule Discovery Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
