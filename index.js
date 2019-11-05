// console.log('Hello World');

// we use express in index.js by requiring it 
// require is a keyword to use a package

const express = require('express');
const app = express();

// we want to create a server where browsers can connect, 
// we can do so with the listen method provided by the express
// app should now be listening to port 3000 after this code is executed

app.listen(3000, function() {
    console.log('listening on 3000')
})

//in express we handle the GET request with the get method

app.get('/', function (reg, res){
    res.send('Hello World')
})