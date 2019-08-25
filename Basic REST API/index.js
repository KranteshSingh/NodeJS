// This is needed for importing expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const port = 3000

// Declaring an instance or creating an application instance
const app = express()

let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')){
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});

//Listening the server - creating a local server
app.listen(port, () => console.log('Example app listening on port 3000!'))