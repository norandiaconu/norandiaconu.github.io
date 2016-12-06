function main() {
  $('.info').hide();
  $('.info').fadeIn(1000);
  $('.resume').hide();
  $('.button').on('click', function() {
    $(this).next().toggle();
    $(this).toggleClass('active');
  });
}
$(document).ready(main);
