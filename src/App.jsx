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
      icon: '🪨',
      bg: 'radial-gradient(circle at top, #1a1a2e 0%, #0f0f1e 50%, #000000 100%)',
      card: 'rgba(15,15,30,0.9)',
      accent: '#8b5cf6',
      text: '#e5e7eb',
      subtext: '#9ca3af',
      border: '1px solid rgba(139,92,246,0.3)',
      glow: '0 0 25px rgba(139,92,246,0.2), inset 0 0 20px rgba(139,92,246,0.05)',
      glass: true
    },

    neonvoid: {
      icon: '🪩',
      bg: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%)',
      card: 'rgba(20,20,20,0.95)',
      accent: '#ff00ff',
      text: '#ffffff',
      subtext: '#e0b3ff',
      border: '1px solid rgba(255,0,255,0.6)',
      glow: '0 0 50px rgba(255,0,255,0.5), 0 0 20px rgba(0,255,255,0.3)',
      glass: true
    },

    paper: {
      icon: '📄',
      bg: 'linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%)',
      card: '#ffffff',
      accent: '#1e40af',
      text: '#1f2937',
      subtext: '#6b7280',
      border: '1px solid #d1d5db',
      glow: '0 2px 8px rgba(0,0,0,0.08)',
      glass: false
    },

    royal: {
      icon: '👑',
      bg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
      card: 'rgba(49,46,129,0.85)',
      accent: '#fbbf24',
      text: '#fef3c7',
      subtext: '#fde68a',
      border: '1px solid rgba(251,191,36,0.5)',
      glow: '0 0 40px rgba(251,191,36,0.3), inset 0 0 30px rgba(251,191,36,0.1)',
      glass: true
    },

    hologram: {
      icon: '🌌',
      bg: 'linear-gradient(120deg, #0c1445 0%, #1a0b2e 25%, #0c1445 50%, #1a0b2e 75%, #0c1445 100%)',
      card: 'rgba(10,255,255,0.12)',
      accent: '#00ffff',
      text: '#e0ffff',
      subtext: '#80ffff',
      border: '1px solid rgba(0,255,255,0.5)',
      glow: '0 0 60px rgba(0,255,255,0.4), 0 0 30px rgba(147,51,234,0.3)',
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
        {Object.keys(themes).map(k => {
          const tk = themes[k];
          return (
            <button
              key={k}
              onClick={() => setTheme(k)}
              title={`${k.charAt(0).toUpperCase() + k.slice(1)} theme`}
              aria-pressed={theme === k}
              style={{
                margin: '6px',
                padding: '8px 18px',
                borderRadius: '999px',
                background: theme === k ? tk.accent : 'transparent',
                border: `1px solid ${tk.accent}`,
                color: theme === k 
                  ? (k === 'paper' ? '#ffffff' : '#000000')
                  : tk.accent,
                fontWeight: 800,
                letterSpacing: '1px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.25s ease'
              }}
            >
              <span style={{ fontSize: '1.15rem', marginRight: '10px' }}>
                {tk.icon}
              </span>
              {k.toUpperCase()}
            </button>
          );
        })}
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
            color: theme === 'paper' ? '#ffffff' : '#000000',
            fontWeight: 900,
            letterSpacing: '0.15em',
            textDecoration: 'none',
            boxShadow: t.glow,
            transition: 'all 0.3s ease'
          }}
        >
          GITHUB
        </a>
      </footer>
    </div>
  );
}