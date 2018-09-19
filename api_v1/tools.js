const bcrypt = require('bcrypt')

// Password hash method
const hashPassword = plain => bcrypt.hashSync(plain, 8)

console.log(hashPassword('admin'))

const compare = bcrypt.compareSync(
  'admin',
  '$2b$08$VIlsD7U1pCi3YcCTr9PsgOk9TzX0tTEKE96zDvHuS.TXnbZGmwKoO'
)

if (compare) {
  return console.log(compare)
} else {
  return console.log(compare)
}
