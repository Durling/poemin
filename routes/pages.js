<<<<<<< HEAD

var request = require('request'),
	router = require('express').Router(),
	mysql = require('mysql'),
	config = require('../config.js');
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

// 诗列表、详情
router.get('/poems',function (req,res,next){

	var act = req.query.act;
	console.log('act===>'+act);
	var act_status;
	if (req.query.id>0) {
		var query = 'select * from poems where id='+req.query.id+';';
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
			res.render('poems/poems',renderData);
		})
	}else{
		var query = 'select id,title,authorId,authorName from poems;';
		connection.query(query,function(error,rows,fields){
			if(act=='add'){
				act_status = 2; //新建 
				title = '写个诗';
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
			console.log('renderData===>'+renderData);
			res.render('poems/poems',renderData);
		})
	}
})


// 个人中心
router.get('/home', function (req, res, next) {
	var n = req.query;
	var query = 'select * from user where id='+n.uid+';';
	connection.query(query,function(error,rows,fields){
		if (rows.length>0) {
			var renderData = {
				title:"个人中心",
				rs:rows[0],
				qiniuDoname:config.qiniuDoname
			};
			// console.log(renderData);
			res.render('home/home', renderData);
		}else{

		}

	})
	
});



// 诗友圈
router.get('/moments', function (req, res, next) {
  var renderData = {
    title: "诗友圈"
  };
  res.render('home/moments', renderData);
});

// 登录/注册
router.get('/login', function (req, res, next) {
	status = req.query.status;
	if (status==undefined||status==null||status=='') {
		status = 1;
	}
	var renderData = {
		title: "登录/注册",
		status:status
	};
	res.render('user/login', renderData);
});

// 诗笔迹
router.get('/handwriting', function (req, res, next) {
	var poemId = req.query.poemId;
	var rows_files,rows_poems;

	var query = 'select * from handwriting_file where poemId="'+poemId+'";';
	connection.query(query,function(error,rows,fields){
		rows_files = rows;

		var query2 = 'select id,title,content,authorName from poems where id="'+poemId+'";';
		connection.query(query2,function(error2,rows2,fields2){
			rows_poems = rows2;

			var renderData = {
				title:"诗笔迹",
				rows_files:rows_files,
				rows_poems:rows_poems,
				qiniuDoname:config.qiniuDoname
			};
			res.render('handwriting/handwriting', renderData);

		})
	})

});

var Superagent = require('superagent'),
	sha1 = require('../public/js/sha1.min.js'),
	wx = {
		host:'https://api.weixin.qq.com/cgi-bin',
		grant_type:'client_credential',
		appid:'wx487526afe7cbbfdc',
		secret:'2cab5c70608be99c5b3f6b98566685ad'
	}
// 诗音
router.get('/voice',function (req,res,next){
	var poemId = req.query.poemId || 1

	var query = 'select * from voice where poemId="'+poemId+'";'


	var random = {
		noncestr:Math.random().toString(36).substring(3,19),
		timestamp:new Date().getTime(),
	}
	// console.log(req.url)
	Superagent.get(wx.host+'/token?grant_type='+wx.grant_type+'&appid='+wx.appid+'&secret='+wx.secret).then(function(res1) {
		// console.log(res1.body)
		return Superagent.get(wx.host+'/ticket/getticket?type=jsapi&access_token='+res1.body.access_token).then(function(res2){
			return res2.body
		}).catch(function(err) {
			return err
		})
	}).then(function(res1){

		var location_href = req.query.href ? decodeURIComponent(req.query.href) : 'http://192.168.0.100:6868/voice?poemId=1',
			location_href = location_href.split('#')[0],
			signature = 'jsapi_ticket='+res1.ticket+'&noncestr='+random.noncestr+'&timestamp='+random.timestamp+'&url='+location_href,
			signature = sha1(signature),
			wxConfig = {
				appid:wx.appid,
				signature:signature,
				noncestr:random.noncestr,
				timestamp:random.timestamp
			}

			console.log(location_href)

			return {
				wxConfig:wxConfig
			}

	}).then(function(res1){
		// console.log(res1)
		// res.send(res1)

		connection.query(query,function (error,rows,fields){
			var renderData = {
				title:'诗音',
				rows:rows,
				wxConfig: res1.wxConfig
			};
			// console.log(renderData);
			res.render('voice/vlist',renderData);
			// res.send(renderData)
		})

	}).catch(function(err) {
		// console.log(err)
		res.send(err)
	})


})

// 朝代列表
router.get('/dynasty',function (req,res,next){
	var query = 'select * from dynasty;';
	connection.query(query,function(error,rows,fields){
		var renderData = {
			title:'朝代列表',
			rows:rows
		};
		// console.log(renderData);
		res.render('poems/dynasty',renderData);
	})

})


module.exports = router;
=======

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

// 诗列表、详情
router.get('/poems',function (req,res,next){

	var act = req.query.act;
	console.log('act===>'+act);
	var act_status;
	if (req.query.id>0) {
		var query = 'select * from wp_poems where id='+req.query.id+';';
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
			res.render('poems/poems',renderData);
		})
	}else{
		var query = 'select id,title,authorId,authorName from wp_poems;';
		connection.query(query,function(error,rows,fields){
			if(act=='add'){
				act_status = 2; //新建 
				title = '写个诗';
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
			console.log('renderData===>'+renderData);
			res.render('poems/poems',renderData);
		})
	}
})


// 个人中心
router.get('/home', function (req, res, next) {
	var n = req.query;
	var query = 'select * from wp_user where id='+n.uid+';';
	connection.query(query,function(error,rows,fields){
		if (rows.length>0) {
			var renderData = {
				title:"个人中心",
				rs:rows[0],
				qiniuDoname:config.qiniuDoname
			};
			// console.log(renderData);
			res.render('home/home', renderData);
		}else{

		}

	})
	
});



// 诗友圈
router.get('/moments', function (req, res, next) {
  var renderData = {
    title: "诗友圈"
  };
  res.render('home/moments', renderData);
});

// 登录/注册
router.get('/login', function (req, res, next) {
	status = req.query.status;
	if (status==undefined||status==null||status=='') {
		status = 1;
	}
	var renderData = {
		title: "登录/注册",
		status:status
	};
	res.render('user/login', renderData);
});

// 诗笔迹
router.get('/handwriting', function (req, res, next) {
	var poemId = req.query.poemId;
	var rows_files,rows_poems;

	var query = 'select * from wp_handwriting_file where poemId="'+poemId+'";';
	connection.query(query,function(error,rows,fields){
		rows_files = rows;

		var query2 = 'select id,title,content,authorName from wp_poems where id="'+poemId+'";';
		connection.query(query2,function(error2,rows2,fields2){
			rows_poems = rows2;

			var renderData = {
				title:"诗笔迹",
				rows_files:rows_files,
				rows_poems:rows_poems,
				qiniuDoname:config.qiniuDoname
			};
			res.render('handwriting/handwriting', renderData);

		})
	})

});

// 朝代列表
router.get('/dynasty',function (req,res,next){
	var query = 'select * from wp_dynasty;';
	connection.query(query,function(error,rows,fields){
		var renderData = {
			title:'朝代列表',
			rows:rows
		};
		// console.log(renderData);
		res.render('poems/dynasty',renderData);
	})

})


module.exports = router;
>>>>>>> 71251c56aeabfae45bc0fe2a2415cf83242fde20
