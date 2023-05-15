const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const osc = require('osc');

const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121, // Change this to the port number used by Max/MSP
    metadata: true
});
udpPort.open();

io.on('connection', (socket) => {
    console.log('a user connected');
});



udpPort.on("message", function (oscMsg) {
    if (oscMsg.address === "/captions") { // receiving only oscmessage /caption 
        io.emit('updateDiv', oscMsg.args[0]); // Emit the OSC message argument to all connected clients
        console.log(oscMsg.args[0]);
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve the HTML file
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
