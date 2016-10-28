var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');

app.get('/chat', (req,res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/src', (req, res) => {
  res.seanFire('node_modules/socket.io/lib/socket.js');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('sMsg', (data) => {
    io.emit('rMsg',data);
  });
});

app.listen(3300, () => {
  console.log("3300 connected!")
});
