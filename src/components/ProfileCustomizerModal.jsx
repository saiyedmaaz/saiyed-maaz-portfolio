import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, SlidersHorizontal } from 'lucide-react';

export default function ProfileCustomizerModal({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetProfile,
}) {
  const [formData, setFormData] = useState(profile);
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  const handleCopyConfig = () => {
    const snippet = `profile: ${JSON.stringify(formData, null, 2)},`;
    navigator.clipboard.writeText(snippet);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#090e18] border-l border-white/[0.1] h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
              <h3 className="font-display text-xl font-bold text-white">
                Customize Profile & Contact
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
            Changes you save here update the portfolio immediately in your browser (`localStorage`). For permanent code changes, edit{' '}
            <code className="text-emerald-300 font-mono">src/data/portfolioData.js</code> or copy the JSON config below.
          </p>

          <form id="profile-customizer-form" onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  Terminal Handle
                </label>
                <input
                  type="text"
                  value={formData.handle}
                  onChange={(e) => handleChange('handle', e.target.value)}
                  className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Role / Title
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Availability Status Badge
              </label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value)}
                className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Bio / Summary
              </label>
              <textarea
                rows={3}
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] p-3 text-xs text-white leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => handleChange('github', e.target.value)}
                className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  YouTube URL
                </label>
                <input
                  type="url"
                  value={formData.youtube}
                  onChange={(e) => handleChange('youtube', e.target.value)}
                  className="w-full rounded-lg bg-[#05080f] border border-white/[0.1] px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="pt-6 border-t border-white/[0.08] mt-6 space-y-2.5">
          <div className="flex gap-2.5">
            <button
              type="submit"
              form="profile-customizer-form"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Live Preview</span>
            </button>
            <button
              type="button"
              onClick={handleCopyConfig}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-slate-200"
            >
              {copiedJson ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied JSON</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Config</span>
                </>
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onResetProfile();
              onClose();
            }}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default Workspace Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
