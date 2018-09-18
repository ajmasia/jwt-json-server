const faker = require('faker')
const R = require('ramda')

var db = { products: [] }

for (var i = 1; i <= 10; i++) {
  db.products.push({
    id: i,
    name: faker.random.words(),
    cost: Math.random() * 100,
    quantity: Math.random() * 1000
  })
}

console.log(JSON.stringify(db))
