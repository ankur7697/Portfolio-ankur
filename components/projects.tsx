'use client'

import { FloatingShapes } from './floating-shapes'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'EcommHub',
      description: 'Full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard',
      image: '📦',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      role: 'Full Stack Developer',
      highlights: [
        'Built complete e-commerce infrastructure from database to UI',
        'Implemented Stripe payment gateway with 99.9% uptime',
        'Optimized database queries reducing load time by 60%',
        '50K+ monthly active users'
      ],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'RealTime Analytics',
      description: 'Real-time data visualization platform with WebSocket integration and interactive dashboards',
      image: '📊',
      technologies: ['React', 'Express.js', 'MongoDB', 'WebSockets', 'D3.js'],
      role: 'Backend & Frontend',
      highlights: [
        'Built WebSocket server handling 10K+ concurrent connections',
        'Real-time data processing and visualization',
        'Implemented multi-user collaboration features',
        'Sub-100ms latency for data updates'
      ],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'CloudDeploy Manager',
      description: 'Automated deployment platform with CI/CD integration, monitoring, and containerization',
      image: '☁️',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
      role: 'DevOps & Backend',
      highlights: [
        'Automated deployment pipeline reducing manual work by 85%',
        'Containerized microservices architecture',
        'Integrated monitoring and auto-scaling',
        'Deployed 1000+ applications'
      ],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section className="border-t border-border relative py-24 md:py-32 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <FloatingShapes />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-accent text-sm font-mono">// Featured Work</span>
          <h2 className="text-4xl font-bold mt-2">Notable Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Showcase of production-grade applications built across the full stack, from database architecture to user interface.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6 order-2 md:order-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl">{project.image}</span>
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest">{project.role}</p>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-accent flex-shrink-0 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-secondary/30 border border-border/50 rounded-full text-xs font-mono text-accent group-hover:border-accent/50 group-hover:bg-accent/10 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.link}
                      className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-accent/50 transition-all"
                    >
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="px-6 py-2.5 border border-border text-foreground rounded-lg font-medium text-sm hover:border-accent hover:bg-accent/10 transition-all"
                    >
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Visual */}
                <div className="order-1 md:order-2">
                  <div className="relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-xl blur-2xl group-hover/image:blur-3xl transition-all"></div>
                    <div className="relative p-8 rounded-xl border border-border bg-card/40 backdrop-blur-sm flex items-center justify-center min-h-96">
                      <div className="text-center space-y-4">
                        <div className="text-7xl">{project.image}</div>
                        <p className="text-sm text-muted-foreground font-mono">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
