const rateLimit = require("express-rate-limit")
const { logEvents } = require("./logger")

const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // limit each IP to 5 requests per windowMs
	message: {
		message:
			"Too many login attempts from this IP, please try again after 15 minutes",
	},
	handler: (req, res, next, options) => {
		logEvents(
			`Too many login attempts from IP: ${
				req.ip
			} at ${new Date().toISOString()}`,
		)
		res.status(options.statusCode).send(options.message)
	},
	standardHeaders: true,
	legacyHeaders: false,
})

module.exports = loginLimiter
