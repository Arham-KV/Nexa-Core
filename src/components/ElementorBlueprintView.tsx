import { useState } from 'react';
import { ELEMENTOR_SPECS } from '../data/websiteData';
import { Layers, Box, Check, Copy, Sparkles, Smartphone, Monitor, Tablet, Code2 } from 'lucide-react';

export default function ElementorBlueprintView() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const filters = ['All', 'Global', 'Home', 'About', 'Contact'];

  const filteredSpecs = selectedFilter === 'All'
    ? ELEMENTOR_SPECS
    : ELEMENTOR_SPECS.filter((s) => s.page === selectedFilter);

  const handleCopy = (specText: string, idx: number) => {
    navigator.clipboard.writeText(specText);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Bar */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Elementor Pro 3.16+ Flexbox Blueprint
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                Section-by-Section Elementor Implementation Architecture
              </h1>
              <p className="text-sm text-slate-600 max-w-2xl mt-1">
                Zero legacy section nesting. Each container below specifies exact Flexbox directions, padding, responsive break points, widget setups, and typography settings to recreate this site in WordPress.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedFilter === f
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Global Design Tokens Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
              <Box className="w-4 h-4 text-blue-600" />
              <span>Color System Tokens</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                <span className="font-semibold text-slate-800">Primary:</span>
                <span className="font-mono text-blue-600 font-bold">#0F172A (Deep Slate)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                <span className="font-semibold text-slate-800">Secondary:</span>
                <span className="font-mono text-blue-600 font-bold">#2563EB (Royal Blue)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                <span className="font-semibold text-slate-800">Accent:</span>
                <span className="font-mono text-blue-600 font-bold">#38BDF8 (Sky Cyan)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50">
                <span className="font-semibold text-slate-800">Background:</span>
                <span className="font-mono text-blue-600 font-bold">#F8FAFC (Soft Light)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Typography Pairing</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-slate-50">
                <p className="font-bold text-slate-900">Headings: Plus Jakarta Sans</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Weights: 700 / 800, Letter spacing: -0.02em</p>
              </div>
              <div className="p-2 rounded bg-slate-50">
                <p className="font-bold text-slate-900">Body Content: Inter</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Weights: 400 / 500 / 600, Line height: 1.65</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Theme Builder Templates</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li><strong>Header Template:</strong> Sticky Top with glassmorphism blur</li>
              <li><strong>Footer Template:</strong> 4-column responsive grid</li>
              <li><strong>Popup Builder:</strong> Consultation inquiry popup</li>
              <li><strong>Forms:</strong> Native Elementor Pro AJAX with Webhooks</li>
            </ul>
          </div>
        </div>

        {/* Section Cards */}
        <div className="space-y-6">
          {filteredSpecs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 transition-all hover:shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {spec.page} Page
                      </span>
                      <span className="text-xs text-blue-600 font-semibold">• Elementor Container</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{spec.sectionName}</h3>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      `Section: ${spec.sectionName}\nPage: ${spec.page}\nStructure: ${spec.containerStructure}\nWidgets: ${spec.widgets.join(
                        ', '
                      )}\nSpacing: Desktop ${spec.spacing.paddingDesktop}, Mobile ${
                        spec.spacing.paddingMobile
                      }\nTypography: ${spec.typography}\nColors: ${spec.colors}\nResponsive: ${
                        spec.responsiveNotes
                      }`,
                      idx
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied Spec</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>
              </div>

              {/* Grid of Attributes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
                {/* 1. Container Structure */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    Container Architecture
                  </span>
                  <p className="text-slate-600 leading-relaxed font-mono text-[11px]">
                    {spec.containerStructure}
                  </p>
                </div>

                {/* 2. Widgets Required */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-blue-600" />
                    Widgets Required
                  </span>
                  <ul className="space-y-1 text-slate-600">
                    {spec.widgets.map((w, wIdx) => (
                      <li key={wIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Spacing & Margins */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-blue-600" />
                    Spacing Matrix
                  </span>
                  <div className="space-y-1 text-slate-600">
                    <p><strong>Desktop Padding:</strong> {spec.spacing.paddingDesktop}</p>
                    <p><strong>Mobile Padding:</strong> {spec.spacing.paddingMobile}</p>
                    <p><strong>Flex/Grid Gap:</strong> {spec.spacing.gap}</p>
                  </div>
                </div>

                {/* 4. Typography */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-600" />
                    Typography Presets
                  </span>
                  <p className="text-slate-600 leading-relaxed">{spec.typography}</p>
                </div>

                {/* 5. Responsive Behavior */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                    Responsive Settings
                  </span>
                  <p className="text-slate-600 leading-relaxed">{spec.responsiveNotes}</p>
                </div>

                {/* 6. Colors & Motion */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Motion & Colors
                  </span>
                  <p className="text-slate-600"><strong>Colors:</strong> {spec.colors}</p>
                  <p className="text-slate-600 mt-1"><strong>Animation:</strong> {spec.animation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
