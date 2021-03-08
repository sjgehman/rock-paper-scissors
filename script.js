//initializes scores for player and computer
let playerScore = 0;
let computerScore = 0;

//ends game at 5 points and calls game function
while (playerScore < 5 && computerScore < 5) {
	game();
}


function game () {

	//accept player input and converts to lower case
	let player_choice = (prompt("Please input Rock, Paper, or Scissors")).toLowerCase();

	//verifies the player did not type something other than rock, paper, or scissors
		if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissors") {
			console.log("You played: " + player_choice);
		}
		else {
			console.log("Error: Please enter rock, paper, or scissors");
		}

	//function which generates a random number between 1 and 3 for computer entry
	function get_random(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		random_num = Math.floor(Math.random() * (max - min + 1) + min);
	}

	//converts random number to rock, paper, or scissors using getRandom for computer's play
	get_random(1, 3);

	if (random_num == 1) {
		computer_choice = "rock";
		console.log("Computer played: rock");
	}
	else if (random_num == 2) {
		computer_choice = "paper";
		console.log("Computer played: paper");
	}  
	else if (random_num == 3) {
		computer_choice = "scissors";
		console.log("Computer played: scissors");
	}
	else {
		console.log("Something went wrong with randomOutput");
	}

	//function which runs player input vs. computer input and selects winner
	function playRound (player_choice, computer_choice) {
		if (player_choice == computer_choice) {
			console.log("Tie! Try again.")
			return;
		}
		if (
			(player_choice == "rock" && computer_choice == "scissors") ||
			(player_choice == "scissors" && computer_choice == "paper") ||
			(player_choice == "paper" && computer_choice == "rock")
		){
			player_wins();
		}

		if (
			(computer_choice == "rock" && player_choice == "scissors") ||
			(computer_choice == "scissors" && player_choice == "paper") ||
			(computer_choice == "paper" && player_choice == "rock")
		){
			computer_wins();
		}
	}

	//runs the function to determine winner
	playRound(player_choice, computer_choice);

	//functions which report the winner and add to scores
	function computer_wins() {
		computerScore += 1;
		console.log("Computer wins this round");
	}

	function player_wins() {
		playerScore += 1;
		console.log("You beat the computer this round");
	}

	console.log("Current Score is Computer: " + computerScore + "   Player: " + playerScore);
	if (playerScore == 5) {
		console.log("You win!");
	}
	if (computerScore == 5) {
		console.log("Computer wins :(");
	}
}