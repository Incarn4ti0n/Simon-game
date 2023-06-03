var mainArray = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var level = 0;
started = false;

$(document).keydown(function()
{
  if(!started) {
  nextSequence();
  started = true ;
  }
})
$(".btn").click(function() {
  var button = $(this).attr("id");
  userPattern.push(button);
  
  playSound(button);
  animateClick(button);
  checkAnswer(userPattern.length -1);

})



function nextSequence () {

 
  userPattern = [];
  level++;
  
  

  $("#level-title").text("level " + level)

  var randomNumber = Math.floor(Math.random() *4);
  randomColour = mainArray[randomNumber];
  gamePattern.push(randomColour);

 $("#"+ randomColour).fadeOut(200).fadeIn(200);
 playSound(randomColour);
 


}

function checkAnswer(currentLevel)
{
  
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
  console.log("success");
  if (userPattern.length === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
  }
  else
  {
   playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function()  {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game Over, press a key to start");
    restart();
  }

}

function playSound(name) {
  audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animateClick(button)
{
   $("#" + button).addClass("pressed");
   setTimeout(function() {
    $("#" + button).removeClass("pressed");
   }, 100);
}
function restart ()
{
  gamePattern = [];
  level = 0;
  started = false;
}