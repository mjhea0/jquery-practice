// Encapsulate all the code into a function which will be called  only when
// the jQuery library and the DOM has been loaded
$(function () {

  function hideBurns () {
    $('.burns').fadeOut(1500); // 1500 means 1500 milliseconds, which is 1.5 seconds
  };
  
  // When the user clicks the element associated with the `good` class, the `hideburns()`
  // function is called
  $('.homer').click(hideBurns);  

});
