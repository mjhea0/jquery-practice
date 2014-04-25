$(function () {
    
    // Store the game `<div>` in a variable to can speed up things a bit
    var game = $('#game');
    
    // There are two "sections" in the html - the #name section and the #game secton; 
    // on page load, the #game section is hidden
    game.hide();
    
    function getName () {
      var name = $('#character').val(); // Grab the value of the `select` element
      $('.character').html(name);   // Replace the content of the `.character` element with the chosen name
    }
        
    function showGame () {
      $('#name').hide();
      game.fadeIn(500);
    }
    
    // Event triggered when the user selects a name, which calls the `getName()` and `showName()` functions
    $('#character').on('change', function () {
      getName();
      showGame();
    });

    // The event will triger on ALL elements with the `homer` class
    $('.homer').click(function () {
      // What happens if we used `$('.good').fadeOut(1000)` instead of `$(this)`?    
      console.log($(this)) // What is `$this` referring to?    
      $(this).fadeOut(1000);
    });
    
});
