/**
 * 此模块为代理模块
 */
var express = require('express'),
	router = express.Router(),
	mysql = require('mysql'),
	config = require('../config.js'),
	multiparty = require('multiparty'),
	fs=require('fs'),
	qiniu = require("qiniu");

/**
 * 配日志
 */
// var logger = require('../log4js').logger;
// var logger_error = require('../log4js').logger_error;  
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

// 上传图片文件
router.post('/file-upload', function (req,res) {
	// console.log(req.url,req.body);
	// var n = req.body;
	var fileNameList = [];
	var form = new multiparty.Form();//实例一个multiparty
	form.uploadDir = "public/img/qiniu-upload/";//设置文件储存路径
	//开始解析前台传过来的文件
	form.parse(req, function(err, fields, files) {
		for (var item in fields){
			console.log(fields[item][0]);
		}
		var nowDateTimeStr = fields.nowDateTimeStr;
		var randomOnce = fields.randomOnce;
		// console.log(nowDateTimeStr);
		var filesTmp = JSON.stringify(files);
		var pr = JSON.parse(filesTmp);
		// console.log(pr.upfiles.length);
		if(err){
			console.log('parse error: ' + err);
		}else{
			for (var i = 0 ; i < pr.upfiles.length ; i++) {
				var inputFile = files.upfiles[i];//获取第一个文件
				var finalname = inputFile.originalFilename;
				var randomStr = Math.round(Math.random() * nowDateTimeStr);
				finalname = nowDateTimeStr+'_'+randomOnce+'_'+randomStr;
				//上传到七牛后保存的文件名
				key = finalname;
				// console.log(key);
				//生成上传 Token
				token = uptoken(bucket, key);
				// console.log(token);
				var new_name = form.uploadDir+finalname;//获取文件名
				var old_name = inputFile.path;//获取文件路径
				// console.log(new_name,old_name);
				fs.renameSync(old_name,new_name);
				fileNameList.push(new_name);	
			}
		}
		// console.log(fileNameList);
		for (var i = 0; i < fileNameList.length; i++) {
			// console.log(fileNameList[i]);
			filePath = fileNameList[i];
			// 调用uploadFile上传
			uploadFile(token, key, filePath);	
		};
	})

	//构造上传函数
	function uploadFile(uptoken, key, localFile) {
		// console.log(uptoken, key, localFile);
	  	var extra = new qiniu.io.PutExtra();
	    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
	      if(!err) {
	        // 上传成功， 处理返回值
	        // console.log(ret);
	        // console.log(ret.hash, ret.key, ret.persistentId);   
			res.json(ret);
	      } else {
	        // 上传失败， 处理返回代码
	        // console.log(err);
			res.json(err);
	      }
	  });
	}

});


module.exports = router;

