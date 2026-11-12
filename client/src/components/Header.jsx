
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header({ onSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1)

      const frame = requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })

      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname, location.hash])

  const links = [
    ['About us', '/about-us'],
    ['Find a Job', '/find-a-job'],
    ['Find Talent', '/find-talent'],
    ['Test your Skills', '/test-your-skills'],
    ['Contact Us', '/contact-us']
  ]

  return (
    <>
      <style>{`
        .cb-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 105px;
          z-index: 1050;
          background: transparent;
          box-shadow: none;
          transition: height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .cb-header.scrolled {
          height: 76px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(12px);
        }

        .cb-header .navbar {
          padding: 0;
        }

        .cb-logo {
          display: block;
          width: 300px;
          height: 82px;
          object-fit: contain;
          object-position: left center;
          transition: width 0.3s ease, height 0.3s ease;
        }

        .cb-header.scrolled .cb-logo {
          width: 265px;
          height: 65px;
        }

        .cb-nav-menu {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .cb-nav-menu > div {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .cb-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 8px 0 !important;
          color: #292929;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .cb-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #f04455;
          border-radius: 5px;
          transition: width 0.25s ease;
        }

        .cb-nav-link:hover {
          color: #f04455;
        }

        .cb-nav-link:hover::after,
        .cb-nav-link.active::after {
          width: 100%;
        }

        .cb-nav-link.active {
          color: #f04455;
        }

        .cb-search-btn {
          background: none;
          border: 0;
          cursor: pointer;
          font-family: inherit;
        }

        .cb-search {
          font-size: 18px;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .cb-nav-link:hover .cb-search {
          transform: scale(1.12);
          color: #f04455;
        }

        .cb-phone-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 21px;
          background: #f04455;
          color: #ffffff;
          border: 1px solid #f04455;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cb-phone-btn:hover {
          background: #d92f42;
          border-color: #d92f42;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(240, 68, 85, 0.22);
        }

        .cb-header .navbar-toggler {
          padding: 8px;
          border: none;
          box-shadow: none;
          font-size: 25px;
          color: #292929;
        }

        .cb-header .navbar-toggler:focus {
          box-shadow: none;
        }

        @media (max-width: 1399.98px) {
          .cb-logo {
            width: 260px;
          }

          .cb-header.scrolled .cb-logo {
            width: 235px;
          }

          .cb-nav-menu {
            gap: 20px;
          }

          .cb-nav-menu > div {
            gap: 19px;
          }

          .cb-nav-link {
            font-size: 13px;
          }

          .cb-phone-btn {
            padding: 12px 16px;
            font-size: 12px;
          }
        }

        @media (max-width: 991.98px) {
          .cb-header {
            height: 82px;
          }

          .cb-header.scrolled {
            height: 72px;
          }

          .cb-logo {
            width: 235px;
            height: 65px;
          }

          .cb-header.scrolled .cb-logo {
            width: 215px;
            height: 58px;
          }

          .cb-nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            display: none;
            padding: 20px 6% 25px;
            background: #ffffff;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
            border-top: 1px solid rgba(0, 0, 0, 0.05);
          }

          .cb-nav-menu.show {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .cb-nav-menu > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }

          .cb-nav-link {
            width: fit-content;
            padding: 9px 0 !important;
            font-size: 15px;
          }

          .cb-phone-btn {
            margin-top: 5px;
            padding: 13px 20px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .cb-header {
            height: 72px;
          }

          .cb-header.scrolled {
            height: 65px;
          }

          .cb-logo {
            width: 190px;
            height: 55px;
          }

          .cb-header.scrolled .cb-logo {
            width: 175px;
            height: 48px;
          }

          .cb-header .navbar-toggler {
            font-size: 23px;
          }

          .cb-nav-menu {
            padding: 17px 5% 22px;
          }
        }
      `}</style>

      <header className={`cb-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar h-100">
          <div className="container-fluid px-3 px-lg-4 px-xl-5 h-100">
            <div className="d-flex align-items-center justify-content-between h-100 w-100">

              <Link to="/" className="navbar-brand m-0 p-0">
                <img
                  src={logo}
                  alt="ClassBoxes Logo"
                  className="cb-logo"
                />
              </Link>

              <button
                className="navbar-toggler d-lg-none"
                type="button"
                onClick={() => setOpen(previous => !previous)}
                aria-label="Toggle navigation"
                aria-expanded={open}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`cb-nav-menu ${open ? 'show' : ''}`}>
                <div>
                  {links.map(([name, href]) => (
                    <Link
                      key={name}
                      to={href}
                      className={`nav-link cb-nav-link${location.pathname === href ? ' active' : ''}`}
                      onClick={() => setOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}

                  <button
                    type="button"
                    className="nav-link cb-nav-link cb-search-btn"
                    aria-label="Search"
                    onClick={() => {
                      setOpen(false)
                      onSearch?.()
                    }}
                  >
                    <i className="bi bi-search cb-search"></i>
                  </button>
                </div>

                <a
                  href="tel:+15513555230"
                  className="cb-phone-btn"
                >
                  <i className="bi bi-telephone-fill"></i>
                  +1-551-355-5230
                </a>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
