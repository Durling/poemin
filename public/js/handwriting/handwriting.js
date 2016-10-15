
var poemId = queryString.poemId;
console.log(poemId);




function delFile (obj) {
	var fileId = $(obj).closest('h4').attr('fileId');
	console.log(fileId);
}


// alert('112233');


// 点赞更新数据库
function changeLikeStatus(obj){
	var targetTable = 'handwriting_file',
		targetField = 'like_num',
		newValue = 0,
		targetId = Number($(obj).closest('.img-each').attr('fileId'));

	$(obj).find('.icon').toggleClass('icon-heart-empty icon-heart animated bounceIn');
	if ($(obj).attr('status')==0) {
		$(obj).attr('status',1);
		newValue = Number($(obj).find('.likeNum').text())+1;
	}else if($(obj).attr('status')==1){
		$(obj).attr('status',0);
		newValue = Number($(obj).find('.likeNum').text())-1;
	}
	$(obj).find('.likeNum').text(newValue);
	var form = {
		targetTable:targetTable,
		targetField:targetField,
		newValue:newValue,
		targetId:targetId
	}
	// console.log(form);
	updata_mysql(form);
}

function updata_mysql(form){
	var type = 'put',
		url = 'admin/'+form.targetTable,
		data = JSON.stringify(form);
    var rs = global_ajax(type,url,data);
    console.log(rs);
}

