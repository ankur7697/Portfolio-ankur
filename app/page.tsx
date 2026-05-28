'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="dark bg-background text-foreground">
      <Header />
      <div className="pt-16"></div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </main>
  )
}
