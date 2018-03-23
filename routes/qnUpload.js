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
var logger = require('../log4js').logger;
var logger_error = require('../log4js').logger_error;  
logger.info("=== this is log from qiniu-upload.js ===");


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

var qn_key={
  accessKey:'UtR9-061L8qFst2lvhiBR9Tc9E_u3sprXyOnTbSS',
  secretKey:'huy_QYClFu6AEjVqc24cwX_98UjtWjKczjIAcjpF'
}

var qn_mac = new qiniu.auth.digest.Mac(qn_key.accessKey,qn_key.secretKey);
var qn_config = new qiniu.conf.Config();
// 空间对应的机房
qn_config.zone = qiniu.zone.Zone_z0;

var web_C={
  bucket:'wepoem-m',
  origin:'http://cdn.wepoem.com/'
}


// 上传图片文件
router.post('/file-upload', function (req,res) {
	// console.log(req.url,req.body);
	var poemId = req.query.poemId;
	console.log('poemId===>'+poemId);
	var form = new multiparty.Form();//实例一个multiparty
	form.uploadDir = "public/img/qiniu-upload/";//设置文件储存路径
	//开始解析前台传过来的文件
	form.parse(req, function(err, fields, files) {
		console.log(fields,files);
		// for (var item in fields){
		// 	console.log(fields[item][0]);
		// }
		var file_id_str = fields.file_id_str;
		console.log('file_id_str===>'+file_id_str);
		// var files = JSON.stringify(files);
		// var files = JSON.parse(files);
		console.log('upload_file.length===>'+files.upload_file.length);
		if(err){
			logger_error.error('parse error: ' + err);
		}else{

			for (var i = 0 ; i < files.upload_file.length ; i++) {
				var inputFile = files.upload_file[i];//获取第一个文件
				// var finalname = inputFile.originalFilename;
				var finalname = ''+file_id_str;
				var old_name = inputFile.path;//获取文件路径
				var new_name = form.uploadDir+finalname;//获取文件名
				fs.renameSync(old_name,new_name);
				// console.log('new_name===>'+new_name+'old_name===>'+old_name);
				//上传到七牛后保存的文件名
				key = finalname;
				//生成上传 Token
				token = uptoken(bucket, key);
				// console.log('key===>'+key);
				// console.log('token===>'+token);

				uploadFile(token, key, new_name);		
			}

		}

	})

	//构造上传函数
	function uploadFile(uptoken, key, localFile) {
		// console.log('uptoken===>'+uptoken+' key===>'+key+' localFile===>'+localFile);
	  	var extra = new qiniu.io.PutExtra();
	    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
	      if(!err) {

	      	fs.unlinkSync(localFile);

	        // 上传成功， 处理返回值
	        console.log(ret);
	        // console.log(ret.hash, ret.key, ret.persistentId);   
			// res.json(ret);

			//构建bucketmanager对象
			var client = new qiniu.rs.Client();
			//获取文件信息
			client.stat(bucket, key, function(err1, ret1) {
			  if (!err1) {
			    console.log(ret,ret1);
			    
			    connectMysql(ret,ret1);
			  } else {
			    console.log(err1);
			  }
			});

			
	      } else {
	      	fs.unlinkSync(localFile);

	        // 上传失败， 处理返回代码
	        // console.log(err);
			res.json(err);
	      }
	  });
	}

	function connectMysql(ret,ret1){
		var file_type = 0;
		if (ret1.mimeType.indexOf('image')>=0) {
			file_type = 1;
		}else if(ret1.mimeType.indexOf('video')>=0){
			file_type = 2;
		}
		var query = 'insert into wp_handwriting_file(file_name,type_name,file_type,poemId) values("'+ret.key+'","'+ret1.mimeType+'",'+file_type+','+poemId+');';
		console.log(query);
		connection.query(query,function(errorinsert,resinsert){
			if (errorinsert) {
				// console.log(errorinsert);
				res.json(errorinsert);
			}else{	
				// console.log(resinsert);
				var data = {
					message:'success',
					resinsert:resinsert,
					ret:ret
				}
				res.json(data);
				// res.jsonp(data);
			}
		})
	}

});


//同步七牛图片代码 （同步后代码注释掉）弹出 success为止
router.get('/syncQnImg',function(req,res,next){
  var saveImgs = [];
  function getQiniuImagesFn(marker){
    var marker = marker || '';
    var prefix='';//为空同步所有图片
    web_C.options={
      limit: 1000,
      prefix: prefix,
      marker: marker
    };
    var bucketManager = new qiniu.rs.BucketManager(qn_mac, qn_config);
    bucketManager.listPrefix(web_C.bucket, web_C.options, function(err, respBody, respInfo) {
      if (err) {
        console.log(err);
        throw err;
      }
      if (respInfo.statusCode == 200) {
        var nextMarker = respBody.marker;
        var commonPrefixes = respBody.commonPrefixes;
        var items = respBody.items;
        saveImgs = saveImgs.concat(items);
        nextMarker ? getQiniuImagesFn(nextMarker) : setQiniuImagesFn();
      }
    })
  }
  function setQiniuImagesFn(){
    saveImgs.sort(function(a,b){
      return a.putTime-b.putTime;
    });
    var ii=0;
    insertFn(saveImgs,ii);
    function insertFn(array,ii){
      if(array.length==ii){
        console.log('success')
        res.end('success');
      }else{
        connection.query(
             "SELECT `key` FROM ?? WHERE ??=?",['wp_qn_img','key',array[ii].key],
             function selectCb(err, results, fields) {  
            if (err) {  throw err;  }
            if(results.length>0){
              console.log((ii+1)+'/'+array.length,'已有')
              ii++;
              insertFn(array,ii)
            }else{
              connection.query(
                   "INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)",['wp_qn_img','key','hash','fsize','mimeType','putTime',array[ii].key,array[ii].hash,array[ii].fsize,array[ii].mimeType,array[ii].putTime],
                   function selectCb(err, results, fields) {  
                  if (err) {  throw err;  }
                  console.log((ii+1)+'/'+array.length,'添加')
                  ii++;
                  insertFn(array,ii)
                }  
              );
            }
          } 
        );
      }
    }
  }
  getQiniuImagesFn('');
})




module.exports = router;

