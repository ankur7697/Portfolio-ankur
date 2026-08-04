'use client'

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background/70 backdrop-blur-xl border-b border-accent/10"></div>
      
      <nav className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-pink-500 to-purple-500 flex items-center justify-center font-mono font-bold text-white text-sm group-hover:shadow-lg group-hover:shadow-indigo-500/40 transition-all">
            AS
          </div>
          <span className="font-mono text-base font-bold hidden sm:inline bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ankur.dev
          </span>
        </button>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-2">
          <button 
            onClick={() => scrollToSection('about')}
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
          >
            about
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
          >
            experience
          </button>
          <button 
            onClick={() => scrollToSection('freelance')}
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
          >
            work
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
          >
            projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="hidden md:block px-3 py-2 text-sm font-mono text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
          >
            skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium font-mono hover:shadow-lg hover:shadow-indigo-600/50 transition-all transform hover:scale-105 active:scale-95"
          >
            contact
          </button>
        </div>
      </nav>
    </header>
  )
}
