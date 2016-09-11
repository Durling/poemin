
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

router.get('/poems',function (req,res,next){

	connection.query('select * from poems;',function(error,rows,fields){
		// res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
		// res.write('<h3>查询数据库：</h3><br/>');
		// res.end(JSON.stringify(rows));

		var act = req.query.act;
		// console.log(act);
		var act_status;
		if(act=='add'){
			act_status = 2;
		}else if(act=='edit'){
			act_status = 1;
		}else{
			act_status = 0;
		}
		var renderData = {
			rows:rows,
			act_status:act_status
		};
		// console.log(renderData);
		res.render('poems',renderData);
	})
})


module.exports = router;
