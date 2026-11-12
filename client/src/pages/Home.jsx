import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import { logos } from '../data/company'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'

const tracks = [
  {
    id: 'cloud',
    label: 'Cloud & Delivery',
    kicker: 'Cloud & delivery',
    title: 'Someone who can ship a release and undo it',
    note: 'Spoken with in person · five or more years on a live system',
    tags: ['AWS', 'Azure', 'Docker', 'Terraform', 'CI'],
    criteria: [
      ['01', 'Recovery', 'A failover they have actually run, not a diagram they can recite.'],
      ['02', 'Small releases', 'Pipelines, reviews, and a rollback that does not need a war room.'],
      ['03', 'Signals', 'Logs and alerts a person on call can understand at night.']
    ]
  },
  {
    id: 'apps',
    label: 'Application Engineering',
    kicker: 'Application engineering',
    title: 'A product engineer for the systems customers touch',
    note: 'Reviewed on a task · Java, React, Python, or a close neighbor',
    tags: ['Java', 'React', 'Python', 'APIs', 'SQL'],
    criteria: [
      ['01', 'Clear interfaces', 'The feature can grow without the code becoming a private language.'],
      ['02', 'The paths that break', 'Tests sit around the flows a customer actually uses.'],
      ['03', 'A plain explanation', 'They can tell a product owner why a tradeoff was made.']
    ]
  },
  {
    id: 'data',
    label: 'Data & Quality',
    kicker: 'Data & quality',
    title: 'A person who makes the numbers usable',
    note: 'Checked against a real report · analysis, QA, or automation',
    tags: ['SQL', 'Python', 'QA', 'Splunk', 'Dashboards'],
    criteria: [
      ['01', 'Shared definitions', 'Engineering and the business mean the same thing by the metric.'],
      ['02', 'A catch before launch', 'Checks that stop a bad release from reaching customers.'],
      ['03', 'Monday morning', 'A report a manager can act on without a translator.']
    ]
  }
]

const notes = [
  [blog1, 'Hiring when Java roles stay open', 'What a team can change when the same seat has been vacant for a quarter.', 'https://www.classboxes.com/the-java-talent-crunch-strategies-for-finding-and-hiring-the-best/'],
  [blog2, 'Where Java demand is actually coming from', 'A look at the teams still building on Java, and the skills they ask for first.', 'https://www.classboxes.com/navigating-the-high-demand-for-java-developers/'],
  [blog3, 'Teaching the people you already have', 'Upskilling works when the lessons match the system in production.', 'https://www.classboxes.com/upskilling-your-java-developers-investing-in-continuous-learning/'],
  [blog4, 'What to listen for in a Java interview', 'Signals that matter more than a long list of frameworks.', 'https://www.classboxes.com/recruiting-java-developers/']
]

