import { useState } from 'react'
import { postJson } from '../api'
import { CONSENT_TEXT, PRIVACY_URL, workOptions } from '../data/company'

const empty = {
  name: '',
  email: '',
  subject: '',
  workAuth: '',
  message: '',
  consent: false,
  privacy: false
}

export default function InquiryForm({ showWorkAuth = false, source = 'website' }) {
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

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (showWorkAuth && !values.workAuth) {
      next.workAuth = 'Please choose your work authorization.'
    }
    if (!values.message.trim()) next.message = 'Please enter your message.'
    if (!values.consent) next.consent = 'Please confirm this consent to continue.'
    if (!values.privacy) next.privacy = 'Please agree to the privacy policy.'
    return next
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) return

    setSending(true)
    setServerError('')
    try {
      const data = await postJson('/api/inquiries', {
        source,
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        workAuth: values.workAuth,
        message: values.message.trim(),
        consent: values.consent,
        privacy: values.privacy
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
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      {sent && <p className="form-success" role="status">{sent}</p>}
      {serverError && <p className="form-error" role="alert">{serverError}</p>}

      <div className="form-grid">
        <label>
          Your Name <em>*</em>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your Name *"
            value={values.name}
            onChange={(event) => setField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>

        <label>
          Your Email Address <em>*</em>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Your Email Address *"
            value={values.email}
            onChange={(event) => setField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>
      </div>

      <label>
        Subject
        <input
          type="text"
          name="subject"
          placeholder="Enter your Subject"
          value={values.subject}
          onChange={(event) => setField('subject', event.target.value)}
        />
      </label>

      {showWorkAuth && (
        <label>
          Work Authorization Status <em>*</em>
          <select
            name="workAuth"
            value={values.workAuth}
            onChange={(event) => setField('workAuth', event.target.value)}
            aria-invalid={Boolean(errors.workAuth)}
          >
            <option value="">Choose one...</option>
            {workOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.workAuth && <span className="field-error">{errors.workAuth}</span>}
        </label>
      )}

      <label>
        Your Message <em>*</em>
        <textarea
          name="message"
          placeholder="Enter your message *"
          value={values.message}
          onChange={(event) => setField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
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
        {sending ? 'Sending...' : 'Submit message'}
      </button>
    </form>
  )
}
