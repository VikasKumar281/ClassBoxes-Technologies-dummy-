import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

export async function connectDb() {
  const configured = process.env.MONGODB_URI

  if (configured) {
    await mongoose.connect(configured)
    console.log('MongoDB connected')
    return
  }

  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/classboxes', {
      serverSelectionTimeoutMS: 1500
    })
    console.log('MongoDB connected at localhost')
  } catch {
    const memory = await MongoMemoryServer.create()
    await mongoose.connect(memory.getUri())
    console.log('Local MongoDB was not running. Using an in-memory MongoDB server.')
  }
}
