function main() {
  $('.info').fadeIn(2000);
  $('.button').fadeIn(2000);
  $('.button').on('click', function() {
    setTimeout(function(){
      $('.resume').fadeToggle(200);
      $('.button').toggleClass('active');
    }, 200);
    $('.title').fadeToggle(200);
    $('.info').fadeToggle(200);
  });
}

function toggle() {
  $('.resume').toggle();
  $('.button').toggleClass('active');
}
$(document).ready(main);
