import Link from 'next/link'

const systems = [
  {
    slug: 'resume-tailoring',
    title: 'Targeted Resume Tailoring System',
    description: 'Adapt your master resume to a specific job description without inventing experience or keyword stuffing.',
    tags: ['Resume & Applications']
  },
  {
    slug: 'interview-framework',
    title: 'Interview Answer Framework',
    description: 'Turn behavioral and technical questions into clear, concise answers using a structured pattern refined by AI.',
    tags: ['Interview Prep']
  },
  {
    slug: 'company-research',
    title: 'Company Research Brief',
    description: 'Generate a focused one-page brief on a company before interviews or outreach.',
    tags: ['Job Search', 'Interview Prep']
  },
  {
    slug: 'outreach-system',
    title: 'Outreach Message System',
    description: 'Create short, specific LinkedIn or email messages that reference something real about the person or company.',
    tags: ['Networking']
  },
  {
    slug: 'job-description-decoder',
    title: 'Job Description Decoder',
    description: 'Break down a job posting into must-haves, hidden priorities, and the exact language the company uses.',
    tags: ['Resume & Applications']
  },
  {
    slug: 'offer-evaluation',
    title: 'Offer Evaluation Framework',
    description: 'Compare total compensation, growth potential, role scope, and risk factors under time pressure.',
    tags: ['Salary & Offers']
  }
]

const fieldNotes = [
  {
    slug: 'claude-mcp-job-applications',
    title: 'Claude MCP that searches and applies to jobs',
    summary: 'Builder created an MCP server so Claude can search a jobs database, tailor resumes, and submit applications (with approval). Reported 83 interviews per 100 paid subscribers using autopilot.',
    source: 'Reddit r/ClaudeAI'
  },
  {
    slug: '119-interviews-playbook',
    title: '119 interviews in 6 months using ChatGPT + Claude',
    summary: 'Laid-off candidate interviewed at 49 companies and landed 2 offers. Heavy use of ChatGPT and Claude for LinkedIn profile, resume, and preparation. Shared the full playbook.',
    source: 'Reddit r/Layoffs'
  },
  {
    slug: 'claude-remote-job-filter',
    title: 'Claude Code filter for genuinely remote roles',
    summary: 'Built a local Claude Code skill that reads actual job descriptions to distinguish real remote from hybrid or fake-remote. Cut 238 Product Manager postings down to 8 that met strict criteria.',
    source: 'Reddit r/RemoteJobs'
  },
  {
    slug: 'daily-ai-scored-job-alerts',
    title: 'Daily AI-scored job alerts with Claude',
    summary: 'n8n + Apify + Claude workflow that pulls new jobs from ATS career pages, scores them for fit, and sends only the top matches via Telegram/Gmail.',
    source: 'Reddit r/n8n'
  }
]

export default function Home() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">AIJobHelper</div>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: 'var(--fg)' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Practical AI systems for landing jobs and advancing your career.</h1>
          <p>
            Clear methods + real examples of what people are actually doing. 
            Each system includes limitations. Field Notes are sourced from public posts.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Systems</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', maxWidth: '36rem' }}>
            Constrained, reusable methods you can run with any capable AI.
          </p>
          <div className="grid">
            {systems.map((system) => (
              <Link key={system.slug} href={`/systems/${system.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card">
                  <h3>{system.title}</h3>
                  <p>{system.description}</p>
                  <div>
                    {system.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Field Notes</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', maxWidth: '36rem' }}>
            Real examples of people using AI in their job search. Sourced from public posts. Updated as new signal appears.
          </p>
          <div className="grid">
            {fieldNotes.map((note) => (
              <Link key={note.slug} href={`/field-notes/${note.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card">
                  <h3>{note.title}</h3>
                  <p>{note.summary}</p>
                  <span className="tag">{note.source}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Weekly Newsletter</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', maxWidth: '32rem' }}>
            One system or refinement + fresh Field Notes each week. Clear context and limitations. No filler.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Newsletter launching on Substack soon as <strong>AIJobHelper Weekly</strong>.
          </p>
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
