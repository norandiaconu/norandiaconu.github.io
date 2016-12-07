function main() {
  $('.resume').hide();
  $('.info').hide();
  $('.button').hide();
  $('.info').fadeIn(1000);
  $('.button').fadeIn(2000);
  $('.button').on('click', function() {
    $('.info').fadeToggle(200);
    $(this).next().toggle();
    $(this).toggleClass('active');
  });
}
$(document).ready(main);
