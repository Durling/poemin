/**
 * 此模块为代理模块
 */
var router = require('express').Router(),
	mysql = require('mysql'),
	fs=require('fs'),
	moment = require('moment'),
	config = require('../config.js');

/**
 * 配日志
 */
var logger = require('../log4js').logger,
	logger_error = require('../log4js').logger_error;  
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

// api v1 get admin poemList 获取诗分页列表
router.get('/admin/poemList', function (req,res) {
	var page = req.query.page || 1,
		size = req.query.size || 10;
	// console.log(req.url,req.body);
	var query1 = 'select count(*) as num from `wp_poems`';
	var query2 = 'select * from `wp_poems` order by id limit '+(page-1)*size+','+size;
	// console.log(query);
	connection.query(query1,function(err1,rows1,fields1){
		var total = rows1[0].num;
		connection.query(query2,function(err1,rows2,fields2){
			if (err1) {
				// console.log(err1);
				res.json(err1);
			}else{
				// rows2.forEach(function(n){
				// 	n.created_at = moment(n.created_at).format('YYYY-MM-DD HH:mm:ss')
				// 	n.updated_at = moment(n.updated_at).format('YYYY-MM-DD HH:mm:ss')
				// })
				var data = {
					code:200,
					message:'success',
					total:total,
					rows:rows2
				}
				res.json(data);
				// res.jsonp(data);
			}
		})		
	})
});

// api v1 put admin poem 更新一首诗的内容
router.put('/admin/poem', function (req,res) {
	// console.log(req.url,req.body);
	var n = req.body;
	// console.log(n.poemId);
	var query = 'update wp_poems set title="'+n.title+'",authorName="'+n.authorName+'",content="'+n.content+'" where id='+n.poemId+';';
	// console.log(query);
	connection.query(query,function(err,res){
		if (err) {
			// console.log(err);
			res.json(err);
		}else{
			var data = {
				message:'success',
				resinsert:res
			}
			res.json(data);
			// res.jsonp(data);
		}
	})
});

// api v1 admin collectionList 获取诗集分页列表
router.get('/admin/collectionList', function (req,res) {
	var page = req.query.page || 1,
		size = req.query.size || 10;
	// console.log(req.url,req.body);
	var query1 = 'select count(*) as num from `wp_collections`';
	var query2 = 'select * from `wp_collections` order by id limit '+(page-1)*size+','+size;
	var data = {
		code:200,
		message:'success',
		total:0,
		rows:[]
	}
	var fun = {
		f0:function(callback){
		    connection.query(query1,function selectCb(err, rows, fields) {
				if (err) {throw err;}
				data.total = rows[0].num;
				callback()
			})
		},
		f1:function(callback){
		    connection.query(query2,function selectCb(err, rows, fields) {
				if (err) {throw err;}
				// rows.forEach(function(n){
				// 	n.created_at = moment(n.created_at||0).format('YYYY-MM-DD HH:mm:ss')
				// 	n.updated_at = moment(n.updated_at||0).format('YYYY-MM-DD HH:mm:ss')
				// })
				data.rows = rows
				callback()
			})
		}
	};
	global.await(fun,function(){
		res.jsonp(data);
	});
});

// api v1 admin userList 获取用户分页列表
router.get('/admin/userList', function (req,res) {
	var page = req.query.page || 1,
		size = req.query.size || 10;
	// console.log(req.url,req.body);
	var query1 = 'select count(*) as num from `wp_user`';
	var query2 = 'select * from `wp_user` order by id limit '+(page-1)*size+','+size;
	var data = {
		code:200,
		message:'success',
		total:0,
		rows:[]
	}
	var fun = {
		f0:function(callback){
		    connection.query(query1,function selectCb(err, rows, fields) {
				if (err) {throw err;}
				data.total = rows[0].num;
				callback()
			})
		},
		f1:function(callback){
		    connection.query(query2,function selectCb(err, rows, fields) {
				if (err) {throw err;}
				data.rows = rows
				callback()
			})
		}
	};
	global.await(fun,function(){
		res.jsonp(data);
	});
});

// api v1 admin qnImgList 获取七牛图片分页列表
router.get('/admin/qnImgList', function (req,res) {
	var page = req.query.page || 1,
		size = req.query.size || 10;
	// console.log(req.url,req.body);
	var query1 = 'select count(*) as num from `wp_qn_img`';
	var query2 = 'select * from `wp_qn_img` order by id limit '+(page-1)*size+','+size;
	var data = {
		code:200,
		message:'success',
		total:0,
		rows:[]
	}
	var fun = {
		f0:function(callback){
		    connection.query(query1,function selectCb(err, rows, fields) {
				if (err) {throw err;}
				data.total = rows[0].num;
				callback()
			})
		},
		f1:function(callback){
		    connection.query(query2,function selectCb(err, rows, fields) {
				if (err) {throw err;}
				data.rows = rows
				callback()
			})
		}
	};
	global.await(fun,function(){
		res.jsonp(data);
	});
});

// 新增
router.post('/poems', function (req,res) {
	// console.log(req.url,req.body);
	var n = req.body;
	var query = 'insert into wp_poems(title,authorName,content) values("'+n.title+'","'+n.authorName+'","'+n.content+'");';
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
