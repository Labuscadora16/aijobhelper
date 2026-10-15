import Link from 'next/link'

export default function CompanyResearch() {
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
          Company Research Brief
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Generate a focused one-page brief on a company before interviews or outreach.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>When this works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You have an interview or outreach conversation coming up</li>
            <li>You want signal instead of a long dump of information</li>
            <li>You need to sound informed without spending hours researching</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Important limitations</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>AI knowledge has cutoffs and can miss very recent news</li>
            <li>Always cross-check critical facts</li>
            <li>A brief is not a substitute for reading the company’s own materials</li>
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
{`Create a focused research brief on this company for interview or outreach preparation.

Company: [name]
Role I’m targeting (optional): [role]

Structure the brief as:
1. What the company actually does (2-3 sentences)
2. Recent developments or direction (last 12-18 months if known)
3. Likely priorities or challenges relevant to this type of role
4. Language and themes they appear to care about
5. 3 smart questions I could ask that show genuine understanding

Keep the entire brief under 400 words. Prefer signal over volume. Flag anything you are uncertain about.`}
          </pre>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Run the prompt with the company name and target role</li>
            <li>Skim their careers page and latest blog or news for anything the brief missed</li>
            <li>Pick 2–3 points and 1–2 questions to actually use</li>
            <li>Do not try to memorize the entire brief</li>
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
