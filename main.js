function main() {
  $('.info').hide();
  $('.info').fadeIn(1000);
  $('.resume').hide();
  $('.button').on('click', function() {
	$('.info').fadeToggle(200);
    $(this).next().toggle();
    $(this).toggleClass('active');
  });
}
$(document).ready(main);
