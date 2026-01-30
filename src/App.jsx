import React, { useState, useEffect } from 'react';

export default function App() {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('stack');
  const [isOpenForWork, setIsOpenForWork] = useState(true);
  const [theme, setTheme] = useState('midnight'); // 'midnight' or 'forest'

  // --- DATA ---
  const profile = {
    name: "Ahmed Numan",
    handle: "4hmed",
    location: "Punjab, Pakistan",
    github: "4hmed-n"
  };

  const stack = [
    "Python", "SQL", "JavaScript", "React", "React-Native", 
    "MongoDB", "Express.js", "Node.js", "C++", "C#", 
    "SQLite", "FastAPI", "Tailwind", "Docker", "Firebase"
  ];

  const categories = [
    { title: "Backend & DevOps", skills: "FastAPI, Docker, Node.js, MongoDB, SQL" },
    { title: "Automation & Tools", skills: "n8n, Python, Postman, Firebase" },
    { title: "Frontend & Mobile", skills: "React, React-Native, Tailwind CSS, Expo.io" }
  ];

  // --- THEME CONFIG ---
  const colors = {
    midnight: { bg: '#0f172a', card: '#1e293b', accent: '#38bdf8', text: '#f8fafc' },
    forest: { bg: '#064e3b', card: '#065f46', accent: '#34d399', text: '#ecfdf5' }
  };

  const currentTheme = colors[theme];

  return (
    <div style={{ 
      backgroundColor: currentTheme.bg, 
      color: currentTheme.text, 
      minHeight: '100vh', 
      fontFamily: 'Inter, system-ui, sans-serif',
      transition: 'all 0.4s ease'
    }}>
      
      {/* --- TOP CONTROL BAR --- */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', gap: '1rem' }}>
        <button 
          onClick={() => setTheme(theme === 'midnight' ? 'forest' : 'midnight')}
          style={controlBtnStyle(currentTheme)}
        >
          {theme === 'midnight' ? '🌲 Forest Theme' : '🌌 Midnight Theme'}
        </button>
      </div>

      {/* --- APP HEADER --- */}
      <header style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '5px 15px', 
          borderRadius: '20px', 
          backgroundColor: isOpenForWork ? '#10b98133' : '#ef444433',
          color: isOpenForWork ? '#10b981' : '#ef4444',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          cursor: 'pointer'
        }} onClick={() => setIsOpenForWork(!isOpenForWork)}>
          {isOpenForWork ? '● Open for Projects' : '○ Currently Busy'}
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: 0, color: currentTheme.accent }}>
          {profile.name}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginTop: '10px' }}>
          @{profile.handle} | {profile.location}
        </p>
      </header>

      {/* --- MAIN NAVIGATION --- */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem 2rem' }}>
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          borderBottom: `1px solid ${currentTheme.card}`, 
          marginBottom: '2rem', 
          justifyContent: 'center' 
        }}>
          {['stack', 'focus', 'interests'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              style={tabStyle(activeTab === tab, currentTheme)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC CONTENT --- */}
        <div style={{ minHeight: '300px' }}>
          {activeTab === 'stack' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {stack.map(s => (
                <div key={s} style={tagStyle(currentTheme)}>{s}</div>
              ))}
            </div>
          )}

          {activeTab === 'focus' && (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {categories.map((c, i) => (
                <div key={i} style={cardStyle(currentTheme)}>
                  <h3 style={{ color: currentTheme.accent, marginTop: 0 }}>{c.title}</h3>
                  <p style={{ color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>{c.skills}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'interests' && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
                Machine Learning/AI • DevOps • Fintech • RPA
              </p>
            </div>
          )}
        </div>

        {/* --- FOOTER --- */}
        <footer style={{ textAlign: 'center', marginTop: '4rem', paddingBottom: '2rem' }}>
          <a 
            href={`https://github.com/${profile.github}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              color: currentTheme.accent, 
              textDecoration: 'none', 
              fontWeight: 'bold',
              padding: '10px 20px',
              border: `1px solid ${currentTheme.accent}`,
              borderRadius: '8px'
            }}
          >
            View GitHub Codebase
          </a>
        </footer>
      </main>
    </div>
  );
}

// --- SHARED STYLES ---
const tabStyle = (isActive, theme) => ({
  background: 'none',
  border: 'none',
  borderBottom: isActive ? `3px solid ${theme.accent}` : '3px solid transparent',
  color: isActive ? theme.accent : '#64748b',
  padding: '10px 0',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: '0.3s'
});

const tagStyle = (theme) => ({
  backgroundColor: theme.card, 
  padding: '10px 20px', 
  borderRadius: '8px', 
  border: '1px solid #334155',
  fontSize: '0.9rem',
  fontWeight: '500'
});

const cardStyle = (theme) => ({
  backgroundColor: theme.card, 
  padding: '1.5rem', 
  borderRadius: '12px',
  border: '1px solid #334155',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
});

const controlBtnStyle = (theme) => ({
  backgroundColor: theme.card,
  color: theme.text,
  border: 'none',
  padding: '8px 15px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: '600'
});