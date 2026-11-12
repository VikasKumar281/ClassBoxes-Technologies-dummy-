import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { searchSite } from '../data/searchIndex'
import usePageTitle from '../usePageTitle'

export default function Search() {
  const [params, setParams] = useSearchParams()
  const queryParam = params.get('q') || ''
  const [query, setQuery] = useState(queryParam)
  usePageTitle(queryParam ? `Search: ${queryParam} – ClassBoxes` : 'Search – ClassBoxes')

  useEffect(() => {
    setQuery(queryParam)
  }, [queryParam])

  const results = useMemo(() => searchSite(queryParam), [queryParam])

  const onSubmit = (event) => {
    event.preventDefault()
    const value = query.trim()
    if (!value) {
      setParams({})
      return
    }
    setParams({ q: value })
  }

  return (
    <main className="inner-page search-page">
      <section>
      <div className="container">
        <p className="page-kicker">SEARCH</p>
        <h1>Looking for...</h1>
        <form className="inquiry-form" onSubmit={onSubmit} style={{ maxWidth: 720, boxShadow: 'none', padding: 0 }}>
          <label>
            Search the site
            <input
              type="search"
              value={query}
              placeholder="Looking for..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <button className="cb-btn" type="submit">Search</button>
        </form>

        {queryParam && (
          <p className="section-lead" style={{ margin: '22px 0 0' }}>
            {results.length} result{results.length === 1 ? '' : 's'} for “{queryParam}”
          </p>
        )}

        <div className="result-list">
          {!queryParam && <p className="empty-note">Search jobs, talent, skills, training, or contact details.</p>}
          {queryParam && results.length === 0 && (
            <p className="empty-note">Nothing matched that search. Try “Java”, “hire”, or “Piscataway”.</p>
          )}
          {results.map((item) => (
            <Link className="result-card" to={item.path} key={item.path + item.title}>
              <small>{item.path}</small>
              <strong>{item.title}</strong>
              <p>{item.snippet}</p>
            </Link>
          ))}
        </div>
      </div>
      </section>
    </main>
  )
}
