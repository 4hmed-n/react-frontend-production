export default function Page() {
  return (
    <div id="home" className="min-h-screen w-full">
      <section className="mx-auto max-w-7xl px-6 md:px-20 pt-28 md:pt-32 pb-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400">Frontend Developer</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Muhammad
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Ahmed
              </span>
              building modern web experiences
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
              Focused on clean UI, interactive experiences, and performant front-end systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/4hmed-n"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium uppercase tracking-widest hover:scale-105 transition-transform"
              >
                View GitHub
              </a>
              <a
                href="mailto:ahmednuman3044@gmail.com"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-gray-500">
              <span>Based in RYK, Punjab, Pakistan</span>
              <span>Open to opportunities</span>
              <span>Focused on UI/UX</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-widest text-gray-400">Featured</p>
              <h2 className="mt-4 text-2xl font-bold">Portfolio Experience</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                A curated selection of interface explorations, motion systems, and immersive digital
                narratives.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 text-sm font-bold">01</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Immersive Visuals</p>
                  <p className="text-xs text-gray-500">Three.js + Motion</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-300 text-sm font-bold">02</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Product Storytelling</p>
                  <p className="text-xs text-gray-500">UI Strategy + Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-xs uppercase tracking-widest text-gray-500">Scroll to explore</div>
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
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-blue-500/30 transition-all"
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

      <section id="about" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-widest text-blue-400">About</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tighter">Designing with intention</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              I blend strategy, aesthetics, and engineering to craft immersive digital experiences.
              From brand storytelling to real-time motion, every interaction is deliberate.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <span className="text-sm uppercase tracking-widest text-gray-400">Experience</span>
                <span className="text-lg font-bold">5+ Years</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                <span className="text-sm uppercase tracking-widest text-gray-400">Projects</span>
                <span className="text-lg font-bold">45+ Delivered</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold">Strategy & Motion</h3>
              <p className="mt-3 text-gray-400">
                Transforming product narratives into clear, cinematic UI flows that guide users with
                clarity and intent.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold">Systems Thinking</h3>
              <p className="mt-3 text-gray-400">
                Building scalable design systems and front-end architectures that grow with your team.
              </p>
            </div>
          </div>
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
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            'React',
            'TypeScript',
            'Three.js',
            'Tailwind CSS',
            'Framer Motion',
            'GSAP',
            'Node.js',
            'MongoDB',
            'Figma',
            'WebGL',
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-widest text-gray-200 hover:border-cyan-400 hover:text-cyan-300 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400">Contact</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">Let’s build together</h2>
            <p className="mt-4 text-gray-400 max-w-md">
              Reach out anytime. You can email me directly or connect on GitHub.
            </p>
          </div>
          <form className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-4">
            <input
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              placeholder="Your name"
              type="text"
              name="name"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              placeholder="Email address"
              type="email"
              name="email"
            />
            <textarea
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
              placeholder="Project details"
              rows="4"
              name="message"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:ahmednuman3044@gmail.com"
                className="w-full text-center rounded-full bg-blue-500 px-6 py-3 text-sm font-medium uppercase tracking-widest hover:bg-blue-600 transition-colors"
              >
                Email me
              </a>
              <a
                href="https://github.com/4hmed-n"
                className="w-full text-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
            </div>
          </form>
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