const express = require('express');
var router = express.Router();

const Calendar = require('../models/model-calendar');

router.get('/', function(req, res){
    res.render('view-calendar');
});

router.get('/list', function(req, res){
    Calendar
    .find({})
    .sort({day: 1})
    .exec(function(err, result){
        if (err) throw err;
        res.send(result);
    });
});

router.get('/baggers', function(req, res){

});

module.exports = router;