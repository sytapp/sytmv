function getpms(name) {
  var url=window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var code = getpms("code");
setTimeout(function() {
	var kf = "https://kefu.4yt.app/kefu/";
	var html = `<div style="margin:auto;width:90%;height:100vh;text-align:center;margin-top:50px">
		   加载失败<br/>请联系在线客服获取最新网址<br/><br/><a href="${kf}" style="font-size: 16px;">联系在线客服</a>
		   </div>`;
	//document.getElementById("j").innerHTML=html;


}, 12000);
var url_list = [
	//"https://d3nxqnh03njbj5.cloudfront.net",
	"https://d4a9gdpp1e7br.cloudfront.net",
	"https://do725jqjs6uja.cloudfront.net",
	"https://d2jfzbi92gci6q.cloudfront.net",
	//"https://d23fnco7yfqnmu.cloudfront.net",
	//"https://d3m6715ibhb0zw.cloudfront.net",
	"https://d28hlwq7c9iwpg.cloudfront.net",
	"https://d2rdcqtbzks2bq.cloudfront.net",
	"https://d3j9bb4hafi9k8.cloudfront.net",
	"https://d3tshg98hc8w5e.cloudfront.net",
	//第11
	"https://d35qn5vm03u3mc.cloudfront.net",
	"https://d2k1b17vw75tns.cloudfront.net",
	"https://d3ce9b72ew4xt4.cloudfront.net",
	"https://dze5wq4tcqg2e.cloudfront.net",
	"https://d3ku2zlel6q375.cloudfront.net",
	"https://d1q9cec4viree8.cloudfront.net",
	"https://d1fpm5xt14dto4.cloudfront.net",
	"https://d3dxmdm2088jhm.cloudfront.net",
	"https://d1tzgqestmr9fw.cloudfront.net",
	"https://d29wy6m2wen8up.cloudfront.net",
	
];

function is_weixn_qq() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return "weixin";
	} else if (ua.match(/QQ/i) == "qq") {
		return "QQ";
	}
	return false;
}

function testUrlSpeed(url, callback) {
	const startTime = new Date();
	const image = new Image();

	image.onload = function() {
		const endTime = new Date();
		const duration = endTime - startTime;
		callback(null, duration);
		image.onload = null; // 解绑事件，避免内存泄漏
	};

	image.onerror = function() {
		callback(new Error('Failed to load the image'), null);
		image.onerror = null; // 解绑事件，避免内存泄漏
	};

	image.src = url;
}
var isok = false;
url_list.forEach(function(item, index) {
	if (isok == false) {
		var weburl = item + "/favicon.ico";
		testUrlSpeed(weburl, (err, duration) => {
			if (err) {
				console.error(err);
			} else {
				console.log(`${weburl} 打开速度: ${duration} 毫秒`);
				isok = true;
				if (code == null) code = "";
				location.href = item + "/" + code;

			}
		});
	}

});