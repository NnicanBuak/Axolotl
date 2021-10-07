function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500)
}

$('.reviewer').hover(function () {
    $('.reviewer').removeClass('reviewer-active');
    $('.review').removeClass('review-active');

    $(this).addClass('reviewer-active');
    $($(this).attr('alt')).addClass('review-active')
});

$('.far.fa-copyright').hover(function () {
        $('.far.fa-copyright').addClass('fa-spin');
    }, function () {
        $('.far.fa-copyright').removeClass('fa-spin');
    }
);

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("active");
    }
    else{
        $('header').removeClass("active");
    }
});

var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.active').offset().top;
	var eh = $('.active').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
		$('.active div:eq(0)').show('fast', function(){
			$(this).next().show('fast', arguments.callee);
		});
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});