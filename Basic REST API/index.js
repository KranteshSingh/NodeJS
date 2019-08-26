// This is needed for importing expressjs & many other modules into our application
const express = require("express");
const appConfig = require("./config/appConfig");
const fs = require("fs");
const mongoose = require("mongoose");

// Declaring an instance or creating an application instance
const app = express();

// Reading the Routes
let routesPath = "./routes";
fs.readdirSync(routesPath).forEach(function(file) {
  if (~file.indexOf(".js")) {
    let route = require(routesPath + "/" + file);
    route.setRouter(app);
  }
});

// Handling mongoose database connection error
mongoose.connection.on("error", function(err) {
  console.log("! DATABASE CONNECTION ERROR !"), 
  console.log(err);
});

//handling mongoose success event
mongoose.connection.on("open", function(err) {
  if (err) {
    console.log("! DATABASE ERROR !");
    console.log(err);
  } else {
    console.log("DATABASE CONNECTION OPEN SUCCESS");
  }
}); // end mongoose connection open handler

//Listening the server - creating a local server
app.listen(appConfig.port, () => {
    
  console.log("NODE JS Backend listening on port localhost:3000!");
  //creating the mongo db connection here
  let db = mongoose.connect(appConfig.db.uri, { useMongoClient: true });

}); 
