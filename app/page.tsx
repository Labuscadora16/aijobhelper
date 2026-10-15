import Link from 'next/link'

const systems = [
  {
    slug: 'resume-tailoring',
    title: 'Targeted Resume Tailoring System',
    description: 'Adapt your master resume to a specific job description without inventing experience or keyword stuffing.',
    tags: ['Resume & Applications', 'High impact']
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

export default function Home() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">AIJobHelper</div>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: 'var(--fg)' }}>Systems</Link>
            <Link href="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Practical AI systems for landing jobs and advancing your career.</h1>
          <p>
            Clear methods for using AI in the job market. Each system includes the approach, when it works, and important limitations.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Systems</h2>
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

        <section>
          <h2 className="section-title">Weekly Newsletter</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', maxWidth: '32rem' }}>
            One high-quality system or deeper breakdown each week. Clear context, reasoning, and limitations. No filler.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Newsletter launching on Substack soon.
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
