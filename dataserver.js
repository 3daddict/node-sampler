
const express = require('express');

const server = express();

const mysql = require('mysql');

const creds = require('./mysqlcreds.js');

const db = creds;

//set default folder if there is not req url match
server.use( express.static(__dirname + '/html') ) //whatever the dirname add on html folder to serve files inside

//example endpoint for page url
server.get('/', function(req, res){
    const fs = new fileopen();
    console.log('got req on hello');
    res.send('Why hello yourself mister');
})

//endpoint for random number
server.get('/randomtime', function(req, res) {
    const randomNumber = 100 * Math.random();
    res.send("" + randomNumber);
})

server.listen(3000, function(){
    console.log('Server is listening on port 3000')
});