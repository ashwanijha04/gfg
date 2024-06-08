const http = require('node:http')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
	console.log("Got request from browser.")

	console.log(req)
	console.log(res)

	res.statuscode = 200;
	res.setHeader('content-type', 'text/plain')
	res.end('Hello world/n')
});


server.listen(port, hostname, ()=>{

	console.log("Server is listening to requests at ", port)
	console.log("Hostname is: ", hostname)
	console.log("Port is ", port)
})






