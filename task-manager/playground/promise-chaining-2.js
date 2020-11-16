require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('5fabb61c798a66df409c1d67').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => { 
    console.log(result)
}).catch((e) => {
    console.log(e)
})