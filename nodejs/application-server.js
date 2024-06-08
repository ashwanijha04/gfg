const http = require('node:http')
const hostname = '127.0.0.1';
const port = 5000;


const server = http.createServer((req, res)=>{
	console.log("Got request from browser.");
	console.log(req);
	console.log(res);

	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


	if(req.method=='OPTIONS') {
		res.statuscode == 204;
		res.end();
		return;
	}

	if(req.method=='GET') {
		res.statuscode = 200;
		res.setHeader('content-type', 'application/json')

		res.end(JSON.stringify({
			message: "Hello Browser!",
			timestamp: new Date().toIsoString()
		}));
	} else {
		res.statuscode = 405;
		res.end(JSON.stringify({
			error: "Method not allowed"
		}));
	}
});


server.listen(port, hostname, ()=>{
    console.log(`Server is listening on http://${hostname}:${port}/`);
})




