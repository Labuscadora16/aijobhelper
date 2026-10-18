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

        <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          <span className="tag">Field Note</span>
          <span className="tag">Claude</span>
        </div>
        
        <h1 style={{ fontSize: '1.85rem', margin: '0.75rem 0', letterSpacing: '-0.02em' }}>
          Claude MCP that searches and applies to jobs
        </h1>
        
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          A builder created an MCP server so Claude can search a jobs database, tailor resumes, and submit applications with user approval.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            After a family member was laid off, the author began building a job-search platform. The most common follow-up question was whether the same capability could live inside Claude itself. They built an MCP server that lets Claude search a jobs database, match roles against a resume, generate tailored versions, and submit applications on employer career pages once the user approves.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            The system went through heavy dogfooding. The team applied to real jobs, noted friction points, and iterated until the core flow felt reliable enough to launch.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How it went</h2>
          <p style={{ color: 'var(--muted)' }}>
            The MCP launched with early traction (hundreds of users and dozens of daily actives). The author reported 83 interviews per 100 paid subscribers who used the autopilot submission feature. They emphasized that keeping a human approval step before final submission was important for quality control.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Key takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            Full application automation is becoming practical inside Claude via MCP, but the highest-performing setups still keep a review gate before anything is sent. The combination of search + tailoring + controlled submission in one conversation is the real advance.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Caveats</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Results are self-reported by the builder</li>
            <li>Auto-submission quality depends entirely on the tailoring step</li>
            <li>Most people will still want final approval control</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Source</h2>
          <p style={{ color: 'var(--muted)' }}>
            Reddit r/ClaudeAI · October 2026
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
