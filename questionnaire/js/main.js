document.querySelector('.header-menu').onclick = function () {
	this.classList.toggle('open');
	document.querySelector('.nav-list').classList.toggle('open');
};



var control = document.getElementById('control');
var slider = document.getElementById('slider');
var sliderLine = document.getElementById('slider-line');

(function () { // slider

	var positionCoefficient = 0.65;
	var coordLeft = 0; 

	function sliderLoad () {
		coordLeft = slider.offsetWidth * positionCoefficient;
		control.style.left = coordLeft + "px";
		sliderLine.style.clip = "rect(0px " + coordLeft + "px 14px 0px)";
	}

	function move(event) {
		var sliderCoord = slider.getBoundingClientRect();
		coordLeft = event.clientX - sliderCoord.left;
		if (coordLeft < 0) {
			coordLeft = 0;
		}
		else if (coordLeft > slider.offsetWidth) {
			coordLeft = slider.offsetWidth;
		}
		control.style.left = coordLeft + "px";
		sliderLine.style.clip = "rect(0px " + coordLeft + "px 14px 0px)";
		positionCoefficient = coordLeft / slider.offsetWidth;
	};

	sliderLoad();

	control.onmousedown = function () {
		document.addEventListener("mousemove", move);
	};

	document.onmouseup = function () {
		document.removeEventListener("mousemove", move);
	};

	window.onresize = sliderLoad;

})();



var link = document.querySelectorAll('.nav-linck');
var pesonal = document.querySelector('.personal');
var skills = document.querySelector('.skills');
var javascript = document.querySelector('.javascript');
var comments = document.querySelector('.comments');

(function () { // добовление класса ссылкам
	
	var showLink = link[0];
	showLink.classList.add("open");

	function addClassLink(elem) {
		if ( elem.classList.contains("open") ) {
			return;
		}
		showLink.classList.remove("open");
		elem.classList.add("open");
		showLink = elem;
	}

	function coordPage() {
		var pesonalCoord = pesonal.getBoundingClientRect().top;
		var skillsCoord = skills.getBoundingClientRect().top;
		var javascriptCoord = javascript.getBoundingClientRect().top;
		var commentsCoord = comments.getBoundingClientRect().top;

		if (pesonalCoord < 100 && skillsCoord > 100) {
			addClassLink(link[0]);
		}
		if (skillsCoord < 100 && javascriptCoord > 100) {
			addClassLink(link[1]);
		}
		if (javascriptCoord < 100 && commentsCoord > 100) {
			addClassLink(link[2]);
		}
		if (commentsCoord < 100) {
			addClassLink(link[3]);
		}
	};

	coordPage();

	window.onscroll = coordPage;

})();

function scroll(elem) { // scroll 
	return function () {
		if (elem.getBoundingClientRect().top > 100) {
			var interval = setInterval(function () {
				var scrollPage = document.body.scrollHeight - document.body.scrollTop - window.innerHeight;
				window.scrollBy(0, 20);
				if (elem.getBoundingClientRect().top < 100 || scrollPage <= 0) {
					clearInterval(interval);
				}
			}, 10)
		}
		else {
			var interval = setInterval(function () {
				window.scrollBy(0, -20);
				if (elem.getBoundingClientRect().top > 100) {
					clearInterval(interval);
				}
			}, 10)
		}
	}	
};

link[0].onclick = scroll(pesonal);
link[1].onclick = scroll(skills);
link[2].onclick = scroll(javascript);
link[3].onclick = scroll(comments);