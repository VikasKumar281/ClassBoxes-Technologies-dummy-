import { useEffect, useRef } from 'react'
import { logos } from '../data/company'

export default function Clients() {
  const track = useRef(null)

  const move = (dir) => {
    const el = track.current
    if (!el) return
    if (dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: dir * 240, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => move(1), 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="cb-clients">
      <style>{`
        .cb-clients {
          padding: 72px 0;
          background: linear-gradient(112deg, #f3f3f6 0 36%, #ffffff 36%);
          overflow: hidden;
        }

        .cb-clients .cb-clients-head {
          max-width: 1180px;
          margin: 0 auto 28px;
          padding: 0 6%;
        }

        .cb-clients .eyebrow {
          margin-bottom: 8px;
          color: #292929;
          font-size: 15px;
          letter-spacing: 0.6px;
        }

        .cb-clients h2 {
          margin: 0;
          color: #303441;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 800;
        }

        .cb-clients .red {
          color: #f04455;
        }

        .cb-carousel {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 4%;
        }

        .cb-arrow {
          flex: 0 0 46px;
          width: 46px;
          height: 46px;
          border: 0;
          border-radius: 50%;
          background: #fff;
          color: #303441;
          box-shadow: 0 8px 20px rgba(48, 52, 65, 0.08);
          font-size: 22px;
          cursor: pointer;
        }

        .cb-arrow:hover {
          color: #f04455;
        }

        .cb-track {
          display: flex;
          gap: 18px;
          flex: 1;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 8px 2px 16px;
        }

        .cb-track::-webkit-scrollbar {
          display: none;
        }

        .cb-logo-card {
          flex: 0 0 calc((100% - 54px) / 4);
          height: 118px;
          display: grid;
          place-items: center;
          padding: 16px 20px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 10px 28px rgba(48, 52, 65, 0.06);
        }

        .cb-logo-card img {
          max-width: 150px;
          max-height: 58px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 767px) {
          .cb-clients {
            background: #f7f7f8;
          }

          .cb-logo-card {
            flex-basis: 78%;
            height: 100px;
          }
        }
      `}</style>

      <div className="cb-clients-head">
        <p className="eyebrow">WE ARE THERE FOR YOU</p>
        <h2><span className="red">Our Top</span> Clients</h2>
      </div>

      <div className="cb-carousel">
        <button className="cb-arrow" type="button" onClick={() => move(-1)} aria-label="Previous clients">
          ‹
        </button>
        <div className="cb-track" ref={track}>
          {logos.map(([name, src]) => (
            <div className="cb-logo-card" key={name}>
              <img src={src} alt={name} />
            </div>
          ))}
        </div>
        <button className="cb-arrow" type="button" onClick={() => move(1)} aria-label="Next clients">
          ›
        </button>
      </div>
    </section>
  )
}
