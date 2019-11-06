// console.log('Hello World');

// we use express in index.js by requiring it 
// require is a keyword to use a package

const express = require('express');
const app = express();

// we want to create a server where browsers can connect, 
// we can do so with the listen method provided by the express
// app should now be listening to port 3000 after this code is executed

app.listen(4000, function() {
    console.log('listening on 4000')
})

//in express we handle the GET request with the get method

// app.get('/', function (reg, res){
//     res.send('Hello World')
// })


//using the es6 method
app.get('/', (reg, res) => {
    res.send('Hello World')
})

// get sends the message to the client side
//post sends the message to the server
// put does the editing
//delete deletes the message

app.get('/About', (reg, res) => {
    res.send('This is the About us Page')
})

app.post('/', (reg, res) => {
    res.send('Got a POST request')
})

app.put('/', (reg, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (reg, res) => {
    res.send('Got a DELETE request at /user')
})

// path parameters
app.get('/users/:name', (reg, res) => {
    res.send('Hello ' + reg.params.name)
})


//postman helps us test before we upload to the main site

//an error page
app.get('*', (reg,res)=>
    {res.send("error")})
    
// node executes its code in sequence
