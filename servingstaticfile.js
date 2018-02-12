var express = require('express');
var app =express();
var path = require('path');
app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('images'));
app.get('/staticfile', function(req, res){
    res.render("public");
});
//virtual pathfix
app.listen(8000);