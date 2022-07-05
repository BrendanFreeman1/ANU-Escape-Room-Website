//Checks if the answer given for puzzle 1 is correct

//If the correct multiple choice answer was selected, display the puzzle1-correct text
function ValidatePuzzle1() {
  document.getElementById("puzzle1-correct").style.display = "block";
}

//If the wrong answer was selected, display the puzzle1-wrong-ans text
//Then call the hidePuzzle1 function after 4000ms
function Puzzle1Wrong() {
  document.getElementById("puzzle1-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(hidePuzzle1, 4000);
}

//Hide the puzzle1-wrong-ans text
function hidePuzzle1() {
  document.getElementById("puzzle1-wrong-ans").style.display = "none";
}
