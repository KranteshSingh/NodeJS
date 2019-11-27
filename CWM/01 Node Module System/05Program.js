// EventEmitter is a Class & its has methods and properties.
const EventEmitter = require('events');
// here emitter is an Object.
// An Object is actual instance of a class.
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', arg => {
  console.log('Listener Called', arg);
});

// Raise an Event.
//emit is used to raise an event. or making a noise or signalling.
emitter.emit('messageLogged', { id: 1, url: 'https://krantesh.com' });

// We also have to define a listener which is interested in listening the raise event.
// Basically listner is a function which will be called upon when some event is raised.
