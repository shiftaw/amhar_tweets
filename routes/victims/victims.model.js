// const Promise = require("bluebird");
const mongoose = require('mongoose')
// const httpStatus = require("http-status");
// const APIError = require("../helpers/APIError");

const VictimSchema = new mongoose.Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String, default: '' },
    age: { type: Number, default: 0 },
    sex: { type: String, default: 'F' },
    regin: { type: String, default: '' },
    zone: { type: String, default: '' },
    woreda: { type: String, default: '' },
    kebelle: { type: String, default: '' },
    place: { type: String, default: '' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Victim', VictimSchema)
