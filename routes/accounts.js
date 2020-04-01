/**
 * Module for all routes using GET HTTP method
 * 
 * @module Route callbacks for all user account info
 * @author Chris Ancheta
 */

const express = require('express')
const router = express.Router()
const db = require('../db');
const { createHash } = require('../utils/auth')

const { body, check, validationResult } = require('express-validator')

exports.createBusiness = (request, response) => {
  // send back dummy data array of objects with data for homepage
  if (request.body) {
    console.log(request.body);
    response.sendStatus(200)
  }
  else { response.sendStatus(400) }
}

/**
 * Insert a new user into the database
 * request body: {
 *  username: < email address >
 *  password:
 *  dob: yyyy-mm-dd
 *  first_name:
 *  last_name: 
 * }
 * 
 */
router.post('/users', [
  check('username').isEmail(), // username must be an email
  check('password')
    // password must be at least 8 characters long, have both upper and lower case letters, 
    // at least 1 number and 1 special character
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage(`must be at least 8 characters long, 
      contain an uppercase letter, a number, and a special character`
    ),
  check('dob').isISO8601(), // check DOB for ISO8601 format yyyy-mm-dd
  body('first_name')
    .not().isEmpty()
    .trim(),
  body('last_name')
    .not().isEmpty()
    .trim()
], async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({ errors: errors.array() })
  }
  const hashedPass = await createHash(request.body.password)
  let sql = 'CALL insertUser(?,?,?,?,?,?)'
  db.query(
    sql,
    [
      "consumer",
      request.body.username,
      hashedPass,
      request.body.dob,
      request.body.first_name,
      request.body.last_name
    ],
    (err, results) => {
      if (err) response.status(422).json({ error: err.message })
      return response.status(200).json(results)
    })
})

// create a new business
router.post('/businesses', (request, response) => {

})

router.get('/businesses/:business_id', (request, response) => {
  // send back info for a particular business based on their unique business id
})

router.get('/users/:user_id', (request, response) => {
  // send back info for a particular user based on their unique user id
})

router.put('/businesses/:business_id', (request, response) => {
  // update info for a particular business based on their unique business id
})

router.put('/users/:user_id', (request, response) => {
  // update info for a particular user based on their unique user id
})

router.patch('/users/:user_id', (request, response) => {
  // send back info for a particular business based on their unique business id
})

router.patch('/users/:user_id/recover', (request, response) => {
  // set a temporary password for a particular user based on their unique user id
  // and send an email to use it to change
  // TBD IF WE NEED
})

module.exports = router