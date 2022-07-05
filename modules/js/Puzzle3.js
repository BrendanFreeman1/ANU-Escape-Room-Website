//Checks if the answer given for puzzle 3 is correct

//If the correct multiple option answer was selected, display the puzzle3-correct text
function ValidatePuzzle3() {
  document.getElementById("puzzle3-correct").style.display = "block";
}

//If the wrong answer was selected, display the puzzle3-wrong-ans text
//Then call the hidePuzzle3 function after 4000ms
function Puzzle3Wrong() {
  document.getElementById("puzzle3-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(hidePuzzle3, 4000);
}

//Hide the puzzle3-wrong-ans text
function hidePuzzle3() {
  document.getElementById("puzzle3-wrong-ans").style.display = "none";
}
