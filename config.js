var express = require('express');
var app = express();

var localhost = {
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    }
};
var dev = {
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    }
};
var produ = {
    mysql: {
		host:'127.0.0.1',
		user:'root',
		password:'root',
		database:'poemin',
		port:3306
    }
};


if (app.get('env') === 'development') {
    module.exports = dev;
} else if (app.get('env') === 'production') {
    module.exports = produ;
} else if (app.get('env') === 'localhost') {
    module.exports = localhost;
}