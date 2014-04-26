$(function () {
  $('.directions-list').hide()
  $('img').on( "click", function() {
    console.log("dope!")
    $('.directions-list').toggle()
  });
});