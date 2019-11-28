const express = require('express');
const expressSession = require('express-session')
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const connection = require('./models/connection');

const main = require('./routes/route-calendar');
const bagger = require('./routes/route-bagger');

const app = express();

connection();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({
    secret: 'max',
    saveUninitialized: false,
    resave: false
}));
app.use(express.static('./assets'));

app.use('/', main);
app.use('/bagger', bagger);

const port = 3000;
app.listen(process.env.PORT || port);
console.log(`Hickam Scheduler now listening on port ${process.env.PORT || port}`);
