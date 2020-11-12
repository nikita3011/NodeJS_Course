const doworkCallback = (callBack) =>{
setTimeout(() =>{
    //callBack('This is my error!', undefined)
    callBack(undefined,[1,2,4])
},2000)
}

doworkCallback((error,result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})