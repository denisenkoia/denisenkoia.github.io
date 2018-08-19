
var ul = document.querySelector(".slider");
var imgNameArr = ["person_01.png", "person_02.png"];


function greateRandomImg(direction) {
	var randomIndex = Math.round(Math.random());
	var randomImg = imgNameArr[randomIndex];
	if (direction == "next" || direction == undefined) {
		if (greateRandomImg.imgArrow[0] == greateRandomImg.imgArrow[1] && greateRandomImg.imgArrow[0] == randomImg) {
			randomImg = greateRandomImg("next");
		}
		else {
			greateRandomImg.imgArrow.unshift(randomImg);
			greateRandomImg.imgArrow.length = 3;
		}
	}
	else if (direction == "back") {
		if (greateRandomImg.imgArrow[1] == greateRandomImg.imgArrow[2] && greateRandomImg.imgArrow[1] == randomImg) {
			randomImg = greateRandomImg("back");
		}
		else {
			greateRandomImg.imgArrow.shift();
			greateRandomImg.imgArrow.push(randomImg);
		}
	}
	return randomImg;
}
greateRandomImg.imgArrow = [];


function grateBlock(direction) {
	var li = document.createElement('li');
	li.className = "slider-item";
	li.innerHTML = "<a class='slider-item-link' href='#'><img class='slider-item-img' src='img/" + greateRandomImg(direction) + "'></img></a>";
	if (direction == "next") {
		li.style.animation = "next-anim-item-01 0.7s linear both";
		ul.prepend(li);
	}
	else if (direction == "back") {
		li.style.animation = "back-anim-block-01 0.7s linear both";
		ul.append(li);
	}
	else {
		ul.prepend(li);
	}
}


for (var i = 0; i < 3; i++) {
	grateBlock();
}


btnNext.onclick = function () {
	this.disabled = true;
	grateBlock("next");
	ul.children[1].style.animation = "next-anim-item-02 0.7s linear both";
	ul.children[2].style.animation = "next-anim-item-03 0.7s linear both";
	ul.children[3].style.animation = "next-anim-item-04 0.7s linear both";
	setTimeout(function () {
		ul.children[3].remove();
		this.disabled = false;
	}.bind(this), 700);
}


btnBack.onclick = function () {
	this.disabled = true;
	grateBlock("back");
	ul.children[2].style.animation = "back-anim-block-02 0.7s linear both";
	ul.children[1].style.animation = "back-anim-block-03 0.7s linear both";
	ul.children[0].style.animation = "back-anim-block-04 0.7s linear both";
	setTimeout(function () {
		ul.children[0].remove();
		this.disabled = false;
	}.bind(this), 700);
}
