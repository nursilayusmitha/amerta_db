/* global process */
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import formRoutes from './routes/formRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(bodyParser.json())

app.use('/api', formRoutes)
app.use('/api/admin', adminRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
