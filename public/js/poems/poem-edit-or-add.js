console.log(rows,act_status,999);


function submit_poem_content(obj) {
	var $a = $(obj).closest('.add-new-poem-div'),
		title = $a.find('.poem-title').val(),
		penName = $a.find('.poem-penName').val(),
		content = $a.find('.poem-content').val(),
		form = {
			title:title,
			penName:penName,
			content:content
		}
	console.log(form);

	var poemId = $(obj).attr('poemId');
	if (poemId>0) {
		alert('提交编辑');
	}else{
		alert('提交新增');
	}
};