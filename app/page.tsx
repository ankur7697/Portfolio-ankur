'use client'

import { Header } from '@/components/header'
import { Hero3D } from '@/components/hero-3d'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { FreelanceProjects } from '@/components/freelance-projects'
import { Projects } from '@/components/projects'
import { FrontendShowcase } from '@/components/frontend-showcase'
import { Stack } from '@/components/stack'
import { Skills } from '@/components/skills'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="dark bg-background text-foreground">
      <Header />
      <Hero3D />
      <About />
      <Experience />
      <FreelanceProjects />
      <Projects />
      <FrontendShowcase />
      <Stack />
      <Skills />
      <CTA />
      <Footer />
    </main>
  )
}
