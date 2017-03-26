//---------Slider-------------//

var sliderItem_01 = document.getElementById('sliderItem_01');
var sliderItem_02 = document.getElementById('sliderItem_02');
var sliderItem_03 = document.getElementById('sliderItem_03');
var sliderBgColor = document.getElementById('sliderBgColor');
var bottomBgColor = document.getElementById('bottomBgColor');
var sliderItemControls_01 = document.getElementById('sliderItemControls_01');
var sliderItemControls_02 = document.getElementById('sliderItemControls_02');
var sliderItemControls_03 = document.getElementById('sliderItemControls_03');
var conrolsLeft = document.getElementById('conrolsLeft');
var conrolsRight = document.getElementById('conrolsRight');

function slider (slider_item_show, slider_item_hide, slider_item_hide_01) {
  var slider_item_show_child = slider_item_show.children;
  var slider_item_hide_child = slider_item_hide.children;
  var slider_item_hide_01_child = slider_item_hide_01.children;
  var i = 0;
  var b = 0;
  var c = 0;
  var interval_hide = setInterval(function() {
    if (i < slider_item_hide_child.length) {
    slider_item_hide_child[i].style.animation = "slider_hide 2s forwards";
    i++;
    }
    else if (b < slider_item_hide_01_child.length ) {
    slider_item_hide_01_child[b].style.animation = "slider_hide 2s forwards";
    b++;
    }
    else {
      clearInterval(interval_hide);
      setTimeout(function() {
        slider_item_hide.style.visibility = "hidden";
        slider_item_hide_01.style.visibility = "hidden";
      }, 2000);
      var interval_show = setInterval(function() {
        setTimeout(function() {
          slider_item_show.style.visibility = "visible";
          if (slider_item_show == sliderItem_01) {
            sliderBgColor.style.backgroundColor = "#4bbae6";
            bottomBgColor.style.backgroundColor = "#2d3033";
            sliderItemControls_01.style.backgroundColor = "#ec8558";
            sliderItemControls_02.style.backgroundColor = "";
            sliderItemControls_03.style.backgroundColor = "";
          }
          else if (slider_item_show == sliderItem_02) {
            sliderBgColor.style.backgroundColor = "#2b2c2c";
            bottomBgColor.style.backgroundColor = "#4bbae6";
            sliderItemControls_01.style.backgroundColor = "";
            sliderItemControls_02.style.backgroundColor = "#ec8558";
            sliderItemControls_03.style.backgroundColor = "";
          }
          else if (slider_item_show == sliderItem_03) {
            sliderBgColor.style.backgroundColor = "#4bbae6";
            bottomBgColor.style.backgroundColor = "#aeaeae";
            sliderItemControls_01.style.backgroundColor = "";
            sliderItemControls_02.style.backgroundColor = "";
            sliderItemControls_03.style.backgroundColor = "#ec8558";
          }
        }, 250);
        if (c < slider_item_show_child.length) {
        slider_item_show_child[c].style.animation = "slider_show 2s forwards";
        c++;
        }
        else {
          clearInterval(interval_show);
        }
      },50);
    }
  },50);
}

slider(sliderItem_01, sliderItem_02, sliderItem_03);
var slide_02 = setTimeout(function() {
    slider(sliderItem_02, sliderItem_01, sliderItem_03);  
  }, 10000);
var slide_03 = setTimeout(function() {
    slider(sliderItem_03, sliderItem_01, sliderItem_02);  
  }, 20000);
var sliderAnim_01 = setInterval(function () {
  slider(sliderItem_01, sliderItem_02, sliderItem_03);
  setTimeout(function() {
    slider(sliderItem_02, sliderItem_01, sliderItem_03);  
  }, 10000);
  setTimeout(function() {
    slider(sliderItem_03, sliderItem_01, sliderItem_02);  
  }, 20000);
}, 30000); 

sliderItemControls_01.onclick = function () {
  clearInterval(sliderAnim_01);
  clearTimeout(slide_02);
  clearTimeout(slide_03);
  slider(sliderItem_01, sliderItem_02, sliderItem_03);
}
sliderItemControls_02.onclick = function () {
  clearInterval(sliderAnim_01);
  clearTimeout(slide_02);
  clearTimeout(slide_03);
  slider(sliderItem_02, sliderItem_01, sliderItem_03);
}
sliderItemControls_03.onclick = function () {
  clearInterval(sliderAnim_01);
  clearTimeout(slide_02);
  clearTimeout(slide_03);
  slider(sliderItem_03, sliderItem_01, sliderItem_02);
}

