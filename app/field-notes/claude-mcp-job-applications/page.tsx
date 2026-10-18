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
          Claude MCP that searches and applies to jobs
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Source: Reddit r/ClaudeAI · October 2026</p>

        <section style={{ marginBottom: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)' }}>
            A builder created an MCP server that lets Claude search a jobs database, match against a resume, 
            generate tailored resumes, and submit applications on employer sites once the user approves. 
            The system grew out of an earlier job-search platform started after a family layoff.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>What happened</h2>
          <p style={{ color: 'var(--muted)' }}>
            The MCP launched with early traction (hundreds of users). The author reported 83 interviews 
            per 100 paid subscribers who used the autopilot submission feature. They emphasized dogfooding 
            and iterative fixes based on real application attempts.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            Full automation of applications is possible but still benefits from a human approval step. 
            The interesting part is the combination of search + tailoring + controlled submission inside 
            the same Claude conversation via MCP.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Caveats</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Results are self-reported</li>
            <li>Auto-submission carries risk if the tailoring quality slips</li>
            <li>Most users will still want review control</li>
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
