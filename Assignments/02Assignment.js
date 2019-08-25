/*
Create an Express application that has following routes and runs on port 3000 - 
Route 1 - GET  /split/name - which takes fullName as query parameter and gives firstName and
 lastName as output. 
Sample input - /split/name?fullName=Aditya Kumar
Output - {
	“firstName”:”Aditya”,
	“lastName”:”Kumar”
}
 Route 2 - /calculate/age - which takes date of birth in format yyyy-mm-dd and 
return the age of the person. 
Sample input - /calculate/age?dob=1992-02-28
Output - {
	“age”:27
}

NOTE: You are not required to use app.listen(<port>). This will be handled by the system.

*/


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/split/name', (req, res) => {

    
});// end split name

app.get('/calculate/age', (req, res) => {

  



});// end calculate age

module.exports = app;