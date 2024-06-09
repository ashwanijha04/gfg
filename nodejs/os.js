const os = require('os');

console.log("Architecture:", os.arch(), "\n")
console.log("CPUs:", os.cpus(), "\n")
console.log("Network interfaces:", os.networkInterfaces(), "\n")
console.log("Platform:", os.platform(), "\n")
console.log("Release number:", os.release(), "\n")
console.log("User info:", os.userInfo(), "\n")


/*
os.arch()	Returns the operating system CPU architecture
os.cpus()	Returns an array of objects containing information about each logical CPU core
os.networkInterfaces()	Returns an object containing network interfaces that have been assigned a network address
os.platform()	Returns a string identifying the operating system platform
os.release()	Returns a string that identifies the operating system release number
os.userInfo()	Returns information about the current user

*/