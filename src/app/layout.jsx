'use client';
import { useState, useEffect } from 'react';
import './globals.css';
import ParticleBackground from './ParticleBackground';

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

  return (
    <div className="relative min-h-screen w-full bg-[#050510] text-white">
      <ParticleBackground />
      <div className="pointer-events-none fixed inset-0 bg-radial-gradient-fade" style={{ zIndex: 2 }} />
      
      {/* Left side social icons */}
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
      
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`} style={{ zIndex: 100 }}>
        <div className="mx-auto max-w-7xl px-6 md:px-20 py-6 flex items-center">
          <a href="#home" className="text-lg font-bold tracking-tighter uppercase font-display hover:text-blue-400 transition-colors">
            Muhammad Ahmed
          </a>
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm uppercase tracking-widest text-gray-300 font-display">
            <a className="hover:text-white transition-colors" href="#skills">Skills</a>
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            <a className="hover:text-white transition-colors" href="#about">About</a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="ml-auto inline-flex md:inline-flex items-center rounded-full bg-blue-500/20 border border-blue-400/50 px-4 md:px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-blue-500/30 hover:border-blue-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Resume
          </a>
        </div>
      </nav>
      <main className="relative" style={{ zIndex: 10 }}>{children}</main>
    </div>
  );
}