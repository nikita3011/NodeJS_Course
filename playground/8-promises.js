// const doworkPromise = new Promise((resolve,reject) =>{
//    setTimeout(() => {
//     //resolve([5,8,0])
//     reject('This is an error message')
//    }, 2000)
// })

// doworkPromise.then((result)=>{
//     console.log('Sucess!',result)
// }).catch((error) => {
//     console.log('Error!',error)
// })


//                            fullfilled (resolved) 
//                          /
//Promise ----prnding ---->
//                           \ 
//                              error (rejected)




const add = (a, b) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(a+b)
        },2000)
    })
}

// add(3,4).then((sum) => {
//     console.log(sum)
    
//     add(sum, 2).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

add(1,2).then((sum) =>{
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) =>{
    comsole.log(e)
})