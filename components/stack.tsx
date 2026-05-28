'use client'

export function Stack() {
  const categories = [
    {
      title: 'Frontend',
      icon: '⚛️',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand']
    },
    {
      title: 'Backend',
      icon: '🔧',
      items: ['Node.js', 'Express.js', 'FastAPI', 'GraphQL', 'REST APIs', 'Microservices']
    },
    {
      title: 'Database',
      icon: '🗄️',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB']
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      items: ['Docker', 'Kubernetes', 'AWS (EC2, RDS, S3)', 'CI/CD Pipelines', 'GitHub Actions', 'Vercel']
    },
    {
      title: 'Tools & Testing',
      icon: '🧪',
      items: ['Jest', 'Vitest', 'Cypress', 'Git', 'Linux', 'VS Code']
    },
    {
      title: 'Security & Performance',
      icon: '🔐',
      items: ['JWT', 'OAuth2', 'HTTPS/TLS', 'Caching', 'CDN', 'Load Balancing']
    }
  ]

  return (
    <section id="stack" className="border-t border-border relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm font-mono">// Full Stack Technology</span>
          <h2 className="text-4xl font-bold mt-2">Complete Arsenal</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Proficient across the entire development stack from frontend interfaces to cloud infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 hover:border-accent/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{category.icon}</span>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 group/item">
                      <span className="text-accent text-xs font-bold">▸</span>
                      <span className="text-sm text-muted-foreground group-hover/item:text-accent transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card/30">
            <p className="text-3xl font-bold text-accent font-mono">3+</p>
            <p className="text-sm text-muted-foreground mt-2">Years of Experience</p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/30">
            <p className="text-3xl font-bold text-accent font-mono">15+</p>
            <p className="text-sm text-muted-foreground mt-2">Technologies Mastered</p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/30">
            <p className="text-3xl font-bold text-accent font-mono">50K+</p>
            <p className="text-sm text-muted-foreground mt-2">Users Served</p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/30">
            <p className="text-3xl font-bold text-accent font-mono">10M+</p>
            <p className="text-sm text-muted-foreground mt-2">Requests Handled</p>
          </div>
        </div>
      </div>
    </section>
  )
}
