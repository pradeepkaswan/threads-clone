const { logEvents } = require("./logger")

const errorHandler = (error, req, res, next) => {
	logEvents(
		`${error.name}: ${error.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
		"errors.log",
	)
	console.log(error.stack)

	const status = res.statusCode ? res.statusCode : 500 // Internal Server Error
	res.status(status)
	res.json({
		message: error.message,
	})
}

module.exports = errorHandler
