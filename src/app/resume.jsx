'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Resume() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.offsetWidth;
      const targetWidth = 850;
      const newScale = Math.min((parentWidth - 20) / targetWidth, 1);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="resume-section-wrapper"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden',
        padding: '40px 0'
      }}
    >
      <div
        className="resume-scaler"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: '850px',
          height: `${1200 * scale}px`,
          flexShrink: 0,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* YOUR EXACT 2-COLUMN RESUME CONTENT HERE */}
      </div>
    </div>
  );
}
