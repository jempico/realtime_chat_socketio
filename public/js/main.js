const chat_form = document.getElementById('chat-form');
const chat = document.querySelector('.chat-messages')
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Grabbing username and room from chat URL
 const { username, room} = Qs.parse(location.search, {
     ignoreQueryPrefix: true
 });   


const socket = io();

// Join Room
socket.emit('enterRoom', {username, room});

//Get room and users
socket.on('roomUsers', ({room, users}) => {
    outputRoomName(room);
    outputUsers(users);
})

// Output Message
socket.on('message', function(data){
    outputMessage(data);
    //Fixing scroll down 
    chat.scrollTop = chat.scrollHeight;
})

//Form Submit Event Listener
chat_form.addEventListener('submit', (e)=> {
    e.preventDefault(); //Preventing the default submission behaviour
    //Grabbing chat msg from DOM
    const msg = e.target.elements.msg.value;
    //Emitting chat msg to server
    socket.emit('chatmsg', msg );
    e.target.elements.msg.value = '';
})


//Output message to DOM
function outputMessage(msg) {
    const div = document.createElement('div')
    div.innerHTML = `<div class="message">
    <p class="meta">${msg.username}
    <span>${msg.date}</span></p>
    <p clas<="text">${msg.text}</p>`
    chat.appendChild(div);
}

//Output room name to DOM
function outputRoomName(room) {
    roomName.innerHTML = room;
}

function outputUsers(users) {
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}`
}

