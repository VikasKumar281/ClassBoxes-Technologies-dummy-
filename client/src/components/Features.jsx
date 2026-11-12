const items = [
  ['🎓', 'red-bg', '1500+ Candidates', 'Empowering jobseekers to secure their dream jobs through our comprehensive training and placement services.'],
  ['💻', 'dark-bg', '10+ Course', 'Diverse training in 10+ courses showcasing our commitment to continuous learning and professional development.'],
  ['✔', 'red-bg', '100% Success', 'We deliver skilled professionals and effective training solutions that meet client needs, with proven success at our agency.'],
  ['🎧', 'dark-bg', 'Realtime Support', 'We offers real-time support to ensure a seamless and successful training and recruitment experience.']
]

export default function Features() {
  return (
    <section className="section center" id="about">
      <div className="container">
        <p className="eyebrow">MORE THAN JUST AGENCY</p>
        <h2><span className="red">Why ClassBoxes</span><br />to sustainable recruiting?</h2>
        <p className="lead">
          Classboxes is a <span className="red">recruitment company in New Jersey, USA</span> that specializes in sourcing, screening, and providing job candidates to organizations that require them. We work closely with businesses across different industries to understand their staffing needs and find the most suitable candidates for their roles. They play an essential role in connecting job seekers with employers and helping businesses build a skilled workforce.
        </p>
        <div className="features">
          {items.map(([icon, color, title, text]) => (
            <div className="feature" key={title}>
              <div className={'icon ' + color}>{icon}</div>
              <h3>{title}</h3>
              <i className="line"></i>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}