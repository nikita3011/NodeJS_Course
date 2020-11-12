const mongoose = require('mongoose')

const Task = mongoose.model('Task', { 
    description:{
        type: String,
        required:true,
        trim:true
    },
    completed:{
        type: Boolean,
        default:false
    }
})

// const tasks = new Task({
//     description: 'Complete treking             ',
//     completed:false
// })

// tasks.save().then(() =>{
//     console.log(tasks)
// }).catch(() => {
//     console.log('Error!!',console.error);
// })

module.exports = Task