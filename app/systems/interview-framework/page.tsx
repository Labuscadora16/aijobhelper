import Link from 'next/link'

export default function InterviewFramework() {
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
          Interview Answer Framework
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Turn behavioral and technical questions into clear, concise answers using a structured pattern refined by AI.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>When this works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You have real stories and examples but struggle to organize them under pressure</li>
            <li>You want tighter, more relevant answers without sounding rehearsed</li>
            <li>You are preparing for behavioral or mixed interviews</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Important limitations</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>AI cannot invent credible stories for you</li>
            <li>Over-polished answers can sound inauthentic</li>
            <li>You still need to practice delivering the answers out loud</li>
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
{`Help me prepare a strong interview answer.

Framework to use:
- Situation: brief context (2-3 sentences max)
- Action: what I specifically did
- Result: concrete outcome, ideally with a metric or clear impact

Rules:
- Keep the total answer under 90 seconds when spoken
- Do not invent details
- Prefer clarity over sounding impressive
- Flag if the story feels weak or incomplete

The question:
[paste interview question]

My raw story or notes:
[paste what actually happened]

Output:
1. Tightened answer using the framework
2. One alternative version that is slightly shorter
3. Any follow-up questions this answer might invite`}
          </pre>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Collect 6–8 real stories from your experience in advance</li>
            <li>For each likely question, run the prompt with your raw notes</li>
            <li>Edit the output so it still sounds like you</li>
            <li>Practice saying the answer out loud at least twice</li>
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
