import Link from 'next/link'

export default function OutreachSystem() {
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
          Outreach Message System
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Create short, specific LinkedIn or email messages that reference something real about the person or company.
        </p>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>When this works well</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>You have a specific reason to reach out (shared interest, relevant work, mutual connection)</li>
            <li>You want to avoid generic “I’d love to pick your brain” messages</li>
            <li>You are willing to do a small amount of real research first</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Important limitations</h2>
          <ul style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>AI cannot invent a genuine connection that does not exist</li>
            <li>Mass-generated messages still feel mass-generated</li>
            <li>Response rates depend more on relevance than on perfect wording</li>
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
{`Help me write a short outreach message.

Context:
- Person: [name and role]
- Why I’m reaching out: [specific reason]
- Something real I noticed: [post, project, company news, shared background]
- What I’m asking for: [clear, low-friction ask]

Rules:
- Keep it under 100 words
- Lead with the specific observation or reason, not with “I hope this finds you well”
- Sound like a human, not a template
- Make the ask easy to say yes or no to

Output two versions: one slightly more formal, one more casual.`}
          </pre>
        </section>

        <section>
          <h2 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>How to run it</h2>
          <ol style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
            <li>Do minimal real research first (one recent post, project, or company update)</li>
            <li>Run the prompt with that specific detail</li>
            <li>Edit so it still sounds like you</li>
            <li>Send a small number of high-relevance messages rather than many generic ones</li>
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
