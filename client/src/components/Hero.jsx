
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          width: 100%;
          height: 100vh;
          min-height: 650px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.08);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero .eyebrow {
          font-size: 18px;
          color: #292929;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(42px, 5vw, 76px);
          font-weight: 800;
          line-height: 1.15;
          color: #292d3c;
          margin-bottom: 40px;
        }

        .hero .red {
          color: #f04455;
        }

        .hero .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero .btn {
          padding: 18px 32px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero .btn-red {
          background: #f04455;
          color: #fff;
        }

        .hero .btn-red:hover {
          background: #d92f42;
          color: #fff;
          transform: translateY(-3px);
        }

        .hero .btn-dark {
          background: #303441;
          color: #fff;
        }

        .hero .btn-dark:hover {
          background: #f04455;
          color: #fff;
          transform: translateY(-3px);
        }

        @media (max-width: 991px) {
          .hero {
            min-height: 650px;
          }

          .hero h1 {
            font-size: 52px;
          }

          .hero-background-image {
            object-position: center;
          }
        }

        @media (max-width: 767px) {
          .hero {
            height: 100vh;
            min-height: 600px;
            text-align: center;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero .btn-row {
            justify-content: center;
          }

          .hero .btn {
            padding: 15px 22px;
            font-size: 12px;
          }

          .hero-background-image {
            object-position: center;
          }
        }

        @media (max-width: 400px) {
          .hero h1 {
            font-size: 35px;
          }

          .hero .btn-row {
            flex-direction: column;
            align-items: center;
          }

          .hero .btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>

      <section className="hero" id="home">

        <img
          src={heroImage}
          alt="Professional women working in an office"
          className="hero-background-image"
        />

        <div className="container hero-content">
          <div className="row align-items-center">

            <div className="col-lg-7 col-md-9">

              <p className="eyebrow">
                HIRING IS MORE EASIER NOW
              </p>

              <h1>
                <span className="red">Hire Right Staff</span>
                <br />
                For Your Team
              </h1>

              <div className="btn-row">
                <a href="#contact" className="btn btn-red">
                  SHARE YOUR REQUIREMENTS
                </a>

                <a href="#contact" className="btn btn-dark">
                  CONTACT US NOW
                </a>
              </div>

            </div>

          </div>
        </div>

      </section>
    </>
  );
}
