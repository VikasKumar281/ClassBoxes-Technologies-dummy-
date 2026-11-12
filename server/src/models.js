import mongoose from 'mongoose'

const inquirySchema = new mongoose.Schema(
  {
    source: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, default: '', trim: true },
    company: { type: String, default: '', trim: true },
    subject: { type: String, default: '', trim: true },
    role: { type: String, default: '', trim: true },
    technologies: { type: String, default: '', trim: true },
    openings: { type: String, default: '', trim: true },
    experience: { type: String, default: '', trim: true },
    workAuth: { type: String, default: '', trim: true },
    message: { type: String, required: true, trim: true },
    consent: { type: Boolean, required: true }
  },
  { timestamps: true }
)

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true, unique: true }
  },
  { timestamps: true }
)

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
)

export const Inquiry = mongoose.model('Inquiry', inquirySchema)
export const Subscriber = mongoose.model('Subscriber', subscriberSchema)
export const ChatMessage = mongoose.model('ChatMessage', messageSchema)
