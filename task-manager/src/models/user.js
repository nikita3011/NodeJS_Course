const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User' ,{
    name:{
        type: String,
        require: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid.')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error ('Password cannot contaion "password".')
            }
        }
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error ('Age must be a positive number.')
            }
        }
    }
})

// const me = new User ({
//     name:'   neha    ',
//     email:'   NEHALSS@GMAIL.com   ',
//     password:'           passwo99967%'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })

module.exports = User