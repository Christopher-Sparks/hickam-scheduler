const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('view-calendar');
});

module.exports = router;