/**
 * Module for all routes using GET HTTP method
 * 
 * @module Route callbacks for all user account info
 * @author Chris Ancheta
 */

const express = require('express')
const router = express.Router()
const db = require('../db');

exports.createBusiness = (request, response) => {
  // send back dummy data array of objects with data for homepage
  if (request.body) {
    console.log(request.body);
    response.sendStatus(200)
  }
  else { response.sendStatus(400) }
}


router.post('/users', (request, response) => {
  // send back info for a particular business based on their unique business id
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