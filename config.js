var express = require('express');
var app = express();

var localhost = {
	qiniuDoname : 'http://oio0fd7aa.bkt.clouddn.com/',
    mysql: {
		host:'nuo.nuoluan.com',
		user:'root',
		password:'root',
		database:'wepoem',
		port:3306
    },
    redis: {
    	ip: '127.0.0.1',
        port: 6379,
        pwd: '12345',
        db: 6,
        prefix: 'session_wepoem_m:'
    }
};
var dev = {
	qiniuDoname : 'http://oio0fd7aa.bkt.clouddn.com/',
    mysql: {
		host:'nuo.nuoluan.com',
		user:'root',
		password:'root',
		database:'wepoem',
		port:3306
    },
    redis: {
    	ip: '127.0.0.1',
        port: 6379,
        pwd: '12345',
        db: 6,
        prefix: 'session_wepoem_m:'
    }

};
var produ = {
	qiniuDoname : 'http://oio0fd7aa.bkt.clouddn.com/',
    mysql: {
		host:'nuo.nuoluan.com',
		user:'root',
		password:'root',
		database:'wepoem',
		port:3306
    },
    redis: {
    	ip: '127.0.0.1',
        port: 6379,
        pwd: '12345',
        db: 6,
        prefix: 'session_wepoem_m:'
    }

};


//需要在各自的环境运行 export NODE_ENV=localhost
if (app.get('env') == 'development') {
    module.exports = dev;
} else if (app.get('env') == 'production') {
    module.exports = produ;
} else if (app.get('env') == 'localhost') {
    module.exports = localhost;
}else{
    module.exports = localhost;
}


