const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')
const APIError = require('../../helpers/APIError')
const User = require('../user/user.model')

// sample user, used for authentication

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
async function login(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity

  const user = await User.findOne({ email: req.body.email })
  if (user) {
    const isMatch = await user.comparePassword(req.body.password)

    if (isMatch) {
      const token = jwt.sign(
        {
          _id: user._id,
        },
        '0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
      )

      const userJson = user.toObject()
      delete userJson.password
      res.cookie('token', token)
      return res.json({
        token,
        ...userJson,
      })
    }
  }

  const err = new APIError(
    'Authentication error',
    httpStatus.UNAUTHORIZED,
    false
  )
  return next(err)
}
/**
 *  signup a user
 */

function signup(req, res, next) {
  const { name, password, email } = req.body
  const newUser = new User({ name, password, email })
  newUser
    .save()
    .then((doc) => {
      res.json(doc)
    })
    .catch((e) => next(e))
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json({
    user: req.user,
    num: Math.random() * 100,
  })
}

module.exports = { login, getRandomNumber, signup }
