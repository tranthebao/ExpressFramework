///:id
var express = require('express');
var app = express();

app.get('/:id', function(req, res){
    res.send('The id you specified is'+ req.params.id);
});
app.get('/hello/:id', function(req, res){
    res.send('The id you specified is'+ req.params.id);
});

app.get('/things/:name/:id', function(req, res){
    res.send("id: "+ req.params.id+ ' and name'+ req.params.name);
});

//Pattern Matched Routes
//[0-9]{5} number from 0 to 9
//{5} mean limit lentgh number

app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: '+ req.params.id);
});

//throw exception request route
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL');
});
app.listen(8000);