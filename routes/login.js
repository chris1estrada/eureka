const express = require('express')
const router = express.Router()
// for validating and sanitizing request data
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const db = require('../db');
const { validate } = require('../utils/auth')

router.post('/', [
  body('username', 'Enter a username').notEmpty(),
  body('username', 'Invalid login').isEmail().normalizeEmail(),
  body('password', 'Enter a password').notEmpty()
], (request, response) => {
  // check that user exists
  const sql1 = 'SELECT email from users where email=?'
  db.query(sql1, [request.body.username], (err, [{ email }]) => {
    if (err) return response.json({ error: err })
    if (email) {
      // retrieve password hash
      const sql2 = 'SELECT password as hash from users where email=?'
      db.query(sql2, [email], (err, [{ hash }]) => {
        if (err) return response.json({ error: err })
        // validate supplied password with hash
        if (validate(request.body.password, hash)) {
          // retrieve the user_id
          const sql3 = 'SELECT user_id from users where email = ?'
          db.query(sql3, [email], (err, [{ user_id }]) => {
            if (err) return response.json({ error: err })
            // create token and send response
            jwt.sign({ uid: user_id }, process.env.JWT_SECRET, (err, token) => {
              if (err) { return response.json({ error: err }) }
              response.send({ token: token })
            })
          })
        } else {
          response.json({ error: "Invalid login" })
        }
      })
    }
  })
})

module.exports = router