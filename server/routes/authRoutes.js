const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")

router.route("/login").post()
router.route("/refresh").get()
router.route("/logout").post()

module.exports = router
