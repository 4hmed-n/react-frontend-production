'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume() {
  const containerRef = useRef(null);
  const resumeRef = useRef();
  const [isDownloading, setIsDownloading] = useState(false);
  const [resumeScale, setResumeScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState('auto');

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    const element = resumeRef.current;

    // Clone resume and force a fixed desktop layout for consistent PDF on ALL devices
    const clone = element.cloneNode(true);
    clone.classList.add('resume-print');

    // Fixed dimensions — same on every device
    const FIXED_WIDTH = 850;
    const CAPTURE_SCALE = 3; // High-res capture (3x = 2550px wide raster)

    clone.style.cssText = `
      width: ${FIXED_WIDTH}px !important;
      max-width: ${FIXED_WIDTH}px !important;
      min-width: ${FIXED_WIDTH}px !important;
      position: fixed;
      left: -9999px;
      top: 0;
      box-shadow: none;
      transform: none !important;
      zoom: 1 !important;
      -webkit-text-size-adjust: 100%;
      font-size: 16px;
    `;
    document.body.appendChild(clone);

    // Let the browser layout the clone before capturing
    await new Promise(r => setTimeout(r, 100));

    const resumeElement = clone;

    try {
      const canvas = await html2canvas(resumeElement, {
        scale: CAPTURE_SCALE,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: FIXED_WIDTH,
        height: resumeElement.scrollHeight,
        windowWidth: FIXED_WIDTH,
        windowHeight: resumeElement.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });

      const imgData = canvas.toDataURL('image/png');

      // A4 dimensions in mm
      const A4_WIDTH_MM = 210;
      const A4_HEIGHT_MM = 297;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Scale image to fill A4 width, calculate proportional height
      const imgAspect = canvas.height / canvas.width;
      const pdfWidth = A4_WIDTH_MM;
      const pdfHeight = pdfWidth * imgAspect;

      // If content fits on one page
      if (pdfHeight <= A4_HEIGHT_MM) {
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
      } else {
        // Multi-page: slice the canvas into A4-height chunks
        const pageCanvasHeight = (A4_HEIGHT_MM / pdfHeight) * canvas.height;
        let remainingHeight = canvas.height;
        let position = 0;
        let page = 0;

        while (remainingHeight > 0) {
          if (page > 0) pdf.addPage();

          const sliceHeight = Math.min(pageCanvasHeight, remainingHeight);
          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = canvas.width;
          pageCanvas.height = sliceHeight;
          const ctx = pageCanvas.getContext('2d');
          ctx.drawImage(canvas, 0, position, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

          const pageImgData = pageCanvas.toDataURL('image/png');
          const sliceHeightMM = (sliceHeight / canvas.height) * pdfHeight;
          pdf.addImage(pageImgData, 'PNG', 0, 0, pdfWidth, sliceHeightMM, undefined, 'FAST');

          position += sliceHeight;
          remainingHeight -= sliceHeight;
          page++;
        }
      }

      pdf.save('Muhammad_Ahmed_Resume.pdf');
    } catch (error) {
      console.error('PDF download failed:', error);
    } finally {
      if (clone && clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
      setIsDownloading(false);
    }
  };

  const personalInfo = {
    name: 'Muhammad Ahmed',
    email: 'ahmednuman3044@gmail.com',
    phone: '+92-333-8678444',
    location: 'Gulshan-e-Ravi, RYK, Punjab, Pakistan',
    github: 'github.com/4hmed-n'
  };

  const hardSkills = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'FastAPI', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker',
    'Git', 'Firebase', 'Tailwind CSS', 'REST API', 'ML/AI'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication',
    'Leadership', 'Time Management'
  ];

  const languages = [
    { lang: 'English', level: 'Bilingual Proficiency' },
    { lang: 'Urdu', level: 'Native' },
    { lang: 'Punjabi', level: 'Native' }
  ];

  const workExperience = [
    {
      title: 'Full-Stack AI Engineer',
      company: 'Freelance / Contract',
      period: '2021 - Present',
      description: [
        'Architected scalable full-stack applications using React, FastAPI, and PostgreSQL',
        'Implemented AI/ML models for predictive analytics and automation workflows',
        'Led DevOps infrastructure with Docker, Firebase, and CI/CD pipelines',
        'Delivered production-grade solutions with cross-functional collaboration'
      ]
    }
  ];

  const projects = [
    {
      name: 'Nebula Studio',
      type: 'Brand Experience',
      description: 'Motion-driven landing experience with immersive UI and polished interaction design.'
    },
    {
      name: 'Orbit Commerce',
      type: 'E-commerce Platform',
      description: 'High-conversion storefront with responsive UX and scalable architecture.'
    },
    {
      name: 'Lumen Labs',
      type: 'Product Showcase',
      description: 'Product-led storytelling with dynamic visuals and modern design system.'
    {
      name: 'Myo AI',
      type: 'Multimodal Fusion Framework',
      description: 'Myo AI is a multimodal fusion framework for advanced cardiovascular risk stratification. It integrates imaging, clinical, and biosignal data using deep learning to provide accurate, explainable risk predictions for heart disease. Built for clinicians and researchers, Myo AI enables seamless analysis and visualization of complex patient data. [Live Demo](https://myo-ai.streamlit.app) | [GitHub](https://github.com/4hmed-n/Myo-AI)'
    },
      degree: 'BS in Data Science',
      institution: 'KFUEIT',
      description: 'Specialized in Machine Learning, Data Analysis, and Statistical Modeling with Focus on Real-World Applications'
    }
  ];

  const certificates = [
    'Advanced Python Programming',
    'Machine Learning Specialization',
    'Full-Stack Web Development',
    'Cloud Architecture and DevOps'
  ];

  useEffect(() => {
    if (isDownloading) return;

    const updateScale = () => {
      if (!containerRef.current || !resumeRef.current) return;

      const parentWidth = containerRef.current.clientWidth;
      const baseWidth = 850;
      const scale = Math.min(parentWidth / baseWidth, 1);
      setResumeScale(scale);
      setViewportHeight(`${resumeRef.current.scrollHeight * scale}px`);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [isDownloading]);

  return (
    <div
      ref={containerRef}
      className={`resume-section-wrapper min-h-screen bg-transparent resume-page ${
        isDownloading ? 'py-0 px-0 sm:px-0 bg-white resume-print' : ''
      }`}
      style={{
        width: '100%',
        maxWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '40px 0'
      }}
    >
      <div
        className="resume-viewport"
        style={!isDownloading ? { 
          width: `${850 * resumeScale}px`,
          height: viewportHeight, 
          overflow: 'hidden',
          margin: '0 auto'
        } : undefined}
      >
        <div
          id="resume-scaler"
          className="bg-white shadow-2xl resume-container"
          ref={resumeRef}
          data-resume-root
          style={!isDownloading ? { 
            width: '850px',
            transform: `scale(${resumeScale})`, 
            transformOrigin: 'top left' 
          } : { width: '850px' }}
        >
            <div className="flex flex-row resume-layout">
          {/* Left Sidebar */}
          <div className="flex-none w-[300px] bg-[#0f2230] text-white p-8 border-r-4 border-cyan-400 resume-sidebar">
            {/* Profile */}
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-cyan-300">
                <img 
                  src="/images/profile.jpg" 
                  alt="Muhammad Ahmed" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%2321313d"/%3E%3Ctext x="50" y="60" font-size="50" text-anchor="middle" fill="%23fff"%3E👨‍💼%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cyan-300">
                Contact
              </h3>
              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-300">📧</span>
                  <span className="break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-300">📱</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-300">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-300">🔗</span>
                  <span className="break-all">{personalInfo.github}</span>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cyan-300">
                Hard Skills
              </h3>
              <div className="space-y-2">
                {hardSkills.map((skill, idx) => (
                  <div key={idx} className="text-xs py-1.5 px-3 bg-white/5 rounded-md border border-white/10">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cyan-300">
                Soft Skills
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-cyan-300">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((item, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-semibold">{item.lang}</div>
                    <div className="text-gray-400 text-[10px]">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0 p-8">
            {/* Header */}
            <div className="mb-8 border-b-4 border-slate-800 pb-6">
              <div>
                <div className="flex-1 items-start text-left">
                  <h1 className="text-4xl font-bold text-slate-900 mb-2 resume-name">{personalInfo.name}</h1>
                  <p className="text-lg text-cyan-600 font-semibold resume-title">
                    Full-Stack AI Engineer | Data Scientist
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Bridging the gap between intelligent systems and elegant user experiences. I architect scalable full-stack solutions powered by machine learning, transforming complex data into intuitive, production-ready applications that drive real-world impact.
                  </p>
                  <div className="flex flex-wrap justify-start gap-4 text-sm text-gray-600 mt-4">
                    <span>📍 {personalInfo.location}</span>
                    <span>💼 3+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                WORK EXPERIENCE
              </h2>
              <div className="space-y-6">
                {workExperience.map((job, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">{job.title}</h3>
                        <p className="text-sm text-cyan-600 font-semibold">{job.company}</p>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 ml-4">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">{project.name}</h3>
                        <p className="text-xs text-cyan-600 font-semibold">{project.type}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-bold text-slate-800">{edu.degree}</h3>
                    <p className="text-sm text-cyan-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-xs text-gray-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                CERTIFICATES
              </h2>
              <ul className="space-y-2">
                {certificates.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
@media print {
  body { background: #ffffff !important; }
  .resume-page { background: #ffffff !important; padding: 0 !important; }
  .resume-container {
    box-shadow: none !important;
    width: 210mm !important;
    max-width: 210mm !important;
    height: 297mm !important;
    margin: 0 auto !important;
    transform: none !important;
  }
  .resume-scaler {
    width: 210mm !important;
    transform: none !important;
  }
  .social-icons,
  .social-icon,
  .socials,
  .nav,
  .navbar,
  .nav-links,
  nav {
    display: none !important;
  }
  .resume-name,
  .resume-title {
    text-align: left !important;
  }
  .resume-sidebar { border-right: none !important; }
  .resume-container .md\\:hidden { display: none !important; }
}
.resume-print {
  background: #ffffff !important;
}
.resume-print .resume-container {
  width: 850px !important;
  max-width: 850px !important;
  min-width: 850px !important;
  margin: 0 auto !important;
  box-shadow: none !important;
  background: #ffffff !important;
  transform: none !important;
}
.resume-print .resume-layout {
  flex-direction: row !important;
}
.resume-print .resume-sidebar {
  width: 300px !important;
  border-right: 4px solid #22d3ee !important;
  border-bottom: none !important;
}
.resume-print .resume-name {
  font-size: 2.25rem !important;
}
.resume-print .resume-title {
  font-size: 1.125rem !important;
}
`
        }}
      />
    </div>
  );
}
