var express = require('express');
var bodyParser =  require('body-parser');
var multer  = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res){
    res.render('form');
});
app.engine('pug',require('pug').__express);
app.set('view engine', 'pug');
app.set('views', './views');

//for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));
//form-urlencoded
//for parsing ,ultipart/frm-data
app.use(upload.array());
app.use(express.static('public'));
app.post('/', function(req, res){
    console.log(req.body);
    res.send('recieved your request!');
});

app.listen(8000);