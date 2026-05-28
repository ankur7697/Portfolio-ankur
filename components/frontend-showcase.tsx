'use client'

import { useState } from 'react'

export function FrontendShowcase() {
  const [activeTab, setActiveTab] = useState('components')
  const [animatedCard, setAnimatedCard] = useState(false)

  const components = [
    {
      name: 'Interactive Buttons',
      description: 'Custom button components with multiple states and animations',
      tech: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Form Validation',
      description: 'Advanced form handling with real-time validation and error states',
      tech: ['React Hook Form', 'Zod', 'TypeScript']
    },
    {
      name: 'Data Tables',
      description: 'Sortable, filterable tables with pagination and responsive design',
      tech: ['React', 'Tailwind CSS', 'Custom Hooks']
    },
    {
      name: 'Modal System',
      description: 'Accessible modals with animations and custom triggers',
      tech: ['React', 'Radix UI', 'Framer Motion']
    },
    {
      name: 'Notifications',
      description: 'Toast notifications with auto-dismiss and stack management',
      tech: ['React', 'Context API', 'CSS Animations']
    },
    {
      name: 'Theme System',
      description: 'Dark/Light mode with system preference detection and persistence',
      tech: ['CSS Variables', 'React', 'localStorage']
    }
  ]

  const designs = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Complete UI for product management with real-time charts',
      screenshot: '📊',
      technologies: 'React, Recharts, Tailwind CSS, TypeScript'
    },
    {
      title: 'SaaS Landing Page',
      description: 'Modern landing with animations, testimonials, and CTA sections',
      screenshot: '🚀',
      technologies: 'Next.js, Framer Motion, Tailwind CSS'
    },
    {
      title: 'Mobile App Design',
      description: 'Responsive mobile-first design with touch-friendly interactions',
      screenshot: '📱',
      technologies: 'React, CSS Grid, Flexbox, Media Queries'
    },
    {
      title: 'Admin Interface',
      description: 'Complex data visualization and management interface',
      screenshot: '⚙️',
      technologies: 'React, Context API, Custom Components'
    }
  ]

  return (
    <section id="frontend-showcase" className="border-t border-border relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-accent text-sm font-mono">// Frontend Expertise</span>
          <h2 className="text-4xl font-bold mt-2">UI/UX Components & Design</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Crafting beautiful, accessible, and performant user interfaces with modern React patterns, animations, and responsive design principles.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-3 font-mono text-sm transition-colors border-b-2 ${
              activeTab === 'components'
                ? 'text-accent border-accent'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            Reusable Components
          </button>
          <button
            onClick={() => setActiveTab('designs')}
            className={`px-4 py-3 font-mono text-sm transition-colors border-b-2 ${
              activeTab === 'designs'
                ? 'text-accent border-accent'
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            UI Designs
          </button>
        </div>

        {/* Components Tab */}
        {activeTab === 'components' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((comp, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-lg border border-border bg-card/40 hover:bg-card/70 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {comp.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{comp.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {comp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary/30 text-accent text-xs rounded border border-border/50 group-hover:border-accent/50 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Designs Tab */}
        {activeTab === 'designs' && (
          <div className="grid md:grid-cols-2 gap-6">
            {designs.map((design, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-lg border border-border bg-card/40 hover:bg-card/70 transition-all duration-300 space-y-4"
              >
                <div className="w-full h-40 bg-secondary/20 border border-border rounded-lg flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {design.screenshot}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{design.description}</p>
                  <div className="pt-2">
                    <p className="text-xs font-mono text-accent">{design.technologies}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live Demo Section */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-gradient-to-r from-accent/10 to-secondary/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Interactive Demo</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Button Demo */}
              <div className="space-y-4">
                <h4 className="font-mono text-accent text-sm">Button Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all hover:scale-105">
                    Primary
                  </button>
                  <button className="px-4 py-2 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all">
                    Secondary
                  </button>
                  <button className="px-4 py-2 bg-secondary/30 text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-all">
                    Tertiary
                  </button>
                </div>
              </div>

              {/* Animation Demo */}
              <div className="space-y-4">
                <h4 className="font-mono text-accent text-sm">Animation Effects</h4>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 bg-accent rounded-lg animate-bounce"
                    style={{ animationDuration: '2s' }}
                  ></div>
                  <div
                    className="w-12 h-12 border-2 border-accent rounded-full animate-spin"
                    style={{ animationDuration: '3s' }}
                  ></div>
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500 rounded-lg"
                    style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
