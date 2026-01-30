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

  const isMobile = windowWidth < 640;
  const isLaptop = windowWidth >= 1024;

  const profile = {
    name: 'Ahmed Numan',
    handle: '4hmed',
    location: 'Punjab, Pakistan',
    github: '4hmed-n'
  };

  const stack = [
    'Python','SQL','JavaScript','React','React-Native',
    'MongoDB','Node.js','Express.js','FastAPI',
    'Docker','Firebase','n8n','Postman',
    'HTML5','CSS3','C++','C#'
  ];

  const focusAreas = [
    {
      title: 'Backend & DevOps',
      skills: 'FastAPI, Node.js, Docker, SQL, MongoDB, Firebase, REST APIs'
    },
    {
      title: 'Automation & Systems',
      skills: 'Python Automation, n8n Workflows, API Integrations'
    },
    {
      title: 'Full-Stack Engineering',
      skills: 'React, React-Native (Expo), Express.js'
    }
  ];

  /* ===================== THEMES ===================== */

  const themes = {
    obsidian: {
      bg: 'radial-gradient(circle at top, #020617 0%, #000000 85%)',
      card: 'rgba(8,12,20,0.85)',
      accent: '#22d3ee',
      text: '#f8fafc',
      subtext: '#94a3b8',
      border: '1px solid rgba(34,211,238,0.25)',
      glow: '0 0 30px rgba(34,211,238,0.15)',
      glass: true
    },

    neonvoid: {
      bg: '#000000',
      card: 'rgba(10,10,10,0.92)',
      accent: '#7c3aed',
      text: '#f4f4f5',
      subtext: '#a1a1aa',
      border: '1px solid rgba(124,58,237,0.45)',
      glow: '0 0 40px rgba(124,58,237,0.4)',
      glass: true
    },

    paper: {
      bg: '#fafafa',
      card: '#ffffff',
      accent: '#020617',
      text: '#020617',
      subtext: '#475569',
      border: '1px solid #e5e7eb',
      glow: 'none',
      glass: false
    },

    royal: {
      bg: 'linear-gradient(135deg, #020617, #1e1b4b)',
      card: 'rgba(30,27,75,0.75)',
      accent: '#facc15',
      text: '#f8fafc',
      subtext: '#c7d2fe',
      border: '1px solid rgba(250,204,21,0.4)',
      glow: '0 0 35px rgba(250,204,21,0.25)',
      glass: true
    },

    hologram: {
      bg: 'linear-gradient(120deg, #020617, #0f172a, #020617)',
      card: 'rgba(255,255,255,0.08)',
      accent: '#5eead4',
      text: '#ecfeff',
      subtext: '#99f6e4',
      border: '1px solid rgba(94,234,212,0.45)',
      glow: '0 0 45px rgba(94,234,212,0.4)',
      glass: true
    }
  };

  const t = themes[theme];

  /* ===================== STYLES ===================== */

  const baseCard = {
    background: t.card,
    border: t.border,
    borderRadius: '22px',
    padding: '1.6rem',
    backdropFilter: t.glass ? 'blur(18px)' : 'none',
    boxShadow: t.glow,
    transition: 'all 0.35s ease'
  };

  const lift = {
    onMouseEnter: e =>
      (e.currentTarget.style.transform = 'translateY(-6px)'),
    onMouseLeave: e =>
      (e.currentTarget.style.transform = 'none')
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: t.bg,
        color: t.text,
        fontFamily:
          "'Inter', system-ui, -apple-system, BlinkMacSystemFont",
        transition: 'background 0.6s ease'
      }}
    >
      {/* THEME PICKER */}
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        {Object.keys(themes).map(k => (
          <button
            key={k}
            onClick={() => setTheme(k)}
            style={{
              margin: '6px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: theme === k ? t.accent : 'transparent',
              border: `1px solid ${t.accent}`,
              color: theme === k ? '#000' : t.text,
              fontWeight: 800,
              letterSpacing: '1px',
              cursor: 'pointer'
            }}
          >
            {k.toUpperCase()}
          </button>
        ))}
      </div>

      {/* HEADER */}
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-2px',
            color: t.accent,
            marginBottom: '0.5rem'
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: t.subtext,
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          {profile.location}
        </p>
      </header>

      {/* TABS */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        {['stack', 'focus'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              margin: '0 1.5rem',
              paddingBottom: '10px',
              fontSize: '1.1rem',
              fontWeight: 800,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: activeTab === tab ? t.accent : t.subtext,
              borderBottom:
                activeTab === tab
                  ? `3px solid ${t.accent}`
                  : '3px solid transparent',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {activeTab === 'stack' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px,1fr))',
              gap: '14px'
            }}
          >
            {stack.map(s => (
              <div
                key={s}
                style={{
                  ...baseCard,
                  textAlign: 'center',
                  fontWeight: 700,
                  letterSpacing: '0.04em'
                }}
                {...lift}
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
              gap: '1.8rem'
            }}
          >
            {focusAreas.map((f, i) => (
              <div key={i} style={baseCard} {...lift}>
                <h3
                  style={{
                    color: t.accent,
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    marginBottom: '0.8rem'
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: t.subtext,
                    lineHeight: 1.7,
                    fontSize: '1.05rem'
                  }}
                >
                  {f.skills}
                </p>
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
            padding: '16px 44px',
            borderRadius: '999px',
            background: t.accent,
            color: '#000',
            fontWeight: 900,
            letterSpacing: '0.15em',
            textDecoration: 'none',
            boxShadow: t.glow
          }}
        >
          GITHUB
        </a>
      </footer>
    </div>
  );
}
