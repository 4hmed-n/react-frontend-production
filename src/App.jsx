import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('stack');
  const [theme, setTheme] = useState('obsidian');
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const profile = {
    name: "Ahmed Numan",
    handle: "4hmed",
    location: "Punjab, Pakistan",
    github: "4hmed-n"
  };

  const stack = [
    "Python", "SQL", "JavaScript", "React", "React-Native",
    "MongoDB", "Express.js", "Node.js", "C++", "C#",
    "SQLite", "HTML5", "CSS3", "FastAPI", "REST API",
    "Tailwind", "Expo", "Docker", "n8n", "Postman", "Firebase"
  ];

  const focusAreas = [
    {
      title: "Backend & DevOps",
      skills: "FastAPI, Docker, Node.js, MongoDB, SQL, Firebase, REST APIs"
    },
    {
      title: "Automation & Tools",
      skills: "n8n, Python Automation, API Testing, Workflow Design"
    },
    {
      title: "Full-Stack Development",
      skills: "React, React-Native (Expo), Tailwind CSS, Express.js"
    }
  ];

  /* ================= PREMIUM THEMES ================= */

  const colors = {
    obsidian: {
      bg: 'radial-gradient(circle at top, #111827 0%, #020617 70%)',
      card: 'rgba(17, 24, 39, 0.75)',
      accent: '#22d3ee',
      text: '#f9fafb',
      subtext: '#9ca3af',
      border: '1px solid rgba(255,255,255,0.08)',
      glass: true,
      glow: '0 20px 40px rgba(34, 211, 238, 0.12)'
    },

    neonvoid: {
      bg: 'linear-gradient(160deg, #050505, #0a0a0f)',
      card: 'rgba(10,10,15,0.85)',
      accent: '#7c3aed',
      text: '#f4f4f5',
      subtext: '#a1a1aa',
      border: '1px solid rgba(124,58,237,0.35)',
      glass: true,
      glow: '0 0 40px rgba(124,58,237,0.35)'
    },

    paper: {
      bg: '#f8fafc',
      card: '#ffffff',
      accent: '#0f172a',
      text: '#020617',
      subtext: '#475569',
      border: '1px solid #e5e7eb',
      glass: false,
      glow: '0 10px 20px rgba(0,0,0,0.06)'
    },

    royal: {
      bg: 'linear-gradient(135deg, #020617, #1e1b4b)',
      card: 'rgba(30,27,75,0.65)',
      accent: '#facc15',
      text: '#f8fafc',
      subtext: '#c7d2fe',
      border: '1px solid rgba(250,204,21,0.35)',
      glass: true,
      glow: '0 0 35px rgba(250,204,21,0.25)'
    },

    hologram: {
      bg: 'linear-gradient(120deg, #020617, #0f172a, #020617)',
      card: 'rgba(255,255,255,0.08)',
      accent: '#5eead4',
      text: '#ecfeff',
      subtext: '#99f6e4',
      border: '1px solid rgba(94,234,212,0.4)',
      glass: true,
      glow: '0 0 45px rgba(94,234,212,0.35)'
    }
  };

  const currentTheme = colors[theme];
  const isMobile = windowWidth < 640;
  const isLaptop = windowWidth >= 1024;

  const baseCardStyle = {
    backgroundColor: currentTheme.card,
    padding: isMobile ? '1.25rem' : '1.75rem',
    borderRadius: '24px',
    border: currentTheme.border,
    backdropFilter: currentTheme.glass ? 'blur(18px)' : 'none',
    boxShadow: currentTheme.glow,
    transition: 'all 0.35s ease',
    display: 'flex',
    flexDirection: 'column'
  };

  const hoverLift = {
    onMouseEnter: e =>
      (e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'),
    onMouseLeave: e =>
      (e.currentTarget.style.transform = 'none')
  };

  return (
    <div
      style={{
        background: currentTheme.bg,
        color: currentTheme.text,
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, sans-serif',
        transition: 'all 0.6s ease',
        overflowX: 'hidden'
      }}
    >
      {/* THEME PICKER */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        {Object.keys(colors).map(t => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              margin: '6px',
              padding: '8px 18px',
              borderRadius: '999px',
              border: `1px solid ${currentTheme.accent}`,
              background: theme === t ? currentTheme.accent : 'transparent',
              color: theme === t ? '#000' : currentTheme.text,
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* HEADER */}
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 900,
            color: currentTheme.accent,
            margin: 0
          }}
        >
          {profile.name}
        </h1>
        <p style={{ color: currentTheme.subtext, fontSize: '1.2rem' }}>
          {profile.location}
        </p>
      </header>

      {/* TABS */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        {['stack', 'focus'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={tabStyle(activeTab === tab, currentTheme, isMobile)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {activeTab === 'stack' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '14px'
            }}
          >
            {stack.map(s => (
              <div
                key={s}
                style={{
                  ...baseCardStyle,
                  textAlign: 'center',
                  fontWeight: 700
                }}
                {...hoverLift}
              >
                {s}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : isLaptop
                ? '1fr 1fr 1fr'
                : '1fr 1fr',
              gap: '1.5rem'
            }}
          >
            {focusAreas.map((f, i) => (
              <div key={i} style={baseCardStyle} {...hoverLift}>
                <h3 style={{ color: currentTheme.accent }}>{f.title}</h3>
                <p style={{ color: currentTheme.subtext }}>{f.skills}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', margin: '4rem 0' }}>
        <a
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
          style={{
            background: currentTheme.accent,
            color: '#000',
            padding: '16px 48px',
            borderRadius: '999px',
            fontWeight: 900,
            textDecoration: 'none',
            boxShadow: currentTheme.glow
          }}
        >
          GITHUB CODEBASE
        </a>
      </footer>
    </div>
  );
}

const tabStyle = (active, theme, isMobile) => ({
  background: 'none',
  border: 'none',
  borderBottom: active ? `4px solid ${theme.accent}` : '4px solid transparent',
  color: active ? theme.accent : theme.subtext,
  margin: '0 1rem',
  padding: '10px 0',
  fontSize: isMobile ? '1rem' : '1.2rem',
  fontWeight: 900,
  cursor: 'pointer',
  opacity: active ? 1 : 0.4
});
