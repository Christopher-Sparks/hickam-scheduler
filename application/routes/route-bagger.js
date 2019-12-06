const express = require('express');
var router = express.Router();

const Bagger = require('../models/model-bagger');

router.get('/', function(req, res){
    res.render('view-bagger');
});

router.get('/add', function(req, res){
    res.render('view-bagger-add');
});

router.get('/list', function(req, res){
    Bagger
    .find({})
    .sort({number: 1})
    .exec(function(err, result){
        if (err) throw err;
        res.send(result);
    });
});

router.post('/create', function(req, res){

    var data = req.body;
    var schedule = [];
    if(data.Mon){
        schedule.push({
            day: data.Mon,
            period: data.MonTime
        });
    }
    if(data.Tues){
        schedule.push({
            day: data.Tues,
            period: data.TuesTime
        });
    }
    if(data.Wed){
        schedule.push({
            day: data.Wed,
            period: data.WedTime
        });
    }
    if(data.Thurs){
        schedule.push({
            day: data.Thurs,
            period: data.ThursTime
        });
    }
    if(data.Fri){
        schedule.push({
            day: data.Fri,
            period: data.FriTime
        });
    }
    if(data.Sat){
        schedule.push({
            day: data.Sat,
            period: data.SatTime
        });
    }
    if(data.Sun){
        schedule.push({
            day: data.Sun,
            period: data.SunTime
        });
    }

    var bagger = new Bagger({
        number: data.number,
        name: data.name,
        schedule: schedule,
        address: data.address,
        phone: data.phone,
        roles: data.roles
    });

    bagger.save(function(err, result){
        if(err) throw err;
        console.log('Bagger added: ', result);
        res.send('true');
    });

});

module.exports = router;