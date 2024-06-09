// const buffer1 = Buffer.alloc(10);
// console.log(buffer1)


const buffer2 = Buffer.alloc(6,15)
console.log(buffer2)


// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// buf3.fill(1)
// console.log(buf3)

buffer2.write("abcdef")
console.log(buffer2)
