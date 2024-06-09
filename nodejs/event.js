const EventEmitter = require('events'); 

const emitter = new EventEmitter();

someFunction = function() {
	console.log("Something has happened")
}


emitter.on("Some Event", someFunction)

emitter.emit("Some Event")