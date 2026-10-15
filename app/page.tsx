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
            Clear methods for using AI in the job market. Each system includes the approach, when it works, and important limitations.
          </p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Featured Systems</h2>
          <div className="grid">

            <div className="card">
              <h3>Targeted Resume Tailoring System</h3>
              <p>
                Feed your master resume + a job description into an AI and get a truthful, language-aligned version that mirrors the role without keyword stuffing or inventing experience.
              </p>
              <span className="tag">Resume & Applications</span>
              <span className="tag">High impact</span>
            </div>

            <div className="card">
              <h3>Interview Answer Framework</h3>
              <p>
                A structured method for turning behavioral and technical questions into clear, concise answers using the Situation-Action-Result pattern, refined by AI for clarity and impact.
              </p>
              <span className="tag">Interview Prep</span>
            </div>

            <div className="card">
              <h3>Company Research Brief</h3>
              <p>
                Generate a focused one-page brief on a company before interviews or outreach: recent news, product direction, team structure signals, and likely interview themes.
              </p>
              <span className="tag">Job Search</span>
              <span className="tag">Interview Prep</span>
            </div>

            <div className="card">
              <h3>Outreach Message System</h3>
              <p>
                Create short, specific LinkedIn or email messages that reference something real about the person or company instead of generic templates.
              </p>
              <span className="tag">Networking</span>
            </div>

            <div className="card">
              <h3>Job Description Decoder</h3>
              <p>
                Break down a job posting into must-have vs. nice-to-have skills, hidden priorities, and the language the company uses so you can align your materials accurately.
              </p>
              <span className="tag">Resume & Applications</span>
            </div>

            <div className="card">
              <h3>Offer Evaluation Framework</h3>
              <p>
                A structured way to compare total compensation, growth potential, role scope, and risk factors so you make clearer decisions under time pressure.
              </p>
              <span className="tag">Salary & Offers</span>
            </div>

          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">How to use these systems</h2>
          <div style={{ color: 'var(--muted)', maxWidth: '40rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Each system is designed to be run with any capable AI (Claude, ChatGPT, Grok, etc.). 
              You provide the specific inputs (your resume, the job description, the company name). 
              The AI follows a constrained process so the output stays truthful and useful.
            </p>
            <p>
              Full prompts and step-by-step versions of each system are being added. 
              The weekly newsletter will go deeper on one system at a time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Weekly Newsletter</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', maxWidth: '32rem' }}>
            One high-quality system or framework each week. Clear context, reasoning, and limitations. No filler.
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Newsletter launching on Substack soon.
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
