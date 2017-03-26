var nav = document.getElementById('nav');
var nav_icon = document.getElementById('nav-icon');
nav_icon.onclick = function () {
	this.classList.toggle("open");
	nav.classList.toggle("nav-open");
}

function timer() {
	var date_now = Date.now();
	var date_target = new Date(2017,4,30);
	var time = +date_target - date_now;
	var day = parseInt(time/(60*60*1000*24));
	var hour = parseInt(time/(60*60*1000))%24;
		if (hour < 10) {
			hour = "0" + hour;
		}
	var min = parseInt(time/(1000*60))%60;
		if (min < 10) {
			min = "0" + min;
		}
	var sec = parseInt(time/1000)%60;
		if (sec < 10) {
			sec = "0" + sec;
		}
	var day_timer = document.getElementById('day');
  day_timer.innerHTML = day + " days ";
  var hour_timer = document.getElementById('hour');
  hour_timer.innerHTML = hour + ":";
  var min_timer = document.getElementById('min');
  min_timer.innerHTML = min + ":";
  var sec_timer = document.getElementById('sec');
  sec_timer.innerHTML = sec;
}
setInterval(timer, 1000);

var more = document.getElementById('more');
more.onclick = function () {
	this.classList.toggle("button-hiden");
	var hiddenBlock = document.getElementById('hiddenBlock');
	var hiddenContent = document.getElementById('hiddenContent');
	var hiddenContentHeight = hiddenContent.offsetHeight;
	hiddenBlock.style.height = hiddenContentHeight + "px";
	hiddenBlock.style.marginTop = "-72px";
	setTimeout(function () {hiddenBlock.style.height = "auto"}, 450);
}

var elem_01 = document.getElementById('slide-01');
var elem_02 = document.getElementById('slide-02');
var elem_03 = document.getElementById('slide-03');
var elem_01_left = parseFloat(getComputedStyle(elem_01).left);
var elem_02_left = parseFloat(getComputedStyle(elem_02).left);
var elem_03_left = parseFloat(getComputedStyle(elem_03).left);
var container_width = parseFloat(getComputedStyle(document.body).width);
var elem_left_content = "15%";
var elem_left_left = "-100%";
var elem_left_right = "100%";
var slr_01 = document.getElementById('slde-radio-01');
var slr_02 = document.getElementById('slde-radio-02');
var slr_03 = document.getElementById('slde-radio-03');
slr_01.onclick = function() {
	slr_01.style.background = "#339966";
	slr_02.style.background = "#fff";
	slr_03.style.background = "#fff";
	if (elem_01_left <= container_width) {
		elem_01.style.left = elem_left_content;
		if (parseFloat(elem_03.style.left) == 15) {
			elem_03.style.left = elem_left_right;
			elem_02.style.left = elem_left_right;
			elem_02.style.visibility = "hidden";
		}
		if (parseFloat(elem_02.style.left) == 15) {
			elem_02.style.left = elem_left_right;
			elem_03.style.left = elem_left_right;
		}
	}
};
slr_02.onclick = function() {
	slr_01.style.background = "#fff";
	slr_02.style.background = "#339966";
	slr_03.style.background = "#fff";
	if (elem_02_left >= container_width) {
		elem_02.style.left = elem_left_content;
		elem_02.style.visibility = "visible";
		elem_01.style.left = elem_left_left;
		elem_03.style.left = elem_left_right;
	}
};
slr_03.onclick = function() {
	slr_01.style.background = "#fff";
	slr_02.style.background = "#fff";
	slr_03.style.background = "#339966";
	if (elem_03_left >= container_width) {
		elem_03.style.left = elem_left_content;
		if (parseFloat(elem_01.style.left) == 15) {
			elem_01.style.left = elem_left_left;
			elem_02.style.left = elem_left_left;
			elem_02.style.visibility = "hidden";
		}
		if (parseFloat(elem_02.style.left) == 15) {
			elem_01.style.left = elem_left_left;
			elem_02.style.left = elem_left_left;
		}
	}
};

