$(document).ready(function() {
	$(".header-menu").click(function () {
  	$(this).toggleClass("open");
  	$(".header-nav-list").toggleClass("open");
   });

	$(".header-nav-list").on("click", function (event) {
    event.preventDefault();
    if (event.target.tagName != "A") {
    	return;
    }
    var id  = $(event.target).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 700);
  });

	var menu_selector = ".header-nav-list";
	function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    
    var jsBottomWindow = $('.javascript').offset().top + $('.javascript').height() - window.pageYOffset;
    if ( jsBottomWindow > 0 && jsBottomWindow < $(window).height()) {
    	$('#slider-line').addClass("open");
    	$('#control').addClass("open");
    }
    else {
    	$('#slider-line').removeClass("open");
    	$('#control').removeClass("open");
    }

	}
	onScroll();
	$(document).on("scroll", onScroll);

});