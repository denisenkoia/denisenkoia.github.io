var nav = document.getElementById('nav');
var nav_icon = document.getElementById('nav-icon');
nav_icon.onclick = function () {
	this.classList.toggle("open");
	nav.classList.toggle("nav-open");
}