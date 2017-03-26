var nav_icon = document.getElementById('nav-icon');
var nav_list_item = document.getElementsByClassName('nav-list-item');
nav_icon.onclick = function () {
	this.classList.toggle("open");
	for (var i = 0; i < nav_list_item.length; i++) {
		nav_list_item[i].classList.toggle("nav-llist-item-open");
  }
}