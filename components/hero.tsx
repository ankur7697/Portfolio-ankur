export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Code background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="code-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <text x="10" y="30" className="text-xs" fill="currentColor" fontFamily="monospace">const app</text>
              <text x="10" y="60" className="text-xs" fill="currentColor" fontFamily="monospace">function()</text>
              <text x="10" y="90" className="text-xs" fill="currentColor" fontFamily="monospace">return {}</text>
              <text x="10" y="120" className="text-xs" fill="currentColor" fontFamily="monospace">socket.on</text>
              <text x="10" y="150" className="text-xs" fill="currentColor" fontFamily="monospace">async/await</text>
              <text x="10" y="180" className="text-xs" fill="currentColor" fontFamily="monospace">build()</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#code-pattern)" />
        </svg>
      </div>

      {/* Animated glowing orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="space-y-8">
          {/* Label */}
          <div className="inline-block">
            <span className="text-accent text-sm font-mono tracking-wider">$ whoami</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance">
              <span className="text-accent">Full Stack</span> Developer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Crafting end-to-end solutions from responsive UIs to scalable cloud infrastructure. Full-stack expertise across React, Node.js, AWS, and modern databases.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 py-12 border-y border-border">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-accent font-mono">3+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-accent font-mono">100+</p>
              <p className="text-sm text-muted-foreground">APIs Built</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-accent font-mono">10+</p>
              <p className="text-sm text-muted-foreground">Tech Stack</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors">
              Download CV
            </button>
          </div>

          {/* Social links */}
          <div className="flex gap-8 pt-8">
            <a
              href="https://github.com/ankur7697"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ankursharma712/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
            <a
              href="mailto:ankursharma7986@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-mono">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.182.092-.92.35-1.545.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}


