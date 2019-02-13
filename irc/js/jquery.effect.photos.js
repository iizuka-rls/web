/*
 * 08/11/29 Yuzuru Harada Original
 * Hover Image Change
 */
 var j$ = jQuery; 
 j$(function(){
 	/* Year */  
	j$("span.year").hover(function(){
		j$(this).css("color", "#fb0");
	},function(){
		j$(this).css("color", "#fff");
	});
	/* Assortment */
	j$("ul.assortment li").hover(function(){
		j$(this).css("background-color", "#fb0");
	},function(){
		j$(this).css("background-color", "#fff");
	});

	j$("ul.assortment li").hover(function(){
		j$(this).css("background-color", "#fb0");
	},function(){
		j$(this).css("background-color", "#fff");
	});
});

 /* Switch xml file for swf */
 j$(function(){

	j$("#2008pre").click(function(){
		j$(galleryTitle).html("2008 : Preparation days");
		galleryXmlFile = "2008_pre";
		swfObject();
		return false;
	});
	j$("#2008cur").click(function(){
		j$(galleryTitle).html("2008 : Current day");
		galleryXmlFile = "2008_cur";
		swfObject();
		return false;
	});
	j$("#2008all").click(function(){
		j$(galleryTitle).html("2008 : All");
		galleryXmlFile = "2008_all";
		swfObject();
		return false;
	});
	j$("#2007pre").click(function(){
		j$(galleryTitle).html("2007 : Preparation days");
		galleryXmlFile = "2007_pre";
		swfObject();
		return false;
	});
	j$("#2007cur").click(function(){
		j$(galleryTitle).html("2007 : Current day");
		galleryXmlFile = "2007_cur";
		swfObject();
		return false;
	});
	j$("#2007all").click(function(){
		j$(galleryTitle).html("2007 : All");
		galleryXmlFile = "2007_all";
		swfObject();
		return false;
	});
 });