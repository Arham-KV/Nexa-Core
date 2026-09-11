import { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Terminal, 
  FolderGit2, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  FileJson
} from 'lucide-react';
import { 
  ELEMENTOR_HOME_TEMPLATE_JSON, 
  ELEMENTOR_HEADER_TEMPLATE_JSON, 
  ELEMENTOR_FOOTER_TEMPLATE_JSON 
} from '../data/elementorJsonTemplates';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VercelDeployModal({ isOpen, onClose }: VercelDeployModalProps) {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const downloadJsonTemplate = (data: object, filename: string) => {
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

  const gitCommands = `git init
git add .
git commit -m "NexaCore Solutions - WordPress & Elementor Showcase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nexacore-solutions.git
git push -u origin main`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto font-sans text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full border border-blue-100 flex items-center gap-1.5">
              <svg viewBox="0 0 76 65" className="w-3 h-3 fill-current text-blue-600">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span>Vercel Deployment & Export Guide</span>
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
            How to Push & Deploy to Vercel Live (Urdu & English Guide)
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Bhai aap is project ko 2 minutes mein Vercel par live push kar sakte hain. Yeh project 100% Vercel-ready configured hai with <code className="text-blue-600 font-mono">vercel.json</code>!
          </p>
        </div>

        {/* Step 1: Git Commands */}
        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 font-mono">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Step 1: Push Code to GitHub
            </span>
            <button
              onClick={() => copyToClipboard(gitCommands, 'git')}
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer font-mono"
            >
              {copiedCmd === 'git' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied Commands!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Git Commands</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 bg-slate-950 rounded-lg text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            <code>{gitCommands}</code>
          </pre>
        </div>

        {/* Step 2: Vercel Settings */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Step 2: Deploy on Vercel Dashboard
          </h4>
          <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside leading-relaxed">
            <li>
              Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-blue-600 underline font-semibold inline-flex items-center gap-0.5">vercel.com/new <ExternalLink className="w-3 h-3 inline" /></a> and sign in with GitHub.
            </li>
            <li>
              Click <strong>Import</strong> next to your <code className="font-mono text-slate-800 font-bold">nexacore-solutions</code> repository.
            </li>
            <li>
              <strong>Framework Preset:</strong> Vercel will automatically detect <strong>Vite</strong>.
            </li>
            <li>
              <strong>Build Command:</strong> <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">npm run build</code>
            </li>
            <li>
              <strong>Output Directory:</strong> <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">dist</code>
            </li>
            <li>
              Click <strong className="text-blue-700">Deploy</strong>! In ~30 seconds, your site will be live on <code className="font-mono text-blue-600">https://your-project.vercel.app</code>!
            </li>
          </ol>
        </div>

        {/* Step 3: Elementor JSON Templates Export for Real WordPress */}
        <div className="p-4 rounded-xl bg-pink-50/60 border border-pink-100 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#92003B] uppercase tracking-wider">
            <FileJson className="w-4 h-4 text-[#92003B]" />
            <span>Download Elementor Pro Templates (.json) for Real WordPress</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Agar aap is site ko real WordPress site par bhi import karna chahein, toh yeh real Elementor template JSON files download karke WordPress dashboard mein upload kar sakte hain (<code className="font-mono text-pink-700">Elementor &gt; Templates &gt; Saved Templates &gt; Import</code>):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            <button
              onClick={() => downloadJsonTemplate(ELEMENTOR_HOME_TEMPLATE_JSON, 'nexacore-home-elementor.json')}
              className="flex items-center justify-center gap-1.5 bg-white hover:bg-pink-100 text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg border border-pink-200 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#92003B]" />
              <span>Home Template (.json)</span>
            </button>

            <button
              onClick={() => downloadJsonTemplate(ELEMENTOR_HEADER_TEMPLATE_JSON, 'nexacore-header-elementor.json')}
              className="flex items-center justify-center gap-1.5 bg-white hover:bg-pink-100 text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg border border-pink-200 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#92003B]" />
              <span>Header Template (.json)</span>
            </button>

            <button
              onClick={() => downloadJsonTemplate(ELEMENTOR_FOOTER_TEMPLATE_JSON, 'nexacore-footer-elementor.json')}
              className="flex items-center justify-center gap-1.5 bg-white hover:bg-pink-100 text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg border border-pink-200 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#92003B]" />
              <span>Footer Template (.json)</span>
            </button>
          </div>
        </div>

        {/* Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
