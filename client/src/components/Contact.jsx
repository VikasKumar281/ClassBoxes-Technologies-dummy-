
import assistImage from '../assets/assist.png'

const cards = [
  ['📍', 'New Jersey Office', '371 Hoes Lane, #200, Piscataway, New Jersey, USA - 08854'],
  ['🌍', 'Canada Office', '5 Place Ville Marie Bureau 1400, Montréal Quebec H3B 2G2, Canada'],
  ['✉', 'Email us', 'info@classboxes.com'],
  ['♧', 'Call us', '+1-551-355-5230']
]

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          width: 100%;
          padding: 25px 0;
          background: #fff;
          overflow: hidden;
        }

        .contact-section .contact-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .contact-content {
          padding: 10px 15px;
        }

        .contact-section .eyebrow {
          font-size: 19px;
          color: #292929;
          margin-bottom: 12px;
        }

        .contact-section h2 {
          font-size: clamp(38px, 4vw, 58px);
          font-weight: 800;
          line-height: 1.15;
          color: #303441;
          margin-bottom: 28px;
        }

        .contact-section .red {
          color: #f04455;
        }

        .contact-description {
          max-width: 610px;
          font-size: 19px;
          line-height: 1.6;
          color: #292929;
          margin-bottom: 45px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 30px;
          row-gap: 48px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 22px;
        }

        .contact-info-icon {
          color: #ff4658;
          font-size: 35px;
          line-height: 1;
          min-width: 42px;
          text-align: center;
        }

        .contact-info-item h4 {
          font-size: 25px;
          font-weight: 750;
          color: #303441;
          margin: 0 0 12px;
        }

        .contact-info-item p {
          font-size: 17px;
          line-height: 1.7;
          color: #292929;
          margin: 0;
          overflow-wrap: anywhere;
        }

        .contact-art {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
        }

        .contact-art img {
          display: block;
          width: 100%;
          max-width: 650px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .contact-section {
            padding: 25px 0;
          }

          .contact-content {
            padding: 15px;
          }

          .contact-art img {
            max-width: 520px;
          }

          .contact-info-item h4 {
            font-size: 21px;
          }

          .contact-info-grid {
            column-gap: 20px;
            row-gap: 35px;
          }
        }

        @media (max-width: 767px) {
          .contact-section {
            padding: 20px 0;
          }

          .contact-content {
            padding: 10px 15px;
          }

          .contact-section .eyebrow {
            font-size: 15px;
          }

          .contact-section h2 {
            font-size: 36px;
            margin-bottom: 20px;
          }

          .contact-description {
            font-size: 16px;
            margin-bottom: 30px;
          }

          .contact-info-grid {
            column-gap: 15px;
            row-gap: 28px;
          }

          .contact-info-item {
            gap: 10px;
          }

          .contact-info-icon {
            font-size: 25px;
            min-width: 28px;
          }

          .contact-info-item h4 {
            font-size: 17px;
            margin-bottom: 7px;
          }

          .contact-info-item p {
            font-size: 14px;
          }

          .contact-art {
            margin-top: 25px;
          }

          .contact-art img {
            max-width: 420px;
          }
        }

        @media (max-width: 420px) {
          .contact-info-grid {
            grid-template-columns: 1fr;
            row-gap: 22px;
          }

          .contact-section h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="container contact-container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-12">
              <div className="contact-content">
                <p className="eyebrow">OUR OFFICES</p>

                <h2>
                  <span className="red">Need</span> Assistance
                </h2>

                <p className="contact-description">
                  Please don't hesitate to reach out to us for any questions
                  or concerns you may have about candidate recruitment or job
                  placement. We're always here to help.
                </p>

                <div className="contact-info-grid">
                  {cards.map(([icon, title, text]) => (
                    <div className="contact-info-item" key={title}>
                      <span className="contact-info-icon">{icon}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-art">
                <img
                  src={assistImage}
                  alt="Need Assistance"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
