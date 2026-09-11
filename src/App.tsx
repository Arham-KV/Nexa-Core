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
import WordPressAdminBar from './components/WordPressAdminBar';
import ElementorEditorPanel from './components/ElementorEditorPanel';
import VercelDeployModal from './components/VercelDeployModal';
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
  Download,
  Sparkles,
  MousePointer,
  Sliders
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('website');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [vercelModalOpen, setVercelModalOpen] = useState(false);
  const [adminBarVisible, setAdminBarVisible] = useState(true);
  const [isElementorMode, setIsElementorMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string>('none');

  const handleToggleElementor = () => {
    setIsElementorMode(!isElementorMode);
    if (!isElementorMode) {
      setViewMode('website');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div 
            onClick={() => isElementorMode && setSelectedElement('hero')}
            className={isElementorMode ? 'cursor-pointer' : ''}
          >
            <HomePage
              onNavigate={(p) => setCurrentPage(p)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        );
      case 'about':
        return (
          <div 
            onClick={() => isElementorMode && setSelectedElement('hero')}
            className={isElementorMode ? 'cursor-pointer' : ''}
          >
            <AboutPage
              onNavigate={(p) => setCurrentPage(p)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        );
      case 'services':
        return (
          <div 
            onClick={() => isElementorMode && setSelectedElement('services')}
            className={isElementorMode ? 'cursor-pointer' : ''}
          >
            <ServicesPage
              onNavigate={(p) => setCurrentPage(p)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        );
      case 'contact':
        return (
          <div 
            onClick={() => isElementorMode && setSelectedElement('contact')}
            className={isElementorMode ? 'cursor-pointer' : ''}
          >
            <ContactPage />
          </div>
        );
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
    <div className="min-h-screen flex flex-col bg-slate-900 font-sans text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          AUTHENTIC WORDPRESS ADMIN BAR (TOP 32px)
          Provides real WordPress admin controls, Elementor launcher & Vercel deployment
          ========================================================================= */}
      <WordPressAdminBar
        adminBarVisible={adminBarVisible}
        onToggleAdminBar={() => setAdminBarVisible(!adminBarVisible)}
        isElementorMode={isElementorMode}
        onEditWithElementor={handleToggleElementor}
        onOpenVercelGuide={() => setVercelModalOpen(true)}
      />

      {/* =========================================================================
          PRIMARY SHOWCASE & RESPONSIVE TOOLBAR
          ========================================================================= */}
      <nav
        id="nc-portfolio-control-bar"
        className="bg-slate-950 text-slate-200 border-b border-slate-800 sticky top-8 z-40 px-4 py-2 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Project Identity */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-bold text-white tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>NexaCore Solutions</span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/80">
                WordPress + Elementor Pro
              </span>
            </div>
          </div>

          {/* Center Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              id="tab-view-website"
              onClick={() => {
                setViewMode('website');
                setIsElementorMode(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                viewMode === 'website' && !isElementorMode
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Website</span>
            </button>

            {/* Elementor Visual Editor Mode Tab */}
            <button
              id="tab-view-elementor-builder"
              onClick={() => {
                setViewMode('website');
                setIsElementorMode(true);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                isElementorMode
                  ? 'bg-[#92003B] text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-3.5 h-3.5 rounded-xs bg-white text-[#92003B] flex items-center justify-center text-[9px] font-black">
                E
              </span>
              <span>Elementor Visual Builder</span>
            </button>

            <button
              id="tab-view-blueprint"
              onClick={() => {
                setViewMode('blueprint');
                setIsElementorMode(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                viewMode === 'blueprint'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Elementor</span>
              <span>Blueprint</span>
            </button>

            <button
              id="tab-view-code"
              onClick={() => {
                setViewMode('code');
                setIsElementorMode(false);
              }}
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

          {/* Right Actions: Responsive Toggles & Vercel Deploy */}
          <div className="flex items-center gap-2 sm:gap-3">
            {viewMode === 'website' && (
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
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

            {/* Vercel Deploy Button */}
            <button
              onClick={() => setVercelModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-950 font-bold px-3 py-1.5 rounded-lg shadow-sm transition-all cursor-pointer text-xs"
            >
              <svg viewBox="0 0 76 65" className="w-3 h-3 fill-current text-black">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span>Push to Vercel</span>
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          MAIN APPLICATION VIEW
          When Elementor Mode is active, split into:
          [Left: Elementor Editor Panel] + [Right: Live Editable Canvas with Elementor Handles]
          ========================================================================= */}
      <main className="flex-1 w-full flex overflow-x-hidden">
        {isElementorMode && viewMode === 'website' && (
          <ElementorEditorPanel
            onClose={() => setIsElementorMode(false)}
            selectedElement={selectedElement}
            onSelectElement={(el) => setSelectedElement(el)}
            onDeviceChange={(d) => setDeviceMode(d)}
            currentDevice={deviceMode}
          />
        )}

        <div className="flex-1 flex flex-col bg-slate-200/70 overflow-y-auto">
          {viewMode === 'blueprint' ? (
            <ElementorBlueprintView />
          ) : viewMode === 'code' ? (
            <CodeExportView />
          ) : (
            /* Live Website Canvas */
            <div className="w-full flex-1 flex flex-col items-center py-0 sm:py-3 px-0 sm:px-3">
              {/* Elementor Active Notification Ribbon */}
              {isElementorMode && (
                <div className="w-full max-w-5xl mb-2 bg-[#92003B] text-white px-4 py-1.5 rounded-lg shadow-sm flex items-center justify-between text-xs animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="font-mono bg-black/20 px-2 py-0.5 rounded font-bold">
                      Elementor Flexbox Container Active
                    </span>
                    <span className="hidden sm:inline">
                      Click any section on the canvas to inspect & configure container layout!
                    </span>
                  </div>
                  <button
                    onClick={() => setIsElementorMode(false)}
                    className="underline text-white font-semibold cursor-pointer hover:text-pink-200"
                  >
                    Close Builder
                  </button>
                </div>
              )}

              {/* Viewport Frame */}
              <div
                className={`w-full transition-all duration-300 bg-white flex flex-col relative ${
                  deviceMode === 'mobile'
                    ? 'max-w-[390px] shadow-2xl rounded-3xl border-8 border-slate-900 overflow-hidden my-4 min-h-[750px]'
                    : deviceMode === 'tablet'
                    ? 'max-w-[768px] shadow-2xl rounded-2xl border-4 border-slate-800 overflow-hidden my-4 min-h-[900px]'
                    : 'max-w-none shadow-none min-h-screen'
                } ${isElementorMode ? 'ring-2 ring-[#92003B]/60' : ''}`}
              >
                {/* Elementor Container Handle (Visual Indicator) */}
                {isElementorMode && (
                  <div className="sticky top-0 z-30 bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-800 px-1.5 py-0.5 rounded">Container: #nc_main_wrapper</span>
                      <span className="font-mono">Direction: Column | Width: 100%</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <span className="cursor-pointer hover:text-blue-200 px-1 font-bold">+</span>
                      <span className="cursor-pointer hover:text-blue-200 px-1 font-bold">:::</span>
                      <span className="cursor-pointer hover:text-blue-200 px-1 font-bold">×</span>
                    </div>
                  </div>
                )}

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
        </div>
      </main>

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Vercel Deployment & Export Guide Modal */}
      <VercelDeployModal
        isOpen={vercelModalOpen}
        onClose={() => setVercelModalOpen(false)}
      />
    </div>
  );
}
