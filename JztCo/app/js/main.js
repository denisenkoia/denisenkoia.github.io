var headerMenuOpen = document.querySelector(".header-nav-menu");
var headerMenuClose = document.querySelector(".header-nav-list-close");
var headerMenuList = document.querySelector(".header-nav-list-wrapper");

headerMenuOpen.onclick = headerMenuClose.onclick = function () {
	headerMenuList.classList.toggle("header-nav-list-wrapper__open");
}






// var header = document.querySelector(".header-nav-menu");

// var test = header.contentDocument;

// console.dir(test);
// test.onclick = function () {
// 	console.log("akljsdnc");
// }





var navLink = document.querySelectorAll(".header-nav-list_link");
function navLinkHover(element) {
	return function () {
		element.closest('.header-nav-list_item').classList.toggle("header-nav-list_item__hover");
	}
};
for (var i = 0; i < navLink.length; i++) {
	navLink[i].onmouseenter = navLink[i].onmouseleave = navLinkHover(navLink[i]);
};

