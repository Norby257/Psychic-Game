



	
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var playerChoice;
	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var computerChoice = choices[Math.floor(Math.random() * choices.length)];

	
	//get user choice and computer choice
	document.onkeyup = function(event) {
		var playerChoice = event.key;
		var computerChoice = choices[Math.floor(Math.random() * choices.length)];
		if (playerChoice === computerchoice) { 
			wins++; //if correct add one to wins
			guessesLeft = 9; //reset var 
			 //comp picks diff rando num
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



	



	

