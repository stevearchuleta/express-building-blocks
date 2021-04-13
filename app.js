//===========
// SIMPLE WEB API SERVER
//===========

const express = require('express');
const app = express();


//===========
// EXPRESS EXTENDS NODE JS
// THE REQUEST AND RESPONSE OBJECTS INHERIT PROPERTIES AND METHODS FROM NODE HTTP
// __proto__: http.IncomingMessage.prototype  <-- INHERITED BY EXPRESS REQUEST
// __proto__: http.ServerResponse.prototype   <-- INHERITED BY EXPRESS RESPONSE
// INHERITANCE GIVES ME THE ABILITY TO CALL NODE FUNCTIONS FROM EXPRESS APPS
//===========
//===========
// #1
//===========
//app.get('/', function(request, response) {
    // response.send('Building Blocks with Express.js');
    // SAME THING
    //response.write('Building Blocks with Express.js');
    //response.end();
//});


//===========
// RATHER THAN USE THE ABOVE CODE...
// SERVE THE INDEX.HTML FILE VIA the PUBLIC FOLDER USING SENDFILE() METHOD
//===========
//===========
// #2
//===========
// app.get('/', function(request, response) {
//     response.sendFile(__dirname + '/public/index.html');
// });


//===========
// EXPRESS STATIC MIDDLEWARE TO SERVE ALL STATIC FILES FROM THE PUBLIC FOLDER
// THE RETURN VALUE FROM THE EXPRESS.STATIC() CALL IS PASSED TO THE APP.USE() FUNCTION. 
//===========
//===========
// #3
//===========
app.use(express.static('./public'));



//===========
// WHEN WRITING WEB APIs IN EXPRESS, I WILL BE DEALING WITH DATA STRUCTURES LIKE OBJECTS AND ARRAYS
// THESE OBJECTS AND/OR ARRAYS WILL NEED TO BE SERIALIZED INTO JSON (pass array to the send() function)
//===========

app.get('/blocks', function(request, response){
    let blocks = ['Fixed', 'Movable', 'Rotating'];
    //response.send(blocks);
    // SAME THING USING .json method
    response.json(blocks);
});


//===========
// EXAMPLE OF PASSING A STRING INTO THE SEND FUNCTION
//===========
// app.get('/string', function(request, response){
//     var string = '<ul><li>Fixed</li><li>Movable</li></ul>';
//     response.send(string);
// });


//===========
// REDIRECT AN EXISTING ROUTE TO A DIFFERENT LOCATION
// THE REDIRECT() FUNCTION SETS THE PROPER REQUEST HEADERS; PASS IN THE DESTINATION PATH AS THE ARGUMENT
// THIS /blocks PATH WILL ("forever") BE REDIRECTED TO /parts
// CAN ALSO INCLUDE AN OPTIONAL 301 STATUS CODE AS THE FIRST ARGUMENT TO REDIRECT ("MOVED PERMANENTLY")
//===========
// app.get('/blocks', function(request, response){
//     response.redirect(301, '/parts')
// });

app.listen(3001, function(){
    console.log('🌍 Listening on port 3001');
    }
);