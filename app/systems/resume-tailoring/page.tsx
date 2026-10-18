import Link from 'next/link'

export default function ResumeTailoring() {
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
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>← All systems</Link>

        <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          <span className="tag">System</span>
          <span className="tag">Resume & Applications</span>
        </div>
        
        <h1 style={{ fontSize: '1.85rem', margin: '0.75rem 0', letterSpacing: '-0.02em' }}>
          Targeted Resume Tailoring System
        </h1>
        
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          A constrained process for adapting a truthful master resume to a specific job description without inventing experience or stuffing keywords.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>The problem it solves</h2>
          <p style={{ color: 'var(--muted)' }}>
            Most people either send a generic resume or ask AI to “make it better” for each role. The first approach loses relevance. The second often produces inflated language or claims that cannot be defended in an interview. This system sits between those two failure modes.
          </p>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>When it works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You already have real experience that overlaps with the target role</li>
            <li>The job description uses specific language you can honestly mirror</li>
            <li>You are applying to multiple similar roles and rewriting from scratch is costly</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>When to skip it</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>The gap between your background and the role is large</li>
            <li>You do not yet have a clean, accurate master resume</li>
            <li>You are unwilling to review every change before sending</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Maintain one master resume that is 100% accurate. No inflation.</li>
            <li style={{ marginBottom: '0.5rem' }}>Copy the full job description.</li>
            <li style={{ marginBottom: '0.5rem' }}>Run the prompt below in Claude, ChatGPT, Grok, or similar.</li>
            <li style={{ marginBottom: '0.5rem' }}>Review every rewritten bullet. Delete or correct anything that feels off.</li>
            <li>Save the tailored version with the company name for tracking.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Core prompt</h2>
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
- Never invent experience, skills, metrics, or results
- Prefer rewriting existing bullets so they use language from the job description where it is truthful
- Keep every claim defensible in an interview
- Flag any clear gaps between my background and the role
- Do not add buzzwords or soft skills that are not already evidenced

My master resume:
[paste full resume]

Job description:
[paste full job description]

Output in this exact structure:
1. Tailored resume (clean, ready to copy)
2. List of the most important language alignments you made and why
3. Gaps or mismatches I should be ready to address if asked`}
          </pre>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>What good output looks like</h2>
          <p style={{ color: 'var(--muted)' }}>
            The tailored version should feel like your real experience written in the company’s language. 
            Metrics that were in the master resume stay. New metrics never appear. 
            The gap list should be honest — if a required skill is missing, it should be called out.
          </p>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Common failure modes</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>The AI invents metrics or tools → reject those lines immediately</li>
            <li>The output becomes generic corporate-speak → tighten the “never invent” and “no buzzwords” rules</li>
            <li>You stop reviewing because the first few versions looked fine → quality drifts</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How it connects to other systems</h2>
          <p style={{ color: 'var(--muted)' }}>
            Works best after the Job Description Decoder (so you know what language and priorities actually matter) 
            and before Outreach or Interview preparation.
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
