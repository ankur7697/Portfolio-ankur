export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-border/20 backdrop-blur-md bg-background/80 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center font-mono font-bold text-accent-foreground text-sm group-hover:shadow-lg group-hover:shadow-accent/30 transition-all">
            AS
          </div>
          <span className="font-mono text-sm font-semibold hidden sm:inline">ankur.dev</span>
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#about" className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors">
            about
          </a>
          <a href="#experience" className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors">
            experience
          </a>
          <a href="#skills" className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors">
            skills
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium font-mono hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105"
          >
            contact
          </a>
        </div>
      </nav>
    </header>
  )
}
