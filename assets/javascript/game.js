
//global vars 
console.log("we are linked");
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess;
var playerGuess;



	document.onkeyup = function(event) {
		 console.log(event);
		 playerGuess = event.key;
		 computerGuess = choices[Math.floor(Math.random() * choices.length)];
		 if (playerGuess === computerGuess) {
				wins++;
				guessesLeft = 9;
				 computerGuess = choices[Math.floor(Math.random() * choices.length)];
	
		
		   } else {
			 guessesLeft--;
				for (guessesLeft = 9; guessesLeft > 0; guessesLeft--) {
					guessesLeft--;	
						if (guessesLeft == 0);
					losses++;
					computerGuess = choices[Math.floor(Math.random() * choices.length)];					
			 }
			 
		 }
	
	}

	document.getElementById("game").HTML = `
	<p> Your Guesses So Far: ${playerGuess}</p>
	<p> Wins: ${wins}</p>
	<p> Losses: ${losses} </p>
	<p> Guesses Left: ${guessesLeft} </p>	
	`;