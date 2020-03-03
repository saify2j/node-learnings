var socket = io.connect('http://localhost:3000');
// var socket = io.connect('http://11.10.73.238:3000');

var message = document.getElementById('message');
var handle= document.getElementById('handle');
var output = document.getElementById('output');
var send = document.getElementById('send');
var feedback = document.getElementById('feedback');


send.addEventListener('click', function(){
    
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
})
message.addEventListener('keypress',function(){
    socket.emit('type',{
        handle:handle.value
    })
})
socket.on('type',function(data){
    feedback.innerHTML=`<p>`+data.handle+` is typing...</p>`;
    
})
socket.on('chat',function(data){
    feedback.innerHTML="";
    var el = document.createElement('p');
    var b_el = document.createElement('b');
    var handle_textnode = document.createTextNode(data.handle);   
    b_el.appendChild(handle_textnode);

    var textnode = document.createTextNode(":"+data.message);
    el.appendChild(b_el);
    el.appendChild(textnode);
    output.append(el);
    // output.innerHTML= `<p><b>`+data.handle+`: </b>`+data.message+`</p>`;
})