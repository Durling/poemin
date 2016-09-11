var express = require('express');
var path = require('path');
var router = express.Router();

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/pages'));

module.exports = app;
