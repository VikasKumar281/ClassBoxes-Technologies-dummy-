import { Link } from 'react-router-dom'

export default function SplitSection({
  id,
  eyebrow,
  red,
  dark,
  text,
  button,
  image,
  to = '/contact-us',
  reverse = false
}) {
  return (
    <>
      <style>{`
        .split-section {
          width: 100%;
          padding: 80px 0;
          background: #fff;
          overflow: hidden;
        }

        .split-section .split-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .split-section .split-content {
          padding: 30px 15px;
        }

        .split-section .eyebrow {
          font-size: 19px;
          font-weight: 400;
          color: #292929;
          margin-bottom: 14px;
        }

        .split-section h2 {
          font-size: clamp(42px, 4.5vw, 64px);
          font-weight: 800;
          line-height: 1.12;
          color: #303441;
          margin-bottom: 25px;
        }

        .split-section .red {
          color: #f04455;
        }

        .split-section .description {
          font-size: 19px;
          font-weight: 400;
          line-height: 1.55;
          color: #292929;
          margin-bottom: 65px;
        }

        .split-section .split-btn {
          display: inline-block;
          padding: 19px 35px;
          border-radius: 50px;
          background: #f04455;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .split-section .split-btn:hover {
          background: #d92f42;
          color: #fff;
          transform: translateY(-3px);
        }

        .split-section .image-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
        }

        .split-section .section-image {
          width: 100%;
          max-width: 620px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 991px) {
          .split-section {
            padding: 65px 0;
          }

          .split-section h2 {
            font-size: 46px;
          }

          .split-section .description {
            font-size: 17px;
            margin-bottom: 35px;
          }

          .split-section .section-image {
            max-width: 500px;
          }
        }

        @media (max-width: 767px) {
          .split-section {
            padding: 45px 0;
          }

          .split-section .split-content {
            padding: 20px 15px;
            text-align: center;
          }

          .split-section .eyebrow {
            font-size: 15px;
          }

          .split-section h2 {
            font-size: 38px;
            line-height: 1.15;
          }

          .split-section .description {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .split-section .split-btn {
            padding: 15px 25px;
            font-size: 13px;
          }

          .split-section .image-wrapper {
            padding: 20px 15px;
          }

          .split-section .section-image {
            max-width: 420px;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .split-section h2 {
            font-size: 33px;
          }

          .split-section .description {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="split-section" id={id}>
        <div className="container split-container">
          <div className="row align-items-center">

            <div
              className={`col-lg-6 col-12 ${
                reverse ? 'order-lg-2' : 'order-lg-1'
              } order-1`}
            >
              <div className="split-content">
                <p className="eyebrow">{eyebrow}</p>

                <h2>
                  <span className="red">{red}</span>
                  <br />
                  {dark}
                </h2>

                <p className="description">{text}</p>

                <Link to={to} className="split-btn">
                  {button}
                </Link>
              </div>
            </div>

            <div
              className={`col-lg-6 col-12 ${
                reverse ? 'order-lg-1' : 'order-lg-2'
              } order-2`}
            >
              <div className="image-wrapper">
                {image && (
                  <img
                    src={image}
                    alt={red}
                    className="section-image"
                    loading="lazy"
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
