

// 发送邮箱验证码
function sendEmailCode(obj) {
	// var timer = Number($.cookie('emailCodeTimer'));
	var userId = $('.login-info-name').attr('userId');
	// if (userId>0) {
	//   //信息框
	//   layer.open({
	//     content: '请在30s以后再发送'
	//     ,btn: '我知道了'
	//   });
	//   return false;
	// }
	var email = $(obj).siblings('.my-email').val();
	var form = {
		act:'send-email',
		email:email,
		type:'邮箱认证',
		targetId:userId
	}
	var type = 'post',
		url = 'email/'+form.act,
		data = JSON.stringify(form);
	var rs = global_ajax(type,url,data);
    // rs = JSON.parse(rs);
    console.log(rs);
    if (rs.message='success') {
    	// $.cookie('emailCodeTimer',1);
    	// setTimeout(function(){
    	// 	$.cookie('emailCodeTimer',0);
    	// },3000)
    }else{

    }

}

// 判断是否已发送验证码
function checkEmailCode(){

}

// 验证输入的验证码是否正确
function verifyEmailCode(obj){
	var myEmailCode = $('#my-email-code').val();
	if (myEmailCode==''||myEmailCode==undefined||myEmailCode==null) {
	  //提示
	  layer.open({
	    content: '请输入您邮箱收到的6位验证码'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	  });
	  return false;
	}

	var userId = Number($('.login-info-name').attr('userId'));
	var form = {
		targetTable:'user',
		targetField:'email_code',
		targetId:userId
	}
	var type = 'get',
		url = 'admin/'+form.targetTable,
		data = form;
	var rs = global_ajax(type,url,data);
    // rs = JSON.parse(rs);
    console.log(rs);

    if (rs.rows[0].email_code==myEmailCode) {
	  //提示
	  layer.open({
	    content: 'success'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	  });

	  updateEmailStatus();
    }else{
	  //提示
	  layer.open({
	    content: 'error'
	    ,skin: 'msg'
	    ,time: 2 //2秒后自动关闭
	  });
    }
}

// 更新邮箱认证状态
function updateEmailStatus () {
	var userId = Number($('.login-info-name').attr('userId'));
	var form = {
		targetTable:'user',
		targetField:'email_status',
		newValue:1,
		targetId:userId
	}
	var type = 'put',
		url = 'admin/'+form.targetTable,
		data = JSON.stringify(form);
	var rs = global_ajax(type,url,data);
    // rs = JSON.parse(rs);
    console.log(rs);
}






