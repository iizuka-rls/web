// JavaScript Document


//�Ǐ]�X�N���[��
var name = "#menu";
var menuYloc = null;
$(document).ready(function(){
	menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
	$(window).scroll(function () { 
		offset = menuYloc+$(document).scrollTop()+"px";
		$(name).animate({top:offset},{duration:500,queue:false});
	});
}); 

//�A�R�[�f�B�I��
$(function(){
 $("#sidebar dd:not(:first)").hide();
  $("#sidebar dt").click(function(){
   $("#sidebar dd:visible").animate({height:"toggle", opacity:"toggle"}, {duration:"fast"});
   //.slideUp("fast");
   $(this).next().animate({height:"toggle", opacity:"toggle"}, {duration:"fast"});
   //.slideDown("fast");
 });
});

