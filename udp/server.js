const dgram = require('dgram');

const socket = dgram.createSocket("udp6");
// Is pass the udp6 function to instruct that  
//we'd like the socket to interface over both IPV4 and IPV6
socket.bind();
//Is not necessary provide a PORT, If none is provided. The SO will bind a random port 

socket.on('message', () =>{
    console.log("Connected!!");
});