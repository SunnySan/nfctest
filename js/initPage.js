/**********這個檔案是頁面 header/footer的初始化設定 **********/

var i = 0;
$(document).find("div[data-role='page']").each(function(){
	var pageid="";
	var sEval = "";
	
	pageid=$(this).attr('id');

	//設定navbar的高亮項目
	sEval = "hightlightNavbarItem(" + i + ");";
	$('#' + pageid).on('pageshow', function () {
		//eval(sEval);	//將頁面上方navbar中的某個項目設為已選取(active)
	});
	i++;
});

