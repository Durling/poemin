console.log(rows,act_status,999);


function submit_poem_content(obj) {
	var poemId = $(obj).attr('poemId')||'',
		act_status = $(obj).attr('act-status'),
		$a = $(obj).closest('.add-new-poem-div'),
		title = $a.find('.poem-title').val(),
		authorName = $a.find('.poem-penName').val(),
		content = $a.find('.poem-content').val()
		form = {
			poemId:poemId,
			title:title,
			authorName:authorName,
			content:content
		}
		// console.log(form);
	
	if (poemId>0 && act_status==1) { // alert('提交编辑');
		var type = 'put',
			url = 'admin/poems/'+poemId,
			data = form;
			data = JSON.stringify(form);
		var result = global_ajax(type,url,data);
		console.log(result);
		layer.msg(result.message);
		if(result.message=='success'){
			window.location.href='poems?id='+poemId;
		}
	}else if(act_status==2){ // alert('提交新增');
		var type = 'post',
			url = 'admin/poems',
			data = JSON.stringify(form);
		var result = global_ajax(type,url,data);
		console.log(result);
		layer.msg(result.message);
		if(result.message=='success'){
			window.location.href='poems?id='+result.resinsert.insertId;
		}
	}else if(act_status==3){ // alert('提交纠错')
		layer.msg('提交纠错开发中');
	}	
};


