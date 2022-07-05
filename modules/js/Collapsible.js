// from w3's collapsible how to: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible

//Get the elements with the class name 'collapsible'
var collapsible = document.getElementsByClassName("collapsible");

//Go through each of the elements we got, one at a time and add a 'click' event listener with the below function
for (var i = 0; i < collapsible.length; i++) 
{ 
  collapsible[i].addEventListener("click", function () 
  { this.classList.toggle("active");
    //Get whatever is next in the html and put it in the 'content' variable
    var content = this.nextElementSibling;
    //If whatever is in 'content' has its style.display element set to block
    if (content.style.display === "block") 
    {
      content.style.display = "none"; //Set it to none, ie. make it hidden
    } else {
      content.style.display = "block"; //If not, set it to block, ie. make is show
    }
  });
}
