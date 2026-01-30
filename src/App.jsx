import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('stack');
  const [theme, setTheme] = useState('glass'); // Options: 'midnight', 'forest', 'glass', 'crimson', 'nord'

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

  const colors = {
    midnight: { 
      bg: '#0f172a', 
      card: '#1e293b', 
      accent: '#38bdf8', 
      text: '#f8fafc',
      subtext: '#94a3b8',
      glass: false 
    },
    forest: { 
      bg: '#064e3b', 
      card: '#065f46', 
      accent: '#34d399', 
      text: '#ecfdf5',
      subtext: '#a7f3d0',
      glass: false 
    },
    glass: { 
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      card: 'rgba(255, 255, 255, 0.1)', 
      accent: '#ffffff', 
      text: '#ffffff',
      subtext: '#e2e8f0',
      glass: true 
    },
    crimson: { 
      bg: '#450a0a', 
      card: '#7f1d1d', 
      accent: '#f87171', 
      text: '#fef2f2',
      subtext: '#fca5a5',
      glass: false 
    },
    nord: { 
      bg: '#2e3440', 
      card: '#3b4252', 
      accent: '#88c0d0', 
      text: '#eceff4',
      subtext: '#d8dee9',
      glass: false 
    }
  };

  const currentTheme = colors[theme];

  const baseCardStyle = {
    backgroundColor: currentTheme.card, 
    padding: '1.75rem', 
    borderRadius: '16px',
    border: currentTheme.glass ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #334155',
    backdropFilter: currentTheme.glass ? 'blur(12px)' : 'none',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ 
      background: currentTheme.bg, 
      color: currentTheme.text, 
      minHeight: '100vh', 
      fontFamily: 'Inter, system-ui, sans-serif',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      paddingBottom: '4rem'
    }}>
      
      {/* Theme Selection Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '1.5rem', 
        gap: '0.75rem',
        flexWrap: 'wrap' 
      }}>
        {Object.keys(colors).map((t) => (
          <button 
            key={t}
            onClick={() => setTheme(t)}
            style={{
              backgroundColor: theme === t ? currentTheme.accent : currentTheme.card,
              color: theme === t ? (t === 'glass' ? '#000' : currentTheme.bg) : currentTheme.text,
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '6px 12px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'capitalize',
              transition: 'all 0.2s'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Header */}
      <header style={{ textAlign: 'center', padding: '2rem 1rem 3rem' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
          fontWeight: '900', 
          margin: 0, 
          color: currentTheme.accent,
          textShadow: currentTheme.glass ? '0 4px 10px rgba(0,0,0,0.2)' : 'none'
        }}>
          {profile.name}
        </h1>
        <p style={{ color: currentTheme.subtext, fontSize: '1.2rem', marginTop: '10px', fontWeight: '500' }}>
          @{profile.handle} | {profile.location}
        </p>
      </header>

      {/* Navigation */}
      <main style={{ maxWidth: '850px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ 
          display: 'flex', 
          gap: '2.5rem', 
          borderBottom: `2px solid ${currentTheme.card}`, 
          marginBottom: '2.5rem', 
          justifyContent: 'center' 
        }}>
          <button 
            onClick={() => setActiveTab('stack')} 
            style={tabStyle(activeTab === 'stack', currentTheme)}
          >
            Tech Stack
          </button>
          <button 
            onClick={() => setActiveTab('focus')} 
            style={tabStyle(activeTab === 'focus', currentTheme)}
          >
            Focus Areas
          </button>
        </div>

        {/* Content */}
        <div style={{ minHeight: '350px' }}>
          {activeTab === 'stack' ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {stack.map(s => (
                <div key={s} style={{
                  ...baseCardStyle,
                  padding: '10px 20px', 
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>{s}</div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {focusAreas.map((c, i) => (
                <div key={i} style={baseCardStyle}>
                  <h3 style={{ color: currentTheme.accent, marginTop: 0, fontSize: '1.4rem' }}>{c.title}</h3>
                  <p style={{ color: currentTheme.subtext, margin: 0, lineHeight: '1.7', fontSize: '1rem' }}>{c.skills}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '5rem' }}>
          <a 
            href={`https://github.com/${profile.github}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              backgroundColor: currentTheme.accent,
              color: theme === 'glass' || theme === 'nord' ? '#1a202c' : currentTheme.bg,
              textDecoration: 'none', 
              fontWeight: '800',
              padding: '14px 32px',
              borderRadius: '12px',
              display: 'inline-block',
              boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
            }}
          >
            GitHub Profile
          </a>
        </footer>
      </main>
    </div>
  );
}

const tabStyle = (isActive, theme) => ({
  background: 'none',
  border: 'none',
  borderBottom: isActive ? `4px solid ${theme.accent}` : '4px solid transparent',
  color: isActive ? theme.accent : theme.subtext,
  padding: '12px 0',
  cursor: 'pointer',
  fontSize: '1.1rem',
  fontWeight: '800',
  transition: '0.3s',
  opacity: isActive ? 1 : 0.6
});