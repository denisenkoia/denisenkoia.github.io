var form = document.forms.signForm;

form.onsubmit = function () {
	return false;
}

form.onmousedown = function (event) {
	var target = event.target;
	if (target.className == "form_clear") {
		var parent = target.closest(".input_wrapper");
		var child = parent.querySelector(".form_input");
		child.value = "";
	}
}
