var express = require('express');
var cookieparser =  require('cookie-parser');
var app =express();
app.use(cookieparser());
/*app.get('/', function(req, res){
    res.cookie('name', 'express').send('cookie set');//set name = express
    console.log('Cookie:', req.cookies);
});*/
//Adding Cookies with Expiration Time
var name = "test"
app.get('/cookie', function(req, res){
    //res.cookie('name', 'value', { expire: 360000 + Date.now()});//set name = express
    res.cookie(name, "value", {expire: 360000 + Date.now()}).send("ok set");
    res.cookie(name, 'value', {maxAge: 360000});
    console.log('Cookie:', req.cookies);
});
app.get('/cookiemaxAge', function(req, res){
    //res.cookie('name', 'value', { expire: 360000 + Date.now()});//set name = express
    res.cookie(name, 'value', {maxAge: 360000}).send("ok set");
    console.log('Cookie:', req.cookies);
});
app.get('/clearcookie', function(req, res){
    res.clearCookie(name);
    res.clearCookie("name");
    res.send("cookie"+ name +"cleared");
    console.log('Cookie:', req.cookies);
});
app.listen(8000);