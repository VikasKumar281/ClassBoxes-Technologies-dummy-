import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const menus = [
  {
    label: 'What We Do',
    items: [
      ['Hire for a team', '/find-talent'],
      ['Skill reviews', '/test-your-skills']
    ]
  },
  {
    label: 'Who We Are',
    items: [['Our story', '/about-us']]
  },
  {
    label: 'Careers',
    items: [['Open roles', '/find-a-job']]
  }
]

export default function Header({ onSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState('')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDrop('')
    if (location.hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <>
      <style>{`
        .cb-header {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1120px, calc(100% - 24px));
          height: 72px;
          z-index: 1050;
          background: rgba(255,255,255,0.94);
          border-radius: 999px;
          box-shadow: 0 14px 40px rgba(16, 24, 40, 0.1);
          backdrop-filter: blur(16px);
        }

        .cb-header nav,
        .cb-header .bar {
          height: 100%;
        }

        .cb-header .bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 14px 0 18px;
        }

        .cb-logo {
          width: 158px;
          height: 44px;
          object-fit: contain;
        }

        .cb-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cb-drop { position: relative; }

        .cb-drop > button,
        .cb-direct {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 0;
          background: transparent;
          color: #2a2e38;
          font-family: inherit;
          font-size: 14.5px;
          font-weight: 600;
          padding: 10px 12px;
          cursor: pointer;
          text-decoration: none;
        }

        .cb-drop > button i { font-size: 11px; }

        .cb-direct.active,
        .cb-drop.on > button,
        .cb-drop > button:hover,
        .cb-direct:hover { color: #e10600; }

        .cb-drop-panel {
          display: none;
          position: absolute;
          top: calc(100% + 14px);
          left: 0;
          min-width: 210px;
          padding: 8px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 18px 40px rgba(16, 24, 40, 0.12);
        }

        .cb-drop:hover .cb-drop-panel,
        .cb-drop.open .cb-drop-panel { display: grid; }

        .cb-drop-panel a {
          padding: 10px 12px;
          border-radius: 10px;
          color: #2a2e38;
          font-weight: 600;
          text-decoration: none;
        }

        .cb-drop-panel a:hover { background: #f6f5f2; color: #e10600; }

        .cb-icon,
        .cb-hire {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .cb-icon {
          width: 40px;
          height: 40px;
          margin-left: 6px;
          border: 0;
          border-radius: 50%;
          background: transparent;
          color: #16181d;
          font-size: 16px;
          cursor: pointer;
        }

        .cb-hire {
          gap: 8px;
          height: 44px;
          margin-left: 8px;
          padding: 0 16px;
          border-radius: 999px;
          background: #e10600;
          color: #fff;
          font-weight: 700;
          text-decoration: none;
        }

        .cb-hire:hover { color: #fff; background: #c10500; }

        .cb-burger {
          display: none;
          border: 0;
          background: transparent;
          font-size: 24px;
        }

        @media (max-width: 991px) {
          .cb-burger { display: block; }
          .cb-nav {
            display: none;
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            width: 100%;
            padding: 12px;
            border-radius: 20px;
            background: #fff;
            box-shadow: 0 16px 36px rgba(16, 24, 40, 0.12);
            flex-direction: column;
            align-items: stretch;
          }
          .cb-nav.show { display: flex; }
          .cb-drop-panel {
            position: static;
            box-shadow: none;
            padding: 0 0 0 12px;
          }
          .cb-drop:hover .cb-drop-panel { display: none; }
          .cb-drop.open .cb-drop-panel { display: grid; }
          .cb-hire, .cb-icon { margin: 6px 0 0; }
        }
      `}</style>

      <header className={`cb-header ${scrolled ? 'scrolled' : ''}`}>
        <nav>
          <div className="bar">
            <Link to="/" aria-label="ClassBoxes home">
              <img className="cb-logo" src={logo} alt="ClassBoxes" />
            </Link>
            <button className="cb-burger" type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
              <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
            <div className={`cb-nav ${open ? 'show' : ''}`}>
              {menus.map((menu) => {
                const active = menu.items.some(([ , href]) => location.pathname === href)
                return (
                  <div
                    key={menu.label}
                    className={`cb-drop${drop === menu.label ? ' open' : ''}${active ? ' on' : ''}`}
                  >
                    <button
                      type="button"
                      aria-expanded={drop === menu.label}
                      onClick={() => setDrop((value) => (value === menu.label ? '' : menu.label))}
                    >
                      {menu.label} <i className="bi bi-chevron-down"></i>
                    </button>
                    <div className="cb-drop-panel">
                      {menu.items.map(([name, href]) => (
                        <Link key={href} to={href} onClick={() => setOpen(false)}>{name}</Link>
                      ))}
                    </div>
                  </div>
                )
              })}
              <Link className={`cb-direct${location.pathname === '/contact-us' ? ' active' : ''}`} to="/contact-us">Contact</Link>
              <button
                className="cb-icon"
                type="button"
                aria-label="Search"
                onClick={() => {
                  setOpen(false)
                  onSearch?.()
                }}
              >
                <i className="bi bi-search"></i>
              </button>
              <Link className="cb-hire" to="/find-talent">Hire Talent <i className="bi bi-arrow-up-right"></i></Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
