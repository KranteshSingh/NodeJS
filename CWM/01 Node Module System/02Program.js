// path module gives us information about path related to files in the OS.

const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);
