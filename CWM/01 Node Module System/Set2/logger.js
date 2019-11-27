const EventEmitter = require('events');

class Logger extends EventEmitter {
  // When a function is inside a class then we call that a method.
  log(message) {
    //Send an HTTP request
    console.log(message);
    //Raise an Event
    this.emit('messageLogged', { id: 1, url: 'https://krantesh.com' });
  }
}

module.exports = Logger;
