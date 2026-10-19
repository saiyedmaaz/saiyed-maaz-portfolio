import React from 'react';

/**
 * Custom Animated Vector Logo for Saiyed Maaz ("SM" Geometric Monogram)
 * Features:
 * - Animated rotating dashed orbital ring
 * - Self-drawing SVG stroke animation for the intertwined S + M paths
 * - Pulsing teal/indigo accent spark
 */
export default function BrandLogo({ size = 'md', showText = true, onClick }) {
  const dimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size] || 'w-11 h-11';

  return (
    <div
      onClick={onClick}
      className="inline-flex items-center gap-3 group cursor-pointer select-none"
    >
      <div className={`relative ${dimensions} flex items-center justify-center`}>
        {/* Soft Ambient Glow Behind Logo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/25 via-violet-500/20 to-teal-400/25 blur-md group-hover:blur-lg group-hover:scale-110 transition-all duration-500" />

        {/* Animated SVG Crest */}
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3"
        >
          <defs>
            <linearGradient id="logoPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="52%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <linearGradient id="logoSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F3FF" />
            </linearGradient>
          </defs>

          {/* Outer Rotating Orbit Ring */}
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="url(#logoPrimaryGrad)"
            strokeWidth="2"
            strokeDasharray="10 8"
            strokeOpacity="0.45"
            className="origin-center animate-spin-slow"
          />

          {/* Rounded Squircle Base */}
          <rect
            x="12"
            y="12"
            width="96"
            height="96"
            rx="28"
            fill="url(#logoSurfaceGrad)"
            stroke="url(#logoPrimaryGrad)"
            strokeWidth="4"
          />

          {/* Subtle Inner Corner Accent */}
          <path
            d="M28 24H42"
            stroke="#6366F1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.35"
          />

          {/* Animated 'S' Curve */}
          <path
            d="M33 47C33 39 41 35 49 39C55 42 55 49 47 54L39 59C32 64 33 74 43 77C50 79 56 75 58 69"
            stroke="url(#logoPrimaryGrad)"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logo-draw-path"
          />

          {/* Animated 'M' Monogram */}
          <path
            d="M57 76V43L71 62L85 43V76"
            stroke="url(#logoPrimaryGrad)"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logo-draw-path-delayed"
          />

          {/* Floating Spark Dot */}
          <circle
            cx="87"
            cy="31"
            r="5"
            fill="#14B8A6"
            className="animate-pulse"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="font-display font-extrabold text-slate-900 text-base sm:text-lg tracking-tight leading-none flex items-center gap-1">
            <span>Saiyed</span>
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-500 bg-clip-text text-transparent">
              Maaz
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-400 tracking-wide mt-0.5 group-hover:text-indigo-500 transition-colors">
            Design & Code
          </span>
        </div>
      )}
    </div>
  );
}
