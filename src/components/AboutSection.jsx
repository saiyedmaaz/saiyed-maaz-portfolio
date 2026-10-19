import React from 'react';
import { Palette, Cpu, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ profile }) {
  const pillars = [
    {
      icon: Palette,
      badge: '01 / DESIGN',
      title: 'Minimal & Intentional UI',
      desc: 'Every page is structured for visual calm, clear typography, and effortless navigation — nothing cluttered, nothing out of place.',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: Cpu,
      badge: '02 / ENGINEERING',
      title: 'Practical AI & Native Apps',
      desc: 'From 100% offline AES-256 encrypted Android search engines to real-time MediaPipe + Gemini Vision math solvers.',
      color: 'bg-teal-50 text-teal-600',
    },
    {
      icon: GraduationCap,
      badge: '03 / FOUNDATION',
      title: `BCA @ ${profile.college}`,
      desc: 'Combining strong Computer Science fundamentals (DSA, OOP, Databases) with hands-on shipping from Godhra, Gujarat.',
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <section id="about" className="py-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bento-card rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-2xl ${item.color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified in shipped projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