var cost_sum = document.getElementById('cost_sum');
var select_1 = document.getElementById('select_01');
var select_2 = document.getElementById('select_02');
var select_3 = document.getElementById('select_03');
select_1.onchange = function() {
	var val_01 = select_1.options[select_01.selectedIndex].value;
	var val_02 = select_2.options[select_02.selectedIndex].value;
	var val_03 = select_3.options[select_03.selectedIndex].value;
	var cost_01 = document.getElementById('cost_01').innerHTML;
	var cost_02 = document.getElementById('cost_02').innerHTML;
	var cost_03 = document.getElementById('cost_03').innerHTML;
	var total_01 = document.getElementById('total_01');
	var total_02 = document.getElementById('total_02');
	var total_03 = document.getElementById('total_03');
	var total_01_cost = cost_01 * val_01;
	var total_02_cost = cost_02 * val_02;
	var total_03_cost = cost_03 * val_03;
	total_01.innerHTML = "$" + total_01_cost;
	cost_sum.innerHTML = total_01_cost + total_02_cost + total_03_cost;
}
select_2.onchange = function() {
	var val_01 = select_1.options[select_01.selectedIndex].value;
	var val_02 = select_2.options[select_02.selectedIndex].value;
	var val_03 = select_3.options[select_03.selectedIndex].value;
	var cost_01 = document.getElementById('cost_01').innerHTML;
	var cost_02 = document.getElementById('cost_02').innerHTML;
	var cost_03 = document.getElementById('cost_03').innerHTML;
	var total_01 = document.getElementById('total_01');
	var total_02 = document.getElementById('total_02');
	var total_03 = document.getElementById('total_03');
	var total_01_cost = cost_01 * val_01;
	var total_02_cost = cost_02 * val_02;
	var total_03_cost = cost_03 * val_03;
	total_02.innerHTML = "$" + total_02_cost;
	cost_sum.innerHTML = total_01_cost + total_02_cost + total_03_cost;
}
select_3.onchange = function() {
	var val_01 = select_1.options[select_01.selectedIndex].value;
	var val_02 = select_2.options[select_02.selectedIndex].value;
	var val_03 = select_3.options[select_03.selectedIndex].value;
	var cost_01 = document.getElementById('cost_01').innerHTML;
	var cost_02 = document.getElementById('cost_02').innerHTML;
	var cost_03 = document.getElementById('cost_03').innerHTML;
	var total_01 = document.getElementById('total_01');
	var total_02 = document.getElementById('total_02');
	var total_03 = document.getElementById('total_03');
	var total_01_cost = cost_01 * val_01;
	var total_02_cost = cost_02 * val_02;
	var total_03_cost = cost_03 * val_03;
	total_03.innerHTML = "$" + total_03_cost;
	cost_sum.innerHTML = total_01_cost + total_02_cost + total_03_cost;
}

//-------Анимация---------//

function animated () {
	var animated = document.getElementsByClassName('animated');
	setTimeout(function () {
		animated[0].classList.add("zoomIn");
		animated[0].classList.remove("hide");
		animated[1].classList.add("zoomIn");
		animated[1].classList.remove("hide");
		animated[2].classList.add("zoomIn");
		animated[2].classList.remove("hide");
	}, 300);
	setTimeout(function () {
		animated[3].classList.add("fadeInUp");
		animated[3].classList.remove("hide");
	}, 800);
}
animated();

var products = document.getElementById('Products');
var about = document.getElementById('About');
var order = document.getElementById('Order');
var contact = document.getElementById('Contact');
var navItem = document.getElementsByClassName('nav-list-item');

window.onscroll = function() {
	var heightWindow = document.documentElement.clientHeight;
  var widthtWindow = document.documentElement.clientWidth;
	var animathion = document.getElementsByClassName('animathion');
	for (var i = 0; i < animathion.length; i++) {
		var top = animathion[i].getBoundingClientRect().top;
		var visible = parseInt(heightWindow - top);
		if (visible - 50 > 0) {
			animathion[i].style.animationDuration = "1s";
			animathion[i].style.animationPlayState = "running";
			animathion[i].classList.remove("hide")
		}
	}
	var topproducts = products.getBoundingClientRect().top;
	var topabout = about.getBoundingClientRect().top;
	var toporder = order.getBoundingClientRect().top;
	var topcontact = contact.getBoundingClientRect().top;
	if (topproducts < 100 && topabout > 100) {
		navItem[0].childNodes[0].style.color = "#339966";
		navItem[1].childNodes[0].style.color = "";
		navItem[2].childNodes[0].style.color = "";
		navItem[3].childNodes[0].style.color = "";
	}
	else if (topabout < 100 && toporder > 100) {
		navItem[0].childNodes[0].style.color = "";
		navItem[1].childNodes[0].style.color = "#339966";
		navItem[2].childNodes[0].style.color = "";
		navItem[3].childNodes[0].style.color = "";
	}
	else if (toporder < 100 && topcontact > 200) {
		navItem[0].childNodes[0].style.color = "";
		navItem[1].childNodes[0].style.color = "";
		navItem[2].childNodes[0].style.color = "#339966";
		navItem[3].childNodes[0].style.color = "";
	}
	else if (topcontact < 200) {
		navItem[0].childNodes[0].style.color = "";
		navItem[1].childNodes[0].style.color = "";
		navItem[2].childNodes[0].style.color = "";
		navItem[3].childNodes[0].style.color = "#339966";
	}
	else {
		navItem[0].childNodes[0].style.color = "";
		navItem[1].childNodes[0].style.color = "";
		navItem[2].childNodes[0].style.color = "";
		navItem[3].childNodes[0].style.color = "";
	}
}

//--------Прокрутка к якорю----------------//

function scrollingItem (Item) {
	nav_icon.classList.remove("open");
	nav.classList.remove("nav-open");
	var heightWindow = document.documentElement.clientHeight;
	var sy = document.body.scrollHeight;
	var top = Item.getBoundingClientRect().top;
	if (top > 0) {
		var scrolling = setInterval(
			function() {
				var sly = window.scrollY;
				var bottom = sy - heightWindow - sly;
				var top = Item.getBoundingClientRect().top;
				var step = 15;
				window.scrollBy(0,step);
				if (top < step + 80 || bottom < 15) {
					clearInterval(scrolling);
				}
			}, 1);
	}
	else if (top < 0) {
		var scrolling = setInterval(
			function() {
				var top = Item.getBoundingClientRect().top;
				var step = -15;
				window.scrollBy(0,step);
				if (top > step + 80) {
					clearInterval(scrolling);
				}
			}, 1);
	}
}