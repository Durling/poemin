var fs = require('fs');

var localhost = {
	qiniuDoname : 'http://cdn.wepoem.com/',
    mysql: {
		host:'rdsjeviijm36zayo.mysql.rds.aliyuncs.com',
		user:'fe_admin',
		password:'FeFeFe20171024Cloudm',
		database:'fe_db',
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
var development = {
	qiniuDoname : 'http://cdn.wepoem.com/',
    mysql: {
		host:'127.0.0.1',
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
var production = {
	qiniuDoname : 'http://cdn.wepoem.com/',
    mysql: {
		host:'127.0.0.1',
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

var NODE_ENV=fs.readFileSync('../NODE_ENV','utf-8');
global.NODE_ENV = NODE_ENV||'development';

//需要在各自的环境运行 export NODE_ENV=localhost
console.log('global.NODE_ENV=>',global.NODE_ENV)
if (global.NODE_ENV == 'development') {
    module.exports = development;
} else if (global.NODE_ENV == 'production') {
    module.exports = production;
} else if (global.NODE_ENV == 'localhost') {
    module.exports = localhost;
}else{
    module.exports = localhost;
}


