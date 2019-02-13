/**
 *  Setting for jquery-ahover.js
 *  08/11/01 Yuzuru Harada
 */
jQuery(function($){
//	$('div#header_navi ul li').ahover();	
	$('div#header_navi ul li').ahover({
		moveSpeed: 300, 
		hoverEffect: function(){
	        $(this)
	            .animate({opacity: 0.5}, 750)
	            .animate({opacity: 1.0}, 750)
	            .dequeue();
	        $(this).queue(arguments.callee);
	    	},
		toggleSpeed: 300,
		toggleEffect: 'height'
	});
	/*
	$('div#side_bar ul li').ahover({
		moveSpeed: 100, 
		toggleSpeed: 100,
		toggleEffect: 'width'
	});
	*/
});
