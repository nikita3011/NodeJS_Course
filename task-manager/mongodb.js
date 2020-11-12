// //CRUD operations -- Create Read Update Delete


// // const mongodb = require('mongodb')
// // const MongoClient = mongodb.MongoClient
// // const objectID = mongodb.ObjectID

// const {MongoClient, ObjectID} = require('mongodb')

// // const id = new ObjectID()
// // console.log(id.id.length)
// // console.log(id.toHexString().length)
// //console.log(id.getTimestamp())
 
// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     //console.log("Connected to database correctly!")
   
//     const db = client.db(databaseName)

// //--------------------***CREATE THE DATABASE****------------------

//     // db.collection('users').insertOne({
//     //     //_id:id,
//     //     name: 'Akash',
//     //     age: 26
//     // }, (error, result) => {
//     //     if(error){
//     //         return console.log('Unable to insert data!')
//     //     }
//     //     console.log(result.ops)
//     // })

//     // db.collection('users').insertMany([
//     //     {
//     //         name:'jane',
//     //         age: 3
//     //     },
//     //     {
//     //         name: 'harry',
//     //         age: 5
//     //     }
//     // ], (error, result) => {
//     //     if(error){
//     //         return console.log('Unable to insert documents!')
//     //     }
//     //     console.log(result.ops)
//     // })

//     // db.collection('tasks').insertMany([
//     //     {
//     //         description:'Plant trees',
//     //         completed: true
//     //     },
//     //     {
//     //         description: 'Collect books',
//     //         completed: false
//     //     },
//     //     {
//     //         description: 'Do laundary',
//     //         completed: false
//     //     }
//     // ], (error, result) => {
//     //     if(error){
//     //         return console.log('Unable to insert documents!')
//     //     }
//     //     console.log(result.ops)
//     // })

//  //--------------------***READ THE DATABASE***-----------------  

//     // db.collection('users').findOne({name:'harry'} , (error, user) => {
//     //     if(error){
//     //         return console.log('User not found')
//     //     }
//     //     console.log(user)
//     // })

//     // db.collection('users').findOne({_id:new ObjectID("5f8578ba2dd60552eac0121a")} , (error, user) => {
//     //     if(error){
//     //         return console.log('User not found')
//     //     }
//     //     console.log(user)
//     // })

//     // db.collection('users').find({age:22}).toArray((error,users) => {
//     //     console.log(users)
//     // })

//     // db.collection('users').find({age:22}).count((error,count) => {
//     //     console.log(count)
//     // })

//     // db.collection('tasks').findOne({_id: new ObjectID("5f8579b2b828b654427e1ac6")},(error,tasks) => {
//     //     if(error){
//     //         return console.log('tasks not found')
//     //     }
//     //     console.log(tasks)
//     // })

//     // db.collection('tasks').find({completed: false}).toArray((error,tasks) => {
//     //     if(error){
//     //         return console.log('Tasks not found')
//     //     }
//     //     console.log(tasks)
//     // })


//  //----------------------***UPDATE THE DATABASE***-------------------
 
//  //COMMON PATTERN TO WRITE PROMISES
// //  const updatePromise = db.collection('users').updateOne({
// //      _id: new ObjectID("5f856b059982f342c3973415")
// //  }, {
// //      $set:{
// //          name:'Neha'
// //      }
// //  })

// //  updatePromise.then((result) => {
// //     console.log(result)
// //  }).catch((error) => {
// //     console.log(error)
// //  })

// //NEW PATTERN TO WRITE PROMISES
// // db.collection('users').updateOne({
// //     _id: new ObjectID("5f856b059982f342c3973415")
// // }, {
// //     // $set:{
// //     //     name:'Neha'
// //     // }
// //     $inc:{
// //         age: 5
// //     }
// // }).then((result) => {
// //    console.log(result)
// // }).catch((error) => {
// //    console.log(error)
// // })

// // db.collection('tasks').updateMany({
// //     completed:false
// // },{
// //     $set:{
// //         completed:true
// //     }
// // }).then((result) => {
// //     console.log(result.modifiedCount)
// // }).catch((error) => {
// //     console.log(error)
// // })


// //---------------***DELETE FROM THE DATABASE***-----------------

// // db.collection('users').deleteMany({
// //     age: 5
// // }).then((result) =>{
// //     console.log(result.deletedCount)
// // }).catch((error) =>{
// //     console.log(error)
// // })
    
// db.collection('tasks').deleteOne({
//     description:'Do laundary'
// }).then((result) =>{
//     console.log(result)
// }).catch(() =>{
//     console.log(error)
// })
// })