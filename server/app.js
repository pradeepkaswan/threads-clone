require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { logger } = require("./middleware/logger")
const connectDB = require("./config/db")
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser")
const corsOptions = require("./config/corsOptions")

const app = express()

connectDB()

// Middleware
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/v1/accounts", require("./routes/authRoutes"))
// app.use("/api/posts", require("./routes/postRoutes"))

app.use(errorHandler)

module.exports = app
