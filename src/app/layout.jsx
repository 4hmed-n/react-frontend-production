import './globals.css';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#050510] text-white">
      <div className="pointer-events-none fixed inset-0 bg-radial-gradient-fade" />
      <nav className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-20 py-6 flex items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-tighter uppercase">
            Muhammad Ahmed
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-gray-300">
            <a className="hover:text-white transition-colors" href="#projects">Projects</a>
            <a className="hover:text-white transition-colors" href="#about">About</a>
            <a className="hover:text-white transition-colors" href="#skills">Skills</a>
            <a className="hover:text-white transition-colors" href="#contact">Contact</a>
          </div>
          <a
            href="mailto:ahmednuman3044@gmail.com"
            className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors"
          >
            Email me
          </a>
        </div>
      </nav>
      <main className="relative z-10">{children}</main>
    </div>
  );
}