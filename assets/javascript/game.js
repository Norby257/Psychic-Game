console.log("we are linked");
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess;
var playerGuess;



	document.onkeyup = function(event) {
		 console.log(event);
		 var playerGuess = event.key;
		 var computerGuess = choices[Math.floor(Math.random() * choices.length)];
		 if (playerGuess === computerGuess) {
				wins++;
				guessesLeft = 9;
				var computerGuess = choices[Math.floor(Math.random() * choices.length)];
		
		 } else if(guessesLeft = 0)  {

				losses++;
				var computerGuess = choices[Math.floor(Math.random() * choices.length)];
				

			}
		
		  else {
			 guessesLeft--;
		 }
	
	}

	document.getElementById("game").innerHTML = `
	<p> Your Guesses So Far: ${playerGuess}</p>
	<p> Wins: ${wins}</p>
	<p> Losses: ${losses} </p>
	<p> Guesses Left: ${guessesLeft} </p>	
	`;

	