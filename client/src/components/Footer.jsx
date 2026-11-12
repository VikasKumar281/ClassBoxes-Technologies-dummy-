
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          width: 100%;
          background: #f1f1f5;
          padding: 55px 0 0;
          color: #303441;
          overflow: hidden;
        }

        .footer .footer-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .footer .footer-column {
          margin-bottom: 25px;
        }

        .footer .footer-heading {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.5;
          color: #303441;
          margin-bottom: 7px;
        }

        .footer .footer-subheading {
          color: #f04455;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 16px;
        }

        .footer .footer-text {
          font-size: 16px;
          line-height: 1.55;
          color: #303441;
          margin-bottom: 15px;
        }

        .footer .footer-contact {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #303441;
          font-size: 15px;
          margin-bottom: 13px;
          text-decoration: none;
          width: fit-content;
          transition: color 0.3s ease;
        }

        .footer .footer-contact i {
          color: #f04455;
          font-size: 15px;
          transition: transform 0.3s ease;
        }

        .footer .footer-contact:hover {
          color: #f04455;
        }

        .footer .footer-contact:hover i {
          transform: translateX(4px);
        }

        .footer .map {
          width: 100%;
          max-width: 280px;
          margin-top: 8px;
        }

        .footer .map img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .footer .map:hover img {
          opacity: 1;
          transform: scale(1.03);
        }

        .footer .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer .footer-links a {
          width: fit-content;
          color: #303441;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer .footer-links a:hover {
          color: #f04455;
          transform: translateX(5px);
        }

        .footer .social {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          gap: 8px;
          margin-top: 16px;
        }

        .footer .social a {
          flex: 0 0 50px;
          width: 50px;
          height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f04455;
          color: #fff;
          border-radius: 50%;
          text-decoration: none;
          font-size: 21px;
          transition: all 0.3s ease;
        }

        .footer .social a:hover {
          background: #303441;
          color: #fff;
          transform: translateY(-5px);
          box-shadow: 0 7px 16px rgba(48, 52, 65, 0.18);
        }

        .footer .footer-bottom {
          border-top: 1px solid #d0d0d5;
          padding: 15px 0 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .footer .copyright {
          color: #303441;
          font-size: 15px;
          margin: 0;
        }

        .footer .copyright strong {
          font-weight: 600;
        }

        .footer .back-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          border: 0;
          background: none;
          color: #303441;
          font-family: inherit;
          font-size: 15px;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .footer .back-top i {
          color: #f04455;
        }

        .footer .back-top:hover {
          color: #f04455;
          transform: translateY(-3px);
        }

        @media (max-width: 1199px) {
          .footer {
            padding-top: 45px;
          }

          .footer .footer-subheading {
            font-size: 20px;
          }

          .footer .social {
            gap: 7px;
          }

          .footer .social a {
            flex-basis: 43px;
            width: 43px;
            height: 43px;
            font-size: 19px;
          }
        }

        @media (max-width: 767px) {
          .footer {
            padding: 40px 0 0;
          }

          .footer .footer-column {
            margin-bottom: 15px;
          }

          .footer .footer-heading {
            font-size: 15px;
          }

          .footer .footer-subheading {
            font-size: 20px;
          }

          .footer .footer-text,
          .footer .footer-contact,
          .footer .footer-links a {
            font-size: 14px;
          }

          .footer .map {
            max-width: 260px;
          }

          .footer .social {
            flex-wrap: wrap;
            gap: 9px;
          }

          .footer .social a {
            flex-basis: 45px;
            width: 45px;
            height: 45px;
            font-size: 19px;
          }

          .footer .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px 0 22px;
          }

          .footer .copyright,
          .footer .back-top {
            font-size: 13px;
          }
        }

        @media (max-width: 380px) {
          .footer .social a {
            flex-basis: 42px;
            width: 42px;
            height: 42px;
            font-size: 18px;
          }
        }
      `}</style>

      <footer className="footer" id="footer">

        <div className="container footer-container">

          <div className="row g-4">

            <div className="col-lg-3 col-md-6 col-12 footer-column">

              <p className="footer-heading">
                CLASSBOXES<br />TECHNOLOGIES
              </p>

              <h4 className="footer-subheading">
                Headquarters
              </h4>

              <p className="footer-text">
                371 Hoes Lane, #200, Piscataway,
                New Jersey - 08854
              </p>

              <a href="tel:+15513555230" className="footer-contact">
                <i className="bi bi-telephone-fill"></i>
                +1-551-355-5230
              </a>

              <a href="mailto:info@classboxes.com" className="footer-contact">
                <i className="bi bi-envelope-fill"></i>
                info@classboxes.com
              </a>

              <a
                href="https://www.classboxes.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-contact"
              >
                <i className="bi bi-globe"></i>
                classboxes.com
              </a>

            </div>

            <div className="col-lg-3 col-md-6 col-12 footer-column">

              <p className="footer-heading">
                OUR LOCATIONS
              </p>

              <h4 className="footer-subheading">
                Where to find us
              </h4>

              <div className="map">
                <img
                  src="https://www.classboxes.com/wp-content/uploads/2019/04/img-footer-map.png"
                  alt="ClassBoxes Office Locations"
                  loading="lazy"
                />
              </div>

            </div>

            <div className="col-lg-3 col-md-6 col-12 footer-column">

              <p className="footer-heading">
                IMPORTANT LINK
              </p>

              <h4 className="footer-subheading">
                Business Solutions
              </h4>

              <div className="footer-links">
                <Link to="/find-talent">Find Talent</Link>
                <Link to="/find-a-job">Find a Job</Link>
                <Link to="/contact-us">Share your Requirements</Link>
                <Link to="/test-your-skills">Test your Skills</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 col-12 footer-column">

              <p className="footer-heading">
                LETS GET SOCIAL
              </p>

              <h4 className="footer-subheading">
                ClassBoxes Social links
              </h4>

              <p className="footer-text">
                Stay updated with our company news,
                promotions, and culture by following
                us on social media.
              </p>

              <div className="social">

                <a
                  href="https://www.facebook.com/classboxestechnologies/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter"></i>
                </a>

                <a
                  href="https://www.youtube.com/channel/UCdUL-z9TcZH9vMYFmtYoUSA"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/classboxes1/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://www.instagram.com/classboxestechnologies/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <p className="copyright">
              Copyright by <strong>ClassBoxes Technologies.</strong>
              {' '}All rights reserved.
            </p>

            <button
              type="button"
              className="back-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="bi bi-chevron-up"></i>
              BACK TO TOP
            </button>

          </div>

        </div>

      </footer>
    </>
  )
}
