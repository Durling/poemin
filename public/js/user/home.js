
if (loginInfo==undefined||loginInfo==null||loginInfo=='') {
	window.location.href='login';
}else{
	get_user_detail();
}


function get_user_detail () {
	var form = {
		targetTable:'user',
		targetField:'*',
		targetMatch:'id',
		targetExtra:'',
		targetId:loginInfo.id
	}
	// console.log(form);
	var type = 'get',
		url = 'admin/'+form.targetTable,
		data = form;
    var rs = global_ajax(type,url,data);
    // console.log(rs);
    vm_all.user_info = rs.rows;
    vm_all.qiniuDoname = rs.qiniuDoname;
}