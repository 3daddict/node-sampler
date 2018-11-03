
const express = require('express');

const server = express();

//set default folder if there is not req url match

server.use( express.static(__dirname + '/html') ) //whatever the dirname add on html folder to serve files inside

//example endpoint for page url
server.get('/hello', function(req, res){
    console.log('got req on hello');
    res.send('Why hello yourself mister');
})

server.listen(3000, function(){
    console.log('Server is listening on port 3000')
});