const bcrypt = require('bcrypt')
const saltRounds = 10

exports.createHash = async (password) => {
  return await bcrypt.hash(password, saltRounds)
}
