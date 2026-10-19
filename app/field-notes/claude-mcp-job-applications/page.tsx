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
          Claude MCP that searches and applies to jobs
        </h1>
        
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          A builder created an MCP server so Claude can search a jobs database, tailor resumes, and submit applications with user approval.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>What they did</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            The author built a job-search platform and then an MCP server so the same capabilities could run inside Claude. 
            Users can search jobs, match them against a resume, get tailored versions, and have applications submitted 
            on employer sites once they approve.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How it went</h2>
          <p style={{ color: 'var(--muted)' }}>
            The post reports early traction and interview rates on the paid autopilot feature. 
            The author emphasizes keeping a human approval step before final submission.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Takeaway</h2>
          <p style={{ color: 'var(--muted)' }}>
            Application automation inside Claude via MCP is becoming practical. 
            The most careful setups still keep a review gate before anything is sent.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Source</h2>
          <p style={{ color: 'var(--muted)' }}>
            <a href="https://www.reddit.com/r/ClaudeAI/comments/1x60bmf/i_built_an_mcp_server_with_claude_code_that_lets/" target="_blank" rel="noopener noreferrer">
              Reddit r/ClaudeAI — original post
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
