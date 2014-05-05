(function($) {
  var defaults = { 
    direction: "+",
    speed: 100
  }
  $.fn.ani_scroll = function(options){
    var options = $.extend({}, defaults, options);
    if (options.direction == "-"){
      $(this).addClass("rotate_revert");
    }
    else{
      $(this).addClass("rotate");
    }
    $(this).toggleClass("rotate_start");
    $(this).css({
      "animation-duration": 100/options.speed+"s",
      "-webkit-animation-duration": 100/options.speed+"s"
    })
  }
})(jQuery);

(function($) {
  var defaults = { 
    deg: 180,
    speed: 100
  }

  function increment_deg(){ 
    var deg = 0
    return function(n){return deg+=n;}
  }
  var degs = increment_deg();
  $.fn.rotate_y = function(options){
    var options = $.extend({}, defaults, options);
    $(this).css({
      "transition": "transform "+100/options.speed+"s",
      "-webkit-transition": "-webkit-transform "+100/options.speed+"s",
      "-moz-transition": "-moz-transform "+100/options.speed+"s",
      "-o-transition": "-o-transform "+100/options.speed+"s"
    });
    $(this).css("transform", "rotateY("+degs(options.deg)+"deg)");
  }
})(jQuery)
