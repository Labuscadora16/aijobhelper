export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">AIJobHelper</div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Practical AI systems for landing jobs and advancing your career.</h1>
          <p>
            Curated systems, prompts, and frameworks that help people use AI effectively in the job market.
            Clear methods. Real limitations. No hype.
          </p>
        </section>

        <section>
          <h2 className="section-title">Categories</h2>
          <div className="grid">
            <div className="card">
              <h3>Job Search & Discovery</h3>
              <p>Systems for finding the right roles and companies using AI.</p>
              <span className="tag">Coming soon</span>
            </div>
            <div className="card">
              <h3>Resume & Applications</h3>
              <p>Tailoring materials and submitting higher-quality applications.</p>
              <span className="tag">Coming soon</span>
            </div>
            <div className="card">
              <h3>Interview Preparation</h3>
              <p>Practice frameworks and AI-assisted preparation systems.</p>
              <span className="tag">Coming soon</span>
            </div>
            <div className="card">
              <h3>Networking & Outreach</h3>
              <p>Smarter outreach and relationship systems powered by AI.</p>
              <span className="tag">Coming soon</span>
            </div>
            <div className="card">
              <h3>Career Strategy</h3>
              <p>Longer-term positioning, promotion, and advancement systems.</p>
              <span className="tag">Coming soon</span>
            </div>
            <div className="card">
              <h3>Salary & Offers</h3>
              <p>Negotiation frameworks and offer evaluation methods.</p>
              <span className="tag">Coming soon</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Weekly Newsletter</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', maxWidth: '32rem' }}>
            One high-quality system or framework each week. Clear context, reasoning, and limitations. No filler.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Newsletter coming soon on Substack.
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
