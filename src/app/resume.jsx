'use client';

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume() {
  const resumeRef = useRef();

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('Muhammad_Ahmed_Resume.pdf');
  };

  const personalInfo = {
    name: 'Muhammad Ahmed',
    email: 'ahmednuman3044@gmail.com',
    phone: '+92 444 5050',
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
        'Architected Scalable Full-Stack Applications using React, FastAPI, and PostgreSQL',
        'Implemented AI/ML Models for Predictive Analytics and Automation',
        'Led DevOps Infrastructure with Docker, Firebase, and CI/CD Pipelines',
        'Delivered Production-Grade Solutions with Cross-Functional Collaboration'
      ]
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-4 mx-auto max-w-5xl z-50 px-4 mb-8">
        <div className="rounded-full bg-slate-900/40 backdrop-blur-lg border border-white/10 px-8 py-4 shadow-2xl flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-sky-400 hover:text-cyan-300 transition-colors">
            Muhammad Ahmed
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 px-6 py-2.5 text-xs uppercase tracking-widest text-yellow-200 hover:from-yellow-500/30 hover:to-orange-500/30 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
        </div>
      </header>

      {/* Resume Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl mb-8" ref={resumeRef}>
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-80 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white p-8">
            {/* Profile */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-xl">
                👨‍💼
              </div>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-cyan-400">
                Contact
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">📧</span>
                  <span className="break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">📱</span>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">🔗</span>
                  <span className="break-all">{personalInfo.github}</span>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-cyan-400">
                Hard Skills
              </h3>
              <div className="space-y-2">
                {hardSkills.map((skill, idx) => (
                  <div key={idx} className="text-xs py-1.5 px-3 bg-slate-700/50 rounded-md border border-slate-600">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-cyan-400">
                Soft Skills
              </h3>
              <div className="space-y-2">
                {softSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-bold mb-4 text-cyan-400">
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
          <div className="flex-1 p-10">
            {/* Header */}
            <div className="mb-8 border-b-4 border-slate-800 pb-6">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{personalInfo.name}</h1>
              <p className="text-lg text-cyan-600 font-semibold">
                Full-Stack AI Engineer | Data Scientist
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Bridging The Gap Between Intelligent Systems and Elegant User Experiences. Passionate About Creating Scalable Solutions with Cutting-Edge AI and Intuitive Interfaces.
              </p>
              <div className="flex gap-4 text-sm text-gray-600 mt-4">
                <span>📍 Gulshan-e-Ravi, RYK, Punjab, Pakistan</span>
                <span>💼 3+ Years Experience</span>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                💼 WORK EXPERIENCE
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

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                🎓 EDUCATION
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
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
                📜 CERTIFICATES
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
  );
}
