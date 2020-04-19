/**
 * 
 * 
 * @module Route callbacks for consumer-user facing business info
 * @author Jaxon Terrell
 */
const express = require('express');
const router = express.Router();
const db = require('../db');
const path = require('path');
//stored the SQL procs in an array for modularity if any procedures need to be added later
let sqlArray = ['call selectBusiness(?);', 'call selectBusinessImages(?);', 'call selectBusinessHours(?);', 'call selectDeals(?);', 'call selectDealHours(?);']

/**
 * Retrieve a list of businesses containing:
 * business name, address, lat, long, cuisine, open/closed status, thumbnail image, and distance from user
 * @param request HTTP request body requires radius, lat, and long. May also provide 2 optional tag filters
 */
router.get('/', (request, response) => {
  // destructure request body that way values will be null if not received
  const { radius, lat, lng, filters } = request.body
  const [filter1, filter2] = filters || []
  const sql = `CALL filterBusiness(?,?,?,?,?)`
  db.query(sql, [radius, lat, lng, filter1, filter2], (err, [results]) => {
    if (err) return response.json({ error: err })
    response.json(results)
  })
})

router.get('/:business_id', (request, response) => {
  //send back info for a particular business based on their unique business id
  var jsonArray = [];
  for (let step = 0; step <= sqlArray.length - 1; step++) {
    db.query(sqlArray[step], request.params.business_id, (error, [[results]]) => {
      if (error) {
        return console.error(error.message);
      }
      //makes sure we only get a response once we've executed the last SQL proc 
      if (step == (sqlArray.length - 1)) {
        jsonArray.push(results);
        response.json(jsonArray);
        console.log(jsonArray);
      }
      else {
        jsonArray.push(results);
      }
    });
  };
});

module.exports = router
