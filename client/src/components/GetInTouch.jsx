import InquiryForm from './InquiryForm'

export default function GetInTouch({
  eyebrow = 'OUR OFFICES',
  title = 'Get in Touch',
  text = 'Feel free to contact us anytime for any queries or assistance. We are always available to help.',
  showWorkAuth = false,
  source = 'contact'
}) {
  return (
    <section className="touch-section" id="inquiry">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <div className="touch-copy">
              <p className="page-kicker">{eyebrow}</p>
              <h2>
                {title.startsWith('Get ') ? (
                  <>
                    <span>Get</span>
                    {title.slice(3)}
                  </>
                ) : title}
              </h2>
              <p>{text}</p>

              <div className="office-line">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h3>Address</h3>
                  <p>371 Hoes Lane, #200, Piscataway, New Jersey - 08854</p>
                </div>
              </div>

              <div className="office-line">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <h3>Email us</h3>
                  <p><a href="mailto:info@classboxes.com">info@classboxes.com</a></p>
                </div>
              </div>

              <div className="office-line">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h3>Call us</h3>
                  <p><a href="tel:+15513555230">+1-551-355-5230</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <InquiryForm showWorkAuth={showWorkAuth} source={source} />
          </div>
        </div>
      </div>
    </section>
  )
}
