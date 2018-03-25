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
