import Link from 'next/link'

export default function InterviewFramework() {
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
          <span className="tag">Interview Prep</span>
        </div>
        
        <h1 style={{ fontSize: '1.85rem', margin: '0.75rem 0', letterSpacing: '-0.02em' }}>
          Interview Answer Framework
        </h1>
        
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          A structured method for turning real stories into clear, concise interview answers that stay truthful and easy to deliver under pressure.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>The problem it solves</h2>
          <p style={{ color: 'var(--muted)' }}>
            Most people either ramble or freeze when asked behavioral questions. They have real experience but have not organized it into a form that is easy to deliver in 60–90 seconds. Asking AI to “write an answer” often produces polished language that does not sound like the candidate and collapses under follow-up questions.
          </p>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>When it works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You have real stories but they come out messy under pressure</li>
            <li>You want tighter answers without sounding rehearsed or fake</li>
            <li>You are preparing for behavioral or mixed interviews</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>When to skip it</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You do not yet have concrete stories from your experience</li>
            <li>You are unwilling to practice the answers out loud</li>
            <li>The role is purely technical and will be evaluated almost entirely by live coding or case work</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Collect 6–8 real stories from your experience in advance (wins, failures, conflicts, tough decisions).</li>
            <li style={{ marginBottom: '0.5rem' }}>For each likely question, paste the question + your raw notes into the prompt.</li>
            <li style={{ marginBottom: '0.5rem' }}>Edit the output until it still sounds like you.</li>
            <li style={{ marginBottom: '0.5rem' }}>Practice saying the answer out loud at least twice.</li>
            <li>Keep a short list of the final versions, not a long script.</li>
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
{`Help me prepare a strong interview answer from real experience.

Framework:
- Situation: brief context (2-3 sentences maximum)
- Action: what I specifically did
- Result: concrete outcome, ideally with a metric or clear impact

Rules:
- Keep the spoken answer under 90 seconds
- Do not invent details, metrics, or dialogue
- Prefer clarity over sounding impressive
- Flag if the underlying story feels weak or incomplete

The interview question:
[paste question]

My raw notes or what actually happened:
[paste real story]

Output:
1. Tightened answer using the framework
2. A slightly shorter alternative version
3. Likely follow-up questions this answer could invite`}
          </pre>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>What good output looks like</h2>
          <p style={{ color: 'var(--muted)' }}>
            The answer should be easy to say out loud without notes. It should contain only details you can defend. 
            The follow-up question list is often more valuable than the answer itself — it shows where the interviewer is likely to push.
          </p>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Common failure modes</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>The AI adds impressive-sounding details you cannot back up → delete them</li>
            <li>The answer becomes too polished and stops sounding like you → rewrite in your normal speaking voice</li>
            <li>You collect answers but never practice speaking them → the system fails at the moment that matters</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>How it connects to other systems</h2>
          <p style={{ color: 'var(--muted)' }}>
            Works well after Resume Tailoring (so your stories align with the language already on the page) 
            and alongside Company Research (so examples can be framed toward the company’s actual priorities).
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
