'use client'

export function CTA() {
  return (
    <section className="border-t border-border relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-500/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-accent text-sm font-mono">// Let's Build Something Great</span>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Collaborate?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re looking to build a new product, scale existing infrastructure, or need expert consulting—I&apos;m here to help. Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="mailto:ankursharma7986@gmail.com"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <span>→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ankursharma712/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Connect on LinkedIn</span>
              <span>↗</span>
            </a>
          </div>

          {/* Quick contact info */}
          <div className="pt-12 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-6">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="space-y-1">
                <p className="text-xs text-accent font-mono uppercase">Email</p>
                <a
                  href="mailto:ankursharma7986@gmail.com"
                  className="text-foreground hover:text-accent transition-colors font-mono"
                >
                  ankursharma7986@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-accent font-mono uppercase">Phone</p>
                <a
                  href="tel:+91798625049"
                  className="text-foreground hover:text-accent transition-colors font-mono"
                >
                  +91 798 625 049
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-accent font-mono uppercase">Response Time</p>
                <p className="text-foreground font-mono">24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
