import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  SlidersHorizontal,
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({
  profile,
  socials,
  onReplayIntro,
  onOpenLinkEditor,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work', href: '#projects' },
    { label: 'Expertise', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.06)]'
              : 'bg-white/75 backdrop-blur-lg border border-slate-200/70 shadow-sm'
          }`}
        >
          {/* Animated Custom Vector Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              if (onReplayIntro) {
                e.preventDefault();
                onReplayIntro();
              }
            }}
            title="Click to replay logo animation"
          >
            <BrandLogo size="sm" showText={true} />
          </a>

          {/* Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons (GitHub & LinkedIn) + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-8 h-8 rounded-xl bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/70 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="w-8 h-8 rounded-xl bg-slate-100/80 hover:bg-blue-50 border border-slate-200/70 hover:border-blue-200 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenLinkEditor}
              title="Edit your GitHub or LinkedIn URLs"
              className="w-8 h-8 rounded-xl bg-slate-100/80 hover:bg-indigo-50 border border-slate-200/70 hover:border-indigo-200 text-slate-500 hover:text-indigo-600 flex items-center justify-center transition-all"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={onOpenLinkEditor}
              className="p-2 rounded-xl bg-slate-100 text-slate-600"
              title="Edit Social Links"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl space-y-2">
            <div className="grid grid-cols-2 gap-1.5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
