const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema(
    {
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
    }
)

userSchema.pre('save',async function(next){
    const user = this
    console.log('this is before  saving')
    next() 
})


const User = mongoose.model('User' ,userSchema)

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