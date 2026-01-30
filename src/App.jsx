import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('stack');

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

  const interests = [
    "Machine Learning/AI", "DevOps", "Fintech", "Robotic Process Automation"
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* App Header */}
      <header style={{ textAlign: 'center', padding: '4rem 1rem', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)' }}>
        <h1 style={{ fontSize: '3rem', color: '#38bdf8', margin: 0 }}>{profile.name}</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '10px' }}>@{profile.handle} | {profile.location}</p>
        <div style={{ marginTop: '20px' }}>
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>GitHub Profile →</a>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #1e293b', marginBottom: '2rem', justifyContent: 'center' }}>
          <button onClick={() => setActiveTab('stack')} style={tabStyle(activeTab === 'stack')}>Tech Stack</button>
          <button onClick={() => setActiveTab('focus')} style={tabStyle(activeTab === 'focus')}>Focus Areas</button>
          <button onClick={() => setActiveTab('interests')} style={tabStyle(activeTab === 'interests')}>Interests</button>
        </div>

        {activeTab === 'stack' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {stack.map(s => (
              <div key={s} style={tagStyle}>{s}</div>
            ))}
          </div>
        )}

        {activeTab === 'focus' && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {categories.map((c, i) => (
              <div key={i} style={cardStyle}>
                <h3 style={{ color: '#38bdf8', marginTop: 0 }}>{c.title}</h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>{c.skills}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'interests' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {interests.map(interest => (
              <div key={interest} style={tagStyle}>{interest}</div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

const tabStyle = (isActive) => ({
  background: 'none',
  border: 'none',
  borderBottom: isActive ? '3px solid #38bdf8' : '3px solid transparent',
  color: isActive ? '#38bdf8' : '#64748b',
  padding: '10px 0',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: '0.3s'
});

const tagStyle = {
  backgroundColor: '#1e293b', 
  padding: '10px 20px', 
  borderRadius: '8px', 
  border: '1px solid #334155',
  fontSize: '0.9rem'
};

const cardStyle = {
  backgroundColor: '#1e293b', 
  padding: '1.5rem', 
  borderRadius: '12px',
  border: '1px solid #334155'
};