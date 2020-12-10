const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port', +port)
})


//----------File upload and set up of multer------

// const multer = require('multer')
// const upload = multer ({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb) {
//         // (!file.originalname.endsWith('.pdf'))
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             cb('Please upload a word document')
//         }
//         return cb(undefined, true)

//         // cb(new Error('File must be a pdf'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })
 
// //Using middleware function
// // const errorMiddleware = (req,res,next) =>{
// //     throw new Error ('From my middleware')
// // }

// // app.post('/upload',errorMiddleware , (req, res) => {
// //     res.send()
// // }, (error, req, res,next) => {
// //     res.status(400).send({error:error.message})
// // })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// },(error,req,res,next) => {
//     res.status(400).send(error)
// })



//-------How to use middleware and setup our own authenticated middleware-----
// app.use((req, res, next) => {
//     // console.log(req.method, req.path)
//     // next()
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }
// })
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Please check later.')
// })


//-------------To populate the data---------------

// const Task = require('./models/tasks')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('5fc70d038bed57ef4725bb39')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//    const user =  await User.findById('5fc75fa9caccad431710161d')
//    await user.populate('tasks').execPopulate()
//      console.log(user.tasks)
  
// }
// main()


//---------------TO CHECK PASSWORD HASHING------------------
// const bcrypt = require('bcryptjs')
// const myFunction = async() =>{
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('Red12345!' ,hashedPassword)
//     console.log(isMatch)
// }


//---------------------------  TO CHECK JWT-------------
// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{
//     const token = jwt.sign({_id:"heloo222"},'thisisthenewtoken', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisisthenewtoken')
//     console.log(data)
// }
// myFunction()

//----------------TO HIDE THE DATA(TOKENS AND PASSWORD)------------
// const pet ={
//     name:'oggie'
// }

// pet.toJSON = function () {
//     // console.log(this)
//     // return this
//     return{} // to hide the data
// }
// console.log(JSON.stringify(pet))
