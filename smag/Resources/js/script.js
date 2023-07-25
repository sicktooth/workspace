$(document).ready(function(){
    
   $('.mobile__icon').click(function(){
       var nav = $('.center__nav').addClass('js__mobile__nav');
       nav.slideToggle(200);
   });
});