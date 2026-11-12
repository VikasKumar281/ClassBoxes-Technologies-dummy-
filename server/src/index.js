import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { connectDb } from './db.js'
import { ChatMessage, Inquiry, Subscriber } from './models.js'

const app = express()
const port = Number(process.env.PORT) || 5000
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const extraOrigins = (process.env.CLIENT_URL || '')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)

app.use(cors({
  origin(origin, callback) {
    if (
      !origin
      || origin.startsWith('http://localhost:')
      || origin.startsWith('http://127.0.0.1:')
      || origin.endsWith('.onrender.com')
      || extraOrigins.includes(origin)
    ) {
      callback(null, true)
      return
    }
    callback(null, false)
  }
}))
app.use(express.json())

function text(value, max = 500) {
  return String(value || '').trim().slice(0, max)
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/subscribe', async (req, res) => {
  const email = text(req.body.email, 200).toLowerCase()
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  await Subscriber.updateOne({ email }, { email }, { upsert: true })
  res.json({ message: 'You are subscribed. Thank you.' })
})

app.post('/api/inquiries', async (req, res) => {
  const body = req.body || {}
  const name = text(body.name, 120)
  const email = text(body.email, 200).toLowerCase()
  const message = text(body.message, 2000)
  const source = text(body.source, 40) || 'website'

  if (!name) return res.status(400).json({ message: 'Please enter your name.' })
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }
  if (!message) return res.status(400).json({ message: 'Please enter your message.' })
  if (!body.consent || !body.privacy) {
    return res.status(400).json({ message: 'Please accept the required consent and privacy terms.' })
  }

  const inquiry = await Inquiry.create({
    source,
    name,
    email,
    phone: text(body.phone, 40),
    company: text(body.company, 160),
    subject: text(body.subject, 160),
    role: text(body.role, 120),
    technologies: text(body.technologies, 200),
    openings: text(body.openings, 40),
    experience: text(body.experience, 40),
    workAuth: text(body.workAuth, 40),
    message,
    consent: true
  })

  res.status(201).json({
    message: 'Your message has been sent. The ClassBoxes team will get back to you soon.',
    id: inquiry._id
  })
})

app.post('/api/messages', async (req, res) => {
  const name = text(req.body.name, 120)
  const email = text(req.body.email, 200).toLowerCase()
  const message = text(req.body.message, 2000)

  if (!name) return res.status(400).json({ message: 'Please enter your name.' })
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }
  if (!message) return res.status(400).json({ message: 'Please enter a message.' })

  const saved = await ChatMessage.create({ name, email, message })
  res.status(201).json({
    message: `Message received. We will reply to ${email} shortly.`,
    id: saved._id
  })
})

app.use((error, _req, res, _next) => {
  console.error(error)
  res.status(500).json({ message: 'Something went wrong. Please try again.' })
})

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`API listening on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
