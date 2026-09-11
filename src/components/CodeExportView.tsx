import { useState } from 'react';
import { Copy, Check, Download, FileCode, FileText, FolderGit2, Sparkles } from 'lucide-react';

const FILES = [
  {
    name: 'README.md',
    path: 'README.md',
    type: 'markdown',
    badge: 'GitHub Portfolio Root',
    content: `# NexaCore Solutions — Modern Business Website (WordPress + Elementor)

[![WordPress](https://img.shields.io/badge/WordPress-6.4+-21759B?style=for-the-badge&logo=wordpress&logoColor=white)](https://wordpress.org)
[![Elementor Pro](https://img.shields.io/badge/Elementor_Pro-Flexbox_Containers-92003B?style=for-the-badge&logo=elementor&logoColor=white)](https://elementor.com)
[![Custom CSS](https://img.shields.io/badge/CSS3-Modular_%26_Clean-1572B6?style=for-the-badge&logo=css3&logoColor=white)](./css/custom.css)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6+_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](./js/custom.js)

> **Client Portfolio Showcase Project:** A premium, modern, conversion-focused business website designed and built for **NexaCore Solutions** — a fictional high-performance business technology & IT advisory firm based in Austin, Texas.

---

## 🌟 Live Demonstration & Showcase
- Live Website Demo: \`https://nexacore-solutions.example.com\`
- Elementor Container Blueprint: \`docs/website-structure.md\`
- Custom Stylesheet: \`css/custom.css\`
- Vanilla JavaScript: \`js/custom.js\`

## 📌 Project Overview
Built using WordPress 6.x and Elementor Pro with 100% Flexbox Containers. Zero legacy inner-section overhead. Complemented by targeted custom CSS and Vanilla JS for micro-interactions.`
  },
  {
    name: 'custom.css',
    path: 'css/custom.css',
    type: 'css',
    badge: 'Styles',
    content: `/**
 * NexaCore Solutions — Custom Stylesheet for WordPress & Elementor
 * Author: Syed Arham / Web Design & Development Specialist
 */
:root {
  --nc-primary: #0F172A;
  --nc-secondary: #2563EB;
  --nc-accent: #38BDF8;
  --nc-bg: #F8FAFC;
  --nc-text: #334155;
  --nc-white: #FFFFFF;
  --nc-radius: 12px;
}

/* Sticky Header Blur */
.nc-sticky-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  transition: padding 0.25s ease, box-shadow 0.25s ease;
}

.nc-card-hover {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.nc-card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
  border-color: rgba(37, 99, 235, 0.3) !important;
}`
  },
  {
    name: 'custom.js',
    path: 'js/custom.js',
    type: 'javascript',
    badge: 'Vanilla JS',
    content: `/**
 * NexaCore Solutions — Vanilla JavaScript Enhancements
 * Lightweight, accessible script for WordPress & Elementor
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initStatsCounter();
  });

  function initStickyHeader() {
    var header = document.querySelector('.nc-sticky-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 24) {
        header.classList.add('nc-scrolled');
      } else {
        header.classList.remove('nc-scrolled');
      }
    }, { passive: true });
  }

  function initStatsCounter() {
    var counters = document.querySelectorAll('.nc-stat-counter');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Trigger smooth animated counter
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    counters.forEach(function (c) { observer.observe(c); });
  }
})();`
  },
  {
    name: 'website-structure.md',
    path: 'docs/website-structure.md',
    type: 'markdown',
    badge: 'Documentation',
    content: `# NexaCore Solutions — Information Architecture & SEO Blueprint

## 1. Information Architecture
- 1. Home (/)
- 2. About (/about/)
- 3. Services (/services/)
- 4. Contact (/contact/)

## 2. Global Design System Tokens
- Primary: #0F172A
- Secondary: #2563EB
- Accent: #38BDF8
- Background: #F8FAFC
- Text: #334155
- Headings: Plus Jakarta Sans / Body: Inter`
  },
  {
    name: 'elementor-guide.md',
    path: 'elementor/README.md',
    type: 'markdown',
    badge: 'Elementor Specs',
    content: `# Elementor Implementation Guide: NexaCore Solutions

## Prerequisites
- WordPress 6.4+
- Hello Elementor Theme
- Elementor Pro (Flexbox Containers Active)

## Global Theme Style
- Set Global Colors to NexaCore palette.
- Set Global Typography to Plus Jakarta Sans (H1-H4) & Inter (Body).`
  }
];

export default function CodeExportView() {
  const [activeFile, setActiveFile] = useState(FILES[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                GitHub Repository Files
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Project Code & Showcase Deliverables
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Explore the repository structure ready to commit to GitHub for your Upwork client portfolio.
            </p>
          </div>

          <button
            onClick={() => handleDownload(activeFile.name, activeFile.content)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Current File ({activeFile.name})</span>
          </button>
        </div>

        {/* File Browser Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* File Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2">
              Repository Tree
            </h3>

            <div className="space-y-1">
              {FILES.map((file) => {
                const isSelected = activeFile.path === file.path;
                return (
                  <button
                    key={file.path}
                    onClick={() => setActiveFile(file)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {file.type === 'css' || file.type === 'javascript' ? (
                        <FileCode className="w-4 h-4 text-blue-500 shrink-0" />
                      ) : (
                        <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                      <span className="truncate">{file.path}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {file.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed px-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 inline mr-1" />
              <span>
                These files are stored inside this workspace and ready to push to your GitHub profile repository!
              </span>
            </div>
          </div>

          {/* Code Viewer (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden text-slate-200 flex flex-col">
            {/* Viewer Header */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="font-mono text-slate-400 ml-2">{activeFile.path}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <pre className="p-6 font-mono text-xs overflow-x-auto leading-relaxed text-slate-300 max-h-[600px] overflow-y-auto">
              <code>{activeFile.content}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
