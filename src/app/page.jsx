'use client';
import { useState, useEffect } from 'react';

const TechIcons = {
  'Python': '🐍',
  'Data Science': '📊',
  'ML/AI': '🤖',
  'JavaScript': '🟨',
  'React': '⚛️',
  'MongoDB': '🍃',
  'Docker': '🐳',
  'Git/GitHub': '🐙',
};

const MainSkills = [
  'Python',
  'Data Science',
  'ML/AI',
  'JavaScript',
  'React',
  'MongoDB',
  'Docker',
  'Git/GitHub',
];

function SkillCircle({ skill, icon }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-28 h-28 rounded-full border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
        isHovered ? 'border-blue-400/50 shadow-lg shadow-blue-500/20 scale-110' : ''
      }`}
    >
      <span className="text-4xl mb-2">{icon}</span>
      <span 
        className={`text-xs font-medium text-gray-300 text-center px-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {skill}
      </span>
    </div>
  );
}

export default function Page() {
  const [pfpHovered, setPfpHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollExplore, setShowScrollExplore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowScrollExplore(window.scrollY < 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home" className="min-h-screen w-full">
      <section className="mx-auto max-w-7xl px-6 md:px-20 pt-28 md:pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid gap-10 md:grid-cols-2 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-blue-400">Muhammad Ahmed</span>
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-light text-gray-300 font-display">
              Creative Developer
            </p>
            <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
              Full-Stack Developer and Data Science enthusiast from Pakistan. I build intelligent web applications combining modern frontend frameworks with machine learning and data-driven backends.
            </p>
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-block rounded-full bg-blue-500 text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-blue-600 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl transition-all duration-300 ${pfpHovered ? 'blur-2xl scale-110' : ''}`} />
              <div 
                onMouseEnter={() => setPfpHovered(true)}
                onMouseLeave={() => setPfpHovered(false)}
                className={`relative w-52 h-52 md:w-64 md:h-64 rounded-full border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl flex items-center justify-center transition-all duration-300 ${pfpHovered ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' : ''}`}
              >
                <div className="text-6xl text-gray-600">👤</div>
              </div>
            </div>
          </div>
        </div>
        {showScrollExplore && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-gray-500 flex flex-col items-center gap-2 transition-opacity duration-300">
            <span>Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-blue-400">Skills</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              'Python',
              'SQL',
              'JavaScript',
              'React',
              'React Native',
              'MongoDB',
              'Express.js',
              'Node.js',
              'C++',
              'C#',
              'SQLite',
              'HTML5',
              'CSS3',
              'CSS',
              'FastAPI',
              'REST API',
              'Tailwind',
              'Expo',
              'Computer Vision',
              'Particle',
              'Docker',
              'n8n',
              'Git/GitHub',
              'Postman',
              'Firebase',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-xl bg-slate-900/60 px-3 py-2 text-xs uppercase tracking-widest text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              I'm Muhammad Ahmed, a passionate Creative Developer based in Pakistan. I specialize in building immersive web experiences that blend art with technology and data science.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              With expertise in Python, Machine Learning, and modern web frameworks like React and FastAPI, I transform data into actionable insights and create elegant, performant solutions. I'm passionate about solving complex problems and building products that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3">
                <span className="text-sm font-medium text-blue-400">Data Science</span>
              </div>
              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 px-5 py-3">
                <span className="text-sm font-medium text-purple-400">ML Engineering</span>
              </div>
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3">
                <span className="text-sm font-medium text-cyan-400">Full-Stack Dev</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400">developer.js</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-gray-500">const <span className="text-blue-400">developer</span> = {'{'}</div>
              <div className="ml-4 text-gray-400">name: <span className="text-green-400">"Muhammad Ahmed"</span>,</div>
              <div className="ml-4 text-gray-400">role: <span className="text-green-400">"Full-Stack Developer"</span>,</div>
              <div className="ml-4 text-gray-400">expertise: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"ML/AI"</span>, <span className="text-green-400">"React"</span>],</div>
              <div className="ml-4 text-gray-400">passionate: <span className="text-orange-400">true</span>,</div>
              <div className="ml-4 text-gray-400">innovative: <span className="text-orange-400">true</span>,</div>
              <div className="ml-4 text-gray-400">available: <span className="text-purple-400">function</span>() {'{'}</div>
              <div className="ml-8 text-gray-500">return <span className="text-orange-400">true</span>;</div>
              <div className="ml-4 text-gray-400">{'}'}</div>
              <div className="text-gray-500">{'}'};</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400">Core Technologies</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">Main Tech Stack</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My primary toolkit for building powerful, modern applications from concept to deployment.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {MainSkills.map((skill) => (
            <SkillCircle key={skill} skill={skill} icon={TechIcons[skill]} />
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400">Selected Work</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">Projects</h2>
          </div>
          <p className="text-gray-400 max-w-md">
            A mix of product launches, interactive websites, and visual experiments designed to
            elevate digital presence.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Nebula Studio',
              type: 'Brand Experience',
              color: 'from-blue-600 to-cyan-400',
            },
            {
              title: 'Orbit Commerce',
              type: 'E-commerce Platform',
              color: 'from-purple-600 to-blue-500',
            },
            {
              title: 'Lumen Labs',
              type: 'Product Showcase',
              color: 'from-cyan-500 to-blue-600',
            },
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-blue-500/30 transition-all"
            >
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.color} opacity-80`} />
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">{project.type}</p>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Motion-driven landing experiences, immersive product visuals, and refined UI systems.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#1a1030]/80 to-slate-950/90 p-6 md:p-8 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="relative grid gap-8 md:gap-12 md:grid-cols-[1fr_1.2fr]">
            {/* Left Side - Get in Touch */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Email</p>
                  <a href="mailto:ahmednuman3044@gmail.com" className="text-white hover:text-blue-400 transition-colors text-sm">
                    ahmednuman3044@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Location</p>
                  <p className="text-gray-300 text-sm">RYK, Punjab, Pakistan</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Social</p>
                  <a href="https://github.com/4hmed-n" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-gray-400">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-3">contact.exe</span>
              </div>

              <form className="p-4 md:p-6 space-y-4">
                <div className="flex items-center gap-2 text-purple-200 text-xs">
                  <span>➔</span>
                  <p className="uppercase tracking-[0.2em]">Send a message</p>
                </div>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Name</span>
                  <input
                    className="w-full border-b border-white/20 bg-transparent py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300"
                    placeholder="Your name"
                    type="text"
                    name="name"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Email</span>
                  <input
                    className="w-full border-b border-white/20 bg-transparent py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300"
                    placeholder="Your email"
                    type="email"
                    name="email"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Message</span>
                  <textarea
                    className="w-full border-b border-white/20 bg-transparent py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 resize-none"
                    placeholder="Your message"
                    rows="2"
                    name="message"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/60 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                >
                  Send
                  <span>✉️</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section mt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-20 py-12 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold tracking-tight mb-3">Muhammad Ahmed</h3>
              <p className="text-sm text-gray-400">Creative Developer</p>
              <p className="text-sm text-gray-400 mt-2">RYK, Punjab, Pakistan</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Navigation</h4>
              <div className="flex flex-col gap-2">
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="/resume.pdf" className="text-sm text-gray-400 hover:text-white transition-colors">Resume</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/4hmed-n" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="mailto:ahmednuman3044@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">Email</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              © 2026 Muhammad Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}