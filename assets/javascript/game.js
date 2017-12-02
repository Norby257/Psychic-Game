/* variables I need:
playerChoice // is onkeyup
computerChoice  //output of random function on Choices array
Choices array of letters from A to Z
Wins number 
Loses number 
Guesses Left  == guesses - numGuess 
currentGuess string 
Guesss = 9 
numGuess 

win 
	if playerchoice === computerchoice
		add one to win variable -> win++

		restart game without refreshing the page 
		
lose
		if (var i = 0; i < 9; i++) 
		playerChoice !== computerChoice for all guesses
		add one to lose variable lost++
		restart game  without refershing thge page

currentguess 
	console.log(playerchoice, ,); 
		if wrong, keep going until all options exhaustd
		if right, clear input 




*/ 


// setting up variables and data structures 

		

document.onkeyup = function(event) {
	console.log(event);
	var playerChoice = event.key;
	var computerChoice = ;

	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var computerChoice = choices[Math.floor(Math.random() * choices.length)];

}