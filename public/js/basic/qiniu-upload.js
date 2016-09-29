var nowDateTimeStr = new Date().format("yyyyMMddhhmmss");
var randomStr = Math.round(Math.random() * nowDateTimeStr);
var randomOnce =  Math.random().toString(36).substr(20).toUpperCase();
var uptimestr = nowDateTimeStr+'_'+randomOnce+'_'+randomStr;
console.log(uptimestr);


function startUpload(){
    sendForm();
}

function sendForm(){
    // layer.msg('111');
    var fd = new FormData();
    fd.append("upfiles",$('#file')[0].files[0]);
    fd.append("name",$('#name').val());
    fd.append("nowDateTimeStr",nowDateTimeStr);
    fd.append("randomOnce",randomOnce);
    layer.msg(JSON.stringify(fd));
    // layer.msg('112');
    // layer.msg(fd.get('upfiles'));
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

    layer.msg('113');
    // 
    // $('.img-preview').attr('src',qiniuDoname+rs.key+'?imageView2/2/w/600');
    // $('.img-preview').attr('src',qiniuDoname+rs.key+'?imageMogr2/gravity/Center/crop/600x600');
    if (rs.message=='success') {
    layer.msg('114');

        layer.msg(rs.message);
    }else{
        layer.msg('err');
    }

}

