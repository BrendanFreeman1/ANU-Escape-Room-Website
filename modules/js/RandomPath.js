//Used on the introduction page

//Get a random number between 0 and 5
let count = Math.round(Math.random()*5);

//Set the display attribute of the element with the 'id' of the random number we got, to 'block'
//The display attribute of that element will initally be none, hiding it
//Changing it to block will reveal it as well as putting it onto a new line 
function RandomPath() 
{
  document.getElementById(count).style.display = "block";
}
