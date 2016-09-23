
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
		connection.query('select * from poems where id = '+req.query.id+';',function(error,rows,fields){
			// res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
			// res.write('<h3>查询数据库：</h3><br/>');
			// res.end(JSON.stringify(rows));

			if(act=='edit'){
				act_status = 1;
				title = '编辑';
			}else{
				act_status = 0;
				title = '诗的知音';
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
		connection.query('select id,title,authorId,authorName,collection from poems;',function(error,rows,fields){
			if(act=='add'){
				act_status = 2;
				title = '写一首诗';
			}else{
				act_status = -1;
				title = '诗的列表';
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


module.exports = router;
