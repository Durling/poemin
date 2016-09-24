/**
 * 此模块为代理模块
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
var mysql = require('mysql');
var config = require('../config.js');

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

// 编辑
router.put('/poems', function (req,res) {
	// console.log(req.url,req.body);
	var n = req.body;
	// console.log(n.poemId);
	var query = 'update poems set title="'+n.title+'",authorName="'+n.authorName+'",content="'+n.content+'" where id='+n.poemId+';';
	// console.log(query);
	connection.query(query,function(errorupdate,resupdate){
		if (errorupdate) {
			// console.log(errorupdate);
			res.json(errorupdate);
		}else{	
			var data = {
				message:'success',
				resinsert:resupdate
			}
			res.json(data);
			// res.jsonp(data);
		}
	})
});

// 新增
router.post('/poems', function (req,res) {
	// console.log(req.url,req.body);
	var n = req.body;
	var query = 'insert into poems(title,authorName,content) values("'+n.title+'","'+n.authorName+'","'+n.content+'");';
	// console.log(query);
	connection.query(query,function(errorinsert,resinsert){
		if (errorinsert) {
			// console.log(errorinsert);
			res.json(errorinsert);
		}else{	
			// console.log(resinsert);
			var data = {
				message:'success',
				resinsert:resinsert
			}
			res.json(data);
			// res.jsonp(data);
		}
	})

});




module.exports = router;
