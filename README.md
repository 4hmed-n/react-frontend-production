<div align="center">

# 🚀 Muhammad Ahmed's Portfolio

### Full-Stack AI Engineer | Data Scientist | ML Architect

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://your-portfolio-url.vercel.app)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

*An interactive portfolio showcasing full-stack development expertise with AI/ML integration, featuring real-time physics simulation and glassmorphic UI design.*

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
- 🎨 **Glassmorphic Design** - Modern UI with backdrop blur and transparency effects
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 📄 **PDF Resume Generator** - Download professional resume with one click
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🔄 **Auto-Deployment** - CI/CD pipeline with GitHub + Vercel

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

- **Physics-Based Skills**
  - Zero-gravity floating bubbles
  - Magnetic pulse interaction (double-click)
  - 100px invisible boundary walls
  - Smooth collision detection

</td>
<td width="50%">

### 📄 Dynamic Resume

- **Professional CV Layout**
  - Dark sidebar with cyan accents
  - Auto-updating content
  - One-click PDF download
  - Capitalized field descriptions

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
- Bubble Radius: 25px
- Wall Thickness: 100px (invisible)
- Iterations: 20/20 (position/velocity)
- Restitution: 0.8
- Magnetic Pulse: Inverse-distance force on double-click
```

### 3. **Resume PDF Generation**
```javascript
- Technology: html2canvas + jsPDF
- Format: A4 Portrait
- Scale: 2x for high resolution
- Background: White (#ffffff)
- Auto-updating from portfolio data
```

### 4. **Smart Navigation**
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
| **Build Time** | 2.76s | ✅ Optimized |
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

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=for-the-badge)](https://your-portfolio-url.vercel.app)

</div>