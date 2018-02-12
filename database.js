//npm install --save mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/ExpressDb');
var personShema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personShema);
//app
var express = require('express');
var path = require('path');
var multer = require('multer');
var bodyParser =  require('body-parser');
var app = express();
var upload = multer();
app.engine('pug',require('pug').__express);
app.set('view engine', 'pug');
app.set('views', './views');
//for parsing application/json
app.use(bodyParser.urlencoded({extended: false}));
//form-urlencoded
//for parsing ,ultipart/frm-data
app.use(upload.array());
app.use(express.static('public'));
app.get('/person', function(req, res){
    res.render('person');
    console.log("get ok");
});





app.post('/person', function(req, res){
    var personInfo = req.body;//Get the parsed information
    console.log(req.body);
    console.log("will res here");
    if(personInfo.name || personInfo.age.toString() ||personInfo.nationality){
        res.render('show_message',{
            message:'Sorry, you provided wrong info',
            type:'error'
        });
        console.log(personInfo);
    }else{
        console.log("ok");
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });
        newPerson.save(function(err, Person){
            console.log(err);
            if(err){
                res.render('show_message',{
                    message: 'Database error',
                    type: 'error'
                });
            }else{
                res.render('show_message',{
                    message:'New person added',
                    type: "succcess",
                    person: personInfo
                })
            }
        });
    }
});
app.get('/people', function(req, res){
    Person.find(function(err, response){
       res.json(response);
    });
 });
//update
 app.put('/people/:id', function(req, res){
     console.log(req.body);
    Person.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);

    });
 });
 //delete
 app.delete('/people/:id', function(req, res){
    Person.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });
app.listen(8000);