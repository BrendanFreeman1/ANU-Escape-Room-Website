//Checks if the answer given for puzzle 4 is correct

//If the correct multiple option answer was selected, display the puzzle4-correct text
function ValidatePuzzle4() {
  document.getElementById("puzzle4-correct").style.display = "block";
}

//If the wrong answer was selected, display the puzzle4-wrong-ans text
//Then call the hidePuzzle4 function after 4000ms
function Puzzle4Wrong() {
  document.getElementById("puzzle4-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(hidePuzzle4, 4000);
}

//Hide the puzzle4-wrong-ans text
function hidePuzzle4() {
  document.getElementById("puzzle4-wrong-ans").style.display = "none";
}
