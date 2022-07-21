const Tweet = require('./tweets.model')

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query
  Tweet.find({ limit, skip })
    .then((users) => res.json(users))
    .catch((e) => next(e))
}

function create(req, res) {
  const { message, hide, _id } = req.body.data
  console.log({ message, hide })

  Tweet.create({ message, hide })
    .then((doc) => {
      res.send(200)
    })
    .catch((e) => {
      console.log(e)
      res.send(4000)
    })
}

function update(req, res) {
  const { _id, message, hide } = req.body.data
  console.log({ _id, message })

  Tweet.updateOne(
    { _id },
    {
      message,
      hide,
    }
  )
    .then((doc) => {
      res.send(200)
    })
    .catch((e) => {
      console.log(e)
      res.send(200)
    })
}

function remove(req, res) {
  const { _id, message, hide } = req.body

  Tweet.deleteOne({ _id })
    .then((doc) => {
      res.send(200)
    })
    .catch((e) => {
      console.log(e)
      res.send(200)
    })
}

module.exports = { list, create, update, remove }
