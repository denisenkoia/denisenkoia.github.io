var session = document.getElementsByClassName('session');
var sessionWrapper = document.getElementsByClassName('session-wrapper');
var sessionArrow = document.getElementsByClassName('block-content-date-arrow');
var show = session[0];
var showWrapper = sessionWrapper[0].clientHeight;

function hideblock(item, item_01) {
	showblock = item;
	showblockHeight = item_01.clientHeight;
	if (showblock.style.height == "0px") {
		if (showblock != show) {
			show.style.height = showWrapper + "px";
			setTimeout(function() {
				show.style.height = "0px";
			}, 10);
			showblock.style.height = showblockHeight + "px";
			setTimeout(function() {
				showblock.style.height = "auto";
			}, 250);
			setTimeout(function () {
				show = showblock;
				showWrapper = showblockHeight;
			}, 300)
		}
		else {
			showblock.style.height = showblockHeight + "px";
			setTimeout(function() {
				showblock.style.height = "auto";
			}, 250);
			setTimeout(function () {
				show = showblock;
				showWrapper = showblockHeight;
			}, 300)
		}
	}
	else {
		showblock.style.height = showblockHeight + "px";
		setTimeout(function() {
			showblock.style.height = "0px";
		}, 10);
	}
}

function sessionScroll (item) {
	var heightWindow = document.documentElement.clientHeight;
	var widthtWindow = document.documentElement.clientWidth;
	var sy = document.body.scrollHeight;
	var top = item.getBoundingClientRect().top;
	if (widthtWindow >= 768) {
		if (top > 35) {
		var scrolling = setInterval(
			function() {
				var sly = window.scrollY;
				var bottom = sy - heightWindow - sly;
				var top = item.getBoundingClientRect().top;
				var step = 15;
				window.scrollBy(0,step);
				if (top < step + 20 || bottom < 15) {
					clearInterval(scrolling);
					var topElement = top + pageYOffset - 33;
					scrollTo(0,topElement);
				}
			}, 1);
		}
	 	else if (top < 0) {
		var scrolling = setInterval(
			function() {
				var top = item.getBoundingClientRect().top;
				var step = -15;
				window.scrollBy(0,step);
				if (top > step) {
					clearInterval(scrolling);
					var topElement = top + pageYOffset - 3;
					scrollTo(0,topElement);
				}
			}, 1);
	 	}
	}
	else {
		if (top > 25) {
		var scrolling = setInterval(
			function() {
				var sly = window.scrollY;
				var bottom = sy - heightWindow - sly;
				var top = item.getBoundingClientRect().top;
				var step = 15;
				window.scrollBy(0,step);
				if (top < step + 22 || bottom < 15) {
					clearInterval(scrolling);
					var topElement = top + pageYOffset - 23;
					scrollTo(0,topElement);
				}
			}, 1);
		}
	 	else if (top < 0) {
		var scrolling = setInterval(
			function() {
				var top = item.getBoundingClientRect().top;
				var step = -15;
				window.scrollBy(0,step);
				if (top > step - 10) {
					clearInterval(scrolling);
					var topElement = top + pageYOffset + 7;
					scrollTo(0,topElement);
				}
			}, 1);
	 	}
	}
}

