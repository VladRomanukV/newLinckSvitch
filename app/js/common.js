$(function(){


//About scroll
// $('.js_nav').on('click', function(e) {
//   e.preventDefault();
//
//   var about = $('#js_about').offset().top;
//
//   $('html, body').animate({
//     scrollTop:about
//   }, 500);
//
// });


/* fixsed HEADER SCROLL
=====================*/
let header = $('#js_header').height();
let nav_hed = $('#js_scroll_cont').innerHeight();

$(document).on('scroll', function() {

  let docScroll = $(this).scrollTop();

  if(docScroll > header) {
    $('#js_scroll_cont').addClass('fixsed');
    $('#js_header').css("paddingTop", nav_hed);
  } else {
    $('#js_scroll_cont').removeClass('fixsed');
    $('#js_header').removeAttr('style');
  }
  });
  /* fixsed HEADER SCROLL
  =====================*/

  /* NAV SCROLL
  ===========*/
  $('.js_nav a').on('click', function(e) {
    e.preventDefault();

    let currBlock = $(this).attr('herf'),
        currBlockOfSet = $(currBlock).offset().top;

        $('html, body').animate({
             scrollTop:currBlockOfSet
          },1000);
  });
  /* NAV SCROLL
  ===========*/

  /*MODALS
  ======*/
  $('.js_modal_btn').on('click', function(e) {
    e.preventDefault();

    $('.js-modal, #js_overle').fadeIn(500);
    $('body').append('<div class="overle" id="js_overle"></div>').addClass('open_modal');
  });

$('.js_close_modal').on('click', function(e) {
   e.preventDefault();

   $('.js-modal, #js_overle').fadeOut(500);
   $('body').removeClass('open_modal');
   $('#js_overle').remove();
});

$('body').on('click', '#js_overle', function() {
  $('.js-modal, #js_overle').fadeOut(500);
  $('body').removeClass('open_modal');
  $('#js_overle').remove();
});
/*MODALS
======*/


});
