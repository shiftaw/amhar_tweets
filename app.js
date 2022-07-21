const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const add_route = require('./routes/victims/victim.route')
const tweet_route = require('./routes/tweets/tweets.route')
const auth = require('./routes/auth/auth.route')
const user = require('./routes/user/user.route')
const expressValidation = require('express-validation')
const APIError = require('./helpers/APIError')

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

// secure apps by setting various HTTP headers

// enable CORS - Cross Origin Resource Sharing
app.use(cors())
app.use(express.static('public'))

const mongooseDebug = true
const mongoUri =
  'mongodb+srv://shiftaw:Ict4rd2012@cluster0.jpxr5mv.mongodb.net/data?authSource=admin&replicaSet=atlas-uu3ocy-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
mongoose.connect(mongoUri).then((res) => {
  console.log('connected to db  ', mongoUri)
})

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

// print mongoose logs in dev env
if (mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    //debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc)
  })
}

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors
      .map((error) => error.messages.join('. '))
      .join(' and ')
    const error = new APIError(unifiedErrorMessage, err.status, true)
    return next(error)
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic)
    return next(apiError)
  }
  return next(err)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND)
  return next(err)
})

app.use(function (err, req, res, next) {
  req.local = 'daniel'
  next()
})
// mount all routes on /api path

app.use('/victim', add_route)
app.use('/auth', auth)
app.use('/user', user)
app.use('/tweet', tweet_route)
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('App started', 4000)
})
