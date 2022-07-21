const express = require('express')
const expressJwt = require('express-jwt')
const authCtrl = require('./auth.controller')

const router = express.Router() // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login').post(authCtrl.login)

router.route('/signup').post(authCtrl.signup)

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/random-number')
//.get(expressJwt({ secret: process.env.jwtSecret }), authCtrl.getRandomNumber)

module.exports = router
