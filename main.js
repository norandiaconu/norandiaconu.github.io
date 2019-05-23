function main() {
  $('#projects').fadeIn(2000);
  $("#projects").click(function(){
    $("#panel").slideToggle("slow");
  });
  var clicked = 0;
  $('.info').fadeIn(2000);
  $('.button').on('click', function() {
    if (clicked == 0) {
      setTimeout(function(){
        $('.resume').fadeToggle(200);
        $('.button').toggleClass('active');
      }, 200);
      $('.title').fadeToggle(200);
      $('.info').fadeToggle(200);
      clicked = 1;
    } else {
      setTimeout(function(){
        $('.title').fadeToggle(200);
        $('.info').fadeToggle(200);
      }, 200);
      $('.resume').fadeToggle(200);
      $('.button').toggleClass('active');
      clicked = 0;
    }
  });
}

$(document).ready(main);
