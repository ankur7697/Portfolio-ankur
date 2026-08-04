export function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Prithvee Propmart',
      location: 'Remote',
      period: 'April 2025 — Present',
      website: 'prithvee.com',
      highlights: [
        'Built responsive Next.js frontend for real estate platform with React components and Tailwind CSS',
        'Designed and developed scalable backend services using Node.js, Express.js, and MySQL',
        'Created RESTful APIs for listings, search, filters, pagination with frontend/backend integration',
        'Implemented JWT authentication with secure session management across frontend and backend',
        'Optimized database queries and API responses, improving load time by 50%',
        'Set up CI/CD pipelines and wrote comprehensive tests (Jest, Cypress) for quality assurance'
      ]
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Faith Tour Travel',
      location: 'Remote',
      period: 'Recent',
      website: 'www.faithtourtravel.com',
      highlights: [
        'Built responsive Next.js and React frontend for tour booking platform with modern UI/UX',
        'Designed intuitive booking interface with real-time availability management',
        'Implemented payment gateway integration for seamless transaction processing',
        'Created dynamic package listing and filtering system for multiple tour destinations',
        'Built admin dashboard for managing tours, bookings, and customer inquiries',
        'Optimized for mobile responsiveness ensuring smooth experience across all devices'
      ]
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Crystal Tour and Travel',
      location: 'Remote',
      period: 'Recent',
      website: 'crystaltourandtravel.com',
      highlight: 'Built responsive Next.js and React frontend for tour booking platform with modern UI/UX',
      highlights: [
        'Developed modern, responsive website for travel company with Next.js and Tailwind CSS',
        'Created interactive tour packages showcase with detailed itineraries and pricing',
        'Built booking system with real-time availability and instant confirmation',
        'Implemented email notification system for booking confirmations and travel updates',
        'Designed customer testimonials and reviews section to build trust and engagement',
        'Integrated SEO optimization to improve search visibility for travel keywords'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Globallogic',
      location: 'Noida',
      period: 'Aug 2023 — Jul 2024',
      highlights: [
        'Built React admin dashboard UI for ATS platform with interactive data visualization',
        'Developed backend integration services using Node.js, REST APIs, and GraphQL',
        'Created responsive UI components with Tailwind CSS and implemented real-time updates via WebSockets',
        'Built event-driven workflows using AWS SQS and Lambda for data synchronization',
        'Implemented OAuth2 authentication across frontend forms and backend API endpoints',
        'Wrote comprehensive tests (Jest, React Testing Library) ensuring frontend/backend reliability'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Globallogic',
      location: 'Noida',
      period: 'June 2022 — July 2023',
      highlights: [
        'Designed React UI for healthcare platform with prescription and order management interfaces',
        'Developed backend services using Node.js and Express.js with MongoDB for high-volume medical data',
        'Created real-time order tracking UI with WebSocket integration and event-driven backend',
        'Built responsive forms with validation, accessibility features (A11y), and error handling',
        'Implemented caching strategies reducing API response time by 45%',
        'Ensured HIPAA compliance and OWASP security standards across stack'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Real11',
      location: 'Noida',
      period: 'June 2021 — May 2022',
      highlights: [
        'Built React UI for fantasy sports platform with real-time leaderboards and live match updates',
        'Developed REST APIs using Node.js for match data, user interactions, and payment processing',
        'Integrated third-party sports APIs handling high-frequency real-time data streams',
        'Created responsive mobile-first design with Tailwind CSS for sports betting interface',
        'Implemented WebSocket connections for live score updates and user notifications',
        'Collaborated with cross-functional teams in Agile sprints with 2-week iterations'
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
                    {exp.website && (
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 px-2.5 py-1 text-xs font-mono bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/50 rounded-full text-accent hover:from-accent/30 hover:to-blue-500/30 hover:border-accent transition-all duration-200 flex items-center gap-1.5 group/link"
                      >
                        <span className="text-accent group-hover/link:text-accent transition-colors">🔗</span>
                        <span>Visit</span>
                      </a>
                    )}
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
