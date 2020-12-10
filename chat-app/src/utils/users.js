const users =[]

//addUser

const addUser = ({id, username, room}) => {
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room){
        return {
            error: "Username and room required!"
        }
    }

    //Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    
    // Validate the user
    if(existingUser){
        return {
            error: 'Username already in use!'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !==  -1){
        return users.splice(index,1)[0]
    }
}

const getUser = (id) =>{
    return users.find((user) => user.id ===id )
}

const getUsersInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports ={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id:22,
//     username: 'Neha',
//     room:' desse'
// })

// addUser({
//     id:42,
//     username: 'nikita',
//     room:' desse'
// }) 

// addUser({
//     id:32,
//     username: 'nika',
//     room:' counter city'
// }) 

// const user = getUser(421)
// console.log(user)

// const userList = getUserInRoom('desse')
// console.log(userList)

// console.log(users)
// const removedUser = removeUser(33)

// // const res = addUser({
// //     id:3,
// //     username: 'neha',
// //     room:' desse'
// // })
// console.log(removedUser)
// console.log(users) //After deleteing