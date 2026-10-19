import Link from 'next/link'

export default function About() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">AIJobHelper</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
            <Link href="/about" style={{ color: 'var(--fg)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '40rem', paddingBottom: '4rem' }}>
        <h1 style={{ fontSize: '1.85rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>About</h1>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          AIJobHelper collects two kinds of useful material for people using AI in their job search and career:
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          <strong style={{ color: 'var(--fg)' }}>Field Notes</strong> — real examples of what people are actually doing, 
          sourced from public posts. These show concrete workflows, results, and limitations.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          <strong style={{ color: 'var(--fg)' }}>Systems</strong> — constrained, reusable methods with clear rules, 
          failure modes, and step-by-step guidance. Designed to stay truthful and defensible.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          The site is intentionally high-signal and low-hype. Most AI career content either overclaims 
          or stays too vague to use. We aim for the opposite.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          New Field Notes are added as signal appears. Systems are refined over time. 
          The weekly newsletter (AIJobHelper Weekly) covers both.
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
