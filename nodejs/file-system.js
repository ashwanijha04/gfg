const fs = require("fs").promises;


const getStats = async (path) => {
	try {
		const stats = await fs.stat(path)
		console.log("File details: ", stats)
	} catch (error) {
		console.log(error)
	}
}

// getStats("./hello-world.js")

const readFile = async (path) => {
	try {	
		const fileContent = await fs.readFile(path, "utf8");
		console.log(fileContent)
	} catch (error) {
		console.log(error)

	}
}

readFile("./hello-world.js")
