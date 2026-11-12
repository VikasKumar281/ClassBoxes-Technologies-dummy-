import GetInTouch from '../components/GetInTouch'
import usePageTitle from '../usePageTitle'
import skillsHero from '../assets/brand/skills-hero.jpg'

const steps = [
  ['01', 'Register Yourself'],
  ['02', 'Participate'],
  ['03', 'Result Announcement'],
  ['04', 'Prize Distribution']
]

export default function TestSkills() {
  usePageTitle('Test your Skills – ClassBoxes Technologies')

  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="page-kicker">CHECK YOUR TECHNICAL SKILLS AND WIN PRIZES</p>
              <h1>
                <span>Test your Skills</span>
                <br />
                &amp; Win Prizes
              </h1>
              <p>
                We at Classboxes Technologies believe that everyone has a unique set of skills that deserve recognition. That’s why we’ve created a platform where individuals can test their skills and win prizes. Our platform offers a variety of skill-based competitions, from coding challenges to design contests, providing opportunities for people to showcase their talent and compete with others.
              </p>
              <p>
                We understand the importance of skill development and recognize the hard work and dedication required to excel in any field. That’s why we’re proud to offer this initiative, which promotes skill development and rewards individuals for their efforts. Join us at Classboxes Technologies and take the first step towards testing your skills and winning exciting prizes!
              </p>
              <div className="hero-actions">
                <a className="cb-btn" href="#inquiry">Register Yourself</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-art">
                <img src={skillsHero} alt="Test your skills and win prizes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="step-band">
        <div className="container">
          <p className="page-kicker">A REGULAR ONLINE EXAM TO TEST YOUR SKILLS</p>
          <h2 className="band-title">Prepare yourself for Exam</h2>
          <p className="step-copy">
            Participants should ensure they have the necessary software, hardware, and a quiet environment when participating in an online exam. The results are usually available almost instantly or within a few days, depending on the exam’s complexity. Prize distribution in online exams may vary, and it’s essential to read the instructions carefully to understand how it works. An exam requires preparation, focus, and attention to detail to ensure success.
          </p>
          <div className="step-grid">
            {steps.map(([number, label]) => (
              <article className="step-card" key={number}>
                <span>{number}</span>
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch
        eyebrow="TEST YOUR SKILLS"
        title="Register Yourself"
        text="Join us at Classboxes Technologies and take the first step towards testing your skills and winning exciting prizes!"
        showWorkAuth
        source="test-your-skills"
      />
    </main>
  )
}
