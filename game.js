var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 10;
var userChose;
var computerGuess;
var choices;

	function randomchoice(){

		computerGuess = choices[Math.floor(Math.random()*26 + 1)];
	}

	document.onkeyup = function(event){
		userChose = event.key;
		randomchoice();

		console.log(userChose);

	if (userChose === computerGuess){
		wins === wins++;
		guessesLeft = 10;
		guesses = [];
		console.log(wins)
	}

	else {
		guessesLeft === guessesLeft--;

		guesses = guesses + userChose + ",";

	}

	if (guessesLeft === 0) {

		losses === losses++;
		guessesLeft = 10;
		guesses = [];
		randomchoice();
	}
	

	document.querySelector("#Wins").innerHTML = "Wins: " + wins;
	document.querySelector("#Losses").innerHTML = "Losses: " + losses;
	document.querySelector("#GuessesLeft").innerHTML = "Guesses Left: " + guessesLeft
	document.querySelector("#Guesses").innerHTML = "Guesses: " + guesses

 }