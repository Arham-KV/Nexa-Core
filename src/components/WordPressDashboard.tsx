import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Layers, 
  Paintbrush, 
  Plug, 
  Users, 
  Wrench, 
  Settings, 
  ExternalLink, 
  Plus, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  Eye, 
  FileCode, 
  FolderGit2,
  ArrowRight,
  Monitor
} from 'lucide-react';
import { PageId } from '../types';
import { 
  ELEMENTOR_HOME_TEMPLATE_JSON, 
  ELEMENTOR_HEADER_TEMPLATE_JSON, 
  ELEMENTOR_FOOTER_TEMPLATE_JSON 
} from '../data/elementorJsonTemplates';

interface WordPressDashboardProps {
  onVisitSite: () => void;
  onEditPageWithElementor: (page: PageId) => void;
  onOpenUpworkKit: () => void;
  onOpenVercelGuide: () => void;
}

export default function WordPressDashboard({
  onVisitSite,
  onEditPageWithElementor,
  onOpenUpworkKit,
  onOpenVercelGuide
}: WordPressDashboardProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'pages' | 'plugins' | 'elementor' | 'themes'>('dashboard');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  const downloadJson = (data: object, filename: string) => {
    downloadFile(JSON.stringify(data, null, 2), filename, 'application/json');
  };

  return (
    <div className="w-full min-h-screen bg-[#f0f0f1] text-[#2c3338] font-sans flex flex-col antialiased">
      {/* WP-Admin Top Bar */}
      <header className="h-8 bg-[#1d2327] text-[#c3c4c7] flex items-center justify-between px-3 text-xs shrink-0 select-none z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={onVisitSite}
            className="flex items-center gap-1.5 px-2 py-1 text-white hover:bg-[#2c3338] rounded-xs transition-colors cursor-pointer"
            title="WordPress 6.4+"
          >
            <span className="w-4 h-4 rounded-full bg-white text-[#1d2327] flex items-center justify-center font-serif font-black text-[10px] leading-none">
              W
            </span>
          </button>

          <button
            onClick={onVisitSite}
            className="flex items-center gap-1 px-2 py-1 text-white hover:bg-[#2c3338] hover:text-[#72aee6] rounded-xs transition-colors cursor-pointer font-semibold"
          >
            <span>NexaCore Solutions</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </button>

          <button
            onClick={() => onEditPageWithElementor('home')}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#92003B] text-white hover:bg-[#a60043] transition-colors cursor-pointer text-xs font-semibold"
          >
            <span className="w-3.5 h-3.5 rounded-xs bg-white text-[#92003B] flex items-center justify-center text-[9px] font-black">
              E
            </span>
            <span>Edit with Elementor</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenUpworkKit}
            className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-xs text-[11px] font-semibold cursor-pointer shadow-xs transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            <span>Upwork Portfolio Kit</span>
          </button>

          <button
            onClick={onOpenVercelGuide}
            className="flex items-center gap-1 bg-black hover:bg-slate-800 text-white px-2.5 py-0.5 rounded-xs border border-slate-700 text-[11px] font-semibold cursor-pointer transition-colors"
          >
            <svg viewBox="0 0 76 65" className="w-2.5 h-2.5 fill-current text-white">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <span>Vercel Deploy</span>
          </button>

          <div className="hidden md:flex items-center gap-1.5 px-2 py-1 text-slate-300">
            <span>Howdy, <strong className="text-white">Syed Arham</strong></span>
            <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main Container (Sidebar + Content) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left WordPress Sidebar */}
        <aside className="w-44 sm:w-48 bg-[#1d2327] text-[#c3c4c7] shrink-0 select-none py-2 text-xs flex flex-col justify-between">
          <div className="space-y-0.5">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-[#2271b1] text-white font-semibold'
                  : 'hover:bg-[#2c3338] hover:text-[#72aee6]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('pages')}
              className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'pages'
                  ? 'bg-[#2271b1] text-white font-semibold'
                  : 'hover:bg-[#2c3338] hover:text-[#72aee6]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <div className="flex-1 flex items-center justify-between">
                <span>Pages</span>
                <span className="text-[10px] bg-[#2c3338] text-slate-300 px-1.5 rounded-full">4</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('elementor')}
              className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'elementor'
                  ? 'bg-[#92003B] text-white font-semibold'
                  : 'hover:bg-[#2c3338] hover:text-pink-300'
              }`}
            >
              <span className="w-4 h-4 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[10px] font-black">
                E
              </span>
              <span>Elementor Pro</span>
            </button>

            <button
              onClick={() => setActiveTab('themes')}
              className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'themes'
                  ? 'bg-[#2271b1] text-white font-semibold'
                  : 'hover:bg-[#2c3338] hover:text-[#72aee6]'
              }`}
            >
              <Paintbrush className="w-4 h-4" />
              <span>Appearance</span>
            </button>

            <button
              onClick={() => setActiveTab('plugins')}
              className={`w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors cursor-pointer ${
                activeTab === 'plugins'
                  ? 'bg-[#2271b1] text-white font-semibold'
                  : 'hover:bg-[#2c3338] hover:text-[#72aee6]'
              }`}
            >
              <Plug className="w-4 h-4" />
              <div className="flex-1 flex items-center justify-between">
                <span>Plugins</span>
                <span className="text-[10px] bg-emerald-800 text-white px-1.5 rounded-full">4 Active</span>
              </div>
            </button>

            <div className="pt-2 pb-1 px-3">
              <div className="h-px bg-[#2c3338]" />
            </div>

            <button
              onClick={onVisitSite}
              className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-slate-400 hover:text-white hover:bg-[#2c3338] transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-blue-400" />
              <span>View Frontend</span>
            </button>
          </div>

          <div className="px-3 py-2 border-t border-[#2c3338] text-[11px] text-slate-500">
            <span>WordPress 6.4.3</span>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Top Title Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-300">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#1d2327]">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'pages' && 'Pages — Managed with Elementor Pro'}
                {activeTab === 'elementor' && 'Elementor Pro & Theme Builder'}
                {activeTab === 'plugins' && 'Installed Plugins'}
                {activeTab === 'themes' && 'Appearance > Themes'}
              </h1>
              <p className="text-xs text-slate-600 mt-0.5">
                NexaCore Solutions corporate website management panel
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onVisitSite}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Visit Live Website</span>
              </button>

              <button
                onClick={onOpenUpworkKit}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Upwork Case Study</span>
              </button>
            </div>
          </div>

          {/* Download notice if active */}
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Downloaded file: <strong>{downloadSuccess}</strong></span>
            </div>
          )}

          {/* =========================================================
              TAB 1: DASHBOARD
              ========================================================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-xs space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Welcome to NexaCore Solutions WordPress Administration!
                    </h2>
                    <p className="text-xs text-slate-600 max-w-2xl mt-1 leading-relaxed">
                      We’ve assembled links to get you started editing pages, managing Elementor Pro Theme Builder templates, and customizing your site.
                    </p>
                  </div>
                  <button
                    onClick={() => onEditPageWithElementor('home')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#92003B] hover:bg-[#a60043] text-white text-xs font-bold rounded shadow-xs cursor-pointer"
                  >
                    <span className="w-4 h-4 rounded-xs bg-white text-[#92003B] flex items-center justify-center text-[10px] font-black">
                      E
                    </span>
                    <span>Launch Elementor on Homepage</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-slate-900">Get Started</h4>
                    <button
                      onClick={() => onEditPageWithElementor('home')}
                      className="text-[#2271b1] hover:underline block cursor-pointer"
                    >
                      Customize your site with Elementor →
                    </button>
                    <button
                      onClick={onVisitSite}
                      className="text-[#2271b1] hover:underline block cursor-pointer"
                    >
                      View the live frontend →
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-slate-900">Next Steps</h4>
                    <button
                      onClick={() => setActiveTab('pages')}
                      className="text-[#2271b1] hover:underline block cursor-pointer"
                    >
                      Edit existing 4 pages →
                    </button>
                    <button
                      onClick={() => setActiveTab('plugins')}
                      className="text-[#2271b1] hover:underline block cursor-pointer"
                    >
                      Manage Elementor Pro plugins →
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-slate-900">Portfolio & Upwork</h4>
                    <button
                      onClick={onOpenUpworkKit}
                      className="text-emerald-700 font-semibold hover:underline block cursor-pointer"
                    >
                      Open Upwork Portfolio Case Study →
                    </button>
                    <button
                      onClick={onOpenVercelGuide}
                      className="text-[#2271b1] hover:underline block cursor-pointer"
                    >
                      Push & Deploy to Vercel Live →
                    </button>
                  </div>
                </div>
              </div>

              {/* 2-Column Dashboard Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* At a Glance */}
                <div className="bg-white rounded-lg border border-slate-300 shadow-xs">
                  <div className="px-4 py-3 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
                    <span>At a Glance</span>
                    <span className="text-[11px] font-normal text-slate-500">WordPress 6.4.3</span>
                  </div>
                  <div className="p-4 space-y-3 text-xs text-slate-700">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span><strong>4</strong> Published Pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Plug className="w-4 h-4 text-emerald-600" />
                        <span><strong>4</strong> Active Plugins</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Paintbrush className="w-4 h-4 text-blue-600" />
                        <span>Theme: <strong>Hello Elementor</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#92003B]" />
                        <span>Builder: <strong>Elementor Pro 3.19</strong></span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-slate-500 text-[11px]">
                      NexaCore Solutions is running on modern PHP 8.2 with Flexbox Container experiment active.
                    </div>
                  </div>
                </div>

                {/* Site Health Status */}
                <div className="bg-white rounded-lg border border-slate-300 shadow-xs">
                  <div className="px-4 py-3 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
                    <span>Site Health Status</span>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Good (100%)
                    </span>
                  </div>
                  <div className="p-4 space-y-3 text-xs text-slate-700">
                    <p className="text-slate-600 leading-relaxed">
                      Your website’s health check shows that everything is running smoothly. Zero deprecated plugins, optimized database tables, and responsive mobile rendering verified.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
                        SSL: Active
                      </span>
                      <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
                        PHP: 8.2.14
                      </span>
                      <span className="px-2 py-1 bg-slate-100 rounded text-[11px] font-mono text-slate-700">
                        Containers: Enabled
                      </span>
                    </div>
                  </div>
                </div>

                {/* Elementor Pro Overview Widget */}
                <div className="bg-white rounded-lg border border-slate-300 shadow-xs">
                  <div className="px-4 py-3 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[9px] font-black">
                        E
                      </span>
                      <span>Elementor Overview</span>
                    </div>
                    <span className="text-[11px] text-[#92003B] font-bold">Pro Active</span>
                  </div>
                  <div className="p-4 space-y-3 text-xs text-slate-700">
                    <div className="space-y-1.5">
                      <div className="flex justify-between">
                        <span>Flexbox Container:</span>
                        <strong className="text-emerald-700">Active (Modern)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Theme Builder Templates:</span>
                        <strong>Header, Footer, 404, Popup</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Global Colors:</span>
                        <span className="font-mono text-blue-700">#0F172A, #2563EB, #38BDF8</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Global Fonts:</span>
                        <span>Plus Jakarta Sans + Inter</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex gap-2">
                      <button
                        onClick={() => downloadJson(ELEMENTOR_HOME_TEMPLATE_JSON, 'nexacore-home-elementor.json')}
                        className="flex-1 py-1.5 px-2 bg-pink-50 hover:bg-pink-100 text-[#92003B] font-semibold rounded border border-pink-200 text-center cursor-pointer transition-colors"
                      >
                        Download Home JSON
                      </button>
                      <button
                        onClick={() => downloadJson(ELEMENTOR_HEADER_TEMPLATE_JSON, 'nexacore-header-elementor.json')}
                        className="flex-1 py-1.5 px-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded border border-slate-200 text-center cursor-pointer transition-colors"
                      >
                        Download Header JSON
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Client Portfolio Info */}
                <div className="bg-white rounded-lg border border-slate-300 shadow-xs">
                  <div className="px-4 py-3 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
                    <span>Upwork Project Deliverables</span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="p-4 space-y-3 text-xs text-slate-700">
                    <p className="text-slate-600 leading-relaxed">
                      Use this live project on your Upwork profile under <strong>WordPress Development</strong> &amp; <strong>Elementor Pro Web Design</strong>.
                    </p>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                      <li>Live Client Link on Vercel</li>
                      <li>WordPress Admin proof (`/wp-admin`)</li>
                      <li>Elementor Visual Editor demo</li>
                      <li>Downloadable Theme &amp; Template files</li>
                    </ul>
                    <button
                      onClick={onOpenUpworkKit}
                      className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded transition-colors text-center cursor-pointer"
                    >
                      Copy Ready Upwork Description &amp; Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 2: PAGES LIST
              ========================================================= */}
          {activeTab === 'pages' && (
            <div className="bg-white rounded-lg border border-slate-300 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800">All (4)</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs text-slate-600">Published (4)</span>
                </div>
                <button
                  onClick={onVisitSite}
                  className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer"
                >
                  View Frontend Site
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#f6f7f7] border-b border-slate-200 text-slate-700 font-bold">
                      <th className="p-3 w-10">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="p-3">Title</th>
                      <th className="p-3">Author</th>
                      <th className="p-3">Page Builder</th>
                      <th className="p-3">Date</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* Page 1: Home */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <span>Home</span>
                          <span className="text-[10px] px-2 py-0.2 rounded bg-slate-100 text-slate-600 font-normal">
                            Front Page, Elementor
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-[#2271b1] mt-1">
                          <button
                            onClick={() => onEditPageWithElementor('home')}
                            className="hover:underline font-bold text-[#92003B] cursor-pointer"
                          >
                            Edit with Elementor
                          </button>
                          <span className="text-slate-300">|</span>
                          <button onClick={onVisitSite} className="hover:underline cursor-pointer">
                            View
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-slate-600">Syed Arham</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 font-bold text-[#92003B]">
                          <span className="w-3 h-3 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[8px]">E</span>
                          <span>Elementor Pro</span>
                        </span>
                      </td>
                      <td className="p-3 text-slate-600">Published<br />2026/09/11</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => onEditPageWithElementor('home')}
                          className="px-2.5 py-1 rounded bg-[#92003B] hover:bg-[#a60043] text-white text-xs font-semibold cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>

                    {/* Page 2: About */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <span>About Us</span>
                          <span className="text-[10px] px-2 py-0.2 rounded bg-slate-100 text-slate-600 font-normal">
                            Elementor
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-[#2271b1] mt-1">
                          <button
                            onClick={() => onEditPageWithElementor('about')}
                            className="hover:underline font-bold text-[#92003B] cursor-pointer"
                          >
                            Edit with Elementor
                          </button>
                          <span className="text-slate-300">|</span>
                          <button onClick={onVisitSite} className="hover:underline cursor-pointer">
                            View
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-slate-600">Syed Arham</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 font-bold text-[#92003B]">
                          <span className="w-3 h-3 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[8px]">E</span>
                          <span>Elementor Pro</span>
                        </span>
                      </td>
                      <td className="p-3 text-slate-600">Published<br />2026/09/11</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => onEditPageWithElementor('about')}
                          className="px-2.5 py-1 rounded bg-[#92003B] hover:bg-[#a60043] text-white text-xs font-semibold cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>

                    {/* Page 3: Services */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <span>Services &amp; Capabilities</span>
                          <span className="text-[10px] px-2 py-0.2 rounded bg-slate-100 text-slate-600 font-normal">
                            Elementor
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-[#2271b1] mt-1">
                          <button
                            onClick={() => onEditPageWithElementor('services')}
                            className="hover:underline font-bold text-[#92003B] cursor-pointer"
                          >
                            Edit with Elementor
                          </button>
                          <span className="text-slate-300">|</span>
                          <button onClick={onVisitSite} className="hover:underline cursor-pointer">
                            View
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-slate-600">Syed Arham</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 font-bold text-[#92003B]">
                          <span className="w-3 h-3 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[8px]">E</span>
                          <span>Elementor Pro</span>
                        </span>
                      </td>
                      <td className="p-3 text-slate-600">Published<br />2026/09/11</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => onEditPageWithElementor('services')}
                          className="px-2.5 py-1 rounded bg-[#92003B] hover:bg-[#a60043] text-white text-xs font-semibold cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>

                    {/* Page 4: Contact */}
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                          <span>Contact Us &amp; Booking</span>
                          <span className="text-[10px] px-2 py-0.2 rounded bg-slate-100 text-slate-600 font-normal">
                            Elementor Form
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-[#2271b1] mt-1">
                          <button
                            onClick={() => onEditPageWithElementor('contact')}
                            className="hover:underline font-bold text-[#92003B] cursor-pointer"
                          >
                            Edit with Elementor
                          </button>
                          <span className="text-slate-300">|</span>
                          <button onClick={onVisitSite} className="hover:underline cursor-pointer">
                            View
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-slate-600">Syed Arham</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 font-bold text-[#92003B]">
                          <span className="w-3 h-3 rounded-xs bg-[#92003B] text-white flex items-center justify-center text-[8px]">E</span>
                          <span>Elementor Pro</span>
                        </span>
                      </td>
                      <td className="p-3 text-slate-600">Published<br />2026/09/11</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => onEditPageWithElementor('contact')}
                          className="px-2.5 py-1 rounded bg-[#92003B] hover:bg-[#a60043] text-white text-xs font-semibold cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 3: PLUGINS
              ========================================================= */}
          {activeTab === 'plugins' && (
            <div className="bg-white rounded-lg border border-slate-300 shadow-xs overflow-hidden">
              <div className="p-4 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-800">Installed Plugins (4 Active)</span>
              </div>
              <div className="divide-y divide-slate-100 text-xs">
                {/* Plugin 1 */}
                <div className="p-4 flex items-start justify-between gap-4 bg-pink-50/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-slate-900 font-bold text-sm">Elementor Pro</strong>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </div>
                    <p className="text-slate-600">
                      The premier WordPress website builder. Includes Theme Builder, Flexbox Containers, Form Builder, and Custom CSS.
                    </p>
                    <span className="text-[11px] text-slate-400">Version 3.19.2 | By Elementor.com</span>
                  </div>
                </div>

                {/* Plugin 2 */}
                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-slate-900 font-bold text-sm">Elementor</strong>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </div>
                    <p className="text-slate-600">
                      Core drag and drop visual page builder with responsive editing tools.
                    </p>
                    <span className="text-[11px] text-slate-400">Version 3.19.2 | By Elementor.com</span>
                  </div>
                </div>

                {/* Plugin 3 */}
                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-slate-900 font-bold text-sm">Rank Math SEO</strong>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </div>
                    <p className="text-slate-600">
                      SEO Suite for WordPress. OpenGraph metadata, LocalBusiness schema, and XML sitemaps configured.
                    </p>
                    <span className="text-[11px] text-slate-400">Version 1.0.214 | By Rank Math</span>
                  </div>
                </div>

                {/* Plugin 4 */}
                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-slate-900 font-bold text-sm">WPForms Pro</strong>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </div>
                    <p className="text-slate-600">
                      Drag &amp; drop WordPress contact form builder with spam protection and webhook integration.
                    </p>
                    <span className="text-[11px] text-slate-400">Version 1.8.7 | By WPForms</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 4: ELEMENTOR PRO THEME BUILDER
              ========================================================= */}
          {activeTab === 'elementor' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#92003B] text-white flex items-center justify-center font-bold text-lg">
                    E
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Elementor Pro Theme Builder Templates
                    </h3>
                    <p className="text-xs text-slate-500">
                      Global dynamic parts managing site-wide header, footer, popups, and 404 error page.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-[#92003B]">Global Header</span>
                    <h4 className="font-bold text-slate-900 text-sm">Sticky Glassmorphic Header</h4>
                    <p className="text-[11px] text-slate-500">Display: Entire Site</p>
                    <button
                      onClick={() => downloadJson(ELEMENTOR_HEADER_TEMPLATE_JSON, 'elementor-header-template.json')}
                      className="w-full py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold cursor-pointer text-slate-700"
                    >
                      Export .json
                    </button>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-[#92003B]">Global Footer</span>
                    <h4 className="font-bold text-slate-900 text-sm">4-Column Corporate Footer</h4>
                    <p className="text-[11px] text-slate-500">Display: Entire Site</p>
                    <button
                      onClick={() => downloadJson(ELEMENTOR_FOOTER_TEMPLATE_JSON, 'elementor-footer-template.json')}
                      className="w-full py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold cursor-pointer text-slate-700"
                    >
                      Export .json
                    </button>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-[#92003B]">Lead Popup</span>
                    <h4 className="font-bold text-slate-900 text-sm">Consultation Inquiry Modal</h4>
                    <p className="text-[11px] text-slate-500">Trigger: CTA Button Click</p>
                    <button
                      onClick={() => downloadJson(ELEMENTOR_HOME_TEMPLATE_JSON, 'elementor-popup-template.json')}
                      className="w-full py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold cursor-pointer text-slate-700"
                    >
                      Export .json
                    </button>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-[#92003B]">Page Template</span>
                    <h4 className="font-bold text-slate-900 text-sm">Homepage Full Blueprint</h4>
                    <p className="text-[11px] text-slate-500">Includes Flexbox Containers</p>
                    <button
                      onClick={() => downloadJson(ELEMENTOR_HOME_TEMPLATE_JSON, 'nexacore-home-elementor.json')}
                      className="w-full py-1.5 rounded bg-[#92003B] hover:bg-[#a60043] text-white text-xs font-semibold cursor-pointer"
                    >
                      Export .json
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 5: APPEARANCE > THEMES
              ========================================================= */}
          {activeTab === 'themes' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-300 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base">Active WordPress Theme</h3>
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                    Active
                  </span>
                </div>

                <div className="max-w-md p-4 rounded-xl border-2 border-[#2271b1] bg-slate-50 space-y-3">
                  <div className="h-36 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                    <span>Hello Elementor (Child Theme)</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Hello Elementor Child</h4>
                    <p className="text-xs text-slate-500">By Syed Arham | NexaCore Solutions</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      A lightweight, blank canvas theme custom tailored for Elementor Pro with bespoke <code className="font-mono text-blue-600">functions.php</code> and <code className="font-mono text-blue-600">style.css</code>.
                    </p>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={() => downloadFile(`/*
 Theme Name: Hello Elementor Child
 Theme URI: https://nexacore-solutions.example.com
 Description: Custom child theme for NexaCore Solutions corporate business website
 Author: Syed Arham
 Template: hello-elementor
 Version: 1.0.0
*/
@import url("../hello-elementor/style.css");
`, 'style.css', 'text/css')}
                      className="flex-1 py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-300 text-xs font-semibold cursor-pointer text-slate-700"
                    >
                      Download style.css
                    </button>

                    <button
                      onClick={() => downloadFile(`<?php
/**
 * NexaCore Solutions - Child Theme Functions
 * Author: Syed Arham
 */
function nexacore_enqueue_custom_scripts() {
    wp_enqueue_style('nexacore-custom-style', get_stylesheet_directory_uri() . '/css/custom.css', array(), '1.0.0');
    wp_enqueue_script('nexacore-custom-js', get_stylesheet_directory_uri() . '/js/custom.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'nexacore_enqueue_custom_scripts');
`, 'functions.php', 'application/x-httpd-php')}
                      className="flex-1 py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-300 text-xs font-semibold cursor-pointer text-slate-700"
                    >
                      Download functions.php
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