conrolsLeft.onclick = function () {
  clearInterval(sliderAnim_01);
  clearTimeout(slide_02);
  clearTimeout(slide_03);
  if (sliderItem_01.style.visibility == "visible") {
    slider(sliderItem_03, sliderItem_01, sliderItem_02);
  }
  else if (sliderItem_02.style.visibility == "visible") {
    slider(sliderItem_01, sliderItem_02, sliderItem_03);
  }
  else if (sliderItem_03.style.visibility == "visible") {
    slider(sliderItem_02, sliderItem_01, sliderItem_03);
  }
}
conrolsRight.onclick = function () {
  clearInterval(sliderAnim_01);
  clearTimeout(slide_02);
  clearTimeout(slide_03);
  if (sliderItem_01.style.visibility == "visible") {
    slider(sliderItem_02, sliderItem_01, sliderItem_03);
  }
  else if (sliderItem_02.style.visibility == "visible") {
    slider(sliderItem_03, sliderItem_01, sliderItem_02);
  }
  else if (sliderItem_03.style.visibility == "visible") {
    slider(sliderItem_01, sliderItem_02, sliderItem_03);
  }
}

//--------content-company---------//

function companyItemShow (item_01, item_01_01, item_02, item_02_01, item_03, item_03_01) {
  with (item_01.childNodes[1].style) {
    transform = "matrix(0.1, 0, 0, 0.1, 0, 0)";
    transitionDuration = "0.2s";
    opacity = "0";
  }
  with (item_02.childNodes[1].style) {
    transform = "matrix(0.1, 0, 0, 0.1, 0, 0)";
    transitionDuration = "0.2s";
    opacity = "0";
    transitionDelay = "0.7s";
  }
  with (item_03.childNodes[1].style) {
    transform = "matrix(0.1, 0, 0, 0.1, 0, 0)";
    transitionDuration = "0.2s";
    opacity = "0";
    transitionDelay = "1.4s";
  }
  with (item_01.style) {
    transitionProperty = "background-position";
    backgroundPosition = "0px -5850px";
    transitionDelay = "0.2s";
  }
  with (item_02.style) {
    transitionProperty = "background-position";
    backgroundPosition = "0px -5850px";
    transitionDelay = "0.9s";
  }
  with (item_03.style) {
    transitionProperty = "background-position";
    backgroundPosition = "0px -5850px";
    transitionDelay = "1.6s";
  }
  with (item_01_01.childNodes[1].style) {
    animationDelay = "0.4s";
  }
  with (item_01_01.childNodes[3].style) {
    animationDelay = "0.6s";
  }
  with (item_02_01.childNodes[1].style) {
    animationDelay = "1.1s";
  }
  with (item_02_01.childNodes[3].style) {
    animationDelay = "1.3s";
  }
  with (item_03_01.childNodes[1].style) {
    animationDelay = "1.8s";
  }
  with (item_03_01.childNodes[3].style) {
    animationDelay = "2s";
  }
  item_01_01.childNodes[1].className = "animated fadeInDown";
  item_01_01.childNodes[3].className = "animated fadeInUp";
  item_02_01.childNodes[1].className = "animated fadeInDown";
  item_02_01.childNodes[3].className = "animated fadeInUp";
  item_03_01.childNodes[1].className = "animated fadeInDown";
  item_03_01.childNodes[3].className = "animated fadeInUp";
}
function companyItemShow_01 (item, item_01) {
  with (item.childNodes[1].style) {
    transform = "matrix(0.1, 0, 0, 0.1, 0, 0)";
    transitionDuration = "0.2s";
    opacity = "0";
  }
  with (item.style) {
    transitionProperty = "background-position";
    backgroundPosition = "0px -5850px";
    transitionDelay = "0.2s";
  }
  with (item_01.childNodes[1].style) {
    animationDelay = "0.4s";
  }
  with (item_01.childNodes[3].style) {
    animationDelay = "0.6s";
  }
  item_01.childNodes[1].className = "animated fadeInDown";
  item_01.childNodes[3].className = "animated fadeInUp";
}
function companyItemHide (item, item_01) {
  with (item.childNodes[1].style) {
    transitionDuration = "";
    transform = "";
    opacity = "";
    transitionDelay = "";
  }
  with (item.style) {
    transitionProperty = "none";
    backgroundPosition = "0px 0px";
    transitionDelay = "";
  }
  item_01.childNodes[1].className = "hide";
  item_01.childNodes[3].className = "hide";
}

//--------products-company---------//
 
function productsItemShow () {
  var productsItem = document.getElementsByClassName('products-company-item');  
  for (var i = 0, d = 0, il = productsItem.length; i < il; i++) {
    for (var a = 1, c = 0; a <= 7; a++) {
      with (productsItem[i].childNodes[a].style) {
        transform = "matrix(1, 0, 0, 1, 0, 0)";
        transitionDuration = "0.5s";
        opacity = "1";
        transitionTimingFunction = "linear";
      }
      productsItem[i].childNodes[a].style.transitionDelay = c + d + "s";
      productsItem[i].childNodes[a].classList.remove("hide");
      c = c + 0.2;
      a++;
    };
    d = d + 0.3;
  };
}

