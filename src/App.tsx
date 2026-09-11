/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId, ViewMode, DeviceMode } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ConsultationModal from './components/ConsultationModal';
import ElementorBlueprintView from './components/ElementorBlueprintView';
import CodeExportView from './components/CodeExportView';
import {
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  Layers,
  FileCode2,
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  Download
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('website');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [consultationOpen, setConsultationOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={(p) => setCurrentPage(p)}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={(p) => setCurrentPage(p)}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={(p) => setCurrentPage(p)}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onNavigate={(p) => setCurrentPage(p)}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          TOP PORTFOLIO & SHOWCASE CONTROL BAR
          Allows switching between Live Website, Elementor Blueprint, Code & GitHub Repo
          ========================================================================= */}
      <nav
        id="nc-portfolio-control-bar"
        className="bg-slate-950 text-slate-200 border-b border-slate-800 sticky top-0 z-50 px-4 py-2.5 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Project Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-bold text-white tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>NexaCore Solutions</span>
              <span className="hidden sm:inline text-slate-400 font-normal">|</span>
              <span className="hidden sm:inline font-mono text-[11px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/80">
                WordPress + Elementor Project
              </span>
            </div>
          </div>

          {/* Center Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              id="tab-view-website"
              onClick={() => setViewMode('website')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                viewMode === 'website'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Website Preview</span>
            </button>

            <button
              id="tab-view-blueprint"
              onClick={() => setViewMode('blueprint')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                viewMode === 'blueprint'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Elementor Blueprint</span>
            </button>

            <button
              id="tab-view-code"
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                viewMode === 'code'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Custom CSS & JS</span>
            </button>
          </div>

          {/* Right Responsive Simulator Toggle (Active when in Website View) */}
          <div className="flex items-center gap-3">
            {viewMode === 'website' && (
              <div className="hidden md:flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  title="Desktop View (100%)"
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    deviceMode === 'desktop'
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('tablet')}
                  title="Tablet View (768px)"
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    deviceMode === 'tablet'
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  title="Mobile View (375px)"
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    deviceMode === 'mobile'
                      ? 'bg-slate-800 text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <button
              onClick={() => setConsultationOpen(true)}
              className="hidden lg:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>Test CTA Popup</span>
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          MAIN BODY DISPLAY
          Renders either the Website Simulator, Elementor Blueprint, or Code Export
          ========================================================================= */}
      <main className="flex-1 w-full flex flex-col">
        {viewMode === 'blueprint' ? (
          <ElementorBlueprintView />
        ) : viewMode === 'code' ? (
          <CodeExportView />
        ) : (
          /* Live Website Mode with Responsive Frame Wrapper */
          <div className="w-full flex-1 flex justify-center bg-slate-200/60 py-0 sm:py-4">
            <div
              className={`w-full transition-all duration-300 bg-white flex flex-col min-h-screen ${
                deviceMode === 'mobile'
                  ? 'max-w-[390px] shadow-2xl rounded-3xl border-8 border-slate-800 overflow-hidden my-4'
                  : deviceMode === 'tablet'
                  ? 'max-w-[768px] shadow-2xl rounded-2xl border-4 border-slate-700 overflow-hidden my-4'
                  : 'max-w-none shadow-none'
              }`}
            >
              {/* Header */}
              <Header
                currentPage={currentPage}
                onNavigate={(page) => setCurrentPage(page)}
                onOpenConsultation={() => setConsultationOpen(true)}
              />

              {/* Page Content */}
              <div className="flex-1 w-full">{renderCurrentPage()}</div>

              {/* Footer */}
              <Footer onNavigate={(page) => setCurrentPage(page)} />
            </div>
          </div>
        )}
      </main>

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
