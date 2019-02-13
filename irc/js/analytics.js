/*
 * 08/11/29 Yuzuru Harada
 * Google Analytics Tracking Code
 */

var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

function startAnalytics() {
	var pageTracker = _gat._getTracker("UA-5005403-2");
	pageTracker._initData();
	pageTracker._trackPageview();
}

if (window.addEventListener) {
	window.addEventListener('load', startAnalytics, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', startAnalytics);
}
