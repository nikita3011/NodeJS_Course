//callbacks


setTimeout(()=>{
    console.log('Two seconds is up!')
},2000)


const names=['Joy','Mary','Petter']

const shortName=names.filter((name)=>{
    return name.length<=4
})


const geoCode=(address,callback)=>{
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:1 
        }
        callback (data);
    },2000)
}

const data=geoCode('pune',(data1)=>{
    console.log(data1)
})


//Callbacks

const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback (a+b)
    },2000)
}
add(2,3,(sum)=>{
    console.log(sum)
})
