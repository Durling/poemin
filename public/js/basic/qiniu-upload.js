var nowDateTimeStr = new Date().format("yyyyMMddhhmmss");
var randomStr = Math.round(Math.random() * nowDateTimeStr);
var randomOnce =  Math.random().toString(36).substr(20).toUpperCase();
var uptimestr = nowDateTimeStr+'_'+randomOnce+'_'+randomStr;
// console.log(uptimestr);

function click_prev_input(obj){    
    $(obj).prev('input').click();
}
function add_img(obj){
    $(obj).parent().find('.upload-file').click();
}

function uploadMyHaddwriting(obj){
    //loading带文字
    layer.open({
        type: 2
        ,content: '上传中'
    });
    
    var upload_length =  $('#qiniu_upload_file')[0].files.length;
    // console.log('upload_length:',upload_length);

    if(upload_length >5 ){
        var tips = '上传的文件数量超过5个了！请重新选择！';
        //信息框
        layer.open({
            content: tips
            ,btn: '我知道了'
        });   
        return false;
    }else{
        for(var i=0;i<upload_length;i++){
            if($('#qiniu_upload_file')[0].files[i].size > 2048*2048){
                var tips = $('#qiniu_upload_file')[0].files[i].name + "这个文件大于2M！请重新选择！";
                //信息框
                layer.open({
                    content: tips
                    ,btn: '我知道了'
                });   
                return false;
            }
        }
    }


    var file_type=0,type_name;
    // file_type 0 全部 
    // file_type 1 图片 
    // file_type 2 视频 
    // file_type 3 word 
    // file_type 4 excel 
    // file_type 5 pdf
    for (var i = 0; i < upload_length; i++) {

        type_name = String($('#qiniu_upload_file')[0].files[i].type);
        // console.log(type_name,type_name.indexOf('image'));
        if (type_name.indexOf('image')>=0) {
            file_type=1;
        }else if(type_name.indexOf('video')>=0){
            file_type=2
        }
        // return false;

        var fd = new FormData();
        fd.append("upfiles",$('#qiniu_upload_file')[0].files[i]);
        fd.append("name",$('#name').val());
        fd.append("type_name",type_name);
        fd.append("file_type",'TYPE'+file_type);
        fd.append("file_index",'INDEX'+i);
        fd.append("nowDateTimeStr",nowDateTimeStr);
        // if (fd.get('upfiles')==undefined || fd.get('upfiles')=='undefined' || fd.get('upfiles')=='') {
        //     // return false;
        // }
        
        var type = 'post',
            url = 'qiniu-upload/file-upload?poemId='+poemId,
            data = fd;
        // layer.msg(url);
        var rs = global_ajax2(type,url,data);
        rs = JSON.parse(rs);
        // console.log(rs);
        // layer.msg(rs.ret.key);

        // $('.img-preview').attr('src',qiniuDoname+rs.key+'?imageView2/2/w/600');
        // $('.img-preview').attr('src',qiniuDoname+rs.key+'?imageMogr2/gravity/Center/crop/600x600');
        if (rs.message=='success') {            
            setTimeout(function(){
                window.location.reload();
            },1000)
        }else{
            var tips = '上传错误';
            layer.msg(tips);
            //信息框
            layer.open({
                content: tips
                ,btn: '我知道了'
            });  
        }

    };

}

