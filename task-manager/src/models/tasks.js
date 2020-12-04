const mongoose = require('mongoose')
const User = require('./user')

const taskSchema = mongoose.Schema({
    description:{
        type: String,
        required:true,
        trim:true
    },
    completed:{
        type: Boolean,
        default:false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},
{
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

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