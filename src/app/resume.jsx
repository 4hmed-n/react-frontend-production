'use client';

import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume() {
  const resumeRef = useRef();
  const location = useLocation();

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
        'Architected scalable full-stack applications using React, FastAPI, and PostgreSQL',
        'Implemented AI/ML models for predictive analytics and automation',
        'Led DevOps infrastructure with Docker, Firebase, and CI/CD pipelines',
        'Delivered production-grade solutions with cross-functional collaboration'
      ]
    }
  ];

  const education = [
    {
      degree: 'BS in Data Science',
      institution: 'KFUEIT',
      description: 'Specialized in machine learning, data analysis, and statistical modeling with focus on real-world applications'
    }
  ];

  const certificates = [
    'Advanced Python Programming',
    'Machine Learning Specialization',
    'Full-Stack Web Development',
    'Cloud Architecture and DevOps'
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleDownloadPDF}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-2xl" ref={resumeRef}>
        <div className="flex">
          <div className="w-80 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white p-8">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-xl">
                MA
              </div>
            </div>

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

          <div className="flex-1 p-10">
            <div className="mb-8 border-b-4 border-slate-800 pb-6">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{personalInfo.name}</h1>
              <p className="text-lg text-cyan-600 font-semibold">
                Full-Stack AI Engineer | Data Scientist
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Innovative software engineer specializing in AI/ML solutions and full-stack development. 
                Passionate about creating scalable, intelligent systems that drive real-world impact.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
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

            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
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

            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-cyan-500 pb-2">
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
  );
}
