/*
 * 08/11/29 Yuzuru Harada Original
 * Hover Image Change
 */
 var j$ = jQuery; 
 j$(function(){
 	/* Groups */  
	j$("img#group01").hover(function(){
		j$(this).attr("src","img/teams_sidebar_text01_hover.png");
		IEPNGFIX.fix(this);
	},function(){
		j$(this).attr("src", "img/teams_sidebar_text01.png");
		IEPNGFIX.fix(this);
	});
	j$("img#group02").hover(function(){
		j$(this).attr("src","img/teams_sidebar_text02_hover.png");
		IEPNGFIX.fix(this);
	},function(){
		j$(this).attr("src", "img/teams_sidebar_text02.png");
		IEPNGFIX.fix(this);
	});
	/* Teams */
	j$(".teams li").hover(function(){
		j$(this).css("background-color", "#fb0");
	},function(){
		j$(this).css("background-color", "#fff");
	});
	j$(".teams li").hover(function(){
		j$(this).css("background-color", "#fb0");
	},function(){
		j$(this).css("background-color", "#fff");
	});
	/* btns */
	j$("img.btn_robot").hover(function(){
		j$(this).attr("src", "img/teams_btns_robot_ovr.png");
		IEPNGFIX.fix(this);
	},function(){
		j$(this).attr("src", "img/teams_btns_robot_out.png");
		IEPNGFIX.fix(this);
	});

	j$(".btn_program").hover(function(){
		j$(this).attr("src", "img/teams_btns_program_ovr.png");
		IEPNGFIX.fix(this);
	},function(){
		j$(this).attr("src", "img/teams_btns_program_out.png");
		IEPNGFIX.fix(this);
	});

});

/*
 * 08/11/29 Yuzuru Harada Original
 * Content Change
 */

var swParams = {opacity: 'show', 'left': '0px'};
var hdParams = {opacity: 'hide', 'left': '-100%'};
var zoomParam ={scaleImg: true, closeOnClick: true};

j$("#scroll_window").ready(function(){
	
	j$("ul.teams li a").click(function(){
		j$("ul#scroll_window li").animate(hdParams, "normal");
		j$("a#file_program").attr("href", "#");
		return false;
	});
	j$("#menu01").click(function(){
		j$("li#team01").animate(swParams, "slow"); 
		j$("a#img_robot").attr("href", "#team_robot_01").fancyZoom(zoomParam);
		j$("a#file_program").attr("href", "programs/01_revo.zip");
		return false;
	});
	j$("#menu02").click(function(){
		j$("li#team02").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_02").fancyZoom(zoomParam);
		j$("a#file_program").attr("href", "programs/02_bucchi.zip");
		return false;
	});
	j$("#menu03").click(function(){
		j$("li#team03").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_03").fancyZoom(zoomParam);
		j$("a#img_robot").attr("href", "#team_robot_03").fancyZoom(zoomParam);
		j$("a#file_program").attr("href", "programs/03_bridge.zip");
		return false;
	});
	j$("#menu04").click(function(){
		j$("li#team04").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_04").fancyZoom(zoomParam);
		j$("a#file_program").attr("href", "programs/04_o2.zip");
		return false;
	});
	j$("#menu05").click(function(){
		j$("li#team05").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_05").fancyZoom(zoomParam);
		j$("a#file_program").attr("href", "programs/05_h-f.zip");
		return false;
	});
	j$("#menu06").click(function(){
		j$("li#team06").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_06").fancyZoom(zoomParam);
		j$("a#file_program").attr("href", "programs/06_legorian.zip");
		return false;
	});
	j$("#menu07").click(function(){
		j$("li#team07").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_07").fancyZoom(zoomParam);
		return false;
	});
	j$("#menu08").click(function(){
		j$("li#team08").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_08").fancyZoom(zoomParam);
		return false;
	});
	j$("#menu09").click(function(){
		j$("li#team09").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_09").fancyZoom(zoomParam);
		return false;
	});
	j$("#menu10").click(function(){
		j$("li#team10").animate(swParams, "slow");
		j$("a#img_robot").attr("href", "#team_robot_10").fancyZoom(zoomParam);
		return false;
	});
});

/* Initialize */
j$('#scroll_window').ready(function(){
	j$("ul#scroll_window li").css({display: "none", 'left': "-100%"});
	j$("li#team01").animate(swParams, "slow");
	j$("a#img_robot").attr("href", "#team_robot_01").fancyZoom(zoomParam);
});

