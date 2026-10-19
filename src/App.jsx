import React, { useState, useEffect } from 'react';
import { X, Save, Github, Linkedin } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import BrandLogo from './components/BrandLogo';

const SOCIAL_STORAGE_KEY = 'saiyed_maaz_socials_v3';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [linkEditorOpen, setLinkEditorOpen] = useState(false);

  const [socials, setSocials] = useState(() => {
    try {
      const saved = localStorage.getItem(SOCIAL_STORAGE_KEY);
      return saved
        ? { ...portfolioData.profile.socials, ...JSON.parse(saved) }
        : portfolioData.profile.socials;
    } catch {
      return portfolioData.profile.socials;
    }
  });

  const [draftSocials, setDraftSocials] = useState(socials);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  const handleReplayIntro = () => {
    setShowSplash(true);
    setTimeout(() => setShowSplash(false), 1150);
  };

  const handleSaveSocials = (e) => {
    e.preventDefault();
    setSocials(draftSocials);
    try {
      localStorage.setItem(SOCIAL_STORAGE_KEY, JSON.stringify(draftSocials));
    } catch {
      // ignore storage errors
    }
    setLinkEditorOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F2] bg-architectural-dots text-slate-900 relative">
      {/* Smooth Animated Brand Logo Intro Splash */}
      <div
        onClick={() => setShowSplash(false)}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F5F2]/95 backdrop-blur-2xl transition-all duration-500 ${
          showSplash
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none scale-105'
        }`}
      >
        <div className="relative flex flex-col items-center gap-3">
          <BrandLogo size="xl" showText={false} />
          <div className="text-center">
            <div className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
              Saiyed <span className="text-indigo-600">Maaz</span>
            </div>
            <div className="text-[11px] font-bold text-slate-400 mt-0.5 tracking-widest uppercase">
              Portfolio • Godhra, IN
            </div>
          </div>
        </div>
      </div>

      <Navbar
        profile={portfolioData.profile}
        socials={socials}
        onReplayIntro={handleReplayIntro}
        onOpenLinkEditor={() => {
          setDraftSocials(socials);
          setLinkEditorOpen(true);
        }}
      />

      {/* Tight, Unified Bento Flow — Zero Extra Space */}
      <main>
        <Hero
          profile={portfolioData.profile}
          socials={socials}
          marqueeItems={portfolioData.marqueeItems}
          onOpenLinkEditor={() => {
            setDraftSocials(socials);
            setLinkEditorOpen(true);
          }}
        />

        <ProjectsSection projects={portfolioData.projects} />

        <SkillsSection skills={portfolioData.skills} />

        <AboutSection profile={portfolioData.profile} />

        <ContactSection
          profile={portfolioData.profile}
          socials={socials}
          onOpenLinkEditor={() => {
            setDraftSocials(socials);
            setLinkEditorOpen(true);
          }}
        />
      </main>

      {/* Quick Social Links Customizer Modal (GitHub & LinkedIn) */}
      {linkEditorOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setLinkEditorOpen(false)}
        >
          <div
            className="bento-card rounded-3xl max-w-md w-full p-6 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-display text-lg font-extrabold text-slate-900">
                Update GitHub & LinkedIn Links
              </h3>
              <button
                onClick={() => setLinkEditorOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveSocials} className="mt-4 space-y-3.5">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                  <Github className="w-3.5 h-3.5 text-slate-900" /> GitHub URL & Handle
                </label>
                <input
                  type="url"
                  value={draftSocials.github}
                  onChange={(e) =>
                    setDraftSocials({ ...draftSocials, github: e.target.value })
                  }
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-800 mb-1.5"
                  placeholder="https://github.com/..."
                />
                <input
                  type="text"
                  value={draftSocials.githubHandle}
                  onChange={(e) =>
                    setDraftSocials({
                      ...draftSocials,
                      githubHandle: e.target.value,
                    })
                  }
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-600"
                  placeholder="github.com/username"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn URL & Handle
                </label>
                <input
                  type="url"
                  value={draftSocials.linkedin}
                  onChange={(e) =>
                    setDraftSocials({ ...draftSocials, linkedin: e.target.value })
                  }
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-800 mb-1.5"
                  placeholder="https://linkedin.com/in/..."
                />
                <input
                  type="text"
                  value={draftSocials.linkedinHandle}
                  onChange={(e) =>
                    setDraftSocials({
                      ...draftSocials,
                      linkedinHandle: e.target.value,
                    })
                  }
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-600"
                  placeholder="in/username"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-xs transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Links</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
