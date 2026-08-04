'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function StartProject() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectTitle: '',
    description: '',
    projectType: '',
    budget: '',
    timeline: '',
    skills: [] as string[],
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'Real Estate Platform',
    'Travel/Tourism Platform',
    'SaaS Product',
    'Dashboard/Analytics',
    'Other'
  ]

  const skillOptions = [
    'React', 'Next.js', 'Vue.js', 'Angular',
    'Node.js', 'Python', 'Java', 'C#',
    'Database Design', 'Cloud/DevOps', 'UI/UX Design', 'Mobile Development',
    'API Development', 'CMS Integration', 'Payment Integration', 'Authentication'
  ]

  const budgetRanges = [
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet'
  ]

  const timelineOptions = [
    'ASAP (1-2 weeks)',
    'Short term (1-2 months)',
    'Medium term (3-6 months)',
    'Long term (6+ months)',
    'Flexible'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectTitle: '',
        description: '',
        projectType: '',
        budget: '',
        timeline: '',
        skills: [],
        message: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="dark bg-background text-foreground">
      <Header />
      
      <div className="min-h-screen pt-32 pb-24">
        {/* Background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-indigo-400 uppercase tracking-widest px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-400/40 backdrop-blur-md">
                Start Your Project
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your project details and requirements. I'll review your submission and get back to you within 24-48 hours.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">✓</div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-1">Project Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-muted-foreground">Thank you for your interest. I'll review your requirements and contact you soon.</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground placeholder-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground placeholder-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-foreground">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground placeholder-muted-foreground"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-400">Project Details</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Project Title *</label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground placeholder-muted-foreground"
                    placeholder="e.g., Modern E-commerce Platform"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Describe your project idea, goals, and key features..."
                  />
                </div>
              </div>
            </div>

            {/* Required Skills Section */}
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Required Skills & Technologies</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skillOptions.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 border ${
                      formData.skills.includes(skill)
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-background/50 border-border/50 text-muted-foreground hover:border-indigo-500/50'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-indigo-400">Budget Range *</h2>
                
                <div className="space-y-3">
                  {budgetRanges.map(range => (
                    <label key={range} className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-indigo-500/10 transition-colors">
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={formData.budget === range}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-indigo-500"
                      />
                      <span className="text-foreground">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-pink-400">Timeline *</h2>
                
                <div className="space-y-3">
                  {timelineOptions.map(timeline => (
                    <label key={timeline} className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-pink-500/10 transition-colors">
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline}
                        checked={formData.timeline === timeline}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-pink-500"
                      />
                      <span className="text-foreground">{timeline}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Message Section */}
            <div className="bg-gradient-to-br from-secondary/40 to-secondary/20 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Additional Information</h2>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Any Additional Details or Questions?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Share any additional information about your project..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 justify-center pt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-600/40 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Project Inquiry
                    <span>→</span>
                  </>
                )}
              </button>
              
              <a
                href="/"
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all transform hover:scale-105"
              >
                Back to Home
              </a>
            </div>
          </form>

          {/* Form Instructions */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold text-foreground mb-2">Detailed Information</h3>
              <p className="text-sm text-muted-foreground">The more details you provide, the better I can understand your vision and provide accurate estimates.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">I'll review your submission and respond with a proposal, timeline, and cost estimate within 24-48 hours.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">Perfect Match</h3>
              <p className="text-sm text-muted-foreground">If we're a great fit, we'll schedule a call to discuss your project in detail before starting development.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
