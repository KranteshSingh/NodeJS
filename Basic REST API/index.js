//this is needed to import expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
//declaring an instance or creating an application instance
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

//Listenig to the server or Creating a local server
app.listen(appConfig.port, () => console.log(`Example app listening on port ${port}!`))