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
          <span className="tag">Claude Code</span>
        </div>
        
        <h1 style={{ fontSize: '1.85rem', margin: '0.75rem 0', letterSpacing: '-0.02em' }}>
          Claude Code filter for genuinely remote roles
        </h1>
        
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          A local Claude Code workflow that reads actual job descriptions to separate real remote roles from hybrid or unclear ones.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)' }}>
            The author used Claude Code to process recent job postings, extract the sentences around words like 
            “remote”, “hybrid”, and “on-site”, and classify each role based on what the description actually said. 
            The goal was to remove fake-remote and ambiguous listings before spending time applying.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How it went</h2>
          <p style={{ color: 'var(--muted)' }}>
            In the published example (Product Manager roles across several European countries, last 24 hours), 
            the pipeline reduced a large set of postings to a small number that met the author’s strict remote criteria, 
            with the deciding sentence shown for each.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            “Remote” on a job board is often unreliable. Having an AI read the actual description and surface 
            the deciding language is a high-leverage filter before you invest time.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Source</h2>
          <p style={{ color: 'var(--muted)' }}>
            <a href="https://www.reddit.com/r/RemoteJobs/comments/1x5tgxd/i_had_claude_code_filter_the_last_24_hours_of/" target="_blank" rel="noopener noreferrer">
              Reddit r/RemoteJobs — original post
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
