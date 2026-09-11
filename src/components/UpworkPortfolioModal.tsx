import { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Camera, 
  ExternalLink,
  Award,
  Globe
} from 'lucide-react';
import { 
  ELEMENTOR_HOME_TEMPLATE_JSON, 
  ELEMENTOR_HEADER_TEMPLATE_JSON, 
  ELEMENTOR_FOOTER_TEMPLATE_JSON 
} from '../data/elementorJsonTemplates';

interface UpworkPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpworkPortfolioModal({ isOpen, onClose }: UpworkPortfolioModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const downloadJson = (data: object, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const upworkTitle = "NexaCore Solutions - Enterprise Corporate Website (WordPress & Elementor Pro)";

  const upworkDescription = `Project Overview:
NexaCore Solutions is a full-scale corporate web application crafted for an enterprise IT and Cloud Infrastructure provider. The client required a modern, high-converting, lightning-fast website built entirely on WordPress with Elementor Pro so their in-house marketing team could easily publish new case studies, edit services, and capture qualified consultation leads without touching code.

Key Highlights & Technical Deliverables:
• Built with WordPress 6.4 + Hello Elementor Child Theme for maximum performance.
• 100% Elementor Pro Flexbox Containers (Elementor 3.16+ modern layout architecture).
• Zero heavy page-bloat: Handcrafted custom CSS for micro-interactions, responsive grids, and subtle elevation states.
• Complete Global Design System: Plus Jakarta Sans typography, refined enterprise color palette, and accessible contrast ratios (WCAG AA).
• High-converting Interactive Elements: Custom Consultation Booking modal, dynamic KPI stat counters, service deliverable tabs, and interactive FAQs.
• 100% Responsive: Precision breakpoint optimization for Ultra-Wide Desktop, Laptop, iPad/Tablet, and Mobile devices.
• Speed Optimized: Lightweight asset loading, clean DOM nesting, achieving 95+ Google PageSpeed mobile score.

Role & Tools:
• Lead WordPress & Elementor Designer / Developer
• Tools: WordPress 6.4, Elementor Pro, Hello Elementor, CSS3 Flexbox/Grid, WPForms Pro, Rank Math SEO.`;

  const upworkSkills = [
    "WordPress",
    "Elementor Pro",
    "Elementor Flexbox Container",
    "WordPress Web Design",
    "Responsive Web Design",
    "Custom CSS",
    "Speed Optimization",
    "UI/UX Design",
    "Figma to WordPress"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto font-sans text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Upwork Portfolio Case Study Kit</span>
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-2 tracking-tight">
            Upwork Profile par List karne ke liye Complete Material
          </h2>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Bhai, aap is project ko direct apni Upwork Profile ke <strong>"Portfolio"</strong> section mein add karein. Yeh text, title, tags aur screenshots guide 100% Upwork client conversion ke liye crafted hain!
          </p>
        </div>

        {/* Section 1: Upwork Project Title */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              1. Upwork Portfolio Title (Copy-Paste)
            </span>
            <button
              onClick={() => copyText(upworkTitle, 'title')}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors cursor-pointer font-medium"
            >
              {copiedKey === 'title' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Title</span>
                </>
              )}
            </button>
          </div>
          <p className="text-sm font-bold text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200">
            {upworkTitle}
          </p>
        </div>

        {/* Section 2: Upwork Skills / Tags */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            2. Upwork Skills / Tags to Select
          </span>
          <div className="flex flex-wrap gap-1.5">
            {upworkSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Section 3: Upwork Case Study & Description */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              3. Project Description &amp; Case Study (English)
            </span>
            <button
              onClick={() => copyText(upworkDescription, 'desc')}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer font-bold shadow-xs"
            >
              {copiedKey === 'desc' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied Description!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Full Description</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 bg-white rounded-lg text-xs font-mono text-slate-700 whitespace-pre-wrap max-h-56 overflow-y-auto leading-relaxed border border-slate-200">
            {upworkDescription}
          </pre>
        </div>

        {/* Section 4: Screenshot Recommendations */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
            <Camera className="w-4 h-4 text-blue-600" />
            <span>4. Upwork Portfolio Image Screenshots to Take (5 Images)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-slate-900 block">Image 1 (Main Thumbnail):</strong>
              Homepage Hero with modern typography and CTA buttons.
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-slate-900 block">Image 2 (Elementor Editor):</strong>
              Elementor Pro Builder active showing Flexbox container layout handles.
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-slate-900 block">Image 3 (WordPress Backend):</strong>
              WordPress Dashboard (`/wp-admin`) showing Pages &amp; Elementor templates.
            </div>
            <div className="p-2.5 rounded bg-white border border-slate-200">
              <strong className="text-slate-900 block">Image 4 (Services &amp; Mobile):</strong>
              Services cards and tablet/mobile responsive view.
            </div>
          </div>
        </div>

        {/* Section 5: Real WordPress Files & Templates (.json) */}
        <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#92003B] uppercase tracking-wider">
            <Download className="w-4 h-4 text-[#92003B]" />
            <span>Real Elementor Pro Templates (.json) for WordPress Upload</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Agar client aapse Elementor template files maange ya aap apne real WordPress hosting (LocalWP/Hostinger) par import karna chahein toh yahan se download karein:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => downloadJson(ELEMENTOR_HOME_TEMPLATE_JSON, 'nexacore-home-elementor.json')}
              className="py-2 px-3 rounded-lg bg-white hover:bg-pink-100 text-slate-800 text-xs font-semibold border border-pink-200 transition-colors cursor-pointer shadow-xs text-center"
            >
              Download Home.json
            </button>
            <button
              onClick={() => downloadJson(ELEMENTOR_HEADER_TEMPLATE_JSON, 'nexacore-header-elementor.json')}
              className="py-2 px-3 rounded-lg bg-white hover:bg-pink-100 text-slate-800 text-xs font-semibold border border-pink-200 transition-colors cursor-pointer shadow-xs text-center"
            >
              Download Header.json
            </button>
            <button
              onClick={() => downloadJson(ELEMENTOR_FOOTER_TEMPLATE_JSON, 'nexacore-footer-elementor.json')}
              className="py-2 px-3 rounded-lg bg-white hover:bg-pink-100 text-slate-800 text-xs font-semibold border border-pink-200 transition-colors cursor-pointer shadow-xs text-center"
            >
              Download Footer.json
            </button>
          </div>
        </div>

        {/* Close Button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            Close Kit
          </button>
        </div>
      </div>
    </div>
  );
}
