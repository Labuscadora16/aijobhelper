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
          119 interviews in 6 months using ChatGPT + Claude
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Source: Reddit r/Layoffs · 2026</p>

        <section style={{ marginBottom: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)' }}>
            After a layoff, the author ran a high-volume search: 49 companies, 119 total interview rounds, 
            averaging about five interviews per week, ending with two offers. ChatGPT and Claude were used 
            extensively for LinkedIn profile rewriting, resume work, and preparation. Almost all opportunities 
            came through LinkedIn.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What happened</h2>
          <p style={{ color: 'var(--muted)' }}>
            Two offers after six months of consistent effort. The author credited measurable-outcome language 
            on the resume and LinkedIn, plus disciplined use of AI for rewriting and prep, as key factors.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            Volume plus quality compounds. AI helped maintain quality across a large number of applications 
            and interviews without the author having to rewrite everything from scratch each time.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Caveats</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>This was a full-time effort over six months</li>
            <li>Results depend heavily on starting experience and target market</li>
            <li>Self-reported playbook</li>
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
