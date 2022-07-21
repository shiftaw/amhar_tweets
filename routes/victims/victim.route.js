const express = require('express')

const router = express.Router() // eslint-disable-line new-cap
const controller = require('./victim.controller')

router
  .route('/')
  /** GET /api/users - Get list of users */
  .get(controller.list)

  /** POST /api/users - Create new user */
  .post(controller.add)

module.exports = router
