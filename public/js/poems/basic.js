
var tipsmsg = ['未定义区域','你太棒了！编辑成功','恭喜你！新增成功','开发中！嫑期待'];
			//    0              1               2             3
			//  
/**
 * ajax 请求
 */
function global_ajax(type,url,data){
	// console.log(type,url,data);
	var list;
	if (type=='get') {
		$.ajax({
		  url : url,
		  dataType : 'json',
		  type : type,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}else if(type=='post'){
		$.ajax({
		  url : url,
		  dataType : 'json',
		  type : type,
		  data : data,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}else if(type=='put'){
		$.ajax({
		  url : url,
		  dataType : 'json',
		  type : type,
		  data : data,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}else if(type=='delete'){
		$.ajax({
		  url : url,
		  dataType : 'json',
		  type : type,
		  async : false,
		  contentType : "application/json",
		  success : function(data) {
		  	list = data;
		  },
		  error: function(err){
		  	layer.msg(err);
		  }
		})
	}
	return list;
}

