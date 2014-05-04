// We cleaned up the code from Part 3
// What's different?

/***************************************************/

// global variables
var homerImg = 'img/homer.png';
var burnsImg = 'img/burns.png';

var imgWidth = 150
var imgHeight = 50

var homerProbability          = 0.2;
var appearanceDuration        = 2000;
var averageDelayBetweenImages = 400;

var score = 0;
var finalScore;

var hitPoints = 1
var penaltyPoints = -3

/***************************************************/  

function appearDisapear (theImage) {
  theImage.hide().fadeIn();
  
  setTimeout(function () {
    theImage.fadeOut(500, function () {
      // Why are we removing `theImage`? What happens if you don't?
      theImage.remove();
    });
  }, appearanceDuration);
};

function randomPosition (theImage) {

  var left = theImage.css('left', Math.random()*1000+'px');
  var bottom = theImage.css('bottom',  Math.random()*300+'px');

};

function generateImage () {

  if (Math.random() < homerProbability) {
    theImage = $('<img class="homer" src="img/homer.png">');
  } else {
    theImage = $('<img class="burns" src="img/burns.png">');
  }
  return theImage
};

function getImage () {
  var theImage = generateImage();
  $('body').append(theImage);
  randomPosition(theImage);
  appearDisapear(theImage);
};

function gameLoop () {
  getImage();
  setTimeout(gameLoop, 2 * Math.random()*averageDelayBetweenImages);
};

function imgClicked () {
  console.log($(this))
  $(this).remove(); // Do you understand $(this) yet?
  if ($(this).hasClass('homer')) {
    score += penaltyPoints;
    dohSound()
    $('.doh').show()
  } else {
    score += hitPoints;
    burnsSound()
    $('.doh').hide()
  }
  finalScore.html(score);
};

function dohSound () {
  $('#doh-sound')[0].volume = 0.5;
  $('#doh-sound')[0].load();
  $('#doh-sound')[0].play();
}

function burnsSound () {
  $('#burns-sound')[0].volume = 1;
  $('#burns-sound')[0].load();
  $('#burns-sound')[0].play();
}

/***************************************************/  

$(function () {
    
  finalScore = $('#score');
  $('.doh').hide()
  
  $('body').on('click', '.homer, .burns', imgClicked);
  
  // Remove this code and see what happens
  $('body').on('mousedown', '.homer, .burns', function (e) {
    e.preventDefault(); // preventDefault?
  });
  
  gameLoop();
    
});




