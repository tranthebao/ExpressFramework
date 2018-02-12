var express = require('express');
var app = express();
var things = require('./things');

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});
//if test routing  [post] then using app [post man] check it.
app.post('/hello', (req, res) => {
    res.send("You just called the post method at '/hello'!\n");
});
//A special method, all
app.all('/test', function(req, res){
    res.send("Http method doesn't have any effect on this route");
});

//
//module.exports things
app.use('/things', things);

app.listen(8000,'localhost',511,function(err){
    console.log('App listening on port 8000!');
});