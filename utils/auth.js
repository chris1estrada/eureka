const bcrypt = require('bcrypt')
const saltRounds = 10

/**
 * Takes a plain text password and creates a hash to be stored in the database
 */
exports.createHash = async (password) => {
  return await bcrypt.hash(password, saltRounds)
}

/**
 * Checks a plain text password against a hash
 */
exports.validate = (password, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hash, (err, result) => {
    if (err) reject({ error: err.message })
    resolve(result)
  })
})

