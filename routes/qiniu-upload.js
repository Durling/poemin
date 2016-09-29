/**
 * 此模块为代理模块
 */
var express = require('express'),
	router = express.Router(),
	http = require('http'),
	url = require('url'),
	querystring = require('querystring');
	request = require('request'),
	mysql = require('mysql'),
	path = require('path'),
	config = require('../config.js'),
	formidable = require('formidable'),
	multiparty = require('multiparty'),

	fs=require('fs'),
	qiniu = require("qiniu");

/**
 * 配日志
 */
var logger = require('../log4js').logger;
var logger_error = require('../log4js').logger_error;  
// logger.info("=== this is log from qiniu-upload.js ===");

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'UtR9-061L8qFst2lvhiBR9Tc9E_u3sprXyOnTbSS';
qiniu.conf.SECRET_KEY = 'huy_QYClFu6AEjVqc24cwX_98UjtWjKczjIAcjpF';

//要上传的空间
bucket = 'poemin';


//构建上传策略函数
function uptoken(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}

// 上传图片
router.post('/file-upload', function (req,res) {
	// console.log(req.url,req.body);
	var n = req.body;
	//上传到七牛后保存的文件名
	key = n.fileName;
	//生成上传 Token
	token = uptoken(bucket, key);
	console.log(token);

	// var insertSQL_params = [];	
	var obj ={};
	var form = new multiparty.Form();//实例一个multiparty
	form.uploadDir = "./public/img/upload/";//设置文件储存路径
	//开始解析前台传过来的文件
	form.parse(req, function(err, fields, files) {
		for (var item in fields){
			// insertSQL_params.push(fields[item][0]);
			console.log(fields[item][0]);
		}
		var filesTmp = JSON.stringify(files);
		var pr = JSON.parse(filesTmp);
		console.log(pr.upfiles.length);
		if(err){
			console.log('parse error: ' + err);
		} else {
			for (var i = 0 ; i < pr.upfiles.length ; i++) {
				var inputFile = files.upfiles[i];//获取第一个文件
				var finalname = inputFile.originalFilename;
				// insertSQL_params.push(finalname);
				var new_name = "./public/img/upload/"+finalname;//获取文件名
				console.log(new_name);
				var old_name = inputFile.path;//获取文件路径
				console.log(old_name);
				fs.renameSync(old_name,new_name);	

				//要上传文件的本地路径
				filePath = String(new_name);

				obj[filePath] = files[filePath];

			}
		}
		callback(err,obj);
	})


// Parts are emitted when parsing the form 
form.on('part', function(part) {
  // You *must* act on the part by reading it 
  // NOTE: if you want to ignore it, just call "part.resume()" 
  if (!part.filename) {
    // filename is not defined when this is a field and not a file 
    console.log('got field named ' + part.name);
    // ignore field's content 
    part.resume();
  }
  if (part.filename) {
    // filename is defined when this is a file 
    count++;
    console.log('got file named ' + part.name);
    // ignore file's content here 
    part.resume();
  }
  part.on('error', function(err) {
    // decide what to do 
  });
});


	form.on('close', function() {
		console.log('Upload completed!');

		// console.log(obj);
		// filePath = obj.filePath;
		// 调用uploadFile上传
		// uploadFile(token, key, filePath);

	});






	//构造上传函数
	function uploadFile(uptoken, key, localFile) {
	  var extra = new qiniu.io.PutExtra();
	    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
	      if(!err) {
	        // 上传成功， 处理返回值
	        console.log(ret.hash, ret.key, ret.persistentId);   
	        console.log(ret);
			res.json(ret);    
	      } else {
	        // 上传失败， 处理返回代码
	        console.log(err);
	      }
	  });
	}








	


});











module.exports = router;

