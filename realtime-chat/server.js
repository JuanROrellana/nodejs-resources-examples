import express from 'express';
import { join, resolve } from 'path';
import http from 'http';
import { Server } from "socket.io";
import formatMessage from './utils/messages.js';
import {userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers} from './utils/users.js'

const app = express();
const httpServer = http.createServer(app);
const botName = 'ChatCord';

// Set static folder
const __dirname = resolve();
app.use(express.static(join(__dirname, 'public')));

// Run when client connects
const io = new Server(httpServer, {
});
io.on("connection", (socket) => {
    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);


        socket.emit('message', formatMessage(botName, `Welcome to chat ${username}`));

        // Broadcast when a new user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${username} has join the chat`));

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });


    // Client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage(botName, `A ${user.username} has left the chat`));

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });

    // Catch the message from chat
    socket.on('chatMessage', (message) => {
        const user = getCurrentUser(socket.id);
        console.log(user);
        io.to(user.room).emit('message', formatMessage(user.username, message));
    });
});

const PORT = 3000 || process.env.PORT;
httpServer.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});