import GlassCard from "./components/GlassCard";
import ProjectCard from "./components/ProjectCard";
import ThemeToggle from "./components/ThemeToggle";
import { projects } from "./data/projects";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <div className="backdrop" aria-hidden="true" />

      <GlassCard className="nav">
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </GlassCard>

      <main className="page">
        <header className="hero">
          <h1>
            Woshi
            <br />
            builds software
            <br />
            that earns its keep.
          </h1>
          <p className="lede">
            Software engineering student at Nile University of Nigeria. I build
            full-stack products.
          </p>
          <div className="row">
            <a className="btn primary" href="#work">
              See my work
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </header>

        <section className="section" id="work">
          <h2>Selected work</h2>
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <GlassCard className="notice">
            <p>
              Some of my work is confidential, so it isn’t
              shown here. I’m happy to walk through it in an interview.
            </p>
          </GlassCard>
        </section>

        <section className='section' id="stack">
        <GlassCard className="card">
          <h2>My stack</h2>
          <div>
            <h3>Frontend Development</h3>
            <br/>
            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>TailwindCSS</span>
              <span>React Native</span>
              <span>Flutter</span>
              <span>Next.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              
            </div>
            
          </div>

          <div>
            <h3>Backend Development</h3>
            <br/>
            <div className="tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>NestJS</span>
              <span>REST APIs</span>
              <span>tRPC</span>
              <span>Java</span>
              <span>Python</span> 
            </div>
          </div>

          <div>
            <h3>Databases and Data Management</h3>
            <br/>
            <div className="tags">
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>SQLite</span>
              <span>Prisma</span>
              <span>Drizzle ORM</span>
              <span>Supabase</span>
              <span>Firebase</span> 
            </div>
            
          </div>

          <div>
            <h3>DevOps & Infrastructure</h3>
            <br/>
            <div className="tags">
              <span>Docker</span>
              <span>AWS</span>
              <span>Linux</span>
              <span>Vercel</span>
              
            </div>
            
          </div>

          <div>
            <h3>Tools & Collaboration</h3>
            <br/>
            <div className="tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Thunder Client</span>
              <span>Postman</span>
              <span>Figma</span> 
            </div>
            
          </div>

          </GlassCard>
        </section>

        <section className="section" id="contact">
          <GlassCard className="card">
            <h2>Let’s build something.</h2>
            <p>Open to remote internships and freelance projects.</p>
            <div className="row">
              <a className="btn primary" href="mailto:woshicoder001@gmail.com">
                Email me
              </a>
              <a
                className="btn"
                href="https://github.com/Unimwoshi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn"
                href="https://linkedin.com/in/unimwoshi-ogbeche-5239b4296"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </GlassCard>
        </section>

        <footer className="footer">© {new Date().getFullYear()} Woshi</footer>
      </main>
    </>
  );
}
