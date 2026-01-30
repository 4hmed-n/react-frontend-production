export default function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: '#38bdf8', marginBottom: '10px' }}>Muhammad Ahmed</h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>BS Data Science Student | GitHub: 4hmed-n</p>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#1e293b', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ borderBottom: '2px solid #38bdf8', paddingBottom: '10px' }}>Projects & Skills</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
          <li>🚀 <strong>React Development:</strong> Building cloud-integrated web apps.</li>
          <li>📊 <strong>Data Science:</strong> Analyzing complex datasets with Python.</li>
          <li>🤖 <strong>Automata Theory:</strong> Expert in Moore/Mealy Machines.</li>
        </ul>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button onClick={() => window.open('https://github.com/4hmed-n', '_blank')} style={{ backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            View My GitHub
          </button>
        </div>
      </section>
    </div>
  )
}