import { useState } from 'react'
import { postJson } from '../api'
import { CONSENT_TEXT, PRIVACY_URL, workOptions } from '../data/company'
import contactHero from '../assets/brand/contact-hero.jpg'

const empty = {
  company: '',
  name: '',
  email: '',
  phone: '',
  role: '',
  technologies: '',
  openings: '',
  experience: '',
  workAuth: '',
  message: '',
  consent: false,
  privacy: false
}

const openings = ['1', '2-5', '6-10', '10+']
const experience = ['Fresher', '1-3 years', '3-5 years', '5+ years']

export default function TalentForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState('')
  const [serverError, setServerError] = useState('')
  const [sending, setSending] = useState(false)

  const setField = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
    setSent('')
    setServerError('')
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const next = {}
    if (!values.company.trim()) next.company = 'Please enter the company name.'
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Please enter a valid work email.'
    }
    if (!values.role.trim()) next.role = 'Please enter the role you want to hire.'
    if (!values.message.trim()) next.message = 'Please describe the requirement.'
    if (!values.consent) next.consent = 'Please confirm this consent to continue.'
    if (!values.privacy) next.privacy = 'Please agree to the privacy policy.'
    setErrors(next)
    if (Object.keys(next).length) return

    setSending(true)
    try {
      const data = await postJson('/api/inquiries', {
        source: 'find-talent',
        company: values.company.trim(),
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        role: values.role.trim(),
        technologies: values.technologies.trim(),
        openings: values.openings,
        experience: values.experience,
        workAuth: values.workAuth,
        subject: `Hiring requirement: ${values.role.trim()}`,
        message: values.message.trim(),
        consent: true,
        privacy: true
      })
      setSent(data.message)
      setValues(empty)
    } catch (error) {
      setServerError(error.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      className="talent-panel"
      id="inquiry"
      style={{ '--hero-image': `url(${contactHero})` }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <div className="touch-copy">
              <p className="page-kicker">SHARE YOUR REQUIREMENT</p>
              <h2><span>Hire</span> with ClassBoxes</h2>
              <p>
                Tell us the roles you need. Our team reviews every request and matches candidates from the ClassBoxes talent pool at zero hiring cost.
              </p>
              <div className="office-line">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h3>US Office</h3>
                  <p>371 Hoes Lane, #200, Piscataway, New Jersey - 08854</p>
                </div>
              </div>
              <div className="office-line">
                <i className="bi bi-envelope"></i>
                <div>
                  <h3>Email us</h3>
                  <p><a href="mailto:info@classboxes.com">info@classboxes.com</a></p>
                </div>
              </div>
              <div className="office-line">
                <i className="bi bi-telephone"></i>
                <div>
                  <h3>Call us</h3>
                  <p><a href="tel:+15513555230">+1-551-355-5230</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form className="inquiry-form" onSubmit={onSubmit} noValidate>
              {sent && <p className="form-success" role="status">{sent}</p>}
              {serverError && <p className="form-error" role="alert">{serverError}</p>}

              <div className="form-grid">
                <label>
                  Company name <em>*</em>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={values.company}
                    onChange={(event) => setField('company', event.target.value)}
                  />
                  {errors.company && <span className="field-error">{errors.company}</span>}
                </label>
                <label>
                  Your name <em>*</em>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={(event) => setField('name', event.target.value)}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </label>
                <label>
                  Work email <em>*</em>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={values.email}
                    onChange={(event) => setField('email', event.target.value)}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </label>
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+1"
                    value={values.phone}
                    onChange={(event) => setField('phone', event.target.value)}
                  />
                </label>
                <label>
                  Role to hire <em>*</em>
                  <input
                    type="text"
                    name="role"
                    placeholder="Java Developer"
                    value={values.role}
                    onChange={(event) => setField('role', event.target.value)}
                  />
                  {errors.role && <span className="field-error">{errors.role}</span>}
                </label>
                <label>
                  Technologies
                  <input
                    type="text"
                    name="technologies"
                    placeholder="Java, React, AWS"
                    value={values.technologies}
                    onChange={(event) => setField('technologies', event.target.value)}
                  />
                </label>
                <label>
                  Openings
                  <select
                    name="openings"
                    value={values.openings}
                    onChange={(event) => setField('openings', event.target.value)}
                  >
                    <option value="">Choose one...</option>
                    {openings.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
                <label>
                  Experience
                  <select
                    name="experience"
                    value={values.experience}
                    onChange={(event) => setField('experience', event.target.value)}
                  >
                    <option value="">Choose one...</option>
                    {experience.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </label>
              </div>

              <label>
                Preferred work authorization
                <select
                  name="workAuth"
                  value={values.workAuth}
                  onChange={(event) => setField('workAuth', event.target.value)}
                >
                  <option value="">Choose one...</option>
                  {workOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label>
                Requirement details <em>*</em>
                <textarea
                  name="message"
                  placeholder="Describe the role, location, and start date"
                  value={values.message}
                  onChange={(event) => setField('message', event.target.value)}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </label>

              <label className="check-row">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) => setField('consent', event.target.checked)}
                />
                <span>
                  {CONSENT_TEXT}
                  {errors.consent && <span className="field-error">{errors.consent}</span>}
                </span>
              </label>

              <label className="check-row">
                <input
                  type="checkbox"
                  checked={values.privacy}
                  onChange={(event) => setField('privacy', event.target.checked)}
                />
                <span>
                  I agree with the privacy policy of ClassBoxes Technologies.{' '}
                  <a href={PRIVACY_URL} target="_blank" rel="noreferrer">Privacy Policy</a>{' '}
                  of the Website
                  {errors.privacy && <span className="field-error">{errors.privacy}</span>}
                </span>
              </label>

              <button className="cb-btn" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Submit requirement'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