sessionArrow[0].onclick = function () {
	this.classList.toggle("arrow-open");
	sessionArrow[1].classList.remove("arrow-open");
	sessionArrow[2].classList.remove("arrow-open");
	sessionArrow[3].classList.remove("arrow-open");
	hideblock(session[0], sessionWrapper[0]);
	setTimeout(function() {
		sessionScroll(sessionArrow[0]);
	}, 250);
}
sessionArrow[1].onclick = function () {
	this.classList.toggle("arrow-open");
	sessionArrow[0].classList.remove("arrow-open");
	sessionArrow[2].classList.remove("arrow-open");
	sessionArrow[3].classList.remove("arrow-open");
	hideblock(session[1], sessionWrapper[1]);
	setTimeout(function() {
		sessionScroll(sessionArrow[1]);
	}, 250);
}
sessionArrow[2].onclick = function () {
	this.classList.toggle("arrow-open");
	sessionArrow[0].classList.remove("arrow-open");
	sessionArrow[1].classList.remove("arrow-open");
	sessionArrow[3].classList.remove("arrow-open");
	hideblock(session[2], sessionWrapper[2]);
	setTimeout(function() {
		sessionScroll(sessionArrow[2]);
	}, 250);
}
sessionArrow[3].onclick = function () {
	this.classList.toggle("arrow-open");
	sessionArrow[0].classList.remove("arrow-open");
	sessionArrow[1].classList.remove("arrow-open");
	sessionArrow[2].classList.remove("arrow-open");
	hideblock(session[3], sessionWrapper[3]);
	setTimeout(function() {
		sessionScroll(sessionArrow[3]);
	}, 250);
}

function linkScrollSession00() {
 if (session[0].style.height != "0px") {
 	 sessionScroll(sessionArrow[0]);
 }
 else {
 	sessionArrow[0].click();
 }
}
function linkScrollSession01() {
 if (session[1].style.height != "0px") {
 	 sessionScroll(sessionArrow[1]);
 }
 else {
 	sessionArrow[1].click();
 }
}
function linkScrollSession02() {
 if (session[2].style.height != "0px") {
 	 sessionScroll(sessionArrow[2]);
 }
 else {
 	sessionArrow[2].click();
 }
}
function linkScrollSession03() {
 if (session[3].style.height != "0px") {
 	 sessionScroll(sessionArrow[3]);
 }
 else {
 	sessionArrow[3].click();
 }
}

var description = document.getElementsByClassName('description-film');
var register = document.getElementsByClassName('register-contact');

function registerForm(item, item_01) {
	item.classList.toggle("register-contact-open");
	item_01.classList.toggle("description-film-close");
}

var poster = document.getElementsByClassName('poster');
var play = document.getElementsByClassName('play');
var playHover = document.getElementsByClassName('play-hover');
var treilervideo = document.getElementsByClassName('treiler-video');
var treiler = document.getElementsByClassName('treiler');

for (var i = 0; i < playHover.length; i++) {
	playHover[i].onclick = function () {
		var parent = this.parentNode;
		var name = parent.getAttribute('name')
		var frame = parent.getElementsByTagName('iframe');
		var img = parent.getElementsByTagName('img');
		for (var i = 0; i < img.length; ++i) {
			img[i].style.opacity = "0";
		}
		with (frame[0].style) {
    	opacity = "1";
    	zIndex = "3";
    }
		if (name === "tr_01") {
			frame[0].src = "https://www.youtube.com/embed/OHEbpS_aupE" + "?&autoplay=1";
		}
		else if (name === "tr_02") {
			frame[0].src = "https://www.youtube.com/embed/3z4eQfHLG0A" + "?&autoplay=1";
		}
		else if (name === "tr_03") {
			frame[0].src = "https://www.youtube.com/embed/kx5Ih4qPgcc" + "?&autoplay=1";
		}
		else if (name === "tr_04") {
			frame[0].src = "https://www.youtube.com/embed/u_jE7-6Uv7E" + "?&autoplay=1";
		}
		else if (name === "tr_05") {
			frame[0].src = "https://www.youtube.com/embed/-5iUwL4ajYg" + "?&autoplay=1";
		}
		else if (name === "tr_06") {
			frame[0].src = "https://www.youtube.com/embed/gpDNzO113k4" + "?&autoplay=1";
		}
		else if (name === "tr_07") {
			frame[0].src = "https://www.youtube.com/embed/uywyOLBZ9q8" + "?&autoplay=1";
		}
		else if (name === "tr_08") {
			frame[0].src = "https://www.youtube.com/embed/IBMUiixejyg" + "?&autoplay=1";
		}
	}
}