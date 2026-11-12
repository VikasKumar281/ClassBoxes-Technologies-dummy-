import { Router } from 'express'
import Subscriber from '../models/Subscriber.js'

const router = Router()

router.post('/', async (req, res) => {
  const { email } = req.body
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')

  if (!valid) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  try {
    await Subscriber.create({ email })
    res.status(201).json({ message: 'Thanks! You are subscribed.' })
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'This email is already subscribed.' })
    }
    res.status(500).json({ message: 'Something went wrong. Try again.' })
  }
})

export default router