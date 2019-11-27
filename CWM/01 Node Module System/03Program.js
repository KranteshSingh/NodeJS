const os = require('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);

// Template String
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
