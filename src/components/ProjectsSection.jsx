import React, { useState } from 'react';
import {
  Search,
  Lock,
  Sparkles,
  ShoppingBag,
  BookOpen,
  Compass,
  ShieldCheck,
  ArrowUpRight,
  Cpu,
} from 'lucide-react';

const FILTERS = ['All', 'Android & AI', 'AI & Python', 'Full-Stack', 'Web Design'];

/**
 * Renders a bespoke mini-UI artwork header for each project card so the
 * portfolio looks like a $10k studio case study showcase.
 */
function ProjectVisualMockup({ type }) {
  if (type === 'mobile-search') {
    return (
      <div className="h-36 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-slate-100 p-4 border border-indigo-100/80 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-indigo-600 shadow-sm">
            <Lock className="w-3 h-3" /> AES-256 OFFLINE
          </span>
          <span className="text-[10px] font-semibold text-slate-400">0.24s</span>
        </div>
        <div className="bg-white/95 rounded-xl p-2.5 shadow-sm border border-slate-200/70 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
            <Search className="w-3.5 h-3.5 text-indigo-500" />
            <span>"aadhar card bhopal 2024"</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-[10px] font-bold">
            FTS4 + Int8
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="px-2 py-0.5 rounded-md bg-white/80 text-[10px] font-medium text-slate-600">
            📄 Aadhaar Masked
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/80 text-[10px] font-medium text-slate-600">
            📍 KD-Tree City
          </span>
        </div>
      </div>
    );
  }

  if (type === 'vision-canvas') {
    return (
      <div className="h-36 rounded-2xl bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-slate-100 p-4 border border-teal-100/80 flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-teal-700 shadow-sm">
            <Cpu className="w-3 h-3" /> MEDIAPIPE 21-LANDMARK
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </div>
        <div className="bg-white/95 rounded-xl p-2.5 shadow-sm border border-slate-200/70 flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-slate-800">
            ✍️ 3x + 9 = 24
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white font-mono text-xs font-bold shadow-sm">
            → x = 5
          </span>
        </div>
        <div className="text-[10px] font-medium text-teal-800/80 flex items-center justify-between">
          <span>Index Finger: Draw Stroke</span>
          <span>Gemini Vision Async</span>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    return (
      <div className="h-32 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-100 p-4 border border-emerald-100/80 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-emerald-700 shadow-sm">
            <ShoppingBag className="w-3 h-3" /> FRESHGROCER STORE
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
            PHP + MySQL
          </span>
        </div>
        <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/70 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">🛒 Cart Checkout + Admin CRUD</span>
          <span className="text-emerald-600 font-bold">Live DB</span>
        </div>
      </div>
    );
  }

  if (type === 'academy') {
    return (
      <div className="h-32 rounded-2xl bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-slate-100 p-4 border border-sky-100/80 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-sky-700 shadow-sm">
            <BookOpen className="w-3 h-3" /> BRIGHTLEARN BCA
          </span>
          <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold">
            UI Portal
          </span>
        </div>
        <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/70 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">📘 BCA Tutorials & Study Guides</span>
          <span className="text-sky-600 font-bold">Clean UI</span>
        </div>
      </div>
    );
  }

  if (type === 'portal') {
    return (
      <div className="h-32 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-100 p-4 border border-amber-100/80 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-amber-700 shadow-sm">
            <Compass className="w-3 h-3" /> NOOR PLATFORM
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
            REST API
          </span>
        </div>
        <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/70 flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700">🕌 Quran Reader & Live Prayer Times</span>
          <span className="text-amber-600 font-bold">Full-Stack</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-32 rounded-2xl bg-gradient-to-br from-rose-500/10 via-purple-500/5 to-slate-100 p-4 border border-rose-100/80 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-rose-700 shadow-sm">
          <ShieldCheck className="w-3 h-3" /> ZERO-UPLOAD CRYPTO
        </span>
        <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-bold">
          AES-256-GCM
        </span>
      </div>
      <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/70 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700">🔐 In-Browser File & USB Vault</span>
        <span className="text-rose-600 font-bold">WebCrypto</span>
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            (activeFilter === 'Full-Stack' && p.category.includes('Web'))
        );

  return (
    <section id="projects" className="py-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Featured Projects & Builds
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 bg-white/90 p-1 rounded-2xl border border-slate-200/80 shadow-sm">
            {FILTERS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`bento-card rounded-3xl p-5 flex flex-col justify-between group ${
                project.featured && activeFilter === 'All'
                  ? 'md:col-span-1 lg:col-span-1'
                  : ''
              }`}
            >
              <div>
                {/* Custom Visual Mockup Header */}
                <ProjectVisualMockup type={project.previewType} />

                {/* Category + Metric Row */}
                <div className="flex items-center justify-between gap-2 mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold">
                    {project.metric}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {project.subtitle}
                </p>

                {/* Concise Summary */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
