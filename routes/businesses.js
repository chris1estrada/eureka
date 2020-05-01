/**
 * @module Route callbacks for consumer-user facing business info
 * @author Jaxon Terrell, Chris Ancheta
 */

const express = require('express');
const router = express.Router();
const db = require('../db');
const path = require('path');

const { getBusinessDetails } = require('./controllers/business.controllers')

/**
 * Retrieve a list of businesses containing 
 */
router.get('/', (request, response) => {
  // destructure request body that way values will be null if not received
  const { radius, lat, lng, filters } = request.query
  const [filter1, filter2] = filters || []
  const sql = `CALL filterBusiness(?,?,?,?,?)`
  db.query(sql, [radius, lat, lng, filter1, filter2], (err, [results]) => {
    if (err) return response.json({ error: err })
    response.json(results)
  })
})

/**
 * Retrieve all details for a given business
 */
router.get('/:business_id', async (request, response) => {
  const { business_id } = request.params
  const result = await getBusinessDetails(business_id)
  response.json(result)
});

module.exports = router
