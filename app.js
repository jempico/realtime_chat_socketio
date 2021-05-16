const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const db = require('./src/config/dbconfig');
const formatMessage = require('./src/services/messages');
const users = require('./src/services/users')
const cookieParser = require('cookie-parser')

const app = express();
const server = http.createServer(app);

//server initialization
const socketio = require('socket.io')
const io = socketio(server); 

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: false})) //to parse form input
app.use(cookieParser());
dotenv.config();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Mongo atlas db connection
db.connectDB();

//Routes
const indexRoute = require('./src/api/routes/index');

//Middleware
app.set('view engine', 'ejs');
app.use('/', indexRoute);

//Running connection
const botName = 'Bot';
io.on('connection', (socket) => {

    // A user leaves the room
    socket.on('disconnect', () => {
        const user = users.userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
            //Send users and room info
            io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: users.getRoomUsers(user.room)
        })
        }
    })

    // A user sends a message
    socket.on('chatmsg', msg => {
        const user = users.getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    })

    // A user joins a chatroom
    socket.on('enterRoom', ({username, room}) => {
        const user = users.loggedIn(socket.id, username, room); //> A user has logged in
        socket.join(user.room); //>Calling socket join method to subscribe the socket to the chosen  channel:

        //Welcome Messages
        socket.emit('message', formatMessage(botName, `Welcome to ${user.room}, ${user.username}!`));
        
        //Broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username} has joined the chat room`))
    
        //Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: users.getRoomUsers(user.room)
        })
    })
})


server.listen(process.env.PORT, ()=> console.log(`Server running on port ${process.env.PORT}`));

