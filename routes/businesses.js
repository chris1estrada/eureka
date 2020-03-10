/**
 * 
 * 
 * @module Route callbacks for consumer-user facing business info
 * @author Chris Ancheta
 */

exports.getAvailableBusinesses = (req, res, conn) => {
  // send back dummy data array of objects with data for homepage
  res.status(200).send([
    {
      "business_id": "1",
      "name": "mcdonalds",
      "lat": "12.12",
      "lng": "45.34",
      "cuisine": "fast food",
      "deals": {
        "Monday": "1/2 price pickles",
        "Tuesday": "bogo small shake",
        "Thursday": "free soda"
      }
    }
  ])
}

exports.getBusinessDetails = (req, res, conn) => {
  // send back info for a particular business based on their unique business id
}