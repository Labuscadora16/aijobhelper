import Link from 'next/link'

export default function JobDescriptionDecoder() {
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
          Job Description Decoder
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Break down a job posting into must-haves, hidden priorities, and the exact language the company uses.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>When this works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You are deciding whether a role is actually a fit</li>
            <li>You want to tailor your materials to what the company is really emphasizing</li>
            <li>The posting is long, vague, or full of generic requirements</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Important limitations</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Job descriptions are often imperfect reflections of the real role</li>
            <li>AI can only work with the text provided</li>
            <li>You still need judgment about what matters most for you</li>
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
{`Analyze this job description and extract the useful signal.

Job description:
[paste full posting]

Output:
1. Must-have requirements (non-negotiables)
2. Nice-to-have or flexible requirements
3. Hidden or repeated priorities (what they keep emphasizing)
4. Key language and phrases they use that I should consider mirroring if truthful
5. Potential red flags or ambiguities
6. One-sentence summary of what this role actually seems to be about`}
          </pre>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Paste the full job description</li>
            <li>Review the must-haves against your actual background</li>
            <li>Use the key language section when tailoring your resume or writing outreach</li>
            <li>Treat the one-sentence summary as a quick fit check</li>
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
