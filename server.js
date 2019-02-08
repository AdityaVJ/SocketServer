
const Server = require('socket.io');
const io = new Server();
var stdin = process.openStdin();

io.attach(3000, {
    pingInterval: 1000,
    pingTimeout: 5000,
    cookie: false
  });

console.log("Server running on port 3000")


  io.on('connection', (socket) => {
    socket.on('new message', (data) => {
        console.log(data);
      }); 

      
     stdin.addListener("data", function(d) {
      
          if(d.toString().trim() === "1"){
            socket.emit("new message", "DisableDeviceCamera");
            console.log("Camera Disabled");
          }

          if(d.toString().trim() === "2"){
           socket.emit("new message", "EnableDeviceCamera");
           console.log("Camera Enabled");
          }



    });
     });