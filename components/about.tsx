export function About() {
  return (
    <section id="about" className="border-t border-border relative py-24 md:py-32">
      {/* Code background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <pre className="w-full h-full text-xs font-mono text-accent overflow-hidden whitespace-pre-wrap break-words">
{`// Full Stack Developer - 3+ Years
const developer = {
  frontend: ["React", "Next.js", "TypeScript"],
  backend: ["Node.js", "Express", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB"],
  cloud: ["AWS", "Docker", "Kubernetes"],
  
  buildComplete() {
    return UI + API + Database + Infrastructure;
  },
  
  expertise: "End-to-End Solutions"
};`}
        </pre>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="space-y-12">
          <div>
            <span className="text-accent text-sm font-mono">// About Me</span>
            <h2 className="text-4xl font-bold mt-2">Who I Am</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Main content */}
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                I&apos;m a full-stack developer with 3+ years of experience building complete applications from database design to polished user interfaces. My expertise spans React, Next.js, Node.js, PostgreSQL, and AWS. I&apos;ve worked with leading tech companies across real estate, healthcare, fintech, and sports tech sectors, delivering products used by 50K+ users.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I excel at bridging frontend and backend, creating seamless user experiences backed by efficient server architecture. I design scalable systems, implement secure APIs, optimize database queries, and craft responsive interfaces that perform at scale. My passion lies in building production-grade applications with clean, maintainable code.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Beyond coding, I&apos;m passionate about system architecture, DevOps practices, performance optimization, and mentoring developers. I believe in writing sustainable code, following best practices, and continuously evolving with emerging technologies to build better products.
              </p>
            </div>

            {/* Quick Facts in code block style */}
            <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-mono text-accent text-sm mb-6">// Quick Facts</h3>
              <ul className="space-y-4 text-sm font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-accent">»</span>
                  <span className="text-muted-foreground">
                    <span className="text-blue-400">location</span>: <span className="text-green-400">&quot;Noida, India&quot;</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">»</span>
                  <span className="text-muted-foreground">
                    <span className="text-blue-400">status</span>: <span className="text-green-400">&quot;Open to opportunities&quot;</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">»</span>
                  <span className="text-muted-foreground">
                    <span className="text-blue-400">focus</span>: <span className="text-green-400">&quot;React, Node.js, Databases&quot;</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">»</span>
                  <span className="text-muted-foreground">
                    <span className="text-blue-400">passion</span>: <span className="text-green-400">&quot;Full Stack, System Design&quot;</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
