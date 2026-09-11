/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from './types';
import { useRouter } from './lib/router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import MobileBottomNav from './components/MobileBottomNav';
import ConsultationModal from './components/ConsultationModal';
import WordPressAdminBar from './components/WordPressAdminBar';
import WordPressDashboard from './components/WordPressDashboard';
import ElementorEditorPanel from './components/ElementorEditorPanel';
import VercelDeployModal from './components/VercelDeployModal';
import UpworkPortfolioModal from './components/UpworkPortfolioModal';
import { Award } from 'lucide-react';

export default function App() {
  const { currentPage, currentView, isElementorMode, navigate } = useRouter();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [vercelModalOpen, setVercelModalOpen] = useState(false);
  const [upworkModalOpen, setUpworkModalOpen] = useState(false);
  const [adminBarVisible, setAdminBarVisible] = useState(true);
  const [selectedElement, setSelectedElement] = useState<string>('none');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const handleToggleElementor = () => {
    if (isElementorMode) {
      navigate(currentPage, { view: 'website', elementor: false });
    } else {
      navigate('elementor');
    }
  };

  const handleEditPageWithElementor = (page: PageId) => {
    navigate(page, { view: 'website', elementor: true });
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
              onNavigate={(p) => navigate(p)}
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
              onNavigate={(p) => navigate(p)}
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
              onNavigate={(p) => navigate(p)}
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
            onNavigate={(p) => navigate(p)}
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
          onVisitSite={() => navigate('home')}
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

  // Pure Authentic WordPress Website Mode with URL Routing & Mobile App Feel
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Authentic WordPress Admin Bar (Top 32px) */}
      <WordPressAdminBar
        adminBarVisible={adminBarVisible}
        onToggleAdminBar={() => setAdminBarVisible(!adminBarVisible)}
        isElementorMode={isElementorMode}
        onEditWithElementor={handleToggleElementor}
        onOpenDashboard={() => navigate('wp-admin')}
        onOpenUpworkKit={() => setUpworkModalOpen(true)}
        onOpenVercelGuide={() => setVercelModalOpen(true)}
        currentView={currentView}
      />

      {/* Main Container */}
      <main className="flex-1 w-full flex overflow-x-hidden">
        {isElementorMode && (
          <ElementorEditorPanel
            onClose={() => navigate(currentPage, { view: 'website', elementor: false })}
            selectedElement={selectedElement}
            onSelectElement={(el) => setSelectedElement(el)}
            onDeviceChange={(d) => setDeviceMode(d)}
            currentDevice={deviceMode}
          />
        )}

        <div className="flex-1 flex flex-col bg-white overflow-y-auto">
          {/* Elementor Active Notification Ribbon */}
          {isElementorMode && (
            <div className="w-full bg-[#92003B] text-white px-3 sm:px-4 py-2 shadow-sm flex items-center justify-between text-xs z-30">
              <div className="flex items-center gap-2">
                <span className="font-mono bg-black/20 px-2 py-0.5 rounded font-bold">
                  Elementor Flexbox Container Active
                </span>
                <span className="hidden sm:inline">
                  Click any section on the canvas to inspect &amp; edit container settings!
                </span>
              </div>
              <button
                onClick={() => navigate(currentPage, { view: 'website', elementor: false })}
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

            {/* Header */}
            <Header
              currentPage={currentPage}
              onNavigate={(page) => navigate(page)}
              onOpenConsultation={() => setConsultationOpen(true)}
              onOpenDashboard={() => navigate('wp-admin')}
            />

            {/* Page Content with safe padding on mobile for the bottom nav bar */}
            <div className="flex-1 w-full pb-16 md:pb-0">{renderCurrentPage()}</div>

            {/* Footer */}
            <Footer
              onNavigate={(page) => navigate(page)}
              onOpenDashboard={() => navigate('wp-admin')}
            />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation Bar (Bespoke native mobile feel) */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={(p) => navigate(p)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Desktop Floating WordPress Quick Controls for Upwork Demonstration */}
      <div className="hidden md:flex fixed bottom-4 right-4 z-40 items-center gap-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-full border border-slate-700 shadow-xl text-xs">
        <button
          onClick={() => navigate('wp-admin')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1d2327] hover:bg-slate-800 text-white font-medium transition-colors cursor-pointer"
          title="Open WordPress Backend (/wp-admin)"
        >
          <span className="w-4 h-4 rounded-full bg-white text-[#1d2327] flex items-center justify-center font-serif font-black text-[10px]">
            W
          </span>
          <span>WP-Admin</span>
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
          <span>Upwork Kit</span>
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
