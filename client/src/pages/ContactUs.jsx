import { Link } from 'react-router-dom'
import InquiryForm from '../components/InquiryForm'
import usePageTitle from '../usePageTitle'
import contactHero from '../assets/brand/contact-hero.jpg'

export default function ContactUs() {
  usePageTitle('Contact Us – ClassBoxes Technologies')

  return (
    <main className="studio-page">
      <section className="contact-hero" style={{ '--hero-image': `url(${contactHero})` }}>
        <div className="container">
          <p className="crumbs"><Link to="/">HOME</Link></p>
          <h1>Write, call, or come by.</h1>
          <p className="quiet">The desk in Piscataway answers hiring questions, training questions, and everything in between.</p>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="info-row">
            <article>
              <i className="bi bi-geo-alt"></i>
              <h3>Piscataway</h3>
              <p>371 Hoes Lane, #200, Piscataway, New Jersey 08854</p>
            </article>
            <article>
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@classboxes.com">info@classboxes.com</a></p>
            </article>
            <article>
              <i className="bi bi-telephone"></i>
              <h3>Call</h3>
              <p><a href="tel:+15513555230">+1-551-355-5230</a></p>
            </article>
          </div>
        </div>
      </section>

      <section className="touch-section" id="inquiry">
        <div className="container">
          <div className="office-grid" style={{ marginBottom: 28 }}>
            <article className="office-card">
              <p className="kicker">Canada desk</p>
              <h3>Montréal</h3>
              <p>5 Place Ville Marie, Bureau 1400, Montréal, Quebec H3B 2G2</p>
            </article>
            <article className="office-card">
              <p className="kicker">Hours</p>
              <h3>Weekdays</h3>
              <p>New Jersey, 9:00 a.m. to 6:00 p.m. EST. Montréal, 9:00 a.m. to 5:30 p.m. EST.</p>
            </article>
          </div>
          <InquiryForm showWorkAuth source="contact-us" />
        </div>
      </section>
    </main>
  )
}
