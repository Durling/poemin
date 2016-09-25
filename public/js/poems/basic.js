
var msg_tips = 	[
					'提交失败！请重新提交',
					'你太棒了！编辑成功',
					'恭喜你！新增成功',
					'开发中！嫑点我',
					'重新提交'
				],
	msg_status= [
					'success',
					'error'
				];
/**
 * ajax 请求中间层
 */
function global_ajax(type,url,data){
	// console.log(type,url,data);
	var list;
	if (type=='get') { //获取列表
		$.ajax({
		  url : url,
		  dataType : 'json',
		  data: data,
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
	}else if(type=='post'){  //新增
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
	}else if(type=='put'){ //编辑
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
	}else if(type=='delete'){  //删除 暂时不做
		// $.ajax({
		//   url : url,
		//   dataType : 'json',
		//   type : type,
		//   async : false,
		//   contentType : "application/json",
		//   success : function(data) {
		//   	list = data;
		//   },
		//   error: function(err){
		//   	layer.msg(err);
		//   }
		// })
	}
	return list;
}



function showSearchDiv(obj){
	$('.global-search-div').slideToggle();
}
function hideSearchDiv(obj){
	$(obj).closest('.global-search-div').slideToggle();
}


var randomNumber,baseNumber=0;
// 显示诗全屏页面
function show_resize_full_div(){
	var Arr = [];
	for (var i = 0; i <= 11; i++) {
		Arr.push(i);
	}
	// console.log(Arr);
	var	i = getRandomNumber(Arr);
	if (randomNumber==i) {
		i = getRandomNumber(Arr);
		return false;
	}else{
		randomNumber = i;
	}  
	// console.log(i); 
	$('.resize-full-div').css('background-image','url(img/v_bg_0'+i+'.jpg)');

	$('.resize-full-div').show().addClass('animated zoomIn');
	$('.resize-full-div').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('.resize-full-div').removeClass('animated zoomIn zoomOut');
	});
}
// 隐藏诗全屏页面
function hide_resize_full_div(){
	$('.resize-full-div').removeClass('zoomIn').addClass('animated zoomOut');
	$('.resize-full-div').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('.resize-full-div').removeClass('animated zoomIn zoomOut').hide();
	});
}
// 显示工具栏
function show_resize_full_btn(){
	$('.resize-full-btn').slideDown();
}
// 隐藏工具栏
function hide_resize_full_btn(){
	$('.resize-full-btn').slideUp();
}
// i随机换背景 j按顺序换背景
function next_resize_full_bg(){
	var Arr = [];
	for (var i = 0; i <= 13; i++) {
		Arr.push(i);
	}
	// console.log(Arr);
	var	i = getRandomNumber(Arr);
	if (randomNumber==i) {
		i = getRandomNumber(Arr);
		return false;
	}else{
		randomNumber = i;
	}  
	// console.log(i); 
	// $('.resize-full-div').css('background-image','url(img/v_bg_0'+i+'.jpg)');
	baseNumber+=1;
	if (baseNumber>Arr.length-1) {
		baseNumber = 0;
	}
	var j = Arr[baseNumber];
	// console.log(j);   
	$('.resize-full-div').css('background-image','url(img/v_bg_0'+j+'.jpg)');
}

// i随机换字体颜色 j按顺序换字体颜色
function next_resize_full_color(){
	var Arr = ['white','rgba(255, 255, 255, 0.75)','#666666','black'];
	var	i = getRandomNumber(Arr);
	if (randomNumber==i) {
		i = getRandomNumber(Arr);
		return false;
	}else{
		randomNumber = i;
	}  
	// console.log(i); 
	// $('.resize-full-div').css('color',i);

	baseNumber+=1;
	if (baseNumber>Arr.length-1) {
		baseNumber = 0;
	}
	var j = Arr[baseNumber];
	// console.log(j); 
	$('.resize-full-div').css('color',j);
}

// 随机在所给数组中选一项
function getRandomNumber(arr){
	var i;
	var n = Math.floor(Math.random() * arr.length + 1)-1;
	var i = arr[n];
	return i;
}



// 获取网络状态
function get_status(){
    // var re_el = document.getElementById("re");
    // var btn_el = document.getElementById("btn");
    var connection = navigator.connection||navigator.mozConnection||navigator.webkitConnection||{tyep:'unknown'};
    var type_text = ['unknown','ethernet','wifi','2g','3g','4g','none'];

    if(typeof(connection.type) == "number"){
        connection.type_text = type_text[connection.type];
    }else{
        connection.type_text = connection.type;
    }
    if(typeof(connection.bandwidth) == "number"){
        if(connection.bandwidth > 10){
            connection.type = 'wifi';
        }else if(connection.bandwidth > 2){
            connection.type = '3g';
        }else if(connection.bandwidth > 0){
            connection.type = '2g';
        }else if(connection.bandwidth == 0){
            connection.type = 'none';
        }else{
            connection.type = 'unknown';
        }
    }
    // var html = 'Type : '+connection.type_text;
    //     html += '<br>Bandwidth : '+connection.bandwidth;
    //     html += '<br>isOnline : '+navigator.onLine;
    //     re_el.innerHTML = html;
    return navigator.onLine;
}
// btn_el.onclick = function(){
//     re_el.innerHTML = 'Waiting...';
//     
// }
var online_status = get_status();
console.log('online_status:'+online_status);
if (!online_status) {
    alert('网络异常！');
};


// console.log($(window).height()); //浏览器当前窗口可视区域高度 
// console.log($(document).height()); //浏览器当前窗口文档的高度 
// console.log($(document.body).height());//浏览器当前窗口文档body的高度 
// console.log($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin 
// console.log($(window).width()); //浏览器当前窗口可视区域宽度 
// console.log($(document).width());//浏览器当前窗口文档对象宽度 
// console.log($(document.body).width());//浏览器当前窗口文档body的高度 
// console.log($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin 
// var global_my_window_width = $(window).width();
// var global_my_window_height = $(window).height();
// console.log('width:'+global_my_window_width,'height:'+global_my_window_height);



