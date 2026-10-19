import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  KeyRound,
  RefreshCw,
  Copy,
  Check,
  Sparkles,
  Lock,
  FileSearch,
  EyeOff,
} from 'lucide-react';

/**
 * Interactive Builder Playground featuring live in-browser demos of two real
 * systems built by Maz:
 * 1) SmartGallery Search — Automatic Aadhaar/PAN Privacy Redactor & Hybrid Query Parser
 * 2) Keyforge — Information-Theory Password Entropy & CSPRNG Generator
 */
export default function InteractiveLab() {
  const [activeTool, setActiveTool] = useState('smartgallery');

  // --- Tool 1: SmartGallery Search PII Masker & Query Parser ---
  const [ocrSample, setOcrSample] = useState(
    'GOVT OF INDIA — Name: Rahul Sharma | Aadhaar No: 4921 8374 9102 | Income Tax PAN: ABCDE1234F | City: Bhopal 2024 Invoice #901'
  );
  const [searchSample, setSearchSample] = useState('aadhar card bhopal 2024');

  const maskedOcrResult = useMemo(() => {
    // Replicates DocClassifier.mask() from SmartGallerySearch
    const aadhaarRegex = /\b\d{4}\s?\d{4}\s?\d{4}\b/g;
    const panRegex = /\b[A-Z]{5}[0-9]{4}[A-Z]\b/g;

    let redactedCount = 0;
    const maskedText = ocrSample
      .replace(aadhaarRegex, () => {
        redactedCount++;
        return 'XXXX XXXX XXXX';
      })
      .replace(panRegex, (match) => {
        redactedCount++;
        return 'XXXXX0000' + match.slice(-1);
      });

    return { maskedText, redactedCount };
  }, [ocrSample]);

  const parsedQueryInfo = useMemo(() => {
    const q = searchSample.toLowerCase();
    const cities = ['bhopal', 'indore', 'delhi', 'mumbai', 'bangalore', 'pune', 'hyderabad'];
    const docTypes = [
      { key: 'aadhar', label: 'Aadhaar Document' },
      { key: 'aadhaar', label: 'Aadhaar Document' },
      { key: 'pan', label: 'PAN Card' },
      { key: 'invoice', label: 'Invoice / Bill' },
      { key: 'receipt', label: 'Receipt' },
      { key: 'screenshot', label: 'Screenshot' },
    ];

    const detectedCity = cities.find((c) => q.includes(c)) || null;
    const detectedDoc = docTypes.find((d) => q.includes(d.key))?.label || 'General Media';
    const yearMatch = q.match(/\b(20\d{2})\b/);
    const detectedYear = yearMatch ? yearMatch[1] : null;

    return {
      detectedDoc,
      detectedCity: detectedCity ? detectedCity.toUpperCase() : 'ANY (KD-Tree Ready)',
      detectedYear: detectedYear || 'ANY',
      formula: '0.45 * FTS4_Prefix + 0.35 * Int8_Cosine + 0.20 * Exact_Boost',
    };
  }, [searchSample]);

  // --- Tool 2: Keyforge Entropy & CSPRNG Studio ---
  const [passwordInput, setPasswordInput] = useState('M@z#Builder_2026!Crypto');
  const [copiedPwd, setCopiedPwd] = useState(false);

  const entropyStats = useMemo(() => {
    const pwd = passwordInput || '';
    if (!pwd.length) {
      return { bits: 0, pool: 0, label: 'Empty', crackTime: 'Instant', color: 'text-rose-400' };
    }
    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;

    const bits = Math.round(pwd.length * Math.log2(Math.max(pool, 2)));

    let label = 'Weak';
    let crackTime = '< 1 second';
    let color = 'text-rose-400';

    if (bits >= 110) {
      label = 'Cryptographic Grade';
      crackTime = 'Centuries (Offline GPU Array)';
      color = 'text-emerald-400';
    } else if (bits >= 75) {
      label = 'Strong';
      crackTime = '~4,200 Years';
      color = 'text-teal-300';
    } else if (bits >= 50) {
      label = 'Moderate';
      crackTime = '~3 Days';
      color = 'text-amber-300';
    }

    return { bits, pool, label, crackTime, color };
  }, [passwordInput]);

  const generateCsprngPassword = () => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const array = new Uint32Array(20);
    window.crypto.getRandomValues(array);
    const result = Array.from(array, (x) => charset[x % charset.length]).join('');
    setPasswordInput(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput);
    setCopiedPwd(true);
    setTimeout(() => setCopiedPwd(false), 1800);
  };

  return (
    <section id="lab" className="py-20 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// 02 • INTERACTIVE BUILDER PLAYGROUND</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Test My Algorithms Live in Your Browser
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Don't just read static project descriptions — interact with live client-side implementations from{' '}
              <span className="text-emerald-300 font-mono">SmartGallery Search</span> and{' '}
              <span className="text-emerald-300 font-mono">Keyforge</span>.
            </p>
          </div>

          {/* Tool Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] self-start">
            <button
              onClick={() => setActiveTool('smartgallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTool === 'smartgallery'
                  ? 'bg-emerald-400 text-slate-950 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>SmartGallery Privacy & Search</span>
            </button>
            <button
              onClick={() => setActiveTool('keyforge')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTool === 'keyforge'
                  ? 'bg-emerald-400 text-slate-950 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Keyforge Entropy Studio</span>
            </button>
          </div>
        </div>

        {/* Interactive Panel */}
        {activeTool === 'smartgallery' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: DocClassifier.mask() Live Simulator */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Lock className="w-4 h-4" />
                  DocClassifier.mask() — PII Redaction Engine
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-mono">
                  {maskedOcrResult.redactedCount} Sensitive IDs Redacted
                </span>
              </div>

              <label className="block text-xs font-mono text-slate-400 mb-2">
                Raw On-Device ML Kit OCR Stream (Try typing a 12-digit Aadhaar or 10-char PAN):
              </label>
              <textarea
                rows={3}
                value={ocrSample}
                onChange={(e) => setOcrSample(e.target.value)}
                className="w-full rounded-xl bg-[#070b14] border border-white/[0.1] focus:border-emerald-400/60 focus:outline-none p-3.5 text-xs font-mono text-slate-200 leading-relaxed"
              />

              <div className="mt-4">
                <div className="text-xs font-mono text-slate-400 mb-2">
                  Persisted to SQLCipher AES-256 DB (After Automatic Masking):
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 font-mono text-xs text-emerald-200 leading-relaxed">
                  {maskedOcrResult.maskedText}
                </div>
              </div>
            </div>

            {/* Right: Hybrid Query Parser */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <FileSearch className="w-4 h-4" />
                    QueryParser + Hybrid Ranker (&lt; 300ms)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[11px] font-mono">
                    Offline KD-Tree + FTS4
                  </span>
                </div>

                <label className="block text-xs font-mono text-slate-400 mb-2">
                  Test a Natural Gallery Search Query:
                </label>
                <input
                  type="text"
                  value={searchSample}
                  onChange={(e) => setSearchSample(e.target.value)}
                  placeholder="e.g., pan card indore 2025 or invoice delhi"
                  className="w-full rounded-xl bg-[#070b14] border border-white/[0.1] focus:border-cyan-400/60 focus:outline-none p-3.5 text-xs font-mono text-slate-100"
                />

                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] font-mono text-slate-400">DOC CLASSIFIER</div>
                    <div className="text-xs font-mono font-semibold text-white mt-1">
                      {parsedQueryInfo.detectedDoc}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] font-mono text-slate-400">OFFLINE CITY</div>
                    <div className="text-xs font-mono font-semibold text-emerald-300 mt-1">
                      {parsedQueryInfo.detectedCity}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-[10px] font-mono text-slate-400">YEAR FILTER</div>
                    <div className="text-xs font-mono font-semibold text-cyan-300 mt-1">
                      {parsedQueryInfo.detectedYear}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-[#070b14] border border-white/[0.07] font-mono text-[11px] text-slate-300">
                <span className="text-emerald-400">Scoring Equation:</span> {parsedQueryInfo.formula}
              </div>
            </div>
          </div>
        ) : (
          /* Keyforge Entropy Analyzer */
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <KeyRound className="w-4 h-4" />
                  <span>Keyforge — Information-Theory Entropy Calculator</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Instead of arbitrary regex checklists, Keyforge evaluates true character-pool bit entropy{' '}
                  <span className="font-mono text-emerald-300">H = L × log₂(Pool)</span> and generates passwords via Web Crypto CSPRNG.
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <input
                    type="text"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="flex-1 rounded-xl bg-[#070b14] border border-white/[0.12] focus:border-emerald-400 px-4 py-3 text-sm font-mono text-white"
                    placeholder="Type a password to analyze..."
                  />
                  <button
                    onClick={generateCsprngPassword}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs font-mono transition-all"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>CSPRNG Generate</span>
                  </button>
                  <button
                    onClick={copyPassword}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-slate-200"
                  >
                    {copiedPwd ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-[#070b14] border border-white/[0.08]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Bit Entropy</div>
                  <div className="font-display text-3xl font-bold text-white mt-1">
                    {entropyStats.bits} <span className="text-sm font-mono text-emerald-400">bits</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#070b14] border border-white/[0.08]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Symbol Pool</div>
                  <div className="font-display text-3xl font-bold text-white mt-1">
                    {entropyStats.pool} <span className="text-sm font-mono text-cyan-400">chars</span>
                  </div>
                </div>
                <div className="col-span-2 p-4 rounded-xl bg-[#070b14] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Security Classification
                    </div>
                    <div className={`text-sm font-mono font-semibold mt-0.5 ${entropyStats.color}`}>
                      {entropyStats.label}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Est. Offline Resistance
                    </div>
                    <div className="text-xs font-mono text-slate-200 mt-0.5">
                      {entropyStats.crackTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
