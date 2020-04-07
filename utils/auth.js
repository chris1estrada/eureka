const bcrypt = require('bcrypt')
const saltRounds = 10

exports.createHash = async (password) => {
  return await bcrypt.hash(password, saltRounds)
}

exports.validate = (password, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hash, (err, result) => {
    if (err) reject({ error: err.message })
    resolve(result)
  })
})