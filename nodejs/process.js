console.log('This is the first message');

process.on('beforeExit', (code) => {
    setTimeout(() => { console.log('This will not work.') }, 0);
  console.log('Process beforeExit event with code:', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code:', code);
});

console.log('This is the second message');

// process.exit()