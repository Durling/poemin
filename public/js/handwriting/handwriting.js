
var poemId = queryString.poemId;
console.log(poemId);




function delFile (obj) {
	var fileId = $(obj).closest('h4').attr('fileId');
	console.log(fileId);
}


// alert('112233');



function changeLikeStatus(obj){
	$(obj).find('.icon').toggleClass('icon-heart-empty icon-heart animated bounceIn');
	if ($(obj).attr('status')==0) {
		$(obj).attr('status',1);
		$(obj).find('.likeNum').text(Number($(obj).find('.likeNum').text())+1);
	}else if($(obj).attr('status')==1){
		$(obj).attr('status',0);
		$(obj).find('.likeNum').text(Number($(obj).find('.likeNum').text())-1);
	}
}