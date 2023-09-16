const express = require('express')
const verifyToken = require('../middleware/verifyToken')
// controller functions
const { loginUser, signupUser, verifyUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.post('/verify', verifyToken, verifyUser)

module.exports = router