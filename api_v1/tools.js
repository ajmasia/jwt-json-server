/**
 * Required libraries
 */
const bcrypt = require('bcrypt')
const readLine = require('readline')
const async = require('async')

// Password hash method
const hashPassword = plain => bcrypt.hashSync(plain, 8)

// Ask user password method
function askPassword(question) {
  return new Promise((resolve, reject) => {
    const rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(question, answer => {
      rl.close()
      resolve(answer)
    })
  })
}

// Generate hash password method
async function generateHash() {
  try {
    console.log('**********************************')
    console.log('**     Password hash script     **')
    console.log('**********************************')

    const passwordAnswer = await askPassword(
      'Please give me a password to hash: '
    )

    if (passwordAnswer != '') {
      const hashedPassword = hashPassword(passwordAnswer)
      const compare = bcrypt.compareSync(passwordAnswer, hashedPassword)
      await console.log('Hashed password:', hashedPassword)
      await console.log('Valdiation:', compare)
    } else {
      console.log('You need write something. Script aborted!')
    }
  } catch (err) {
    console.log(err)
    return process.exit(1)
  }
}

generateHash()
