var nowDateTimeStr = new Date().format("yyyyMMddhhmmss");
var randomStr = Math.round(Math.random() * nowDateTimeStr);
var randomOnce =  Math.random().toString(36).substr(20).toUpperCase();
var uptimestr = nowDateTimeStr+'_'+randomOnce+'_'+randomStr;
console.log(uptimestr);

function sendForm(){
    var fd = new FormData();
    fd.append("upfiles",$('#file')[0].files[0]);
    fd.append("name",$('#name').val());
    fd.append("nowDateTimeStr",nowDateTimeStr);
    fd.append("randomOnce",randomOnce);

    console.log(fd.get('upfiles'));
    if (fd.get('upfiles')==undefined || fd.get('upfiles')=='undefined' || fd.get('upfiles')=='') {
        return false;
    }

    $.ajax({
        type:'post',
        dataType:'text',
        data:fd,
        async: false,
        cache: false,
        processData: false,  // 告诉JSLite不要去处理发送的数据
        contentType: false,   // 告诉JSLite不要去设置Content-Type请求头
        url:'qiniu-upload/file-upload',
        success:function(data){
           console.log('success:',data)
        },
        error:function(err){
           console.log('error:',err)
        }
    })
}