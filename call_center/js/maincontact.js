var formContact = document.getElementById('formContact');
var inputForm = document.getElementsByTagName('input');
var formContactSubmitText = document.getElementById('formContactSubmitText');
var formContactSubmitClose = document.getElementById('formContactSubmitClose');
var formContactSubmit = document.getElementById('formContactSubmit');
var formAlert = document.getElementsByClassName('form-alert');

function inputFokus (formAlert) {
  formAlert.style.display = "none";
}
inputForm[0].onfocus = function() {
  inputFokus(formAlert[0]);
}
inputForm[1].onfocus = function() {
  inputFokus(formAlert[1]);
}
inputForm[2].onfocus = function() {
  inputFokus(formAlert[2]);
}

inputForm[0].oninput = function () {
  var text = this.value;
  if (inputForm[0].value.length > 3) {
    this.style.borderColor = "green";
  }
  else {
    this.style.borderColor = "red";
  }
}
inputForm[1].oninput = function () {
  var text = this.value.indexOf("@");
  if (text > 0) {
    this.style.borderColor = "green"; 
  }
  else {
    this.style.borderColor = "red";
  }
}
inputForm[2].oninput = function () {
  var text = this.value;
  var regex = /[a-zA-Z]/;
  if (text.search(regex) < 0 && text.length > 5) {
    this.style.borderColor = "green"; 
  }
  else {
    this.style.borderColor = "red";
  }
}

function formSubmit () {
  var ContentName = inputForm[0].value.length;
  var ContentEmail = inputForm[1].value.indexOf("@");
  var ContentPhone = inputForm[2].value;
  var regex = /[a-zA-Z]/;
  if (ContentName > 3 && ContentEmail > 0 && ContentPhone.search(regex) < 0 && ContentPhone.length > 5) {
    with (formContact.style) {
      opacity = "0";
      transitionDelay = "";
      visibility = "hidden";
    }
    with (formContactSubmitText.style) {
      opacity = "1";
      transitionDelay = "0.2s";
      visibility = "visible";
    }
  }
  else if (ContentName <= 3) {
    formAlert[0].style.display = "block";
  }
  else if (ContentEmail <= 0) {
    formAlert[1].style.display = "block";
  }
  else if (ContentPhone.search(regex) > 0 || ContentPhone.length <= 5) {
    formAlert[2].style.display = "block";
  }
}
formContactSubmitClose.onclick = function () {
  with (formContact.style) {
    opacity = "1";
    transitionDelay = "0.2s";
    visibility = "visible";
  }
  with (formContactSubmitText.style) {
    opacity = "0";
    transitionDelay = "";
    visibility = "hidden";
  }
}