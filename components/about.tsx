export function About() {
  return (
    <section id="about" className="border-t border-border relative py-24 md:py-32">
      {/* Code background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <pre className="w-full h-full text-xs font-mono text-accent overflow-hidden whitespace-pre-wrap break-words">
{`// Backend Developer - 3+ Years Experience
class Developer {
  const skills = ["Node.js", "Express", "AWS"];
  const databases = ["MongoDB", "PostgreSQL"];
  const focus = "Scalability & Performance";
  
  buildAPIs() {
    return 100+ production APIs;
  }
  
  designSystems() {
    return microservices, caching, optimization;
  }
  
  optimizePerformance() {
    return system_design + db_optimization;
  }
}`}
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
                I&apos;m a backend developer with 3+ years of experience building scalable server-side 
                solutions for diverse platforms. My expertise spans Node.js, Express.js, REST APIs, 
                and cloud infrastructure (AWS). I&apos;ve worked with leading tech companies across 
                real estate, healthcare, fintech, and sports tech sectors.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I specialize in designing efficient database architectures, implementing robust API 
                solutions, and optimizing system performance. My focus is on writing clean, maintainable 
                code that scales with your business needs while following industry best practices and 
                security standards.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Beyond coding, I&apos;m passionate about system design, performance optimization, and 
                mentoring junior developers. I believe in continuous learning and staying updated with 
                the latest technologies and industry trends.
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
                    <span className="text-blue-400">expertise</span>: <span className="text-green-400">&quot;Node.js, APIs, Databases&quot;</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">»</span>
                  <span className="text-muted-foreground">
                    <span className="text-blue-400">passion</span>: <span className="text-green-400">&quot;System Design, Cloud Architecture&quot;</span>
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