function productsItemHide () {
  var productsItem = document.getElementsByClassName('products-company-item');  
  for (var i = 0, il = productsItem.length; i < il; i++) {
    for (var a = 1; a <= 7; a++) {
      with (productsItem[i].childNodes[a].style) {
        transform = "matrix(0.1, 0, 0, 0.1, 0, 0)";
        transitionDuration = "";
        transitionDelay = "";
        opacity = "0";
      }
      productsItem[i].childNodes[a].classList.add("hide");
      a++;
    };
  };
}
productsItemHide();

//--------Запуск скрипта---------//

var pis;
var pih;
var companyItem_01 = document.getElementById('companyItem_01');
var companyItem_01_01 = document.getElementById('companyItem_01_01');
var companyItem_02 = document.getElementById('companyItem_02');
var companyItem_02_01 = document.getElementById('companyItem_02_01');
var companyItem_03 = document.getElementById('companyItem_03');
var companyItem_03_01 = document.getElementById('companyItem_03_01');
var productsItem_01 = document.getElementById('productsItem_01');
var productsItem_02 = document.getElementById('productsItem_02');
var productsItem_03 = document.getElementById('productsItem_03');
var productsItem_04 = document.getElementById('productsItem_04');
var productsItem_05 = document.getElementById('productsItem_05');
var productsItem_06 = document.getElementById('productsItem_06');

window.onscroll = function() {
  var heightWindow = document.documentElement.clientHeight;
  var widthtWindow = document.documentElement.clientWidth;
  var companyItem_01_01_bottom = companyItem_01_01.getBoundingClientRect().bottom;
  var companyItem_01_top = companyItem_01.getBoundingClientRect().top;
  var companyItem_02_01_bottom = companyItem_02_01.getBoundingClientRect().bottom;
  var companyItem_02_top = companyItem_02.getBoundingClientRect().top;
  var companyItem_03_01_bottom = companyItem_03_01.getBoundingClientRect().bottom;
  var companyItem_03_top = companyItem_03.getBoundingClientRect().top;
  var companyItem_01_visible = parseInt(heightWindow - companyItem_01_top);
  var companyItem_02_visible = parseInt(heightWindow - companyItem_02_top);
  var companyItem_03_visible = parseInt(heightWindow - companyItem_03_top);
  var productsItem_01_bottom = productsItem_01.getBoundingClientRect().bottom;
  var productsItem_01_top = productsItem_01.getBoundingClientRect().top;
  var productsItem_01_visible = parseInt(heightWindow - productsItem_01_top);
  var productsItem_02_bottom = productsItem_02.getBoundingClientRect().bottom;
  var productsItem_02_top = productsItem_02.getBoundingClientRect().top;
  var productsItem_02_visible = parseInt(heightWindow - productsItem_02_top);
  var productsItem_03_bottom = productsItem_03.getBoundingClientRect().bottom;
  var productsItem_03_top = productsItem_03.getBoundingClientRect().top;
  var productsItem_03_visible = parseInt(heightWindow - productsItem_03_top);
  var productsItem_04_bottom = productsItem_04.getBoundingClientRect().bottom;
  var productsItem_04_top = productsItem_04.getBoundingClientRect().top;
  var productsItem_04_visible = parseInt(heightWindow - productsItem_04_top);
  var productsItem_05_bottom = productsItem_05.getBoundingClientRect().bottom;
  var productsItem_05_top = productsItem_05.getBoundingClientRect().top;
  var productsItem_05_visible = parseInt(heightWindow - productsItem_05_top);
  var productsItem_06_bottom = productsItem_06.getBoundingClientRect().bottom;
  var productsItem_06_top = productsItem_06.getBoundingClientRect().top;
  var productsItem_06_visible = parseInt(heightWindow - productsItem_06_top);

  function companyItem () {
    if (widthtWindow > 750) {
      if (companyItem_01_visible -50 > 0 && companyItem_01_01_bottom > 0) {
        companyItemShow(companyItem_01, companyItem_01_01, companyItem_02, companyItem_02_01, companyItem_03, companyItem_03_01);
      }
      else if (companyItem_01_01_bottom + 50 < 0) {
        companyItemHide(companyItem_01, companyItem_01_01);
        companyItemHide(companyItem_02, companyItem_02_01);
        companyItemHide(companyItem_03, companyItem_03_01);
      }
      else if (companyItem_01_visible + 50 < 0) {
        companyItemHide(companyItem_01, companyItem_01_01);
        companyItemHide(companyItem_02, companyItem_02_01);
        companyItemHide(companyItem_03, companyItem_03_01);
      }
    }
    else {
      function smCompanyItemShow (argument, argument_01, argument_visible, argument_01_bottom ) { 
        if (argument_visible -50 > 0 && argument_01_bottom > 0 ) {
          companyItemShow_01(argument, argument_01);
        }
        else if (argument_01_bottom + 75 < 0) {
          companyItemHide(argument, argument_01);
        }
        else if (argument_visible + 75 < 0) {
        companyItemHide(argument, argument_01);
        }
      }
      smCompanyItemShow(companyItem_01, companyItem_01_01, companyItem_01_visible, companyItem_01_01_bottom);
      smCompanyItemShow(companyItem_02, companyItem_02_01, companyItem_02_visible, companyItem_02_01_bottom);
      smCompanyItemShow(companyItem_03, companyItem_03_01, companyItem_03_visible, companyItem_03_01_bottom);
    }
  }
  companyItem();
  
  function productsItem () {
    if (productsItem_01_visible - 50 > 0 && productsItem_01_bottom > 0) {
      if (pis != 1) {
        productsItemShow();
        window.pis = 1;
        window.pih = 0;
        console.log("Высветил");
      }
    }
    else if (productsItem_01_visible + 100 < 0) {
      if (pih != 1) {
        productsItemHide();
        window.pis = 0;
        window.pih = 1;
        console.log("Спрятал");
      }
    }
  }  
  productsItem();
}

