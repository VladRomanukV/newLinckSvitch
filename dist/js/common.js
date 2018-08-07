$(function(){

$('.js_btn').on('click', function(e) {
  e.preventDefault();
});

$('.js_nav').on('click', function(e) {
  e.preventDefault();

  var about = $('#js_about').offset().top;

  $('html, body').animate({
    scrollTop:about
  }, 500);

});

});
