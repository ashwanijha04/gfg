// Inputs
// console.log(process.argv)
// console.log("Hello world", process.argv[2])


// Readline
const readLine = require('readline')


const rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	}
)

let query = "What is your name?"

rl.question(query, (answer)=>{
	console.error(`Hello ${answer}`)
	console.error(new Error("This is an error"))

	rl.close();
})