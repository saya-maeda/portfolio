
$(function(){

   $('a[href^="#"]').click(function() {


      var speed = 500;
      var offset = -160;


      var anchor = $(this).attr("href");

      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top + offset;

      $('body,html').animate({scrollTop:position}, speed, 'swing');

      return false;

   });

});
