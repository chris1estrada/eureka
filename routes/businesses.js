/**
 * 
 * 
 * @module Route callbacks for consumer-user facing business info
 * @author Chris Ancheta
 */
const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (request, response) => {
  // send back dummy data array of objects with data for homepage
})

router.get('/business_id', (request, response) => {
  // send back info for a particular business based on their unique business id
})

module.exports = router