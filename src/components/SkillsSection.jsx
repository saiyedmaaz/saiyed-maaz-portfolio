import React from 'react';
import { Layers } from 'lucide-react';

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Stack</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Capabilities & Toolkit
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Built across Web UI, Full-Stack PHP/MySQL, Python Vision AI & Native Android.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((group) => (
            <div
              key={group.group}
              className="bento-card rounded-3xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                    {group.badge}
                  </span>
                </div>
                <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                  {group.group}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-slate-100/90 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 cursor-default"
                  >
                    {item}
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
