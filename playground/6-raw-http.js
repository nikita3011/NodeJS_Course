const http = require('http')

const url="http://api.weatherstack.com/current?access_key=b94a58bed10b7b3fc40bdb961552b8b5&query=40,-75&units=f"

const request = http.request(url,(response)=>{
    let data =''
    response.on('data',(chunk)=>{
        data = data + chunk.toString()
       // console.log (chunk)
    })

    response.on('end',()=>{
       // console.log(data)
       body=JSON.parse(data)
       console.log(body)
    })
})
request.on('error',(error)=>{
    console.log("An error",error)
})

request.end()