	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var computerGuess;
	var playerGuess;


	// this function is run when a user presses a key 
	document.onkeyup = function(event) {
			//computer randomly picks a letter from the array of choices
			var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	        //determine which key was pressed stored in playerchoice variable (within scope of this function)
	        var playerGuess = event.key;
	        // check if player is correct. if player is correct, add one to wins, re-set guessesLeft and make computer pick another letter.
	        if (playerGuess === computerGuess) {
	        	wins++;
	        	guessesLeft = 9;
	        	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



	        }
	        else {
	        	guessesLeft--;
	        	if (guessesLeft = 0) {
	        		losses++;
	        		guessesLeft = 9;
	        		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


	        	}
	        }
	 };

	 //display user guess, wins, losses, 
	 document.getElementById("game").innerHTML = `
	 <p> Wins: ${wins} </p>
	 <p> Losses: ${losses} </p>
	 <p> GuessesLeft: ${guessesLeft} </p>
	 `;
