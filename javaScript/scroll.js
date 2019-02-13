// JavaScript Document


//追従スクロール
var name = "#menu";
var menuYloc = null;
$(document).ready(function(){
	menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
	$(window).scroll(function () { 
		offset = menuYloc+$(document).scrollTop()+"px";
		$(name).animate({top:offset},{duration:500,queue:false});
	});
}); 

//アコーディオン
$(function(){
 $("#sidebar dd:not(:first)").hide();
  $("#sidebar dt").click(function(){
   $("#sidebar dd:visible").animate({height:"toggle", opacity:"toggle"}, {duration:"fast"});
   //.slideUp("fast");
   $(this).next().animate({height:"toggle", opacity:"toggle"}, {duration:"fast"});
   //.slideDown("fast");
 });
});

