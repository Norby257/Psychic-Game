console.log("we are linked");
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var computerGuess;
	var playerGuess;



	document.onkeyup = function(event) {
		alert("you pressed a key");
		console.log(event.key);
		
	
	}