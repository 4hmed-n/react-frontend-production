'use client';

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume() {
  const resumeRef = useRef();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    const element = resumeRef.current;

    // Clone resume and force desktop layout for PDF capture
    const clone = element.cloneNode(true);
    clone.classList.add('resume-print');
    clone.style.width = '980px';
    clone.style.maxWidth = '980px';
    clone.style.position = 'fixed';
    clone.style.left = '-9999px';
    clone.style.top = '0';
    clone.style.boxShadow = 'none';
    document.body.appendChild(clone);

    const resumeElement = clone;

    try {
      const rect = resumeElement.getBoundingClientRect();
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: rect.width,
        height: rect.height,
        windowWidth: rect.width,
        windowHeight: rect.height,
        scrollX: 0,
        scrollY: 0
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [rect.width, rect.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, rect.width, rect.height);

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
    }
  ];

  const education = [
    {
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

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 px-4 sm:px-6 resume-page ${
        isDownloading ? 'py-0 px-0 sm:px-0 bg-white resume-print' : ''
      }`}
    >
      {/* Resume Container */}
        <div className="resume-scroll overflow-x-auto">
          <div
            className="mx-auto bg-white shadow-2xl resume-container w-[980px]"
            ref={resumeRef}
            data-resume-root
          >
            <div className="flex flex-row resume-layout">
          {/* Left Sidebar */}
          <div className="flex-none w-[300px] bg-[#0f2230] text-white p-6 sm:p-8 border-r-4 border-cyan-400 resume-sidebar">
            {/* Profile */}
            <div className="mb-8" data-hide-in-pdf>
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-cyan-300">
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
          <div className="flex-1 min-w-0 p-6 sm:p-8 md:p-10">
            {/* Header */}
            <div className="mb-8 border-b-4 border-slate-800 pb-6">
              <div className="flex items-start gap-4 md:block">
                {/* Mobile left-side icons */}
                <div className="flex flex-col gap-2 md:hidden">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="h-9 w-9 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-600 flex items-center justify-center text-sm"
                    aria-label="Gmail"
                  >
                    ✉️
                  </a>
                  <a
                    href="https://github.com/4hmed-n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full border border-slate-200/60 bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-semibold"
                    aria-label="GitHub"
                  >
                    GH
                  </a>
                  <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full border border-blue-400/50 bg-blue-500/10 text-blue-600 flex items-center justify-center text-sm"
                    aria-label="Docker"
                  >
                    🐳
                  </a>
                  <a
                    href="#"
                    className="h-9 w-9 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-700 flex items-center justify-center text-xs font-bold"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-slate-900 mb-2">{personalInfo.name}</h1>
                  <p className="text-lg text-cyan-600 font-semibold">
                    Full-Stack AI Engineer | Data Scientist
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Bridging the gap between intelligent systems and elegant user experiences. I architect scalable full-stack solutions powered by machine learning, transforming complex data into intuitive, production-ready applications that drive real-world impact.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mt-4">
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

      <style>{`
        @media print {
          body { background: #ffffff !important; }
          .resume-page { background: #ffffff !important; padding: 0 !important; }
          .resume-container { box-shadow: none !important; max-width: 210mm !important; margin: 0 auto !important; }
          .resume-sidebar { border-right: none !important; }
        }
        .resume-print {
          background: #ffffff !important;
        }
          .resume-print .resume-container {
          width: 980px !important;
          max-width: 980px !important;
          margin: 0 auto !important;
          box-shadow: none !important;
        }
        .resume-print .resume-layout {
          flex-direction: row !important;
        }
      `}</style>
    </div>
  );
}
