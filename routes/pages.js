
var express = require('express');
var request = require('request');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config.js');
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

// 默认页
router.get('/',function (req,res,next){
  res.redirect('poems');
});

// 
router.get('/poems',function (req,res,next){
	var act = req.query.act;
	// console.log(act);
	var act_status;
	if (req.query.id>0) {
		var query = 'select * from poems where id = '+req.query.id+';';
		connection.query(query,function(error,rows,fields){

			if(act=='edit'){
				act_status = 1; //编辑
				title = '编辑';
			}else{
				act_status = 0; //详情
				title = '诗印象'; 
			}
			var renderData = {
				title:title,
				rows:rows,
				act_status:act_status
			};
			// console.log(renderData);
			res.render('poems',renderData);
		})
	}else{
		var query = 'select id,title,authorId,authorName from poems;';
		connection.query(query,function(error,rows,fields){
			if(act=='add'){
				act_status = 2; //新建 
				title = '写一首诗';
			}else if(act=='correction'){
				act_status = 3;
				title = '纠错'; //纠错
			}else{
				act_status = -1;
				title = '诗列表'; // 列表
			}
			var renderData = {
				title:title,
				rows:rows,
				act_status:act_status
			};
			// console.log(renderData);
			res.render('poems',renderData);
		})
	}
})

// 我
router.get('/home', function (req, res, next) {
  var renderData = {
    title: "Me"
  };
  res.render('home', renderData);
});

// 登录/注册
router.get('/login', function (req, res, next) {
  var renderData = {
    title: "登录/注册",
    status:req.query.status
  };
  res.render('user/login', renderData);
});




module.exports = router;
