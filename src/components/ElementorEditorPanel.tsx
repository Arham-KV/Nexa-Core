import { useState } from 'react';
import { 
  Search, 
  Menu, 
  Grid, 
  Settings, 
  Compass, 
  History, 
  Eye, 
  Save, 
  Check, 
  Layers, 
  Type, 
  Image as ImageIcon, 
  Square, 
  Columns, 
  FileText, 
  Sliders, 
  Sparkles, 
  Box, 
  Maximize2,
  MousePointerClick,
  Palette,
  Layout,
  Code
} from 'lucide-react';

interface ElementorEditorPanelProps {
  onClose: () => void;
  selectedElement: string;
  onSelectElement: (el: string) => void;
  onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void;
  currentDevice: 'desktop' | 'tablet' | 'mobile';
  fontTheme?: 'outfit' | 'urbanist' | 'syne';
  onChangeFontTheme?: (theme: 'outfit' | 'urbanist' | 'syne') => void;
}

export default function ElementorEditorPanel({
  onClose,
  selectedElement,
  onSelectElement,
  onDeviceChange,
  currentDevice,
  fontTheme = 'outfit',
  onChangeFontTheme
}: ElementorEditorPanelProps) {
  const [activeTab, setActiveTab] = useState<'elements' | 'style' | 'advanced'>('elements');
  const [searchQuery, setSearchQuery] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');
  const [customHeading, setCustomHeading] = useState('Intelligent Technology Solutions Built to Accelerate Business Growth');
  const [primaryColor, setPrimaryColor] = useState('#2563EB');
  const [containerWidth, setContainerWidth] = useState('1240');

  const handleUpdate = () => {
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2200);
  };

  const WIDGETS = [
    { name: 'Container', icon: Layout, category: 'Layout', badge: 'Flexbox' },
    { name: 'Heading', icon: Type, category: 'Basic', badge: '' },
    { name: 'Text Editor', icon: FileText, category: 'Basic', badge: '' },
    { name: 'Button', icon: Square, category: 'Basic', badge: '' },
    { name: 'Image', icon: ImageIcon, category: 'Basic', badge: '' },
    { name: 'Icon Box', icon: Box, category: 'General', badge: '' },
    { name: 'Counter', icon: Sliders, category: 'General', badge: 'Animated' },
    { name: 'Form', icon: MousePointerClick, category: 'Pro', badge: 'PRO' },
    { name: 'Nav Menu', icon: Menu, category: 'Pro', badge: 'PRO' },
    { name: 'Testimonial Carousel', icon: Sparkles, category: 'Pro', badge: 'PRO' },
    { name: 'Call to Action', icon: Maximize2, category: 'Pro', badge: 'PRO' },
    { name: 'Google Maps', icon: Compass, category: 'Basic', badge: '' }
  ];

  const filteredWidgets = searchQuery.trim() === ''
    ? WIDGETS
    : WIDGETS.filter((w) => w.name.toLowerCase().includes(searchQuery.toLowerCase()) || w.category.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="w-80 sm:w-96 bg-[#26292c] text-[#d5dadf] flex flex-col h-[calc(100vh-32px)] border-r border-[#1a1d20] select-none text-xs shrink-0 shadow-2xl z-40 font-sans">
      {/* Top Header */}
      <div className="h-12 bg-[#1f2124] border-b border-[#34383c] flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onSelectElement('none')}
            className="w-7 h-7 flex items-center justify-center rounded-xs hover:bg-[#34383c] text-white transition-colors cursor-pointer"
            title="Elementor Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-xs bg-[#92003B] text-white flex items-center justify-center font-bold text-[11px]">
              E
            </span>
            <span className="font-bold text-white text-xs tracking-wide">ELEMENTOR PRO</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onSelectElement('none')}
            className="w-7 h-7 flex items-center justify-center rounded-xs hover:bg-[#34383c] text-white transition-colors cursor-pointer"
            title="Widgets Gallery"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-xs bg-slate-700 hover:bg-slate-600 text-slate-200 text-[10px] font-bold uppercase transition-colors cursor-pointer"
          >
            Preview
          </button>
        </div>
      </div>

      {/* When an element is selected -> Element Settings Inspector */}
      {selectedElement !== 'none' ? (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Section Breadcrumb & Title */}
          <div className="bg-[#1a1c1e] px-4 py-2.5 border-b border-[#34383c] flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#92003B] font-bold">Editing</span>
              <h4 className="text-white font-bold text-sm">
                {selectedElement === 'hero' ? 'Hero Flexbox Container' : 
                 selectedElement === 'services' ? 'Services Grid Container' :
                 selectedElement === 'contact' ? 'Contact Form Container' : 'Selected Element'}
              </h4>
            </div>
            <button
              onClick={() => onSelectElement('none')}
              className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
            >
              Back to Widgets
            </button>
          </div>

          {/* 3 Tabs: Content | Style | Advanced */}
          <div className="grid grid-cols-3 bg-[#1f2124] border-b border-[#34383c] text-center font-semibold text-[11px]">
            <button
              onClick={() => setActiveTab('elements')}
              className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'elements'
                  ? 'border-[#92003B] text-white bg-[#26292c]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Layout
            </button>
            <button
              onClick={() => setActiveTab('style')}
              className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'style'
                  ? 'border-[#92003B] text-white bg-[#26292c]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Style
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`py-2.5 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'advanced'
                  ? 'border-[#92003B] text-white bg-[#26292c]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Advanced
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
            {activeTab === 'elements' && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Container Type</label>
                  <div className="p-2 rounded bg-[#1a1c1e] text-slate-300 border border-[#34383c] font-mono text-[11px]">
                    Flexbox Container (Elementor 3.16+)
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <label className="font-semibold text-slate-300">Content Width (px)</label>
                    <span className="font-mono text-emerald-400">{containerWidth}px</span>
                  </div>
                  <input
                    type="range"
                    min="960"
                    max="1600"
                    value={containerWidth}
                    onChange={(e) => setContainerWidth(e.target.value)}
                    className="w-full accent-[#92003B] cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Flex Direction</label>
                  <div className="grid grid-cols-2 gap-1.5 bg-[#1a1c1e] p-1 rounded border border-[#34383c]">
                    <button className="py-1 px-2 rounded bg-[#92003B] text-white font-semibold text-center">
                      Row (Horizontal)
                    </button>
                    <button className="py-1 px-2 rounded hover:bg-[#34383c] text-slate-400 text-center">
                      Column (Vertical)
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Justify Content</label>
                  <div className="grid grid-cols-3 gap-1 bg-[#1a1c1e] p-1 rounded border border-[#34383c] text-[10px]">
                    <span className="p-1 rounded bg-[#34383c] text-center text-white">Space Between</span>
                    <span className="p-1 text-center text-slate-400">Center</span>
                    <span className="p-1 text-center text-slate-400">Flex Start</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">HTML Tag</label>
                  <select className="w-full p-2 rounded bg-[#1a1c1e] border border-[#34383c] text-white focus:outline-none">
                    <option>section</option>
                    <option>article</option>
                    <option>div</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'style' && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Background Type</label>
                  <div className="p-2.5 rounded bg-[#1a1c1e] border border-[#34383c] flex items-center justify-between">
                    <span>Classic Solid Color</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-6 h-6 rounded border-0 cursor-pointer"
                      />
                      <span className="font-mono text-slate-300 uppercase">{primaryColor}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Global Typography Preset (Elementor Pro)</label>
                  <div className="p-2.5 rounded bg-[#1a1c1e] border border-[#34383c] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">
                        {fontTheme === 'outfit' ? 'Outfit + Manrope' : fontTheme === 'urbanist' ? 'Urbanist + Jakarta' : 'Syne + Manrope'}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">Active Preset</span>
                    </div>
                    {onChangeFontTheme && (
                      <div className="grid grid-cols-3 gap-1 pt-1">
                        <button
                          onClick={() => onChangeFontTheme('outfit')}
                          className={`py-1 px-1.5 rounded text-[10px] font-bold text-center transition-colors cursor-pointer ${
                            fontTheme === 'outfit' ? 'bg-[#92003B] text-white' : 'bg-[#26292c] text-slate-400 hover:text-white'
                          }`}
                        >
                          Outfit
                        </button>
                        <button
                          onClick={() => onChangeFontTheme('urbanist')}
                          className={`py-1 px-1.5 rounded text-[10px] font-bold text-center transition-colors cursor-pointer ${
                            fontTheme === 'urbanist' ? 'bg-[#92003B] text-white' : 'bg-[#26292c] text-slate-400 hover:text-white'
                          }`}
                        >
                          Urbanist
                        </button>
                        <button
                          onClick={() => onChangeFontTheme('syne')}
                          className={`py-1 px-1.5 rounded text-[10px] font-bold text-center transition-colors cursor-pointer ${
                            fontTheme === 'syne' ? 'bg-[#92003B] text-white' : 'bg-[#26292c] text-slate-400 hover:text-white'
                          }`}
                        >
                          Syne
                        </button>
                      </div>
                    )}
                    <p className="text-[10px] text-slate-400 pt-0.5">Primary Weight: 800 | Display Scale: 1.25x | Anti-aliased</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Border Radius</label>
                  <div className="grid grid-cols-4 gap-1.5 text-center font-mono">
                    <div className="bg-[#1a1c1e] p-1.5 rounded border border-[#34383c]">
                      <span className="block text-[9px] text-slate-500">TOP</span>
                      <span className="text-white">16</span>
                    </div>
                    <div className="bg-[#1a1c1e] p-1.5 rounded border border-[#34383c]">
                      <span className="block text-[9px] text-slate-500">RIGHT</span>
                      <span className="text-white">16</span>
                    </div>
                    <div className="bg-[#1a1c1e] p-1.5 rounded border border-[#34383c]">
                      <span className="block text-[9px] text-slate-500">BOTTOM</span>
                      <span className="text-white">16</span>
                    </div>
                    <div className="bg-[#1a1c1e] p-1.5 rounded border border-[#34383c]">
                      <span className="block text-[9px] text-slate-500">LEFT</span>
                      <span className="text-white">16</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">CSS Classes</label>
                  <input
                    type="text"
                    defaultValue="nc-card-hover nc-section-pad"
                    className="w-full p-2 rounded bg-[#1a1c1e] border border-[#34383c] font-mono text-emerald-400 focus:outline-none"
                  />
                  <p className="text-[10px] text-slate-400">Targeted by css/custom.css</p>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Motion Effects / Entrance</label>
                  <div className="p-2 rounded bg-[#1a1c1e] border border-[#34383c] text-white">
                    Fade In Up (Duration: 600ms)
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300 block">Z-Index</label>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-20 p-2 rounded bg-[#1a1c1e] border border-[#34383c] text-white font-mono"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Default Widgets Library View */
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Search bar */}
          <div className="p-3 bg-[#222528] border-b border-[#34383c]">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search Widget..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#17191b] rounded-md py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 border border-[#34383c] focus:outline-none focus:border-[#92003B]"
              />
            </div>
          </div>

          {/* Widgets Grid */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
                Elementor Widgets Available
              </span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {filteredWidgets.map((w, idx) => {
                  const Icon = w.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => onSelectElement(w.name.toLowerCase())}
                      className="p-3 rounded-lg bg-[#202326] hover:bg-[#2b2f33] border border-[#34383c] flex flex-col items-center justify-center gap-2 group transition-all cursor-pointer relative"
                    >
                      {w.badge && (
                        <span className={`absolute top-1 right-1 text-[8px] font-bold px-1 rounded ${
                          w.badge === 'PRO' ? 'bg-[#92003B] text-white' : 'bg-blue-600 text-white'
                        }`}>
                          {w.badge}
                        </span>
                      )}
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                      <span className="text-[11px] font-medium text-slate-300 group-hover:text-white text-center truncate w-full">
                        {w.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#1a1c1e] border border-[#34383c] space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Live Canvas Tip</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Click any section on the website canvas to inspect its Elementor container attributes, flex settings, and custom CSS classes!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Elementor Toolbar */}
      <div className="h-12 bg-[#1b1c1e] border-t border-[#34383c] flex items-center justify-between px-3 shrink-0">
        <div className="flex items-center gap-2 text-slate-400">
          <button
            onClick={() => onSelectElement('hero')}
            title="Page Settings"
            className="p-1.5 hover:text-white hover:bg-[#34383c] rounded transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectElement('services')}
            title="Navigator Tree"
            className="p-1.5 hover:text-white hover:bg-[#34383c] rounded transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDeviceChange(currentDevice === 'desktop' ? 'tablet' : currentDevice === 'tablet' ? 'mobile' : 'desktop')}
            title={`Responsive Mode (Current: ${currentDevice})`}
            className="p-1.5 hover:text-white hover:bg-[#34383c] rounded transition-colors cursor-pointer"
          >
            <Sliders className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            title="Preview Changes"
            className="p-1.5 hover:text-white hover:bg-[#34383c] rounded transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Green Update Button */}
        <button
          onClick={handleUpdate}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-sm font-bold text-xs transition-all cursor-pointer ${
            saveStatus === 'saved'
              ? 'bg-emerald-600 text-white'
              : 'bg-[#58BF3B] hover:bg-[#4ea834] text-white shadow-xs'
          }`}
        >
          {saveStatus === 'saved' ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>SAVED!</span>
            </>
          ) : (
            <>
              <span>UPDATE</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
