(function($) {
  var defaults = { 
    direction: "+",
    speed: 100
  }
  $.fn.auto_rotate = function(options){
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
  function increment_x_deg(){ 
    var deg_x = 0
    return function(n){return deg_x+=n;}
  }
  function increment_y_deg(){ 
    var deg_y = 0
    return function(n){return deg_y+=n;}
  }
  var degs = increment_deg();
  var degs_x = increment_x_deg();
  var degs_y = increment_y_deg();

  function transition(obj, options){
    obj.css({
      "transition": "transform "+100/options.speed+"s",
      "-webkit-transition": "-webkit-transform "+100/options.speed+"s",
      "-moz-transition": "-moz-transform "+100/options.speed+"s",
      "-o-transition": "-o-transform "+100/options.speed+"s"
    });
  }
  $.fn.rotate = function(options){
    var options = $.extend({}, defaults, options);
    transition($(this), options);
    $(this).css("transform", "rotate("+degs(options.deg)+"deg)");
  }
  $.fn.rotate_x = function(options){
    var options = $.extend({}, defaults, options);
    transition($(this), options);
    $(this).css("transform", "rotateX("+degs_x(options.deg)+"deg)");
  }
  $.fn.rotate_y = function(options){
    var options = $.extend({}, defaults, options);
    transition($(this), options);
    $(this).css("transform", "rotateY("+degs_y(options.deg)+"deg)");
  }
})(jQuery);
