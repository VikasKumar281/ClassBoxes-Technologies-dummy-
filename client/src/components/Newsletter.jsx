
import { useState } from 'react'
import { postJson } from '../api'
import newsletterImage from '../assets/newsletter.png'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState({ text: '', ok: false })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = await postJson('/api/subscribe', { email })
      setMsg({ text: data.message, ok: true })
      setEmail('')
    } catch (error) {
      setMsg({
        text: error.message || 'Server not reachable. Try again.',
        ok: false
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .newsletter-section {
          width: 100%;
          padding: 35px 0 30px;
          background: #fff;
          overflow: hidden;
        }

        .newsletter-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .newsletter-content {
          padding: 10px 15px;
        }

        .newsletter-eyebrow {
          font-size: 19px;
          color: #292929;
          margin-bottom: 12px;
        }

        .newsletter-section h2 {
          font-size: clamp(38px, 4vw, 58px);
          font-weight: 800;
          line-height: 1.12;
          color: #303441;
          margin-bottom: 25px;
        }

        .newsletter-red {
          color: #f04455;
        }

        .newsletter-description {
          max-width: 620px;
          font-size: 19px;
          line-height: 1.6;
          color: #292929;
          margin-bottom: 32px;
        }

        .newsletter-form {
          max-width: 620px;
        }

        .newsletter-input {
          width: 100%;
          max-width: 450px;
          height: 56px;
          padding: 0 22px;
          border: 1px solid #d7d7d7;
          border-radius: 35px;
          outline: none;
          font-size: 16px;
          color: #333;
          background: #fff;
          transition: border-color 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: #f04455;
          box-shadow: 0 0 0 3px rgba(240, 68, 85, 0.08);
        }

        .newsletter-button {
          display: block;
          min-width: 185px;
          height: 55px;
          padding: 0 28px;
          margin: 35px auto 0;
          border: none;
          border-radius: 35px;
          background: #f04455;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-button:hover {
          background: #303441;
          transform: translateY(-2px);
        }

        .newsletter-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .newsletter-message {
          font-size: 14px;
          margin: 10px 0 0 15px;
        }

        .newsletter-message.ok {
          color: #198754;
        }

        .newsletter-message.err {
          color: #dc3545;
        }

        .newsletter-art {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
        }

        .newsletter-art img {
          display: block;
          width: 100%;
          max-width: 570px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .newsletter-section {
            padding: 30px 0;
          }

          .newsletter-content {
            padding: 15px;
          }

          .newsletter-section h2 {
            font-size: 46px;
          }

          .newsletter-description {
            font-size: 17px;
          }

          .newsletter-art img {
            max-width: 480px;
          }
        }

        @media (max-width: 767px) {
          .newsletter-section {
            padding: 20px 0;
          }

          .newsletter-content {
            padding: 10px 15px;
            text-align: center;
          }

          .newsletter-eyebrow {
            font-size: 15px;
          }

          .newsletter-section h2 {
            font-size: 36px;
          }

          .newsletter-description {
            font-size: 16px;
            margin-bottom: 25px;
          }

          .newsletter-form {
            margin: auto;
          }

          .newsletter-input {
            max-width: 100%;
            height: 52px;
          }

          .newsletter-button {
            margin: 22px auto 0;
          }

          .newsletter-message {
            margin-left: 0;
          }

          .newsletter-art {
            margin-top: 25px;
          }

          .newsletter-art img {
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .newsletter-section h2 {
            font-size: 32px;
          }

          .newsletter-description {
            font-size: 15px;
          }

          .newsletter-art img {
            max-width: 320px;
          }
        }
      `}</style>

      <section className="newsletter-section" id="newsletter">
        <div className="container newsletter-container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-12">
              <div className="newsletter-content">

                <p className="newsletter-eyebrow">
                  A SHORT NOTE, OCCASIONALLY
                </p>

                <h2>
                  <span className="newsletter-red">
                    Hiring notes
                  </span>
                  <br />
                  for your inbox
                </h2>

                <p className="newsletter-description">
                  Roles we are filling, skills companies keep asking for, and the occasional note from the Piscataway desk.
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="newsletter-input"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  {msg.text && (
                    <p className={`newsletter-message ${msg.ok ? 'ok' : 'err'}`}>
                      {msg.text}
                    </p>
                  )}

                  <button
                    className="newsletter-button"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'PLEASE WAIT...' : 'SUBSCRIBE NOW'}
                  </button>
                </form>

              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="newsletter-art">
                <img
                  src={newsletterImage}
                  alt="Subscribe to our newsletter"
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
