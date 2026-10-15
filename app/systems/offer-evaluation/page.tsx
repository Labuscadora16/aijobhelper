import Link from 'next/link'

export default function OfferEvaluation() {
  return (
    <>
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo">AIJobHelper</Link>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
            <Link href="/" style={{ color: 'var(--muted)' }}>Systems</Link>
            <Link href="/about" style={{ color: 'var(--muted)' }}>About</Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '42rem', paddingBottom: '4rem' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>← All systems</Link>
        
        <h1 style={{ fontSize: '1.85rem', margin: '1.5rem 0 0.75rem', letterSpacing: '-0.02em' }}>
          Offer Evaluation Framework
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Compare total compensation, growth potential, role scope, and risk factors under time pressure.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>When this works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You have an offer (or multiple) and limited time to decide</li>
            <li>You want a structured way to avoid over-weighting base salary alone</li>
            <li>You need to surface trade-offs clearly</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Important limitations</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>AI cannot know your personal values or risk tolerance</li>
            <li>Compensation data can be incomplete or outdated</li>
            <li>The final decision remains yours</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Core prompt</h2>
          <pre style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '1.25rem',
            overflow: 'auto',
            fontSize: '0.875rem',
            lineHeight: 1.55,
            color: 'var(--fg)',
            whiteSpace: 'pre-wrap'
          }}>
{`Help me evaluate this job offer structuredly.

Offer details:
[paste compensation, title, team, location, other terms]

My priorities (optional):
[e.g. learning, compensation, stability, scope, lifestyle]

Output:
1. Total compensation breakdown (base, variable, equity, other)
2. Role scope and growth signals
3. Key risks or unknowns
4. How this aligns (or conflicts) with the priorities I listed
5. Questions I should still ask before deciding
6. A neutral summary of the main trade-offs`}
          </pre>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Gather the full offer details (not just base salary)</li>
            <li>List your actual priorities honestly</li>
            <li>Run the prompt and review the trade-offs section carefully</li>
            <li>Use the suggested questions in your follow-up conversations</li>
          </ol>
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
