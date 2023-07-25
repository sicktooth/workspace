$(document).ready(function(){
    
    
    $('ion-icon[name=menu-outline]').click(function(){
       var nav = $('.center__nav').addClass('js__mobile__nav');
       nav.slideToggle(250);
   });
});