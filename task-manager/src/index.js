const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post( '/users', (req,res) => {
    // console.log(req.body)
    //  res.send('testing!!!')

    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
       // res.send(e)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id',(req,res) => {
    const _id = req.params.id
    //console.log(req.params)
    User.findById(_id).then((user) =>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
            res.status(500).send()
    })

})

app.post('/tasks',(req,res) => {
    const task = new Task(req.body)
    task.save().then((tasks) => {
        res.status(201).send(tasks)
    }).catch((e) =>{
        res.status(500).send()
    })
})

app.get('/tasks',(req,res) =>{
        Task.find({}).then((tasks) => {
            res.send(tasks)
        }).catch(() => {
            res.status(400).send(e)
        })
})

app.get('/tasks/:id',(req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.send()
    })
})


app.listen(port, () => {
    console.log('Server is up on port', +port)
})
