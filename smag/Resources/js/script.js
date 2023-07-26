$(document).ready(function(){

    $('ion-icon[name=menu-outline]').click(function(){
       var nav = $('.center__nav').addClass('js__mobile__nav');
       nav.slideToggle(250);
   });
    
    $('.js__header__box').waypoint(function(direction){
        if (direction == "down") {
            $('.js__nav').addClass('home__nav__sticky');
        }
        else {
            $('.js__nav').removeClass('home__nav__sticky');
        }
    });
});