// file system or fs module is used to handle functions like reading , writing from a file.

const fs = require('fs');

// Synchronous Method to read files in the current directory.

// const files = fs.readdirSync('./');
// console.log(files);

// Asynchronous Method to read files in the current directory.
fs.readdir('./#', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
