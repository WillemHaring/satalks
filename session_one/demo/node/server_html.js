var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<html><body>');
  res.write('<h1>Hello World!</h1>'); //write a response to the client
  res.write('</body></html>');
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('a webserver is now running on http://localhost:8080');