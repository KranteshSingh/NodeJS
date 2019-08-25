const express = require('express')
// Including the logic in controller & including that module here
const blogController = require('./../controllers/blogController');

let setRouter = (app) => {
  
  app.get('/hello-world', blogController.helloWorld);
  app.get('/example', blogController.printExample);


}; // end setRouter function

module.exports = {
  setRouter: setRouter
}