//this is needed to import expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')

//declaring an instance or creating an application instance
const app = express()

//Bootstrap route
let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function(file) {
  if (~file.indexOf('.js')) {
    console.log("Including the following file");
    console.log(routesPath + '/' + file);
    let route = require(routesPath + '/' + file);
    route.setRouter(app);
  }
}); // end Bootstrap route

//app.get("/", (req, res) => res.send("NodeJS is Running"));

//Listenig to the server or Creating a local server
app.listen(appConfig.port, () => console.log('Example app listening on port 3000'));
