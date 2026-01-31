import { useState, useEffect } from 'react';

const TechIcons = {
  'Python': '🐍',
  'Data Science': '📊',
  'ML/AI': '🤖',
  'JavaScript': '⚛️',
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

export default function Page() {
  const [pfpHovered, setPfpHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
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
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-gray-500 flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400">Tech Stack</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">Zero-Gravity Arsenal</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A focused toolkit for building high-end digital experiences, from prototyping to production.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Python', size: 'w-24 h-24' },
              { label: 'Data Science', size: 'w-28 h-28' },
              { label: 'ML/AI', size: 'w-24 h-24' },
              { label: 'SQL', size: 'w-20 h-20' },
              { label: 'JavaScript', size: 'w-24 h-24' },
              { label: 'React', size: 'w-20 h-20' },
              { label: 'React Native', size: 'w-24 h-24' },
              { label: 'MongoDB', size: 'w-20 h-20' },
              { label: 'Express.js', size: 'w-20 h-20' },
              { label: 'Node.js', size: 'w-20 h-20' },
              { label: 'C++', size: 'w-16 h-16' },
              { label: 'C#', size: 'w-16 h-16' },
              { label: 'SQLite', size: 'w-20 h-20' },
              { label: 'HTML5', size: 'w-20 h-20' },
              { label: 'CSS3', size: 'w-20 h-20' },
              { label: 'CSS', size: 'w-16 h-16' },
              { label: 'FastAPI', size: 'w-20 h-20' },
              { label: 'REST API', size: 'w-20 h-20' },
              { label: 'Tailwind', size: 'w-20 h-20' },
              { label: 'Expo', size: 'w-16 h-16' },
              { label: 'Computer Vision', size: 'w-24 h-24' },
              { label: 'Particle', size: 'w-20 h-20' },
              { label: 'Docker', size: 'w-20 h-20' },
              { label: 'n8n', size: 'w-16 h-16' },
              { label: 'Git/GitHub', size: 'w-24 h-24' },
              { label: 'Postman', size: 'w-20 h-20' },
              { label: 'Firebase', size: 'w-20 h-20' },
            ].map((bubble) => (
              <div
                key={bubble.label}
                className={`flex flex-col ${bubble.size} items-center justify-center rounded-3xl border border-white/15 bg-slate-900/60 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-200 shadow-inner shadow-white/5 hover:border-blue-400/50 hover:bg-slate-800/80 transition-all`}
              >
                <span className="text-2xl mb-1">{TechIcons[bubble.label] || '🔧'}</span>
                <span className="px-2 text-center leading-tight">{bubble.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
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

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-widest text-blue-400">Interests</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                'Beginner Friendly',
                'Databases',
                'Design',
                'DevOps',
                'Education',
                'Enterprise',
                'Fintech',
                'Health',
                'IoT',
                'Low/No Code',
                'Machine Learning/AI',
                'Mobile',
                'Productivity',
                'Robotic Process Automation',
                'Social Good',
                'Web',
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-xl bg-slate-900/60 px-3 py-2 text-xs uppercase tracking-widest text-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
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
        <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#1a1030]/80 to-slate-950/90 p-6 md:p-10 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 text-xs text-gray-400">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-3">contact_protocol.exe</span>
            </div>

            <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] px-6 md:px-10 py-10">
              <form className="space-y-8">
                <div className="flex items-center gap-3 text-purple-200">
                  <span className="text-xl">➔</span>
                  <p className="text-sm uppercase tracking-[0.2em]">Initialize transmission...</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Identity</span>
                    <input
                      className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300"
                      placeholder="Enter Name"
                      type="text"
                      name="name"
                    />
                  </label>
                  <label className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Frequency (Email)</span>
                    <input
                      className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300"
                      placeholder="Enter Email"
                      type="email"
                      name="email"
                    />
                  </label>
                </div>

                <label className="space-y-3 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Data Packet (Message)</span>
                  <textarea
                    className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 resize-none"
                    placeholder="Type your message here..."
                    rows="4"
                    name="message"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md border border-cyan-400/60 bg-cyan-500/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                  >
                    Send Message
                    <span aria-hidden="true">✉️</span>
                  </button>
                  <a
                    href="mailto:ahmednuman3044@gmail.com"
                    className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-cyan-200"
                  >
                    or email directly
                  </a>
                </div>
              </form>

              <div className="relative hidden md:block">
                <svg
                  className="absolute right-0 top-2 h-52 w-52 text-cyan-300/40"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  <circle cx="100" cy="100" r="2" fill="currentColor" />
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={100 + Math.cos((i * Math.PI) / 6) * 80}
                      y2={100 + Math.sin((i * Math.PI) / 6) * 80}
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section mt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-gray-400">
          <span>Muhammad Ahmed © 2026</span>
          <span>Frontend Developer</span>
        </div>
      </footer>
    </div>
  );
}