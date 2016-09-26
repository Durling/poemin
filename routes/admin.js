/**
 * 此模块为代理模块
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
var mysql = require('mysql');
var config = require('../config.js');
var fs=require('fs');

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


// 获取列表
router.get('/poems', function (req,res) {
	// console.log(req.url,req.body);
	var query = 'select id,title,authorId,authorName from poems where title like "%'+req.query.title+'%" or authorName like "%'+req.query.title+'%";';
	// console.log(query);
	connection.query(query,function(error,rows,fields){
		if (error) {
			// console.log(errorupdate);
			res.json(error);
		}else{	
			var data = {
				message:'success',
				rows:rows
			}
			res.json(data);
			// res.jsonp(data);
		}
	})
});


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




// 用户注册
router.post('/login', function (req,res) {
	// console.log(req.url,req.body);
	var n = req.body;
	var query = 'insert into user(email,phone,userName,password) values("'+n.email+'","'+n.phone+'","'+n.userName+'","'+n.password+'");';
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


// 用户登录
router.get('/login', function (req,res) {
	// console.log(req.url,req.body);
	var query = 'select id,email,phone,userName,password from user where email like "'+req.query.email+'";';
	// console.log(query);
	connection.query(query,function(error,rows,fields){
		if (error) {
			// console.log(errorupdate);
			res.json(error);
		}else{	
			var data = {
				message:'success',
				rows:rows
			}
			res.json(data);
			// res.jsonp(data);
		}
	})
});




// 获取某个目录下文件列表
router.get('/getFiles', function (req,res) {
	// console.log(req.url,req.body);
	var fileDirectory = req.query.path;
	if(fs.existsSync(fileDirectory)){
		fs.readdir(fileDirectory, function (err, files) {
		  if (err) {
		  	logger_error.error(err);
		    console.log(err);
		    return;
		  }
		  var count = files.length;
		  var results = [];
		  files.forEach(function (filename) {
		    fs.readFile(filename, function (data) {
		      // results[filename] = data;
		      // results.push(data);
		      results.push(filename);
		      count--;
		      if (count <= 0) {
		        // 对所有文件进行处理
		        // console.log(results);
		        var rs = {
		        	results:results,
		        	path:fileDirectory
		        }
				res.json(rs);
				// res.jsonp(results);
		      }
		    });
		  });
		});
	}else{
	    logger_error.error(fileDirectory + "  Not Found!");
	    console.log(fileDirectory + "  Not Found!");
	}	
});




module.exports = router;
