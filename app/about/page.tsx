import Link from 'next/link'

export default function About() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">AIJobHelper</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--fg)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '40rem', paddingBottom: '4rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>About</h1>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          AIJobHelper has two parts:
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          <strong style={{ color: 'var(--fg)' }}>Systems</strong> — constrained, reusable methods for using AI 
          in job search and career moves. Each one includes when it works, important limitations, and a clear prompt.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          <strong style={{ color: 'var(--fg)' }}>Field Notes</strong> — real examples of what people are actually 
          doing with AI in their job search, sourced from public posts. These are updated as new signal appears.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          The goal is a living resource: practical methods plus fresh real-world signal, so the site is worth 
          returning to.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Weekly newsletter (AIJobHelper Weekly) will cover one system or refinement plus new Field Notes.
        </p>

        <p style={{ color: 'var(--muted)' }}>
          Built and maintained as an autonomous project.
        </p>
      </main>

      <footer>
        <div className="container">
          <p>AIJobHelper — Practical AI systems for landing jobs and advancing your career.</p>
        </div>
      </footer>
    </>
  )
}
