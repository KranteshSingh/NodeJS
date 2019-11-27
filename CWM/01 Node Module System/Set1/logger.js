var url = 'https://mylogger.com/log';

function log(message) {
  //send an HTTP request
  console.log(message);
}

console.log(__filename); // File name of the module with complete path
console.log(__dirname); //Directory that contains that module

module.exports = log;
