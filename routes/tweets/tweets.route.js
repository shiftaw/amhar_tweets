const express = require('express')
const tweetCtrl = require('./tweets.controller')
const router = express.Router() // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/users - Get list of users */
  .get(tweetCtrl.list)

  /** POST /api/users - Create new user */
  .post(tweetCtrl.create)

  //router
  //  .route('/:userId')
  /** GET /api/users/:userId - Get user */
  // .get(tweetCtrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(tweetCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(tweetCtrl.remove)

module.exports = router
