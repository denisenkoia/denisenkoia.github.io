
$(document).ready(function() {

  $(".header-menu").click(function(){
    $(this).toggleClass('open');
    $(".header-nav").toggleClass('open');
  });

	$('.slider').slick({
		dots: true,
  	infinite: true,
  	arrows: true,
  	prevArrow: "<button class='slider-btn_left fa fa-angle-left fa-3x'></button>",
  	nextArrow: "<button class='slider-btn_right fa fa-angle-right fa-3x'></button>",
  	responsive: [
    	{
      	breakpoint: 1000,
      	settings: {
      		arrows: false
      	}
    	}
    ]
	});

});