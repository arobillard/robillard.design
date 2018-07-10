$(document).ready(function(){
  $(".smooth-scroll a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$('.nav-label').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('nav-label-open');
  $('nav').toggleClass('nav-open');
});

$('nav a').on('click', function () {
  $(".nav-label").removeClass('nav-label-open');
  $('nav').removeClass('nav-open');
});

$(".skip-scroll").on('click', function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 500);
});

$(".client-logos a").focus(function () {
  $(this).siblings().addClass('hover-fade');
});

$(".client-logos a").focusout(function () {
  $('.client-logos a').removeClass('hover-fade');
});

$(".photo-site").focus(function () {
  $(this).parent().addClass('hovered');
});

$(".photo-site").focusout(function () {
  $(this).parent().removeClass('hovered');
});
