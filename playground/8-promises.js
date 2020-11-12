const doworkPromise = new Promise((resolve,reject) =>{
   setTimeout(() => {
    //resolve([5,8,0])
    reject('This is an error message')
   }, 2000)
})

doworkPromise.then((result)=>{
    console.log('Sucess!',result)
}).catch((error) => {
    console.log('Error!',error)
})


//                            fullfilled (resolved) 
//                          /
//Promise ----prnding ---->
//                           \ 
//                              error (rejected)
