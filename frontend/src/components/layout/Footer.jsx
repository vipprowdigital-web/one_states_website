export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
            </svg>
          </div>
          <span className="text-white font-black text-lg tracking-widest uppercase">
            one states
          </span>
        </div>
        <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">
          &copy; 2026 One states. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Sitemap"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/30 text-xs font-bold tracking-wider hover:text-secondary transition-colors uppercase"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
