import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

export default function PageLoader({ children }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 280)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{`
        .cb-page-loader {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.45s ease, visibility 0.45s ease;
        }

        .cb-page-loader.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .cb-loader-logo {
          width: 310px;
          max-width: 75%;
          height: auto;
          object-fit: contain;
          margin-bottom: 30px;
        }

        .cb-loader-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cb-loader-dots span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #f04455;
          animation: cb-loader-bounce 0.9s infinite ease-in-out;
        }

        .cb-loader-dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .cb-loader-dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes cb-loader-bounce {
          0%, 80%, 100% {
            transform: scale(0.7);
            opacity: 0.5;
          }

          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .cb-page-content {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .cb-page-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 576px) {
          .cb-loader-logo {
            width: 240px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cb-page-loader,
          .cb-page-content {
            transition: none;
          }

          .cb-loader-dots span {
            animation: none;
          }
        }
      `}</style>

      {!loaded && (
        <div className="cb-page-loader">
          <img
            src={logo}
            alt="ClassBoxes"
            className="cb-loader-logo"
          />

          <div className="cb-loader-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      <div className={`cb-page-content ${loaded ? 'visible' : ''}`}>
        {children}
      </div>
    </>
  )
}