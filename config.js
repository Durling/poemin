var express = require('express');
var app = express();

var localhost = {
	qiniuDoname : 'http://oe71y3abh.bkt.clouddn.com/',
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    },
    redis: {
    	ip: '127.0.0.1',
        port: 6379,
        pwd: '12345',
        db: 6,
        prefix: 'poemin:'
    }
};
var dev = {
	qiniuDoname : 'http://oe71y3abh.bkt.clouddn.com/',
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    },
    redis: {
    	ip: '127.0.0.1',
        port: 6379,
        pwd: '12345',
        db: 6,
        prefix: 'poemin:'
    }

};
var produ = {
	qiniuDoname : 'http://oe71y3abh.bkt.clouddn.com/',
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    },
    redis: {
    	ip: '127.0.0.1',
        port: 6379,
        pwd: '12345',
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