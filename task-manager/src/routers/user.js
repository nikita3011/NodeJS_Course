const express = require('express')
const multer = require('multer')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()


// app.post( '/users', (req,res) => {
//     // console.log(req.body)
//     //  res.send('testing!!!')

//     const user = new User(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//        // res.send(e)
//     })
// })

router.post( '/users', async(req,res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})        
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async(req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        // res.send({user: user.getPublicProfile(), token}) --------method to delete the token and password called
        res.send({user, token})
    }catch(e){
        res.status(400).send()

    }
})

router.post('/users/logout', auth, async(req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth ,async(req,res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

// router.get('/users', auth, async(req, res) => {
//     try{
//        const users = await User.find({}) 
//        res.send(users)
//     } catch(e){
//         res.status(500).send(e)
//     }
//     // User.find({}).then((users) => {
//     //     res.send(users)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })


router.get('/users/me', auth, async(req, res) => {
   res.send(req.user)
})


// router.get('/users/:id',async(req,res) => {
//     const _id = req.params.id
//     //console.log(req.params)

//     try{
//         const user = await User.findById(_id)

//         if(!user){
//             return res.status.length(404).send()
//         }
//         res.send(user)
//     } catch(e) {
//         res.status(500).send(e)
//     }

//     // User.findById(_id).then((user) =>{
//     //     if(!user){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(user)
//     // }).catch((e) => {
//     //         res.status(500).send()
//     // })

// })

router.patch('/users/me', auth ,async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','age','email','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error:'Invalid Updates!'})
    }

    try{
       // const user= await User.findById(req.params.id)

        updates.forEach((update)=> req.user[update] = req.body[update])
        await req.user.save()

       // const user = await User.findByIdAndUpdate(req.params.id,req.body,{ new:true, runValidators:true})
        // if(!user){
        //     res.status(404).send()
        // }

        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth ,async(req,res) => {
    try{
     //const user = await User.findByIdAndDelete(req.user._id)

    // if(!user){
    //     res.status(404).send()
    // }
    await req.user.remove()
    res.send(req.user)
        } catch(e) {
        res.status(500).send(e)
    }
})

const upload = multer({
    // dest:'avatar',
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error ('Please upload an image'))
        }
        return cb(undefined, true)
    }
})

router.post('/users/me/avatar',auth, upload.single('avatar'), async(req, res) => {
    req.user.avatar = req.file.buffer
    await req.user.save()
    res.send()
},(error,req,res,next) => {
    res.status(400).send({error:error.message})
})

router.delete('/users/me/avatar',auth ,async(req, res) =>{
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

module.exports = router

