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
		restart game  without refershing the page

currentguess 
	console.log(playerchoice, ,); 
		if wrong, keep going until all options exhaustd
		if right, clear input 




*/ 


// setting up variables and data structures 
//moving some var to global vars 
//fixed indentation
	
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	// var playerChoice = event.key;
	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var computerChoice = choices[Math.floor(Math.random() * choices.length)];

	
	//get user choice and computer choice
	document.onkeyup = function(event) {
		console.log(event);
		var playerChoice = event.key;

		// guessesLeft--;
		
		if (playerChoice === computerchoice) { 
			wins++; //if correct add one to wins
			guessesLeft = 9; //reset var 
			var computerChoice = choices[Math.floor(Math.random() * choices.length)]; //comp picks diff rando num
		}
		else if (playerChoice != computerchoice) {
			
				guessesLeft--;
		}
		losses++ //if all choices are wrong, add one to losses 
		guessesLeft = 9;
		var computerChoice = choices[Math.floor(Math.random() * choices.length)];
	}


		//display user choices
	
	document.getElementById("game").innerHTML = `
		<p> Your Guesses So Far: ${playerChoice} </p>
		<p> Wins: ${wins} </p>
		<p> losses ${losses} </p>
		`;



	// if (playerChoice === computerChoice) {
	// 	win++; //add one to wins
	// 	guessesLeft = 9; //re-set guesses left 
	// 	computerchoice = choices[Math.floo(Math.random() * choices.length)]; // computer picks a new rando num
	// }	var computerChoice = choices[Math.floor(Math.random() * choices.length)];


	



	

