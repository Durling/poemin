



function sendForm(){
    var fd = new FormData();
    fd.append("file",$('#file')[0].files[0]);
    fd.append("name",$('#name').val());
    $.ajax({
        type:'post',
        dataType:'text',
        processData: false,  // 告诉JSLite不要去处理发送的数据
        contentType: false,   // 告诉JSLite不要去设置Content-Type请求头
        data:fd,
        url:'qiniu-upload/file-upload',
        success:function(data){
           console.log('success:',data)
        },
        error:function(d){
           console.log('error:',d)
        }
    })
}