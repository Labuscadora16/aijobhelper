import Link from 'next/link'

export default function FieldNote() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">AIJobHelper</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '42rem', paddingBottom: '4rem' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>← Home</Link>

        <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          <span className="tag">Field Note</span>
          <span className="tag">Claude</span>
        </div>
        
        <h1 style={{ fontSize: '1.85rem', margin: '0.75rem 0', letterSpacing: '-0.02em' }}>
          Daily AI-scored job alerts with Claude
        </h1>
        
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          An n8n workflow that pulls new jobs from ATS career pages, scores them with Claude for fit, and sends only the top matches.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)' }}>
            The author published an n8n template that uses Apify to pull new jobs from company ATS pages 
            (Greenhouse, Lever, Ashby, Workday, etc.), deduplicates against a Google Sheet, has Claude score 
            each job against a profile, and sends only the top matches to Telegram or Gmail.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How it went</h2>
          <p style={{ color: 'var(--muted)' }}>
            The template was shared publicly and received positive feedback from people who had previously 
            been dumping everything into spreadsheets and filtering manually. The scoring step was the main 
            time-saver called out in comments.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            Combining structured job data with an LLM scoring step can turn a daily flood of postings into 
            a short, relevant list. The human only reviews what already passed a fit filter.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Source</h2>
          <p style={{ color: 'var(--muted)' }}>
            <a href="https://www.reddit.com/r/n8n/comments/1x77ucf/made_a_template_for_daily_aiscored_job_alerts/" target="_blank" rel="noopener noreferrer">
              Reddit r/n8n — original post
            </a>
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
