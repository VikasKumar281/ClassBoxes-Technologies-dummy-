import { Link } from 'react-router-dom'
import TalentForm from '../components/TalentForm'
import RoleGrid from '../components/RoleGrid'
import usePageTitle from '../usePageTitle'
import talentHero from '../assets/brand/talent-hero.png'

export default function FindTalent() {
  usePageTitle('Find Talent – ClassBoxes Technologies')

  return (
    <main className="studio-page">
      <section className="studio-hero">
        <div className="container studio-hero-grid">
          <div>
            <p className="kicker dot">Hiring</p>
            <h1>A few people, already spoken with.</h1>
            <p className="quiet">
              Describe the seat the way you would to your own team. We return a short list of people who can talk through that work, with notes on what they have done and where they will need support.
            </p>
            <div className="pill-row">
              <a className="pill red" href="#inquiry">Send the role</a>
              <Link className="pill ghost" to="/contact-us">Talk to the desk</Link>
            </div>
          </div>
          <div className="frame">
            <img src={talentHero} alt="A hiring conversation" />
          </div>
        </div>
      </section>

      <section className="band sand">
        <div className="container">
          <div className="help-grid">
            {[
              ['A short list', 'Three or four names, not a folder of lookalike resumes.'],
              ['A way to start', 'Contract, a trial that can become permanent, or a direct hire.'],
              ['The first month', 'Onboarding stays part of the engagement, not an afterthought.'],
              ['The tools you named', 'Cloud, application engineering, data, and quality, matched to the stack in the role.']
            ].map(([title, text]) => (
              <article className="help-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RoleGrid />
      <TalentForm />
    </main>
  )
}
