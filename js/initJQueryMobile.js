/**********這個檔案是 JQuery Mobile 的初始化設定 **********/

$(document).bind("mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition="slide";
	$.mobile.defaultDialogTransition="slideup";
	$.mobile.loadingMessage="資料更新中，請稍候...";
	$.mobile.pageLoadErrorMessage="無法載入頁面!";
	$.mobile.loader.prototype.options.text = "請稍候...";
	$.mobile.loader.prototype.options.textVisible = true;
	$.mobile.loader.prototype.options.textonly = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.page.prototype.options.addBackBtn=false;
	$.mobile.page.prototype.options.backBtnText = "上頁";
	$.mobile.page.prototype.options.backBtnTheme = "h";
	$.mobile.page.prototype.options.theme="h";
	$.mobile.page.prototype.options.headerTheme="h";
	$.mobile.page.prototype.options.footerTheme="h";
	$.mobile.page.prototype.options.contentTheme="h";
	$.mobile.listview.prototype.options.theme="h";
	$.mobile.listview.prototype.options.countTheme="h";
	$.mobile.listview.prototype.options.dividerTheme="h";
	$.mobile.listview.prototype.options.filterTheme="h";
	$.mobile.button.prototype.options.theme="h";
	$.mobile.textinput.prototype.options.theme="h";
	$.mobile.checkboxradio.prototype.options.theme="h";
	$.mobile.selectmenu.prototype.options.theme="h";
});
