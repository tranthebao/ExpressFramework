var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send("Get route on things.");
});
router.post('/', function(req,res){
    res.send('POST route on things');
});

module.exports = router;
