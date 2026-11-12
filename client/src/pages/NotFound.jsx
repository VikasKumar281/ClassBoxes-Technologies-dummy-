import { Link } from 'react-router-dom'
import usePageTitle from '../usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found – ClassBoxes')

  return (
    <main className="inner-page search-page">
      <section>
      <div className="container">
        <p className="page-kicker">404</p>
        <h1>This page is not on the site.</h1>
        <p className="section-lead" style={{ marginLeft: 0 }}>
          Use search, or go back to a ClassBoxes page.
        </p>
        <div className="hero-actions">
          <Link className="cb-btn" to="/">Home</Link>
          <Link className="cb-btn dark" to="/search">Search</Link>
        </div>
      </div>
      </section>
    </main>
  )
}
