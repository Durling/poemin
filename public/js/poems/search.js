
// 定义vue范围及监听的变量
var vm_all = new Vue({
  el: '#select_vue_all',
  data: {
    search_poems: [],
  },
  methods: {

  }
})


function search_by_title(obj) {
	var title = $(obj).prev('input').val();
	if (title=='') {
		$('.search_result_tips').text('');
		vm_all.search_poems = [];
		return false;
	}
	console.log(title);
	var type = 'get',
		url = 'admin/poems',
		data = {
			title:title
		};
	var result = global_ajax(type,url,data);
	console.log(result);
	vm_all.search_poems = result.rows;
	if (result.rows.length==0) {
		$('.search_result_tips').text('未搜到你想要的结果');
	}else if(result.rows.length>0){
		$('.search_result_tips').text('搜索到'+result.rows.length+'条结果:');
	}
};


