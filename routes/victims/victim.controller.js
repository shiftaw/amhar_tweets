const VictimsModel = require('./victims.model')

const list = (req, res) => {
  VictimsModel.find({})
    .then((docs) => {
      res.json(docs)
    })
    .catch((e) => {
      console.log(e)
    })
}

const add = (req, res) => {
  const { fName, lName, age, sex, place, woreda, zone, region, kebelle } =
    req.body
  console.log(req.body)
  VictimsModel.create({
    fName,
    lName,
    age,
    sex,
    place,
    woreda,
    zone,
    region,
    kebelle,
  })
    .then((model) => {
      console.log(model)
      res.send(200)
    })
    .catch((e) => {
      console.log(e)
      res.send(404)
    })
}

module.exports = {
  list,
  add,
}
