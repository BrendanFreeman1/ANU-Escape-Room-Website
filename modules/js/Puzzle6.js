//Checks if the answer given for puzzle 6 is correct

function ValidatePuzzle6() {
  //Get the answer the player has given and make it lowercase
  var playersAnswer = document.getElementById("puzzle6Ans").value.toLowerCase();
  //If the players answer matches the text we're looking for set the puzzle6-correct texts style.display to block, ie make it show
  if (playersAnswer.includes("dead man's chest") || playersAnswer.includes("dead mans chest")) {
    document.getElementById("puzzle6-correct").style.display = "block";    
  } else { //If the answer doesnt match, call the Puzzle6Wrong function
    Puzzle6Wrong();
  }
}

//If the answer given was wrong, the puzzle6-wrong-ans text will display
//Then we'll call the HidePuzzle6 function after 4000ms to hide the text again
function Puzzle6Wrong() {
  document.getElementById("puzzle6-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(HidePuzzle6, 4000);
}

//Hide the puzzle6-wrong-ans text
function HidePuzzle6() {
  document.getElementById("puzzle6-wrong-ans").style.display = "none";
}
