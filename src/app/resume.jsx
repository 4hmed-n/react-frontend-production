'use client';

import React, { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        body { background-color: #0f172a !important; }
        .no-print { display: none !important; }
        .sticky { position: static !important; }
        section { page-break-inside: avoid; }
      }
      @page {
        margin: 0.5in;
        size: letter;
      }
    `;
    document.head.appendChild(style);
    return () => {
      try { document.head.removeChild(style); } catch(e) {}
    };
  }, []);

  const downloadPDF = () => {
    window.print();
  };

  const skills = [
    { name: 'React', cat: 'Frontend' },
    { name: 'TypeScript', cat: 'Frontend' },
    { name: 'FastAPI', cat: 'Backend' },
    { name: 'Python', cat: 'Backend' },
    { name: 'Docker', cat: 'DevOps' },
    { name: 'Firebase', cat: 'DevOps' },
    { name: 'Git', cat: 'DevOps' },
    { name: 'PostgreSQL', cat: 'Database' },
    { name: 'MongoDB', cat: 'Database' },
    { name: 'TensorFlow', cat: 'AI/ML' },
    { name: 'PyTorch', cat: 'AI/ML' },
    { name: 'Express.js', cat: 'Backend' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-purple-500 to-pink-500',
      'DevOps': 'from-orange-500 to-red-500',
      'Database': 'from-green-500 to-emerald-500',
      'AI/ML': 'from-indigo-500 to-blue-500'
    };
    return colors[category] || 'from-slate-500 to-slate-600';
  };

  const categories = Array.from(new Set(skills.map(s => s.cat)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-white rounded-full top-10 left-10 opacity-60"></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full top-32 right-20 opacity-40"></div>
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full bottom-40 left-1/3 opacity-50"></div>
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-1/2 right-1/4 opacity-40"></div>
      </div>

      <div className="relative z-10">
        <header className="sticky top-4 mx-auto max-w-5xl z-50 px-4 no-print">
          <div className="rounded-full bg-slate-900/40 backdrop-blur-lg border border-white/10 px-8 py-4 shadow-2xl hover:bg-slate-900/50 transition-colors">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Muhammad Ahmed
              </h1>
              <button
                onClick={downloadPDF}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 px-5 py-2 text-xs uppercase tracking-widest text-yellow-200 hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300"
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-12">
          <section className="mb-16">
            <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-white/10 p-8 shadow-2xl">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-white mb-2">Muhammad Ahmed</h1>
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Software Engineer & AI Architect
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    Bridging the gap between intelligent systems and elegant user experiences. Passionate about creating scalable solutions with cutting-edge AI and intuitive interfaces.
                  </p>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>📍 Gulshan-e-Ravi, RYK, Punjab, Pakistan</span>
                    <span>💼 3+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white">WORK EXPERIENCE</h3>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-slate-800/30 border border-white/5 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">Software Engineer</h4>
                  <span className="text-yellow-400 text-sm font-semibold">2021 - Present</span>
                </div>
                <p className="text-cyan-400 text-sm mb-3">Full-Stack Development | AI Integration</p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Architected scalable full-stack applications using React, FastAPI, and PostgreSQL</li>
                  <li>• Implemented AI/ML models for predictive analytics and automation</li>
                  <li>• Led DevOps infrastructure with Docker, Firebase, and CI/CD pipelines</li>
                  <li>• Delivered production-grade solutions with cross-functional collaboration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white">EDUCATION</h3>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-white/5 p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-white">BS Data Science</h4>
                <span className="text-yellow-400 text-sm font-semibold">Class 5A</span>
              </div>
              <p className="text-cyan-400 text-sm">KFUEIT - Iqra University Islamabad</p>
              <p className="text-slate-300 text-sm mt-2">ML, data analysis, statistical modeling with real-world applications.</p>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white">SKILLS</h3>
            </div>
            <div className="space-y-6">
              {categories.map(cat => (
                <div key={cat}>
                  <h4 className="text-sm font-bold text-yellow-400 mb-3 uppercase">{cat}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.filter(s => s.cat === cat).map(skill => (
                      <div
                        key={skill.name}
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(skill.cat)} text-white text-sm font-semibold shadow-lg`}
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">PROJECTS</h3>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-slate-800/30 border border-white/5 p-6">
                <h4 className="text-lg font-bold text-white mb-2">Employee Burnout Analysis</h4>
                <p className="text-cyan-400 text-sm mb-3">Python | Pandas | Scikit-learn | Predictive ML</p>
                <p className="text-slate-300 text-sm">Developed predictive model analyzing 10,000+ employee records, identifying burnout patterns, providing actionable HR insights.</p>
              </div>
              <div className="rounded-lg bg-slate-800/30 border border-white/5 p-6">
                <h4 className="text-lg font-bold text-white mb-2">Apple Leaf Disease Detection</h4>
                <p className="text-cyan-400 text-sm mb-3">Computer Vision | TensorFlow | CNN | 94% Accuracy</p>
                <p className="text-slate-300 text-sm">Image classification system for detecting apple leaf diseases. Processed 5,000+ images with deep learning.</p>
              </div>
              <div className="rounded-lg bg-slate-800/30 border border-white/5 p-6">
                <h4 className="text-lg font-bold text-white mb-2">Interactive Physics Portfolio</h4>
                <p className="text-cyan-400 text-sm mb-3">React | Matter.js | Tailwind CSS | Physics Engine</p>
                <p className="text-slate-300 text-sm">Real-time 2D rigid-body physics with soft-body deformations, glassmorphic UI, 60fps performance optimization.</p>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/10 pt-8 pb-16 text-center text-slate-400 text-sm">
            <p>📧 hello@muhammadahmed.dev | 🔗 github.com/4hmed-n | 💼 linkedin.com/in/muhammadahmed</p>
            <p className="text-xs mt-4 text-slate-500">Built with React, Tailwind CSS & Matter.js Physics Engine</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
