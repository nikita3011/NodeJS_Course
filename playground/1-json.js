const fs=require('fs')

// const book={
//     title:'The old monk who sold his ferrari',
//     author:'Robin Sharma'
// }

// const bookJSON= JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
// console.log(bookJSON)

// const parseData= JSON.parse(bookJSON)
// console.log(parseData.author)

// const dataBuffer= fs.readFileSync('1-json.json')
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)
//console.log(dataBuffer.toString())


const dataBuffer=fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString()
const user=JSON.parse(dataJSON)

user.name='Gunther'
user.age=24

const userJSON=JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)