const express = require('express');
var router = express.Router();

const Bagger = require('../models/model-bagger');

router.get('/', function(req, res){
    res.render('view-bagger');
});

router.get('/list', function(req, res){
    Bagger
    .find({})
    .exec(function(err, result){
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;