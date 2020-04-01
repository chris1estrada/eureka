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
  response.json([
    {
      name: "Burger Barn",
      image: 'https://senior-project-eureka.s3.amazonaws.com/97/photos/1585781577719.jpeg',
      hasActiveDeals: false,
      lat: 39.465591,
      long: -75.006654
    },
    {
      name: "Bagel University",
      image: 'https://senior-project-eureka.s3.amazonaws.com/97/photos/1585781577719.jpeg',
      hasActiveDeals: false,
      lat: 39.464895,
      long: -75.007373
    },
    {
      name: "Magnolia",
      image: 'https://senior-project-eureka.s3.amazonaws.com/97/photos/1585781577719.jpeg',
      hasActiveDeals: true,
      lat: 39.464912,
      long: -75.006268
    },
  ])
})

router.get('/business_id', (request, response) => {
  // send back info for a particular business based on their unique business id
})

module.exports = router