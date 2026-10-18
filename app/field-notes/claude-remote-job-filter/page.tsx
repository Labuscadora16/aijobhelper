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
          Claude Code filter for genuinely remote roles
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Source: Reddit r/RemoteJobs · October 2026</p>

        <section style={{ marginBottom: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)' }}>
            Built a local Claude Code skill that takes LinkedIn (or similar) search results and reads the 
            actual job description text around words like “remote”, “hybrid”, and “on-site”. It extracts 
            the deciding sentence and classifies the role. The goal was to eliminate fake-remote and unclear postings.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What happened</h2>
          <p style={{ color: 'var(--muted)' }}>
            In one run for Product Manager roles across several European countries posted in the last 24 hours, 
            the pipeline started with hundreds of results and reduced them to 8 roles that met the author’s 
            strict remote criteria, each with the supporting sentence shown.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            “Remote” on a job board is unreliable. Having an AI read the actual description and surface the 
            deciding language is a high-leverage filter before you invest time applying.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Caveats</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Requires technical setup (Claude Code + local scripts)</li>
            <li>Classification quality depends on how clearly the posting is written</li>
            <li>Still needs human final judgment</li>
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
