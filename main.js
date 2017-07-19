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

<<<<<<< HEAD
function toggle() {
  $('.resume').toggle();
  $('.button').toggleClass('active');
}
=======
>>>>>>> 4c5b811cb1606cac2e0079fa3c1ea044b097b3c8
$(document).ready(main);
