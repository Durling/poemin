
var login_tips = [
	'账号或密码不能为空', //0
	'重新登录', //1
	'两次输入确认密码不同', //2
	'重新提交', //3
	'恭喜你注册成功', //4
	'注册失败' //5
],
	login_status = [
	'success',
	'error'
];

function toLogin(obj) {
	var status = $(obj).attr('status');
	// console.log(status);
	if (status==0) { //注册
		var email = $(obj).closest('.login-div').find('input[wayName="email"]').val()||'',
			phone = $(obj).closest('.login-div').find('input[wayName="phone"]').val()||'',
			userName = $(obj).closest('.login-div').find('input[wayName="userName"]').val()||'',
			password = $(obj).closest('.login-div').find('input[wayName="password"]').val(),
			repassword = $(obj).closest('.login-div').find('input[wayName="repassword"]').val(),
			form = {
				email:email,
				phone:phone,
				userName:userName,
				password:$.md5(password),
				repassword:$.md5(repassword)
			};
		if ((email=='' && phone=='' && userName=='') || password=='') {
			$(obj).attr('disabled','disabled').text(login_tips[0]).addClass('animated tada');
			input_err(3);
			return false;
		}else if(password!=repassword) {
			$(obj).attr('disabled','disabled').text(login_tips[2]).addClass('animated tada');
			input_err(3);
			return false;
		}else{
			// console.log(form);
			input_ok(form);
		}

	}else if(status==1){ //登录
		var email = $(obj).closest('.login-div').find('input[wayName="email"]').val()||'',
			phone = $(obj).closest('.login-div').find('input[wayName="phone"]').val()||'',
			userName = $(obj).closest('.login-div').find('input[wayName="userName"]').val()||'',
			password = $(obj).closest('.login-div').find('input[wayName="password"]').val(),
			form = {
				email:email,
				phone:phone,
				userName:userName,
				password:$.md5(password)
			};
		if ((email=='' && phone=='' && userName=='') || password=='') {
			$(obj).attr('disabled','disabled').text(login_tips[0]).addClass('animated tada');
			input_err(1);
			return false;
		}else{
			console.log(form);
			input_ok(form);
		}
	}

	// 错误处理
	function input_err(index){
		$(obj).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(obj).removeClass('animated tada');
		});
		setTimeout(function(){
			$(obj).removeAttr('disabled').text(login_tips[index]);
		},2000);
	}

	// 正确处理
	function input_ok(form){
		if (status==0) { //注册
			var type = 'post',
				url = 'admin/login',
				data = JSON.stringify(form);
			var result = global_ajax(type,url,data);
			// console.log(result);
			login_success(result);
		}else if(status==1){ //登录
			var type = 'get',
				url = 'admin/login',
				data = form;
			var result = global_ajax(type,url,data);
			console.log(result);
			var user = result.rows[0];
			if (user.password==form.password) {
				layer.msg('success');
			}else{
				layer.msg('error');
			}
		}
	}

	// 成功处理
	function login_success(result){
		if(result.message==login_status[0]){
			// layer.msg(login_tips[2]);
			$(obj).text(login_tips[4]).addClass('animated pulse');
			$(obj).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(obj).removeClass('animated pulse');
			});
			setTimeout(function(){
				window.location.href='poems';
			},1000);
		}else{
			$(obj).text(msg_tips[5]);
			setTimeout(function(){
				$(obj).removeAttr('disabled').text(msg_tips[3]);
			},2000);
		}
	}


}






$('.login-0-div .nav-tabs').on('click','li',function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	$(this).closest('.login-div').find('.mul-way').attr({
		'placeholder':$(this).attr('wayText'),
		'wayName':$(this).attr('wayName')
	});
})
$('.login-1-div .nav-tabs').on('click','li',function(){
	$(this).addClass('active').siblings('li').removeClass('active');
	$(this).closest('.login-div').find('.mul-way').attr({
		'placeholder':$(this).attr('wayText'),
		'wayName':$(this).attr('wayName')
	});
})



