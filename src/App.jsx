import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('stack');
  const [theme, setTheme] = useState('glass');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

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
    "Tailwind", "Expo.io", "Docker", "n8n", "Postman", "Firebase"
  ];

  const focusAreas = [
    { 
      title: "Backend & DevOps", 
      skills: "FastAPI, Docker, Node.js, MongoDB, SQL, Firebase, REST API" 
    },
    { 
      title: "Automation & Tools", 
      skills: "n8n, Python Automation, Postman API Testing, Low/No Code Solutions" 
    },
    { 
      title: "Full-Stack Development", 
      skills: "React, React-Native (Expo), Tailwind CSS, Express.js" 
    }
  ];

  // --- REIMAGINED THEMES ---
  const colors = {
    midnight: { 
      bg: 'radial-gradient(circle at top, #1e293b 0%, #020617 100%)', 
      card: '#0f172a', 
      accent: '#38bdf8', 
      text: '#f8fafc',
      subtext: '#94a3b8',
      border: '1px solid #334155',
      glow: '0 0 20px rgba(56, 189, 248, 0.15)'
    },
    forest: { 
      bg: 'linear-gradient(180deg, #064e3b 0%, #022c22 100%)', 
      card: '#065f46', 
      accent: '#34d399', 
      text: '#ecfdf5',
      subtext: '#a7f3d0',
      border: '1px solid #064e3b',
      glow: '0 0 20px rgba(52, 211, 153, 0.1)'
    },
    glass: { 
      bg: 'linear-gradient(135deg, #0c0c0c 0%, #252525 100%)', 
      card: 'rgba(255, 255, 255, 0.05)', 
      accent: '#ffffff', 
      text: '#ffffff',
      subtext: '#cbd5e1',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      glass: true,
      glow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)'
    },
    crimson: { 
      bg: 'linear-gradient(45deg, #450a0a 0%, #180303 100%)', 
      card: '#7f1d1d', 
      accent: '#ef4444', 
      text: '#fef2f2',
      subtext: '#fca5a5',
      border: '1px solid #991b1b',
      glow: '0 0 30px rgba(239, 68, 68, 0.2)'
    },
    cyber: { 
      bg: '#000000', 
      card: '#0a0a0a', 
      accent: '#f0db4f', 
      text: '#ffffff',
      subtext: '#888888',
      border: '2px solid #f0db4f',
      glow: '0 0 15px #f0db4f'
    }
  };

  const currentTheme = colors[theme];
  const isMobile = windowWidth < 640;
  const isLaptop = windowWidth >= 1024;

  const baseCardStyle = {
    backgroundColor: currentTheme.card, 
    padding: isMobile ? '1.25rem' : '1.75rem', 
    borderRadius: '20px',
    border: currentTheme.border,
    backdropFilter: currentTheme.glass ? 'blur(16px)' : 'none',
    boxShadow: currentTheme.glow,
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={{ 
      background: currentTheme.bg, 
      color: currentTheme.text, 
      minHeight: '100vh', 
      fontFamily: theme === 'cyber' ? 'monospace' : 'Inter, system-ui, sans-serif',
      transition: 'all 0.6s ease',
      paddingBottom: '3rem',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      {/* --- THEME PICKER --- */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '2rem 1rem', 
        gap: '0.75rem',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1200px',
        zIndex: 10
      }}>
        {Object.keys(colors).map((t) => (
          <button 
            key={t}
            onClick={() => setTheme(t)}
            style={{
              backgroundColor: theme === t ? currentTheme.accent : 'transparent',
              color: theme === t ? '#000' : currentTheme.text,
              border: `1px solid ${currentTheme.accent}`,
              padding: '8px 16px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* --- HEADER --- */}
      <header style={{ 
        textAlign: 'center', 
        padding: isMobile ? '1rem' : '2rem 1rem 4rem',
        width: '100%',
        maxWidth: '1100px'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 12vw, 6rem)', 
          fontWeight: '900', 
          margin: 0, 
          color: currentTheme.accent,
          textShadow: theme === 'cyber' ? `3px 3px 0px ${currentTheme.text}` : 'none',
          lineHeight: 0.9,
          letterSpacing: '-2px'
        }}>
          {profile.name}
        </h1>
        <p style={{ 
          color: currentTheme.subtext, 
          fontSize: isMobile ? '1.1rem' : '1.4rem', 
          marginTop: '20px', 
          fontWeight: '600',
          opacity: 0.8
        }}>
          {profile.location}
        </p>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main style={{ 
        width: '100%',
        maxWidth: '1100px', 
        padding: isMobile ? '0 1.25rem' : '0 3rem',
        boxSizing: 'border-box',
        flex: 1
      }}>
        <div style={{ 
          display: 'flex', 
          gap: isMobile ? '2rem' : '4rem', 
          borderBottom: `2px solid ${currentTheme.card}`, 
          marginBottom: '3rem', 
          justifyContent: 'center' 
        }}>
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

        <div style={{ minHeight: '400px' }}>
          {activeTab === 'stack' ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
              gap: isMobile ? '10px' : '15px', 
              justifyContent: 'center' 
            }}>
              {stack.map(s => (
                <div key={s} style={{
                  ...baseCardStyle,
                  padding: '12px 10px', 
                  borderRadius: '12px',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  fontWeight: '700',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>{s}</div>
              ))}
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : (isLaptop ? '1fr 1fr 1fr' : '1fr 1fr'), 
              gap: '1.5rem' 
            }}>
              {focusAreas.map((c, i) => (
                <div key={i} style={baseCardStyle}>
                  <h3 style={{ 
                    color: currentTheme.accent, 
                    marginTop: 0, 
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    borderLeft: `4px solid ${currentTheme.accent}`,
                    paddingLeft: '12px'
                  }}>{c.title}</h3>
                  <p style={{ 
                    color: currentTheme.subtext, 
                    margin: 0, 
                    lineHeight: '1.8', 
                    fontSize: '1.05rem',
                    fontWeight: '500'
                  }}>{c.skills}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <footer style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '3rem' }}>
          <a 
            href={`https://github.com/${profile.github}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              backgroundColor: currentTheme.accent,
              color: '#000',
              textDecoration: 'none', 
              fontWeight: '900',
              padding: '18px 48px',
              borderRadius: '50px',
              display: 'inline-block',
              boxShadow: currentTheme.glow,
              fontSize: '1.1rem',
              letterSpacing: '1px'
            }}
          >
            GITHUB CODEBASE
          </a>
        </footer>
      </main>
    </div>
  );
}

const tabStyle = (isActive, theme, isMobile) => ({
  background: 'none',
  border: 'none',
  borderBottom: isActive ? `5px solid ${theme.accent}` : '5px solid transparent',
  color: isActive ? theme.accent : theme.subtext,
  padding: '15px 0',
  cursor: 'pointer',
  fontSize: isMobile ? '1rem' : '1.2rem',
  fontWeight: '900',
  transition: 'all 0.3s ease',
  letterSpacing: '2px',
  opacity: isActive ? 1 : 0.4
});