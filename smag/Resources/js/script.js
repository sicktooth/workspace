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
    
    $('.js__wp__vip').waypoint(function(direction){
        $('.js__wp__vip').addClass('animate__animated animate__shakeY');
    }, {offset:'50%;'});
    
    $('.js__wp__1').waypoint(function(direction){
        $('.js__wp__1').addClass('animate__animated animate__rotateIn');
    }, {offset:'50%;'});
    
    $('.js__wp__2').waypoint(function(direction){
        $('.js__wp__2').addClass('animate__animated animate__rollIn');
    }, {offset:'50%;'});
    
    $('.js__wp__3').waypoint(function(direction){
        $('.js__wp__3').addClass('animate__animated animate__rollIn');
    }, {offset:'50%;'});
    
    $('.js__wp__footer').waypoint(function(direction){
        $('.js__wp__footer').addClass('animate__animated animate__heartBeat');
    }, {offset:'80%;'});
    
    $('.js__wp__cities').waypoint(function(direction){
        $('.js__wp__city').addClass('animate__animated animate__lightSpeedInLeft');
    }, {offset:'40%;'});
});