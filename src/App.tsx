/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import ConsultationModal from './components/ConsultationModal';
import WordPressAdminBar from './components/WordPressAdminBar';
import WordPressDashboard from './components/WordPressDashboard';
import ElementorEditorPanel from './components/ElementorEditorPanel';
import VercelDeployModal from './components/VercelDeployModal';
import UpworkPortfolioModal from './components/UpworkPortfolioModal';
import {
  Sparkles,
  LayoutDashboard,
  Award
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentView, setCurrentView] = useState<'website' | 'dashboard'>('website');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [vercelModalOpen, setVercelModalOpen] = useState(false);
  const [upworkModalOpen, setUpworkModalOpen] = useState(false);
  const [adminBarVisible, setAdminBarVisible] = useState(true);
  const [isElementorMode, setIsElementorMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string>('none');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const handleToggleElementor = () => {
    setIsElementorMode(!isElementorMode);
    setCurrentView('website');
  };

  const handleEditPageWithElementor = (page: PageId) => {
    setCurrentPage(page);
    setCurrentView('website');
    setIsElementorMode(true);
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

  // If in WordPress Admin Dashboard mode (/wp-admin)
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#f0f0f1] font-sans antialiased text-[#2c3338]">
        <WordPressDashboard
          onVisitSite={() => setCurrentView('website')}
          onEditPageWithElementor={handleEditPageWithElementor}
          onOpenUpworkKit={() => setUpworkModalOpen(true)}
          onOpenVercelGuide={() => setVercelModalOpen(true)}
        />

        {/* Upwork Case Study Modal */}
        <UpworkPortfolioModal
          isOpen={upworkModalOpen}
          onClose={() => setUpworkModalOpen(false)}
        />

        {/* Vercel Guide Modal */}
        <VercelDeployModal
          isOpen={vercelModalOpen}
          onClose={() => setVercelModalOpen(false)}
        />
      </div>
    );
  }

  // Pure Authentic WordPress Website Mode
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          AUTHENTIC WORDPRESS ADMIN BAR (TOP 32px)
          Provides real WordPress admin controls, Elementor launcher & Vercel deployment
          ========================================================================= */}
      <WordPressAdminBar
        adminBarVisible={adminBarVisible}
        onToggleAdminBar={() => setAdminBarVisible(!adminBarVisible)}
        isElementorMode={isElementorMode}
        onEditWithElementor={handleToggleElementor}
        onOpenDashboard={() => setCurrentView('dashboard')}
        onOpenUpworkKit={() => setUpworkModalOpen(true)}
        onOpenVercelGuide={() => setVercelModalOpen(true)}
        currentView={currentView}
      />

      {/* =========================================================================
          MAIN APPLICATION VIEW
          When Elementor Mode is active, split into:
          [Left: Elementor Editor Panel] + [Right: Live Editable Canvas with Elementor Handles]
          When Normal Mode is active: 100% PURE, CLEAN FULL-SCREEN WEBSITE
          ========================================================================= */}
      <main className="flex-1 w-full flex overflow-x-hidden">
        {isElementorMode && (
          <ElementorEditorPanel
            onClose={() => setIsElementorMode(false)}
            selectedElement={selectedElement}
            onSelectElement={(el) => setSelectedElement(el)}
            onDeviceChange={(d) => setDeviceMode(d)}
            currentDevice={deviceMode}
          />
        )}

        <div className="flex-1 flex flex-col bg-white overflow-y-auto">
          {/* Elementor Active Notification Ribbon */}
          {isElementorMode && (
            <div className="w-full bg-[#92003B] text-white px-4 py-2 shadow-sm flex items-center justify-between text-xs z-30">
              <div className="flex items-center gap-2">
                <span className="font-mono bg-black/20 px-2 py-0.5 rounded font-bold">
                  Elementor Flexbox Container Active
                </span>
                <span className="hidden sm:inline">
                  Click any section on the canvas to inspect &amp; edit container settings!
                </span>
              </div>
              <button
                onClick={() => setIsElementorMode(false)}
                className="underline text-white font-bold cursor-pointer hover:text-pink-200"
              >
                Exit to Live Website
              </button>
            </div>
          )}

          {/* Website Viewport Frame */}
          <div
            className={`w-full flex-1 flex flex-col transition-all duration-200 ${
              isElementorMode && deviceMode === 'mobile'
                ? 'max-w-[390px] mx-auto shadow-2xl border-x border-slate-300 min-h-screen'
                : isElementorMode && deviceMode === 'tablet'
                ? 'max-w-[768px] mx-auto shadow-2xl border-x border-slate-300 min-h-screen'
                : 'w-full'
            }`}
          >
            {/* Elementor Container Handle (Visual Indicator when editing) */}
            {isElementorMode && (
              <div className="sticky top-0 z-30 bg-[#2563EB] text-white text-[11px] font-bold px-3 py-1 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-800 px-1.5 py-0.5 rounded">Container: #nc_main_wrapper</span>
                  <span className="font-mono hidden sm:inline">Flex Direction: Row | Width: 1240px</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <span className="cursor-pointer hover:text-blue-200 px-1 font-bold">+ Add Section</span>
                  <span className="cursor-pointer hover:text-blue-200 px-1 font-bold">::: Drag</span>
                </div>
              </div>
            )}

            {/* WordPress Header */}
            <Header
              currentPage={currentPage}
              onNavigate={(page) => setCurrentPage(page)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />

            {/* Page Content */}
            <div className="flex-1 w-full">{renderCurrentPage()}</div>

            {/* WordPress Footer */}
            <Footer onNavigate={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </main>

      {/* Floating WordPress Quick Controls for Upwork Demonstration */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-full border border-slate-700 shadow-xl text-xs">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1d2327] hover:bg-slate-800 text-white font-medium transition-colors cursor-pointer"
          title="Open WordPress Backend (/wp-admin)"
        >
          <span className="w-4 h-4 rounded-full bg-white text-[#1d2327] flex items-center justify-center font-serif font-black text-[10px]">
            W
          </span>
          <span className="hidden sm:inline">WP-Admin</span>
        </button>

        <button
          onClick={handleToggleElementor}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white font-medium transition-colors cursor-pointer ${
            isElementorMode
              ? 'bg-[#92003B] hover:bg-[#a60043]'
              : 'bg-[#92003B] hover:bg-[#a60043]'
          }`}
          title="Toggle Elementor Visual Builder"
        >
          <span className="w-3.5 h-3.5 rounded-xs bg-white text-[#92003B] flex items-center justify-center text-[9px] font-black">
            E
          </span>
          <span>{isElementorMode ? 'Exit Elementor' : 'Edit with Elementor'}</span>
        </button>

        <button
          onClick={() => setUpworkModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors cursor-pointer"
          title="Open Upwork Portfolio Case Study Material"
        >
          <Award className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Upwork Kit</span>
        </button>
      </div>

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Upwork Portfolio Case Study Kit Modal */}
      <UpworkPortfolioModal
        isOpen={upworkModalOpen}
        onClose={() => setUpworkModalOpen(false)}
      />

      {/* Vercel Deployment & Export Guide Modal */}
      <VercelDeployModal
        isOpen={vercelModalOpen}
        onClose={() => setVercelModalOpen(false)}
      />
    </div>
  );
}
