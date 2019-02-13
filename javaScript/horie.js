// --------------------------------------------------------------------
// JavaScript document

//  -- load         (news & topics)
//  -- scroll       (Photo)
//  -- botton jump  (News & Topics, About Us, Phots)
//  -- slide effect (Research)
//  -- cheat coad   ()
//  -- shortcut key ()

// Created by Ryosuke Horie,  2010-08-20
// Modified by Jun Takahashi, 2011-04-03
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// load (news & topics)
// --------------------------------------------------------------------
$(document).ready(function (){
  $("#topic_content").load("./introduction/newsAndTopics.html");
});


// --------------------------------------------------------------------
// scroll (Photos)
// --------------------------------------------------------------------
$(function() {
  // initialize scrollable 
  $("div.scrollable").scrollable({
    // items are auto-scrolled in 4 secnod interval
    interval: 2500,
    //interval: 250,
    // when last item is encountered go back to first item
    loop: true, 
    // make animation a little slower than the default
    speed: 800
  });	
});


// --------------------------------------------------------------------
// botton jump (News & Topics, About Us, Phots)
// --------------------------------------------------------------------
$(document).ready(function(){
  $(".button").hover(function(){
    $(".button img")
    // first jump 
    .animate({top:"-10px"}, 200).animate({top:"-4px"}, 200)
    // second jump
    .animate({top:"-7px"}, 100).animate({top:"-4px"}, 100)
    // the last jump
    .animate({top:"-6px"}, 100).animate({top:"-4px"}, 100);
  });
});

$(document).ready(function(){
  $("#topic").hover(function(){
    $(".button img")
    // first jump 
    .animate({top:"-10px"}, 200).animate({top:"-4px"}, 200)
    // second jump
    .animate({top:"-7px"}, 100).animate({top:"-4px"}, 100)
    // the last jump
    .animate({top:"-6px"}, 100).animate({top:"-4px"}, 100);
  });
});

$(document).ready(function(){
  $("#Aboutus_content").hover(function(){
    $(".button2 img")
    // first jump 
    .animate({top:"-10px"}, 200).animate({top:"-4px"}, 200)
    // second jump
    .animate({top:"-7px"}, 100).animate({top:"-4px"}, 100)
    // the last jump
    .animate({top:"-6px"}, 100).animate({top:"-4px"}, 100);
  });
});

$(document).ready(function(){
  $(".button2").hover(function(){
    $(".button2 img")
    // first jump 
    .animate({top:"-10px"}, 200).animate({top:"-4px"}, 200)
    // second jump
    .animate({top:"-7px"}, 100).animate({top:"-4px"}, 100)
    // the last jump
    .animate({top:"-6px"}, 100).animate({top:"-4px"}, 100);
  });
});


$(document).ready(function(){
  $(".button3").hover(function(){
    $(".button3 img")
    // first jump 
    .animate({top:"-10px"}, 200).animate({top:"-4px"}, 200)
    // second jump
    .animate({top:"-7px"}, 100).animate({top:"-4px"}, 100)
    // the last jump
    .animate({top:"-6px"}, 100).animate({top:"-4px"}, 100);
  });
});

$(document).ready(function(){
  $("#Photo_content").hover(function(){
    $(".button3 img")
    // first jump 
    .animate({top:"-10px"}, 200).animate({top:"-4px"}, 200)
    // second jump
    .animate({top:"-7px"}, 100).animate({top:"-4px"}, 100)
    // the last jump
    .animate({top:"-6px"}, 100).animate({top:"-4px"}, 100);
  });
});


// --------------------------------------------------------------------
// slide effect ()
// --------------------------------------------------------------------
$(document).ready(function(){
  // vertical sliding
  $('.boxgrid.slidedown').hover(function(){
    $(".cover",this).stop().animate({top:'-260px'},{queue:false,duration:300});
  },function(){
    $(".cover",this).stop().animate({top:'0px'},{queue:false,duration:300});
  });

  // horizontal sliding
  $('.boxgrid.slideright').hover(function(){
    $(".cover",this).stop().animate({left:'325px'},{queue:false,duration:300});
  },function(){
    $(".cover",this).stop().animate({left:'0px'},{queue:false,duration:300});
  });

  // diagnal sliding
  $('.boxgrid.thecombo').hover(function(){
    $(".cover",this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});
  },function(){
    $(".cover",this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});
  });

  // partial sliding (only show some of background)
  $('.boxgrid.peek').hover(function(){
    $(".cover",this).stop().animate({top:'90px'},{queue:false,duration:160});
  },function(){
    $(".cover",this).stop().animate({top:'0px'},{queue:false,duration:160});
  });

  // full caption sliding (hidden to visible)
  $('.boxgrid.captionfull').hover(function(){
    $(".cover",this).stop().animate({top:'160px'},{queue:false,duration:160});
  }, function(){
    $(".cover",this).stop().animate({top:'260px'},{queue:false,duration:160});
  });

  // caption sliding (Research)
  $('.boxgrid.caption').hover(function(){
    $(".cover",this).stop().animate({top:'0px'},{queue:false,duration:600});
  }, function(){
    $(".cover",this).stop().animate({top:'260px'},{queue:false,duration:600});
  });

});


// --------------------------------------------------------------------
// cheat coad ()
// --------------------------------------------------------------------
$(function(){
  $(document).cheatCode({ 
    code : '65,38,40,37,39', // コードを調べてカンマ区切りで記述
    activated : function(){ 
      var d=document; var s=d.createElement("script"); s.charset="UTF-8"; s.src="http://tech.nitoyon.com/meltdown/meltdown.js?"+(new Date()).getTime(); d.body.appendChild(s);
    }
  });
});


// --------------------------------------------------------------------
// shortcut key ()
// --------------------------------------------------------------------
$(document).shortkeys({
  'G': function () {history.forward();}, 
  'B': function () {history.back();}
});


