var express = require('express');
var path = require('path');
var router = express.Router();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var logger = require('./log4js').logger;  
var logger_error = require('./log4js').logger_error;  
// logger.info("=== this is log from app.js ===");

function haltOnTimedout(req, res, next){
  logger.info('=== HALTONTIMEOUT REQ ===',req);
  if (!req.timedout) next();
}

var app = express();


process.on('uncaughtException', function (err) {
    logger_error.error('=== CAUGHT EXCEPTION ===', err);
});

// 定义数据解析器
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false, "limit":"50mb" }));

// 定义cookie解析器
app.use(cookieParser());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/pages'));
app.use('/admin', require('./routes/admin'));


module.exports = app;
