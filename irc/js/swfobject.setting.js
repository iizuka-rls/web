/**
 *  Setting for swfobject.js
 *  08/11/01 Yuzuru Harada
 */
 
 var j$ = jQuery;

 var galleryParentTag   = "div#photos";
 var galleryXmlDir 	= "img/photos/xml/";
 var galleryXmlFile	= "2008_all";
 var galleryHeight	= "100%";
 var galleryWidth	= "100%";
 var galleryClass	= ".viewer";
 var galleryBgColor	= "#333333";
 var galleryTitle	= "div#photos_title h3 span";
 
function swfObject(){

	j$(galleryParentTag).html("<embed class='viewer' type='application/x-shockwave-flash' src='swf/viewer.swf' flashvars='xmlURL=img/photos/xml/photos_gallery" + galleryXmlFile + ".xml' />");

/*
	j$(galleryParentTag).html("<embed src='swf/viewer.swf' type='application/x-shockwave-flash' />").children().addClass('viewer');
	j$(galleryClass).attr("flashvars", 'xmlURL=' + galleryXmlDir + 'photos_gallery' + galleryXmlFile + '.xml');
*/

	j$(galleryClass).attr("height",galleryHeight);
	j$(galleryClass).attr("width",galleryWidth);
	j$(galleryClass).attr("bgcolor",galleryBgColor);
}

j$(galleryParentTag).ready(function(){
	swfObject();
	j$(galleryTitle).html("2008 : All");
});