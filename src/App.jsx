import React, { useState } from 'react';

export default function App() {
  // A simple piece of state to make the app interactive
  const [likes, setLikes] = useState(0);

  const skills = ["Python", "Machine Learning", "React", "SQL", "Automata Theory"];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#38bdf8', marginBottom: '10px' }}>Muhammad Ahmed</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>BS Data Science | Reg: DSAI231102033</p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '20px' }}>
        
        {/* Skills Section */}
        <section style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #38bdf8' }}>
          <h2 style={{ color: '#38bdf8' }}>Core Competencies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
            {skills.map(skill => (
              <span key={skill} style={{ backgroundColor: '#334155', padding: '8px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Interaction Section */}
        <section style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '15px', textAlign: 'center' }}>
          <h3>Appreciate my Work?</h3>
          <button 
            onClick={() => setLikes(likes + 1)}
            style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '15px 30px', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
          >
            👍 {likes} Likes
          </button>
        </section>

      </div>
    </div>
  );
}