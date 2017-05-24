const bcrypt = require('bcrypt');
const saltRounds = 8;

function hash(plaintext) {
  return bcrypt.hashSync(plaintext,8);
}

function compare(plaintext, hash) {
  return bcrypt.compareSync(plaintext, hash)
}

module.exports = {
  hash, compare
};
