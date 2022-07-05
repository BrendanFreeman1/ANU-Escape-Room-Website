//Checks if the answer given for puzzle 5 is correct

//If the correct multiple choice answer was selected, display the puzzle5-correct text
function ValidatePuzzle5() {
  document.getElementById("puzzle5-correct").style.display = "block";
}

//If the wrong answer was selected, display the puzzle5-wrong-ans text
//Then call the hidePuzzle5 function after 4000ms
function Puzzle5Wrong() {
  document.getElementById("puzzle5-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(hidePuzzle5, 4000);
}

//Hide the puzzle5-wrong-ans text
function hidePuzzle5() {
  document.getElementById("puzzle5-wrong-ans").style.display = "none";
}
