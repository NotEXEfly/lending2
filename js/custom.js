$(document).ready(function() {
  //-------------------Progress bar------------
  var spanElements = $(".per-funded");
  var barsProgress = $(".progress");
  for (var i = 0; i < spanElements.length; i++) {
    barsProgress[i].style.width = parseInt(spanElements[i].innerHTML) + '%';
  }
  //-------------------------------------------

  //--------------------menu-----------------
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });

  $(window).resize(function(){
    //Бургер
    if ( $(window).width() > 991) {     
      $('nav ul').removeAttr('style');
    }
  });
  //--------------------------------------------

  //--------------------Tabs--------------------
  $(".tab-item").not(":first").hide();
  $(".sect-2 .tab").click(function() {
    $(".sect-2 .tab .circle-tab").removeClass("active-circle").eq($(this).index()).addClass("active-circle");
    $(".sect-2 .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn(800)
  }).eq(0).addClass("active");

  //line
  $('.tabs').click(LineRun);
  $(window).resize(LineRun);

  function LineRun(){
    var docW = document.body.clientWidth;
    var activeElement = document.querySelector(".sect-2 .active");
    var acElPosition = $(".active").position();
    var line = document.querySelector(".active-line");
    var container = document.querySelector(".sect-2");
    var noParrentMargin = (docW - container.offsetWidth) / 2;
    var widthActiveElem = activeElement.offsetWidth;
    var finalPositionLine = acElPosition.left - noParrentMargin;
    // line width
    line.style.width = widthActiveElem + "px";
    // line position
    line.style.transform = 'translateX('+ finalPositionLine +'px)'; 
  }
  // ---------------------------------------------
});