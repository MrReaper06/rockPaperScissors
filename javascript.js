function main() {
    let humanScore = 0;
    let computerScore = 0;

    playGame(humanScore, computerScore);
}

/*
Parameters: None
Return Value: computerChoice - "Rock" | "Paper" | "Scissor"
Description: Randomly generate a number between 0 and 1. The range
is divided into 3 parts. The computerChoice is decided based on the
random value falling into one of the range. Finally, it returns the
computerChoice.
*/
function getComputerChoice () {
    let range = Math.random();
    let computerChoice = undefined;

    if (range <= 0.33) {
        computerChoice = "Rock";
    } else if (range <= 0.66) {
        computerChoice = "Paper";
    } else {
        computerChoice =  "Scissor"
    }
    return computerChoice;
}

/*
Parameters: None
Return Value: humanChoice - "Rock" | "Paper" | "Scissor"
Description: Prompt the user for a choice and return the user's choice.
*/
function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors", "Rock");
    return humanChoice;
}

/*
Parameters: humanChoice | computerChoice
Return Value: Computer wins - 0 | Human wins - 1
Description: Make humanChoice parameter case-insensitive. Compare human
and computer choice to check who wins. Return 0 if the computer wins and
return 1 if the human wins.
*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            console.log("It's a tie.");
        } else if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock.");
            return 0
        } else {
            console.log("You win! Rock beats Scissor.")
            return 1
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Paper") {
            console.log("It's a tie.");
        } else if (computerChoice === "Scissor") {
            console.log("You lose! Scissor beats Paper.");
            return 0
        } else {
            console.log("You win! Paper beats Rock.")
            return 1
        }
    } else {
        if (computerChoice === "Scissor") {
            console.log("It's a tie.");
        } else if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissor.");
            return 0
        } else {
            console.log("You win! Scissor beats Paper.")
            return 1
        }
    }

}

/*
Parameters: humanScore | computerScore
Return Value: [humanScore, ComputerScore]
Description: Loop for 5 times. In each loop, initialize a random computerChoice
and prompt the user for the humanChoice. Call the playRound function,
increment the score and the display the score to the console.
*/
function playGame(humanScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        score = playRound(humanChoice, computerChoice);

        if (score === 0) {
            computerScore += 1;
        } else if (score === 1) {
            humanScore += 1;
        }

        console.log(`
            computerScore: ${computerScore}
            humanScore: ${humanScore}`);
    }
}

main()