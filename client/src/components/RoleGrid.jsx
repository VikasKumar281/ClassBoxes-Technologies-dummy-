import { roles } from '../data/company'

export default function RoleGrid() {
  return (
    <section className="role-band">
      <div className="container">
        <h2 className="band-title">Candidate in Multiple Technologies</h2>
        <div className="role-grid">
          {roles.map(([name, src]) => (
            <article className="role-card" key={name}>
              <img src={src} alt="" />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
