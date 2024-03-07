const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

// Load environment variables from .env file
dotenv.config()

const connectDB = require("./utils/db")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB()

// Routes
// const threadRoutes = require('./routes/threadRoutes');

// app.use("/api/threads", threadRoutes)

module.exports = app
