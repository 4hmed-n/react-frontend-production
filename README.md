<div align="center">

# 🚀 Muhammad Ahmed's Portfolio

### Full-Stack AI Engineer | Data Scientist | ML Architect

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://react-frontend-production.vercel.app)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*An interactive portfolio showcasing full-stack development expertise with AI/ML integration, featuring real-time physics simulation, whirlpool transitions, and glassmorphic UI design.*

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Deployment](#-deployment) • [Contact](#-contact)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Key Implementations](#-key-implementations)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

---

## 🌟 Overview

A modern, interactive portfolio website built with **React 18** and **Vite**, featuring:

- 🎯 **Interactive Physics Engine** - Real-time 2D physics using Matter.js
- 🌀 **Kamui Vortex PFP** - Obito-inspired suck-in/suck-out spiral transitions
- 🎨 **Glassmorphic Design** - Modern UI with backdrop blur and transparency effects
- ⏳ **Cinematic Loading Screen** - Segmented progress bar with philosophical quotes
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 📄 **PDF Resume Generator** - Download professional resume with one click
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🔄 **Auto-Deployment** - CI/CD pipeline with GitHub + Vercel

---

## 🔄 Recent Updates (February 2026)

### Kamui Vortex PFP Transitions ⭐
- **Intro Animation**: Profile picture materializes via reverse Kamui vortex on page load — 1080° counter-rotation from scale(0) to full size (1s)
- **Click Interaction (Obito-style)**: On mouse down, PFP spirals into a singularity (1s suck-in → 1.5s hold at void → 1s suck-out), full 3.5s cycle
- **Vortex Physics**: `rotate(1080deg) scale(0)` with ease-in acceleration — starts slow, snaps aggressively into center like space-time ninjutsu
- **Three-Phase State Machine**: `vortexPhase` cycles through `idle → suck-in → suck-out` with re-trigger prevention
- **GPU Optimized**: `translateZ(0)`, `backface-visibility: hidden`, `will-change: transform`
- **Gentle Float**: PFP bobs up and down when idle, with independent hover glow preserved

### Cinematic Loading Screen ⭐
- **Segmented Progress Bar**: 30-segment bar with blue-to-purple gradient and ambient glow
- **Two-Phase Easing**: Slow start → accelerated finish for natural feel (6s duration)
- **System Command Text**: "FORGETTING PREVIOUS ITERATIONS" in monospace font with wide letter spacing
- **Philosophical Quotes**: 24 classic quotes (Socrates, Aristotle, Nietzsche, Lao Tzu, etc.) with Fisher-Yates shuffle cycling
- **PFP Preloading**: Loading screen waits for profile image to load before dismissing
- **UI Sync**: Header and sidebar hidden during loading, fade in after

### Responsive Physics Engine ⭐
- **Area-Based Sizing**: Ball radius scales with container area (packing factor 7)
- **ResizeObserver**: Container size tracked in real-time, physics bodies rescaled on resize
- **Billiard Physics**: Zero-gravity, high restitution (0.9), low air friction (0.0005), drag & throw
- **Faster Balls**: Higher initial velocity (±2) with MAX_SPEED cap of 7
- **Zero-Latency Hover**: Hover detection runs inside the rAF loop with direct DOM updates — no React re-renders
- **Snappy Drag**: Mouse constraint stiffness 1.0, damping 0.05 for instant pickup feel
- **Pointer-Events Fix**: Ball overlays set to `pointer-events-none` so Matter.js canvas handles drags

### Resume Enhancements
- **Fixed Desktop Layout**: Resume always renders at 850px with sidebar + content, scaled down via `transform: scale()` on smaller screens
- **No Horizontal Scrollbar**: Viewport wrapper width matches scaled size, centered with `margin: auto`
- **Profile Picture**: 128px circular photo with cyan border — visible in both web view and PDF download
- **Consistent PDF**: Fixed 850px clone, 3x scale capture (2550px raster), A4 format (210×297mm), multi-page support

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎭 Interactive Elements

- **Typewriter Effect**
  - 14 rotating professional titles
  - Customizable typing speed (30ms)
  - Smooth deletion animation (50ms)
  - Sky-blue blinking cursor

- **Kamui Vortex PFP** ⭐ *NEW*
  - Obito Uchiha-inspired Kamui suck-in/suck-out effect
  - 1080° spiral rotation + scale(0) vortex on click
  - Three-phase cycle: suck-in (1s) → hold (1.5s) → suck-out (1s)
  - Reverse Kamui intro on page load
  - Idle floating animation with hover glow

- **Responsive Physics-Based Skills**
  - Zero-gravity billiard ball physics
  - Area-based responsive ball sizing
  - ResizeObserver for real-time container tracking
  - Drag & throw interactions
  - Smart tooltip z-indexing

</td>
<td width="50%">

### 📄 Dynamic Resume

- **Professional CV Layout**
  - Dark sidebar with cyan accents
  - Auto-updating content
  - One-click PDF download
  - Capitalized field descriptions

- **Web Resume with Profile Picture**
  - Profile picture displays on web `/resume` page
  - Auto-hidden from PDF downloads
  - Cyan-bordered circular frame
  - Fallback emoji if image missing

- **Cinematic Loading Screen** ⭐ *NEW*
  - 30-segment progress bar with gradient glow
  - "FORGETTING PREVIOUS ITERATIONS" system text
  - 24 philosophical quotes (Fisher-Yates shuffle)
  - PFP preloading with minimum display time
  - Header/sidebar hidden during load

- **Smart Navigation**
  - Dynamic header button states
  - Smooth scroll animations
  - Interactive scroll indicators
  - Mobile-optimized menu

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<table>
<thead>
<tr>
<th width="25%">Category</th>
<th width="25%">Technology</th>
<th width="25%">Version</th>
<th width="25%">Purpose</th>
</tr>
</thead>
<tbody>

<tr>
<td><img src="https://img.shields.io/badge/-Frontend-61DAFB?style=flat-square&logo=react&logoColor=white" /></td>
<td><b>React</b></td>
<td>18.3.1</td>
<td>UI Framework</td>
</tr>

<tr>
<td><img src="https://img.shields.io/badge/-Build-646CFF?style=flat-square&logo=vite&logoColor=white" /></td>
<td><b>Vite</b></td>
<td>7.3.1</td>
<td>Build Tool</td>
</tr>

<tr>
<td><img src="https://img.shields.io/badge/-Styling-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" /></td>
<td><b>Tailwind CSS</b></td>
<td>3.4.3</td>
<td>Utility-First CSS</td>
</tr>

<tr>
<td><img src="https://img.shields.io/badge/-Physics-FF6B6B?style=flat-square&logo=javascript&logoColor=white" /></td>
<td><b>Matter.js</b></td>
<td>Latest</td>
<td>2D Physics Engine</td>
</tr>

<tr>
<td><img src="https://img.shields.io/badge/-Routing-CA4245?style=flat-square&logo=react-router&logoColor=white" /></td>
<td><b>React Router</b></td>
<td>Latest</td>
<td>Client-Side Routing</td>
</tr>

<tr>
<td><img src="https://img.shields.io/badge/-PDF-FF0000?style=flat-square&logo=adobe-acrobat-reader&logoColor=white" /></td>
<td><b>jsPDF + html2canvas</b></td>
<td>Latest</td>
<td>PDF Generation</td>
</tr>

<tr>
<td><img src="https://img.shields.io/badge/-Deployment-000000?style=flat-square&logo=vercel&logoColor=white" /></td>
<td><b>Vercel</b></td>
<td>Latest</td>
<td>Hosting & CI/CD</td>
</tr>

</tbody>
</table>

---

## 🚀 Installation

### Prerequisites

```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/4hmed-n/react-frontend-production.git

# Navigate to project directory
cd react-frontend-production

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
react-frontend-production/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.jsx        # App layout with navigation
│   │   ├── page.jsx          # Main portfolio page
│   │   ├── resume.jsx        # Resume page with PDF export
│   │   ├── ParticleBackground.jsx
│   │   └── SpaceBackground.jsx
│   ├── assets/               # Images and media
│   └── main.jsx              # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── vercel.json               # Vercel deployment config
└── README.md
```

---

## 🔧 Key Implementations

### 1. **Typewriter Component**
```javascript
- Typing Speed: 30ms
- Deletion Speed: 50ms
- Delay Between Strings: 2000ms
- Cursor Color: #38bdf8 (Sky Blue)
- 14 Professional Titles Rotation
```

### 2. **Physics Engine Configuration**
```javascript
- Engine: Matter.js with zero gravity {x: 0, y: 0}
- Ball Sizing: Area-based responsive (packing factor 7, cap 45px)
- Friction Air: 0.0005 | Friction: 0 | Restitution: 0.9
- Initial Velocity: (Math.random() - 0.5) * 4
- MAX_SPEED: 7
- Mouse Constraint: stiffness 1.0, damping 0.05
- ResizeObserver: Real-time container tracking with Body.scale
- Hover: Zero-latency detection in rAF loop, direct DOM updates (no React state)
- Tooltip Z-Index: 9999 via direct ref manipulation
```

### 3. **Kamui Vortex PFP Effect**
```javascript
- Suck-In: rotate(1080deg) scale(0), 1s ease-in (cubic-bezier 0.55, 0.06, 0.68, 0.19)
- Hold: 1.5s at void (PFP fully vanished)
- Suck-Out: rotate(-1080deg) scale(0→1), 1s ease-out (cubic-bezier 0.22, 1, 0.36, 1)
- Intro: Reverse Kamui on page load, 1s ease-out
- State: vortexPhase ('idle' → 'suck-in' → 'suck-out' → 'idle')
- Float: translate3d(0, -10px, 0), 6s ease-in-out infinite
- Hover: border-blue-400/50, shadow-blue-500/20 glow (independent)
- GPU: will-change: transform, backface-visibility: hidden
```

### 4. **Loading Screen**
```javascript
- Duration: 6s minimum display time
- Text: "FORGETTING PREVIOUS ITERATIONS" (font-mono, tracking-widest)
- Progress Bar: 30 segments, blue-purple gradient
- Easing: Two-phase (slow 0-60%, fast 60-100%)
- Quotes: 24 philosophical quotes, Fisher-Yates shuffle
- Preloading: PFP image preloaded before dismiss
- UI Sync: body.app-loading → --ui-opacity: 0
```

### 5. **Resume PDF Generation**
```javascript
- Technology: html2canvas + jsPDF
- Format: A4 Portrait (210×297mm)
- Clone Width: Fixed 850px (consistent across all devices)
- Capture Scale: 3x (2550px raster width)
- Layout: Always desktop (sidebar + content side-by-side)
- Multi-page: Canvas slicing for content exceeding one page
- Profile Picture: Included in PDF download
```

### 6. **Smart Navigation**
```javascript
- Home Page: "Resume" button (blue-cyan gradient)
- Resume Page: "Download PDF" button (yellow-orange gradient)
- Auto-detect current route with useLocation
- Smooth scroll animations
```

---

## ⚡ Performance

| Metric | Score | Status |
|--------|-------|--------|
| **Build Time** | ~5s | ✅ Optimized |
| **Bundle Size** | ~500KB (gzipped) | ✅ Efficient |
| **First Paint** | < 1s | ✅ Fast |
| **Lighthouse Score** | 95+ | ✅ Excellent |
| **Mobile Responsive** | 100% | ✅ Perfect |

### Optimization Techniques
- ✅ Vite's HMR for instant dev updates
- ✅ Code splitting with React Router
- ✅ Lazy loading for images
- ✅ CSS minification with Tailwind
- ✅ Gzip compression (69% reduction)
- ✅ Single-property CSS animations for GPU compositing
- ✅ PFP image preloading for seamless transitions

---

## 🌐 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Auto-Deployment Setup
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: `vite`
3. Webhook auto-created for continuous deployment

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to hosting provider
```

---

## 📞 Contact

<div align="center">

### Muhammad Ahmed
**Full-Stack AI Engineer | Data Scientist**

[![Email](https://img.shields.io/badge/Email-ahmednuman3044%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ahmednuman3044@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-4hmed--n-181717?style=for-the-badge&logo=github)](https://github.com/4hmed-n)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/muhammadahmed)
[![Phone](https://img.shields.io/badge/Phone-%2B92--333--8678444-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+923338678444)

📍 **Location:** Gulshan-e-Ravi, RYK, Punjab, Pakistan  
🎓 **Education:** BS Data Science, KFUEIT  
💼 **Experience:** 3+ Years in Full-Stack & AI Development

</div>

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Matter.js** - Physics engine
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Hosting and deployment
- **React Team** - Amazing framework
- **Vite Team** - Lightning-fast build tool

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Built with ❤️ by Muhammad Ahmed**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=for-the-badge)](https://react-frontend-production.vercel.app)

</div>