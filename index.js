//npm install --save pug
//or npm install --save express jade pug
var express = require('express');
var path = require('path');
var app = express();
app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/first_template', function(req, res){
    res.render("first_view");
});
app.get('/', function(req, res){
   res.render('index', { title: 'Hey', message: 'Hello there!' });
});
app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
       name: "TutorialsPoint", 
       url:"https://www.tutorialspoint.com/expressjs/expressjs_templating.htm"
    });
 });
 //Include and Components
app.get('/components', function(req, res){
    res.render('content');
});
app.listen(8000);