//app.get(route, callback)=>res.send()
//app.listen(port, [host], [backlog], [callback]])
//511 maximum pending connect
var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send("Hello World!");
});
app.listen(8000,"127.0.0.1",511,function(err){
    if(err){
        return console.error(err);
    }
    console.log("App listener port 8000")
});