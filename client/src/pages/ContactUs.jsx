import { Link } from 'react-router-dom'
import InquiryForm from '../components/InquiryForm'
import { testimonials } from '../data/company'
import usePageTitle from '../usePageTitle'
import contactHero from '../assets/brand/contact-hero.jpg'

export default function ContactUs() {
  usePageTitle('Contact Us – ClassBoxes Technologies')

  return (
    <main className="inner-page">
      <section className="contact-hero" style={{ '--hero-image': `url(${contactHero})` }}>
        <div className="container">
          <p className="crumbs">
            <Link to="/">HOME</Link>
          </p>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Please fill out this form.</p>
        </div>
      </section>

      <section className="office-band">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <p className="page-kicker">OUR OFFICES</p>
              <h2 className="band-title"><span>Get</span> in Touch</h2>
              <p className="section-lead" style={{ marginLeft: 0 }}>
                Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our clients.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="office-points">
                <article>
                  <i className="bi bi-geo-alt"></i>
                  <h3>US Office</h3>
                  <p>371 Hoes Lane, #200, Piscataway, New Jersey - 08854</p>
                </article>
                <article>
                  <i className="bi bi-envelope"></i>
                  <h3>Email us</h3>
                  <p><a href="mailto:info@classboxes.com">info@classboxes.com</a></p>
                </article>
                <article>
                  <i className="bi bi-telephone"></i>
                  <h3>Call us</h3>
                  <p><a href="tel:+15513555230">+1-551-355-5230</a></p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="touch-section" id="inquiry">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <InquiryForm showWorkAuth source="contact-us" />
            </div>
          </div>
        </div>
      </section>

      <section className="review-block">
        <div className="container">
          <p className="page-kicker">BUSINESS FINDING GREAT EMPLOYEES</p>
          <h2>
            Trusted by Biggest<br />Business Names
          </h2>
          <p className="section-lead" style={{ marginLeft: 0 }}>
            Our clients have always trusted our expertise and advice. Here’s what they have to say about us.
          </p>
          <div className="review-grid">
            {testimonials.map((item) => (
              <article className="review-card" key={item.name}>
                <img src={item.photo} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
