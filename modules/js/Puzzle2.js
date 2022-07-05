//Checks if the answer given for puzzle 2 is correct

function ValidatePuzzle2() {
  //Get the answer the player has given and make it lowercase
  var playersAnswer = document.getElementById("puzzle2Ans").value.toLowerCase();
  //If the players answer matches the text we're looking for, set the puzzle2-correct texts style.display to block, ie make it show
  if (playersAnswer.includes("hispaniola")) {
    document.getElementById("puzzle2-correct").style.display = "block";  
  } else {//If the answer doesnt match, call the Puzzle2Wrong function
    Puzzle2Wrong();
  }
}

//If the answer given was wrong, the puzzle2-wrong-ans text will display
//Then we'll call the HidePuzzle2 function after 4000ms to hide the text again
function Puzzle2Wrong() {
  document.getElementById("puzzle2-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(HidePuzzle2, 4000);
}

//Hide the puzzle2-wrong-ans text
function HidePuzzle2() {
  document.getElementById("puzzle2-wrong-ans").style.display = "none";
}
