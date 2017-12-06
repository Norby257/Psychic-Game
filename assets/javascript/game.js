console.log("we are linked");
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var computerGuess;
	var playerGuess;


	// this function runs when a user presses a key 
	//ok let's console.log the user pressing the key - if nothing is appearing then it means the code is not done.
	document.onkeyup = function(event) {
		var playerGuess = event.key;
		console.log(playerGuess);
		var computerGuess = choices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess);



		
	}

	//and then let's try displaying with the html 




///*	document.onkeyup = function(event) {
			//computer randomly picks a letter from the array of choices
	        //determine which key was the player chose, store it in playerguess variable (within scope of this function)
	      /*  var playerGuess = event.key;
	        // check if player is correct. if player is correct, add one to wins, re-set guessesLeft and make computer pick another letter.
	        if (playerGuess === computerGuess) {
	        	wins++;
	        	guessesLeft = 9;
	        	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



	        }
	        else {
	        	guessesLeft--;
	        	
	        }
	 };

	// display user guess, wins, losses, 
	 document.getElementById("game").innerHTML = `
	 <p> Wins: ${wins} </p>
	 <p> Losses: ${losses} </p>
	 <p> GuessesLeft: ${guessesLeft} </p>
	 `;

	