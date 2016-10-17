var express = require('express');
var app = express();

var localhost = {
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    },
    qiniuDoname : 'http://oe71y3abh.bkt.clouddn.com/',
    // redis数据库配置
    redis: {
        port: 6379,
        ip: '127.0.0.1',
        pwd: 'lalocal',
        db: 6,
        prefix: 'poemin:'
    }
};
var dev = {
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    },
    qiniuDoname : 'http://oe71y3abh.bkt.clouddn.com/',
    // redis数据库配置
    redis: {
        port: 6379,
        ip: '127.0.0.1',
        pwd: 'lalocal',
        db: 6,
        prefix: 'poemin:'
    }

};
var produ = {
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    },
    qiniuDoname : 'http://oe71y3abh.bkt.clouddn.com/',
    // redis数据库配置
    redis: {
        port: 6379,
        ip: '127.0.0.1',
        pwd: 'lalocal',
        db: 6,
        prefix: 'poemin:'
    }

};


if (app.get('env') === 'development') {
    module.exports = dev;
} else if (app.get('env') === 'production') {
    module.exports = produ;
} else if (app.get('env') === 'localhost') {
    module.exports = localhost;
}