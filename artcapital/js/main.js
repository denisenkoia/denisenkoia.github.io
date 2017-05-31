$(window).load(function(){
	$("div.header-menu").click(function () {
     $(this).toggleClass("open");
     $("ul.header-nav-list").toggleClass("open");
   });


});