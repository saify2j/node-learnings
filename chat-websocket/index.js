const express = require ('express');
const path = require('path');
let socket = require('socket.io');
const app = express();

//socket setup

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.render('index')
})
var server =  app.listen(3000,function(){
    console.log("Listening on port 3000")
});

var io = socket(server);

io.on('connection',function(socket){
    console.log('made socket connection!',socket.id)

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })
    socket.on('type',function(data){
        socket.broadcast.emit('type',data)
    })

})