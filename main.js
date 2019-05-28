var options = ["rock", "paper", "scissors"];
var computerChoice;
var userChoice;
var choices = document.getElementsByClassName("choice");
console.log(choices);
for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
// get the comp choice
// display choices
// figure out winner
  });
}


// choices.forEach( function(chioce) {
  
// })
