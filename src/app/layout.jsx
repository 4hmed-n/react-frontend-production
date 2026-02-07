'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './globals.css';
import ParticleBackground from './ParticleBackground';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function SidebarIcon({ href, icon, label, showTooltip = true, isClickable = true }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const iconContent = (
    <>
      {icon}
      {showTooltip && (
        <span 
          className={`absolute left-full ml-3 px-3 py-1 bg-slate-800 text-white text-xs rounded-md whitespace-nowrap transition-all duration-300 pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          {label}
        </span>
      )}
    </>
  );

  if (!isClickable) {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 pointer-events-auto cursor-pointer"
      >
        {iconContent}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-gray-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 pointer-events-auto"
    >
      {iconContent}
    </a>
  );
}

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSocialOpen, setIsMobileSocialOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  const handleDownloadPDF = async () => {
    // Get all resume content
    const resumeElement = document.querySelector('[data-resume-root]');
    if (!resumeElement) return;

    // Clone resume and force desktop layout for PDF capture
    const clone = resumeElement.cloneNode(true);
    clone.classList.add('resume-print');
    clone.style.width = '980px';
    clone.style.maxWidth = '980px';
    clone.style.position = 'fixed';
    clone.style.left = '-9999px';
    clone.style.top = '0';
    clone.style.boxShadow = 'none';
    document.body.appendChild(clone);

    try {
      const rect = clone.getBoundingClientRect();
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: rect.width,
        height: rect.height,
        windowWidth: rect.width,
        windowHeight: rect.height,
        scrollX: 0,
        scrollY: 0
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [rect.width, rect.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, rect.width, rect.height);

      pdf.save('Muhammad_Ahmed_Resume.pdf');
    } finally {
      if (clone && clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    }
  };

  useEffect(() => {
    const title = 'Muhammad Ahmed | Portfolio';
    const description = 'Software Engineer & AI Researcher';
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      setIsLoading(false);
      return undefined;
    }
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isLoading });
    }
    return child;
  });

  return (
    <div className="relative min-h-screen w-full bg-[#050510] text-white">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 bg-radial-gradient-fade" style={{ zIndex: 2 }} />
      {isLoading && (
        <div className="kamui-loading" aria-label="Loading">
          <div className="kamui-core" aria-hidden="true">
            <svg className="kamui-whirlpool" viewBox="0 0 200 200" role="presentation">
              <defs>
                <linearGradient id="kamui-glow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(200, 170, 255, 0.0)" />
                  <stop offset="45%" stopColor="rgba(160, 120, 255, 0.85)" />
                  <stop offset="100%" stopColor="rgba(30, 18, 50, 0.0)" />
                </linearGradient>
              </defs>
              <path
                d="M100 20c44 0 80 36 80 80s-36 80-80 80-80-36-80-80 36-80 80-80z"
                fill="none"
                stroke="url(#kamui-glow)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeDasharray="12 18"
              />
              <path
                d="M100 40c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60z"
                fill="none"
                stroke="rgba(210, 180, 255, 0.75)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="6 14"
              />
            </svg>
            <div className="kamui-eye"></div>
          </div>
        </div>
      )}
      {/* Left side social icons (desktop) */}
      {!isResumePage && (
        <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
          <SidebarIcon
            href="https://github.com/4hmed-n"
            label="GitHub"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            }
          />
          <SidebarIcon
            isClickable={false}
            label="Docker"
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.983 9.143h-1.965V7.214h1.965v1.929zm0 2.107h-1.965v1.93h1.965v-1.93zm-2.923-2.107H9.097V7.214h1.963v1.929zm0 2.107H9.097v1.93h1.963v-1.93zm-2.92-2.107H6.175V7.214H8.14v1.929zm0 2.107H6.175v1.93H8.14v-1.93zm-2.92 0H3.255v1.93H5.22v-1.93zm16.256-.571c-.32-.208-.871-.285-1.594-.102-.153-1.05-.84-1.927-1.792-2.086-.231.627-.285 1.48.079 2.137-.596.434-.956.992-1.048 1.694-.902.033-1.95.033-3.147.033H2.704c-.158 1.274.112 2.695 1.079 3.702.957 1.002 2.38 1.494 4.18 1.494 3.313 0 5.98-1.055 7.981-3.134.75-.779 1.288-1.618 1.65-2.507.684.023 1.307-.23 1.634-.74.3-.464.235-.973-.209-1.234z"/>
              </svg>
            }
          />
          <SidebarIcon
            isClickable={false}
            label="LinkedIn"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            }
          />
          <SidebarIcon
            href="mailto:ahmednuman3044@gmail.com"
            label="Email"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>
      )}

      <nav className="sticky top-4 left-0 right-0 mx-auto z-50 transition-all duration-300" style={{ zIndex: 100 }}>
        {isResumePage ? (
          <div data-header-shell className={`mx-auto w-full max-w-[920px] ${isScrolled 
              ? 'bg-slate-900/50 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40' 
              : 'bg-slate-900/40 backdrop-blur-lg border border-white/10'
            } rounded-full`}
          >
            <div className="px-4 md:px-12 py-4 flex items-center justify-between">
              <Link to="/" className="text-sm md:text-lg font-bold tracking-tighter uppercase font-display">
                Muhammad Ahmed
              </Link>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 px-4 md:px-5 py-2 text-[10px] md:text-xs uppercase tracking-widest text-yellow-200 hover:from-yellow-500/30 hover:to-orange-500/30 hover:border-yellow-400/70 hover:text-yellow-300 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        ) : (
          <>
            <div data-header-shell className={`mx-auto w-full max-w-[920px] ${isScrolled 
                ? 'bg-slate-900/50 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40' 
                : 'bg-slate-900/40 backdrop-blur-lg border border-white/10'
              } rounded-full`}
            >
              <div className="px-4 md:px-12 py-4 flex items-center">
              {/* Mobile left social icon */}
              <div className="md:hidden relative">
                <button
                  onClick={() => setIsMobileSocialOpen((prev) => !prev)}
                  className="p-2 rounded-full border border-white/10 text-gray-300 hover:text-white transition-colors"
                  aria-label="Social links"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 20a9 9 0 0118 0" />
                  </svg>
                </button>
                {isMobileSocialOpen && (
                  <div className="absolute mt-3 left-0 z-50 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-2 space-y-2">
                    <a href="mailto:ahmednuman3044@gmail.com" className="flex items-center text-xs text-gray-200 px-3 py-2 rounded-full hover:bg-white/10">Gmail</a>
                    <a href="https://github.com/4hmed-n" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-200 px-3 py-2 rounded-full hover:bg-white/10">GitHub</a>
                    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-200 px-3 py-2 rounded-full hover:bg-white/10">Docker</a>
                    <a href="#" className="flex items-center text-xs text-gray-200 px-3 py-2 rounded-full hover:bg-white/10">LinkedIn</a>
                  </div>
                )}
              </div>

              <div className="flex-1 text-center md:flex-none md:text-left md:mr-8">
                <Link to="/" className="text-sm md:text-lg font-bold tracking-tighter uppercase font-display">
                  Muhammad Ahmed
                </Link>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              <div className="hidden md:flex flex-1 items-center justify-center gap-10 text-xs uppercase tracking-widest text-gray-400 font-display">
                <a className="hover:text-sky-400 transition-colors duration-300" href="#skills">Skills</a>
                <a className="hover:text-sky-400 transition-colors duration-300" href="#projects">Projects</a>
                <a className="hover:text-sky-400 transition-colors duration-300" href="#contact">Contact</a>
                <a className="hover:text-sky-400 transition-colors duration-300" href="#about">About</a>
              </div>

              <Link
                to="/resume"
                className="hidden md:inline-flex ml-auto md:ml-10 items-center rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 px-5 py-2 text-xs uppercase tracking-widest text-gray-200 hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/70 hover:text-sky-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Resume
              </Link>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="md:hidden mt-3 px-4 pb-4 pt-3 space-y-3 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
                <a onClick={() => setIsMobileMenuOpen(false)} className="block text-sm uppercase tracking-widest text-gray-400 hover:text-sky-400 transition-colors py-2" href="#skills">Skills</a>
                <a onClick={() => setIsMobileMenuOpen(false)} className="block text-sm uppercase tracking-widest text-gray-400 hover:text-sky-400 transition-colors py-2" href="#projects">Projects</a>
                <a onClick={() => setIsMobileMenuOpen(false)} className="block text-sm uppercase tracking-widest text-gray-400 hover:text-sky-400 transition-colors py-2" href="#contact">Contact</a>
                <a onClick={() => setIsMobileMenuOpen(false)} className="block text-sm uppercase tracking-widest text-gray-400 hover:text-sky-400 transition-colors py-2" href="#about">About</a>
                <Link
                  to="/resume"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/40 px-5 py-2 text-xs uppercase tracking-widest text-gray-200"
                >
                  Resume
                </Link>
              </div>
            )}
          </>
        )}
      </nav>
      <main className="relative" style={{ zIndex: 10 }}>{enhancedChildren}</main>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.kamui-loading {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at center, rgba(9, 10, 20, 0.95), rgba(2, 2, 8, 1));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.kamui-core {
  position: relative;
  width: 240px;
  height: 240px;
  display: grid;
  place-items: center;
}
.kamui-whirlpool {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 22px rgba(140, 100, 255, 0.45));
  animation: kamui-spin 1.6s cubic-bezier(0.1, 0.85, 0.2, 1) infinite;
}
.kamui-eye {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(235, 225, 255, 0.95), rgba(120, 90, 200, 0.4));
  box-shadow: 0 0 18px rgba(164, 112, 255, 0.7);
}
@keyframes kamui-spin {
  0% { transform: rotate(0deg) scale(0.92); }
  45% { transform: rotate(200deg) scale(1.02); }
  100% { transform: rotate(360deg) scale(0.95); }
}
`
        }}
      />
    </div>
  );
}