import Link from 'next/link'

export default function FieldNote() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">AIJobHelper</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '42rem', paddingBottom: '4rem' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>← Home</Link>
        
        <h1 style={{ fontSize: '1.85rem', margin: '1.5rem 0 0.75rem', letterSpacing: '-0.02em' }}>
          Daily AI-scored job alerts with Claude
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Source: Reddit r/n8n · October 2026</p>

        <section style={{ marginBottom: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)' }}>
            Built an n8n workflow that uses Apify to pull new jobs from company ATS career pages 
            (Greenhouse, Lever, Ashby, Workday, etc.), deduplicates against a Google Sheet, has Claude 
            score each job for fit against a profile, and sends only the top matches to Telegram or Gmail.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What happened</h2>
          <p style={{ color: 'var(--muted)' }}>
            The template was published and received positive feedback from others who were previously 
            dumping everything into spreadsheets and sifting manually. The scoring step was highlighted 
            as the main time saver.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            Combining structured job data pulls with an LLM scoring step can turn a noisy daily flood 
            into a short, relevant list. The human only looks at what already passed a fit filter.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Caveats</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Requires n8n + Apify setup and API costs</li>
            <li>Scoring quality depends on how well the profile and criteria are defined</li>
            <li>ATS pages change; scrapers need maintenance</li>
          </ul>
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
