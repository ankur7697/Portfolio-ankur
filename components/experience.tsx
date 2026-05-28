export function Experience() {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Prithvee Propmart',
      location: 'Remote',
      period: 'April 2025 — Present',
      highlights: [
        'Designed and developed scalable backend services using Node.js, Express.js, and MySQL for a real estate platform',
        'Built and versioned RESTful APIs for listings, search, filters, pagination, and lead capture with validation and error handling',
        'Optimized database queries, indexing, and caching strategies to improve API performance and response time',
        'Implemented JWT-based authentication and role-based access control for secure API access (OWASP best practices)',
        'Integrated AWS services (EC2, RDS) for deployment and database management',
        'Set up CI/CD pipelines and wrote unit/integration tests (Jest) to ensure code quality and reliability'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Globallogic',
      location: 'Noida',
      period: 'Aug 2023 — Jul 2024',
      highlights: [
        'Developed backend integration services using Node.js, REST APIs, and GraphQL for ATS platform integrations',
        'Built event-driven workflows using AWS SQS and Lambda for reliable data synchronization across systems',
        'Designed middleware services to handle large-scale data exchange with proper retry mechanisms and error handling',
        'Implemented OAuth2 and JWT-based authentication for secure communication between services',
        'Maintained API versioning, logging, and monitoring to support highly available systems',
        'Wrote unit and integration tests to ensure stability of integrations and reduce production issues'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Globallogic',
      location: 'Noida',
      period: 'June 2022 — July 2023',
      highlights: [
        'Developed backend services using Node.js and Express.js for user management, prescriptions, and order processing',
        'Used MongoDB for handling high-volume, time-sensitive medical data with optimized queries',
        'Implemented real-time order tracking using event-driven architecture and WebSockets',
        'Designed scalable APIs with proper validation, logging, and error handling',
        'Ensured system reliability by debugging production issues and improving performance bottlenecks',
        'Followed secure coding practices aligned with OWASP standards'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Real11',
      location: 'Noida',
      period: 'June 2021 — May 2022',
      highlights: [
        'Developed REST APIs using Node.js and Express.js for real-time match data and user interactions',
        'Integrated third-party sports APIs and handled high-frequency data ingestion',
        'Designed MongoDB schemas for efficient storage and fast retrieval under high load',
        'Implemented logging and monitoring to track system performance and resolve production issues',
        'Collaborated with cross-functional teams and participated in Agile development cycles'
      ]
    }
  ]

  return (
    <section id="experience" className="border-t border-border relative py-24 md:py-32 overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <pre className="w-full h-full text-xs font-mono text-accent overflow-hidden">
{`# git log --oneline
a1f2d9e Fix database indexing
b3c4f5a Implement caching layer
c5d6e7b Add OAuth2 authentication
d7e8f9a Optimize API response
e9f0a1b Deploy to production
f1g2h3i Performance improvement
---
Total Commits: 3+ Years`}
        </pre>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-accent text-sm font-mono">// Work Experience — 3+ Years</span>
          <h2 className="text-4xl font-bold mt-2">Professional Journey</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group border-l-2 border-border hover:border-accent pl-8 py-6 relative transition-all duration-300">
              <div className="absolute -left-[11px] top-8 w-5 h-5 bg-secondary border-2 border-border group-hover:border-accent group-hover:bg-accent rounded-full transition-all"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute -left-8 top-8 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-all duration-300"></div>
              
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{exp.title}</h3>
                    <span className="text-accent text-sm font-mono">@</span>
                    <span className="text-accent font-mono font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
                    <span className="px-3 py-1.5 bg-secondary/30 border border-border/50 rounded group-hover:bg-accent/10 group-hover:border-accent/50 transition-all">{exp.location}</span>
                    <span className="px-3 py-1.5 bg-secondary/30 border border-border/50 rounded group-hover:bg-accent/10 group-hover:border-accent/50 transition-all">{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="text-accent mt-0.5 flex-shrink-0 font-bold">»</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
