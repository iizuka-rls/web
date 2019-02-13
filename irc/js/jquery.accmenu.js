/*
 *  Accordion Menu
 *  08/11/27 Yuzuru Harada
 *  reference : http://triplexxx.jp/archives/150
 */
 var j$ = jQuery; 
 j$(function(){ 
 	j$("ul.content_text").each(function(){ 
 		j$("li > a", this).each(function(index){ 
			var $this = j$(this); 
			//if(index >= 1) $this.next().hide();
			$this.next().hide();
			if(index == 0) $this.next()
			.animate({height:"toggle", opacity:"toggle"}, "normal");

			$this.click(function(){
				/*
				 * j$(this).next().toggle().parent().siblings()
				 * .children("ul:visible").hide(); 
				*/
				var params = {height:"toggle", opacity:"toggle"};
				j$(this).next().animate(params, "normal").parent().siblings()
				.children("ul:visible").animate(params, "normal"); 
 				return false;
			});
			
		});
	});
});