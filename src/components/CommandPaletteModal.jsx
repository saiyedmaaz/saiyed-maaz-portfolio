import React, { useState } from 'react';
import {
  Search,
  FolderGit2,
  Sparkles,
  Wrench,
  Mail,
  SlidersHorizontal,
  ArrowRight,
  X,
} from 'lucide-react';

export default function CommandPaletteModal({
  isOpen,
  onClose,
  projects,
  onOpenCustomizer,
}) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickActions = [
    {
      label: 'Jump to Shipped Projects (11 Builds)',
      href: '#projects',
      icon: FolderGit2,
    },
    {
      label: 'Launch Interactive Builder Playground (SmartGallery & Keyforge)',
      href: '#lab',
      icon: Sparkles,
    },
    {
      label: 'Inspect Technical Skills & Stack',
      href: '#skills',
      icon: Wrench,
    },
    {
      label: 'Jump to Contact & Direct Email',
      href: '#contact',
      icon: Mail,
    },
  ];

  const matchingProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl glass-card rounded-2xl border border-white/[0.12] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#070b14]">
          <Search className="w-4 h-4 text-emerald-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, or run a command..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="p-3 max-h-[380px] overflow-y-auto space-y-4">
          {/* Quick Navigation */}
          <div>
            <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-slate-400">
              Quick Navigation
            </div>
            <div className="space-y-1 mt-1">
              {quickActions.map((act, i) => {
                const Icon = act.icon;
                return (
                  <a
                    key={i}
                    href={act.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/[0.06] text-xs text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-emerald-400" />
                      <span>{act.label}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                );
              })}
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomizer();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-emerald-500/15 text-xs text-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                  <span>Customize Portfolio Profile / Bio / Links</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Matching Projects */}
          <div>
            <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-slate-400">
              Matching Projects ({matchingProjects.length})
            </div>
            <div className="space-y-1 mt-1">
              {matchingProjects.slice(0, 6).map((p) => (
                <a
                  key={p.id}
                  href="#projects"
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/[0.05] text-xs"
                >
                  <div>
                    <span className="font-semibold text-white">{p.title}</span>
                    <span className="text-slate-400 ml-2 font-mono text-[11px]">
                      — {p.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {p.stack[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
