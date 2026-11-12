import GetInTouch from '../components/GetInTouch'
import usePageTitle from '../usePageTitle'
import assist from '../assets/assist.png'

const help = [
  ['Direction', 'Choose a path that matches work you can point to, not a trend from last quarter.'],
  ['Instructors', 'People who have done the job sit with the cohort. The lesson is the work.'],
  ['Material', 'Course access stays available after the group ends, so you can revisit a topic on the job.'],
  ['Practice', 'Tasks look like a workday. Then we talk about how you made the decisions.']
]

export default function About() {
  usePageTitle('About us – ClassBoxes Technologies')

  return (
    <main className="studio-page">
      <section className="studio-hero">
        <div className="container studio-hero-grid">
          <div>
            <p className="kicker dot">Who we are</p>
            <h1>A classroom and a hiring desk, kept in the same conversation.</h1>
            <p className="quiet">
              ClassBoxes teaches the tools companies are hiring for, then introduces those people to teams in New Jersey, across the United States, and in Canada. The training is not a brochure. The hiring is not a pile of resumes.
            </p>
          </div>
          <div className="frame">
            <img src={assist} alt="ClassBoxes team at work" />
          </div>
        </div>
      </section>

      <section className="band sand">
        <div className="container">
          <div className="story-grid">
            <article className="story">
              <p className="kicker">Classroom</p>
              <h3>Learn the stack a team already uses.</h3>
              <p>Cloud, application development, analysis, and quality. Cohorts stay close to the tools named in real job descriptions.</p>
            </article>
            <article className="story">
              <p className="kicker">Hiring desk</p>
              <h3>Introductions after a real conversation.</h3>
              <p>We speak with the person, look at the work, and only then send a name to a company that asked for that skill.</p>
            </article>
            <article className="story">
              <p className="kicker">After the start</p>
              <h3>We stay past the signature.</h3>
              <p>The first month is part of the engagement. If the fit is wrong, we would rather hear it early.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker dot">What you can expect</p>
          <h2>Help that is specific enough to use.</h2>
          <div className="help-grid">
            {help.map(([title, text]) => (
              <article className="help-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch
        eyebrow="Write to us"
        title="Ask about a program or a role"
        text="Tell us whether you are hiring, learning, or both. We answer from Piscataway."
        source="about-us"
      />
    </main>
  )
}
