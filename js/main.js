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

function toggleNav() {
  document.getElementById("nav").classList.toggle("nav-closed");
  document.getElementById("nav").classList.toggle("nav-open");
};

function toggleNavTog() {
  document.getElementById("nav-tog").classList.toggle("nav-labal-closed");
  document.getElementById("nav-tog").classList.toggle("nav-label-open");
};
