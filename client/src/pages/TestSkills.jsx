import GetInTouch from '../components/GetInTouch'
import usePageTitle from '../usePageTitle'
import skillsHero from '../assets/brand/skills-hero.jpg'

const steps = [
  ['01', 'Register', 'Tell us your name, the stack you use, and whether you are open to a role.'],
  ['02', 'Take the review', 'A short look at how you build, test, and explain a decision.'],
  ['03', 'Hear the notes', 'You get a plain summary of what was strong and what to practice.'],
  ['04', 'Choose a next step', 'Keep the notes for yourself, or ask us to introduce you to a team.']
]

export default function TestSkills() {
  usePageTitle('Test your Skills – ClassBoxes Technologies')

  return (
    <main className="studio-page">
      <section className="studio-hero">
        <div className="container studio-hero-grid">
          <div>
            <p className="kicker dot">Skill reviews</p>
            <h1>Show the work before the interview.</h1>
            <p className="quiet">
              A calm review of how you build, test, and explain. Useful if you want a role through ClassBoxes, and useful if you only want to know where you stand.
            </p>
            <div className="pill-row">
              <a className="pill red" href="#inquiry">Book a review</a>
            </div>
          </div>
          <div className="frame">
            <img src={skillsHero} alt="A skills review in progress" />
          </div>
        </div>
      </section>

      <section className="band sand">
        <div className="container">
          <p className="kicker dot">What happens</p>
          <h2>Four moves. No surprise round at the end.</h2>
          <div className="phase-grid">
            {steps.map(([number, title, text]) => (
              <article className="phase" key={number}>
                <div className="phase-no"><em>Step {number}</em></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="criterion-grid">
            {[
              ['Build', 'Can you take a small feature from a blank file to something another person can run?'],
              ['Check', 'Do you notice the path that fails, and do you leave a test or a note behind?'],
              ['Explain', 'Can you say why you chose that approach, in language a teammate can use?']
            ].map(([title, text]) => (
              <article className="criterion" key={title}>
                <div className="criterion-meta"><span>We listen for</span><em>In the review</em></div>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch
        eyebrow="Book a review"
        title="Register for a skill review"
        text="Share your name and the kind of work you want to be measured on. We will reply with a time."
        showWorkAuth
        source="test-your-skills"
      />
    </main>
  )
}
