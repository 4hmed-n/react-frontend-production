import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── Lemniscate of Bernoulli parametric equation ─────────────────────────────
function lemniscate(t, cx, cy, a) {
  const cosT = Math.cos(t);
  const sinT = Math.sin(t);
  const denom = sinT * sinT + 1;
  return {
    x: cx + (a * Math.SQRT2 * cosT) / denom,
    y: cy + (a * Math.SQRT2 * cosT * sinT) / denom,
  };
}

// ─── HSL → RGB conversion ───────────────────────────────────────────────────
function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  };
}

const InfinityLoader = ({ onFadeComplete, triggerFade }) => {
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const fadingRef = useRef(false);

  // Trigger fade-out when triggerFade prop becomes true
  useEffect(() => {
    if (!triggerFade || fadingRef.current) return;
    fadingRef.current = true;

    const overlay = overlayRef.current;
    if (!overlay) {
      if (onFadeComplete) onFadeComplete();
      return;
    }

    overlay.style.transition = 'opacity 0.6s ease-in-out';
    // Force a reflow so the transition fires
    overlay.offsetHeight; // eslint-disable-line
    overlay.style.opacity = '0';

    const onEnd = () => {
      overlay.style.display = 'none';
      if (onFadeComplete) onFadeComplete();
    };
    overlay.addEventListener('transitionend', onEnd, { once: true });
    // Fallback in case transitionend doesn't fire
    const fallback = setTimeout(onEnd, 700);
    return () => {
      clearTimeout(fallback);
      overlay.removeEventListener('transitionend', onEnd);
    };
  }, [triggerFade, onFadeComplete]);

  useEffect(() => {
    // Lock scroll while loading
    const prevBodyOvf = document.body.style.overflow;
    const prevHtmlOvf = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Reduced motion check ──────────────────────────────────────────────
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── HiDPI canvas setup ────────────────────────────────────────────────
    const dpr = window.devicePixelRatio || 1;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(dpr, dpr);

    // ── Geometry — 220px wide on desktop, 140px on mobile ─────────────────
    const buildScene = () => {
      const CX = W / 2;
      const CY = H / 2;
      const isMobile = W < 768;
      const targetW = isMobile ? Math.min(140, W * 0.85) : Math.min(220, W * 0.5);
      const a = targetW / (2 * Math.SQRT2);

      const N = 800;
      const pts = new Array(N);
      const arcLen = new Float64Array(N);
      pts[0] = lemniscate(0, CX, CY, a);
      arcLen[0] = 0;
      for (let i = 1; i < N; i++) {
        const t = (i / N) * Math.PI * 2;
        pts[i] = lemniscate(t, CX, CY, a);
        const dx = pts[i].x - pts[i - 1].x;
        const dy = pts[i].y - pts[i - 1].y;
        arcLen[i] = arcLen[i - 1] + Math.sqrt(dx * dx + dy * dy);
      }
      const closeX = pts[0].x - pts[N - 1].x;
      const closeY = pts[0].y - pts[N - 1].y;
      const totalLen = arcLen[N - 1] + Math.sqrt(closeX * closeX + closeY * closeY);

      return { CX, CY, a, pts, arcLen, totalLen, N };
    };

    let scene = buildScene();

    // ── Arc-length → path index (binary search) ───────────────────────────
    function arcToIdx(s, arcLen, totalLen, N) {
      const sw = ((s % totalLen) + totalLen) % totalLen;
      let lo = 0, hi = N - 1;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        arcLen[mid] < sw ? (lo = mid + 1) : (hi = mid);
      }
      return lo;
    }

    // ── Pre-render ghost path to offscreen canvas ─────────────────────────
    let ghostCanvas = document.createElement('canvas');
    const buildGhost = () => {
      const { pts, N } = scene;
      ghostCanvas.width = W * dpr;
      ghostCanvas.height = H * dpr;
      const gCtx = ghostCanvas.getContext('2d');
      gCtx.scale(dpr, dpr);
      gCtx.beginPath();
      gCtx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < N; i++) gCtx.lineTo(pts[i].x, pts[i].y);
      gCtx.closePath();
      gCtx.strokeStyle = 'rgba(255,255,255,0.15)';
      gCtx.lineWidth = 5;
      gCtx.lineCap = 'round';
      gCtx.lineJoin = 'round';
      gCtx.shadowBlur = 6;
      gCtx.shadowColor = 'rgba(100, 180, 255, 0.35)';
      gCtx.stroke();
    };
    buildGhost();

    // ── Animation constants ───────────────────────────────────────────────
    const LOOP_SEC = 2.5;
    const DOT_SPACING = 28;
    const DOT_R = 1.5;

    let animId;
    let startTime = performance.now();

    // ── Draw dot grid ─────────────────────────────────────────────────────
    function drawDotGrid(lightX, lightY, currentHue) {
      const maxRadius = 180;

      const hueRgb = hslToRgb(currentHue, 100, 60);
      const tR = Math.round(255 * 0.8 + hueRgb.r * 0.2);
      const tG = Math.round(255 * 0.8 + hueRgb.g * 0.2);
      const tB = Math.round(255 * 0.8 + hueRgb.b * 0.2);

      const startX = Math.max(0, Math.floor((lightX - maxRadius) / DOT_SPACING)) * DOT_SPACING;
      const startY = Math.max(0, Math.floor((lightY - maxRadius) / DOT_SPACING)) * DOT_SPACING;
      const endX = Math.min(W, lightX + maxRadius);
      const endY = Math.min(H, lightY + maxRadius);

      for (let x = startX; x <= endX; x += DOT_SPACING) {
        for (let y = startY; y <= endY; y += DOT_SPACING) {
          const dist = Math.hypot(x - lightX, y - lightY);
          if (dist > maxRadius) continue;

          let opacity;
          if (dist <= 40) {
            opacity = 0.9;
          } else if (dist <= 100) {
            opacity = 0.9 - ((dist - 40) / 60) * 0.75;
          } else {
            opacity = 0.15 - ((dist - 100) / 80) * 0.15;
          }

          if (opacity <= 0.005) continue;

          ctx.beginPath();
          ctx.arc(x, y, DOT_R, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${tR},${tG},${tB},${Math.max(0, opacity)})`;
          ctx.fill();
        }
      }
    }

    // ── Main render loop ─────────────────────────────────────────────────
    const loop = (now) => {
      const elapsed = (now - startTime) / 1000;
      const { pts, arcLen, totalLen, N } = scene;

      const progress = prefersReducedMotion ? 0 : ((elapsed / LOOP_SEC) % 1);
      const arcPos = progress * totalLen;
      const headIdx = arcToIdx(arcPos, arcLen, totalLen, N);
      const head = pts[headIdx];

      // Hue: full 0→360 spectrum per loop
      const currentHue = progress * 360;
      const { r, g, b } = hslToRgb(currentHue, 100, 60);

      // 1. Clear — pure black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      // 2. Dot grid (drawn first, behind everything)
      drawDotGrid(head.x, head.y, currentHue);

      // 3. Ghost path
      ctx.drawImage(ghostCanvas, 0, 0, W, H);

      // 4. Glowing orb — 4 concentric layers

      // Layer 4 (outermost): ambient glow r=45, opacity=0.12, blur=28
      ctx.save();
      ctx.beginPath();
      ctx.arc(head.x, head.y, 45, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},0.12)`;
      ctx.shadowBlur = 28;
      ctx.shadowColor = `rgba(${r},${g},${b},0.12)`;
      ctx.fill();
      ctx.restore();

      // Layer 3: wide halo r=24, opacity=0.3, blur=12
      ctx.save();
      ctx.beginPath();
      ctx.arc(head.x, head.y, 24, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},0.3)`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `rgba(${r},${g},${b},0.3)`;
      ctx.fill();
      ctx.restore();

      // Layer 2: inner halo r=12, opacity=0.6, blur=4
      ctx.save();
      ctx.beginPath();
      ctx.arc(head.x, head.y, 12, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},0.6)`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = `rgba(${r},${g},${b},0.6)`;
      ctx.fill();
      ctx.restore();

      // Layer 1 (core): orb r=5, full opacity
      ctx.save();
      ctx.beginPath();
      ctx.arc(head.x, head.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgb(${r},${g},${b})`;
      ctx.fill();
      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    // ── Resize handler ───────────────────────────────────────────────────
    const onResize = () => {
      resize();
      scene = buildScene();
      buildGhost();
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = prevBodyOvf;
      document.documentElement.style.overflow = prevHtmlOvf;
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        backgroundColor: '#000000',
        overflow: 'hidden',
        opacity: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, display: 'block' }}
      />
    </div>
  );
};

export default InfinityLoader;
