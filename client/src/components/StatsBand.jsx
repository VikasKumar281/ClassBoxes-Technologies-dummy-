import { stats } from '../data/company'

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-grid">
          {stats.map(([value, label]) => (
            <article className="stat-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
