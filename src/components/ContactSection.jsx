import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  GraduationCap,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  SlidersHorizontal,
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function ContactSection({
  profile,
  socials,
  onOpenLinkEditor,
}) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project / Inquiry for ${profile.name}${name ? ` — from ${name}` : ''}`
    );
    const body = encodeURIComponent(
      message ||
        `Hi Saiyed Maaz,\n\nI explored your portfolio and would love to connect regarding a project or opportunity!`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-6 pb-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: Direct Contact & Social Bento (7 cols) */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-200/35 blur-3xl" />

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
                Available for Work
              </span>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Let's build your next digital product.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed max-w-xl">
                Reach out directly via email or connect with me on GitHub and LinkedIn.
              </p>

              {/* Email One-Click Copy Bar */}
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-600"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/90 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub & LinkedIn Direct Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-900" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">GitHub</div>
                      <div className="text-[10px] font-medium text-slate-500">
                        {socials.githubHandle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900" />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-center justify-between transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">LinkedIn</div>
                      <div className="text-[10px] font-medium text-slate-500">
                        {socials.linkedinHandle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                  {profile.college}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  {profile.location}
                </span>
              </div>
              <button
                onClick={onOpenLinkEditor}
                className="inline-flex items-center gap-1 text-indigo-600 font-semibold hover:underline"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>Update Social URLs</span>
              </button>
            </div>
          </div>

          {/* Right Column: Quick Message Composer (5 cols) */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
            <form onSubmit={handleSend} className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-extrabold text-slate-900">
                  Quick Message
                </h3>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Replies within 24h
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/90 focus:border-indigo-500 focus:bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">
                  Project or Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, website, or internship opportunity..."
                  className="w-full rounded-xl bg-slate-50 border border-slate-200/90 focus:border-indigo-500 focus:bg-white p-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message to {profile.firstName}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Compact Studio Footer */}
        <footer className="mt-6 bento-card rounded-2xl px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <BrandLogo size="sm" showText={false} />
            <span className="font-semibold text-slate-800">{profile.name}</span>
            <span>•</span>
            <span>{profile.email}</span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
