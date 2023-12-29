const User = require('../models/User')
const bcrypt = require('bcrypt')

// @desc: Register a new user
// @route: POST /api/auth/signup
// @access: Public
const signup = async (req, res) => {
  try {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res.status(400).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: hashedPassword,
    })

    await newUser.save()

    res.status(201).json({ message: 'User created successfully.' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

// @desc: Authenticate a user
// @route: POST /api/auth/signin
// @access: Public
const signin = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' })
    }

    res.status(200).json({ message: 'Login successful.' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = { signup, signin }
