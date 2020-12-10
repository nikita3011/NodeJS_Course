const socket = io()

//server(emit) --> client(recieve) --acknowledgement-->server
//client(emit) -->server(recieve) ---acknowledgement -->client


//Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput  = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

//options
const{ username, room } = Qs.parse(location.search, {ignoreQueryPrefix:true})

const autoScroll = () => {
    //New message
    const $newMessage = $messages.lastElementChild

    //Height of new message
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    //visible height
    const visibleHeight = $messages.offsetHeight

    //Height of message container
    const containerHeight = $messages.scrollHeight

    //How far have I scrolled?
    const scrollOffset = $messages.scrollTop + visibleHeight

    if(containerHeight - newMessageHeight <= scrollOffset){
        $messages.scrollTop = $messages.scrollWidth
    }
}

socket.on('message', (message) =>{
    const html = Mustache.render(messageTemplate,{
        username: message.username,
        message:message.text,
        createdAt:moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend', html)
    autoScroll()
    console.log(message)
})

socket.on('locationMessage', function (message) {
    console.log(message)
        const  html = Mustache.render(locationMessageTemplate,{
            username: message.username,
            url:message.url,
            createdAt:moment(message.createdAt).format('h:mm a')
        })
        $messages.insertAdjacentHTML('beforeend',html)
    })


socket.on('roomData',({room, users}) => {
    const html = Mustache.render(sidebarTemplate,{
        room,
        users
    })
    document.querySelector('#sidebar').innerHTML =html
    autoScroll()
})    

$messageForm.addEventListener('submit',(e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled','disabled')

    // const message = document.querySelector('input').value
    const message = e.target.elements.message.value

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()

        if(error){
            return console.log(error)
        }
        console.log('Message delivered!')
    })
})

$sendLocationButton.addEventListener('click', () => {
    if(!navigator.geolocation){
        alert('Geolocation is not supported by your browser.')
    }

    $sendLocationButton.setAttribute('disabled','disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position)
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            $sendLocationButton.removeAttribute('disabled')
            console.log('Location shared!')
        })
    })
})

socket.emit('join', {username, room}, (error) => {
  if(error){
    alert(error)
    location.href = '/'
  }
})

//COUNT APP CODE
// socket.on('countUpdated', (count) => {
//     console.log('Count has been updated!!',count)
// }) 

// document.querySelector('#increment').addEventListener('click', () =>{
//     console.log('Clicked!')
//     socket.emit('Increment')
// })