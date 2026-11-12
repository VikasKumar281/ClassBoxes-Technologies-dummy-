import { Link } from 'react-router-dom'
import heroPoster from '../assets/hero.png'
import heroVideo from '../assets/corporate-recruitment-brand.mp4'

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #f4f5f7;
        }

        .hero-media {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          z-index: 0;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 34%, rgba(255,255,255,0.05) 62%, rgba(255,255,255,0.12) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 120px 0 72px;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.8);
          color: #f04455;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .hero-kicker span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f04455;
        }

        .hero h1 {
          max-width: 720px;
          margin-bottom: 18px;
          font-size: clamp(42px, 5.4vw, 78px);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -0.03em;
          color: #16181d;
        }

        .hero h1 em {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          font-weight: 600;
          color: #e10600;
        }

        .hero-lead {
          max-width: 520px;
          margin-bottom: 28px;
          color: #3c4250;
          font-size: 17px;
          line-height: 1.65;
        }

        .hero .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero .btn {
          margin-top: 0;
          padding: 15px 26px;
          border-radius: 999px;
          font-size: 15px;
        }

        .hero .btn-ghost {
          background: #fff;
          color: #16181d;
          border: 1px solid #e4e6eb;
        }

        .hero .btn-ghost:hover {
          color: #16181d;
          border-color: #16181d;
        }

        @media (max-width: 767px) {
          .hero {
            text-align: left;
          }

          .hero::before {
            background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.72) 55%, rgba(255,255,255,0.4) 100%);
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero .btn {
            padding: 14px 20px;
            font-size: 14px;
          }
        }
      `}</style>

      <section className="hero" id="home">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="container hero-content">
          <p className="hero-kicker"><span></span> TECHNOLOGY RECRUITMENT</p>
          <h1>
            Connecting <em>Exceptional</em> Talent with Ambitious Teams.
          </h1>
          <p className="hero-lead">
            ClassBoxes trains professionals and places them with companies that need the right people, from first interviews to direct offers.
          </p>
          <div className="btn-row">
            <Link to="/find-talent" className="btn btn-red">Hire Talent</Link>
            <Link to="/find-a-job" className="btn btn-ghost">Explore Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
