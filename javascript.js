console.log("Hello World")

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
