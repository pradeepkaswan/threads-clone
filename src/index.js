require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectToDatabase = require('./config/db')

const app = express()
const port = process.env.PORT || 8080

connectToDatabase()

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
