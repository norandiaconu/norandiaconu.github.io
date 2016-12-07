function main() {
  $('.info').fadeIn(1000);
  $('.button').fadeIn(2000);
  $('.button').on('click', function() {
    setTimeout(function(){
      $('.resume').fadeToggle(200);
      $('.button').toggleClass('active');
    }, 200);
    $('.info').fadeToggle(200);
  });
}

function toggle() {
  $('.button').next().toggle();
  $('.button').toggleClass('active');
}
$(document).ready(main);
