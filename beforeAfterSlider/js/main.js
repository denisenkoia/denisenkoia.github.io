
$(document).ready(function() {

  for (var i = 0; i < $(".slides-img").length; i++) {
    var srcImg = $(".slides-img").eq(i).attr("src");
    $("#workingWindow").append("<div class=container-img><img class=img-before src=" + srcImg + "><img class=img-after src=" + srcImg + "></div>"); 
  };
  
  var show = $(".container-img").eq(0);
  var showIndex = 0;
  var ClipPosition = 100;
  var valueCoefficient = parseFloat($("#contolSlider").css("left")) * 0.114;
  show.css("display", "block");

  $(".slides-list-item").click(function(){
    showIndex = $(this).index();
    show.css("display", "none");
    show =  $(".container-img").eq(showIndex);
    $(".img-before").eq(showIndex).css("clip", "rect(0px, " + ClipPosition + "px, 405px, 0px)");
    
    $(".img-before").eq(showIndex).css("filter", "brightness( " + (90 - valueCoefficient) / 100 + ")" + " saturate( " + (100 - valueCoefficient) / 100 + ")");
    $(".img-after").eq(showIndex).css("filter", "brightness( " + (110 + valueCoefficient) / 100 + ")" + " saturate( " + (100 + valueCoefficient) / 100 + ")");

    show.css("display", "block");

  });
 

  var mousePressed = false;
  $("#workingWindow").mousedown(function(e){

    mousePressed = true;
    ClipPosition = (e.pageX - $(this).offset().left);

    $("#separation").css("transition-duration", "0.3s");
    $(".img-before").eq(showIndex).css("transition-duration", "0.3s");
    $(".img-before").eq(showIndex).css("clip", "rect(0px, " + (e.pageX - $(this).offset().left) + "px, 405px, 0px)");
    $("#separation").css("left", (e.pageX - $(this).offset().left) + "px");

    setTimeout(function () {
      if (mousePressed) {
        $("#separation").css("transition-duration", "");
        $(".img-before").eq(showIndex).css("transition-duration", "");
        $("#workingWindow").mousemove(function(e){
          $("#separation").css("left", (e.pageX - $(this).offset().left) + "px");
          $(".img-before").eq(showIndex).css("clip", "rect(0px, " + (e.pageX - $(this).offset().left) + "px, 405px, 0px)");
        });
      }
    }, 300);

  });


  $("#workingWindow").mouseup(function (e) {
    mousePressed = false;
    ClipPosition = (e.pageX - $(this).offset().left);
    setTimeout(function () {
      $("#workingWindow").off("mousemove");
    }, 50);
  });

  
  $("#contolSlider").mousedown(function(e){
    $("#lineControlSlider").mousemove(function(e){

      if ((e.pageX - $(this).offset().left) - ($("#contolSlider").width() / 2) < 0) {
        $("#contolSlider").css("left", "0px");
      }
      else if ( (e.pageX - $(this).offset().left) - ($("#contolSlider").width() / 2) > ($(this).width() - $("#contolSlider").width()) ) {
        $("#contolSlider").css("left", "176px");
      }
      else {
        $("#contolSlider").css("left", (e.pageX - $(this).offset().left) - ($("#contolSlider").width() / 2) + "px");
      }

      valueCoefficient = parseFloat($("#contolSlider").css("left")) * 0.114;
      $(".img-before").eq(showIndex).css("filter", "brightness( " + (90 - valueCoefficient) / 100 + ")" + " saturate( " + (100 - valueCoefficient) / 100 + ")");
      $(".img-after").eq(showIndex).css("filter", "brightness( " + (110 + valueCoefficient) / 100 + ")" + " saturate( " + (100 + valueCoefficient) / 100 + ")");

    });

  });


  $(document).mouseup(function (e) {
    $("#workingWindow").off("mousemove");
    $("#lineControlSlider").off("mousemove");
    ClipPosition = parseFloat( $("#separation").css("left") );
  });


});