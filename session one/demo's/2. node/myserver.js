var http = require('http');

var logobold = `
███    ███ ███████ ███    ██ ██████  ██ ██   ██ 
████  ████ ██      ████   ██ ██   ██ ██  ██ ██  
██ ████ ██ █████   ██ ██  ██ ██   ██ ██   ███   
██  ██  ██ ██      ██  ██ ██ ██   ██ ██  ██ ██  
██      ██ ███████ ██   ████ ██████  ██ ██   ██ 
`;


//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client

  res.write(`<h1>Hello world</h1>`); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('a webserver is now running on http://localhost:8080');