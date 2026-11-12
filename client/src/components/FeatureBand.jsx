const icons = ['bi-briefcase', 'bi-lightning-charge', 'bi-cash-coin', 'bi-headset']

export default function FeatureBand({ eyebrow, title, text, items }) {
  return (
    <section className="feature-band">
      <div className="container">
        <p className="page-kicker">{eyebrow}</p>
        <h2 className="band-title">{title}</h2>
        <p className="section-lead" style={{ marginLeft: 0 }}>{text}</p>
        <div className="feature-grid">
          {items.map((item, index) => (
            <article className="feature-card" key={item}>
              <i className={`bi ${icons[index] || 'bi-check-circle'}`}></i>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
