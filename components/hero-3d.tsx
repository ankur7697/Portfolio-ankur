'use client'

import { useEffect, useRef, useState } from 'react'

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const codeBlocks = useRef<HTMLDivElement[]>([])

  const codeSnippets = [
    { text: 'const buildMagic = () => {}', delay: 0 },
    { text: 'function* iterator() { yield }', delay: 0.2 },
    { text: 'async await Promise.all()', delay: 0.4 },
    { text: 'const UI = <Component />', delay: 0.6 },
    { text: 'export { Module, Default }', delay: 0.8 },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    codeBlocks.current.forEach((block, index) => {
      if (!block) return
      const angle = (index / codeBlocks.current.length) * Math.PI * 2
      const radius = 200 + Math.sin(Date.now() * 0.001 + index) * 50
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      block.style.setProperty('--x', `${x}px`)
      block.style.setProperty('--y', `${y}px`)
    })

    const animation = setInterval(() => {
      codeBlocks.current.forEach((block, index) => {
        if (!block) return
        const angle = (index / codeBlocks.current.length) * Math.PI * 2
        const radius = 200 + Math.sin(Date.now() * 0.001 + index) * 50
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        block.style.transform = `translate(${x}px, ${y}px)`
      })
    }, 16)

    return () => clearInterval(animation)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated code blocks orbiting center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-96 h-96">
          {codeSnippets.map((snippet, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) codeBlocks.current[index] = el
              }}
              className="absolute px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg backdrop-blur-sm text-xs font-mono text-accent whitespace-nowrap transition-all duration-300 transform hover:bg-accent/20 hover:border-accent/60 hover:scale-110"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${snippet.delay}s`,
              }}
            >
              {snippet.text}
            </div>
          ))}
        </div>
      </div>

      {/* Central glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-gradient-to-r from-indigo-600/20 via-pink-600/20 to-purple-600/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center space-y-8 px-6 max-w-3xl">
        <div className="inline-block">
          <span className="text-accent text-sm font-mono tracking-wider px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            $ ankur7697 --full-stack
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-balance">
          <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Creative Developer
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting stunning frontends with React & Next.js, powerful backends with Node.js, and seamless integrations. Turning ideas into interactive experiences.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 pt-8">
          <button className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-600/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <span>View My Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
          <div className="space-y-2 group cursor-pointer">
            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent font-mono group-hover:scale-110 transition-transform">
              3+
            </p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="space-y-2 group cursor-pointer">
            <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-mono group-hover:scale-110 transition-transform">
              50+
            </p>
            <p className="text-sm text-muted-foreground">Projects Built</p>
          </div>
          <div className="space-y-2 group cursor-pointer">
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent font-mono group-hover:scale-110 transition-transform">
              15+
            </p>
            <p className="text-sm text-muted-foreground">Tech Stack</p>
          </div>
        </div>
      </div>

      {/* Animated styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(var(--x, 0), var(--y, 0)) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--x, 0), var(--y, 0)) translateY(-20px);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
