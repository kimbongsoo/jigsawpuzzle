const express = require('express')
const app = express()
const socketio = require('socket.io')
const server = app.listen(8080)
const path = require('path')
// after we start listening to our server, we can set up and attach our socket.io server
const io = socketio(server)
const fs = require('fs');
// in a separate file we'll get more specific about the events we want our socket server to listen for and broadcast
app.use(express.static('build'));

io.on('connection', socket=> {
    socket.on('유알엘이 갑니다', data =>{
        socket.broadcast.emit('짠', data);
        console.log('성공이용')
    })

socket.on('완성이용', data=>{
    socket.broadcast.emit('우하하', data);
    console.log('퍼즐 끝이용')
})


})


 app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/build/index.html'));
  });