function lateFunc() {
	console.log("This was called async.")
}

console.log("This is the first log statement.")

setTimeout(lateFunc, 1000);

console.log("This is the second log statement")