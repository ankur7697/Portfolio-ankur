'use client'

import { useEffect, useRef } from 'react'

export function FreelanceProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('[data-card]')
    if (!cards) return

    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const xPercent = (x / rect.width - 0.5) * 100
        const yPercent = (y / rect.height - 0.5) * 100

        ;(card as HTMLElement).style.setProperty('--mouse-x', `${xPercent}%`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${yPercent}%`)
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const freelanceProjects = [
    {
      id: 1,
      title: 'Prithvee Propmart',
      website: 'prithvee.com',
      category: 'Real Estate',
      description: 'Premium real estate platform with advanced property listings and CRM',
      icon: '🏢',
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400/60',
      highlights: [
        'Advanced property search and filtering system',
        'Interactive property showcase with high-resolution images',
        'Integrated CRM for real estate agents',
        'Virtual tours and 3D property visualization',
        'Secure transaction management system'
      ],
      stats: '500+ Properties'
    },
    {
      id: 2,
      title: 'Faith Tour Travel',
      website: 'www.faithtourtravel.com',
      category: 'Travel & Tourism',
      description: 'Modern tour booking platform with seamless user experience',
      icon: '✈️',
      color: 'from-emerald-500/20 to-teal-500/20',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      highlights: [
        'Responsive booking interface with real-time availability',
        'Integrated payment processing for multiple tour packages',
        'Dynamic package management system',
        'Admin dashboard for tour and booking management',
        'Mobile-first responsive design'
      ],
      stats: '50+ Destinations'
    },
    {
      id: 3,
      title: 'Crystal Tour and Travel',
      website: 'crystaltourandtravel.com',
      category: 'Travel & Tourism',
      description: 'Professional travel agency website with beautiful package showcase',
      icon: '🌍',
      color: 'from-violet-500/20 to-purple-500/20',
      accentColor: 'text-violet-400',
      borderColor: 'border-violet-500/30 hover:border-violet-400/60',
      highlights: [
        'Interactive tour packages showcase with detailed itineraries',
        'Real-time booking system with instant confirmations',
        'Email notification system for bookings and updates',
        'Customer testimonials and reviews section',
        'SEO optimized for travel keywords'
      ],
      stats: '100+ Reviews'
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with premium styling */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              Selected Works
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-cyan-400 to-foreground mb-4">
            Freelance Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Premium web applications built with modern technologies, delivering exceptional user experiences and business results.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-20">
          {freelanceProjects.map((project, idx) => (
            <div
              key={project.id}
              data-card
              className="group relative h-full"
              style={{
                perspective: '1200px',
              } as React.CSSProperties}
            >
              {/* Card container with 3D effect */}
              <div
                className={`relative bg-gradient-to-br ${project.color} backdrop-blur-xl border ${project.borderColor} rounded-2xl p-8 h-full transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2`}
                style={{
                  transformStyle: 'preserve-3d',
                } as React.CSSProperties}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.3), transparent 80%)`,
                }}></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col space-y-6">
                  {/* Top section */}
                  <div className="space-y-4">
                    {/* Category badge */}
                    <div className="inline-block">
                      <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full ${project.accentColor} bg-opacity-10 border ${project.borderColor} transition-all duration-300 group-hover:scale-105`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Icon and title */}
                    <div className="space-y-3">
                      <div className="text-6xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 origin-left">
                        {project.icon}
                      </div>
                      <h3 className={`text-3xl font-bold transition-colors duration-300 ${project.accentColor}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 flex-1">
                    <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-widest">Features</p>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, hidx) => (
                        <li
                          key={hidx}
                          className="flex gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 transform group-hover:translate-x-1"
                          style={{
                            transitionDelay: `${hidx * 50}ms`,
                          }}
                        >
                          <span className={`${project.accentColor} flex-shrink-0 mt-0.5 font-bold`}>✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with stats and CTA */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-mono ${project.accentColor}`}>{project.stats}</span>
                      <a
                        href={`https://${project.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${project.accentColor} hover:gap-3 transition-all duration-300 group/link`}
                      >
                        <span>Visit</span>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { value: '3', label: 'Premium Projects', icon: '⭐' },
            { value: '100%', label: 'Fully Responsive', icon: '📱' },
            { value: 'Live', label: 'Production Ready', icon: '🚀' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated decorative elements */}
      <style>{`
        [data-card] {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }

        [data-card]:hover {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}
