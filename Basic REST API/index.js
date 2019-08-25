// this is needed for importing expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
// declaring an instance or creating an application instance
const app = express()

let helloWorldFunction = (req, res) => res.send('Hello World!')

app.get('/', helloWorldFunction)

app.listen(appConfig.port, () => console.log(`Example app listening on port 3000!`))