'use client'

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '{ }',
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'SQL', 'GraphQL']
    },
    {
      category: 'Frameworks',
      icon: '→',
      skills: ['Express.js', 'REST APIs', 'GraphQL', 'Jest', 'Mocha']
    },
    {
      category: 'Databases',
      icon: '◈',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Query Optimization']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁',
      skills: ['AWS (EC2, RDS, SQS, Lambda)', 'Docker', 'CI/CD', 'Git', 'Linux']
    },
    {
      category: 'Security',
      icon: '🔐',
      skills: ['JWT', 'OAuth2', 'OWASP', 'Microservices', 'System Design']
    },
    {
      category: 'Additional',
      icon: '⚡',
      skills: ['API Versioning', 'Logging', 'Performance', 'WebSockets', 'Agile']
    }
  ]

  return (
    <section id="skills" className="border-t border-border relative py-24 md:py-32 overflow-hidden">
      {/* Animated background with code theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Code terminal background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <pre className="w-full h-full text-xs font-mono text-accent">
{`// $ npm run build:skills
[1] Compiling tech stack...
[2] Loading frameworks...
[3] Initializing databases...
[4] Deploying to cloud...
✓ Build complete in 3.2s`}
        </pre>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-accent text-sm font-mono">// Skills & Technologies</span>
          <h2 className="text-4xl font-bold mt-2">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="group p-6 rounded-lg border border-border bg-card/40 hover:bg-card/70 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-accent group-hover:scale-110 transition-transform">{category.icon}</span>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-2 group/skill">
                      <span className="text-accent text-xs font-bold">▸</span>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-accent transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-border/50 bg-gradient-to-r from-accent/5 to-secondary/5">
          <div className="space-y-4">
            <h3 className="font-mono text-accent text-sm">// Core Competencies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building production-grade backend systems with emphasis on scalability, security, and performance. 
              Expertise in designing APIs, optimizing databases, implementing caching strategies, managing cloud infrastructure, 
              and architecting microservices. Passionate about clean code, testing, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
