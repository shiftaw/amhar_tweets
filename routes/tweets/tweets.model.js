// const Promise = require("bluebird");
const mongoose = require('mongoose')
// const httpStatus = require("http-status");
// const APIError = require("../helpers/APIError");

const TweetSchema = new mongoose.Schema(
  {
    message: { type: String, default: '' },
    hide: { type: Boolean, default: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Tweet', TweetSchema)
