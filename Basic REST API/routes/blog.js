const express = require('express')
const blogController = require('./../controllers/blogController')

let setRouter = (app) => {

//   let helloWorldFunction = (req, res ) => res.send("Hello World!");
//   let printExample = (req, res) => res.send("Print Example");

  app.get('/hello-world',blogController.helloWorld);
  app.get('/example',blogController.printExample);
  
} // end setRouter function

module.exports ={
    setRouter : setRouter
}