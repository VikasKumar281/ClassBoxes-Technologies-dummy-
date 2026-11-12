import { Link } from 'react-router-dom'
import GetInTouch from '../components/GetInTouch'
import RoleGrid from '../components/RoleGrid'
import usePageTitle from '../usePageTitle'
import jobHero from '../assets/brand/job-hero.jpg'

const steps = [
  ['01', 'Name the work', 'Tell us the stack you use and the kind of team you want to join.'],
  ['02', 'A short review', 'We look at how you build and how you explain a decision.'],
  ['03', 'One introduction', 'You meet a team that asked for that skill, with the context already shared.'],
  ['04', 'A clean start', 'Interview practice, the paperwork, and a person to call if the process goes quiet.']
]

export default function FindJob() {
  usePageTitle('Find a Job – ClassBoxes Technologies')

  return (
    <main className="studio-page">
      <section className="studio-hero">
        <div className="container studio-hero-grid">
          <div>
            <p className="kicker dot">Careers</p>
            <h1>A role you can explain in one sentence.</h1>
            <p className="quiet">
              We introduce you to teams that need the stack you already practice. You get a private introduction, interview practice, and a path that does not depend on sending the same resume everywhere.
            </p>
            <div className="pill-row">
              <a className="pill red" href="#inquiry">Share your profile</a>
              <Link className="pill ghost" to="/test-your-skills">Take a skill review</Link>
            </div>
          </div>
          <div className="frame">
            <img src={jobHero} alt="A candidate preparing for a role" />
          </div>
        </div>
      </section>

      <section className="band sand">
        <div className="container">
          <p className="kicker dot">How an introduction happens</p>
          <h2>From a profile to a conversation with a team.</h2>
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

      <RoleGrid />

      <GetInTouch
        eyebrow="Your profile"
        title="Tell us the work you want"
        text="Java, React, Python, cloud, or a neighboring skill. We reply with the next practical step."
        source="find-a-job"
      />
    </main>
  )
}
