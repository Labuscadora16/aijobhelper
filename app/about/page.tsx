import Link from 'next/link'

export default function About() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">AIJobHelper</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Systems</Link>
            <Link href="/about" style={{ color: 'var(--fg)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '40rem', paddingBottom: '4rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>About</h1>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          AIJobHelper collects and refines practical systems for using AI to land jobs and advance careers.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          The focus is on methods that are clear, constrained, and honest about limitations. 
          Most AI career advice is either too vague or overclaims what the tools can do. 
          This site aims for the opposite: usable processes with explicit boundaries.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
          Each system is designed to be run with any capable AI (Claude, ChatGPT, Grok, and others). 
          You supply the real inputs. The system provides structure so the output stays truthful and useful.
        </p>

        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          New systems and deeper breakdowns are added over time. A weekly newsletter covers one system in more depth.
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
