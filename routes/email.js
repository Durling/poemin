/**
 * 此模块为代理模块
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config.js');
var nodemailer = require('nodemailer');


/**
 * 配日志
 */
var logger = require('../log4js').logger;
var logger_error = require('../log4js').logger_error;  
// logger.info("=== this is log from admin.js ===");

/**
 * 创建数据库连接
 */
var connection = mysql.createConnection({
	host: config.mysql.host,
	user: config.mysql.user,
	password: config.mysql.password,
	database: config.mysql.database,
	port: config.mysql.port
})




var senderEmail = 'team@wepoem.com',
	pass = 'Wp20120520',
	serderName = '微诗团队';

var transporter = nodemailer.createTransport({
    // service: 'Gmail',
	host: "smtp.exmail.qq.com", // 主机
	port: 465, // SMTP 端口
	secure: true, // use SSL
    auth: {
        user: senderEmail,
        pass: pass
    }
});


router.post('/send-email', function (req, res) {
	var n = req.body;
	// console.log(n);
	// var code2 = String(Math.floor(Math.random()*9000)+1000).substr(0,2);
	// console.log(code2);
	var randomCode = Math.random().toString(36).substr(2).toUpperCase();
	// console.log(randomCode);
	var index = Math.floor((Math.random()*6)); 
	// console.log(index);
	var newCode6 = randomCode.substr(index,6);
	// console.log(newCode6);

	var mailOptions = {
	    from: serderName+' <'+senderEmail+'>', // sender address
	    to: n.email, // list of receivers
	    subject: n.type+' ✔', // Subject line
	    text: 'Hello world ✔', // plaintext body
	    html: '<b>'+n.type+'>验证码:【'+newCode6+'】</b><br/><small>--诗印象' // html body
	};


	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        // console.log(error);
			res.json(error);
	    }else{
	        // console.log(info);
	        var ret = {
	        	message:'success',
	        	info:info,
	        	newCode6:newCode6
	        }
			updateUserEmailCode(req,res,ret);
			// res.json(data);
	    }
	});

});

function updateUserEmailCode(req,res,ret){
	var n = req.body;
	var query = 'update user set email_code="'+ret.newCode6+'" where id='+n.targetId+';';
	console.log(query);
	connection.query(query,function(errorupdate,resupdate){
		if (errorupdate) {
			// console.log(errorupdate);
			res.json(errorupdate);
		}else{	
			var data = {
				message:'success',
				info:ret.info,
				resupdate:resupdate
			}
			res.json(data);
			// res.jsonp(data);
		}
	})
}






module.exports = router;




