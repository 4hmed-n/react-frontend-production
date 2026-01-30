import React from 'react'

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#646cff' }}>Muhammad Ahmed's Portfolio</h1>
      <p>Registration Number: DSAI231102033</p>
      <p>BS Data Science Student</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert('Vibe Check: Success!')}>
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App