//var old_back = mui.back;
//mui.back = function(){
//	 old_back();
//	 if(plus.webview.getWebviewById('vehicleList.html')){
//	 	plus.webview.getWebviewById('vehicleList.html').close();
//	 }
//}


var subpage_style = {
	top: immersed + 56 + 'px',
	bottom: '0'
};
	
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var wv_list =plus.webview.create("siteList.html","siteList.html",subpage_style,{type:self.type});
	//通过webview.create创建子窗口
	self.append(wv_list);
	//载入子窗口
});

mui(".mui-bar-nav").on("tap",".right-act",function(){
	mui.openWindow({
		url: "siteAdd.html",
		id: "siteAdd.html",
		show: {
			aniShow: 'slide-in-right',
			duration: 150
		},
		waiting: {
			autoShow: false
		},
		styles: {
			hardwareAccelerated: true
		}
	});
});
