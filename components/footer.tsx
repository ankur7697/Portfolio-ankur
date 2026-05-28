export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card/50 relative overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <pre className="w-full h-full text-xs font-mono text-accent">
{`// Contact Information
const developer = {
  email: "ankursharma7986@gmail.com",
  phone: "+91 798 625 049",
  github: "https://github.com/ankur7697",
  linkedin: "https://www.linkedin.com/in/ankursharma712/",
  availability: "Open for opportunities",
  timezone: "IST (UTC+5:30)"
};

app.get("/contact", (req, res) => {
  res.json(developer);
});`}
        </pre>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="space-y-12">
          {/* Main contact section */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="text-accent text-sm font-mono">// Connect & Collaborate</span>
              <h2 className="text-4xl font-bold">Let&apos;s Build Together</h2>
              <p className="text-muted-foreground max-w-sm">
                Whether you need a full-stack application, scaling solutions, or technical consulting—I&apos;m ready to help bring your vision to life.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-mono text-accent uppercase tracking-widest">Email</h3>
                <a
                  href="mailto:ankursharma7986@gmail.com"
                  className="text-lg hover:text-accent transition-colors group flex items-center gap-2"
                >
                  ankursharma7986@gmail.com
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-mono text-accent uppercase tracking-widest">Phone</h3>
                <a
                  href="tel:+91798625049"
                  className="text-lg hover:text-accent transition-colors group flex items-center gap-2"
                >
                  +91 798 625 049
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="pt-8 border-t border-border">
            <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">Social Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="https://github.com/ankur7697"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 border border-border rounded-lg bg-card/30 hover:bg-card/60 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors group-hover:scale-110" />
                  <span className="text-sm group-hover:text-accent transition-colors">GitHub</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ankursharma712/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 border border-border rounded-lg bg-card/30 hover:bg-card/60 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <LinkedInIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors group-hover:scale-110" />
                  <span className="text-sm group-hover:text-accent transition-colors">LinkedIn</span>
                </div>
              </a>

              <a
                href="mailto:ankursharma7986@gmail.com"
                className="group p-4 border border-border rounded-lg bg-card/30 hover:bg-card/60 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <MailIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors group-hover:scale-110" />
                  <span className="text-sm group-hover:text-accent transition-colors">Email</span>
                </div>
              </a>

              <a
                href="tel:+91798625049"
                className="group p-4 border border-border rounded-lg bg-card/30 hover:bg-card/60 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors group-hover:scale-110" />
                  <span className="text-sm group-hover:text-accent transition-colors">Call</span>
                </div>
              </a>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              <span className="text-accent font-mono">{'</>'}</span> Crafted with code by Ankur Sharma
            </p>
            <p>&copy; 2026. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.182.092-.92.35-1.545.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.5 5.55c-2.64 0-4.95 3.06-4.95 6.85 0 3.79 2.31 6.85 4.95 6.85 1.01 0 1.95-.63 2.42-1.44l.35.58c.37.66.11 1.52-.56 1.89-.67.37-1.53.11-1.9-.55l-.35-.58c-.37.66-1.31 1.1-2.31 1.1-2.64 0-4.95-3.06-4.95-6.85 0-3.79 2.31-6.85 4.95-6.85 1.01 0 1.95.63 2.41 1.44l.36-.58c.37-.66 1.23-.93 1.9-.56.67.37.93 1.23.56 1.89l-.36.58zm-4.4 4.83c0 1.65-1.12 3-2.5 3s-2.5-1.35-2.5-3 1.12-3 2.5-3 2.5 1.35 2.5 3z" />
    </svg>
  )
}
