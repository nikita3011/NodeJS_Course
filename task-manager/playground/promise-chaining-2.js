require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5fabb61c798a66df409c1d67').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => { 
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}


deleteTaskAndCount('5fabcf9533a69fec2d969139').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})