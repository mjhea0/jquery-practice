$(function () {
  $('.directions-list').hide()
  $('img').on( "click", function() {
    console.log("d`oh!")
    $('.directions-list').toggle()
    $('#main').toggle()
  });
});