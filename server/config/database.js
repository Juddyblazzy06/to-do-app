const mongoose = require('mongoose')
const logger = require('../utils/logger') // Make sure logger is imported correctly
const dotenv = require('dotenv')

dotenv.config()

if (!process.env.MONGO_URI) {
  logger.error('MONGO_URI environment variable is not defined') // Correct usage of logger methods
  process.exit(1)
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    logger.info(`MongoDB Connected: ${conn.connection.host}`) // Correct usage of logger methods
  } catch (err) {
    logger.error(`Database connection error: ${err.message}`) // Correct usage of logger methods
    process.exit(1)
  }
}

module.exports = connectDB
