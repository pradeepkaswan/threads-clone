require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectToDatabase = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const protect = require('./middlewares/auth')

const app = express()
const port = process.env.PORT || 8080

connectToDatabase()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', protect)
app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
