/**
 * Require necessary libraries
 */
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// JWT confing data
const SECRET_KEY = '123456789'
const expiresIn = '1h'

// Create server
const server = jsonServer.create()

// Create router
const router = jsonServer.router('./api_v1/db.json')

// Users database
const userdb = JSON.parse(fs.readFileSync('./api_v1/users.json', 'UTF-8'))

// Default middlewares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(
    token,
    SECRET_KEY,
    (err, decode) => (decode !== undefined ? decode : err)
  )
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      user =>
        user.email === email && bcrypt.compareSync(password, user.password)
    ) !== -1
  )
}

/**
 * Method: POST
 * Endpoint: /auth/login
 */
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body
  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  }
  const token = createToken({ email, password })
  res.status(200).json({ token })
})

/**
 * Middleware: Check authorization
 */
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401
    const message = 'Bad authorization header'
    res.status(status).json({ status, message })
    return
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1])
    next()
  } catch (err) {
    const status = 401
    const message = 'Error: access_token is not valid'
    res.status(status).json({ status, message })
  }
})

// Server mount
server.use(router)
server.listen(3000, () => {
  console.log('Auth API server runing on port 3000 ...')
})
