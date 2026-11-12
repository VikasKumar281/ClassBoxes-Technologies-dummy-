import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchSite } from '../data/searchIndex'

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const results = searchSite(query).slice(0, 6)

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const go = (path) => {
    onClose()
    setQuery('')
    navigate(path)
  }

  const submit = (event) => {
    event.preventDefault()
    const value = query.trim()
    if (!value) return
    go(`/search?q=${encodeURIComponent(value)}`)
  }

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search ClassBoxes" onClick={onClose}>
      <style>{`
        .search-overlay {
          position: fixed;
          inset: 0;
          z-index: 3400;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 108px 16px 32px;
          overflow: auto;
          background: rgba(17, 20, 28, 0.45);
          backdrop-filter: blur(4px);
        }

        .search-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border: 0;
          border-radius: 50%;
          background: #f6f6f8;
          color: #303542;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
        }

        .search-panel {
          position: relative;
          width: min(680px, 100%);
          max-height: calc(100vh - 140px);
          padding: 22px;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
          overflow: auto;
        }

        .search-panel form {
          position: relative;
          max-width: none;
          margin: 28px 0 0;
        }

        .search-panel input {
          width: 100%;
          height: 68px;
          padding: 0 64px 0 28px;
          border: 1px solid #f1f1f1;
          border-radius: 40px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          color: #222;
          font-size: 18px;
          font-family: inherit;
        }

        .search-panel input:focus {
          outline: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(240, 68, 85, 0.25);
        }

        .search-go {
          position: absolute;
          top: 50%;
          right: 18px;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: #8d8d8d;
          font-size: 20px;
          cursor: pointer;
        }

        .search-go:hover {
          color: #f04455;
        }

        .search-suggest {
          margin-top: 18px;
          display: grid;
          gap: 8px;
        }

        .search-suggest button {
          width: 100%;
          padding: 14px 16px;
          border: 0;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .search-suggest button:hover {
          outline: 1px solid #f04455;
        }

        .search-suggest small {
          color: #f04455;
          font-weight: 700;
        }

        .search-suggest strong {
          display: block;
          margin-top: 2px;
          color: #303542;
          font-size: 16px;
        }

        .search-suggest p {
          margin: 4px 0 0;
          color: #555;
          font-size: 13.5px;
        }
      `}</style>

      <div className="search-panel" onClick={(event) => event.stopPropagation()}>
      <button className="search-close" type="button" onClick={onClose} aria-label="Close search">
        ×
      </button>
        <form onSubmit={submit}>
          <input
            ref={inputRef}
            type="text"
            role="searchbox"
            value={query}
            placeholder="Looking for..."
            aria-label="Looking for"
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="search-go" type="submit" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>

        {query.trim() && (
          <div className="search-suggest">
            {results.length === 0 && (
              <p className="empty-note">No matches for “{query.trim()}”. Try job, talent, skills, or contact.</p>
            )}
            {results.map((item) => (
              <button key={item.path + item.title} type="button" onClick={() => go(item.path)}>
                <small>{item.path}</small>
                <strong>{item.title}</strong>
                <p>{item.snippet}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