//--------Form---------//

var formContact = document.getElementById('formContact');
var formContactHeader = document.getElementById('formContactHeader');
var inputForm = formContact.getElementsByTagName('input');
var inputFormHeader = formContactHeader.getElementsByTagName('input');
var formContactSubmitText = document.getElementById('formContactSubmitText');
var formContactSubmitTextHeader = document.getElementById('formContactSubmitTextHeader');
var formContactSubmitClose = document.getElementById('formContactSubmitClose');
var formContactSubmitCloseHeader = document.getElementById('formContactSubmitCloseHeader');
var formContactSubmit = document.getElementById('formContactSubmit');
var formContactSubmitHeader = document.getElementById('formContactSubmitHeader');
var formAlert = document.getElementsByClassName('form-alert');
var formAlertHeader = document.getElementsByClassName('form-alert-hd');

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
inputFormHeader[0].onfocus = function() {
  inputFokus(formAlertHeader[0]);
}
inputFormHeader[1].onfocus = function() {
  inputFokus(formAlertHeader[1]);
}
inputFormHeader[2].onfocus = function() {
  inputFokus(formAlertHeader[2]);
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
inputFormHeader[0].oninput = function () {
  var text = this.value;
  if (inputFormHeader[0].value.length > 3) {
    this.style.borderColor = "green";
  }
  else {
    this.style.borderColor = "red";
  }
}
inputFormHeader[1].oninput = function () {
  var text = this.value.indexOf("@");
  if (text > 0) {
    this.style.borderColor = "green"; 
  }
  else {
    this.style.borderColor = "red";
  }
}
inputFormHeader[2].oninput = function () {
  var text = this.value;
  var regex = /[a-zA-Z]/;
  if (text.search(regex) < 0 && text.length > 5) {
    this.style.borderColor = "green"; 
  }
  else {
    this.style.borderColor = "red";
  }
}
function formSubmitHeader () {
  var ContentName = inputFormHeader[0].value.length;
  var ContentEmail = inputFormHeader[1].value.indexOf("@");
  var ContentPhone = inputFormHeader[2].value;
  var regex = /[a-zA-Z]/;
  if (ContentName > 3 && ContentEmail > 0 && ContentPhone.search(regex) < 0 && ContentPhone.length > 5) {
    with (formContactHeader.style) {
      opacity = "0";
      transitionDelay = "";
      visibility = "hidden";
    }
    with (formContactSubmitTextHeader.style) {
      opacity = "1";
      transitionDelay = "0.2s";
      visibility = "visible";
    }
  }
  else if (ContentName <= 3) {
    formAlertHeader[0].style.display = "block";
  }
  else if (ContentEmail <= 0) {
    formAlertHeader[1].style.display = "block";
  }
  else if (ContentPhone.search(regex) > 0 || ContentPhone.length <= 5) {
    formAlertHeader[2].style.display = "block";
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
formContactSubmitCloseHeader.onclick = function () {
  with (formContactHeader.style) {
    opacity = "1";
    transitionDelay = "0.2s";
    visibility = "visible";
  }
  with (formContactSubmitTextHeader.style) {
    opacity = "0";
    transitionDelay = "";
    visibility = "hidden";
  }
}