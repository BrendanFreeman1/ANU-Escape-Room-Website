//------------------------Collapsible------------------------------------------------------
const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach(button => button.addEventListener("click", () => Toggle(button)));

function Toggle(button) 
{
  //Get whatever is next in the DOM
  const content = button.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none"; //Make it hidden
  } else {
    content.style.display = "block"; //Make is show
  }
}

//--------------------Randomise puzzle order-----------------------------------------------
//Set Array that keeps all of the available puzzles for the user
function SetPuzzlesArray(puzzlesArray)
{
  sessionStorage.setItem('persistentPuzzlesArray', JSON.stringify(puzzlesArray));
}

//remove from array only after puzzle is complete.

function GetRandomPuzzle(id)
{
  //Get the current 'Next' button
  let button = document.getElementById(id);
  //Get the persistent puzzles array
  let puzzlesArray = JSON.parse(sessionStorage.getItem('persistentPuzzlesArray'));

  //If all puzzles are completed, serve the last puzzle
  if(puzzlesArray.length < 1) 
  {
    button.href = `/ANU-Escape-Room-Website/modules/html/index.html#puzzle6dir`;
  } else {
    //Get a random puzzle from the array
    let index = Math.round(Math.random() * (puzzlesArray.length - 1));    
    button.href = `/ANU-Escape-Room-Website/modules/html/index.html#puzzle${puzzlesArray[index]}dir`;
    //Remove it from the array
    puzzlesArray.splice(index, 1);
    SetPuzzlesArray(puzzlesArray);
    //Disable Button so we cant accidentally run this function again before completing the next puzzle
    button.disabled = true;
  }
}

//-----------------------Puzzle Functions--------------------------------------------------
//If the correct multiple choice answer was selected, display the puzzle-correct text
function MultipleChoiceCorrect(puzzleNumber) 
{
  HideWrongAnswerText(puzzleNumber);
  document.getElementById(`${puzzleNumber}-correct`).style.display = "block";
}

//If the wrong answer was selected, display the puzzle-wrong-ans text, then hide it again after 4s
function DisplayWrongAnswerText(puzzleNumber) 
{
  document.getElementById(`${puzzleNumber}-wrong-ans`).style.display = "block";
  setTimeout(HideWrongAnswerText, 4000, puzzleNumber);
}

function HideWrongAnswerText(puzzleNumber) 
{
  document.getElementById(`${puzzleNumber}-wrong-ans`).style.display = "none";
}

//Input Puzzle
function InputPuzzle(puzzleNumber, answer) 
{
  //Get the answer the player has given and make it lowercase
  let playersAnswer = document.getElementById(`${puzzleNumber}Ans`).value.toLowerCase();
  //Remove any special characters
  playersAnswer = playersAnswer.replace(/[`'`]+/g, "");
  //If the players answer matches the text we're looking for, set the puzzle correct text to visible
  if (playersAnswer === answer) {
    document.getElementById(`${puzzleNumber}-correct`).style.display = "block";
  } else {
    //If the answer doesn't match, display the wrong answer text
    DisplayWrongAnswerText(puzzleNumber);
  }
}