'use client'

export function FreelanceProjects() {
  const freelanceProjects = [
    {
      id: 1,
      title: 'Faith Tour Travel',
      website: 'www.faithtourtravel.com',
      description: 'Modern tour booking platform with seamless user experience',
      icon: '✈️',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Payment Gateway', 'Database'],
      highlights: [
        'Responsive booking interface with real-time availability',
        'Integrated payment processing for multiple tour packages',
        'Dynamic package management system',
        'Admin dashboard for tour and booking management',
        'Mobile-first responsive design'
      ]
    },
    {
      id: 2,
      title: 'Crystal Tour and Travel',
      website: 'crystaltourandtravel.com',
      description: 'Professional travel agency website with beautiful package showcase',
      icon: '🌍',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Email System', 'SEO'],
      highlights: [
        'Interactive tour packages showcase with detailed itineraries',
        'Real-time booking system with instant confirmations',
        'Email notification system for bookings and updates',
        'Customer testimonials and reviews section',
        'SEO optimized for travel keywords'
      ]
    }
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-accent text-sm font-mono">// Freelance Projects</span>
          <h2 className="text-4xl font-bold mt-2">Tour & Travel Websites</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Custom-built travel platforms featuring modern design, seamless booking experiences, and optimized user journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {freelanceProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"></div>

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{project.icon}</div>
                    <a
                      href={`https://${project.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-mono bg-accent/10 border border-accent/50 rounded-full text-accent hover:bg-accent/20 hover:border-accent transition-all duration-200"
                    >
                      Visit Website →
                    </a>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-accent text-sm font-mono">{project.website}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-secondary/50 border border-border/50 rounded text-foreground group-hover:border-accent/30 group-hover:bg-accent/5 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Key Features</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="pt-4 border-t border-border/30">
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:gap-3 transition-all duration-200 group/cta"
                  >
                    <span>Explore Project</span>
                    <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats or additional info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/20 border border-border/30 group hover:border-accent/50 hover:bg-secondary/30 transition-all">
            <p className="text-2xl font-bold text-accent">2</p>
            <p className="text-sm text-muted-foreground">Travel Platforms Built</p>
          </div>
          <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/20 border border-border/30 group hover:border-accent/50 hover:bg-secondary/30 transition-all">
            <p className="text-2xl font-bold text-accent">100%</p>
            <p className="text-sm text-muted-foreground">Responsive Design</p>
          </div>
          <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/20 border border-border/30 group hover:border-accent/50 hover:bg-secondary/30 transition-all">
            <p className="text-2xl font-bold text-accent">Live</p>
            <p className="text-sm text-muted-foreground">Production Ready</p>
          </div>
        </div>
      </div>
    </section>
  )
}
