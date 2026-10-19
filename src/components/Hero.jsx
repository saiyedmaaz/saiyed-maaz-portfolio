import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Mail,
  Check,
  Copy,
  GraduationCap,
  Sparkles,
  Github,
  Linkedin,
  Clock,
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Hero({ profile, socials, marqueeItems, onOpenLinkEditor }) {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-6 overflow-hidden">
      {/* Subtle Ambient Studio Lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-200/40 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-10 right-1/4 w-96 h-96 rounded-full bg-teal-200/35 blur-3xl animate-blob [animation-delay:4s]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* $10k Studio Bento Grid — Zero Wasted Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Hero Headline Bento Tile (8 cols) */}
          <div className="lg:col-span-8 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-teal-400/10 blur-2xl" />

            {/* Top Status & Local Time Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
                <span>{profile.availability}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 text-slate-600 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>{profile.location}</span>
                {timeString && <span className="text-slate-400">• {timeString}</span>}
              </div>
            </div>

            {/* Expressive Headline */}
            <div className="my-2">
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-500 bg-clip-text text-transparent animated-gradient-text">
                  {profile.name}
                </span>
                .
              </h1>
              <p className="font-display text-xl sm:text-2xl font-bold text-slate-700 mt-2 tracking-tight">
                {profile.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-slate-100">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-100/90 hover:bg-white border border-slate-200/90 text-slate-700 font-semibold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>{profile.email}</span>
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-xs">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column Bento Stack (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Identity & Education Tile */}
            <div className="bento-card rounded-3xl p-6 flex flex-col justify-between flex-1">
              <div className="flex items-center gap-3.5">
                <BrandLogo size="lg" showText={false} />
                <div>
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[11px] font-semibold">
                    BCA UNDERGRADUATE
                  </span>
                  <h2 className="font-display text-lg font-bold text-slate-900 mt-1">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{profile.college}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-100 text-center">
                <div className="p-2.5 rounded-2xl bg-slate-50/90">
                  <div className="font-display font-extrabold text-slate-900 text-base">
                    10+
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-50/90">
                  <div className="font-display font-extrabold text-indigo-600 text-base">
                    4
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                    Domains
                  </div>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-50/90">
                  <div className="font-display font-extrabold text-teal-600 text-base">
                    100%
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                    Original
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Bento Tile (GitHub & LinkedIn) */}
            <div className="bento-card rounded-3xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Developer Profiles
                </span>
                <button
                  onClick={onOpenLinkEditor}
                  className="text-[11px] font-semibold text-indigo-600 hover:underline"
                >
                  Edit Links
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* GitHub */}
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3.5 rounded-2xl bg-slate-100/90 hover:bg-slate-900 border border-slate-200/80 flex items-center justify-between transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-5 h-5 text-slate-800 group-hover:text-white transition-colors" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-white">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                </a>

                {/* LinkedIn */}
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3.5 rounded-2xl bg-blue-50/90 hover:bg-blue-600 border border-blue-200/60 flex items-center justify-between transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    <span className="text-xs font-bold text-slate-800 group-hover:text-white">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Smooth Capabilities Marquee Ribbon */}
        <div className="mt-4 bento-card rounded-2xl py-3 px-4 overflow-hidden flex items-center">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-600"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
