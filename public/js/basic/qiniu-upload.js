var nowDateTimeStr = new Date().format("yyyyMMddhhmmss");
var randomStr = Math.round(Math.random() * nowDateTimeStr);
var randomOnce =  Math.random().toString(36).substr(20).toUpperCase();
var uptimestr = nowDateTimeStr+'_'+randomOnce+'_'+randomStr;
console.log(uptimestr);

function startAutoUpload(){
    uploadMyHaddwriting();
}

function uploadMyHaddwriting(){
    var uploadType = $('#uploadType').val();
    console.log('uploadType:',uploadType);

    var upload_length =  $('#qiniu_upload_file')[0].files.length;
    console.log('upload_length:',upload_length);

// return false;
// 

if(upload_length >5 ){
    layer.msg("上传的文件数量超过5个了！请重新选择！");    
        return false;

}else{
    for(var i=0;i<upload_length;i++){
        if($('#qiniu_upload_file')[0].files[i].size > 1024*1024){
            layer.msg('"'+$('#qiniu_upload_file')[0].files[i].name + "这个文件大于1M！请重新选择！");
            return false;
        }
    }
}



for (var i = 0; i < upload_length; i++) {
    // layer.msg('111');
    var fd = new FormData();
    fd.append("upfiles",$('#qiniu_upload_file')[0].files[i]);
    fd.append("name",$('#name').val());
    fd.append("index",'INDEX'+i);
    fd.append("uploadType",'TYPE'+uploadType);
    fd.append("nowDateTimeStr",nowDateTimeStr);
    if (fd.get('upfiles')==undefined || fd.get('upfiles')=='undefined' || fd.get('upfiles')=='') {
        return false;
    }
    var type = 'post',
        url = 'qiniu-upload/file-upload?poemId='+poemId,
        data = fd;
    var rs = global_ajax2(type,url,data);
    rs = JSON.parse(rs);
    console.log(rs);
    layer.msg(rs.ret.key);

    // 
    // $('.img-preview').attr('src',qiniuDoname+rs.key+'?imageView2/2/w/600');
    // $('.img-preview').attr('src',qiniuDoname+rs.key+'?imageMogr2/gravity/Center/crop/600x600');
    if (rs.message=='success') {
    // layer.msg('114');

        layer.msg(rs.message);
    }else{
        layer.msg('err');
    }


};



}

