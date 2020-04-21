const db = require('../../db')

const self = {
  /**
   * Retrieves basic business info from the database
   * @param {number} BID - The unique business_id
   * @returns {Promise} Promise object represents the business info or an sql error
   */
  getBusinessInfo: (BID) => new Promise((resolve, reject) => {
    const sql = 'call selectBusiness(?)'
    db.query(sql, BID, (err, [[results]]) => {
      if (err) reject({ error: err.sqlMessage })
      resolve(results)
    })
  }),

  /**
   * Retrieves all images URLs from the database for a given business
   * @param {number} BID - The unique business_id
   * @returns {Promise} Promise object represents the list of image URLs or an sql error
   */
  getBusinessImages: (BID) => new Promise((resolve, reject) => {
    const sql = 'call selectBusinessImages(?)'
    db.query(sql, BID, (err, [results]) => {
      if (err) reject({ error: err.sqlMessage })
      resolve(results)
    })
  }),

  /**
   * Retrieves all deals information from the database for a given business if they exist.
   * @param {number} BID - The unique business_id
   * @returns {Promise<Object.<string,Object[]>} Promise object represents the lists of "limited" deals and "recurring" deals or an sql error
   * 
   */
  getBusinessDeals: (BID) => new Promise((resolve, reject) => {
    const sql = 'call selectDealHours(?)'
    db.query(sql, BID, (err, [results]) => {
      if (err) reject({ error: err.sqlMessage })
      const deals = { limited: [], recurring: [] }
      if (results.length > 0) {
        results.forEach(deal => {
          deal.type === 'Limited' ? deals.limited.push(deal) : deals.recurring.push(deal)
        })
      }
      resolve(deals)
    })
  }),

  /**
   * Retrieve the hours of operation for a given business
   * @param {number} BID - The unique business_id
   * @returns {Promise<Object[]>} Promise object represents the businesses hours of operation or an sql error
   */
  getBusinessHours: (BID) => new Promise((resolve, reject) => {
    const sql = 'call selectBusinessHours(?)'
    db.query(sql, BID, (err, [results]) => {
      if (err) reject({ error: err.sqlMessage })
      resolve(results)
    })
  }),

  /**
   * Retrieves all available details for a given business
   *  
   */
  getBusinessDetails: (BID) => new Promise(async (resolve, reject) => {
    const [info, images, hours, deals] = await Promise.all([
      self.getBusinessInfo(BID),
      self.getBusinessImages(BID),
      self.getBusinessHours(BID),
      self.getBusinessDeals(BID)
    ]).catch(err => reject({ error: err }))
    const out = { info: info, images: images, hours: hours, deals: deals }
    resolve(out)
  })
}

module.exports = self;