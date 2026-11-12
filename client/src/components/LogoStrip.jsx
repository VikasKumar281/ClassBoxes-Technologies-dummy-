import { logos } from '../data/company'

export default function LogoStrip({
  eyebrow = 'BUSINESS ARE FINDING GREAT EMPLOYEES',
  title = 'Trusted by Biggest Business Names',
  text = 'Our clients have always trusted our expertise and advice. Some of our Top Recruiting clients.'
}) {
  const loop = [...logos, ...logos]

  return (
    <section className="logo-strip center">
      <div className="container">
        <p className="page-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-lead">{text}</p>
      </div>
      <div className="logo-window" aria-label="Client logos">
        <div className="logo-track">
          {loop.map(([name, src], index) => (
            <img key={`${name}-${index}`} src={src} alt={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
