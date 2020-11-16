require('../src/db/mongoose')
const User = require('../src/models/user')

//5faba7a0052d4ccecb38dca9

User.findByIdAndUpdate('5facc01d46f5611ea8b9c754',{ age:1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})