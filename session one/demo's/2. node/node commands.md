#node.js

![alt text](https://cdn.iconscout.com/icon/free/png-256/nodejs-226032.png "Logo Title Text 1")

**check the version of node you have installed**

`node --version`

**display the help for node.js** You will never do this btw

`node --help`

**run our first application:** this will run javascript on the server

`node hello.js`

**talking about servers, create a new file called server.js, paste the following code in there:**

```javascript
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('a webserver is now running on http://localhost:8080');

```

and run it like this:

`node server.js`

(you can terminate the server by pressing ^C)