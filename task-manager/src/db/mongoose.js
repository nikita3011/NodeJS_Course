const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


// const Task = mongoose.model('Task', { 
//     description:{
//         type: String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type: Boolean,
//         default:false
//     }
// })

// const tasks = new Task({
//     description: 'Complete treking             ',
//     completed:false
// })

// tasks.save().then(() =>{
//     console.log(tasks)
// }).catch(() => {
//     console.log('Error!!',console.error);
// })