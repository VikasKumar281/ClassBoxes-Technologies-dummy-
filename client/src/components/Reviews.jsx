
import reviewImage from '../assets/review.png'

export default function Reviews() {
  return (
    <>
      <style>{`
        .reviews-section {
          width: 100%;
          padding: 55px 0;
          background: #fff;
          overflow: hidden;
        }

        .reviews-section .reviews-container {
          max-width: 1140px;
          margin: auto;
        }

        .reviews-section .reviews-image-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .reviews-section .reviews-image {
          width: 100%;
          max-width: 480px;
          height: 430px;
          object-fit: contain;
        }

        .reviews-section .reviews-content {
          padding: 10px 15px;
        }

        .reviews-section .reviews-eyebrow {
          font-size: 17px;
          color: #292929;
          margin-bottom: 10px;
        }

        .reviews-section h2 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.08;
          color: #303441;
          margin-bottom: 25px;
          letter-spacing: -1.2px;
        }

        .reviews-section .red {
          color: #f04455;
        }

        .reviews-section .reviews-description {
          font-size: 18px;
          line-height: 1.6;
          color: #292929;
          margin-bottom: 28px;
        }

        .reviews-section .testimonial {
          position: relative;
          padding: 5px 20px;
        }

        .reviews-section .quote-icon {
          position: absolute;
          top: -15px;
          left: 0;
          font-size: 85px;
          font-weight: 800;
          line-height: 1;
          color: #e9e9e9;
          z-index: 0;
        }

        .reviews-section .testimonial-text {
          position: relative;
          z-index: 1;
          font-size: 25px;
          line-height: 1.5;
          color: #171717;
          margin-bottom: 30px;
        }

        .reviews-section .highlight {
          color: #f04455;
        }

        .reviews-section .client-details {
          margin-top: 25px;
        }

        .reviews-section .client-name {
          font-size: 16px;
          font-weight: 700;
          color: #171717;
          margin-bottom: 5px;
        }

        .reviews-section .client-company {
          font-size: 16px;
          color: #f04455;
          margin-bottom: 0;
        }


        @media (max-width: 991px) {
          .reviews-section {
            padding: 45px 0;
          }

          .reviews-section .reviews-image {
            height: 350px;
            max-width: 380px;
          }

          .reviews-section h2 {
            font-size: 42px;
          }

          .reviews-section .testimonial-text {
            font-size: 21px;
          }

          .reviews-section .reviews-description {
            font-size: 16px;
          }
        }


        @media (max-width: 767px) {
          .reviews-section {
            padding: 35px 0;
          }

          .reviews-section .reviews-image-wrapper {
            padding: 5px 15px 20px;
          }

          .reviews-section .reviews-image {
            max-width: 320px;
            height: 290px;
          }

          .reviews-section .reviews-content {
            text-align: left;
            padding: 15px 20px;
          }

          .reviews-section .reviews-eyebrow {
            font-size: 15px;
          }

          .reviews-section h2 {
            font-size: 36px;
            letter-spacing: -0.5px;
            margin-bottom: 18px;
          }

          .reviews-section .reviews-description {
            font-size: 16px;
            margin-bottom: 25px;
          }

          .reviews-section .testimonial {
            padding: 5px 15px;
          }

          .reviews-section .quote-icon {
            font-size: 60px;
          }

          .reviews-section .testimonial-text {
            font-size: 19px;
            margin-bottom: 25px;
          }

          .reviews-section .client-name,
          .reviews-section .client-company {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .reviews-section h2 {
            font-size: 32px;
          }

          .reviews-section .testimonial-text {
            font-size: 17px;
          }
        }
      `}</style>

      <section className="reviews-section" id="reviews">
        <div className="container reviews-container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-6 col-12">
              <div className="reviews-image-wrapper">
                <img
                  src={reviewImage}
                  alt="Customer Reviews"
                  className="reviews-image"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="reviews-content">

                <p className="reviews-eyebrow">
                  GREAT REVIEWS FOR OUR SERVICES
                </p>

                <h2>
                  <span className="red">Trusted by Biggest</span>
                  <br />
                  Business Names
                </h2>

                <p className="reviews-description">
                  Our clients have consistently relied on our expertise
                  and guidance. Here are some of their thoughts about our
                  services.
                </p>

                <div className="testimonial">

                  <span className="quote-icon">“</span>

                  <p className="testimonial-text">
                    Delivered the best team for our project, showcasing
                    their dedication to providing exceptional talent and
                    meeting our specific{' '}
                    <span className="highlight">requirements.</span>
                    {' '}Highly satisfied with their services
                  </p>

                  <div className="client-details">
                    <p className="client-name">
                      James Herriot
                    </p>

                    <p className="client-company">
                      Ortho Clinical Diagnostics
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
