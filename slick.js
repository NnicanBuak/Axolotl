$(document).ready(function(){
    $('.images').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        easing: 'cubic-bezier(0.68,-0.55,0.265,1.55)',
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: true,
        waitForAnimate: false,
        asNavFor:".imagesbig",
        
    });
    $('.imagesbig').slick({
        waitForAnimate: false,
        arrows: false,
        fade: true,
        speed: 1000,
        dots: false,
        pauseOnHover: false,
        easing: 'cubic-bezier(0.68,-0.55,0.265,1.55)',
        asNavFor:".images",
    });
  });