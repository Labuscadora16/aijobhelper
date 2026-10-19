import Link from 'next/link'

const systems = [
  {
    slug: 'resume-tailoring',
    title: 'Targeted Resume Tailoring System',
    description: 'Constrained process for adapting a truthful master resume to a specific job description without inventing experience or stuffing keywords.',
    tags: ['System', 'Resume']
  },
  {
    slug: 'interview-framework',
    title: 'Interview Answer Framework',
    description: 'Turn real stories into clear 60–90 second answers that stay defensible under follow-up questions.',
    tags: ['System', 'Interview']
  },
  {
    slug: 'company-research',
    title: 'Company Research Brief',
    description: 'Generate a focused one-page brief before interviews or outreach so you sound informed without over-researching.',
    tags: ['System', 'Research']
  },
  {
    slug: 'outreach-system',
    title: 'Outreach Message System',
    description: 'Write short, specific LinkedIn or email messages that reference something real instead of generic templates.',
    tags: ['System', 'Networking']
  },
  {
    slug: 'job-description-decoder',
    title: 'Job Description Decoder',
    description: 'Extract must-haves, hidden priorities, and the exact language a company uses so your materials align truthfully.',
    tags: ['System', 'Resume']
  },
  {
    slug: 'offer-evaluation',
    title: 'Offer Evaluation Framework',
    description: 'Compare total compensation, growth potential, role scope, and risk factors when you have limited time to decide.',
    tags: ['System', 'Offers']
  }
]

const fieldNotes = [
  {
    slug: 'claude-mcp-job-applications',
    title: 'Claude MCP that searches and applies to jobs',
    description: 'Builder created an MCP server so Claude can search jobs, tailor resumes, and submit applications with approval. Reported 83 interviews per 100 paid subscribers on autopilot.',
    tags: ['Claude', 'Automation']
  },
  {
    slug: '119-interviews-playbook',
    title: '119 interviews in 6 months with ChatGPT + Claude',
    description: 'After a layoff, one person interviewed at 49 companies (119 total rounds) and landed 2 offers. Heavy use of ChatGPT and Claude for profile, resume, and prep.',
    tags: ['ChatGPT', 'Claude']
  },
  {
    slug: 'claude-remote-job-filter',
    title: 'Claude Code filter for genuinely remote roles',
    description: 'Local Claude Code skill that reads actual job descriptions to separate real remote from hybrid or fake-remote. Cut 238 PM postings to 8 that met strict criteria.',
    tags: ['Claude Code', 'Remote']
  },
  {
    slug: 'daily-ai-scored-job-alerts',
    title: 'Daily AI-scored job alerts with Claude',
    description: 'n8n + Apify + Claude workflow that pulls new ATS jobs, scores them for fit, and sends only top matches via Telegram or Gmail.',
    tags: ['Claude', 'Automation']
  }
]

export default function Home() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">AIJobHelper</div>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'var(--fg)' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Practical AI systems for landing jobs and advancing your career.</h1>
          <p>
            Real methods and real examples. Each system includes constraints and failure modes. 
            Field Notes show what people are actually doing.
          </p>
        </section>

        <div className="newsletter-box">
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>AIJobHelper Weekly</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            Practical systems and fresh Field Notes, delivered weekly. Clear context, honest limitations, no filler.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            Newsletter launching on Substack soon.
          </p>
        </div>

        <section>
          <h2 className="section-title">Field Notes</h2>
          <p className="section-desc">
            Real examples of people using AI in their job search. Sourced from public posts. Updated as new signal appears.
          </p>
          <div className="grid">
            {fieldNotes.map((note) => (
              <Link key={note.slug} href={`/field-notes/${note.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card">
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                  <div className="card-meta">
                    {note.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <span className="view-link">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Systems</h2>
          <p className="section-desc">
            Constrained, reusable methods you can run with any capable AI. Each includes when it works, when to skip it, and common failure modes.
          </p>
          <div className="grid">
            {systems.map((system) => (
              <Link key={system.slug} href={`/systems/${system.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card">
                  <h3>{system.title}</h3>
                  <p>{system.description}</p>
                  <div className="card-meta">
                    {system.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <span className="view-link">View system →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>AIJobHelper — Practical AI systems for landing jobs and advancing your career.</p>
        </div>
      </footer>
    </>
  )
}