export default function Home() {
  const [active, setActive] = useState(tracks[0].id)
  const track = tracks.find((item) => item.id === active) || tracks[0]

  return (
    <main className="page-content">
      <Hero />

      <section className="band">
        <div className="container">
          <div className="audience">
            <article className="paper">
              <div className="flag">
                <span className="mark"><i className="bi bi-buildings"></i></span>
                <b>FOR HIRING TEAMS</b>
              </div>
              <h3>Fill the seats that are slowing the roadmap.</h3>
              <p>Send the role as you would describe it to your own team. We come back with a few people who can talk through that work.</p>
              <ul className="checks">
                <li><i className="bi bi-check-circle"></i> Shortlists built from people we have already spoken with</li>
                <li><i className="bi bi-check-circle"></i> Contract, a trial period, or a permanent seat</li>
                <li><i className="bi bi-check-circle"></i> Payroll and the first week handled with you</li>
              </ul>
              <div className="pill-row">
                <Link className="pill red" to="/find-talent#inquiry">Send a role <i className="bi bi-arrow-up-right"></i></Link>
                <Link className="pill ghost" to="/find-talent">See how hiring works</Link>
              </div>
            </article>
            <article className="ink">
              <div className="flag">
                <span className="mark"><i className="bi bi-briefcase"></i></span>
                <b>FOR PEOPLE CHANGING ROLES</b>
              </div>
              <h3>Walk into the interview with proof, not a longer resume.</h3>
              <p>We practice the conversation, then introduce you to a team that asked for the stack you use.</p>
              <ul className="checks">
                <li><i className="bi bi-check-circle"></i> Roles in application engineering, cloud, and data</li>
                <li><i className="bi bi-check-circle"></i> A private introduction, not a blast to every inbox</li>
                <li><i className="bi bi-check-circle"></i> A skill review before you meet the hiring manager</li>
              </ul>
              <div className="pill-row">
                <Link className="pill dark" to="/find-a-job">Browse open paths <i className="bi bi-arrow-up-right"></i></Link>
                <Link className="pill ghost" to="/find-a-job#inquiry">Share your profile</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="band sand" id="practice">
        <div className="container">
          <div className="center-copy">
            <p className="kicker dot">How a person is read</p>
            <h2>Every introduction starts with the work, not the keyword list.</h2>
          </div>
          <div className="track-switch" role="tablist">
            {tracks.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === active ? 'on' : ''}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <article className="dossier">
            <div className="dossier-top">
              <div>
                <p className="kicker">{track.kicker}</p>
                <h3>{track.title}</h3>
                <p className="meta">{track.note}</p>
              </div>
              <div className="tags">
                {track.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="criterion-grid">
              {track.criteria.map(([number, title, text]) => (
                <article className="criterion" key={number}>
                  <div className="criterion-meta">
                    <span>Note {number}</span>
                    <em>Reviewed live</em>
                  </div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="dossier-foot">
              <p>Want a shortlist in this area?</p>
              <Link className="pill red" to="/find-talent#inquiry">Request profiles <i className="bi bi-arrow-up-right"></i></Link>
            </div>
          </article>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker dot">The path</p>
          <h2>Four steps, then a person who can start.</h2>
          <div className="phase-grid">
            {[
              ['01', 'Hear the role', 'We ask what the team is trying to ship, which tools are already in the repo, and what “good” looks like in the first month.'],
              ['02', 'Review the person', 'A conversation and a task. We listen for how they work, not only which tools they can name.'],
              ['03', 'Make the introduction', 'You meet a few people, with notes on what they have done and where they will need support.'],
              ['04', 'Stay for the first month', 'Paperwork, the first week, and a check-in after they have sat with the team.']
            ].map(([number, title, text]) => (
              <article className="phase" key={number}>
                <div className="phase-no"><em>Step {number}</em></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band sand">
        <div className="container">
          <div className="center-copy">
            <p className="kicker">Teams we have worked beside</p>
            <h2>Names you will recognize. Introductions that stayed small.</h2>
          </div>
          <div className="logo-row">
            {logos.map(([name, src]) => (
              <div className="logo-well" key={name}>
                <img src={src} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="offices">
        <div className="container">
          <p className="kicker dot">Offices</p>
          <h2>Two desks. One hiring conversation.</h2>
          <div className="office-grid">
            <article className="office-card">
              <p className="kicker">United States</p>
              <h3>Piscataway, New Jersey</h3>
              <p>371 Hoes Lane, #200, Piscataway, New Jersey 08854</p>
              <p>Monday to Friday, 9:00 a.m. to 6:00 p.m. EST</p>
              <strong><a href="tel:+15513555230">+1-551-355-5230</a></strong>
            </article>
            <article className="office-card">
              <p className="kicker">Canada</p>
              <h3>Montréal, Quebec</h3>
              <p>5 Place Ville Marie, Bureau 1400, Montréal, Quebec H3B 2G2</p>
              <p>Monday to Friday, 9:00 a.m. to 5:30 p.m. EST</p>
              <strong><a href="mailto:info@classboxes.com">info@classboxes.com</a></strong>
            </article>
          </div>
        </div>
      </section>

      <section className="band sand">
        <div className="container">
          <div className="center-copy">
            <p className="kicker">Notes from the work</p>
            <h2>Hiring notes, written for people who are in the middle of it.</h2>
          </div>
          <div className="note-grid">
            {notes.map(([image, title, text, href]) => (
              <a className="note-card" href={href} key={title} target="_blank" rel="noreferrer">
                <img src={image} alt="" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
