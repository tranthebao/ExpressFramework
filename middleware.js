var express = require('express');
var app = express();

//Simple request time logger
//demo 1
/*app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware
   //function/route handler.
   next();
});*/
//demo
/*app.use('/things', function(req, res, next){
    console.log("A request for things received at" + Date.now());
    next();
});
//route handler that sends the reponse
app.get('/things', function(req, res){
    console.log("Things");
});*/
//demo 3
//first middlaware before response is sent
/*app.use(function(req, res, next){
    console.log("Start");
    next();
});
//route handler
app.get('/', function(req, res, next){
    res.send("Middle");
    next();
});
app.use('/', function(req, res){
    console.log("end");
});*/
// demo 4
//npm install --save body-parser
var bodyParser = require('body-parser');
//to parser URL encoded data
app.use(bodyParser.urlencoded({extended: false}));
//to parser json data
app.use(bodyParser.json());
//cookie-parser
var bodycookieParser =  require('cookie-parser');
app.use(cookieParser());
app.listen(8000);