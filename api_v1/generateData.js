const faker = require('faker')

var productsDatabase = { products: [], sellers: [] }

for (var i = 1; i <= 10; i++) {
  productsDatabase.products.push({
    id: i,
    name: faker.commerce.product(),
    color: faker.commerce.color(),
    cost: faker.commerce.price(),
    quantity: Math.floor(Math.random() * 1000)
  })
  productsDatabase.sellers.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobArea: faker.name.jobArea(),
    address: faker.address.country()
  })
}

console.log(JSON.stringify(productsDatabase))
