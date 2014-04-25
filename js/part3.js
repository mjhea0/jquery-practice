// Global variable to hold the score value
var score = 0;

function getImage () {
  var theImage;

  // Create a new Image
  // 20% chance of displaying "homer", 80% of displaying "burns"

  if (Math.random() < 0.2) {
    theImage = $('<img class="homer" src="img/homer.png" />');
  } else {
    theImage = $('<img class="burns"  src="img/burns.png" />');
  }
  
  // Random positionning, which uses the fact that in the css file we set the images with "position: absolute"
  // Wait? What's absolute positioning?
  theImage.css('left', Math.random()*1000+'px');
  theImage.css('bottom',  Math.random()*300+'px');
  
  
  // The image is added to the Dom
  $('body').append(theImage);
  
  // Here we hide the image to be able to make it appear smoothly in a fade
  // Google - "jquery chaining"
  theImage.hide().fadeIn();
  
  // the image disappears after 2 seconds
  setTimeout(function () {
    theImage.fadeOut();
  }, 2000);
};


// this function calls itself after a radom delay, so that the images appear one after the other
function gameLoop () {
  getImage();
  setTimeout(gameLoop, 200 + Math.random()*500);
}


/***************************************************/  

// Why do we leave the above code out of the main function?
$(function () {
        
  // Why `$('body').on('click', 'img', function ()` instead of just $('img').click(function ()?
  // Test it out
  $('body').on('click', 'img', function () {
      $(this).remove(); // the element is removed from the html
      
      if ($(this).hasClass('homer')) {
        score -= 3;  // penalty if the user clicks homer instead of mr burns
      } else {
        score += 1;
      }
      $('#score').html(score); // append the score value to the dom
  });
  
  // starts the game!
  gameLoop();
    
});




