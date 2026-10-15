import Link from 'next/link'

export default function ResumeTailoring() {
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
          Targeted Resume Tailoring System
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Adapt your master resume to a specific job description without inventing experience or keyword stuffing.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>When this works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You already have solid experience that overlaps with the role</li>
            <li>The job description uses specific language you can honestly mirror</li>
            <li>You want to reduce the time spent rewriting for every application</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Important limitations</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>AI cannot create real experience you do not have</li>
            <li>Overly aggressive tailoring can feel inauthentic in interviews</li>
            <li>You must review and own every claim</li>
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
{`You are helping me tailor my resume for a specific role.

Rules:
- Never invent experience, skills, or results
- Prefer rewriting existing bullets to better match the language of the job description
- Keep the resume truthful and defensible in an interview
- Flag any clear gaps between my background and the role

My master resume:
[paste resume]

Job description:
[paste job description]

Output:
1. Tailored resume version
2. Short list of the most important language alignments you made
3. Any gaps I should be ready to address`}
          </pre>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Keep a clean master resume that is 100% accurate</li>
            <li>Paste the full job description</li>
            <li>Run the prompt in Claude, ChatGPT, Grok, or similar</li>
            <li>Review every change before using it</li>
            <li>Save the tailored version with the company name for tracking</li>
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
