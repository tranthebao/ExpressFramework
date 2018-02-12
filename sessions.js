var express = require('express');
var session = require('express-session');
var cookieparser =  require('cookie-parser');

var app = express();
app.use(cookieparser());
app.use(session({
    secret: "Shh, its a secret!"
}));
app.get('/', function(req, res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("view visited this page" + req.session.page_views + "times");
    }else{
        req.session.page_views = 1;
        res.send("wellcome to this page for the first time !");
    }
});
app.listen(8000);